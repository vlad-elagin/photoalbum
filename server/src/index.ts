import PhotoalbumServer from "@server/server";

const server = new PhotoalbumServer();

let port = 3000;
const envPort = process.env.PORT;
if (envPort) {
  if (typeof envPort === 'string') {
    port = parseInt(envPort, 10);
  } else {
    port = envPort;
  }
}

server.start(port || 3000);
