#!/bin/bash
set -e

# Wait for DB to be ready (even with healthchecks, Postgres can take a second)
sleep 2 

# If db:init needs the environment, make sure rubee loads it
bundle exec rubee db init
bundle exec rubee db run:all

exec "$@"
