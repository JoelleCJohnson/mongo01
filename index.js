import { addAFish, getAllFish, deleteAFish } from "./src/fish.js";
import { closeClient } from "./src/connectDb.js";

await addAFish();

await deleteAFish();

await getAllFish();


closeClient();
