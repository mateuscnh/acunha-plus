import React, { useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@components/Button";
import Card from "@components/Card";
import Input from "@components/Input";
import Logo from "@components/Logo";
import api from "@services/api";

import * as S from "./styles";
import { SessionContext } from "@src/store/SessionProvider";

const Identification = () => {
  const { setUserLogged } = useContext(SessionContext);
  const [name, setName] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleNewUser = useCallback(async () => {
    setIsLoading(true);
    const { data } = await api.post("/users", { name });
    setUserLogged({
      id: data.id,
      name,
    });
    sessionStorage.setItem("acunha_plus_user_id", data.id);
    sessionStorage.setItem("acunha_plus_user_name", name);
    navigate("/");
    setIsLoading(false);
  }, [name, navigate, setUserLogged]);

  return (
    <S.Background>
      <S.Mask />
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
              onKeyPress={({ charCode }) => {
                const isEnter = charCode === 13;
                if (isEnter) {
                  handleNewUser();
                }
              }}
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
