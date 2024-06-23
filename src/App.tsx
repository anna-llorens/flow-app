import { AppProvider } from "./app-context";
import { TeamsPage } from "./pages/teams/teams-page";

export default function App() {
  return (
    <AppProvider>
      <TeamsPage />
    </AppProvider>
  );
}
