import Layout from "./components/Layout";
import "./styles/app.scss";
import { Route, Routes } from "react-router-dom";
import { Home, UserDetails, Users } from "./pages";

function App() {
  return (
    <div className="container">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/user/details" element={<UserDetails />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
