import { ReactElement, ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { SWRConfig } from 'swr';

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) => fetch(url).then((res) => res.json()),
        dedupingInterval: 0,
        revalidateOnFocus: false,
        provider: () => new Map(),
      }}
    >
      {children}
    </SWRConfig>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: Wrapper, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
