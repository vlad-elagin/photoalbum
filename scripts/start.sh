NODE_ENV=production yarn run server:build;
NODE_ENV=production rollup -c ./client/rollup.config.js;
cp ./client/public/bootstrap.min.css ./build/public/styles/
cp ./client/public/index.html ./build/public/
yarn run server:start;