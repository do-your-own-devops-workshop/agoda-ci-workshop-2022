# Code snippet for workshop!

## Login to DockerHub
```yaml
- name: Login to GitHub Container Registry
  uses: docker/login-action@v2
  with:
    username: ${{ secrets.DOCKERHUB_USER }}
    password: ${{ secrets.DOCKERHUB_TOKEN }}
```

## Install test framework
```yaml
- run: npx playwright install chromium
```

## Checkout
```yaml
- uses: actions/checkout@v3
```

## Build and push
```yaml
- name: Build and push
  uses: docker/build-push-action@v3
  with:
    push: true
    tags: |
      encx/agoda-ci-workshop-2022:1.0.${{ github.run_id }}-alpha
```

## Setup node.js
```yaml
- name: Use Node.js 16
  uses: actions/setup-node@v3
  with:
    node-version: 16.x
```

## Install project dependencies
```yaml
- run: yarn
```

## Needs job `build` to finish first
```yaml
needs: build
```

## Run test
```yaml
- run: yarn test:e2e
```

## Test service
```yaml
services:
  our_website:
    image: encx/agoda-ci-workshop-2022:1.0.${{ github.run_id }}-alpha
    ports:
       - 3000:3000
```

## Triggered on Pull request to `main` branch only
```yaml
on:
  pull_request:
    branches: [main]
```

## Runs on ubuntu
```yaml
runs-on: ubuntu-latest
```