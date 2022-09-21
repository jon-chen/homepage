#!/bin/sh

set -ue

WD=$(dirname $0)

# Build image
IMAGE_TAG=docker-hub.cynicsoft.net/homepage:drone-ci
DOCKER_BUILDKIT=1 docker image build --tag $IMAGE_TAG .

# Deploy
docker push $IMAGE_TAG

${WD}/../../swarm/conf/homepage-stack/homepage.deploy.sh
docker service update --force homepage-swarm_homepage