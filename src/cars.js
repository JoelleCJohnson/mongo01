import { ObjectId } from "mongodb";
import { db } from "./connectDb.js";

const carDb = db.collection('cars');

const car1 = {
    make: 'Toyota',
    model: 'Corolla',
    year: '2023',
    color: 'Red',
    awd: false,
}

const car2 = {
    make: 'Nissan',
    model: 'Rouge',
    year: '2018',
    color: 'white',
    awd: true,
}

const car3 = {
    make: 'Hyundai',
    model: 'Sonata',
    year: '2012',
    color: 'black',
    awd: false,
}

const car4 = {
    make: 'Toyota',
    model:'Prius',
    year: '2008',
    color: 'silver',
    awd: false,
}
 const car5 = {
    make: 'Ford',
    model: 'Focus',
    year: '2020',
    color: 'yellow',
    awd: true,
 }
//add car to db
export async function addACar(){
    const carAdded = await carDb.insertOne(car5);
    console.log('Car added:', carAdded);
}

//read all cars from database
export async function getAllCars(){
    const getCars = await carDb.find({}).toArray();
    console.table(getCars);
}

//delete a car from the database
export async function deleteACarByModel(){
    const deleteCarByModel = await carDb.findOneAndDelete({ model: 'Prius' });
    console.log("Deleted car:", deleteCarByModel);
}

export async function deleteACarById(){
    const carId = new ObjectId('652855c5caad717a19e4fea4');
    const deleteCarById = await carDb.findOneAndDelete({_id: carId})
    console.log("Car deleted by ID->", deleteCarById)
}

export async function updateACar(){
    const carId = new ObjectId('652857c543e6f4edbb6dc54e')
    const updatedCar = await carDb.findOneAndUpdate({ _id: carId }, { $set : { color: 'black' }})
    console.log('Car updated --->', updatedCar)
}
