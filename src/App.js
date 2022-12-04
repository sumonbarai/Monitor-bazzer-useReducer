import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import TopRated from "./components/pages/TopRated";
import WatchList from "./components/pages/WatchList";

import Main from "./layout/Main";
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
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
