#!/bin/bash

declare ACTION=""
declare MODE=""
declare COMPOSE_FILE_PATH=""
declare UTILS_PATH=""
declare SERVICE_NAMES=()

function init_vars() {
  ACTION=$1
  MODE=$2

  COMPOSE_FILE_PATH=$(
    cd "$(dirname "${BASH_SOURCE[0]}")" || exit
    pwd -P
  )

  UTILS_PATH="${COMPOSE_FILE_PATH}/../utils"

  SERVICE_NAMES=(
    "hisp-training"
  )

  readonly ACTION
  readonly MODE
  readonly COMPOSE_FILE_PATH
  readonly UTILS_PATH
  readonly SERVICE_NAMES
}

# shellcheck disable=SC1091
function import_sources() {
  source "${UTILS_PATH}/docker-utils.sh"
  source "${UTILS_PATH}/log.sh"
}

function initialize_package() {
  local package_dev_compose_filename=""
  local compose_files=()
  
  compose_files=("$COMPOSE_FILE_PATH/docker-compose.yml")


  if [[ "${MODE}" == "dev" ]]; then
    log info "Running package in DEV mode"
    package_dev_compose_filename=""
  else
    log info "Running package in PROD mode"
  fi

  (
    docker::deploy_service "hisp-training" "${COMPOSE_FILE_PATH}" "docker-compose.yml" "$package_dev_compose_filename"
    docker::deploy_sanity "${SERVICE_NAMES[@]}" $compose_files
  ) || {
    log error "Failed to deploy package"
    exit 1
  }

    docker::deploy_config_importer "hisp-training" "$COMPOSE_FILE_PATH/importer/docker-compose.config.yml" "clickhouse-config-importer" "clickhouse"

}

function destroy_package() {
  docker::service_destroy "${SERVICE_NAMES[@]}"
}

main() {
  init_vars "$@"
  import_sources

  if [[ "${ACTION}" == "init" ]] || [[ "${ACTION}" == "up" ]]; then
    log info "Running package in Single node mode"

    initialize_package
  elif [[ "${ACTION}" == "down" ]]; then
    log info "Scaling down package"

    docker::scale_services_down "${SERVICE_NAMES[@]}"
  elif [[ "${ACTION}" == "destroy" ]]; then
    log info "Destroying package"

    destroy_package
  else
    log error "Valid options are: init, up, down, or destroy"
  fi
}

main "$@"
