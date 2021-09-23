import { Container } from "./styles";
import { Redirect } from "react-router-dom";
function Dashboard({ authenticated }) {
  if (!authenticated) {
    return <Redirect to="/Login" />;
  }
  return <>dashboard</>;
}
export default Dashboard;
