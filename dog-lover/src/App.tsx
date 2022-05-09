import { SWRConfig } from 'swr';
import { Layout } from './components/Layout';

function App() {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) => fetch(url).then((res) => res.json()),
        dedupingInterval: 600000,
        revalidateOnFocus: false,
      }}
    >
      <Layout>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </Layout>
    </SWRConfig>
  );
}

export default App;
