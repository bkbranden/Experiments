# Notes on API Fetching Experiment

## Architecture Pattern

### Frontend

For getting things compiled and rendered in the frontend:

* Utilizing NGINX to serve the static files on a server
    * Made this decision to split up the domain in the Frontend and Backend to allow for experiments with CORS headers

* Bundling all of the JS files with webpack bundler which allows for ES6 modules / syntax and easily bundle all of the javascript files together

### Backend

For setting up API endpoints in the backend

* Utilizing Express Framework for quick server set up
    * Allows me to experiment with middleware and easily create routing to controllers for API endpoints