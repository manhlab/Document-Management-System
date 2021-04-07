## Usage

``` bash
# Clone this project
git clone https://github.com/ThanhSonITNIC/qlvbdh.git

# Enter the laradock folder
cd qlvbdh/laradock

# Copy file env-example to .env
cp env-example .env

# Build containers
docker-compose build nginx mysql phpmyadmin workspace

# Run containers
docker-compose up -d nginx mysql phpmyadmin workspace

# Enter the workspace
docker-compose exec workspace bash

# Rename file env-example to .env
cp .env.example .env

# Install packages
composer install

# Generate application key
php artisan key:generate

# Migrate database & seeders
php artisan migrate:fresh --seed

# Run the worker
php artisan queue:work
```

Open your browser and visit localhost: http://localhost
