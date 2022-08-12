import cors from "cors";
import express, { Express } from "express";
import { MongoClient, MongoClientOptions } from "mongodb";
import todoRoutes from "./routes/index";

const app: Express = express();

const PORT: string | number = process.env.PORT || 4000;

app.use(cors());
app.use(todoRoutes);

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@task-control.gjlsvkj.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as MongoClientOptions);

async function run() {
  try {
    await client.connect();
    await client.db(process.env.MONGO_DB).command({ ping: 1 });
    console.log("Connect successfully to db");
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log("Something went's wrong: ", error);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
