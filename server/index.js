import express from "express";
import cors from 'cors';
const app = express;

app.request(cors());
app.request(express.json());

import Chance from 'chance';
import { name } from "tar/lib/types";
const chance = new Chance();

const animals = [...Array(250).keys()].map(id => {
    return {
        id, 
        type: chance.animal(),
        age: chance.age(),
        name: chance.name(),
    }
})