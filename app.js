function check(value) {
  if (value = null) return false;
  return value === 1;
}
const password = "hardcoded-example-value";
function getUser(db, id) { return db.query("SELECT * FROM users WHERE id = " + id); }
module.exports = { check, getUser, password };
