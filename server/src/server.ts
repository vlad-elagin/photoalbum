import * as bodyParser from "body-parser";
import { Server } from "@overnightjs/core";
import { Logger } from "@overnightjs/logger";
import { GraphQLSchema } from "graphql";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-express";
import { ApolloEngine } from "apollo-engine";

import resolvers from "@schema/resolvers";

const { APOLLO_ENGINE_PATH, APOLLO_ENGINE_API_KEY } = process.env;

export default class PhotoalbumServer extends Server {
  private apolloServer: ApolloServer;
  private apolloEngine: ApolloEngine;

  constructor() {
    super(process.env.NODE_ENV === "development"); // setting showLogs to true
  }

  public async start(port: number): Promise<void> {
    this.initExpressApp();

    const schema: GraphQLSchema = await this.getGraphQLSchema();
    this.initApolloServer(schema);
    this.initApolloEngine();

    this.apolloEngine.listen(
      {
        port,
        expressApp: this.app,
        graphqlPaths: [APOLLO_ENGINE_PATH],
      },
      () => Logger.Imp("Server listening on port: " + port)
    );
  }

  private getGraphQLSchema(): Promise<GraphQLSchema> {
    return buildSchema({ resolvers });
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
  }

  private initApolloEngine(): void {
    this.apolloEngine = new ApolloEngine({
      apiKey: APOLLO_ENGINE_API_KEY,
    });
  }
}
