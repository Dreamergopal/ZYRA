import { Provider } from "react-redux";
import "./App.css";
import Store from "./store/Store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./outlet/Layout";
import LoginPage from "./page/LoginPage";
import SignupPage from "./page/SignupPage";
import AddPost from "./page/AddPost";
import AllPost from "./page/AllPost";
import Home from "./page/Home";
import PostDetail from "./page/PostDetail";
import EditPost from "./page/EditPost";
import FetchLogin from "./component/FetchLogin";
import Contact from "./page/Contact";
import About from "./page/About";
import Privacy from "./page/Privacy";
import Terms from "./page/Terms";
import { Analytics } from "@vercel/analytics/react";
import ProtectedRoute from "./outlet/ProtectedRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/signup",
          element: <SignupPage />,
        },
        {
          path: "/post",
          element: (
            <ProtectedRoute>
              <AddPost />
            </ProtectedRoute>
          ),
        },
        {
          path: `/post/:slug`,
          element: (
            <ProtectedRoute>
              <PostDetail />
            </ProtectedRoute>
          ),
        },
        {
          path: "/edit-post/:slug",
          element: (
            <ProtectedRoute>
              <EditPost />
            </ProtectedRoute>
          ),
        },
        {
          path: "/all-post",
          element: (
            <ProtectedRoute>
              <AllPost />
            </ProtectedRoute>
          ),
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/privacy",
          element: <Privacy />,
        },
        {
          path: "terms",
          element: <Terms />,
        },
      ],
    },
  ]);

  return (
    <Provider store={Store}>
      <FetchLogin>
        <RouterProvider router={router} />
        <Analytics />
      </FetchLogin>
    </Provider>
  );
}

export default App;
