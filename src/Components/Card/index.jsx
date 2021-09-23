import { Container } from "./styles";
import { FiClipboard, FiCalendar, FiBarChart } from "react-icons/fi";
import Button from "../Button";
import { useEffect, useState } from "react";
function Card({ element: { title, created_at, status, onClick } }) {
  const [date, setDate] = useState("");
  const [year] = useState(created_at.substring(0, 4));
  const [month] = useState(created_at.substring(6, 7));
  const [day] = useState(created_at.substring(9, 10));
  useEffect(() => {
    setDate(`${day}-${month}-${year}`);
  }, [day, month, year]);
  return (
    <Container>
      <span>
        <h4>
          <FiClipboard />
          {title}
        </h4>
      </span>
      <hr />
      <time>
        <FiCalendar /> {date}
      </time>
      <p>
        <FiBarChart />
        {status}
      </p>
      <Button onClick={onClick}>Editar</Button>
    </Container>
  );
}
export default Card;
