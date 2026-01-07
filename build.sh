#!/bin/bash
set -o errexit

# Build frontend
cd farming-frontend
npm install
npm run build
cd ..

# Run Django migrations
cd server
pip install -r requirements.txt
python manage.py collectstatic --noinput
python manage.py migrate
cd ..
