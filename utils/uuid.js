// This is an imperfect UUID which I recycled from some other code.
// If time (and my own ability) allows, I'd like to update it to reject duplicate IDs,
// But because it's using hexidecimal character syntax, the likelihood of duplicate IDs should
// be minimal.

module.exports = () =>
  Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
