#!/bin/sh

IMAGE_TAG=docker-hub.cynicsoft.net/homepage:docker-swarm
DOCKER_BUILDKIT=1 docker image build --tag $IMAGE_TAG .