#!/usr/bin/env bash

set -e

echo "Node $(node -v)"
echo "npm $(npm -v)"

echo
echo "Installing dependencies..."
npm install

export LIGHTHOUSE_CHROMIUM_PATH="$(pwd)/chrome-linux"

echo
echo "Downloading Chrome..."
./node_modules/chrome-launcher/scripts/download-chrome.sh

echo
echo "Building the site..."
npm run build

echo
echo "Testing the deployment..."
curl --silent https://coffee.morning.photos | grep --silent "Coffee timer" || (echo "Smoke test failed" && exit 1)
