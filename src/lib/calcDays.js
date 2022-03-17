export default function calcDays(date, offset) {
  const fulldate = new Date(date)
  fulldate.setDate(fulldate.getDate() + offset)
  let today = "" + (fulldate.getMonth() + 1) + "/" + fulldate.getDate()
  return today
}
