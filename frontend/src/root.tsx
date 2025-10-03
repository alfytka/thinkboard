import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./features/home/home-page";
import NoteDetailPage from "./features/note/note-detail-page";
import CreateNotePage from "./features/note/create-note-page";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/create",
    Component: CreateNotePage,
  },
  {
    path: "/note/:id",
    Component: NoteDetailPage,
  },
]);

const Root = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]" />
    <RouterProvider router={router} />
  </div>
);

export default Root;
