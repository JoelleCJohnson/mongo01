import { addAFish, getAllFish, deleteAFish, updateOneFish } from "./src/fish.js";
import { closeClient } from "./src/connectDb.js";
import { addACar, deleteACarById, deleteACarByModel, getAllCars, updateACar } from "./src/cars.js";
import { addState, deleteStateByCapital, deleteStateById, getAllStates, updateState } from "./states.js";

//await addAFish();
//await deleteAFish();
//await updateOneFish(); 
//await getAllFish();

// await addACar();
// await deleteACarByModel();
// await deleteACarById();
// await updateACar();
// await getAllCars();

// await addState();
// await deleteStateByCapital();
// await deleteStateById();
await updateState();
await getAllStates();

closeClient();
