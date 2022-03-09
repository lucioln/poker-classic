import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Container } from "../../styles/index.styles";
import Logo from "../../components/Logo/Logo";
import ImgBack from "../../components/ImgBack/ImgBack";
import Button from "../../components/Button/Button";

function Register() {
  const schema = yup //SCHEMA VALIDATION YUP
    .object({
      nome: yup
        .string()
        .min(5, "minimo 6 caracteres")
        .required("nome é obrigatório"),
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
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <Logo />
          <div className="line-form one">
            <label>Nome:</label>
            <input
              type="text"
              {...register("nome")}
              className="input-form"
            ></input>
            <p className="erros">{errors.nome?.message}</p>
          </div>
          <div className="line-form one">
            <label>Email:</label>
            <input
              type="email"
              {...register("email")}
              className="input-form"
            ></input>
            <p className="erros">{errors.email?.message}</p>
          </div>
          <div className="line-form two">
            <label className="form-label">Senha:</label>
            <input
              type="password"
              {...register("senha")}
              className="input-form"
            ></input>
            <p className="erros">{errors.senha?.message}</p>
          </div>
          <div>
            <input type="checkbox"></input>
            <label className="terms">
              Confirmo que eu tenho pelo menos 18 anos de idade e que eu li e
              entendi o <strong>Acordo de Licença do Usuário Final</strong> e a{" "}
              <strong>Política de Privacidade.</strong>
            </label>
          </div>
          <Button nome="CRIAR CONTA" />
        </Container>
      </form>
      <ImgBack />
    </div>
  );
}

export default Register;
