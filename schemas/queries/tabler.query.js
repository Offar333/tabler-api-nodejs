import { GraphQLString } from "graphql";

const tablerQueries = {
    testQuery: {
        type: GraphQLString,
        resolve: () => "Queries test"
    }
}

export default tablerQueries;