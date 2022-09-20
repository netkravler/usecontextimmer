import AppRouter from "./components/App/Router/AppRouter";
import AppProvider from "./components/App/Providors/AppProvidor";

function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}

export default App;
