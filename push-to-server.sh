#!/bin/bash
cd "$(dirname "$0")"

# copy web1-f16 directory to massart.andrewringler.com overwriting previous
/usr/bin/rsync --cvs-exclude --delete -avz -e ssh . massart.andrewringler.com:/home/andrewringler_massart/massart.andrewringler.com/www/web1-f16/
