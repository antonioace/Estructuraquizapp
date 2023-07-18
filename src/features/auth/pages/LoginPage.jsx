import React from "react";
import AuthLayout from "../components/AuthLayout";

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { CircularProgress } from "@mui/material";
import useAuth from "../../../hooks/useAuth";
import AuthInput from "../components/AuthInput";

function LoginPage() {
  const { logear, cargando } = useAuth();
  const methods = useForm();
  return (
    <AuthLayout>
      {cargando && (
        <div className="fixed top-0 left-1/2 transform -translate-x-1/2">
          <CircularProgress color="inherit" />
        </div>
      )}
      <div className=" bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Inicia sesión en tu cuenta
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            ¿Aún no tienes una cuenta?
            <Link
              href="#"
              to="/register"
              className="font-medium text-indigo-500 hover:text-indigo-400"
            >
              Regístrate
            </Link>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={methods.handleSubmit(logear)}>
              <div>
                <label
                  for="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Correo electrónico
                </label>
                <div className="mt-1">
                  <AuthInput
                    id="email"
                    name="email"
                    type="email"
                    register={methods.register}
                    autocomplete="email"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  for="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Contraseña
                </label>
                <div className="mt-1">
                  <AuthInput
                    name={"clave"}
                    type={"password"}
                    register={methods.register}
                    autocomplete={"current-password"}
                    required={true}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    for="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Recordar sesión
                  </label>
                </div>

                <div className="text-sm">
                  <Link
                    to={"/recuperar-clave"}
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
              </div>

              <div>
                <button
                  disabled={cargando}
                  type="submit"
                  className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#8685EF] hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Iniciar sesión
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}

export default LoginPage;
