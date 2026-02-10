const express = require("express");
const router = express.Router();
const { fibonacci, filterPrimes, hcfArray, lcmArray } = require("../utils/math");
const { askAI } = require("../utils/ai");




// health chk
router.get("/health", (req, res) => {
  res.status(200).json({
    is_success: true,
    official_email: "garima1824.be23@chitkara.edu.in"
  });
});


router.post("/bfhl", async (req, res) => {
    //console.log("Route bfhl working")
  try {
    const body = req.body;
    const keys = Object.keys(body);

    if (keys.length !== 1) {
      return res.status(400).json({
        is_success: false,
        error: "Exactly one key is required"
      });
    }

    const key = keys[0];
    let data;


if (key === "fibonacci") {
  data = fibonacci(body[key]);
} else if (key === "prime") {
  data = filterPrimes(body[key]);
} else if (key === "hcf") {
  data = hcfArray(body[key]);
} else if (key === "lcm") {
  data = lcmArray(body[key]);
} else if (key === "AI") {
  data = await askAI(body[key]);
} else {
  return res.status(400).json({
    is_success: false,
    error: "Unsupported key"
  });
}



    res.status(200).json({
      is_success: true,
      official_email: "garima1824.be23@chitkara.edu.in",
      data
    });

  } catch (err) {
    res.status(400).json({
      is_success: false,
      error: "Invalid input"
    });
  }
});


module.exports = router;
