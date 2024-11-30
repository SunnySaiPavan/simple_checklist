const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(":memory:");

db.serialize(() => {
  db.run(`CREATE TABLE checklist_results (
    id INTEGER PRIMARY KEY,
    rule_name TEXT,
    status TEXT
  )`);
});

module.exports = db;
