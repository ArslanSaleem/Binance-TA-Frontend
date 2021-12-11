if [ -x "$(command -v docker)" ]; then
    cd src
    docker build -t binance-ta .
    cd ..
    protoc src/protos/ticker.proto --js_out=import_style=commonjs:./ --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./
    npm run build
    npm install -g serve
    
else
    echo "Install docker"
fi



