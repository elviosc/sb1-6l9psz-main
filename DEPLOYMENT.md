# Deployment Guide

## Building the Project

1. Build the project using:
```bash
npm run build
```

This will create a `dist` directory with the production build.

## Apache Server Setup

1. Copy the contents of the `dist` directory to your Apache web root (typically `/var/www/html/`):
```bash
cp -r dist/* /var/www/html/
```

2. Copy the Apache configuration:
```bash
sudo cp apache.conf /etc/apache2/sites-available/your-site.conf
```

3. Enable the site and required modules:
```bash
sudo a2ensite your-site
sudo a2enmod rewrite
```

4. Test and restart Apache:
```bash
sudo apache2ctl configtest
sudo systemctl restart apache2
```

## External Course Links

The following course links are preserved and will work as expected:
- https://lucianamaluf.com.br/lp1/
- https://lucianamaluf.com.br/threadstreasure-curso-hands-on-online/
- https://lucianamaluf.com.br/curso/

These links are configured to bypass the SPA routing and will redirect to the external course pages.
