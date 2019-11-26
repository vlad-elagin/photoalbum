import * as bodyParser from "body-parser";
import express from "express";
import path from "path";
import { Server } from "@overnightjs/core";
import { Logger } from "@overnightjs/logger";
import { GraphQLSchema } from "graphql";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-express";

import { resolvers } from "@schema/resolvers";
import { authChecker } from "@server/utils";

const { APOLLO_ENGINE_PATH } = process.env;

export default class PhotoalbumServer extends Server {
  private apolloServer: ApolloServer;

  constructor() {
    super(process.env.NODE_ENV === "development"); // setting showLogs to true
  }

  public async start(port: number = 3000): Promise<void> {
    this.initExpressApp();

    const schema: GraphQLSchema = await this.getGraphQLSchema();
    this.initApolloServer(schema);

    this.app.listen(port, () => {
      Logger.Imp("Server listening on port: " + port);
    });
  }

  private getGraphQLSchema(): Promise<GraphQLSchema> {
    return buildSchema({ resolvers, authChecker });
  }

  private initApolloServer(schema: GraphQLSchema): void {
    this.apolloServer = new ApolloServer({
      schema,
    });
    this.apolloServer.applyMiddleware({
      app: this.app,
      path: APOLLO_ENGINE_PATH,
    });
  }

  private initExpressApp(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));

    // serve static files
    this.app.get(/^(?!\/api).+/, express.static("build/public"));
    this.app.get(/^(?!\/api).+/, (req, res) => {
      res.sendFile(path.join(process.cwd() + "/build/public/index.html"));
    });
  }
}
