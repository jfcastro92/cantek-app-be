import { Field, ID, ObjectType } from '@nestjs/graphql';

import { CreateUserInput } from './create-user.input';
import { UserStatus } from './user.enum';

export type UserKey = {
  id: string;
};

@ObjectType({ implements: CreateUserInput })
export class User extends CreateUserInput {
  @Field(/* istanbul ignore next */ () => ID)
  id: string;

  @Field(/* istanbul ignore next */ () => UserStatus)
  status: UserStatus;

  @Field()
  createAt: string;
}
