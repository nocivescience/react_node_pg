import { useState } from "react";
import { Navbar } from "./componentes/Navbar";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TaskForm } from "./componentes/TaskForm";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/form" element={<TaskForm></TaskForm>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
