import React from "react";
import AuthLayout from "../components/AuthLayout";
import RecuperarClaveForm from "../components/RecuperarClaveForm";

function RecuperarClave() {
  return (
    <AuthLayout>
      <div className="flex justify-center  h-full ">
        <RecuperarClaveForm />
      </div>
    </AuthLayout>
  );
}

export default RecuperarClave;
