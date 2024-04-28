FROM docker.io/php:8.1-fpm
RUN docker-php-ext-install mysqli pdo pdo_mysql \
    && pecl install ds \
    && pecl install pcov \
    && docker-php-ext-enable mysqli ds pcov
