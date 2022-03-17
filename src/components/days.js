import React from "react"

const Days = ({ idx, date }) => {
  // console.log(idx)

  // get day of week from date
  let d2 = new Date(date)
  let d = d2.getDay()
  console.log(date)
  d = (d + idx) % 7
  // if Sat or Sun, add "weekend" class
  let weekend = false
  if (d === 0 || d === 6) {
    weekend = true
  }

  return (
    <td
      className={weekend ? "schedule weekend" : "schedule"}
      data-day={idx}
    ></td>
  )
}

export default Days
