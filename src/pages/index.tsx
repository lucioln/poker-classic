import React from "react";
import Router from "next/router";
import Link from "next/link";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Container } from "../styles/index.styles";
import Logo from "../components/Logo/Logo";
import Button from "../components/Button/Button";
import ImgBack from "../components/ImgBack/ImgBack";
import Info from "../components/Info/Info";
import Input from "../components/Input/Input";

function Login() {
  const schema = yup
    .object({
      email: yup
        .string()
        .email("email inválido")
        .required("email é obrigatório"),
      pass: yup
        .string()
        .min(8, "minimo 8 caracteres")
        .required("senha é obrigatório"),
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
    Router.push("https://lucionoleto.com.br");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Logo />
        <Input
          label="Login"
          type="email"
          erro={errors.email?.message}
          register={{ ...register("email", { required: true }) }}
        />
        <Input
          label="Senha"
          type="password"
          erro={errors.pass?.message}
          register={{ ...register("pass", { required: true }) }}
        />
        <div className="check">
          <div className="colum-left">
            <input type="checkbox" />
            <label className="links-form">Lembrar de mim </label>
          </div>
          <div className="colum right">
            <Link href="/recover">
              <a className="links-form">Esqueci a senha</a>
            </Link>
          </div>
        </div>
        <Button namebtn="LOGIN" />
        <Info />
      </Container>
      <ImgBack />
    </form>
  );
}

export default Login;
