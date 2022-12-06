import { useReducer } from "react";
import { createContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import reducer, { initialState } from "./app/store";

import Main from "./layout/Main";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ShoppingCard from "./pages/ShoppingCard";
import TopRated from "./pages/TopRated";
import WatchList from "./pages/WatchList";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "topRatedMonitor",
        element: <TopRated />,
      },
      {
        path: "watchList",
        element: <WatchList />,
      },
      {
        path: "shoppingCard",
        element: <ShoppingCard />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export const MyContext = createContext();
function App() {
  const [store, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <MyContext.Provider value={{ store, dispatch }}>
        <RouterProvider router={router} />
      </MyContext.Provider>
    </div>
  );
}

export default App;
