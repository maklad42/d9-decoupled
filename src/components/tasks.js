import React from "react"
import Days from "./days"
import calcDays from "../lib/calcDays"

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
            {calcDays("2022/02/28", 0)}
          </th>
          <th className="task-title schedule" colSpan={7}>
            {calcDays("2022/02/28", 7)}
          </th>
          <th className="task-title schedule" colSpan={7}>
            {calcDays("2022/02/28", 14)}
          </th>
          <th className="task-title schedule" colSpan={7}>
            {calcDays("2022/02/28", 21)}
          </th>
          <th className="task-title schedule" colSpan={7}>
            {calcDays("2022/02/28", 28)}
          </th>
          <th className="task-title schedule" colSpan={7}>
            {calcDays("2022/02/28", 35)}
          </th>
          <th className="task-title schedule" colSpan={7}>
            {calcDays("2022/02/28", 42)}
          </th>
          <th className="task-title schedule" colSpan={7}>
            {calcDays("2022/02/28", 49)}
          </th>
          <th className="task-title schedule" colSpan={7}>
            {calcDays("2022/02/28", 56)}
          </th>
          <th className="task-title schedule" colSpan={7}>
            {calcDays("2022/02/28", 63)}
          </th>
          <th className="task-title schedule" colSpan={7}>
            {calcDays("2022/02/28", 70)}
          </th>
          <th className="task-title schedule" colSpan={7}>
            {calcDays("2022/02/28", 77)}
          </th>
          <th className="task-title schedule" colSpan={7}>
            {calcDays("2022/02/28", 85)}
          </th>
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
                <Days idx={i} date="2022/02/28" />
              ))}
            </tr>
          </>
        ))}
      </tbody>
    </table>
  </>
)

export default Tasks
