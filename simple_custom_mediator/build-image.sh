TAG_NAME=${1:-latest}
docker build -t simple-mediator:"$TAG_NAME" .