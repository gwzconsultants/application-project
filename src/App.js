import { Routes, Route } from "react-router-dom";
import "./App.css";

import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import TermsPage from "./pages/TermsPage";
import DashboardPage from "./pages/DashboardPage";
import Table from "./components/Table";
import ApplicationDetailsPage from "./pages/ApplicationDetailsPage";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SigninPage /> }/>
        <Route path="/signin" element={<SigninPage /> }/>
        <Route path="/signup" element={<SignupPage /> }/>
        <Route path="/terms" element={<TermsPage /> }/>
        <Route path="/dashboard" element={<DashboardPage /> }/>
        <Route path="/table" element={<Table /> }/>
        <Route path="/application-details/" element={<ApplicationDetailsPage /> }/>
      </Routes>
    </div>
  );
}

export default App;
