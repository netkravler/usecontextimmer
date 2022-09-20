import AppRouter from "./components/App/Router/AppRouter";
import AppProvider from "./components/App/Providors/AppProvidor";

function App() {
  return (
    <>
      {/** AppProvidor gør det muligt for appen at tilgå og ændre state   */}
      <AppProvider>
        <AppRouter />
      </AppProvider>
    </>
  );
}

export default App;
