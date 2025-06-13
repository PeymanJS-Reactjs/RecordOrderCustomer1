const express = require("express");

const router = express.Router();

const {
  connection,
  RegisterFunction,
  checkUsername,
  strongPassword,
  checkCode,
  checkEmail
} = require("./Queries");

const { check, validationResult } = require("express-validator");

// the function is PoolToDatabase in Queries.js module
connection()

router.get("/", (req, res) => {
  try {
    console.log(req.query);
    res.status(200).json({ message: "OK" });
  } catch (error) {
    console.log(error);
  }
});

router.post(
  "/sendInfo",
  [
    check("Name")
      .notEmpty()
      .isString()
      .withMessage("The Name of user is Invalid"),
    check("Family")
      .notEmpty()
      .isString()
      .withMessage("The Family of user is Invalid"),
    check("UserName").notEmpty().custom(checkUsername),
    check("Phone"),
    // .notEmpty()
    // .isLatLong({ min: 5, max: 11 })
    // .withMessage("The number of phone is invalid"),
    check("Email")
      .notEmpty()
      .isEmail()
      .withMessage("The Email is invalid")
      .custom(checkEmail),
    check("Password").custom(strongPassword),
    check("CodeNational")
      .notEmpty()
      .isLength({ min: 10, max: 10 })
      .withMessage("The CodeNational is Invalid")
      .custom(checkCode),
  ],
  async (req, res) => {
    const { Name, Family, UserName, Phone, Email, Password, CodeNational } =
      req.body;
    // strongPassword("Peyman3322@");
    const errorValidator = validationResult(req);
    if (!errorValidator.isEmpty()) {
      return res.status(400).json({
        message: errorValidator.array(),
      });
    }

    if (errorValidator.isEmpty()) {
      RegisterFunction(
        Name,
        Family,
        UserName,
        CodeNational,
        Phone,
        Email,
        Password
      );

      return res.status(200).json({ message: "Info Insert into Database" });
    }
  }
);

router.get("/Postter/:id", async(req, res) => {

  

  // const resutl = 
  // console.log(typeof resutl)
  // if (typeof resutl == "object") {
  //   res.status(200).json({ message: "The user does exist in db" });
  // } else if(typeof resutl == "boolean") {
  //   res.status(200).json({ message: "The user does not exist in db" });
  // }
});

module.exports = router;
