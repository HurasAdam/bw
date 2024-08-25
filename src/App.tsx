import { createBrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DefaultLayout from "./layouts/DefaultLayout";
import GuestLayout from "./layouts/GuestLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AppContextProvider } from "./contexts/AppContext";
import Deparments from "./pages/Deparments";
import HelpdeskPage from "./pages/HelpdeskPage";
import DepartmentsLayouts from "./layouts/DepartmentsLayouts";
import EcommercePage from "./pages/EcommercePage";

function App() {
    return (
      <main className="w-full min-h-screen bg-[#f3f4f6] ">
      <Routes>
<Route element={<DefaultLayout/>}>
<Route path="/" element={<Dashboard/>}/>
<Route path="departments" element={<Deparments/>}>
<Route path="hd" element={<HelpdeskPage/>}/>
<Route path="ec" element={<EcommercePage/>}/>
</Route>
</Route>

<Route element={<GuestLayout/>}>
  <Route path="login" element={<Login/>}/>
  <Route path="register" element={<Register/>}/>
</Route>
      </Routes>
    </main>
    );
  }
  
  export default App;