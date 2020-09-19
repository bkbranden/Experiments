# Fetching API Endpoints Experiment

This document holds information on the notes and patterns on experimenting on fetching API endpoints.
Things that this experiment hold include:
* Setting `headers` on requests
* Batch requesting
* Async DFS requests

## Miscellaneous Notes

* Typically when having Frontend and Backend in production, the frontend files are stored as bundled static files in the server or some external hosting bucket such as Amazon S3
* When serving static frontend files, a web server is necessary to serve the static files
    * This can be an external service such as Amazon S3 or can be a configured container using NGINX as the reverse proxy server that routes all the requests