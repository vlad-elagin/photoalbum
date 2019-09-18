FROM node:10-alpine

# Create app directory
WORKDIR /usr/src/photoalbum

# Install app dependencies
COPY package.json /usr/src/photoalbum
RUN yarn

# Bundle app source
COPY . .

# # Make port accessible from outside of container
EXPOSE 3000
RUN ls /usr/src/photoalbum/node_modules/.bin
CMD [ "yarn", "run" "start" ]