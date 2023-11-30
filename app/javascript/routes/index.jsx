import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Musics from "../components/Musics";
import Music from "../components/Music";
import NewMusic from "../components/NewMusic";
import Users from "../components/Users";
import User from "../components/User";
import NewUser from "../components/NewUser";

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
    </Routes>
  </Router>
);
