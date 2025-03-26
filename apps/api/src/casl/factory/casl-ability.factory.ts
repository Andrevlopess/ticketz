import {
  Ability,
  AbilityBuilder,
  AbilityClass,
  CreateAbility,
  createMongoAbility,
  ExtractSubjectType,
  InferSubjects,
  PureAbility,
} from '@casl/ability';
import { Injectable } from '@nestjs/common';
import { Action } from 'src/models/actions';

class Article {
  id: number;
  isPublished: boolean;
  authorId: number;

  constructor(id: number, isPublished: boolean, authorId: number) {
    this.id = id;
    this.isPublished = isPublished;
    this.authorId = authorId;
  }
}

export class CaslUser {
  id: number;
  isAdmin: boolean;

  constructor(id: number, isAdmin: boolean) {
    this.id = id;
    this.isAdmin = isAdmin;
  }
}
type Subjects = InferSubjects<typeof Article | typeof CaslUser> | 'all';

export type AppAbility = PureAbility<[Action, Subjects]>;
export const createAppAbility = createMongoAbility as CreateAbility<AppAbility>;

@Injectable()
export class CaslAbilityFactory {
  createForCaslUser(user: CaslUser) {
    // const { can, cannot, build } = new AbilityBuilder<
    //   PureAbility<[Action, Subjects]>
    // >(PureAbility as AbilityClass<AppAbility>);

    const builder = new AbilityBuilder(createAppAbility);

    if (user.isAdmin) {
      builder.can(Action.Manage, 'all'); // read-write access to everything
    } else {
      builder.can(Action.Read, 'all'); // read-only access to everything
    }

    // can(Action.Update, Article, { authorId: user.id });
    // cannot(Action.Delete, Article, { isPublished: true });

    return builder.build({
      // Read https://casl.js.org/v6/en/guide/subject-type-detection#use-classes-as-subject-types for details
      detectSubjectType: (item) =>
        item.constructor as ExtractSubjectType<Subjects>,
    });
  }
}
