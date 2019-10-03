declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      PORT: string;
      NODE_ENV: string;

      DB_USER: string;
      DB_PASS: string;
      DB_NAME: string;
      DB_HOST: string;

      APOLLO_ENGINE_PATH: string;
    }
  }
}

export {};
