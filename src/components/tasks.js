import React from "react"

const Tasks = ({ tasks }) => (
  <>
    {tasks.edges.map(task => (
      <>
        <div>{task.node.title}</div>
        <div>{task.node.field_start_date}</div>
        <div>{task.node.field_due_by}</div>
      </>
    ))}
  </>
)

export default Tasks
