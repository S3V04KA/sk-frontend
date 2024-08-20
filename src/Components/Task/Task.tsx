import "./Task.scss";

function Task({title, date, status}: {title: string, date: string, status: boolean}) {
  return (
    <tr className="task">
      <td className="task-title">{title}</td>
      <td className="task-date">до {date}</td>
      <td className="task-status">{status ? "Выполнено" : "Не выполнено"}</td>
    </tr>
  )
}

export default Task;