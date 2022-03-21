import React from "react"
import formatDate from "../lib/calcDates"

const Days = ({ idx, date, taskStart }) => {
  console.log(taskStart)

  // get day of week from date
  let d2 = new Date(date)
  const dDate = formatDate(d2)
  let d = d2.getDay()
  d = (d + idx) % 7
  // if Sat or Sun, add "weekend" class
  let weekend = false
  if (d === 0 || d === 6) {
    weekend = true
  }

  // check if this is the task start date
  let tStart = taskStart === dDate
  console.log({ tStart, dDate })

  return (
    <td
      className={weekend ? "schedule weekend" : "schedule"}
      data-day={idx}
    ></td>
  )
}

export default Days
