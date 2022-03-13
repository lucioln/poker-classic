import React from "react";
import Link from "next/link";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Container } from "../../styles/index.styles";
import Logo from "../../components/Logo/Logo";
import Button from "../../components/Button/Button";
import ImgBack from "../../components/ImgBack/ImgBack";
import Info from "../../components/Info/Info";

function Login() {
  const schema = yup
    .object({
      email: yup
        .string()
        .email("email inválido")
        .required("email é obrigatório"),
      senha: yup
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
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Logo />
        <div className="line-form">
          <label>Login:</label>
          <input
            type="text"
            name="email"
            {...register("email")}
            className="input-form"
          ></input>
          <p className="erros">{errors.email?.message}</p>
        </div>
        <div className="line-form two">
          <label className="form-label">Senha:</label>
          <input
            type="password"
            name="senha"
            {...register("senha")}
            className="input-form"
          ></input>
          <p className="erros">{errors.senha?.message}</p>
        </div>
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
        <Button nome="LOGIN" />
        <Info />
      </Container>
      <ImgBack />
    </form>
  );
}

export default Login;
