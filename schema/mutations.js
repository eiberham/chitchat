const graphql = require('graphql');
const auth = require('../services/auth');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
} = graphql;

const UserType = require('./types/user_type');

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        signup: {
            type: UserType,
            args: {
                email: { type: new GraphQLNonNull(GraphQLString) },
                name: { type: new GraphQLNonNull(GraphQLString)},
                gender: { type: new GraphQLNonNull(GraphQLString)},
                password: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parentValue, {email, name, gender, password}, req){
                return auth.signup({email, name, gender, password,  req});
            }
        },
        logout: {
            type: UserType,
            resolve(parentValue, args, req){
                const { user } = req;
                req.logout();
                return user;
            }
        },
        login: {
            type: UserType,
            args: {
                email: { type: new GraphQLNonNull(GraphQLString) },
                password: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parentValue, {email, password}, req){
                return auth.login({email, password, req});
            }
        }
    }
});

module.exports = mutation;