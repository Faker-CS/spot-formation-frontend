import React from "react";
import { AuthProvider as Provider } from "../context/AuthContext";

export default function AuthProvider({ children }){
  return <Provider>{children}</Provider>;
}
