import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@components/Button";
import Card from "@components/Card";
import Input from "@components/Input";
import Logo from "@components/Logo";
import api from "@services/api";

import * as S from "./styles";

const Identification = () => {
  const [name, setName] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleNewUser = useCallback(async () => {
    try {
      setIsLoading(true);
      await api.post("/users", { name });
      navigate(`/home`);
    } catch {
      console.log("Erro");
    }
    setIsLoading(false);
  }, [name, navigate]);

  return (
    <S.Background>
      <S.Container className="container">
        <S.Content>
          <Logo height="5rem" />
          <p>
            Você participará de uma pesquisa, para o TCC, relacionado a sistemas
            de recomendações em plataformas de streamming de vídeos. Só será
            necessário clicar no card de um filme, que você já assistiu e
            informar se gostou ou não dele e no final verificar se as
            recomendações de filmes que o sistema lhe recomendará foi
            satisfatória.
          </p>
          <Card style={{ maxWidth: 480, margin: "0 auto" }}>
            <S.Title>Sobre você</S.Title>
            <Input
              labelName="Nome"
              style={{ width: 100 }}
              value={name}
              onChange={setName}
            />
            <Button
              type="primary"
              size="large"
              disabled={!name || isLoading}
              loading={isLoading}
              onClick={handleNewUser}
            >
              Continuar
            </Button>
          </Card>
        </S.Content>
      </S.Container>
    </S.Background>
  );
};

export default Identification;
