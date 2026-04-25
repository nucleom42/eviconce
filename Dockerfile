# Stage 1: Build
FROM ruby:3.4.1-slim AS builder

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev curl git
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && apt-get install -y nodejs

WORKDIR /app

# Install dependencies
COPY Betterfile Gemfile.lock ./
RUN gem install bundler && bundle install --redownload

# Copy code and build assets
COPY . .
ENV RACK_ENV=production
RUN rubee react prepare
RUN rubee react build

# Stage 2: Runtime
FROM ruby:3.4.1-slim
RUN apt-get update -qq && apt-get install -y libpq5 curl && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY --from=builder /usr/local/bundle /usr/local/bundle
COPY --from=builder /app /app

ENV RACK_ENV=production

# We remove the multiple CMDs from here and move them to docker-compose
CMD ["rubee", "start", "--port=80"]
