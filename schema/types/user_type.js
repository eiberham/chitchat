const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID
} = graphql;

const UserType = new GraphQLObjectType({
    name: 'UserType',
    fields: {
        id: {type: GraphQLID},
        name: {type: GraphQLString },
        gender: {type: GraphQLString},
        email: { type: GraphQLString }
    }
});

module.exports = UserType;