import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Musics from "../components/Musics";
import Music from "../components/Music";
import NewMusic from "../components/NewMusic";
import Users from "../components/Users";
import User from "../components/User";
import NewUser from "../components/NewUser";
import Composers from "../components/Composers";
import Composer from "../components/Composer";
import NewComposer from "../components/NewComposer";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/musics" element={<Musics />} />
      <Route path="/musics/:id" element={<Music />} />
      <Route path="/musics/new" element={<NewMusic />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:id" element={<User />} />
      <Route path="/users/new" element={<NewUser />} />
      <Route path="/composers" element={<Composers />} />
      <Route path="/composers/:id" element={<Composer />} />
      <Route path="/composers/new" element={<NewComposer />} />
    </Routes>
  </Router>
);
