import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import { Provider } from "react-redux";
import { store } from "./store";

export const SireciApp = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>

        {/* Estructuración = Jesus*} */}

        {/* Maquetas o vistas Hugo = Login Diego = registro Emir = homePage */}

        {/* Estructuración backend (Bravo y Samuel) */}

        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
};
