rm -rf ./build
NODE_ENV=production yarn webpack -r dotenv/config --config ./webpack.config.js;
NODE_ENV=production rollup -c ./client/rollup.config.js;
cp ./client/public/bootstrap.min.css ./build/public/styles/
cp ./client/public/index.html ./build/public/
yarn run server:start;