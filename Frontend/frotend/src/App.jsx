import { Routes, Route } from "react-router-dom";
import Explore from "./Componets/Pages/explore/Explore";
import ManageUsers from "./Componets/Pages/manageuser/ManageUsers";
import ManegeItems from "./Componets/Pages/manageitems/ManegeItems";
import ManegeCategory from "./Componets/Pages/managecategory/ManegeCategory";
import OrderHistory from "./Componets/Pages/hitory/OrderHistory";
import Dashboard from "./Componets/Pages/dashboard/Dashboard";
import ManuBar from "./Componets/manubar/ManuBar";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
    <ManuBar/>
    <Toaster/>
    <Routes>
      
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/manageuser" element={<ManageUsers />} />
      <Route path="/manageitems" element={<ManegeItems/>} />
      <Route path="/managecategory" element={<ManegeCategory />} />
      <Route path="/history" element={<OrderHistory />} />
    </Routes>
    </>
  );
}

export default App;
