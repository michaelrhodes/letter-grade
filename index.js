module.exports = function (p) {
  return (
    p > 100 ? void 0 :
    p >= 95 ? 'A+' :
    p >= 93 ? 'A' :
    p >= 90 ? 'A-' :
    p >= 87 ? 'B+' :
    p >= 83 ? 'B' :
    p >= 80 ? 'B-' :
    p >= 77 ? 'C+' :
    p >= 73 ? 'C' :
    p >= 70 ? 'C-' :
    p >= 67 ? 'D+' :
    p >= 63 ? 'D' :
    p >= 60 ? 'D-' :
    p >= 0 ? 'F' :
    void 0
  )
}
