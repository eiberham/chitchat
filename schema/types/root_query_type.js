const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLList } = graphql;
const UserType = require('./user_type');
const User = mongoose.model('user');

const RootQueryType = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: new GraphQLList(UserType),
            resolve(parentValue, args, req){
                return User.find({});
            }
        }
    }
});

module.exports = RootQueryType;