import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import SharedRouter from "./shared/Router";
import useUserStore from "./zustand/useUserStore";

function App() {
  const { user } = useUserStore();

  return (
    <AuthProvider>
      <SharedRouter user={user} />
    </AuthProvider>
  );
}

export default App;
