import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { CaseStudy } from "./pages/CaseStudy";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "case-study/:id", Component: CaseStudy },
    ],
  },
]);
