import UserResolvers from "@schema/user/resolvers";
import PostResolvers from "@schema/post/resolvers";
import AuthResolvers from "@schema/auth/resolvers";

const resolvers = [UserResolvers, PostResolvers, AuthResolvers];

export default resolvers;
