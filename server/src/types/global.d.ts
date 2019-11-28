declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      PORT: string | number;
      NODE_ENV: string;
      SALT: string;

      DEV_DATABASE_URL: string;

      APOLLO_ENGINE_PATH: string;
      JWT_SECRET: string;
    }
  }
}

declare module 'express-serve-static-core' {
  interface Request {
    user?: {
      id: string;
      nickname: string;
    };
  }
}

export { };
