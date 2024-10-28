import { MongoClient } from "mongodb";
// use mongodb to create a collection called "todo_items" with the following schema:
// {
//   name: string;
//   description?: string;
// }
async function setup() {
  const uri = "mongodb://127.0.0.1";
  const client = new MongoClient(uri);

  const db = client.db("test");

  const collection = db.collection("todo_items");

  // generate 3 todo items, first two with descriptions and third without
  const todoItems = [
    { name: "Do the dishes", description: "Unload AND load!!" },
    { name: "Walk the dog", description: "At least 15 minutes" },
    { name: "Nail this lesson" },
  ];

  // insert the todo items into the collection
  await collection.insertMany(todoItems);

  // close the connection
  client.close();
}

setup();