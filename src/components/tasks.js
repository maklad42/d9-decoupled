import React from "react"

const Tasks = ({ tasks }) => (
  <>
    {tasks.edges.map(task => (
      <>
        <div className="task-wrapper">
          <div className="task title">{task.node.title}</div>
          <div className="task start">{task.node.field_start_date}</div>
          <div className="task due">{task.node.field_due_by}</div>
        </div>
      </>
    ))}
  </>
)

export default Tasks
