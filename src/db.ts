
import { Pool } from "pg";
const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || "5432")
  });
  
  const connectToDB = async () => {
    try {
      await pool.connect();
      console.log("Connected to db");
      
    } catch (err) {
      console.log(err);
    }
  };

  export default connectToDB;


  // const pool = new Pool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: parseInt(process.env.DB_PORT || "5432")
// });

// const connectToDB = async () => {
//   try {
//     await pool.connect();
//     console.log("Connected to db");

//   } catch (err) {
//     console.log(err);
//   }
// };

// connectToDB();