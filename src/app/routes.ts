import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Skills } from "./pages/Skills";
import { Projects } from "./pages/Projects";
import { Blog } from "./pages/Blog";
import { BlogPost } from "./pages/BlogPost";
import { Journey } from "./pages/Journey";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "skills", Component: Skills },
      { path: "projects", Component: Projects },
      { path: "blog", Component: Blog },
      { path: "blog/:slug", Component: BlogPost },
      { path: "journey", Component: Journey },
      { path: "contact", Component: Contact },
    ],
  },
]);