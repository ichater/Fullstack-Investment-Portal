import {
  AppRouterContext,
  AppRouterInstance,
} from "next/dist/shared/lib/app-router-context";
import { render } from "@testing-library/react";

export type AppRouterContextProviderMockProps = {
  router: Partial<AppRouterInstance>;
  children: React.ReactNode;
};

export const AppRouterContextProviderMock = ({
  router,
  children,
}: AppRouterContextProviderMockProps): React.ReactNode => {
  const mockedRouter: AppRouterInstance = {
    back: jest.fn(),
    forward: jest.fn(),
    push: jest.fn(),
    replace: jest.fn(),
    refresh: jest.fn(),
    prefetch: jest.fn(),
    ...router,
  };
  return (
    <AppRouterContext.Provider value={mockedRouter}>
      {children}
    </AppRouterContext.Provider>
  );
};

export const renderWithRouter = (children: React.ReactNode) => {
  const push = jest.fn();
  return render(
    <AppRouterContextProviderMock router={{ push }}>
      {children}
    </AppRouterContextProviderMock>
  );
};
