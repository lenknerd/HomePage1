#!/bin/bash
# Script to sync development archive here with actual served content
# David Lenkner, 2017

cd "$( dirname "${BASH_SOURCE[0]}" )"
rsync -rvu ./Serve /var/www/lenknerd2.com/
