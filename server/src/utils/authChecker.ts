import { AuthChecker } from "type-graphql";

import { IUser } from "@models/user";

export interface IContext {
  user?: IUser;
}

/**
 * Check that request was signed with user's token
 */
export const authChecker: AuthChecker<IContext> = async (
  { context, args },
) => {
  console.log(args);
  if (context.user) {
    return true;
  }

  return false;
};
