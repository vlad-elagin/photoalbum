import PhotoalbumServer from "@server/server";

const server = new PhotoalbumServer();

server.start(parseInt(process.env.PORT as string, 10) || 3000);
