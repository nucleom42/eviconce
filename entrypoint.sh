#!/bin/bash
set -e

# Run initialization and migrations
bundle exec rubee db:init
bundle exec rubee db:run:all

# Then run the main command (rubee start)
exec "$@"
