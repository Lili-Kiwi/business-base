import Header from "./Header";
import AllBusinesses from "./pages/AllBusinesses.jsx";
import AddBusiness from "./pages/AddBusiness.jsx";
import { BusinessProvider } from "./context/BusinessContext.jsx";
function App() {
  return (
    <BusinessProvider>
      <Header />
      <AddBusiness />
      <AllBusinesses />
    </BusinessProvider>
  );
}

export default App;
