SERVICE_NAME := showcase-website
SERVICE_FILE_PATH := /etc/systemd/system/$(SERVICE_NAME).service

define SERVICE_FILE_CONTENT
[Unit]
Description=Showcase Website
After=network.target

[Service]
ExecStart=$(shell which bun) run start
WorkingDirectory=$(shell pwd)
Restart=always
RestartSec=5
User=$(shell whoami)

[Install]
WantedBy=multi-user.target
endef

export SERVICE_FILE_CONTENT

.PHONY: help init update logs delete

help:
	@echo "This is a production only tool. Please use bun directly in development."
	@echo ""
	@echo "Run 'sudo make init' once, and then every time you want to update the website, run 'sudo make update'."
	@echo ""
	@echo "Rules:"
	@echo " - init:    creates the service"
	@echo " - restart: restart website wthout pulling latest version"
	@echo " - update:  updates and restarts"
	@echo " - logs:    opens the logs"
	@echo " - delete:  undoes init"
	@echo " - help:    displays this message"

init:
	echo "$$SERVICE_FILE_CONTENT" | sudo tee $(SERVICE_FILE_PATH)
	sudo systemctl daemon-reload
	sudo systemctl enable $(SERVICE_NAME)

update:
	git fetch origin
	git reset --hard origin/main
	git pull --force origin main
	sudo systemctl stop $(SERVICE_NAME)
	bun i
	bun run build
	sudo systemctl start $(SERVICE_NAME)

restart:
	sudo systemctl restart $(SERVICE_NAME)

delete:
	sudo systemctl stop $(SERVICE_NAME)
	sudo rm -f $(SERVICE_FILE_PATH)
	sudo systemctl daemon-reload
	
logs:
	sudo journalctl -xeu $(SERVICE_NAME)
