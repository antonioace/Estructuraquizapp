import React from "react";
import { motion } from "framer-motion";
import { Opacity } from "@mui/icons-material";
function CustomError({ message }) {
  return (
    <motion.span
      className="text-red-500 text-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {message}
    </motion.span>
  );
}

export default CustomError;
