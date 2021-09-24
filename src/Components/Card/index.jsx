import { Container } from "./styles";
import {
  FiClipboard,
  FiCalendar,
  FiBarChart,
  FiTrash2,
  FiEdit,
} from "react-icons/fi";
import { useEffect, useState } from "react";
import ButtonCard from "../ButtonCard";
function Card({
  handleDelete,
  handleEdit,
  element: { id, title, created_at, status },
}) {
  const [date, setDate] = useState("");
  const [year] = useState(created_at.substring(0, 4));
  const [month] = useState(created_at.substring(6, 7));
  const [day] = useState(created_at.substring(9, 10));
  useEffect(() => {
    setDate(`${day}-${month}-${year}`);
  }, [day, month, year]);
  return (
    <Container>
      <div>
        <ButtonCard
          Icon={FiEdit}
          callback={handleEdit}
          id={id}
          title={title}
          status={status}
          classe={""}
        />
        <ButtonCard
          Icon={FiTrash2}
          callback={handleDelete}
          id={id}
          classe={"close"}
        />
      </div>
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
    </Container>
  );
}
export default Card;
