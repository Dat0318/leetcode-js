/**
 * @param {string} s
 * @return {number}
 */
const deleteString = function (t) {
  let n = t.length
  const set = new Set(t.split(''))
  if (set.size == 1) return n

  let s = t.split('')
  if (n === 1 || (n === 2 && s[0] !== s[1])) return 1
  if (n === 2 && s[0] === s[1]) return 2
  if (n === 3 && s[0] === s[1]) return s[1] === s[2] ? 3 : 2
  else if (n === 3) return 1
  const f = new Array(n).fill(null)
  dfsSearchWithMemory(0)
  return f[0]

  function dfsSearchWithMemory(i) {
    if (i >= n) return 0
    if (f[i] !== null) return f[i]
    if (i === n - 1) return (f[i] = 1)
    let max = 0,
      cur = 0,
      j = i + 1
    for (j = i + 1; j <= ~~((n - i) / 2 + i); j++) {
      if (t.slice(j).startsWith(t.slice(i, j))) {
        cur = 1 + dfsSearchWithMemory(j)
        if (cur > max) max = cur
      }
    }
    if (j > (n - i) / 2 + i && max === 0) return (f[i] = 1)
    return (f[i] = max)
  }
}
