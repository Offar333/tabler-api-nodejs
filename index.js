import express from "express";
import dotenv from "dotenv";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import Schema from "./schemas/index.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/graphql", graphqlHTTP({
    schema: Schema,
    graphiql: true
}))

app.listen(dotenv.config.SERVER_PORT, async ()=>{
    try{
        console.log("server online");
    }catch(err){
        console.log(err);
    }
})