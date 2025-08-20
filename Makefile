SERVICE_NAME := showcase-website

define SERVICE_FILE
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

export SERVICE_FILE

.PHONY: help init update logs

help:
	@echo "This is a production only tool. Please use bun directly in development."
	@echo ""
	@echo "Run 'sudo make init' once, and then every time you want to update the website, run 'sudo make update'."
	@echo ""
	@echo "Rules:"
	@echo " - init:   creates the service"
	@echo " - restart: restart website wthout pulling latest version"
	@echo " - update: updates and restarts"
	@echo " - logs:   opens the logs"
	@echo " - help:   displays this message"

init:
	echo "$$SERVICE_FILE" | sudo tee /etc/systemd/system/$(SERVICE_NAME).service
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
	
logs:
	sudo journalctl -xeu $(SERVICE_NAME)
