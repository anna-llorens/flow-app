import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import { ErrorPage } from "./pages/error-page";

import { EditFlowPage } from "./pages/edit-flow-page";
import { OrgPage } from "./pages/teams/org-page";
import { MembersPage } from "./pages/teams/members-page";
import { team1Edges, teamNodes } from "./data/data";

// TODO - App routes

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
      // Teams routes
      {
        path: "/teams/members",
        element: <MembersPage />,
      },
      {
        path: "/teams/org",
        element: <OrgPage />,
      },
      {
        path: "/teams/favorites",
        element: <>Favourite route</>,
      },
      {
        path: "/teams/edit",
        element: (
          <EditFlowPage initialNodes={teamNodes} initialEdges={team1Edges} />
        ),
      },
      {
        path: "predictions",
        element: <>Predictions route</>,
      },
    ],
  },
]);
