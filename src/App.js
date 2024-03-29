import Layout from "./components/Layout";
import "./styles/app.scss";
import { Route, Routes } from "react-router-dom";
import { Home, SignIn, UserDetails, Users } from "./pages";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user/:userId/details" element={<UserDetails />} />
      </Routes>
    </div>
  );
}

export default App;
