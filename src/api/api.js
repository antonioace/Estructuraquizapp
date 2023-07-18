import axios from "axios";

// Crear una instancia de Axios
const instance = axios.create({
  baseURL: "http://localhost:3000", // URL base de la API
  timeout: 5000, // Tiempo máximo de espera de 5 segundos
  headers: {
    "Content-Type": "application/json", // Tipo de contenido JSON
    // Otros encabezados personalizados si es necesario
  },
});

// Interceptor de solicitud
instance.interceptors.request.use(
  (config) => {
    // Obtener el token del Local Storage
    const token = localStorage.getItem("token");

    // Si el token existe, agregarlo a los encabezados de la solicitud
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Aquí puedes realizar otras modificaciones en la configuración de la solicitud
    // antes de que se envíe, como agregar encabezados adicionales, etc.

    return config;
  },
  (error) => {
    // Manejo de errores de solicitud
    return Promise.reject(error);
  }
);

// Interceptor de respuesta
instance.interceptors.response.use(
  (response) => {
    // Aquí puedes realizar modificaciones en la respuesta antes de que se entregue
    // a la aplicación, como transformar los datos de respuesta, etc.
    return response;
  },
  (error) => {
    // Manejo de errores de respuesta
    if (error.response && error.response.status === 401) {
      // Si el error es 401 (Unauthorized), realiza las acciones necesarias
      // como quitar el token y recargar la página
      // ...

      // Ejemplo: Redirigir a la página de inicio de sesión
      localStorage.removeItem("token");
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default instance;
