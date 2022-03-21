import React from "react"
import Days from "./days"
import calcDays from "../lib/calcDates"

const Tasks = ({ tasks, calStartDate }) => (
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
            {calcDays(calStartDate, 0)}
          </th>
          <th className="task-title schedule" colSpan={7}>
            {calcDays(calStartDate, 7)}
          </th>
          <th className="task-title schedule" colSpan={7}>
            {calcDays(calStartDate, 14)}
          </th>
          <th className="task-title schedule" colSpan={7}>
            {calcDays(calStartDate, 21)}
          </th>
          <th className="task-title schedule" colSpan={7}>
            {calcDays(calStartDate, 28)}
          </th>
          <th className="task-title schedule" colSpan={7}>
            {calcDays(calStartDate, 35)}
          </th>
          <th className="task-title schedule" colSpan={7}>
            {calcDays(calStartDate, 42)}
          </th>
          <th className="task-title schedule" colSpan={7}>
            {calcDays(calStartDate, 49)}
          </th>
          <th className="task-title schedule" colSpan={7}>
            {calcDays(calStartDate, 56)}
          </th>
          <th className="task-title schedule" colSpan={7}>
            {calcDays(calStartDate, 63)}
          </th>
          <th className="task-title schedule" colSpan={7}>
            {calcDays(calStartDate, 70)}
          </th>
          <th className="task-title schedule" colSpan={7}>
            {calcDays(calStartDate, 77)}
          </th>
          <th className="task-title schedule" colSpan={7}>
            {calcDays(calStartDate, 85)}
          </th>
        </tr>
      </thead>
      <tbody>
        {tasks.edges.map((task, i) => (
          <>
            <tr key={i} className="task-wrapper">
              <td className="task title">{task.node.title}</td>
              <td className="task due">{task.node.field_sub_project}</td>
              <td className="task start">{task.node.field_start_date}</td>
              <td className="task due">{task.node.field_due_by}</td>
              <td className="task due">{task.node.field_done}</td>
              {[...Array(90)].map((v, i) => (
                <Days
                  idx={i}
                  date={calStartDate}
                  taskStart={task.node.field_start_date}
                />
              ))}
            </tr>
          </>
        ))}
      </tbody>
    </table>
  </>
)

export default Tasks
