import React from "react";
import Router from "next/router";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Container } from "../../styles/index.styles";
import Logo from "../../components/Logo/Logo";
import Button from "../../components/Button/Button";
import ImgBack from "../../components/ImgBack/ImgBack";
import Input from "../../components/Input/Input";

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
    Router.push("/login");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <Logo />
          <Input
            label="Email"
            type="email"
            erro={errors.email?.message}
            register={{ ...register("email", { require: true }) }}
          />
          <Button namebtn="RECUPERAR CONTA" />
        </Container>
      </form>
      <ImgBack />
    </div>
  );
}

export default FormReset;
