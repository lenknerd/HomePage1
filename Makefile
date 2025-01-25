SHELL := /bin/bash
# Actions for the project

run_app:
	env "PATH=$PATH" gunicorn -w 4 -b 0.0.0.0:80  'app:create_app()'


kill_gunicorns:
	for pid in $(ps -ef | grep "gunicorn" | awk '{print $2}'); do kill -9 $pid; done
