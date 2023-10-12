import { addAFish, getAllFish } from "./src/fish.js";
import { closeClient } from "./src/connectDb.js";

await addAFish();

await getAllFish();

closeClient();
