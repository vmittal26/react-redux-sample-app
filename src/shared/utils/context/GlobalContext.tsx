import React from 'react';

class UserContext {
  private static INSTANCE: UserContext | null = null;

  // Disabling below to allow private constructor for Singleton
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  private isAuthenticated = false;

  setIsAuthenticated(isAuthenticated: boolean) {
    this.isAuthenticated = isAuthenticated;
  }

  getIsAuthenticated() {
    return this.isAuthenticated;
  }

  static getInstance = (): UserContext => {
    if (UserContext.INSTANCE === null) {
      return new UserContext();
    }
    return UserContext.INSTANCE;
  };
}

export interface GlobalContextType {
  userContext: UserContext;
}
export const getInitialGlobalContext = (): GlobalContextType => ({
  userContext: UserContext.getInstance()
});
export const GlobalContext = React.createContext<GlobalContextType>(
  getInitialGlobalContext()
);
