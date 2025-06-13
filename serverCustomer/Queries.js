const mysql = require("mysql2/promise");

let pool;
let connection;

// The function is a setup connect to database that do with pool
async function PoolToDatabase() {
  pool = mysql.createPool({
    user: "root",
    host: "localhost",
    port: 3306,
    database: "registersell",
    password: "admin",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });
}

// The function is a query to insert into database
async function RegisterCustomers(N, F, U, C, P, E, PA) {
  try {
    connection = await pool.getConnection();
    if (connection) {
      console.log("Connection to Database");
      const [rows] = await connection.query(
        "insert into customer(name , family , userName , number  , email  , password  , codeNational) values (?,?,?,?,?,?,?)",
        [N, F, U, P, E, PA, C]
      );
      console.log(rows.affectedRows);
    }
  } catch (error) {
    console.log(error);
  } finally {
    if (connection) {
      connection.release();
      console.log("The connection released");
    }
  }
}



// ---------------------- Selection of custom validator fileds ------------------------//


// The function execute a query and checking query relat to username
const isUsernameUnique = async (value) => {
  const query = "SELECT * FROM customer WHERE userName = ?";
  const [rows] = await pool.query(query, [value]);
  if (rows.length > 0) {
    throw new Error("The user is exist, please enter other username");
  }
  return true;
};

// The function execute a command and checking algorithom relat to password
const isStrongPassword = (value) => {
  const strongPasswordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&]).{8,}$/;
  if (!strongPasswordRegex.test(value)) {
    throw new Error(
      "Password must be at least 8 characters long and include uppercase letters, lowercase letters, numbers, and special characters."
    );
  }
  return true;
};
// The function execute a command and checking algorithom relat to CodeNational
const isCodeNationalUnique = async (value) => {
  const query = "SELECT * FROM customer WHERE codeNational= ?";
  const [rows] = await pool.query(query, [value]);
  if (rows.length > 0) {
    throw new Error("The Code is exist, please enter other code");
  }
  return true;
};
// The function execute a command and checking algorithom relat to Email
const isEmailUnique = async (value) => {
  const query = "SELECT * FROM customer WHERE email = ?";
  const [rows] = await pool.query(query, [value]);
  if (rows.length > 0) {
    throw new Error("The Email is exist, please enter other username");
  }
  return true;
};

module.exports = {
  connection: PoolToDatabase,
  RegisterFunction: RegisterCustomers,
  checkUsername: isUsernameUnique,
  strongPassword: isStrongPassword,
  checkCode: isCodeNationalUnique,
  checkEmail:isEmailUnique
};
