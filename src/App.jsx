import "./App.scss";
import Layout from "./layout/Layout.jsx";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from "./pages/Blog";
import Wishlist from "./pages/Wishlist/index.jsx";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/wishlist" element={<Wishlist />} />
          {/* Add more routes here */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;


