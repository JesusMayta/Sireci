import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import { Provider } from "react-redux";
import { store } from "./store";
import 'react-toastify/dist/ReactToastify.css';

export const SireciApp = () => {
  return (
    <Provider store={store}>
      <BrowserRouter >
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
};
