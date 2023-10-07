import { Box } from "@mui/material";
import "./App.css";
import Employees from "./components/Employees";
import { ModalProvider } from "./providers/ModalContext";

function App() {
  return (
    <ModalProvider>
      <Box>
        <Employees />
      </Box>
    </ModalProvider>
  );
}

export default App;
