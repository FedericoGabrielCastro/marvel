import { RouteProvider } from '@routes/RouteProvider/RouteProvider';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import '@style/style.scss';

/**
 * App.
 *
 * Purpose:
 * - Render the app with all providers.
 * - https://www.framer.com/motion/
 * - https://react-hot-toast.com/
 *
 * @returns App with providers
 */
const App = () => {
  return (
    <Provider store={store}>
      <Toaster />
      <AnimatePresence>
        <RouteProvider />
      </AnimatePresence>
    </Provider>
  );
};

export default App;
