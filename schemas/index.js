import { GraphQLSchema, GraphQLObjectType } from "graphql";
import TablerQuery from "./queries/tabler.query.js";
import TablerMutation from "./mutations/tabler.mutation.js";


const Schema = new GraphQLSchema({
    types: null,
    query: new GraphQLObjectType({
        name: "RootQueryType",
        fields: {
            ...TablerQuery
        }
    }),
    mutation: new GraphQLObjectType({
        name: "RootMutation",
        fields: {
            ...TablerMutation
        }
    })
});

export default Schema;