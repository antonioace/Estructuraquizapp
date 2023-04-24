import React from "react";

function Spinner() {
  return (
    <div class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div class="bg-white p-5 rounded-lg shadow-lg">
        <div class="flex items-center mb-4">
          <svg
            class="animate-spin mr-3 h-5 w-5 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-3.647zm16-5.291a7.962 7.962 0 01-3 5.291l3 3.647A8.008 8.008 0 0120 12h-4zm-8 3.536a4.5 4.5 0 110-9 4.5 4.5 0 010 9z"
            ></path>
          </svg>
          <h2 class="text-gray-900 font-bold text-lg">Cargando...</h2>
        </div>
      </div>
    </div>
  );
}

export default Spinner;
