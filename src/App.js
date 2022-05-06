import AuthContextProvider from "./context/AuthContext";
import Approuter from "./router/Approuter";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Approuter />
      </AuthContextProvider>
    </div>
  );
}

export default App;
