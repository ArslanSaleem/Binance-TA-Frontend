# Binance-TA-Frontend 

This repository contains frontend to plot the forecast on live binance data.

## Dependencies
1. GRPC server [Binance-TA](https://github.com/ArslanSaleem/Binance-TA)
2. Envoy docker- docker file already placed in src/Dockerfile
3. GRPC
4. Docker

## Start GRPC server from Binance-TA
Follow the instructions to start grpc server.

## Start envoy docker

To build docker image run the below command inisde /src directory.
### `docker build -t binance-ta .`

To start the docker container
### `docker run -d -p 8080:8080 -p 9901:9901 -v "$(pwd)"/envoy.yaml:/etc/envoy/envoy.yaml binance-ta`

To test that the enovy proxy has started successfully hit localhost:9901 in the browser. You will see the envoy proxy admin page and then you can click on clusters to check whether your cluster is set up or not.

## Start frontend application

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
