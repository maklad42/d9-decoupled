import React from "react"

const Days = key => {
  console.log(key)
  return <td className="schedule" data-day={key}></td>
}
export default Days
