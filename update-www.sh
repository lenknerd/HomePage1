#!/bin/bash
# Script to do minification and processing, publish - runs gulpfile to do that. Sudo this.
# David Lenkner, 2017

# Go to where this script is
cd "$( dirname "${BASH_SOURCE[0]}" )"
# Go in one to the gulpfile directory, run it
cd Serve
gulp
