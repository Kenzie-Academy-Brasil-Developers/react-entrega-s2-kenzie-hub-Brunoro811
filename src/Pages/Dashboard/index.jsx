import {
  Container,
  Header,
  InputContainer,
  TaskContainer,
  Modal,
} from "./styles";
import { Redirect, useHistory } from "react-router-dom";
import Input from "../../Components/Input";
import { useForm } from "react-hook-form";
import { FiEdit2, FiXCircle } from "react-icons/fi";
import Button from "../../Components/Button";
import Card from "../../Components/Card";
import { useCallback, useEffect, useState } from "react";
import api from "../../Services/Api";
import Select from "../../Components/Select";
import { toast } from "react-toastify";
function Dashboard({ authenticated, setAuthenticated }) {
  const [token] = useState(
    JSON.parse(localStorage.getItem("@Doit:token")) || ""
  );
  const [user] = useState(JSON.parse(localStorage.getItem("@Doit:user")) || "");
  const [techs, setTechs] = useState({});
  const [idTech, setIdTech] = useState("");
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
  const handleDelete = (id, status) => {
    setIsModalDelete(!isModalDelete);
    if (!status) {
      setIdTech(id);
    }
    if (status) {
      api
        .delete(`/users/techs/${idTech}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          loadLanguage();
          return toast.success("Deletado com sucesso!");
        })
        .catch((error) => {
          toast.error("Erro ao deletar linguagens!");
        });
    }
  };
  const [isModalEdit, setIsModalEdit] = useState(false);
  const [isModalDelete, setIsModalDelete] = useState(false);
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const handleEdit = (id, title, status) => {
    setTitle(title);
    setStatus(status);
    setId(id);
    setIsModalEdit(!isModalEdit);
  };
  const OnSubmitEditFunction = () => {
    api
      .put(
        `/users/techs/${id}`,
        { status: status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setIsModalEdit(!isModalEdit);
        loadLanguage();
        return toast.success("Editado com sucesso!");
      })
      .catch((error) => {
        return toast.error("Erro ao editar!");
      });
  };
  const history = useHistory();
  const handleLogout = () => {
    localStorage.clear();
    setAuthenticated(false);
    return history.push("/");
  };
  useEffect(() => {
    if (authenticated) {
      loadLanguage();
    }
  }, [loadLanguage, authenticated]);
  useEffect(() => () => {}, []);
  if (!authenticated) {
    return <Redirect to="/Login" />;
  }
  return (
    <>
      <Container>
        <Header>
          <h1>
            do<span>.</span>it
          </h1>
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
              <Card
                key={element.title}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                element={element}
              />
            ))}
          {!techs[0] && <p>Sem linguagens cadastradas!</p>}
        </TaskContainer>
      </Container>
      {isModalEdit && (
        <Modal>
          <div className="Body-Black">
            <div className="Modal">
              <button onClick={handleEdit} className="close">
                <FiXCircle />
              </button>
              <InputContainer onSubmit={handleSubmit(OnSubmitEditFunction)}>
                <time>23 de setembro de 2021</time>
                <section>
                  <Input
                    icon={FiEdit2}
                    placeholder="Nova linguagem"
                    value={title}
                    name={"title"}
                    onChange={(e) => setTitle(e.target.value)}
                    disabled
                  />
                  <Select
                    status={status}
                    onChange={(e) => setStatus(e.target.value)}
                  />
                  <Button type="submit">Enviar</Button>
                </section>
                {title && <span>**Titulo não editável</span>}
              </InputContainer>
            </div>
          </div>
        </Modal>
      )}
      {isModalDelete && (
        <Modal>
          <div className="Body-Black">
            <div className="Modal">
              <button onClick={handleDelete} className="close">
                <FiXCircle />
              </button>
              <div>
                <p>Tem certeza que quer deletar?</p>
                <Button onClick={() => handleDelete(id, true)}>Sim</Button>
                <Button onClick={handleDelete}>Não</Button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
export default Dashboard;
