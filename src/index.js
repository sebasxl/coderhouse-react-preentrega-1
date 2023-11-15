// Importar librerias react y react-dom
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Referenciar al id root
const el = document.getElementById("root");

// Tomar control de el
const root = ReactDOM.createRoot(el);

// Mostrar el componente en la pantalla del usuario
root.render(<App />);
