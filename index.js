import express from "express";
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

app.listen(8080, async ()=>{
    try{
        console.log("server online");
    }catch(err){
        console.log(err);
    }
})