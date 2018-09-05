#!/bin/bash

TAG=$1
docker rm -fv web_request_dicovery:$TAG

docker build -t node-web-app:$TAG -f docker/Dockerfile .