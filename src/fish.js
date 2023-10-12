import { db } from "./connectDb.js";

const theFish = {
    species: 'tetra',
    origin: 'Amazon',
    color: 'silver',
    size: '1"',
    family: {dad: '🐠', 
        sister: '🍣', 
        mom: { cool : true, special: undefined }, 
        brothers: ['🐬', '🦞']
    },
};

// add a fish 
export async function addAFish() {
    //Add a fish to the database
    const fishAdded = await db.collection('fish').insertOne(theFish);
    console.log('Fish added:', fishAdded);
}
 // get all fish
export async function getAllFish(){
    const fishList = await db.collection('fish').find({}).toArray();
    console.table(fishList);
}

// delete a fish
export async function deleteAFish(fish){
    const fishToDelete = { species: 'cichlid'}
    const fishDelete = await db.collection('fish').deleteOne(fishToDelete);

}