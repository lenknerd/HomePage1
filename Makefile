SHELL := /bin/bash
# Actions for the project

run_app:
	# Some stuff I need to follow up on... the path thing, also the sudo
	# https://serverfault.com/questions/112795/how-to-run-a-server-on-port-80-as-a-normal-user-on-linux
	sudo env "PATH=$${PATH}" gunicorn -w 4 -b 0.0.0.0:80  'app:create_app()'

kill_zombies:
	for pid in $$(ps -ef | grep "gunicorn" | awk '{print $$2}'); do kill -9 $${pid}; done
