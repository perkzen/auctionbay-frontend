# Makefile for building and running the Docker container

# Load environment variables from .env.docker
include .env.docker
export $(shell sed 's/=.*//' .env.docker)

# Define the default target
.DEFAULT_GOAL := run

# Build the Docker image
build:
	docker-compose build --build-arg NEXTAUTH_URL=$(NEXTAUTH_URL) \
                         --build-arg NEXT_PUBLIC_BACKEND_URL=$(NEXT_PUBLIC_BACKEND_URL) \
                         --build-arg NEXTAUTH_SECRET=$(NEXTAUTH_SECRET)

# Run the Docker container
run: build
	docker-compose up -d

# Stop the Docker container
stop:
	docker-compose down

# Rebuild and restart the Docker container
restart: stop run


.PHONY: build run stop restart
