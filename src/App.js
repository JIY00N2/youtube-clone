import {Outlet} from 'react-router-dom';
import SearchHeader from './components/SearchHeader';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { YoutubeApiProvider } from './context/YoutubeApiContext';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <SearchHeader></SearchHeader>
      {/* YoutubeApiProvider 우산 만들기 */}
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet></Outlet>
        </QueryClientProvider>
      </YoutubeApiProvider>
    </>
  );
}

export default App;
