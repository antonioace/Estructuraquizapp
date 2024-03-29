import React from "react";
import AuthLayout from "../components/AuthLayout";


import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import CustomError from "../../../components/CustomError";
import SpinnerButton from "../../../components/SpinnerButton";
import { useNavigate } from "react-router-dom";
import useRegister from "../../../hooks/useRegister";
;

function RegistroPage() {
  const { cargandoRegistro, registrar, methods } = useRegister();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = methods;
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <div className="w-full flex   bg-white p-5 gap-3 sm:rounded-lg shadow">
        <form
          className=" md:w-[50%] w-[100%]"
          onSubmit={handleSubmit(registrar)}
        >
          <h2 className="mb-3 font-bold text-xl">Registro</h2>
          <div>
            <label
              htmlFor="nombre"
              className="block text-gray-700 font-bold mb-2"
            >
              Nombre
            </label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              {...register("nombre", {
                required: { value: true, message: "Campo requerido" },
              })}
              className={`${
                errors.nombre && "border-red-500"
              } appearance-none border rounded w-full py-2 px-3 bg-gray-100 focus:bg-white leading-tight focus:outline-none focus:shadow-outline `}
            />
            {errors.nombre && <CustomError message={errors?.nombre?.message} />}
          </div>
          <div>
            <label
              htmlFor="apellido"
              className="block text-gray-700 font-bold mb-2"
            >
              Apellido
            </label>
            <input
              type="text"
              name="apellido"
              id="apellido"
              {...register("apellido", {
                required: { value: true, message: "Campo requerido" },
              })}
              className={`${
                errors.apellido && "border-red-500"
              } appearance-none border rounded w-full py-2 px-3 bg-gray-100 focus:bg-white leading-tight focus:outline-none focus:shadow-outline `}
            />
            {errors.apellido && (
              <CustomError message={errors?.apellido?.message} />
            )}
          </div>
          <div>
            <label
              htmlFor="celular"
              className="block text-gray-700 font-bold mb-2"
            >
              Celular
            </label>
            <input
              type="text"
              name="celular"
              id="celular"
              {...register("celular", {
                required: { value: true, message: "Campo requerido" },
              })}
              className={`${
                errors.celular && "border-red-500"
              } appearance-none border rounded w-full py-2 px-3 bg-gray-100 focus:bg-white leading-tight focus:outline-none focus:shadow-outline `}
            />
            {errors.celular && (
              <CustomError message={errors?.celular?.message} />
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              {...register("email", {
                required: { value: true, message: "Campo requerido" },
              })}
              id="email"
              className={`${
                errors.celular && "border-red-500"
              } appearance-none border rounded w-full py-2 px-3 bg-gray-100 focus:bg-white focus:ring-blue-500 focus:border-blue-500 leading-tight focus:outline-none focus:shadow-outline `}
            />
            {errors.email && <CustomError message={errors?.email?.message} />}
          </div>

          <div>
            <label
              htmlFor="clave"
              className="block text-gray-700 font-bold mb-2"
            >
              Contraseña
            </label>
            <input
              type="password"
              name="clave"
              {...register("clave", {
                required: { value: true, message: "Campo requerido" },
                minLength: { value: 6, message: "Mínimo 6 caracteres" },
              })}
              id="clave"
              className={`${
                errors.clave && "border-red-500"
              } appearance-none border rounded w-full py-2 px-3 bg-gray-100 focus:bg-white focus:ring-blue-500 focus:border-blue-500 leading-tight focus:outline-none focus:shadow-outline `}
            />
            {errors.clave && <CustomError message={errors?.clave?.message} />}
          </div>
          <div className="flex flex-col gap-[12px] mt-3">
            <button
              className="bg-[#f0f0f0] w-[100%] rounded-lg p-2 flex justify-center gap-[5px] "
              style={{ opacity: cargandoRegistro ? 0.5 : 1 }}
              type="submit"
            >
              {cargandoRegistro && (
                <div>
                  <SpinnerButton />
                </div>
              )}
              <span> Crear cuenta</span>
            </button>
            <button
              className="bg-[#d1d1d1] w-[100%] rounded-lg p-2 mt-3"
              onClick={() => navigate("/login")}
            >
              Iniciar sesión
            </button>
          </div>
        </form>
        <div className="hidden md:block w-[50%] bg-[#d1d1d1] rounded-lg"></div>
      </div>
    </AuthLayout>
  );
}

export default RegistroPage;
