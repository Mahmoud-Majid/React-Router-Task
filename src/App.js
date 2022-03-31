import Footer from "./components/homeScreen/Footer";
import NavBar from "./components/homeScreen/NavBar";
import Home from "./components/homeScreen/Home";
import About from "./components/homeScreen/About";
import Contact from "./components/homeScreen/Contact";
import Error from "./components/homeScreen/Error";
import Profile from "./components/homeScreen/Profile";
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
      <main className="mt-5">
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/profile/:id' element={<Profile />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
