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
  <div data-theme="forest">
    <RouterProvider router={router} />
  </div>
);

export default Root;
