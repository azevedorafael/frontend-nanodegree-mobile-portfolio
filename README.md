## Website Performance Optimization portfolio project

Project #4 for Udacity's Front-End Nanodegree

To get started, check out the repository and inspect the code.

### Getting started

#### Part 1: Optimize PageSpeed Insights score for index.html

This first part achieved a PageSpeed score higher than 90 for Mobile and Desktop.

The following performance strategy were aplied:

- Minify HTML,CSS,JS and images using Gulp tasks;
- Optimized images using Gulp tasks;
- Compress(GZIP) and cache(EXPIRES) files requested by the browser using [NGINX](http://nginx.org/en/);
- Minimize use of render blocking CSS, using inline CSS and Media Query;
- Minimize use of parser blocking JS, using `defer` and `async` in `<script>` tags.

To run Gulp tasks (Optional!):

1. Clone the repository
1. Install [NODE JS](https://nodejs.org) on your local machine
1. Install [NPM]([NODE JS](https://nodejs.org) on your local machine
1. Run in the root's repo:

  ```bash
    npm install
  ```
and once dependencies are finished installing run the main task in the gulpfile.js:

  ```bash
    npm run gulp
  ```
1. The Gulp tasks can be executed one by one (Optional!):

  ```bash
    npm run gulp 'taskName'
  ```

Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local HTTP server using [NGINX](http://nginx.org/en/)
1. Download [NGINX] (http://nginx.org/en/download.html)

  ```bash
    cd C:/
    unzip nginx-1.13.4.zip
    cd nginx-1.13.4
  ```
1. Inside the `nginx-1.13.4/conf/nginx.conf`, put the following snippet of code in the `server` session

  ```bash
    listen       8080;
    server_name  localhost;

    location / {
      root   C:/path/to/your-project-folder/frontend-nanodegree-mobile-portfolio/dist;
      index  index.html index.htm;
      expires 1d;
    }

    gzip on;
    gzip_types text/css application/javascript;
  ```
1. Start [NGINX](http://nginx.org/en/docs/windows.html)

  ```bash
    C:\nginx-1.13.4>start nginx
  ```
1. Run the tasklist command-line utility to see nginx processes

  ```bash
    C:\nginx-1.13.4>tasklist /fi "imagename eq nginx.exe"
  ```
1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to the top-level of your project directory to make your local server accessible remotely.

  ``` bash
  cd /path/to/your-project-folder
    ./ngrok http 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional:

Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

#### Part 2: Optimize Frames per Second in pizza.html

This second part achieved the performance required:

- Fix FSL(Forced Synchronous Layout) in changePizzaSizes() and updatePositions() JS functions
- Add getDomNodeArray JS function to improve iterations with forEach(), instead of using document.querySelectorAll
- Use forEach() instead of for() in changePizzaSizes and updatePositions JS functions
- The main.js make pizza.html render with a consistent frame-rate at 60fps when scrolling.
- Time to resize pizzas is less than 5 ms using the size slider on the pizza.html page
