import { Box } from "@mui/material";
import "./App.css";
import Employees from "./components/Employees";
import { ModalProvider } from "./providers/ModalContext";
import { NotificationsProvider } from "./providers/NotificationsContext";

function App() {
  return (
    <NotificationsProvider>
      <ModalProvider>
        <Box>
          <Employees />
        </Box>
      </ModalProvider>
    </NotificationsProvider>
  );
}

export default App;
