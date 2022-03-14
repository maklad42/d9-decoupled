import React from "react"
import Days from "./days"

const Tasks = ({ tasks }) => (
  <>
    {tasks.edges.map(task => (
      <>
        <table className="project todolist">
          <tbody>
            <tr className="task-wrapper">
              <td className="task title">{task.node.title}</td>
              <td className="task due">{task.node.field_sub_project}</td>
              <td className="task start">{task.node.field_start_date}</td>
              <td className="task due">{task.node.field_due_by}</td>
              <td className="task due">{task.node.field_done}</td>
              {[...Array(10)].map((v, i) => (
                <Days key={i} />
              ))}
            </tr>
          </tbody>
        </table>
        {/* <div className="task-wrapper">
          <div className="task title">{task.node.title}</div>
          <div className="task due">{task.node.field_sub_project}</div>
          <div className="task start">{task.node.field_start_date}</div>
          <div className="task due">{task.node.field_due_by}</div>
          <div className="task due">{task.node.field_done}</div>
        </div> */}
      </>
    ))}
  </>
)

export default Tasks
