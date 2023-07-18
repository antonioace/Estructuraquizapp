import React from "react";
import { useForm } from "react-hook-form";
import AuthInput from "./AuthInput";
import { Link } from "react-router-dom";

const RecuperarClaveForm = () => {
  const [step, setStep] = React.useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const handleEmailSubmit = (data) => {
    console.log("DATAAAAA 1", data);
    // Lógica para enviar el correo electrónico y cambiar al siguiente paso
    setStep(2);
  };

  const handleCodeSubmit = (data) => {
    console.log("DATAAAAA 2", data);
    // Lógica para verificar el código y cambiar al siguiente paso
    setStep(3);
  };

  const handlePasswordSubmit = (data) => {
    console.log("DATAAAAA 3", data);
    // Lógica para guardar la nueva contraseña y completar el proceso de recuperación
  };

  return (
    <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8 w-full ">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {step === 1 && (
            <form onSubmit={handleSubmit(handleEmailSubmit)}>
              <h2 className="text-center mb-5 font-bold text-[22px]">
                Recupera tu contraseña
              </h2>
              <div className="mb-6">
                <p className="text-[#b1b1b1]">
                  Ingresa tu correo electrónico para recuperar la contraseña ,
                  vas a recibir un código de verificación
                </p>
              </div>

              <div className="mb-5">
                <AuthInput
                  type="email"
                  name="email"
                  placeholder="Ingresa el correo electrónico asociado a tu cuenta"
                  register={register}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#8685EF] hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Enviar
              </button>
              <div className="mt-3 text-right">
                <Link
                  to="/login"
                  className="font-medium text-indigo-500 hover:text-indigo-400"
                >
                  Volver al inicio de sesión
                </Link>
              </div>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit(handleCodeSubmit)}>
              <h2 className="text-center mb-5 font-bold text-[22px]">
                Ingresa el código de verificación
              </h2>
              <div className="mb-5">
                <p className="text-[#b1b1b1]">
                  Se ha enviado un código de verificación a tu correo
                  electrónico
                </p>
              </div>
              <AuthInput
                type="text"
                name="code"
                placeholder="Código de verificación"
                register={register}
                required
              />
              <div className="mt-4">
                <button
                  type="submit"
                  className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#8685EF] hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Verificar
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <form onSubmit={handleSubmit(handlePasswordSubmit)}>
              <h2 className="text-center mb-5 font-bold text-[22px]">
                Ingresa tu nueva contraseña
              </h2>
              <div className="mb-5">
                <p className="text-[#b1b1b1]">
                  Por tu seguridad, ingresa una contraseña que no hayas
                  utilizado anteriormente
                </p>
              </div>
              <div className="mb-5">
                {" "}
                <AuthInput
                  type="password"
                  name="newPassword"
                  placeholder="Nueva contraseña"
                  register={register}
                  required
                />
              </div>

              <div className="mb-5">
                <AuthInput
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirmar contraseña"
                  register={register}
                  required
                />
              </div>

              <div className="mb-4">
                <button
                  type="submit"
                  className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#8685EF] hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Guardar contraseña
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecuperarClaveForm;
