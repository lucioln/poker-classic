import React from "react";
import { ReactNode } from "react";
import { LineForm } from "./Input.style";

interface IProps {
  label?: string;
  type?: string;
  erro: ReactNode;
  register?: any;
}

function Input(props: IProps) {
  const { label, type, register, erro } = props;
  return (
    <LineForm>
      <label>{label}</label>
      <input type={type || "text"} {...register} className="input-form" />
      <span className="erros">{erro}</span>
    </LineForm>
  );
}

export default Input;
