#!/bin/bash

# Checks the argument (local or ngrok)
if [ "$1" == "local" ]; then
  cp .env.local .env
  echo "✅ LOCAL environment activated."
elif [ "$1" == "ngrok" ]; then
  cp .env.ngrok .env
  echo "✅ NGROK environment activated."
else
  echo "❌ Usage: ./switch-env.sh [local|ngrok]"
  exit 1
fi

# Automatically restarts the Next.js server
echo "🔁 Automatically restarts the Next.js server"
./node_modules/.bin/next dev
