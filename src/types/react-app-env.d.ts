/// <reference types="react-scripts" />


declare namespace NodeJS {
    interface Process {
      browser: boolean;
    }
  }

declare interface NodeModule {
  hot: {
    accept(path?: string, fn: () => void, callback?: () => void): void;
  };
}