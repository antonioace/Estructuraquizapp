import React from "react";

const cuestionarios = [
  {
    nombre: "Cuestionario de Geografía",
    descripcion: "Preguntas relacionadas con la geografía mundial.",
    categoria: ["Geografía"],
    imagen: "ruta_imagen_geografia.jpg",
  },
  {
    nombre: "Cuestionario de Historia",
    descripcion: "Preguntas sobre eventos históricos importantes.",
    categoria: ["Historia"],
    imagen: "ruta_imagen_historia.jpg",
  },
  // Agrega más cuestionarios aquí según necesites
];

function calcularPuntaje() {
  // Aquí podrías implementar la lógica para calcular el puntaje en porcentaje
  // Basado en las respuestas del usuario y las preguntas del cuestionario
  return Math.floor(Math.random() * 101); // Puntaje aleatorio del 0 al 100
}

function Principal() {
  return (
    <div>
      <div className="m-4">
        <h1 className="text-2xl font-bold">Cuestionarios</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-4">
        {cuestionarios.map((cuestionario, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <img
              src={cuestionario.imagen}
              alt={`Imagen del cuestionario ${cuestionario.nombre}`}
              className="mb-4"
            />

            <h2 className="text-lg font-semibold mb-2">
              {cuestionario.nombre}
            </h2>
            <p className="text-gray-600 mb-2">{cuestionario.descripcion}</p>

            <div className="flex flex-wrap gap-2">
              {cuestionario.categoria.map((categoria, index) => (
                <span
                  key={index}
                  className="bg-gray-200 py-1 px-2 text-xs rounded-full"
                >
                  {categoria}
                </span>
              ))}
            </div>

            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
              Responder
            </button>

            <div className="mt-2 text-sm text-gray-600">
              Puntaje: {calcularPuntaje()}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Principal;
