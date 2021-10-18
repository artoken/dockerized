#!/bin/bash 


docker-compose down
sudo rm -rf ganache_db
docker-compose up -d ganache_artoken
cd ganache
./preconfig.sh
cd ..
docker-compose build
docker-compose up -d
