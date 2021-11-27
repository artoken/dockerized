#!/bin/bash

if [ -n "$1" ]
then

docker-compose logs ganache_artoken | head -n 28 | tail -n 26 | grep "(${1})" | awk '{print $4}'

else 
docker-compose logs ganache_artoken | head -n 28 | tail -n 26
fi
