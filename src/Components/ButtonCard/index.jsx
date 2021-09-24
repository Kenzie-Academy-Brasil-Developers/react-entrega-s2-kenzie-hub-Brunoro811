import { ContainerButton } from "./styles";
function ButtonCard({ Icon, callback, id, title, status, classe }) {
  return (
    <ContainerButton>
      <button onClick={() => callback(id, title, status)} className={classe}>
        <Icon />
      </button>
    </ContainerButton>
  );
}
export default ButtonCard;
