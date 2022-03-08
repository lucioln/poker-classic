import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Container } from "../../styles/index.styles";
import Logo from "../Logo/Logo";
import ButtonLogin from "../Button/Button";
import ImgBack from "../ImgBack/ImgBack";
import Info from "../Info/Info";

function FormLogin() {
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
        <div className="line-form one">
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
          <div className="colum left">
            <input type="checkbox" />
            <label className="links-form">Lembrar de mim </label>
          </div>
          <div className="colum right">
            <a className="links-form" href="/recuperar">
              Esqueceu a senha?
            </a>
          </div>
        </div>
        <ButtonLogin nome="LOGIN"></ButtonLogin>
        <Info></Info>
      </Container>
      <ImgBack></ImgBack>
    </form>
  );
}

export default FormLogin;
