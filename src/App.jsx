import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import SharedRouter from "./shared/Router";

function App() {
  return (
    <AuthProvider>
      <SharedRouter />
    </AuthProvider>
  );
}

export default App;
