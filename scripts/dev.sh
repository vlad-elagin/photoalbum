# Clean old dist files and create new ones
rm -rf ./build;
NODE_ENV=production yarn webpack -r dotenv/config --config ./webpack.config.js;
NODE_ENV=production rollup -c ./client/rollup.config.js;
cp ./client/public/bootstrap.min.css ./build/public/styles/
cp ./client/public/index.html ./build/public/

# Run dev watchers
NODE_ENV=development yarn webpack -r dotenv/config --config ./webpack.config.js & 
NODE_ENV=development yarn nodemon -r dotenv/config -L ./build/index.js &
NODE_ENV=development yarn rollup -c ./client/rollup.config.js -w