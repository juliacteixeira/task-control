import { json, urlencoded } from "body-parser";
import cors from "cors";
import express, { Express } from "express";
import { ServerApiVersion } from "mongodb";
import mongoose, { MongooseOptions } from "mongoose";
import router from "./routes/task-control";

const app: Express = express();
const PORT: string | number = process.env.PORT || 4001;



const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@tasks.gjlsvkj.mongodb.net/taskControl?retryWrites=true&w=majority`;

const client = ({
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS:30000,
  keepAlive: false,
  serverApi: ServerApiVersion.v1,
} as MongooseOptions);

mongoose.connect(uri, client, (err) => {
  if (err) console.log(err);
  
})

app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json());
app.use("/to-doing", router);

app.listen(PORT, function () {
  console.log("Runnning on " + PORT);
});
module.exports = app;
// client.connect(err => {
//   const collection = client.db(process.env.MONGO_DB).collection("tasks").watch().on('change', change => console.log(change));
//   if(err) {
//     console.log(err);
//     client.close() 
//   } else {
//     console.log("Connect successfully to db");
//     app.listen(PORT, () => {
//       console.log(`Server running on http://localhost:${PORT}`);
//     });
//   }
// })
