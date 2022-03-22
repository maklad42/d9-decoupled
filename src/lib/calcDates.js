export default function calcDays(date, offset = 0) {
  const fulldate = new Date(date)
  fulldate.setDate(fulldate.getDate() + offset)
  let today = "" + (fulldate.getMonth() + 1) + "/" + fulldate.getDate()
  return today
}
