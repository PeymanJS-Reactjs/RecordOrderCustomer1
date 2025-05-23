const express = require("express");
const mysql = require("mysql2");
const cors = require('cors');
const app = express();
const router = express.Router();
require("dotenv").config();

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders:['Content-Type','Authorization']
})) 
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET , POST , PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers','Content-Type');
//     next();
// });
// setup a router /
app.use("/", router);
app.use("sendInfo", router);
const PORT = 3012;

const getInfo = () => {
    try {
        const connection = mysql.createConnection({
            host: process.env.Local,
            user: process.env.Root,
            password: process.env.Password,
            port: process.env.Port,
            database: process.env.Database,
        });

        connection.connect((err) => {
            if (err) {
                console.log("Conn't access to database  Because:");
                console.log(err);
            }
            console.log("Access to database successfully");
        });
        return new Promise((res, rej) => {
            const queryMysql = "select * from customer";
            connection.execute(queryMysql, (err, result) => {
                if (err) {
                    rej(err)
                } else {
                    res(result)  
                }
            })
        });
    } catch (error) {
        console.log(error)
    }
    
};

const sendInfo = (obj) => {
    try {
        const connection = mysql.createConnection({
          host: process.env.Local,
          user: process.env.Root,
          password: process.env.Password,
          port: process.env.Port,
          database: process.env.Database,
        });
        connection.connect((err) => {
            if (err) {
                console.log("No ")
            } else {
                console.log("Yes")
            return new Promise((res, rej) => {
              const QueryMysql =
                "insert into customer (name , family  ,email , job , number , customer_product) values (?,?,?,?,?,?)";
                connection.execute(
                QueryMysql,
                [
                  obj.Name,
                  obj.Family,
                  obj.Email,
                  obj.Job,
                  obj.Number,
                  obj.Code
                ],
                (err) => {
                  if (err) {
                    rej(err);
                  } else {
                    res();
                  }
                }
              );
            });
            }
            connection.end();
        })

    } catch (error) {
        console.log(error)
    } 
}


// defind router /
router.get("/", async (req, res) => {
    const ress =  await getInfo();
    res.json(ress)
})

router.post("/sendInfo", async (req, res) => {
    const resultMysql = await sendInfo(req.body)
    console.log(resultMysql);
    res.status(200).json({
        Message: "ثبت با موفقبت انجام شد"
    });
    // res.send("Ok")
});


app.listen(PORT, () => {
  console.log("The server is running on port 3012");
});




