import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Rutas from "./routes/Rutas";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false, // Configuración para no recargar en foco
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Rutas />
      </div>
    </QueryClientProvider>
  );
}

export default App;
