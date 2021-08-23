import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLFloat, GraphQLBoolean, graphql } from "graphql";

const TablerQuery = new GraphQLObjectType({
    name: "TestQuery",
    fields: ()=>({
        testingQuery:{
            type: GraphQLInt
        }
    })
})

export default TablerQuery;