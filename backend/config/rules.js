module.exports = [
    {
      id: 1,
      name: "Valuation Fee Paid",
      field: "isValuationFeePaid",
      condition: (value) => value === true,
    },
    {
      id: 2,
      name: "UK Resident",
      field: "isUkResident",
      condition: (value) => value === true,
    },
    {
      id: 3,
      name: "Risk Rating Medium",
      field: "riskRating",
      condition: (value) => value === "Medium",
    },
    {
      id: 4,
      name: "LTV Below 60%",
      field: null,
      condition: (data) =>
        (data.loanRequired / data.purchasePrice) * 100 < 60,
    },
  ];
  