#!/usr/bin/env bash

FILE=GeoLite2-Country.tar.gz
TMP=/tmp/$FILE
URL=http://geolite.maxmind.com/download/geoip/database/$FILE
DIR=data

#download free db
wget -O $TMP $URL
mkdir -p $DIR
tar -xf $TMP -C $DIR
rm $TMP
ls -la $DIR



