declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      PORT: string;
      NODE_ENV: string;
      SALT: string;

      DEV_DATABASE_URL: string;

      APOLLO_ENGINE_PATH: string;
      JWT_SECRET: string;
    }
  }
}

export { };
