TAG_NAME=${1:-latest}
docker build -t hisp-training-mediator:"$TAG_NAME" .