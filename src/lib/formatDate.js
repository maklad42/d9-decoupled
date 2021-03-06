export default function formatDate(date) {
  var y = date.getFullYear()
  var m = date.getMonth() + 1
  var d = date.getDate()

  m = m < 10 ? "0" + m : m
  d = d < 10 ? "0" + d : d

  return [y, m, d].join("-")
}
