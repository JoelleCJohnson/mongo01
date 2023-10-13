import { ObjectId } from "mongodb";
import { db } from "./src/connectDb.js";

const statesDb = db.collection('United States');

// create object
const alabama = {
    population: 5039877,
    capital:'Montgomery',
    squareMiles: 52419,
}

// add to database
export async function addState(){
    const stateAdded = await statesDb.insertOne(alabama)
    console.log('State added -->', stateAdded);
}

//read from database
export async function getAllStates(){
    const getStates = await statesDb.find({}).toArray();
    console.table(getStates);
}

//delete from database by property
export async function deleteStateByCapital(){
    const deleteByCapital = await statesDb.deleteOne({ capital: 'Montgomery' });
    console.log('Deleted state --->', deleteByCapital);
}

//delete from database by ID
export async function deleteStateById(){
    const stateId = new ObjectId('6528b2e25abb60323a1fbede')
    const deleteStateUsingId = statesDb.findOneAndDelete({ _id: stateId });
    console.log('deleted state (by ID) --->', deleteStateById);
}

//update a record on the database
export async function updateState(){
    const updateID = new ObjectId('6528b45ef1e32cc0c3e3ae9d')
    const updatedState = statesDb.findOneAndUpdate({ _id: updateID }, { $set: { population: 5040000}})
    console.log('Updated state --->', updatedState);
}