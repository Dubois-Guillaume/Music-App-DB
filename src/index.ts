import "dotenv/config";
import { MongoClient } from "mongodb";

const Artists = [
  {
    sceneName: "Skrillex",
    firstName: "Sonny John",
  },
  {
    sceneName: "Stonbank",
    firstName: "Michael Stephen",
  },
];

const Albums = [
  {
    name: "Monument EP",
    release: "2015-11-27",
  },
  {
    name: "Scary Monsters and Nice Sprites",
    release: "2010-10-22",
  },
];

const databaseUrl = process.env.MONGODB_DATABASE_URL || "";
const client = new MongoClient(databaseUrl);
client.connect().then((client) => {
  const db = client.db("Music-Catalog");
  // code here

  db.collection("Artists").insertMany(Artists);

  db.collection("Albums")
    .insertMany(Albums)
    .then(() => client.close());
});
