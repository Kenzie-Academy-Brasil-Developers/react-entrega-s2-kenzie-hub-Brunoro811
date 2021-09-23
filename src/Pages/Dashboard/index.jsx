import { Container, Header, InputContainer, TaskContainer } from "./styles";
import { Redirect, useHistory } from "react-router-dom";
import Input from "../../Components/Input";
import { useForm } from "react-hook-form";
import { FiEdit2 } from "react-icons/fi";
import Button from "../../Components/Button";
import Card from "../../Components/Card";
import { useCallback, useEffect, useState } from "react";
import api from "../../Services/Api";
import Select from "../../Components/Select";
import { toast } from "react-toastify";
function Dashboard({ authenticated, setAuthenticated }) {
  const [token] = useState(
    JSON.parse(localStorage.getItem("@Doit:token") || "")
  );
  const [user] = useState(JSON.parse(localStorage.getItem("@Doit:user") || ""));
  const [techs, setTechs] = useState({});
  const { register, handleSubmit } = useForm();
  const loadLanguage = useCallback(() => {
    api
      .get(`/users/${user.id}`)
      .then((response) => {
        return setTechs(response.data.techs);
      })
      .catch((error) => {
        return toast.error("erro ao carregar linguagens!");
      });
  }, [user.id]);

  const onSubmitFunction = (data) => {
    if (!data) {
      return toast.error("Complete os campos para adicionar");
    }
    api
      .post("/users/techs/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        loadLanguage();
        toast.success("Sucesso ao adicionar!");
      })
      .catch((error) => {
        toast.error("Erro ao adicionar, tente outra linguagem!");
      });
  };
  const history = useHistory();
  const handleLogout = () => {
    localStorage.clear();
    setAuthenticated(false);
    return history.push("/");
  };
  useEffect(() => {
    loadLanguage();
  }, [loadLanguage]);
  useEffect(() => () => {}, []);

  if (!authenticated) {
    return <Redirect to="/Login" />;
  }
  return (
    <Container>
      <Header>
        <Button onClick={handleLogout}>Sair</Button>
      </Header>
      <InputContainer onSubmit={handleSubmit(onSubmitFunction)}>
        <time>23 de setembro de 2021</time>
        <section>
          <Input
            icon={FiEdit2}
            placeholder="Nova linguagem"
            register={register}
            name={"title"}
          />
          <Select register={register} />
          <Button type="submit">Adicionar</Button>
        </section>
      </InputContainer>
      <TaskContainer>
        {techs[0] &&
          techs.map((element) => (
            <Card key={element.title} element={element} />
          ))}
        {!techs[0] && <p>Sem linguagens cadastradas!</p>}
      </TaskContainer>
    </Container>
  );
}
export default Dashboard;
