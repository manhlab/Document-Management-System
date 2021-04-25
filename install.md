## Usage

``` bash
# Clone this project
git clone https://github.com/manhlab/Document-Management-System.git

# Enter the laradock folder
cd Document-Management-System/laradock

# Copy file env-example to .env
cp env-example .env

# Build containers
docker-compose build nginx mysql phpmyadmin workspace

# Run containers
docker-compose up -d nginx mysql phpmyadmin workspace

# Enter the workspace
docker-compose exec workspace bash

chown $USER /var/run/docker.sock
sudo systemctl start docker

# Rename file env-example to .env
cp .env.example .env

# Install packages
composer install

# Generate application key
php artisan key:generate

# Migrate database & seeders
php artisan migrate:fresh --seed

sudo php artisan cache:clear

# Run the worker
php artisan queue:work
```

Open your browser and visit localhost: http://localhost
