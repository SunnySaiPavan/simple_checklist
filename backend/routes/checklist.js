const express = require("express");
const axios = require("axios");
const rules = require("../config/rules");
const db = require("../database/db");

const router = express.Router();

router.get("/evaluate", async (req, res) => {
  try {
    const { data } = await axios.get(
      "http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/67339ae56d5231c1a2c63639"
    );

    const results = rules.map((rule) => {
      const value = rule.field ? data[rule.field] : data;
      const passed = rule.condition(value);
      db.run(
        `INSERT INTO checklist_results (rule_name, status) VALUES (?, ?)`,
        [rule.name, passed ? "Passed" : "Failed"]
      );
      return { name: rule.name, status: passed ? "Passed" : "Failed" };
    });

    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error evaluating checklist.");
  }
});

module.exports = router;



