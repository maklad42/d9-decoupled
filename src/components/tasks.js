import React from "react"
import Days from "./days"

const fulldate = new Date("2022/02/28")
let today = "" + (fulldate.getMonth() + 1) + "/" + fulldate.getDate()
console.log(today)

const Tasks = ({ tasks }) => (
  <>
    <table className="project todolist">
      <thead>
        <tr>
          <th className="task-title">Task</th>
          <th className="task-title">Sub</th>
          <th className="task-title">Start</th>
          <th className="task-title">Due</th>
          <th className="task-title">Done</th>
          <th className="task-title schedule" colSpan={7}>
            {today}
          </th>
          <th className="task-title schedule" colSpan={7}></th>
          <th className="task-title schedule" colSpan={7}></th>
          <th className="task-title schedule" colSpan={7}></th>
          <th className="task-title schedule" colSpan={7}></th>
          <th className="task-title schedule" colSpan={7}></th>
          <th className="task-title schedule" colSpan={7}></th>
          <th className="task-title schedule" colSpan={7}></th>
          <th className="task-title schedule" colSpan={7}></th>
          <th className="task-title schedule" colSpan={7}></th>
        </tr>
      </thead>
      <tbody>
        {tasks.edges.map(task => (
          <>
            <tr className="task-wrapper">
              <td className="task title">{task.node.title}</td>
              <td className="task due">{task.node.field_sub_project}</td>
              <td className="task start">{task.node.field_start_date}</td>
              <td className="task due">{task.node.field_due_by}</td>
              <td className="task due">{task.node.field_done}</td>
              {[...Array(90)].map((v, i) => (
                <Days idx={i} />
              ))}
            </tr>
          </>
        ))}
      </tbody>
    </table>
  </>
)

export default Tasks
