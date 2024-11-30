import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/evaluate")
      .then((response) => setResults(response.data))
      .catch((error) => console.error("Error fetching results:", error));
  }, []);

  return (
    <div>
      <h1>Checklist Evaluation</h1>
      <table>
        <thead>
          <tr>
            <th>Rule</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index}>
              <td>{result.name}</td>
              <td>{result.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
