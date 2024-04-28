Use this project to create a container environment with php, mariadb (mysql) and nginx. Additionally includes an adminer container for database management and on demand containers for running phpunit tests and installing php dependencies with composer. In the future it may include on demand containers for javascript functions.

# Usage
This is a template repository. To use it you should clone it then delete the `.git` folder and then do a fresh `git init` or fork this repository and save your changes there. This repo should be a fresh starting point for a new linux/nginx/mariadb/php project. Feel free to remove the composer.json and composer.lock files if you want to start fresh and not use my initial defaults.

# Docker vs Podman
Your choice. I use podman so most of the command examples refer to podman. If you prefer docker make sure you use the appropriate docker commands. I've left the `docker-compose.yml`` file named the way docker-compose expects.

# Volume Permissions
The bitnami mariadb container runs as uid 1001 as an unpriviliged container. When running with podman, subuid and subgid mapping needs to be configured in the host operating system for your user account. This can vary from distro to distro but see this [arch wiki page](https://wiki.archlinux.org/title/Podman#Set_subuid_and_subgid). Once you have your operating system configured for rootless podman you should create the mariadb folder and set permissions with `podman unshare 1001:1001 ./mariadb`

If you prefer docker instead of podman you would set permissions for the 1001:1001 uid and group directly on the mariadb folder.

# On Demand Containers

The php and phpunit containers use the image built for fpm. If you change the folder name of this repository before running `podman-compose up -d` and building that image for the first time you may need to change the image name in the compose file.

## Use composer to install external php libraries
To install phpunit and other libraries run `podman-compose run composer update` in the project root. The docker-compose file will automatically mount the app folder which contains the project and the vendor folder.

To add a php library as a dependency add it to the composer.json or run `podman-compose run composer require <vendor>/<package`. Use `--dev` if it's not a part of the released software and is used during development (phpunit, mockery).

## Generate Composer PSR-4 Autoload file
To configure autoload you can decide on your app name and adjust the composer.json file accordingly (Replace `App`). Then generate the composer autoload file by running `podman-compose run --rm composer dump-autoload`. This generates the `app\vendor\autoload.php` file which can be required in your php files as needed.

## Run PHPUnit tests
To execute unit tests run `podman-compose run phpunit` with any appropriate options appended.

## Get an interactive php cli
To get a php command line use `podman-compose run php`

## Execute a .php file from the command line
To execute a php file at the command line use `podman-compose run php php -f <filename>` Again, the app folder will be mounted at the container so use relative paths as though you were in the app folder even though you run the command from one level above that point. Alternatively use absolute paths as if app is mounted at /app (which it is). The double php overrides the command in the docker-compose.yml file.

## A note about profile in docker-compose.yml
Note that podman-compose doesn't use profiles like docker-compose does so these containers will still try to start when you run podman-compose up -d but they have nothing to do so they exit immediately.

# Secrets
There is a secrets folder with two template files with .dist extensions. To use the secrets record your database passwords in those files and remove the .dist extension from the filename. The docker-compose.yml tries to use external secrets named `MARIADB_ROOT_PASSWORD` and `MARIADB_PASSWORD` and makes them available in the /run/secrets folder as files. It then puts the path to those files into the `MARIADB_ROOT_PASSWORD_FILE` and `MARIADB_PASSWORD_FILE` environment variables as needed per container.

To make sure these secrets are available first alter the files in `./secrets/` with your desired passwords and remove the .dist extensions. You can then create the external secrets with the following commands:
- `podman secret create MARIADB_PASSWORD ./secrets/MARIADB_PASSWORD`
- `podman secret create MARIADB_ROOT_PASSWORD ./secrets/MARIADB_ROOT_PASSWORD`

You can use whatever secret names you want but you will need to adjust the `docker-compose.yml` file accordingly.

Unfortunately podman-compose (and docker-compose) won't let you put secrets directly into environment variables so to access the `MARIADB_PASSWORD` in php you'll need to read the contents of `/run/secrets/MARIADB_PASSWORD` instead of using `getenv()`.

