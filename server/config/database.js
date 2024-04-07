const mongoose = require("mongoose");

require("dotenv").config();

const dbconnect = () => {
  mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
  })
  .then(()=> console.log("Database Connection Succesfully"))
  .catch((error) => {
    console.log("Error to connect databaase" + error);
    console.log(error.message);
    procees.exit(1)
});
}
moduiule.exports =dbconnect;