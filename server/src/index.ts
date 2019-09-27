import { PhotoalbumServer } from "./server";

const server = new PhotoalbumServer();

console.log(process.env.PORT);

server.start(parseInt(process.env.PORT as string, 10) || 3000);
