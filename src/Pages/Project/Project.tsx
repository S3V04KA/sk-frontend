import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import Task from "../../Components/Task/Task";

import "./Project.scss";

function Project() {
  const { id } = useParams(); 

  return (
    <div className="project">
      <div className="header">
        <button onClick={() => window.history.back()}><FontAwesomeIcon icon={faChevronLeft} size="3x" color="#36B93F" /></button>
        <h1>Проект {id}</h1>
      </div>
      <div className="info">

      </div>
      <div className="deadlines">
        <h2>Ответственный — Иван Иванович Иванов</h2>
        <table>
          <Task title={"Задача 1"} date={"01.01.2024"} status={true} />
          <Task title={"Задача 2"} date={"13.01.2024"} status={false} />
        </table>
      </div>
    </div>
  )
}

export default Project;