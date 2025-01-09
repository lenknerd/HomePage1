#!/bin/bash
# Run the application

# Four workers. Listen externally
sudo env "PATH=$PATH" gunicorn -w 4 -b 0.0.0.0:80  'app:create_app()'
