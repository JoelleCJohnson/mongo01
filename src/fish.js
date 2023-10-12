import { ObjectId } from "mongodb";
import { db } from "./connectDb.js";

const fishDb = db.collection('fish');

/*const theFish = {
    species: 'tetra',
    origin: 'Amazon',
    color: 'silver',
    size: '1"',
    family: {dad: '🐠', 
        sister: '🍣', 
        mom: { cool : true, special: undefined }, 
        brothers: ['🐬', '🦞']
    },
};*/

// add a fish 
export async function addAFish() {
    //Add a fish to the database
    const fishAdded = await fishDb.insertOne(theFish);
    console.log('Fish added:', fishAdded);
}
 // get all fish
export async function getAllFish(){
    const fishList = await fishDb.find({}).toArray();
    console.table(fishList);
}

// delete a fish
export async function deleteAFish(identifier){
    //find the fish by property & delete
    const fishDeleted = await fishDb.findOneAndDelete({species: 'tetra'});
    console.log("Fish deleted:", fishDeleted);

    //delete by ID
    const myId = new ObjectId('652845297f451183336eb332')
    const fishDeleteById = await fishDb.findOneAndDelete({_id: myId});
}

//update fish
export async function updateOneFish(){
 //find the fish
 //determine what to update
 //find the fish we want to update
 // update the fish 
    const cleanId =new ObjectId('6528480cbc400170467b7b4d')

    const updatedFish = await fishDb.findOneAndUpdate({ _id : cleanId }, { $set: { color: 'red' } });
    console.log("updated fish:", updatedFish)
}