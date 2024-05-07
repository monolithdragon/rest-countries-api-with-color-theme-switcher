import '@testing-library/jest-dom/vitest';
import {
  RenderHookOptions,
  RenderOptions,
  cleanup,
  render,
  renderHook,
} from '@testing-library/react';
import React from 'react';
import { afterEach } from 'vitest';

afterEach(() => {
  cleanup();
});

function customRenderHook<TProps, TResult>(
  renderCallback: (initialProps?: TProps) => TResult,
  options: RenderHookOptions<TProps> = {},
) {
  const { initialProps, wrapper } = options;
  const result = {
    current: undefined as TResult | undefined,
    error: undefined as Error | undefined,
  };

  let pendingResult: TResult | undefined;
  let pendingError: Error | undefined;

  try {
    const { result } = renderHook(() => renderCallback(initialProps), {
      wrapper,
    });
    pendingResult = result.current;
  } catch (error) {
    pendingError = error as Error;
  }

  result.current = pendingResult;
  result.error = pendingError;

  return { result };
}

function customRender(ui: React.ReactElement, options: RenderOptions = {}) {
  return render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => children,
    ...options,
  });
}

export * from '@testing-library/react';
// override render export
export { customRenderHook as renderHook };
export { customRender as render };
