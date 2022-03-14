import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Router from "next/router";

import { Container } from "../../styles/index.styles";
import Logo from "../../components/Logo/Logo";
import ImgBack from "../../components/ImgBack/ImgBack";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

function Register() {
  const schema = yup //SCHEMA VALIDATION YUP
    .object({
      name: yup.string().required("nome é obrigatório"),
      email: yup
        .string()
        .email("email inválido")
        .required("email é obrigatório"),
      pass: yup
        .string()
        .min(8, "senha deve possuir o minimo de 8 caracteres")
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
    Router.push("/login");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <Logo />
          <Input
            label="nome"
            type="text"
            erro={errors.name?.message}
            register={{ ...register("name", { required: true }) }}
          />
          <Input
            label="Email"
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
            <input type="checkbox"></input>
            <label>
              Confirmo que eu tenho pelo menos 18 anos de idade e que eu li e
              entendi o <strong>Acordo de Licença do Usuário Final</strong> e a
              <strong> Política de Privacidade.</strong>
            </label>
          </div>
          <Button namebtn="CRIAR CONTA" background="#008B8B" />
        </Container>
      </form>
      <ImgBack />
    </div>
  );
}

export default Register;
