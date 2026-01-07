#!/bin/bash
set -o errexit

# Install dependencies
cd server
pip install -r requirements.txt

# Run Django migrations and collect static files
python manage.py collectstatic --noinput --clear
python manage.py migrate --noinput
