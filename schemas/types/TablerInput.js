import { GraphQLInputObjectType, GraphQLInt } from "graphql";

const TablerInput = new GraphQLInputObjectType({
    name: "TestInput",
    fields: ()=>({
        testingQuery:{
            type: GraphQLInt
        }
    })
})

export default TablerInput;