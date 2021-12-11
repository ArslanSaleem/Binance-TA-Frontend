docker run -d -p 8080:8080 -p 9901:9901 -v "$(pwd)"/src/envoy.yaml:/etc/envoy/envoy.yaml binance-ta
serve -s build
