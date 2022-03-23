import React from "react"
import formatDate from "../lib/formatDate"

const Days = ({ idx, date, taskStart, taskDue }) => {
  console.log(date)

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
  d3 = formatDate(d3)

  // check if this is the task start date
  let active = false
  let tStart = taskStart === d3
  let tDue = taskDue === d3
  if (tStart) {
    console.log(tStart.getTime())
    console.log(d3.getTime())
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
          : "schedule"
      }
      data-day={idx}
      data-date={d3}
    ></td>
  )
}

export default Days
