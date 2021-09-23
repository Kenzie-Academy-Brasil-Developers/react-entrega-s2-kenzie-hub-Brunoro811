import {
  Container,
  BackgroundImage,
  AnimationContainer,
  Content,
} from "./styles";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";
import Input from "../../Components/Input";
import { FiMail, FiLock } from "react-icons/fi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../Services/Api";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";
function Login({ authenticated, setAuthenticated }) {
  const onSubmitFunction = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        const { token } = response.data;
        localStorage.setItem("@Doit:token", JSON.stringify(token));
        toast.success("Sucesso ao fazer login!");
        setAuthenticated(true);
        return <Redirect to="/Dashboard" />;
      })
      .catch((error) => {
        toast.error("Erro, Senha e Email incorretos ou não cadastrados!");
      });
  };
  const registerShema = yup.object().shape({
    email: yup.string().required("Obrigatório").email("Email inválido"),
    password: yup.string().required("Obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerShema),
  });
  if (authenticated) {
    return <Redirect to="/Dashboard" />;
  }
  return (
    <Container>
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Login</h1>
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
              placeholder="Sua senha"
              type="password"
            />
            <Button type="submit">Entrar</Button>
            <p>
              Não tem uma conta? <Link to="/Singup">cadastre-se</Link>
            </p>
          </form>
        </AnimationContainer>
      </Content>
      <BackgroundImage />
    </Container>
  );
}
export default Login;
