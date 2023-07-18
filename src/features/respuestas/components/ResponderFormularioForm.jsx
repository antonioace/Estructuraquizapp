import React, { useState } from "react";

const preguntas = [
  {
    nombre: "Pregunta 1",
    descripcion: "¿Cuál es la capital de Francia?",
    opciones: ["París", "Londres", "Madrid", "Roma"],
  },
  {
    nombre: "Pregunta 2",
    descripcion: "¿Cuál es el color del cielo?",
    opciones: ["Azul", "Verde", "Rojo", "Amarillo"],
  },
  // Agrega más preguntas aquí si es necesario
];

const ResponderCuestionarioForm = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionSelect = (questionIndex, optionIndex) => {
    setSelectedOptions((prevState) => {
      const newSelectedOptions = [...prevState];
      newSelectedOptions[questionIndex] = optionIndex;
      return newSelectedOptions;
    });
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const renderQuestion = (question, index) => {
    const { nombre, descripcion, opciones } = question;
    const selectedOptionIndex = selectedOptions[index];

    return (
      <div key={index} className="mb-8">
        <h2 className="text-2xl font-bold mb-2">{nombre}</h2>
        <p className="text-lg mb-4">{descripcion}</p>
        {opciones.map((opcion, opcionIndex) => (
          <button
            key={opcionIndex}
            className={`mr-2 mb-2 px-4 py-2 rounded ${
              selectedOptionIndex === opcionIndex
                ? "bg-blue-500 text-white"
                : "bg-white text-blue-500 border border-blue-500"
            }`}
            onClick={() => handleOptionSelect(index, opcionIndex)}
          >
            {opcion}
          </button>
        ))}
      </div>
    );
  };

  const renderPagination = () => {
    return (
      <div className="flex justify-between mt-8">
        <button
          className={`bg-blue-500 text-white px-4 py-2 rounded ${
            currentPage === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentPage === 0}
          onClick={handlePreviousPage}
        >
          Anterior
        </button>
        <button
          className={`bg-blue-500 text-white px-4 py-2 rounded ${
            currentPage === preguntas.length - 1
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          disabled={currentPage === preguntas.length - 1}
          onClick={handleNextPage}
        >
          Siguiente
        </button>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 mt-8">
      <h1 className="text-4xl font-bold mb-4">Cuestionario</h1>
      {renderQuestion(preguntas[currentPage], currentPage)}
      {renderPagination()}
    </div>
  );
};

export default ResponderCuestionarioForm;
