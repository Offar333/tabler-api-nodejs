import { GraphQLSchema, GraphQLObjectType } from "graphql";


const Schema = new GraphQLSchema({
    types: null,
    query: new GraphQLObjectType({
        name: "RootQueryType",
        fields: {
            name: null
        }
    }),
    mutation: new GraphQLObjectType({
        name: "RootMutation",
        fields: {
            name: null
        }
    })
});

export default Schema;