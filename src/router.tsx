import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }
])

export default AppRouter