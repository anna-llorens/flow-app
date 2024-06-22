import { createBrowserRouter } from "react-router-dom";

import { App } from "./App";
import { ErrorPage } from "./pages/error-page";
import { MembersPage } from "./pages/members";

import { TeamFlow } from "./components/flow/team-flow";
import { EditFlowPage } from "./components/flow/edit-flow";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "dashboard",
        element: "Dashboard route",
      },
      {
        path: "teams/members",
        element: <MembersPage />,
      },
      {
        path: "teams/org",
        element: <TeamFlow />,
      },
      {
        path: "/teams/favorites",
        element: "Favourite route",
      },
      {
        path: "/teams/edit",
        element: <EditFlowPage />,
      },
      {
        path: "predictions",
        element: "Predictions route",
      },
    ],
  },
]);
