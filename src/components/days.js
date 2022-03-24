import React from "react"
import formatDate from "../lib/formatDate"

const Days = ({ idx, date, taskStart, taskDue }) => {
  // console.log(date)

  // get day of week from date
  let d2 = new Date(date)
  let d = d2.getDay()
  d = (d + idx) % 7
  // if Sat or Sun, add "weekend" class
  let weekend = false
  if (d === 0 || d === 6) {
    weekend = true
  }

  // create a new date to compare with start date
  let d3 = new Date(date)
  d3.setDate(d3.getDate() + idx + 1)
  let d4 = formatDate(d3)

  // check if this is the task start date
  let active = false
  let tStart = taskStart === d4
  let tDue = taskDue === d4
  // if (tStart) {
  // console.log(new Date(taskStart).getTime())
  // console.log(new Date(date).getTime())
  // }

  if (
    new Date(d3).getTime() > new Date(taskStart).getTime() &&
    new Date(d3).getTime() < new Date(taskDue).getTime()
  ) {
    active = true
  }

  return (
    <td
      className={
        weekend
          ? "schedule weekend"
          : tStart
          ? "tStart schedule"
          : tDue
          ? "tDue schedule"
          : active
          ? "active schedule"
          : "schedule"
      }
      data-day={idx}
      data-date={d4}
    ></td>
  )
}

export default Days
