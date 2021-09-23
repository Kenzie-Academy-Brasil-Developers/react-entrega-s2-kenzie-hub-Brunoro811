import {
  Container,
  BackgroundImage,
  AnimationContainer,
  Content,
} from "./styles";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";
import Input from "../../Components/Input";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../Services/Api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
function Singup() {
  const history = useHistory();
  const onSubmitFunction = ({ name, email, password }) => {
    const user = {
      name,
      email,
      password,
      bio: "bio ",
      contact: "00",
      course_module: "front",
    };
    api
      .post("/users", user)
      .then((_) => {
        toast.success("Sucesso ao criar a conta!");
        return history.push("/Login");
      })
      .catch((error) =>
        toast.error("Erro ao criar a conta, tente outro email!")
      );
  };

  const registerShema = yup.object().shape({
    name: yup
      .string()
      .required("Obrigatório")
      .matches(
        /^([A-Za-z])+([A-Za-z])\s([A-Za-z])+/g,
        "Completo e somente letras"
      ),
    email: yup.string().required("Obrigatório").email("Inválido"),
    password: yup
      .string()
      .required("Obrigatório")
      .matches(
        /^(?=.{8,})+(([A-Za-z])+([0-9])+([!@.]))/g,
        "*8 Caracteres com letras,números e !@."
      ),
    confirmPassword: yup
      .string()
      .required("Obrigatório")
      .oneOf([yup.ref("password"), null], "não corresponde!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerShema),
  });
  return (
    <Container>
      <BackgroundImage />
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Cadastro</h1>
            <Input
              register={register}
              error={errors.name?.message}
              name={"name"}
              icon={FiUser}
              label={"Nome"}
              placeholder="Seu nome completo"
            />
            <Input
              register={register}
              error={errors.email?.message}
              name={"email"}
              icon={FiMail}
              label={"Email"}
              placeholder="Seu melhor email"
            />
            <Input
              register={register}
              error={errors.password?.message}
              name={"password"}
              icon={FiLock}
              label={"Senha"}
              placeholder="Uma senha bem segura"
              type="password"
            />
            <Input
              register={register}
              error={errors.confirmPassword?.message}
              name={"confirmPassword"}
              icon={FiLock}
              label={"Confirmação da senha"}
              placeholder="Confirmação da senha"
              type="password"
            />
            <Button type="submit">Enviar</Button>
            <p>
              Já tem uma conta? faça <Link to="/Login">login</Link>
            </p>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
}
export default Singup;
