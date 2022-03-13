import React from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Container } from "../../styles/index.styles";
import Logo from "../../components/Logo/Logo";
import Button from "../../components/Button/Button";
import ImgBack from "../../components/ImgBack/ImgBack";

function FormReset() {
  const schema = yup
    .object({
      email: yup
        .string()
        .email("email inválido")
        .required("email é obrigatório"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (user) => {
    console.log(user);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <Logo />
          <div className="line-form">
            <label>Email:</label>
            <input
              type="text"
              {...register("email")}
              className="input-form"
            ></input>
            <p className="erros">{errors.email?.message}</p>
          </div>
          <Button nome="RECUPERAR CONTA" />
        </Container>
      </form>
      <ImgBack />
    </div>
  );
}

export default FormReset;
