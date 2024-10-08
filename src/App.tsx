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

import SalesPage from "./pages/SalesPage";
import AdministrationPage from "./pages/AdministrationPage";
import AppointmentPage from "./pages/AppointmentPage";
import SearchPage from "./pages/SearchPage";
import CreateArticlePage from "./pages/CreateArticlePage";
import ArticleDetails from "./pages/ArticleDetails";
import FavouritesPage from "./pages/FavouritesPage";
import EditArticlePage from "./pages/EditArticlePage";
import ScrollToTop from "./components/core/ScrollToTop";
import StatisticsPage from "./pages/StatisticsPage";
import TodosBoardPage from "./pages/TodosBoardPage";
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminTagsPage from "./pages/admin/AdminTagsPage";
import AdminConversationTopicsPage from "./pages/admin/AdminConversationTopicsPage";
import CoversationReportPage from "./pages/CoversationReportPage";

function App() {
  return (
    <main className="w-full min-h-screen bg-main ">
       <ScrollToTop /> 
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="articles" element={<SearchPage />} />
          <Route path="articles/new-article" element={<CreateArticlePage />} />
          <Route path="articles/:id" element={<ArticleDetails />} />
          <Route path="articles/:id/edit" element={<EditArticlePage />} />
          <Route path="favourites" element={<FavouritesPage />} />
          <Route path="coversation-report" element={<CoversationReportPage />} />
          <Route path="statistics" element={<StatisticsPage />} />
          <Route path="todos-board" element={<TodosBoardPage />} />
          {/*  */}
          <Route path="departments" element={<Deparments />}>
            <Route index element={<Navigate to="helpdesk" replace />} />
            <Route index path="helpdesk" element={<HelpdeskPage />} />
            <Route path="sales" element={<SalesPage />} />
            <Route path="administration" element={<AdministrationPage />} />
            <Route path="appointment" element={<AppointmentPage />} />
          </Route>
          {/*  */}
        </Route>

        <Route element={<AdminLayout />}>
      <Route path="/admin" element={<AdminDashboard/>}/>
      <Route path="admin/tags" element={<AdminTagsPage/>}/>
      <Route path="admin/conversation-topics" element={<AdminConversationTopicsPage/>}/>
        </Route>

        <Route element={<GuestLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
