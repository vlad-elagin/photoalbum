import { UserResolver } from "@schema/user/resolvers";
import { PostResolver } from "@schema/post/resolvers";
import { AuthResolver } from "@schema/auth/resolvers";

export const resolvers = [UserResolver, PostResolver, AuthResolver];

