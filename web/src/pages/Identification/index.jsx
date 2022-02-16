import React, { useCallback, useState } from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";

import Input from "../../components/Input";
import Logo from "../../components/Logo";
import api from "../../services/api";

import * as Styled from "./styles";

const Identification = () => {
  const [name, setName] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleNewUser = useCallback(async () => {
    try {
      setIsLoading(true);
      await api.post("/users", { name });
    } catch {
      console.log("Erro");
    }
    setIsLoading(false);
  }, [name]);

  return (
    <Styled.Background>
      <Styled.Container className="container">
        <Styled.Content>
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
            <Styled.Title>Sobre você</Styled.Title>
            <Input
              labelName="Nome"
              style={{ width: 100 }}
              value={name}
              onChange={({ target: { value } }) => setName(value)}
            />
            <Button disabled={!name || isLoading} onClick={handleNewUser}>
              Continuar
            </Button>
          </Card>
        </Styled.Content>
      </Styled.Container>
    </Styled.Background>
  );
};

export default Identification;
