import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Routes
import {
  HOME,
  MEDIA,
  PERSON,
  SEARCH,
} from "./paths";

// Pages
import Home from "@/pages/Home/Home.page";
import PageNotFound from "@/pages/PageNotFound/PageNotFound.page";
import SearchPage from "@/pages/Search/Search.page";
import MediaPage from "@/pages/Media/Media.page";
import PersonPage from "@/pages/Person/PersonPage.page";



const router = createBrowserRouter([
  {
    index: true,
    path: HOME,
    element: <Home />,
  },
  {
    index: true,
    path: SEARCH,
    element: <SearchPage />,
  },
  {
    index: true,
    path: MEDIA,
    element: <MediaPage />,
  },
  {
    index: true,
    path: PERSON,
    element: <PersonPage />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);



export const Routes = () => (
  <>
    <RouterProvider router={router} />
  </>
);
