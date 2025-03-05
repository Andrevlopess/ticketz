
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Organization
 * 
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model Membership
 * 
 */
export type Membership = $Result.DefaultSelection<Prisma.$MembershipPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model Ticket
 * 
 */
export type Ticket = $Result.DefaultSelection<Prisma.$TicketPayload>
/**
 * Model TicketNotes
 * 
 */
export type TicketNotes = $Result.DefaultSelection<Prisma.$TicketNotesPayload>
/**
 * Model TagsOnTicket
 * 
 */
export type TagsOnTicket = $Result.DefaultSelection<Prisma.$TagsOnTicketPayload>
/**
 * Model TicketAssignments
 * 
 */
export type TicketAssignments = $Result.DefaultSelection<Prisma.$TicketAssignmentsPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model Status
 * 
 */
export type Status = $Result.DefaultSelection<Prisma.$StatusPayload>
/**
 * Model Group
 * 
 */
export type Group = $Result.DefaultSelection<Prisma.$GroupPayload>
/**
 * Model UsersOnGroup
 * 
 */
export type UsersOnGroup = $Result.DefaultSelection<Prisma.$UsersOnGroupPayload>
/**
 * Model Priority
 * 
 */
export type Priority = $Result.DefaultSelection<Prisma.$PriorityPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  MASTER: 'MASTER',
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const NoteType: {
  PUBLIC: 'PUBLIC',
  PRIVATE: 'PRIVATE'
};

export type NoteType = (typeof NoteType)[keyof typeof NoteType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type NoteType = $Enums.NoteType

export const NoteType: typeof $Enums.NoteType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Organizations
 * const organizations = await prisma.organization.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organization.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.membership`: Exposes CRUD operations for the **Membership** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Memberships
    * const memberships = await prisma.membership.findMany()
    * ```
    */
  get membership(): Prisma.MembershipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticketNotes`: Exposes CRUD operations for the **TicketNotes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TicketNotes
    * const ticketNotes = await prisma.ticketNotes.findMany()
    * ```
    */
  get ticketNotes(): Prisma.TicketNotesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tagsOnTicket`: Exposes CRUD operations for the **TagsOnTicket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TagsOnTickets
    * const tagsOnTickets = await prisma.tagsOnTicket.findMany()
    * ```
    */
  get tagsOnTicket(): Prisma.TagsOnTicketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticketAssignments`: Exposes CRUD operations for the **TicketAssignments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TicketAssignments
    * const ticketAssignments = await prisma.ticketAssignments.findMany()
    * ```
    */
  get ticketAssignments(): Prisma.TicketAssignmentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.status`: Exposes CRUD operations for the **Status** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Statuses
    * const statuses = await prisma.status.findMany()
    * ```
    */
  get status(): Prisma.StatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.GroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usersOnGroup`: Exposes CRUD operations for the **UsersOnGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsersOnGroups
    * const usersOnGroups = await prisma.usersOnGroup.findMany()
    * ```
    */
  get usersOnGroup(): Prisma.UsersOnGroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.priority`: Exposes CRUD operations for the **Priority** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Priorities
    * const priorities = await prisma.priority.findMany()
    * ```
    */
  get priority(): Prisma.PriorityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.4.1
   * Query Engine version: a9055b89e58b4b5bfb59600785423b1db3d0e75d
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Organization: 'Organization',
    Membership: 'Membership',
    User: 'User',
    Profile: 'Profile',
    Ticket: 'Ticket',
    TicketNotes: 'TicketNotes',
    TagsOnTicket: 'TagsOnTicket',
    TicketAssignments: 'TicketAssignments',
    Tag: 'Tag',
    Status: 'Status',
    Group: 'Group',
    UsersOnGroup: 'UsersOnGroup',
    Priority: 'Priority',
    Category: 'Category'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "organization" | "membership" | "user" | "profile" | "ticket" | "ticketNotes" | "tagsOnTicket" | "ticketAssignments" | "tag" | "status" | "group" | "usersOnGroup" | "priority" | "category"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      Membership: {
        payload: Prisma.$MembershipPayload<ExtArgs>
        fields: Prisma.MembershipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MembershipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MembershipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
          }
          findFirst: {
            args: Prisma.MembershipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MembershipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
          }
          findMany: {
            args: Prisma.MembershipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>[]
          }
          create: {
            args: Prisma.MembershipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
          }
          createMany: {
            args: Prisma.MembershipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MembershipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>[]
          }
          delete: {
            args: Prisma.MembershipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
          }
          update: {
            args: Prisma.MembershipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
          }
          deleteMany: {
            args: Prisma.MembershipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MembershipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MembershipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>[]
          }
          upsert: {
            args: Prisma.MembershipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
          }
          aggregate: {
            args: Prisma.MembershipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMembership>
          }
          groupBy: {
            args: Prisma.MembershipGroupByArgs<ExtArgs>
            result: $Utils.Optional<MembershipGroupByOutputType>[]
          }
          count: {
            args: Prisma.MembershipCountArgs<ExtArgs>
            result: $Utils.Optional<MembershipCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      Ticket: {
        payload: Prisma.$TicketPayload<ExtArgs>
        fields: Prisma.TicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findFirst: {
            args: Prisma.TicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findMany: {
            args: Prisma.TicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          create: {
            args: Prisma.TicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          createMany: {
            args: Prisma.TicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          delete: {
            args: Prisma.TicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          update: {
            args: Prisma.TicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          deleteMany: {
            args: Prisma.TicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          upsert: {
            args: Prisma.TicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.TicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
      TicketNotes: {
        payload: Prisma.$TicketNotesPayload<ExtArgs>
        fields: Prisma.TicketNotesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketNotesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketNotesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketNotesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketNotesPayload>
          }
          findFirst: {
            args: Prisma.TicketNotesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketNotesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketNotesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketNotesPayload>
          }
          findMany: {
            args: Prisma.TicketNotesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketNotesPayload>[]
          }
          create: {
            args: Prisma.TicketNotesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketNotesPayload>
          }
          createMany: {
            args: Prisma.TicketNotesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketNotesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketNotesPayload>[]
          }
          delete: {
            args: Prisma.TicketNotesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketNotesPayload>
          }
          update: {
            args: Prisma.TicketNotesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketNotesPayload>
          }
          deleteMany: {
            args: Prisma.TicketNotesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketNotesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketNotesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketNotesPayload>[]
          }
          upsert: {
            args: Prisma.TicketNotesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketNotesPayload>
          }
          aggregate: {
            args: Prisma.TicketNotesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicketNotes>
          }
          groupBy: {
            args: Prisma.TicketNotesGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketNotesGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketNotesCountArgs<ExtArgs>
            result: $Utils.Optional<TicketNotesCountAggregateOutputType> | number
          }
        }
      }
      TagsOnTicket: {
        payload: Prisma.$TagsOnTicketPayload<ExtArgs>
        fields: Prisma.TagsOnTicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagsOnTicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsOnTicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagsOnTicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsOnTicketPayload>
          }
          findFirst: {
            args: Prisma.TagsOnTicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsOnTicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagsOnTicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsOnTicketPayload>
          }
          findMany: {
            args: Prisma.TagsOnTicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsOnTicketPayload>[]
          }
          create: {
            args: Prisma.TagsOnTicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsOnTicketPayload>
          }
          createMany: {
            args: Prisma.TagsOnTicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagsOnTicketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsOnTicketPayload>[]
          }
          delete: {
            args: Prisma.TagsOnTicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsOnTicketPayload>
          }
          update: {
            args: Prisma.TagsOnTicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsOnTicketPayload>
          }
          deleteMany: {
            args: Prisma.TagsOnTicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagsOnTicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagsOnTicketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsOnTicketPayload>[]
          }
          upsert: {
            args: Prisma.TagsOnTicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsOnTicketPayload>
          }
          aggregate: {
            args: Prisma.TagsOnTicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTagsOnTicket>
          }
          groupBy: {
            args: Prisma.TagsOnTicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagsOnTicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagsOnTicketCountArgs<ExtArgs>
            result: $Utils.Optional<TagsOnTicketCountAggregateOutputType> | number
          }
        }
      }
      TicketAssignments: {
        payload: Prisma.$TicketAssignmentsPayload<ExtArgs>
        fields: Prisma.TicketAssignmentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketAssignmentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAssignmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketAssignmentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAssignmentsPayload>
          }
          findFirst: {
            args: Prisma.TicketAssignmentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAssignmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketAssignmentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAssignmentsPayload>
          }
          findMany: {
            args: Prisma.TicketAssignmentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAssignmentsPayload>[]
          }
          create: {
            args: Prisma.TicketAssignmentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAssignmentsPayload>
          }
          createMany: {
            args: Prisma.TicketAssignmentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketAssignmentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAssignmentsPayload>[]
          }
          delete: {
            args: Prisma.TicketAssignmentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAssignmentsPayload>
          }
          update: {
            args: Prisma.TicketAssignmentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAssignmentsPayload>
          }
          deleteMany: {
            args: Prisma.TicketAssignmentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketAssignmentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketAssignmentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAssignmentsPayload>[]
          }
          upsert: {
            args: Prisma.TicketAssignmentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAssignmentsPayload>
          }
          aggregate: {
            args: Prisma.TicketAssignmentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicketAssignments>
          }
          groupBy: {
            args: Prisma.TicketAssignmentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketAssignmentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketAssignmentsCountArgs<ExtArgs>
            result: $Utils.Optional<TicketAssignmentsCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      Status: {
        payload: Prisma.$StatusPayload<ExtArgs>
        fields: Prisma.StatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          findFirst: {
            args: Prisma.StatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          findMany: {
            args: Prisma.StatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>[]
          }
          create: {
            args: Prisma.StatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          createMany: {
            args: Prisma.StatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>[]
          }
          delete: {
            args: Prisma.StatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          update: {
            args: Prisma.StatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          deleteMany: {
            args: Prisma.StatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StatusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>[]
          }
          upsert: {
            args: Prisma.StatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          aggregate: {
            args: Prisma.StatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStatus>
          }
          groupBy: {
            args: Prisma.StatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<StatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.StatusCountArgs<ExtArgs>
            result: $Utils.Optional<StatusCountAggregateOutputType> | number
          }
        }
      }
      Group: {
        payload: Prisma.$GroupPayload<ExtArgs>
        fields: Prisma.GroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findFirst: {
            args: Prisma.GroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findMany: {
            args: Prisma.GroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          create: {
            args: Prisma.GroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          createMany: {
            args: Prisma.GroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          delete: {
            args: Prisma.GroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          update: {
            args: Prisma.GroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          deleteMany: {
            args: Prisma.GroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          upsert: {
            args: Prisma.GroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroup>
          }
          groupBy: {
            args: Prisma.GroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupCountArgs<ExtArgs>
            result: $Utils.Optional<GroupCountAggregateOutputType> | number
          }
        }
      }
      UsersOnGroup: {
        payload: Prisma.$UsersOnGroupPayload<ExtArgs>
        fields: Prisma.UsersOnGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersOnGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersOnGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersOnGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersOnGroupPayload>
          }
          findFirst: {
            args: Prisma.UsersOnGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersOnGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersOnGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersOnGroupPayload>
          }
          findMany: {
            args: Prisma.UsersOnGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersOnGroupPayload>[]
          }
          create: {
            args: Prisma.UsersOnGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersOnGroupPayload>
          }
          createMany: {
            args: Prisma.UsersOnGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersOnGroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersOnGroupPayload>[]
          }
          delete: {
            args: Prisma.UsersOnGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersOnGroupPayload>
          }
          update: {
            args: Prisma.UsersOnGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersOnGroupPayload>
          }
          deleteMany: {
            args: Prisma.UsersOnGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersOnGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersOnGroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersOnGroupPayload>[]
          }
          upsert: {
            args: Prisma.UsersOnGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersOnGroupPayload>
          }
          aggregate: {
            args: Prisma.UsersOnGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsersOnGroup>
          }
          groupBy: {
            args: Prisma.UsersOnGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersOnGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersOnGroupCountArgs<ExtArgs>
            result: $Utils.Optional<UsersOnGroupCountAggregateOutputType> | number
          }
        }
      }
      Priority: {
        payload: Prisma.$PriorityPayload<ExtArgs>
        fields: Prisma.PriorityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PriorityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriorityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PriorityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriorityPayload>
          }
          findFirst: {
            args: Prisma.PriorityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriorityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PriorityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriorityPayload>
          }
          findMany: {
            args: Prisma.PriorityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriorityPayload>[]
          }
          create: {
            args: Prisma.PriorityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriorityPayload>
          }
          createMany: {
            args: Prisma.PriorityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PriorityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriorityPayload>[]
          }
          delete: {
            args: Prisma.PriorityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriorityPayload>
          }
          update: {
            args: Prisma.PriorityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriorityPayload>
          }
          deleteMany: {
            args: Prisma.PriorityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PriorityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PriorityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriorityPayload>[]
          }
          upsert: {
            args: Prisma.PriorityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriorityPayload>
          }
          aggregate: {
            args: Prisma.PriorityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePriority>
          }
          groupBy: {
            args: Prisma.PriorityGroupByArgs<ExtArgs>
            result: $Utils.Optional<PriorityGroupByOutputType>[]
          }
          count: {
            args: Prisma.PriorityCountArgs<ExtArgs>
            result: $Utils.Optional<PriorityCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    organization?: OrganizationOmit
    membership?: MembershipOmit
    user?: UserOmit
    profile?: ProfileOmit
    ticket?: TicketOmit
    ticketNotes?: TicketNotesOmit
    tagsOnTicket?: TagsOnTicketOmit
    ticketAssignments?: TicketAssignmentsOmit
    tag?: TagOmit
    status?: StatusOmit
    group?: GroupOmit
    usersOnGroup?: UsersOnGroupOmit
    priority?: PriorityOmit
    category?: CategoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    Ticket: number
    Membership: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ticket?: boolean | OrganizationCountOutputTypeCountTicketArgs
    Membership?: boolean | OrganizationCountOutputTypeCountMembershipArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountTicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountMembershipArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembershipWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    TicketNotes: number
    createdTickets: number
    organizations: number
    assignedTickets: number
    assignedByTickets: number
    UsersOnGroup: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TicketNotes?: boolean | UserCountOutputTypeCountTicketNotesArgs
    createdTickets?: boolean | UserCountOutputTypeCountCreatedTicketsArgs
    organizations?: boolean | UserCountOutputTypeCountOrganizationsArgs
    assignedTickets?: boolean | UserCountOutputTypeCountAssignedTicketsArgs
    assignedByTickets?: boolean | UserCountOutputTypeCountAssignedByTicketsArgs
    UsersOnGroup?: boolean | UserCountOutputTypeCountUsersOnGroupArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTicketNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketNotesWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrganizationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembershipWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignedTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketAssignmentsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignedByTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketAssignmentsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUsersOnGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersOnGroupWhereInput
  }


  /**
   * Count Type TicketCountOutputType
   */

  export type TicketCountOutputType = {
    notes: number
    Assignees: number
    Tags: number
  }

  export type TicketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notes?: boolean | TicketCountOutputTypeCountNotesArgs
    Assignees?: boolean | TicketCountOutputTypeCountAssigneesArgs
    Tags?: boolean | TicketCountOutputTypeCountTagsArgs
  }

  // Custom InputTypes
  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCountOutputType
     */
    select?: TicketCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketNotesWhereInput
  }

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountAssigneesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketAssignmentsWhereInput
  }

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagsOnTicketWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    tickets: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | TagCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagsOnTicketWhereInput
  }


  /**
   * Count Type StatusCountOutputType
   */

  export type StatusCountOutputType = {
    Ticket: number
  }

  export type StatusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ticket?: boolean | StatusCountOutputTypeCountTicketArgs
  }

  // Custom InputTypes
  /**
   * StatusCountOutputType without action
   */
  export type StatusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusCountOutputType
     */
    select?: StatusCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StatusCountOutputType without action
   */
  export type StatusCountOutputTypeCountTicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Count Type GroupCountOutputType
   */

  export type GroupCountOutputType = {
    users: number
    Ticket: number
  }

  export type GroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | GroupCountOutputTypeCountUsersArgs
    Ticket?: boolean | GroupCountOutputTypeCountTicketArgs
  }

  // Custom InputTypes
  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     */
    select?: GroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersOnGroupWhereInput
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountTicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Count Type PriorityCountOutputType
   */

  export type PriorityCountOutputType = {
    Ticket: number
  }

  export type PriorityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ticket?: boolean | PriorityCountOutputTypeCountTicketArgs
  }

  // Custom InputTypes
  /**
   * PriorityCountOutputType without action
   */
  export type PriorityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriorityCountOutputType
     */
    select?: PriorityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PriorityCountOutputType without action
   */
  export type PriorityCountOutputTypeCountTicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    Ticket: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ticket?: boolean | CategoryCountOutputTypeCountTicketArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountTicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationAvgAggregateOutputType = {
    id: number | null
  }

  export type OrganizationSumAggregateOutputType = {
    id: number | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: number | null
    name: string | null
    logo: string | null
    description: string | null
    createdAt: Date | null
    deletedAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: number | null
    name: string | null
    logo: string | null
    description: string | null
    createdAt: Date | null
    deletedAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    name: number
    logo: number
    description: number
    createdAt: number
    deletedAt: number
    updatedAt: number
    _all: number
  }


  export type OrganizationAvgAggregateInputType = {
    id?: true
  }

  export type OrganizationSumAggregateInputType = {
    id?: true
  }

  export type OrganizationMinAggregateInputType = {
    id?: true
    name?: true
    logo?: true
    description?: true
    createdAt?: true
    deletedAt?: true
    updatedAt?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    name?: true
    logo?: true
    description?: true
    createdAt?: true
    deletedAt?: true
    updatedAt?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    name?: true
    logo?: true
    description?: true
    createdAt?: true
    deletedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganizationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganizationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _avg?: OrganizationAvgAggregateInputType
    _sum?: OrganizationSumAggregateInputType
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: number
    name: string
    logo: string | null
    description: string | null
    createdAt: Date
    deletedAt: Date | null
    updatedAt: Date
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logo?: boolean
    description?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    Ticket?: boolean | Organization$TicketArgs<ExtArgs>
    Membership?: boolean | Organization$MembershipArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logo?: boolean
    description?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logo?: boolean
    description?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectScalar = {
    id?: boolean
    name?: boolean
    logo?: boolean
    description?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
  }

  export type OrganizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "logo" | "description" | "createdAt" | "deletedAt" | "updatedAt", ExtArgs["result"]["organization"]>
  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ticket?: boolean | Organization$TicketArgs<ExtArgs>
    Membership?: boolean | Organization$MembershipArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OrganizationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      Ticket: Prisma.$TicketPayload<ExtArgs>[]
      Membership: Prisma.$MembershipPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      logo: string | null
      description: string | null
      createdAt: Date
      deletedAt: Date | null
      updatedAt: Date
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationFindManyArgs>(args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends OrganizationCreateArgs>(args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCreateManyArgs>(args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {OrganizationCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends OrganizationDeleteArgs>(args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationUpdateArgs>(args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationUpdateManyArgs>(args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations and returns the data updated in the database.
     * @param {OrganizationUpdateManyAndReturnArgs} args - Arguments to update many Organizations.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrganizationUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Ticket<T extends Organization$TicketArgs<ExtArgs> = {}>(args?: Subset<T, Organization$TicketArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    Membership<T extends Organization$MembershipArgs<ExtArgs> = {}>(args?: Subset<T, Organization$MembershipArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Organization model
   */ 
  interface OrganizationFieldRefs {
    readonly id: FieldRef<"Organization", 'Int'>
    readonly name: FieldRef<"Organization", 'String'>
    readonly logo: FieldRef<"Organization", 'String'>
    readonly description: FieldRef<"Organization", 'String'>
    readonly createdAt: FieldRef<"Organization", 'DateTime'>
    readonly deletedAt: FieldRef<"Organization", 'DateTime'>
    readonly updatedAt: FieldRef<"Organization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization createManyAndReturn
   */
  export type OrganizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization updateManyAndReturn
   */
  export type OrganizationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to delete.
     */
    limit?: number
  }

  /**
   * Organization.Ticket
   */
  export type Organization$TicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Organization.Membership
   */
  export type Organization$MembershipArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    where?: MembershipWhereInput
    orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
    cursor?: MembershipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MembershipScalarFieldEnum | MembershipScalarFieldEnum[]
  }

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
  }


  /**
   * Model Membership
   */

  export type AggregateMembership = {
    _count: MembershipCountAggregateOutputType | null
    _avg: MembershipAvgAggregateOutputType | null
    _sum: MembershipSumAggregateOutputType | null
    _min: MembershipMinAggregateOutputType | null
    _max: MembershipMaxAggregateOutputType | null
  }

  export type MembershipAvgAggregateOutputType = {
    organizationId: number | null
    userId: number | null
  }

  export type MembershipSumAggregateOutputType = {
    organizationId: number | null
    userId: number | null
  }

  export type MembershipMinAggregateOutputType = {
    organizationId: number | null
    userId: number | null
    createdAt: Date | null
    deletedAt: Date | null
    updatedAt: Date | null
  }

  export type MembershipMaxAggregateOutputType = {
    organizationId: number | null
    userId: number | null
    createdAt: Date | null
    deletedAt: Date | null
    updatedAt: Date | null
  }

  export type MembershipCountAggregateOutputType = {
    organizationId: number
    userId: number
    createdAt: number
    deletedAt: number
    updatedAt: number
    _all: number
  }


  export type MembershipAvgAggregateInputType = {
    organizationId?: true
    userId?: true
  }

  export type MembershipSumAggregateInputType = {
    organizationId?: true
    userId?: true
  }

  export type MembershipMinAggregateInputType = {
    organizationId?: true
    userId?: true
    createdAt?: true
    deletedAt?: true
    updatedAt?: true
  }

  export type MembershipMaxAggregateInputType = {
    organizationId?: true
    userId?: true
    createdAt?: true
    deletedAt?: true
    updatedAt?: true
  }

  export type MembershipCountAggregateInputType = {
    organizationId?: true
    userId?: true
    createdAt?: true
    deletedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MembershipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Membership to aggregate.
     */
    where?: MembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memberships to fetch.
     */
    orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Memberships
    **/
    _count?: true | MembershipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MembershipAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MembershipSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MembershipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MembershipMaxAggregateInputType
  }

  export type GetMembershipAggregateType<T extends MembershipAggregateArgs> = {
        [P in keyof T & keyof AggregateMembership]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMembership[P]>
      : GetScalarType<T[P], AggregateMembership[P]>
  }




  export type MembershipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembershipWhereInput
    orderBy?: MembershipOrderByWithAggregationInput | MembershipOrderByWithAggregationInput[]
    by: MembershipScalarFieldEnum[] | MembershipScalarFieldEnum
    having?: MembershipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MembershipCountAggregateInputType | true
    _avg?: MembershipAvgAggregateInputType
    _sum?: MembershipSumAggregateInputType
    _min?: MembershipMinAggregateInputType
    _max?: MembershipMaxAggregateInputType
  }

  export type MembershipGroupByOutputType = {
    organizationId: number
    userId: number
    createdAt: Date
    deletedAt: Date | null
    updatedAt: Date
    _count: MembershipCountAggregateOutputType | null
    _avg: MembershipAvgAggregateOutputType | null
    _sum: MembershipSumAggregateOutputType | null
    _min: MembershipMinAggregateOutputType | null
    _max: MembershipMaxAggregateOutputType | null
  }

  type GetMembershipGroupByPayload<T extends MembershipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MembershipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MembershipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MembershipGroupByOutputType[P]>
            : GetScalarType<T[P], MembershipGroupByOutputType[P]>
        }
      >
    >


  export type MembershipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    organizationId?: boolean
    userId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membership"]>

  export type MembershipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    organizationId?: boolean
    userId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membership"]>

  export type MembershipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    organizationId?: boolean
    userId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membership"]>

  export type MembershipSelectScalar = {
    organizationId?: boolean
    userId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
  }

  export type MembershipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"organizationId" | "userId" | "createdAt" | "deletedAt" | "updatedAt", ExtArgs["result"]["membership"]>
  export type MembershipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MembershipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MembershipIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MembershipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Membership"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      organizationId: number
      userId: number
      createdAt: Date
      deletedAt: Date | null
      updatedAt: Date
    }, ExtArgs["result"]["membership"]>
    composites: {}
  }

  type MembershipGetPayload<S extends boolean | null | undefined | MembershipDefaultArgs> = $Result.GetResult<Prisma.$MembershipPayload, S>

  type MembershipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MembershipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MembershipCountAggregateInputType | true
    }

  export interface MembershipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Membership'], meta: { name: 'Membership' } }
    /**
     * Find zero or one Membership that matches the filter.
     * @param {MembershipFindUniqueArgs} args - Arguments to find a Membership
     * @example
     * // Get one Membership
     * const membership = await prisma.membership.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MembershipFindUniqueArgs>(args: SelectSubset<T, MembershipFindUniqueArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Membership that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MembershipFindUniqueOrThrowArgs} args - Arguments to find a Membership
     * @example
     * // Get one Membership
     * const membership = await prisma.membership.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MembershipFindUniqueOrThrowArgs>(args: SelectSubset<T, MembershipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Membership that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipFindFirstArgs} args - Arguments to find a Membership
     * @example
     * // Get one Membership
     * const membership = await prisma.membership.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MembershipFindFirstArgs>(args?: SelectSubset<T, MembershipFindFirstArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Membership that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipFindFirstOrThrowArgs} args - Arguments to find a Membership
     * @example
     * // Get one Membership
     * const membership = await prisma.membership.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MembershipFindFirstOrThrowArgs>(args?: SelectSubset<T, MembershipFindFirstOrThrowArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Memberships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Memberships
     * const memberships = await prisma.membership.findMany()
     * 
     * // Get first 10 Memberships
     * const memberships = await prisma.membership.findMany({ take: 10 })
     * 
     * // Only select the `organizationId`
     * const membershipWithOrganizationIdOnly = await prisma.membership.findMany({ select: { organizationId: true } })
     * 
     */
    findMany<T extends MembershipFindManyArgs>(args?: SelectSubset<T, MembershipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Membership.
     * @param {MembershipCreateArgs} args - Arguments to create a Membership.
     * @example
     * // Create one Membership
     * const Membership = await prisma.membership.create({
     *   data: {
     *     // ... data to create a Membership
     *   }
     * })
     * 
     */
    create<T extends MembershipCreateArgs>(args: SelectSubset<T, MembershipCreateArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Memberships.
     * @param {MembershipCreateManyArgs} args - Arguments to create many Memberships.
     * @example
     * // Create many Memberships
     * const membership = await prisma.membership.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MembershipCreateManyArgs>(args?: SelectSubset<T, MembershipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Memberships and returns the data saved in the database.
     * @param {MembershipCreateManyAndReturnArgs} args - Arguments to create many Memberships.
     * @example
     * // Create many Memberships
     * const membership = await prisma.membership.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Memberships and only return the `organizationId`
     * const membershipWithOrganizationIdOnly = await prisma.membership.createManyAndReturn({
     *   select: { organizationId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MembershipCreateManyAndReturnArgs>(args?: SelectSubset<T, MembershipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Membership.
     * @param {MembershipDeleteArgs} args - Arguments to delete one Membership.
     * @example
     * // Delete one Membership
     * const Membership = await prisma.membership.delete({
     *   where: {
     *     // ... filter to delete one Membership
     *   }
     * })
     * 
     */
    delete<T extends MembershipDeleteArgs>(args: SelectSubset<T, MembershipDeleteArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Membership.
     * @param {MembershipUpdateArgs} args - Arguments to update one Membership.
     * @example
     * // Update one Membership
     * const membership = await prisma.membership.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MembershipUpdateArgs>(args: SelectSubset<T, MembershipUpdateArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Memberships.
     * @param {MembershipDeleteManyArgs} args - Arguments to filter Memberships to delete.
     * @example
     * // Delete a few Memberships
     * const { count } = await prisma.membership.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MembershipDeleteManyArgs>(args?: SelectSubset<T, MembershipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Memberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Memberships
     * const membership = await prisma.membership.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MembershipUpdateManyArgs>(args: SelectSubset<T, MembershipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Memberships and returns the data updated in the database.
     * @param {MembershipUpdateManyAndReturnArgs} args - Arguments to update many Memberships.
     * @example
     * // Update many Memberships
     * const membership = await prisma.membership.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Memberships and only return the `organizationId`
     * const membershipWithOrganizationIdOnly = await prisma.membership.updateManyAndReturn({
     *   select: { organizationId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MembershipUpdateManyAndReturnArgs>(args: SelectSubset<T, MembershipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Membership.
     * @param {MembershipUpsertArgs} args - Arguments to update or create a Membership.
     * @example
     * // Update or create a Membership
     * const membership = await prisma.membership.upsert({
     *   create: {
     *     // ... data to create a Membership
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Membership we want to update
     *   }
     * })
     */
    upsert<T extends MembershipUpsertArgs>(args: SelectSubset<T, MembershipUpsertArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Memberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipCountArgs} args - Arguments to filter Memberships to count.
     * @example
     * // Count the number of Memberships
     * const count = await prisma.membership.count({
     *   where: {
     *     // ... the filter for the Memberships we want to count
     *   }
     * })
    **/
    count<T extends MembershipCountArgs>(
      args?: Subset<T, MembershipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MembershipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Membership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MembershipAggregateArgs>(args: Subset<T, MembershipAggregateArgs>): Prisma.PrismaPromise<GetMembershipAggregateType<T>>

    /**
     * Group by Membership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MembershipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MembershipGroupByArgs['orderBy'] }
        : { orderBy?: MembershipGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MembershipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMembershipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Membership model
   */
  readonly fields: MembershipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Membership.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MembershipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Membership model
   */ 
  interface MembershipFieldRefs {
    readonly organizationId: FieldRef<"Membership", 'Int'>
    readonly userId: FieldRef<"Membership", 'Int'>
    readonly createdAt: FieldRef<"Membership", 'DateTime'>
    readonly deletedAt: FieldRef<"Membership", 'DateTime'>
    readonly updatedAt: FieldRef<"Membership", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Membership findUnique
   */
  export type MembershipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * Filter, which Membership to fetch.
     */
    where: MembershipWhereUniqueInput
  }

  /**
   * Membership findUniqueOrThrow
   */
  export type MembershipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * Filter, which Membership to fetch.
     */
    where: MembershipWhereUniqueInput
  }

  /**
   * Membership findFirst
   */
  export type MembershipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * Filter, which Membership to fetch.
     */
    where?: MembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memberships to fetch.
     */
    orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Memberships.
     */
    cursor?: MembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Memberships.
     */
    distinct?: MembershipScalarFieldEnum | MembershipScalarFieldEnum[]
  }

  /**
   * Membership findFirstOrThrow
   */
  export type MembershipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * Filter, which Membership to fetch.
     */
    where?: MembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memberships to fetch.
     */
    orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Memberships.
     */
    cursor?: MembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Memberships.
     */
    distinct?: MembershipScalarFieldEnum | MembershipScalarFieldEnum[]
  }

  /**
   * Membership findMany
   */
  export type MembershipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * Filter, which Memberships to fetch.
     */
    where?: MembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memberships to fetch.
     */
    orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Memberships.
     */
    cursor?: MembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memberships.
     */
    skip?: number
    distinct?: MembershipScalarFieldEnum | MembershipScalarFieldEnum[]
  }

  /**
   * Membership create
   */
  export type MembershipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * The data needed to create a Membership.
     */
    data: XOR<MembershipCreateInput, MembershipUncheckedCreateInput>
  }

  /**
   * Membership createMany
   */
  export type MembershipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Memberships.
     */
    data: MembershipCreateManyInput | MembershipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Membership createManyAndReturn
   */
  export type MembershipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * The data used to create many Memberships.
     */
    data: MembershipCreateManyInput | MembershipCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Membership update
   */
  export type MembershipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * The data needed to update a Membership.
     */
    data: XOR<MembershipUpdateInput, MembershipUncheckedUpdateInput>
    /**
     * Choose, which Membership to update.
     */
    where: MembershipWhereUniqueInput
  }

  /**
   * Membership updateMany
   */
  export type MembershipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Memberships.
     */
    data: XOR<MembershipUpdateManyMutationInput, MembershipUncheckedUpdateManyInput>
    /**
     * Filter which Memberships to update
     */
    where?: MembershipWhereInput
    /**
     * Limit how many Memberships to update.
     */
    limit?: number
  }

  /**
   * Membership updateManyAndReturn
   */
  export type MembershipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * The data used to update Memberships.
     */
    data: XOR<MembershipUpdateManyMutationInput, MembershipUncheckedUpdateManyInput>
    /**
     * Filter which Memberships to update
     */
    where?: MembershipWhereInput
    /**
     * Limit how many Memberships to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Membership upsert
   */
  export type MembershipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * The filter to search for the Membership to update in case it exists.
     */
    where: MembershipWhereUniqueInput
    /**
     * In case the Membership found by the `where` argument doesn't exist, create a new Membership with this data.
     */
    create: XOR<MembershipCreateInput, MembershipUncheckedCreateInput>
    /**
     * In case the Membership was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MembershipUpdateInput, MembershipUncheckedUpdateInput>
  }

  /**
   * Membership delete
   */
  export type MembershipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * Filter which Membership to delete.
     */
    where: MembershipWhereUniqueInput
  }

  /**
   * Membership deleteMany
   */
  export type MembershipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Memberships to delete
     */
    where?: MembershipWhereInput
    /**
     * Limit how many Memberships to delete.
     */
    limit?: number
  }

  /**
   * Membership without action
   */
  export type MembershipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    deletedAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    deletedAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    createdAt: number
    deletedAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    deletedAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    deletedAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    deletedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    role: $Enums.Role
    createdAt: Date
    deletedAt: Date | null
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    TicketNotes?: boolean | User$TicketNotesArgs<ExtArgs>
    createdTickets?: boolean | User$createdTicketsArgs<ExtArgs>
    organizations?: boolean | User$organizationsArgs<ExtArgs>
    assignedTickets?: boolean | User$assignedTicketsArgs<ExtArgs>
    assignedByTickets?: boolean | User$assignedByTicketsArgs<ExtArgs>
    UsersOnGroup?: boolean | User$UsersOnGroupArgs<ExtArgs>
    Profile?: boolean | User$ProfileArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "role" | "createdAt" | "deletedAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TicketNotes?: boolean | User$TicketNotesArgs<ExtArgs>
    createdTickets?: boolean | User$createdTicketsArgs<ExtArgs>
    organizations?: boolean | User$organizationsArgs<ExtArgs>
    assignedTickets?: boolean | User$assignedTicketsArgs<ExtArgs>
    assignedByTickets?: boolean | User$assignedByTicketsArgs<ExtArgs>
    UsersOnGroup?: boolean | User$UsersOnGroupArgs<ExtArgs>
    Profile?: boolean | User$ProfileArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      TicketNotes: Prisma.$TicketNotesPayload<ExtArgs>[]
      createdTickets: Prisma.$TicketPayload<ExtArgs>[]
      organizations: Prisma.$MembershipPayload<ExtArgs>[]
      assignedTickets: Prisma.$TicketAssignmentsPayload<ExtArgs>[]
      assignedByTickets: Prisma.$TicketAssignmentsPayload<ExtArgs>[]
      UsersOnGroup: Prisma.$UsersOnGroupPayload<ExtArgs>[]
      Profile: Prisma.$ProfilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      role: $Enums.Role
      createdAt: Date
      deletedAt: Date | null
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    TicketNotes<T extends User$TicketNotesArgs<ExtArgs> = {}>(args?: Subset<T, User$TicketNotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketNotesPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    createdTickets<T extends User$createdTicketsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdTicketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    organizations<T extends User$organizationsArgs<ExtArgs> = {}>(args?: Subset<T, User$organizationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    assignedTickets<T extends User$assignedTicketsArgs<ExtArgs> = {}>(args?: Subset<T, User$assignedTicketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketAssignmentsPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    assignedByTickets<T extends User$assignedByTicketsArgs<ExtArgs> = {}>(args?: Subset<T, User$assignedByTicketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketAssignmentsPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    UsersOnGroup<T extends User$UsersOnGroupArgs<ExtArgs> = {}>(args?: Subset<T, User$UsersOnGroupArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersOnGroupPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    Profile<T extends User$ProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$ProfileArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.TicketNotes
   */
  export type User$TicketNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketNotes
     */
    select?: TicketNotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketNotes
     */
    omit?: TicketNotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketNotesInclude<ExtArgs> | null
    where?: TicketNotesWhereInput
    orderBy?: TicketNotesOrderByWithRelationInput | TicketNotesOrderByWithRelationInput[]
    cursor?: TicketNotesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketNotesScalarFieldEnum | TicketNotesScalarFieldEnum[]
  }

  /**
   * User.createdTickets
   */
  export type User$createdTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * User.organizations
   */
  export type User$organizationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    where?: MembershipWhereInput
    orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
    cursor?: MembershipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MembershipScalarFieldEnum | MembershipScalarFieldEnum[]
  }

  /**
   * User.assignedTickets
   */
  export type User$assignedTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAssignments
     */
    select?: TicketAssignmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAssignments
     */
    omit?: TicketAssignmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAssignmentsInclude<ExtArgs> | null
    where?: TicketAssignmentsWhereInput
    orderBy?: TicketAssignmentsOrderByWithRelationInput | TicketAssignmentsOrderByWithRelationInput[]
    cursor?: TicketAssignmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketAssignmentsScalarFieldEnum | TicketAssignmentsScalarFieldEnum[]
  }

  /**
   * User.assignedByTickets
   */
  export type User$assignedByTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAssignments
     */
    select?: TicketAssignmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAssignments
     */
    omit?: TicketAssignmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAssignmentsInclude<ExtArgs> | null
    where?: TicketAssignmentsWhereInput
    orderBy?: TicketAssignmentsOrderByWithRelationInput | TicketAssignmentsOrderByWithRelationInput[]
    cursor?: TicketAssignmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketAssignmentsScalarFieldEnum | TicketAssignmentsScalarFieldEnum[]
  }

  /**
   * User.UsersOnGroup
   */
  export type User$UsersOnGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersOnGroup
     */
    select?: UsersOnGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersOnGroup
     */
    omit?: UsersOnGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersOnGroupInclude<ExtArgs> | null
    where?: UsersOnGroupWhereInput
    orderBy?: UsersOnGroupOrderByWithRelationInput | UsersOnGroupOrderByWithRelationInput[]
    cursor?: UsersOnGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersOnGroupScalarFieldEnum | UsersOnGroupScalarFieldEnum[]
  }

  /**
   * User.Profile
   */
  export type User$ProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProfileMinAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    photo: string | null
    phone: string | null
    createdAt: Date | null
    deletedAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    photo: string | null
    phone: string | null
    createdAt: Date | null
    deletedAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    first_name: number
    last_name: number
    photo: number
    phone: number
    createdAt: number
    deletedAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProfileSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    photo?: true
    phone?: true
    createdAt?: true
    deletedAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    photo?: true
    phone?: true
    createdAt?: true
    deletedAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    photo?: true
    phone?: true
    createdAt?: true
    deletedAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: number
    first_name: string
    last_name: string
    photo: string | null
    phone: string | null
    createdAt: Date
    deletedAt: Date | null
    updatedAt: Date
    userId: number
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    photo?: boolean
    phone?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    photo?: boolean
    phone?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    photo?: boolean
    phone?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    photo?: boolean
    phone?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "first_name" | "last_name" | "photo" | "phone" | "createdAt" | "deletedAt" | "updatedAt" | "userId", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      first_name: string
      last_name: string
      photo: string | null
      phone: string | null
      createdAt: Date
      deletedAt: Date | null
      updatedAt: Date
      userId: number
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profile model
   */ 
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'Int'>
    readonly first_name: FieldRef<"Profile", 'String'>
    readonly last_name: FieldRef<"Profile", 'String'>
    readonly photo: FieldRef<"Profile", 'String'>
    readonly phone: FieldRef<"Profile", 'String'>
    readonly createdAt: FieldRef<"Profile", 'DateTime'>
    readonly deletedAt: FieldRef<"Profile", 'DateTime'>
    readonly updatedAt: FieldRef<"Profile", 'DateTime'>
    readonly userId: FieldRef<"Profile", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model Ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketAvgAggregateOutputType = {
    id: number | null
    organizationId: number | null
    createdById: number | null
    groupId: number | null
    priorityId: number | null
    statusId: number | null
    categoryId: number | null
  }

  export type TicketSumAggregateOutputType = {
    id: number | null
    organizationId: number | null
    createdById: number | null
    groupId: number | null
    priorityId: number | null
    statusId: number | null
    categoryId: number | null
  }

  export type TicketMinAggregateOutputType = {
    id: number | null
    subject: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    organizationId: number | null
    createdById: number | null
    groupId: number | null
    priorityId: number | null
    statusId: number | null
    categoryId: number | null
  }

  export type TicketMaxAggregateOutputType = {
    id: number | null
    subject: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    organizationId: number | null
    createdById: number | null
    groupId: number | null
    priorityId: number | null
    statusId: number | null
    categoryId: number | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    subject: number
    content: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    organizationId: number
    createdById: number
    groupId: number
    priorityId: number
    statusId: number
    categoryId: number
    _all: number
  }


  export type TicketAvgAggregateInputType = {
    id?: true
    organizationId?: true
    createdById?: true
    groupId?: true
    priorityId?: true
    statusId?: true
    categoryId?: true
  }

  export type TicketSumAggregateInputType = {
    id?: true
    organizationId?: true
    createdById?: true
    groupId?: true
    priorityId?: true
    statusId?: true
    categoryId?: true
  }

  export type TicketMinAggregateInputType = {
    id?: true
    subject?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    organizationId?: true
    createdById?: true
    groupId?: true
    priorityId?: true
    statusId?: true
    categoryId?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    subject?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    organizationId?: true
    createdById?: true
    groupId?: true
    priorityId?: true
    statusId?: true
    categoryId?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    subject?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    organizationId?: true
    createdById?: true
    groupId?: true
    priorityId?: true
    statusId?: true
    categoryId?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithAggregationInput | TicketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _avg?: TicketAvgAggregateInputType
    _sum?: TicketSumAggregateInputType
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: number
    subject: string
    content: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    organizationId: number
    createdById: number
    groupId: number | null
    priorityId: number
    statusId: number
    categoryId: number | null
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subject?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    organizationId?: boolean
    createdById?: boolean
    groupId?: boolean
    priorityId?: boolean
    statusId?: boolean
    categoryId?: boolean
    notes?: boolean | Ticket$notesArgs<ExtArgs>
    Organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    CreatedBy?: boolean | UserDefaultArgs<ExtArgs>
    Group?: boolean | Ticket$GroupArgs<ExtArgs>
    Priority?: boolean | PriorityDefaultArgs<ExtArgs>
    Status?: boolean | StatusDefaultArgs<ExtArgs>
    Category?: boolean | Ticket$CategoryArgs<ExtArgs>
    Assignees?: boolean | Ticket$AssigneesArgs<ExtArgs>
    Tags?: boolean | Ticket$TagsArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subject?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    organizationId?: boolean
    createdById?: boolean
    groupId?: boolean
    priorityId?: boolean
    statusId?: boolean
    categoryId?: boolean
    Organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    CreatedBy?: boolean | UserDefaultArgs<ExtArgs>
    Group?: boolean | Ticket$GroupArgs<ExtArgs>
    Priority?: boolean | PriorityDefaultArgs<ExtArgs>
    Status?: boolean | StatusDefaultArgs<ExtArgs>
    Category?: boolean | Ticket$CategoryArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subject?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    organizationId?: boolean
    createdById?: boolean
    groupId?: boolean
    priorityId?: boolean
    statusId?: boolean
    categoryId?: boolean
    Organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    CreatedBy?: boolean | UserDefaultArgs<ExtArgs>
    Group?: boolean | Ticket$GroupArgs<ExtArgs>
    Priority?: boolean | PriorityDefaultArgs<ExtArgs>
    Status?: boolean | StatusDefaultArgs<ExtArgs>
    Category?: boolean | Ticket$CategoryArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectScalar = {
    id?: boolean
    subject?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    organizationId?: boolean
    createdById?: boolean
    groupId?: boolean
    priorityId?: boolean
    statusId?: boolean
    categoryId?: boolean
  }

  export type TicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "subject" | "content" | "createdAt" | "updatedAt" | "deletedAt" | "organizationId" | "createdById" | "groupId" | "priorityId" | "statusId" | "categoryId", ExtArgs["result"]["ticket"]>
  export type TicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notes?: boolean | Ticket$notesArgs<ExtArgs>
    Organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    CreatedBy?: boolean | UserDefaultArgs<ExtArgs>
    Group?: boolean | Ticket$GroupArgs<ExtArgs>
    Priority?: boolean | PriorityDefaultArgs<ExtArgs>
    Status?: boolean | StatusDefaultArgs<ExtArgs>
    Category?: boolean | Ticket$CategoryArgs<ExtArgs>
    Assignees?: boolean | Ticket$AssigneesArgs<ExtArgs>
    Tags?: boolean | Ticket$TagsArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TicketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    CreatedBy?: boolean | UserDefaultArgs<ExtArgs>
    Group?: boolean | Ticket$GroupArgs<ExtArgs>
    Priority?: boolean | PriorityDefaultArgs<ExtArgs>
    Status?: boolean | StatusDefaultArgs<ExtArgs>
    Category?: boolean | Ticket$CategoryArgs<ExtArgs>
  }
  export type TicketIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    CreatedBy?: boolean | UserDefaultArgs<ExtArgs>
    Group?: boolean | Ticket$GroupArgs<ExtArgs>
    Priority?: boolean | PriorityDefaultArgs<ExtArgs>
    Status?: boolean | StatusDefaultArgs<ExtArgs>
    Category?: boolean | Ticket$CategoryArgs<ExtArgs>
  }

  export type $TicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {
      notes: Prisma.$TicketNotesPayload<ExtArgs>[]
      Organization: Prisma.$OrganizationPayload<ExtArgs>
      CreatedBy: Prisma.$UserPayload<ExtArgs>
      Group: Prisma.$GroupPayload<ExtArgs> | null
      Priority: Prisma.$PriorityPayload<ExtArgs>
      Status: Prisma.$StatusPayload<ExtArgs>
      Category: Prisma.$CategoryPayload<ExtArgs> | null
      Assignees: Prisma.$TicketAssignmentsPayload<ExtArgs>[]
      Tags: Prisma.$TagsOnTicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      subject: string
      content: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      organizationId: number
      createdById: number
      groupId: number | null
      priorityId: number
      statusId: number
      categoryId: number | null
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = $Result.GetResult<Prisma.$TicketPayload, S>

  type TicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketFindUniqueArgs>(args: SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketFindFirstArgs>(args?: SelectSubset<T, TicketFindFirstArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketFindManyArgs>(args?: SelectSubset<T, TicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends TicketCreateArgs>(args: SelectSubset<T, TicketCreateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Tickets.
     * @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCreateManyArgs>(args?: SelectSubset<T, TicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tickets and returns the data saved in the database.
     * @param {TicketCreateManyAndReturnArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends TicketDeleteArgs>(args: SelectSubset<T, TicketDeleteArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketUpdateArgs>(args: SelectSubset<T, TicketUpdateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketDeleteManyArgs>(args?: SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketUpdateManyArgs>(args: SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets and returns the data updated in the database.
     * @param {TicketUpdateManyAndReturnArgs} args - Arguments to update many Tickets.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TicketUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends TicketUpsertArgs>(args: SelectSubset<T, TicketUpsertArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket model
   */
  readonly fields: TicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    notes<T extends Ticket$notesArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketNotesPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    Organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    CreatedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    Group<T extends Ticket$GroupArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$GroupArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    Priority<T extends PriorityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PriorityDefaultArgs<ExtArgs>>): Prisma__PriorityClient<$Result.GetResult<Prisma.$PriorityPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    Status<T extends StatusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StatusDefaultArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    Category<T extends Ticket$CategoryArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$CategoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    Assignees<T extends Ticket$AssigneesArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$AssigneesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketAssignmentsPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    Tags<T extends Ticket$TagsArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$TagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagsOnTicketPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ticket model
   */ 
  interface TicketFieldRefs {
    readonly id: FieldRef<"Ticket", 'Int'>
    readonly subject: FieldRef<"Ticket", 'String'>
    readonly content: FieldRef<"Ticket", 'String'>
    readonly createdAt: FieldRef<"Ticket", 'DateTime'>
    readonly updatedAt: FieldRef<"Ticket", 'DateTime'>
    readonly deletedAt: FieldRef<"Ticket", 'DateTime'>
    readonly organizationId: FieldRef<"Ticket", 'Int'>
    readonly createdById: FieldRef<"Ticket", 'Int'>
    readonly groupId: FieldRef<"Ticket", 'Int'>
    readonly priorityId: FieldRef<"Ticket", 'Int'>
    readonly statusId: FieldRef<"Ticket", 'Int'>
    readonly categoryId: FieldRef<"Ticket", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Ticket findUnique
   */
  export type TicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findFirst
   */
  export type TicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket create
   */
  export type TicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }

  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ticket createManyAndReturn
   */
  export type TicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket update
   */
  export type TicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
  }

  /**
   * Ticket updateManyAndReturn
   */
  export type TicketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }

  /**
   * Ticket delete
   */
  export type TicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to delete.
     */
    limit?: number
  }

  /**
   * Ticket.notes
   */
  export type Ticket$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketNotes
     */
    select?: TicketNotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketNotes
     */
    omit?: TicketNotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketNotesInclude<ExtArgs> | null
    where?: TicketNotesWhereInput
    orderBy?: TicketNotesOrderByWithRelationInput | TicketNotesOrderByWithRelationInput[]
    cursor?: TicketNotesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketNotesScalarFieldEnum | TicketNotesScalarFieldEnum[]
  }

  /**
   * Ticket.Group
   */
  export type Ticket$GroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
  }

  /**
   * Ticket.Category
   */
  export type Ticket$CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Ticket.Assignees
   */
  export type Ticket$AssigneesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAssignments
     */
    select?: TicketAssignmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAssignments
     */
    omit?: TicketAssignmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAssignmentsInclude<ExtArgs> | null
    where?: TicketAssignmentsWhereInput
    orderBy?: TicketAssignmentsOrderByWithRelationInput | TicketAssignmentsOrderByWithRelationInput[]
    cursor?: TicketAssignmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketAssignmentsScalarFieldEnum | TicketAssignmentsScalarFieldEnum[]
  }

  /**
   * Ticket.Tags
   */
  export type Ticket$TagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsOnTicket
     */
    select?: TagsOnTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagsOnTicket
     */
    omit?: TagsOnTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsOnTicketInclude<ExtArgs> | null
    where?: TagsOnTicketWhereInput
    orderBy?: TagsOnTicketOrderByWithRelationInput | TagsOnTicketOrderByWithRelationInput[]
    cursor?: TagsOnTicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagsOnTicketScalarFieldEnum | TagsOnTicketScalarFieldEnum[]
  }

  /**
   * Ticket without action
   */
  export type TicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
  }


  /**
   * Model TicketNotes
   */

  export type AggregateTicketNotes = {
    _count: TicketNotesCountAggregateOutputType | null
    _avg: TicketNotesAvgAggregateOutputType | null
    _sum: TicketNotesSumAggregateOutputType | null
    _min: TicketNotesMinAggregateOutputType | null
    _max: TicketNotesMaxAggregateOutputType | null
  }

  export type TicketNotesAvgAggregateOutputType = {
    id: number | null
    ticketId: number | null
    creatorId: number | null
  }

  export type TicketNotesSumAggregateOutputType = {
    id: number | null
    ticketId: number | null
    creatorId: number | null
  }

  export type TicketNotesMinAggregateOutputType = {
    id: number | null
    content: string | null
    ticketId: number | null
    creatorId: number | null
    createdAt: Date | null
    deletedAt: Date | null
    updatedAt: Date | null
    NoteType: $Enums.NoteType | null
  }

  export type TicketNotesMaxAggregateOutputType = {
    id: number | null
    content: string | null
    ticketId: number | null
    creatorId: number | null
    createdAt: Date | null
    deletedAt: Date | null
    updatedAt: Date | null
    NoteType: $Enums.NoteType | null
  }

  export type TicketNotesCountAggregateOutputType = {
    id: number
    content: number
    ticketId: number
    creatorId: number
    createdAt: number
    deletedAt: number
    updatedAt: number
    NoteType: number
    _all: number
  }


  export type TicketNotesAvgAggregateInputType = {
    id?: true
    ticketId?: true
    creatorId?: true
  }

  export type TicketNotesSumAggregateInputType = {
    id?: true
    ticketId?: true
    creatorId?: true
  }

  export type TicketNotesMinAggregateInputType = {
    id?: true
    content?: true
    ticketId?: true
    creatorId?: true
    createdAt?: true
    deletedAt?: true
    updatedAt?: true
    NoteType?: true
  }

  export type TicketNotesMaxAggregateInputType = {
    id?: true
    content?: true
    ticketId?: true
    creatorId?: true
    createdAt?: true
    deletedAt?: true
    updatedAt?: true
    NoteType?: true
  }

  export type TicketNotesCountAggregateInputType = {
    id?: true
    content?: true
    ticketId?: true
    creatorId?: true
    createdAt?: true
    deletedAt?: true
    updatedAt?: true
    NoteType?: true
    _all?: true
  }

  export type TicketNotesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketNotes to aggregate.
     */
    where?: TicketNotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketNotes to fetch.
     */
    orderBy?: TicketNotesOrderByWithRelationInput | TicketNotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketNotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TicketNotes
    **/
    _count?: true | TicketNotesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketNotesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketNotesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketNotesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketNotesMaxAggregateInputType
  }

  export type GetTicketNotesAggregateType<T extends TicketNotesAggregateArgs> = {
        [P in keyof T & keyof AggregateTicketNotes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicketNotes[P]>
      : GetScalarType<T[P], AggregateTicketNotes[P]>
  }




  export type TicketNotesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketNotesWhereInput
    orderBy?: TicketNotesOrderByWithAggregationInput | TicketNotesOrderByWithAggregationInput[]
    by: TicketNotesScalarFieldEnum[] | TicketNotesScalarFieldEnum
    having?: TicketNotesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketNotesCountAggregateInputType | true
    _avg?: TicketNotesAvgAggregateInputType
    _sum?: TicketNotesSumAggregateInputType
    _min?: TicketNotesMinAggregateInputType
    _max?: TicketNotesMaxAggregateInputType
  }

  export type TicketNotesGroupByOutputType = {
    id: number
    content: string
    ticketId: number
    creatorId: number
    createdAt: Date
    deletedAt: Date | null
    updatedAt: Date
    NoteType: $Enums.NoteType
    _count: TicketNotesCountAggregateOutputType | null
    _avg: TicketNotesAvgAggregateOutputType | null
    _sum: TicketNotesSumAggregateOutputType | null
    _min: TicketNotesMinAggregateOutputType | null
    _max: TicketNotesMaxAggregateOutputType | null
  }

  type GetTicketNotesGroupByPayload<T extends TicketNotesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketNotesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketNotesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketNotesGroupByOutputType[P]>
            : GetScalarType<T[P], TicketNotesGroupByOutputType[P]>
        }
      >
    >


  export type TicketNotesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    ticketId?: boolean
    creatorId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    NoteType?: boolean
    Creator?: boolean | UserDefaultArgs<ExtArgs>
    Ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketNotes"]>

  export type TicketNotesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    ticketId?: boolean
    creatorId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    NoteType?: boolean
    Creator?: boolean | UserDefaultArgs<ExtArgs>
    Ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketNotes"]>

  export type TicketNotesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    ticketId?: boolean
    creatorId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    NoteType?: boolean
    Creator?: boolean | UserDefaultArgs<ExtArgs>
    Ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketNotes"]>

  export type TicketNotesSelectScalar = {
    id?: boolean
    content?: boolean
    ticketId?: boolean
    creatorId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    NoteType?: boolean
  }

  export type TicketNotesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "ticketId" | "creatorId" | "createdAt" | "deletedAt" | "updatedAt" | "NoteType", ExtArgs["result"]["ticketNotes"]>
  export type TicketNotesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Creator?: boolean | UserDefaultArgs<ExtArgs>
    Ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }
  export type TicketNotesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Creator?: boolean | UserDefaultArgs<ExtArgs>
    Ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }
  export type TicketNotesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Creator?: boolean | UserDefaultArgs<ExtArgs>
    Ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }

  export type $TicketNotesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TicketNotes"
    objects: {
      Creator: Prisma.$UserPayload<ExtArgs>
      Ticket: Prisma.$TicketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      ticketId: number
      creatorId: number
      createdAt: Date
      deletedAt: Date | null
      updatedAt: Date
      NoteType: $Enums.NoteType
    }, ExtArgs["result"]["ticketNotes"]>
    composites: {}
  }

  type TicketNotesGetPayload<S extends boolean | null | undefined | TicketNotesDefaultArgs> = $Result.GetResult<Prisma.$TicketNotesPayload, S>

  type TicketNotesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketNotesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketNotesCountAggregateInputType | true
    }

  export interface TicketNotesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TicketNotes'], meta: { name: 'TicketNotes' } }
    /**
     * Find zero or one TicketNotes that matches the filter.
     * @param {TicketNotesFindUniqueArgs} args - Arguments to find a TicketNotes
     * @example
     * // Get one TicketNotes
     * const ticketNotes = await prisma.ticketNotes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketNotesFindUniqueArgs>(args: SelectSubset<T, TicketNotesFindUniqueArgs<ExtArgs>>): Prisma__TicketNotesClient<$Result.GetResult<Prisma.$TicketNotesPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one TicketNotes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketNotesFindUniqueOrThrowArgs} args - Arguments to find a TicketNotes
     * @example
     * // Get one TicketNotes
     * const ticketNotes = await prisma.ticketNotes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketNotesFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketNotesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketNotesClient<$Result.GetResult<Prisma.$TicketNotesPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first TicketNotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketNotesFindFirstArgs} args - Arguments to find a TicketNotes
     * @example
     * // Get one TicketNotes
     * const ticketNotes = await prisma.ticketNotes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketNotesFindFirstArgs>(args?: SelectSubset<T, TicketNotesFindFirstArgs<ExtArgs>>): Prisma__TicketNotesClient<$Result.GetResult<Prisma.$TicketNotesPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first TicketNotes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketNotesFindFirstOrThrowArgs} args - Arguments to find a TicketNotes
     * @example
     * // Get one TicketNotes
     * const ticketNotes = await prisma.ticketNotes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketNotesFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketNotesFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketNotesClient<$Result.GetResult<Prisma.$TicketNotesPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more TicketNotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketNotesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TicketNotes
     * const ticketNotes = await prisma.ticketNotes.findMany()
     * 
     * // Get first 10 TicketNotes
     * const ticketNotes = await prisma.ticketNotes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketNotesWithIdOnly = await prisma.ticketNotes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketNotesFindManyArgs>(args?: SelectSubset<T, TicketNotesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketNotesPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a TicketNotes.
     * @param {TicketNotesCreateArgs} args - Arguments to create a TicketNotes.
     * @example
     * // Create one TicketNotes
     * const TicketNotes = await prisma.ticketNotes.create({
     *   data: {
     *     // ... data to create a TicketNotes
     *   }
     * })
     * 
     */
    create<T extends TicketNotesCreateArgs>(args: SelectSubset<T, TicketNotesCreateArgs<ExtArgs>>): Prisma__TicketNotesClient<$Result.GetResult<Prisma.$TicketNotesPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many TicketNotes.
     * @param {TicketNotesCreateManyArgs} args - Arguments to create many TicketNotes.
     * @example
     * // Create many TicketNotes
     * const ticketNotes = await prisma.ticketNotes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketNotesCreateManyArgs>(args?: SelectSubset<T, TicketNotesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TicketNotes and returns the data saved in the database.
     * @param {TicketNotesCreateManyAndReturnArgs} args - Arguments to create many TicketNotes.
     * @example
     * // Create many TicketNotes
     * const ticketNotes = await prisma.ticketNotes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TicketNotes and only return the `id`
     * const ticketNotesWithIdOnly = await prisma.ticketNotes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketNotesCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketNotesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketNotesPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a TicketNotes.
     * @param {TicketNotesDeleteArgs} args - Arguments to delete one TicketNotes.
     * @example
     * // Delete one TicketNotes
     * const TicketNotes = await prisma.ticketNotes.delete({
     *   where: {
     *     // ... filter to delete one TicketNotes
     *   }
     * })
     * 
     */
    delete<T extends TicketNotesDeleteArgs>(args: SelectSubset<T, TicketNotesDeleteArgs<ExtArgs>>): Prisma__TicketNotesClient<$Result.GetResult<Prisma.$TicketNotesPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one TicketNotes.
     * @param {TicketNotesUpdateArgs} args - Arguments to update one TicketNotes.
     * @example
     * // Update one TicketNotes
     * const ticketNotes = await prisma.ticketNotes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketNotesUpdateArgs>(args: SelectSubset<T, TicketNotesUpdateArgs<ExtArgs>>): Prisma__TicketNotesClient<$Result.GetResult<Prisma.$TicketNotesPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more TicketNotes.
     * @param {TicketNotesDeleteManyArgs} args - Arguments to filter TicketNotes to delete.
     * @example
     * // Delete a few TicketNotes
     * const { count } = await prisma.ticketNotes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketNotesDeleteManyArgs>(args?: SelectSubset<T, TicketNotesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketNotesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TicketNotes
     * const ticketNotes = await prisma.ticketNotes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketNotesUpdateManyArgs>(args: SelectSubset<T, TicketNotesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketNotes and returns the data updated in the database.
     * @param {TicketNotesUpdateManyAndReturnArgs} args - Arguments to update many TicketNotes.
     * @example
     * // Update many TicketNotes
     * const ticketNotes = await prisma.ticketNotes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TicketNotes and only return the `id`
     * const ticketNotesWithIdOnly = await prisma.ticketNotes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TicketNotesUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketNotesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketNotesPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one TicketNotes.
     * @param {TicketNotesUpsertArgs} args - Arguments to update or create a TicketNotes.
     * @example
     * // Update or create a TicketNotes
     * const ticketNotes = await prisma.ticketNotes.upsert({
     *   create: {
     *     // ... data to create a TicketNotes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TicketNotes we want to update
     *   }
     * })
     */
    upsert<T extends TicketNotesUpsertArgs>(args: SelectSubset<T, TicketNotesUpsertArgs<ExtArgs>>): Prisma__TicketNotesClient<$Result.GetResult<Prisma.$TicketNotesPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of TicketNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketNotesCountArgs} args - Arguments to filter TicketNotes to count.
     * @example
     * // Count the number of TicketNotes
     * const count = await prisma.ticketNotes.count({
     *   where: {
     *     // ... the filter for the TicketNotes we want to count
     *   }
     * })
    **/
    count<T extends TicketNotesCountArgs>(
      args?: Subset<T, TicketNotesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketNotesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TicketNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketNotesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketNotesAggregateArgs>(args: Subset<T, TicketNotesAggregateArgs>): Prisma.PrismaPromise<GetTicketNotesAggregateType<T>>

    /**
     * Group by TicketNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketNotesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketNotesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketNotesGroupByArgs['orderBy'] }
        : { orderBy?: TicketNotesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketNotesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketNotesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TicketNotes model
   */
  readonly fields: TicketNotesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TicketNotes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketNotesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    Ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TicketNotes model
   */ 
  interface TicketNotesFieldRefs {
    readonly id: FieldRef<"TicketNotes", 'Int'>
    readonly content: FieldRef<"TicketNotes", 'String'>
    readonly ticketId: FieldRef<"TicketNotes", 'Int'>
    readonly creatorId: FieldRef<"TicketNotes", 'Int'>
    readonly createdAt: FieldRef<"TicketNotes", 'DateTime'>
    readonly deletedAt: FieldRef<"TicketNotes", 'DateTime'>
    readonly updatedAt: FieldRef<"TicketNotes", 'DateTime'>
    readonly NoteType: FieldRef<"TicketNotes", 'NoteType'>
  }
    

  // Custom InputTypes
  /**
   * TicketNotes findUnique
   */
  export type TicketNotesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketNotes
     */
    select?: TicketNotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketNotes
     */
    omit?: TicketNotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketNotesInclude<ExtArgs> | null
    /**
     * Filter, which TicketNotes to fetch.
     */
    where: TicketNotesWhereUniqueInput
  }

  /**
   * TicketNotes findUniqueOrThrow
   */
  export type TicketNotesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketNotes
     */
    select?: TicketNotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketNotes
     */
    omit?: TicketNotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketNotesInclude<ExtArgs> | null
    /**
     * Filter, which TicketNotes to fetch.
     */
    where: TicketNotesWhereUniqueInput
  }

  /**
   * TicketNotes findFirst
   */
  export type TicketNotesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketNotes
     */
    select?: TicketNotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketNotes
     */
    omit?: TicketNotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketNotesInclude<ExtArgs> | null
    /**
     * Filter, which TicketNotes to fetch.
     */
    where?: TicketNotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketNotes to fetch.
     */
    orderBy?: TicketNotesOrderByWithRelationInput | TicketNotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketNotes.
     */
    cursor?: TicketNotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketNotes.
     */
    distinct?: TicketNotesScalarFieldEnum | TicketNotesScalarFieldEnum[]
  }

  /**
   * TicketNotes findFirstOrThrow
   */
  export type TicketNotesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketNotes
     */
    select?: TicketNotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketNotes
     */
    omit?: TicketNotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketNotesInclude<ExtArgs> | null
    /**
     * Filter, which TicketNotes to fetch.
     */
    where?: TicketNotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketNotes to fetch.
     */
    orderBy?: TicketNotesOrderByWithRelationInput | TicketNotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketNotes.
     */
    cursor?: TicketNotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketNotes.
     */
    distinct?: TicketNotesScalarFieldEnum | TicketNotesScalarFieldEnum[]
  }

  /**
   * TicketNotes findMany
   */
  export type TicketNotesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketNotes
     */
    select?: TicketNotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketNotes
     */
    omit?: TicketNotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketNotesInclude<ExtArgs> | null
    /**
     * Filter, which TicketNotes to fetch.
     */
    where?: TicketNotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketNotes to fetch.
     */
    orderBy?: TicketNotesOrderByWithRelationInput | TicketNotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TicketNotes.
     */
    cursor?: TicketNotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketNotes.
     */
    skip?: number
    distinct?: TicketNotesScalarFieldEnum | TicketNotesScalarFieldEnum[]
  }

  /**
   * TicketNotes create
   */
  export type TicketNotesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketNotes
     */
    select?: TicketNotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketNotes
     */
    omit?: TicketNotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketNotesInclude<ExtArgs> | null
    /**
     * The data needed to create a TicketNotes.
     */
    data: XOR<TicketNotesCreateInput, TicketNotesUncheckedCreateInput>
  }

  /**
   * TicketNotes createMany
   */
  export type TicketNotesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TicketNotes.
     */
    data: TicketNotesCreateManyInput | TicketNotesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TicketNotes createManyAndReturn
   */
  export type TicketNotesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketNotes
     */
    select?: TicketNotesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketNotes
     */
    omit?: TicketNotesOmit<ExtArgs> | null
    /**
     * The data used to create many TicketNotes.
     */
    data: TicketNotesCreateManyInput | TicketNotesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketNotesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketNotes update
   */
  export type TicketNotesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketNotes
     */
    select?: TicketNotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketNotes
     */
    omit?: TicketNotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketNotesInclude<ExtArgs> | null
    /**
     * The data needed to update a TicketNotes.
     */
    data: XOR<TicketNotesUpdateInput, TicketNotesUncheckedUpdateInput>
    /**
     * Choose, which TicketNotes to update.
     */
    where: TicketNotesWhereUniqueInput
  }

  /**
   * TicketNotes updateMany
   */
  export type TicketNotesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TicketNotes.
     */
    data: XOR<TicketNotesUpdateManyMutationInput, TicketNotesUncheckedUpdateManyInput>
    /**
     * Filter which TicketNotes to update
     */
    where?: TicketNotesWhereInput
    /**
     * Limit how many TicketNotes to update.
     */
    limit?: number
  }

  /**
   * TicketNotes updateManyAndReturn
   */
  export type TicketNotesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketNotes
     */
    select?: TicketNotesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketNotes
     */
    omit?: TicketNotesOmit<ExtArgs> | null
    /**
     * The data used to update TicketNotes.
     */
    data: XOR<TicketNotesUpdateManyMutationInput, TicketNotesUncheckedUpdateManyInput>
    /**
     * Filter which TicketNotes to update
     */
    where?: TicketNotesWhereInput
    /**
     * Limit how many TicketNotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketNotesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketNotes upsert
   */
  export type TicketNotesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketNotes
     */
    select?: TicketNotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketNotes
     */
    omit?: TicketNotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketNotesInclude<ExtArgs> | null
    /**
     * The filter to search for the TicketNotes to update in case it exists.
     */
    where: TicketNotesWhereUniqueInput
    /**
     * In case the TicketNotes found by the `where` argument doesn't exist, create a new TicketNotes with this data.
     */
    create: XOR<TicketNotesCreateInput, TicketNotesUncheckedCreateInput>
    /**
     * In case the TicketNotes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketNotesUpdateInput, TicketNotesUncheckedUpdateInput>
  }

  /**
   * TicketNotes delete
   */
  export type TicketNotesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketNotes
     */
    select?: TicketNotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketNotes
     */
    omit?: TicketNotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketNotesInclude<ExtArgs> | null
    /**
     * Filter which TicketNotes to delete.
     */
    where: TicketNotesWhereUniqueInput
  }

  /**
   * TicketNotes deleteMany
   */
  export type TicketNotesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketNotes to delete
     */
    where?: TicketNotesWhereInput
    /**
     * Limit how many TicketNotes to delete.
     */
    limit?: number
  }

  /**
   * TicketNotes without action
   */
  export type TicketNotesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketNotes
     */
    select?: TicketNotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketNotes
     */
    omit?: TicketNotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketNotesInclude<ExtArgs> | null
  }


  /**
   * Model TagsOnTicket
   */

  export type AggregateTagsOnTicket = {
    _count: TagsOnTicketCountAggregateOutputType | null
    _avg: TagsOnTicketAvgAggregateOutputType | null
    _sum: TagsOnTicketSumAggregateOutputType | null
    _min: TagsOnTicketMinAggregateOutputType | null
    _max: TagsOnTicketMaxAggregateOutputType | null
  }

  export type TagsOnTicketAvgAggregateOutputType = {
    ticketId: number | null
    tagId: number | null
  }

  export type TagsOnTicketSumAggregateOutputType = {
    ticketId: number | null
    tagId: number | null
  }

  export type TagsOnTicketMinAggregateOutputType = {
    ticketId: number | null
    tagId: number | null
    createdAt: Date | null
    deletedAt: Date | null
    updatedAt: Date | null
  }

  export type TagsOnTicketMaxAggregateOutputType = {
    ticketId: number | null
    tagId: number | null
    createdAt: Date | null
    deletedAt: Date | null
    updatedAt: Date | null
  }

  export type TagsOnTicketCountAggregateOutputType = {
    ticketId: number
    tagId: number
    createdAt: number
    deletedAt: number
    updatedAt: number
    _all: number
  }


  export type TagsOnTicketAvgAggregateInputType = {
    ticketId?: true
    tagId?: true
  }

  export type TagsOnTicketSumAggregateInputType = {
    ticketId?: true
    tagId?: true
  }

  export type TagsOnTicketMinAggregateInputType = {
    ticketId?: true
    tagId?: true
    createdAt?: true
    deletedAt?: true
    updatedAt?: true
  }

  export type TagsOnTicketMaxAggregateInputType = {
    ticketId?: true
    tagId?: true
    createdAt?: true
    deletedAt?: true
    updatedAt?: true
  }

  export type TagsOnTicketCountAggregateInputType = {
    ticketId?: true
    tagId?: true
    createdAt?: true
    deletedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TagsOnTicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TagsOnTicket to aggregate.
     */
    where?: TagsOnTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TagsOnTickets to fetch.
     */
    orderBy?: TagsOnTicketOrderByWithRelationInput | TagsOnTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagsOnTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TagsOnTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TagsOnTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TagsOnTickets
    **/
    _count?: true | TagsOnTicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagsOnTicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagsOnTicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagsOnTicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagsOnTicketMaxAggregateInputType
  }

  export type GetTagsOnTicketAggregateType<T extends TagsOnTicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTagsOnTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTagsOnTicket[P]>
      : GetScalarType<T[P], AggregateTagsOnTicket[P]>
  }




  export type TagsOnTicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagsOnTicketWhereInput
    orderBy?: TagsOnTicketOrderByWithAggregationInput | TagsOnTicketOrderByWithAggregationInput[]
    by: TagsOnTicketScalarFieldEnum[] | TagsOnTicketScalarFieldEnum
    having?: TagsOnTicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagsOnTicketCountAggregateInputType | true
    _avg?: TagsOnTicketAvgAggregateInputType
    _sum?: TagsOnTicketSumAggregateInputType
    _min?: TagsOnTicketMinAggregateInputType
    _max?: TagsOnTicketMaxAggregateInputType
  }

  export type TagsOnTicketGroupByOutputType = {
    ticketId: number
    tagId: number
    createdAt: Date
    deletedAt: Date | null
    updatedAt: Date
    _count: TagsOnTicketCountAggregateOutputType | null
    _avg: TagsOnTicketAvgAggregateOutputType | null
    _sum: TagsOnTicketSumAggregateOutputType | null
    _min: TagsOnTicketMinAggregateOutputType | null
    _max: TagsOnTicketMaxAggregateOutputType | null
  }

  type GetTagsOnTicketGroupByPayload<T extends TagsOnTicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagsOnTicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagsOnTicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagsOnTicketGroupByOutputType[P]>
            : GetScalarType<T[P], TagsOnTicketGroupByOutputType[P]>
        }
      >
    >


  export type TagsOnTicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ticketId?: boolean
    tagId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    Ticket?: boolean | TicketDefaultArgs<ExtArgs>
    Tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tagsOnTicket"]>

  export type TagsOnTicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ticketId?: boolean
    tagId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    Ticket?: boolean | TicketDefaultArgs<ExtArgs>
    Tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tagsOnTicket"]>

  export type TagsOnTicketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ticketId?: boolean
    tagId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    Ticket?: boolean | TicketDefaultArgs<ExtArgs>
    Tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tagsOnTicket"]>

  export type TagsOnTicketSelectScalar = {
    ticketId?: boolean
    tagId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
  }

  export type TagsOnTicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ticketId" | "tagId" | "createdAt" | "deletedAt" | "updatedAt", ExtArgs["result"]["tagsOnTicket"]>
  export type TagsOnTicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ticket?: boolean | TicketDefaultArgs<ExtArgs>
    Tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type TagsOnTicketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ticket?: boolean | TicketDefaultArgs<ExtArgs>
    Tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type TagsOnTicketIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ticket?: boolean | TicketDefaultArgs<ExtArgs>
    Tag?: boolean | TagDefaultArgs<ExtArgs>
  }

  export type $TagsOnTicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TagsOnTicket"
    objects: {
      Ticket: Prisma.$TicketPayload<ExtArgs>
      Tag: Prisma.$TagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ticketId: number
      tagId: number
      createdAt: Date
      deletedAt: Date | null
      updatedAt: Date
    }, ExtArgs["result"]["tagsOnTicket"]>
    composites: {}
  }

  type TagsOnTicketGetPayload<S extends boolean | null | undefined | TagsOnTicketDefaultArgs> = $Result.GetResult<Prisma.$TagsOnTicketPayload, S>

  type TagsOnTicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagsOnTicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagsOnTicketCountAggregateInputType | true
    }

  export interface TagsOnTicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TagsOnTicket'], meta: { name: 'TagsOnTicket' } }
    /**
     * Find zero or one TagsOnTicket that matches the filter.
     * @param {TagsOnTicketFindUniqueArgs} args - Arguments to find a TagsOnTicket
     * @example
     * // Get one TagsOnTicket
     * const tagsOnTicket = await prisma.tagsOnTicket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagsOnTicketFindUniqueArgs>(args: SelectSubset<T, TagsOnTicketFindUniqueArgs<ExtArgs>>): Prisma__TagsOnTicketClient<$Result.GetResult<Prisma.$TagsOnTicketPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one TagsOnTicket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagsOnTicketFindUniqueOrThrowArgs} args - Arguments to find a TagsOnTicket
     * @example
     * // Get one TagsOnTicket
     * const tagsOnTicket = await prisma.tagsOnTicket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagsOnTicketFindUniqueOrThrowArgs>(args: SelectSubset<T, TagsOnTicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagsOnTicketClient<$Result.GetResult<Prisma.$TagsOnTicketPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first TagsOnTicket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsOnTicketFindFirstArgs} args - Arguments to find a TagsOnTicket
     * @example
     * // Get one TagsOnTicket
     * const tagsOnTicket = await prisma.tagsOnTicket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagsOnTicketFindFirstArgs>(args?: SelectSubset<T, TagsOnTicketFindFirstArgs<ExtArgs>>): Prisma__TagsOnTicketClient<$Result.GetResult<Prisma.$TagsOnTicketPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first TagsOnTicket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsOnTicketFindFirstOrThrowArgs} args - Arguments to find a TagsOnTicket
     * @example
     * // Get one TagsOnTicket
     * const tagsOnTicket = await prisma.tagsOnTicket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagsOnTicketFindFirstOrThrowArgs>(args?: SelectSubset<T, TagsOnTicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagsOnTicketClient<$Result.GetResult<Prisma.$TagsOnTicketPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more TagsOnTickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsOnTicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TagsOnTickets
     * const tagsOnTickets = await prisma.tagsOnTicket.findMany()
     * 
     * // Get first 10 TagsOnTickets
     * const tagsOnTickets = await prisma.tagsOnTicket.findMany({ take: 10 })
     * 
     * // Only select the `ticketId`
     * const tagsOnTicketWithTicketIdOnly = await prisma.tagsOnTicket.findMany({ select: { ticketId: true } })
     * 
     */
    findMany<T extends TagsOnTicketFindManyArgs>(args?: SelectSubset<T, TagsOnTicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagsOnTicketPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a TagsOnTicket.
     * @param {TagsOnTicketCreateArgs} args - Arguments to create a TagsOnTicket.
     * @example
     * // Create one TagsOnTicket
     * const TagsOnTicket = await prisma.tagsOnTicket.create({
     *   data: {
     *     // ... data to create a TagsOnTicket
     *   }
     * })
     * 
     */
    create<T extends TagsOnTicketCreateArgs>(args: SelectSubset<T, TagsOnTicketCreateArgs<ExtArgs>>): Prisma__TagsOnTicketClient<$Result.GetResult<Prisma.$TagsOnTicketPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many TagsOnTickets.
     * @param {TagsOnTicketCreateManyArgs} args - Arguments to create many TagsOnTickets.
     * @example
     * // Create many TagsOnTickets
     * const tagsOnTicket = await prisma.tagsOnTicket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagsOnTicketCreateManyArgs>(args?: SelectSubset<T, TagsOnTicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TagsOnTickets and returns the data saved in the database.
     * @param {TagsOnTicketCreateManyAndReturnArgs} args - Arguments to create many TagsOnTickets.
     * @example
     * // Create many TagsOnTickets
     * const tagsOnTicket = await prisma.tagsOnTicket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TagsOnTickets and only return the `ticketId`
     * const tagsOnTicketWithTicketIdOnly = await prisma.tagsOnTicket.createManyAndReturn({
     *   select: { ticketId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagsOnTicketCreateManyAndReturnArgs>(args?: SelectSubset<T, TagsOnTicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagsOnTicketPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a TagsOnTicket.
     * @param {TagsOnTicketDeleteArgs} args - Arguments to delete one TagsOnTicket.
     * @example
     * // Delete one TagsOnTicket
     * const TagsOnTicket = await prisma.tagsOnTicket.delete({
     *   where: {
     *     // ... filter to delete one TagsOnTicket
     *   }
     * })
     * 
     */
    delete<T extends TagsOnTicketDeleteArgs>(args: SelectSubset<T, TagsOnTicketDeleteArgs<ExtArgs>>): Prisma__TagsOnTicketClient<$Result.GetResult<Prisma.$TagsOnTicketPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one TagsOnTicket.
     * @param {TagsOnTicketUpdateArgs} args - Arguments to update one TagsOnTicket.
     * @example
     * // Update one TagsOnTicket
     * const tagsOnTicket = await prisma.tagsOnTicket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagsOnTicketUpdateArgs>(args: SelectSubset<T, TagsOnTicketUpdateArgs<ExtArgs>>): Prisma__TagsOnTicketClient<$Result.GetResult<Prisma.$TagsOnTicketPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more TagsOnTickets.
     * @param {TagsOnTicketDeleteManyArgs} args - Arguments to filter TagsOnTickets to delete.
     * @example
     * // Delete a few TagsOnTickets
     * const { count } = await prisma.tagsOnTicket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagsOnTicketDeleteManyArgs>(args?: SelectSubset<T, TagsOnTicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TagsOnTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsOnTicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TagsOnTickets
     * const tagsOnTicket = await prisma.tagsOnTicket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagsOnTicketUpdateManyArgs>(args: SelectSubset<T, TagsOnTicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TagsOnTickets and returns the data updated in the database.
     * @param {TagsOnTicketUpdateManyAndReturnArgs} args - Arguments to update many TagsOnTickets.
     * @example
     * // Update many TagsOnTickets
     * const tagsOnTicket = await prisma.tagsOnTicket.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TagsOnTickets and only return the `ticketId`
     * const tagsOnTicketWithTicketIdOnly = await prisma.tagsOnTicket.updateManyAndReturn({
     *   select: { ticketId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TagsOnTicketUpdateManyAndReturnArgs>(args: SelectSubset<T, TagsOnTicketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagsOnTicketPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one TagsOnTicket.
     * @param {TagsOnTicketUpsertArgs} args - Arguments to update or create a TagsOnTicket.
     * @example
     * // Update or create a TagsOnTicket
     * const tagsOnTicket = await prisma.tagsOnTicket.upsert({
     *   create: {
     *     // ... data to create a TagsOnTicket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TagsOnTicket we want to update
     *   }
     * })
     */
    upsert<T extends TagsOnTicketUpsertArgs>(args: SelectSubset<T, TagsOnTicketUpsertArgs<ExtArgs>>): Prisma__TagsOnTicketClient<$Result.GetResult<Prisma.$TagsOnTicketPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of TagsOnTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsOnTicketCountArgs} args - Arguments to filter TagsOnTickets to count.
     * @example
     * // Count the number of TagsOnTickets
     * const count = await prisma.tagsOnTicket.count({
     *   where: {
     *     // ... the filter for the TagsOnTickets we want to count
     *   }
     * })
    **/
    count<T extends TagsOnTicketCountArgs>(
      args?: Subset<T, TagsOnTicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagsOnTicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TagsOnTicket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsOnTicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagsOnTicketAggregateArgs>(args: Subset<T, TagsOnTicketAggregateArgs>): Prisma.PrismaPromise<GetTagsOnTicketAggregateType<T>>

    /**
     * Group by TagsOnTicket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsOnTicketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagsOnTicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagsOnTicketGroupByArgs['orderBy'] }
        : { orderBy?: TagsOnTicketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagsOnTicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagsOnTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TagsOnTicket model
   */
  readonly fields: TagsOnTicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TagsOnTicket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagsOnTicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    Tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TagsOnTicket model
   */ 
  interface TagsOnTicketFieldRefs {
    readonly ticketId: FieldRef<"TagsOnTicket", 'Int'>
    readonly tagId: FieldRef<"TagsOnTicket", 'Int'>
    readonly createdAt: FieldRef<"TagsOnTicket", 'DateTime'>
    readonly deletedAt: FieldRef<"TagsOnTicket", 'DateTime'>
    readonly updatedAt: FieldRef<"TagsOnTicket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TagsOnTicket findUnique
   */
  export type TagsOnTicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsOnTicket
     */
    select?: TagsOnTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagsOnTicket
     */
    omit?: TagsOnTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsOnTicketInclude<ExtArgs> | null
    /**
     * Filter, which TagsOnTicket to fetch.
     */
    where: TagsOnTicketWhereUniqueInput
  }

  /**
   * TagsOnTicket findUniqueOrThrow
   */
  export type TagsOnTicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsOnTicket
     */
    select?: TagsOnTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagsOnTicket
     */
    omit?: TagsOnTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsOnTicketInclude<ExtArgs> | null
    /**
     * Filter, which TagsOnTicket to fetch.
     */
    where: TagsOnTicketWhereUniqueInput
  }

  /**
   * TagsOnTicket findFirst
   */
  export type TagsOnTicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsOnTicket
     */
    select?: TagsOnTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagsOnTicket
     */
    omit?: TagsOnTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsOnTicketInclude<ExtArgs> | null
    /**
     * Filter, which TagsOnTicket to fetch.
     */
    where?: TagsOnTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TagsOnTickets to fetch.
     */
    orderBy?: TagsOnTicketOrderByWithRelationInput | TagsOnTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TagsOnTickets.
     */
    cursor?: TagsOnTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TagsOnTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TagsOnTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TagsOnTickets.
     */
    distinct?: TagsOnTicketScalarFieldEnum | TagsOnTicketScalarFieldEnum[]
  }

  /**
   * TagsOnTicket findFirstOrThrow
   */
  export type TagsOnTicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsOnTicket
     */
    select?: TagsOnTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagsOnTicket
     */
    omit?: TagsOnTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsOnTicketInclude<ExtArgs> | null
    /**
     * Filter, which TagsOnTicket to fetch.
     */
    where?: TagsOnTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TagsOnTickets to fetch.
     */
    orderBy?: TagsOnTicketOrderByWithRelationInput | TagsOnTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TagsOnTickets.
     */
    cursor?: TagsOnTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TagsOnTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TagsOnTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TagsOnTickets.
     */
    distinct?: TagsOnTicketScalarFieldEnum | TagsOnTicketScalarFieldEnum[]
  }

  /**
   * TagsOnTicket findMany
   */
  export type TagsOnTicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsOnTicket
     */
    select?: TagsOnTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagsOnTicket
     */
    omit?: TagsOnTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsOnTicketInclude<ExtArgs> | null
    /**
     * Filter, which TagsOnTickets to fetch.
     */
    where?: TagsOnTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TagsOnTickets to fetch.
     */
    orderBy?: TagsOnTicketOrderByWithRelationInput | TagsOnTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TagsOnTickets.
     */
    cursor?: TagsOnTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TagsOnTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TagsOnTickets.
     */
    skip?: number
    distinct?: TagsOnTicketScalarFieldEnum | TagsOnTicketScalarFieldEnum[]
  }

  /**
   * TagsOnTicket create
   */
  export type TagsOnTicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsOnTicket
     */
    select?: TagsOnTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagsOnTicket
     */
    omit?: TagsOnTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsOnTicketInclude<ExtArgs> | null
    /**
     * The data needed to create a TagsOnTicket.
     */
    data: XOR<TagsOnTicketCreateInput, TagsOnTicketUncheckedCreateInput>
  }

  /**
   * TagsOnTicket createMany
   */
  export type TagsOnTicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TagsOnTickets.
     */
    data: TagsOnTicketCreateManyInput | TagsOnTicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TagsOnTicket createManyAndReturn
   */
  export type TagsOnTicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsOnTicket
     */
    select?: TagsOnTicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TagsOnTicket
     */
    omit?: TagsOnTicketOmit<ExtArgs> | null
    /**
     * The data used to create many TagsOnTickets.
     */
    data: TagsOnTicketCreateManyInput | TagsOnTicketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsOnTicketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TagsOnTicket update
   */
  export type TagsOnTicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsOnTicket
     */
    select?: TagsOnTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagsOnTicket
     */
    omit?: TagsOnTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsOnTicketInclude<ExtArgs> | null
    /**
     * The data needed to update a TagsOnTicket.
     */
    data: XOR<TagsOnTicketUpdateInput, TagsOnTicketUncheckedUpdateInput>
    /**
     * Choose, which TagsOnTicket to update.
     */
    where: TagsOnTicketWhereUniqueInput
  }

  /**
   * TagsOnTicket updateMany
   */
  export type TagsOnTicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TagsOnTickets.
     */
    data: XOR<TagsOnTicketUpdateManyMutationInput, TagsOnTicketUncheckedUpdateManyInput>
    /**
     * Filter which TagsOnTickets to update
     */
    where?: TagsOnTicketWhereInput
    /**
     * Limit how many TagsOnTickets to update.
     */
    limit?: number
  }

  /**
   * TagsOnTicket updateManyAndReturn
   */
  export type TagsOnTicketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsOnTicket
     */
    select?: TagsOnTicketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TagsOnTicket
     */
    omit?: TagsOnTicketOmit<ExtArgs> | null
    /**
     * The data used to update TagsOnTickets.
     */
    data: XOR<TagsOnTicketUpdateManyMutationInput, TagsOnTicketUncheckedUpdateManyInput>
    /**
     * Filter which TagsOnTickets to update
     */
    where?: TagsOnTicketWhereInput
    /**
     * Limit how many TagsOnTickets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsOnTicketIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TagsOnTicket upsert
   */
  export type TagsOnTicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsOnTicket
     */
    select?: TagsOnTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagsOnTicket
     */
    omit?: TagsOnTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsOnTicketInclude<ExtArgs> | null
    /**
     * The filter to search for the TagsOnTicket to update in case it exists.
     */
    where: TagsOnTicketWhereUniqueInput
    /**
     * In case the TagsOnTicket found by the `where` argument doesn't exist, create a new TagsOnTicket with this data.
     */
    create: XOR<TagsOnTicketCreateInput, TagsOnTicketUncheckedCreateInput>
    /**
     * In case the TagsOnTicket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagsOnTicketUpdateInput, TagsOnTicketUncheckedUpdateInput>
  }

  /**
   * TagsOnTicket delete
   */
  export type TagsOnTicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsOnTicket
     */
    select?: TagsOnTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagsOnTicket
     */
    omit?: TagsOnTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsOnTicketInclude<ExtArgs> | null
    /**
     * Filter which TagsOnTicket to delete.
     */
    where: TagsOnTicketWhereUniqueInput
  }

  /**
   * TagsOnTicket deleteMany
   */
  export type TagsOnTicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TagsOnTickets to delete
     */
    where?: TagsOnTicketWhereInput
    /**
     * Limit how many TagsOnTickets to delete.
     */
    limit?: number
  }

  /**
   * TagsOnTicket without action
   */
  export type TagsOnTicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsOnTicket
     */
    select?: TagsOnTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagsOnTicket
     */
    omit?: TagsOnTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsOnTicketInclude<ExtArgs> | null
  }


  /**
   * Model TicketAssignments
   */

  export type AggregateTicketAssignments = {
    _count: TicketAssignmentsCountAggregateOutputType | null
    _avg: TicketAssignmentsAvgAggregateOutputType | null
    _sum: TicketAssignmentsSumAggregateOutputType | null
    _min: TicketAssignmentsMinAggregateOutputType | null
    _max: TicketAssignmentsMaxAggregateOutputType | null
  }

  export type TicketAssignmentsAvgAggregateOutputType = {
    ticketId: number | null
    assigneeId: number | null
    assignerId: number | null
  }

  export type TicketAssignmentsSumAggregateOutputType = {
    ticketId: number | null
    assigneeId: number | null
    assignerId: number | null
  }

  export type TicketAssignmentsMinAggregateOutputType = {
    ticketId: number | null
    assigneeId: number | null
    assignerId: number | null
    createdAt: Date | null
    deletedAt: Date | null
    updatedAt: Date | null
  }

  export type TicketAssignmentsMaxAggregateOutputType = {
    ticketId: number | null
    assigneeId: number | null
    assignerId: number | null
    createdAt: Date | null
    deletedAt: Date | null
    updatedAt: Date | null
  }

  export type TicketAssignmentsCountAggregateOutputType = {
    ticketId: number
    assigneeId: number
    assignerId: number
    createdAt: number
    deletedAt: number
    updatedAt: number
    _all: number
  }


  export type TicketAssignmentsAvgAggregateInputType = {
    ticketId?: true
    assigneeId?: true
    assignerId?: true
  }

  export type TicketAssignmentsSumAggregateInputType = {
    ticketId?: true
    assigneeId?: true
    assignerId?: true
  }

  export type TicketAssignmentsMinAggregateInputType = {
    ticketId?: true
    assigneeId?: true
    assignerId?: true
    createdAt?: true
    deletedAt?: true
    updatedAt?: true
  }

  export type TicketAssignmentsMaxAggregateInputType = {
    ticketId?: true
    assigneeId?: true
    assignerId?: true
    createdAt?: true
    deletedAt?: true
    updatedAt?: true
  }

  export type TicketAssignmentsCountAggregateInputType = {
    ticketId?: true
    assigneeId?: true
    assignerId?: true
    createdAt?: true
    deletedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TicketAssignmentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketAssignments to aggregate.
     */
    where?: TicketAssignmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketAssignments to fetch.
     */
    orderBy?: TicketAssignmentsOrderByWithRelationInput | TicketAssignmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketAssignmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TicketAssignments
    **/
    _count?: true | TicketAssignmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketAssignmentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketAssignmentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketAssignmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketAssignmentsMaxAggregateInputType
  }

  export type GetTicketAssignmentsAggregateType<T extends TicketAssignmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateTicketAssignments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicketAssignments[P]>
      : GetScalarType<T[P], AggregateTicketAssignments[P]>
  }




  export type TicketAssignmentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketAssignmentsWhereInput
    orderBy?: TicketAssignmentsOrderByWithAggregationInput | TicketAssignmentsOrderByWithAggregationInput[]
    by: TicketAssignmentsScalarFieldEnum[] | TicketAssignmentsScalarFieldEnum
    having?: TicketAssignmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketAssignmentsCountAggregateInputType | true
    _avg?: TicketAssignmentsAvgAggregateInputType
    _sum?: TicketAssignmentsSumAggregateInputType
    _min?: TicketAssignmentsMinAggregateInputType
    _max?: TicketAssignmentsMaxAggregateInputType
  }

  export type TicketAssignmentsGroupByOutputType = {
    ticketId: number
    assigneeId: number
    assignerId: number
    createdAt: Date
    deletedAt: Date | null
    updatedAt: Date
    _count: TicketAssignmentsCountAggregateOutputType | null
    _avg: TicketAssignmentsAvgAggregateOutputType | null
    _sum: TicketAssignmentsSumAggregateOutputType | null
    _min: TicketAssignmentsMinAggregateOutputType | null
    _max: TicketAssignmentsMaxAggregateOutputType | null
  }

  type GetTicketAssignmentsGroupByPayload<T extends TicketAssignmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketAssignmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketAssignmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketAssignmentsGroupByOutputType[P]>
            : GetScalarType<T[P], TicketAssignmentsGroupByOutputType[P]>
        }
      >
    >


  export type TicketAssignmentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ticketId?: boolean
    assigneeId?: boolean
    assignerId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    Ticket?: boolean | TicketDefaultArgs<ExtArgs>
    Assignee?: boolean | UserDefaultArgs<ExtArgs>
    AssignedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketAssignments"]>

  export type TicketAssignmentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ticketId?: boolean
    assigneeId?: boolean
    assignerId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    Ticket?: boolean | TicketDefaultArgs<ExtArgs>
    Assignee?: boolean | UserDefaultArgs<ExtArgs>
    AssignedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketAssignments"]>

  export type TicketAssignmentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ticketId?: boolean
    assigneeId?: boolean
    assignerId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    Ticket?: boolean | TicketDefaultArgs<ExtArgs>
    Assignee?: boolean | UserDefaultArgs<ExtArgs>
    AssignedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketAssignments"]>

  export type TicketAssignmentsSelectScalar = {
    ticketId?: boolean
    assigneeId?: boolean
    assignerId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
  }

  export type TicketAssignmentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ticketId" | "assigneeId" | "assignerId" | "createdAt" | "deletedAt" | "updatedAt", ExtArgs["result"]["ticketAssignments"]>
  export type TicketAssignmentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ticket?: boolean | TicketDefaultArgs<ExtArgs>
    Assignee?: boolean | UserDefaultArgs<ExtArgs>
    AssignedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TicketAssignmentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ticket?: boolean | TicketDefaultArgs<ExtArgs>
    Assignee?: boolean | UserDefaultArgs<ExtArgs>
    AssignedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TicketAssignmentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ticket?: boolean | TicketDefaultArgs<ExtArgs>
    Assignee?: boolean | UserDefaultArgs<ExtArgs>
    AssignedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TicketAssignmentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TicketAssignments"
    objects: {
      Ticket: Prisma.$TicketPayload<ExtArgs>
      Assignee: Prisma.$UserPayload<ExtArgs>
      AssignedBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ticketId: number
      assigneeId: number
      assignerId: number
      createdAt: Date
      deletedAt: Date | null
      updatedAt: Date
    }, ExtArgs["result"]["ticketAssignments"]>
    composites: {}
  }

  type TicketAssignmentsGetPayload<S extends boolean | null | undefined | TicketAssignmentsDefaultArgs> = $Result.GetResult<Prisma.$TicketAssignmentsPayload, S>

  type TicketAssignmentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketAssignmentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketAssignmentsCountAggregateInputType | true
    }

  export interface TicketAssignmentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TicketAssignments'], meta: { name: 'TicketAssignments' } }
    /**
     * Find zero or one TicketAssignments that matches the filter.
     * @param {TicketAssignmentsFindUniqueArgs} args - Arguments to find a TicketAssignments
     * @example
     * // Get one TicketAssignments
     * const ticketAssignments = await prisma.ticketAssignments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketAssignmentsFindUniqueArgs>(args: SelectSubset<T, TicketAssignmentsFindUniqueArgs<ExtArgs>>): Prisma__TicketAssignmentsClient<$Result.GetResult<Prisma.$TicketAssignmentsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one TicketAssignments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketAssignmentsFindUniqueOrThrowArgs} args - Arguments to find a TicketAssignments
     * @example
     * // Get one TicketAssignments
     * const ticketAssignments = await prisma.ticketAssignments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketAssignmentsFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketAssignmentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketAssignmentsClient<$Result.GetResult<Prisma.$TicketAssignmentsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first TicketAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAssignmentsFindFirstArgs} args - Arguments to find a TicketAssignments
     * @example
     * // Get one TicketAssignments
     * const ticketAssignments = await prisma.ticketAssignments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketAssignmentsFindFirstArgs>(args?: SelectSubset<T, TicketAssignmentsFindFirstArgs<ExtArgs>>): Prisma__TicketAssignmentsClient<$Result.GetResult<Prisma.$TicketAssignmentsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first TicketAssignments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAssignmentsFindFirstOrThrowArgs} args - Arguments to find a TicketAssignments
     * @example
     * // Get one TicketAssignments
     * const ticketAssignments = await prisma.ticketAssignments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketAssignmentsFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketAssignmentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketAssignmentsClient<$Result.GetResult<Prisma.$TicketAssignmentsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more TicketAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAssignmentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TicketAssignments
     * const ticketAssignments = await prisma.ticketAssignments.findMany()
     * 
     * // Get first 10 TicketAssignments
     * const ticketAssignments = await prisma.ticketAssignments.findMany({ take: 10 })
     * 
     * // Only select the `ticketId`
     * const ticketAssignmentsWithTicketIdOnly = await prisma.ticketAssignments.findMany({ select: { ticketId: true } })
     * 
     */
    findMany<T extends TicketAssignmentsFindManyArgs>(args?: SelectSubset<T, TicketAssignmentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketAssignmentsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a TicketAssignments.
     * @param {TicketAssignmentsCreateArgs} args - Arguments to create a TicketAssignments.
     * @example
     * // Create one TicketAssignments
     * const TicketAssignments = await prisma.ticketAssignments.create({
     *   data: {
     *     // ... data to create a TicketAssignments
     *   }
     * })
     * 
     */
    create<T extends TicketAssignmentsCreateArgs>(args: SelectSubset<T, TicketAssignmentsCreateArgs<ExtArgs>>): Prisma__TicketAssignmentsClient<$Result.GetResult<Prisma.$TicketAssignmentsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many TicketAssignments.
     * @param {TicketAssignmentsCreateManyArgs} args - Arguments to create many TicketAssignments.
     * @example
     * // Create many TicketAssignments
     * const ticketAssignments = await prisma.ticketAssignments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketAssignmentsCreateManyArgs>(args?: SelectSubset<T, TicketAssignmentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TicketAssignments and returns the data saved in the database.
     * @param {TicketAssignmentsCreateManyAndReturnArgs} args - Arguments to create many TicketAssignments.
     * @example
     * // Create many TicketAssignments
     * const ticketAssignments = await prisma.ticketAssignments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TicketAssignments and only return the `ticketId`
     * const ticketAssignmentsWithTicketIdOnly = await prisma.ticketAssignments.createManyAndReturn({
     *   select: { ticketId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketAssignmentsCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketAssignmentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketAssignmentsPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a TicketAssignments.
     * @param {TicketAssignmentsDeleteArgs} args - Arguments to delete one TicketAssignments.
     * @example
     * // Delete one TicketAssignments
     * const TicketAssignments = await prisma.ticketAssignments.delete({
     *   where: {
     *     // ... filter to delete one TicketAssignments
     *   }
     * })
     * 
     */
    delete<T extends TicketAssignmentsDeleteArgs>(args: SelectSubset<T, TicketAssignmentsDeleteArgs<ExtArgs>>): Prisma__TicketAssignmentsClient<$Result.GetResult<Prisma.$TicketAssignmentsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one TicketAssignments.
     * @param {TicketAssignmentsUpdateArgs} args - Arguments to update one TicketAssignments.
     * @example
     * // Update one TicketAssignments
     * const ticketAssignments = await prisma.ticketAssignments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketAssignmentsUpdateArgs>(args: SelectSubset<T, TicketAssignmentsUpdateArgs<ExtArgs>>): Prisma__TicketAssignmentsClient<$Result.GetResult<Prisma.$TicketAssignmentsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more TicketAssignments.
     * @param {TicketAssignmentsDeleteManyArgs} args - Arguments to filter TicketAssignments to delete.
     * @example
     * // Delete a few TicketAssignments
     * const { count } = await prisma.ticketAssignments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketAssignmentsDeleteManyArgs>(args?: SelectSubset<T, TicketAssignmentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAssignmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TicketAssignments
     * const ticketAssignments = await prisma.ticketAssignments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketAssignmentsUpdateManyArgs>(args: SelectSubset<T, TicketAssignmentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketAssignments and returns the data updated in the database.
     * @param {TicketAssignmentsUpdateManyAndReturnArgs} args - Arguments to update many TicketAssignments.
     * @example
     * // Update many TicketAssignments
     * const ticketAssignments = await prisma.ticketAssignments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TicketAssignments and only return the `ticketId`
     * const ticketAssignmentsWithTicketIdOnly = await prisma.ticketAssignments.updateManyAndReturn({
     *   select: { ticketId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TicketAssignmentsUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketAssignmentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketAssignmentsPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one TicketAssignments.
     * @param {TicketAssignmentsUpsertArgs} args - Arguments to update or create a TicketAssignments.
     * @example
     * // Update or create a TicketAssignments
     * const ticketAssignments = await prisma.ticketAssignments.upsert({
     *   create: {
     *     // ... data to create a TicketAssignments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TicketAssignments we want to update
     *   }
     * })
     */
    upsert<T extends TicketAssignmentsUpsertArgs>(args: SelectSubset<T, TicketAssignmentsUpsertArgs<ExtArgs>>): Prisma__TicketAssignmentsClient<$Result.GetResult<Prisma.$TicketAssignmentsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of TicketAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAssignmentsCountArgs} args - Arguments to filter TicketAssignments to count.
     * @example
     * // Count the number of TicketAssignments
     * const count = await prisma.ticketAssignments.count({
     *   where: {
     *     // ... the filter for the TicketAssignments we want to count
     *   }
     * })
    **/
    count<T extends TicketAssignmentsCountArgs>(
      args?: Subset<T, TicketAssignmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketAssignmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TicketAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAssignmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketAssignmentsAggregateArgs>(args: Subset<T, TicketAssignmentsAggregateArgs>): Prisma.PrismaPromise<GetTicketAssignmentsAggregateType<T>>

    /**
     * Group by TicketAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAssignmentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketAssignmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketAssignmentsGroupByArgs['orderBy'] }
        : { orderBy?: TicketAssignmentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketAssignmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketAssignmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TicketAssignments model
   */
  readonly fields: TicketAssignmentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TicketAssignments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketAssignmentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    Assignee<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    AssignedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TicketAssignments model
   */ 
  interface TicketAssignmentsFieldRefs {
    readonly ticketId: FieldRef<"TicketAssignments", 'Int'>
    readonly assigneeId: FieldRef<"TicketAssignments", 'Int'>
    readonly assignerId: FieldRef<"TicketAssignments", 'Int'>
    readonly createdAt: FieldRef<"TicketAssignments", 'DateTime'>
    readonly deletedAt: FieldRef<"TicketAssignments", 'DateTime'>
    readonly updatedAt: FieldRef<"TicketAssignments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TicketAssignments findUnique
   */
  export type TicketAssignmentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAssignments
     */
    select?: TicketAssignmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAssignments
     */
    omit?: TicketAssignmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAssignmentsInclude<ExtArgs> | null
    /**
     * Filter, which TicketAssignments to fetch.
     */
    where: TicketAssignmentsWhereUniqueInput
  }

  /**
   * TicketAssignments findUniqueOrThrow
   */
  export type TicketAssignmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAssignments
     */
    select?: TicketAssignmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAssignments
     */
    omit?: TicketAssignmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAssignmentsInclude<ExtArgs> | null
    /**
     * Filter, which TicketAssignments to fetch.
     */
    where: TicketAssignmentsWhereUniqueInput
  }

  /**
   * TicketAssignments findFirst
   */
  export type TicketAssignmentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAssignments
     */
    select?: TicketAssignmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAssignments
     */
    omit?: TicketAssignmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAssignmentsInclude<ExtArgs> | null
    /**
     * Filter, which TicketAssignments to fetch.
     */
    where?: TicketAssignmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketAssignments to fetch.
     */
    orderBy?: TicketAssignmentsOrderByWithRelationInput | TicketAssignmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketAssignments.
     */
    cursor?: TicketAssignmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketAssignments.
     */
    distinct?: TicketAssignmentsScalarFieldEnum | TicketAssignmentsScalarFieldEnum[]
  }

  /**
   * TicketAssignments findFirstOrThrow
   */
  export type TicketAssignmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAssignments
     */
    select?: TicketAssignmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAssignments
     */
    omit?: TicketAssignmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAssignmentsInclude<ExtArgs> | null
    /**
     * Filter, which TicketAssignments to fetch.
     */
    where?: TicketAssignmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketAssignments to fetch.
     */
    orderBy?: TicketAssignmentsOrderByWithRelationInput | TicketAssignmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketAssignments.
     */
    cursor?: TicketAssignmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketAssignments.
     */
    distinct?: TicketAssignmentsScalarFieldEnum | TicketAssignmentsScalarFieldEnum[]
  }

  /**
   * TicketAssignments findMany
   */
  export type TicketAssignmentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAssignments
     */
    select?: TicketAssignmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAssignments
     */
    omit?: TicketAssignmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAssignmentsInclude<ExtArgs> | null
    /**
     * Filter, which TicketAssignments to fetch.
     */
    where?: TicketAssignmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketAssignments to fetch.
     */
    orderBy?: TicketAssignmentsOrderByWithRelationInput | TicketAssignmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TicketAssignments.
     */
    cursor?: TicketAssignmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketAssignments.
     */
    skip?: number
    distinct?: TicketAssignmentsScalarFieldEnum | TicketAssignmentsScalarFieldEnum[]
  }

  /**
   * TicketAssignments create
   */
  export type TicketAssignmentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAssignments
     */
    select?: TicketAssignmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAssignments
     */
    omit?: TicketAssignmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAssignmentsInclude<ExtArgs> | null
    /**
     * The data needed to create a TicketAssignments.
     */
    data: XOR<TicketAssignmentsCreateInput, TicketAssignmentsUncheckedCreateInput>
  }

  /**
   * TicketAssignments createMany
   */
  export type TicketAssignmentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TicketAssignments.
     */
    data: TicketAssignmentsCreateManyInput | TicketAssignmentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TicketAssignments createManyAndReturn
   */
  export type TicketAssignmentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAssignments
     */
    select?: TicketAssignmentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAssignments
     */
    omit?: TicketAssignmentsOmit<ExtArgs> | null
    /**
     * The data used to create many TicketAssignments.
     */
    data: TicketAssignmentsCreateManyInput | TicketAssignmentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAssignmentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketAssignments update
   */
  export type TicketAssignmentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAssignments
     */
    select?: TicketAssignmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAssignments
     */
    omit?: TicketAssignmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAssignmentsInclude<ExtArgs> | null
    /**
     * The data needed to update a TicketAssignments.
     */
    data: XOR<TicketAssignmentsUpdateInput, TicketAssignmentsUncheckedUpdateInput>
    /**
     * Choose, which TicketAssignments to update.
     */
    where: TicketAssignmentsWhereUniqueInput
  }

  /**
   * TicketAssignments updateMany
   */
  export type TicketAssignmentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TicketAssignments.
     */
    data: XOR<TicketAssignmentsUpdateManyMutationInput, TicketAssignmentsUncheckedUpdateManyInput>
    /**
     * Filter which TicketAssignments to update
     */
    where?: TicketAssignmentsWhereInput
    /**
     * Limit how many TicketAssignments to update.
     */
    limit?: number
  }

  /**
   * TicketAssignments updateManyAndReturn
   */
  export type TicketAssignmentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAssignments
     */
    select?: TicketAssignmentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAssignments
     */
    omit?: TicketAssignmentsOmit<ExtArgs> | null
    /**
     * The data used to update TicketAssignments.
     */
    data: XOR<TicketAssignmentsUpdateManyMutationInput, TicketAssignmentsUncheckedUpdateManyInput>
    /**
     * Filter which TicketAssignments to update
     */
    where?: TicketAssignmentsWhereInput
    /**
     * Limit how many TicketAssignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAssignmentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketAssignments upsert
   */
  export type TicketAssignmentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAssignments
     */
    select?: TicketAssignmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAssignments
     */
    omit?: TicketAssignmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAssignmentsInclude<ExtArgs> | null
    /**
     * The filter to search for the TicketAssignments to update in case it exists.
     */
    where: TicketAssignmentsWhereUniqueInput
    /**
     * In case the TicketAssignments found by the `where` argument doesn't exist, create a new TicketAssignments with this data.
     */
    create: XOR<TicketAssignmentsCreateInput, TicketAssignmentsUncheckedCreateInput>
    /**
     * In case the TicketAssignments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketAssignmentsUpdateInput, TicketAssignmentsUncheckedUpdateInput>
  }

  /**
   * TicketAssignments delete
   */
  export type TicketAssignmentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAssignments
     */
    select?: TicketAssignmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAssignments
     */
    omit?: TicketAssignmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAssignmentsInclude<ExtArgs> | null
    /**
     * Filter which TicketAssignments to delete.
     */
    where: TicketAssignmentsWhereUniqueInput
  }

  /**
   * TicketAssignments deleteMany
   */
  export type TicketAssignmentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketAssignments to delete
     */
    where?: TicketAssignmentsWhereInput
    /**
     * Limit how many TicketAssignments to delete.
     */
    limit?: number
  }

  /**
   * TicketAssignments without action
   */
  export type TicketAssignmentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAssignments
     */
    select?: TicketAssignmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAssignments
     */
    omit?: TicketAssignmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAssignmentsInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagAvgAggregateOutputType = {
    id: number | null
  }

  export type TagSumAggregateOutputType = {
    id: number | null
  }

  export type TagMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    deletedAt: Date | null
    updatedAt: Date | null
  }

  export type TagMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    deletedAt: Date | null
    updatedAt: Date | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    deletedAt: number
    updatedAt: number
    _all: number
  }


  export type TagAvgAggregateInputType = {
    id?: true
  }

  export type TagSumAggregateInputType = {
    id?: true
  }

  export type TagMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    deletedAt?: true
    updatedAt?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    deletedAt?: true
    updatedAt?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    deletedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _avg?: TagAvgAggregateInputType
    _sum?: TagSumAggregateInputType
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    deletedAt: Date | null
    updatedAt: Date
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    tickets?: boolean | Tag$ticketsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "deletedAt" | "updatedAt", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | Tag$ticketsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      tickets: Prisma.$TagsOnTicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      deletedAt: Date | null
      updatedAt: Date
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tickets<T extends Tag$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagsOnTicketPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tag model
   */ 
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'Int'>
    readonly name: FieldRef<"Tag", 'String'>
    readonly createdAt: FieldRef<"Tag", 'DateTime'>
    readonly deletedAt: FieldRef<"Tag", 'DateTime'>
    readonly updatedAt: FieldRef<"Tag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.tickets
   */
  export type Tag$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsOnTicket
     */
    select?: TagsOnTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagsOnTicket
     */
    omit?: TagsOnTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsOnTicketInclude<ExtArgs> | null
    where?: TagsOnTicketWhereInput
    orderBy?: TagsOnTicketOrderByWithRelationInput | TagsOnTicketOrderByWithRelationInput[]
    cursor?: TagsOnTicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagsOnTicketScalarFieldEnum | TagsOnTicketScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model Status
   */

  export type AggregateStatus = {
    _count: StatusCountAggregateOutputType | null
    _avg: StatusAvgAggregateOutputType | null
    _sum: StatusSumAggregateOutputType | null
    _min: StatusMinAggregateOutputType | null
    _max: StatusMaxAggregateOutputType | null
  }

  export type StatusAvgAggregateOutputType = {
    id: number | null
  }

  export type StatusSumAggregateOutputType = {
    id: number | null
  }

  export type StatusMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    deletedAt: Date | null
    updatedAt: Date | null
  }

  export type StatusMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    deletedAt: Date | null
    updatedAt: Date | null
  }

  export type StatusCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    deletedAt: number
    updatedAt: number
    _all: number
  }


  export type StatusAvgAggregateInputType = {
    id?: true
  }

  export type StatusSumAggregateInputType = {
    id?: true
  }

  export type StatusMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    deletedAt?: true
    updatedAt?: true
  }

  export type StatusMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    deletedAt?: true
    updatedAt?: true
  }

  export type StatusCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    deletedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Status to aggregate.
     */
    where?: StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statuses to fetch.
     */
    orderBy?: StatusOrderByWithRelationInput | StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Statuses
    **/
    _count?: true | StatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatusMaxAggregateInputType
  }

  export type GetStatusAggregateType<T extends StatusAggregateArgs> = {
        [P in keyof T & keyof AggregateStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatus[P]>
      : GetScalarType<T[P], AggregateStatus[P]>
  }




  export type StatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatusWhereInput
    orderBy?: StatusOrderByWithAggregationInput | StatusOrderByWithAggregationInput[]
    by: StatusScalarFieldEnum[] | StatusScalarFieldEnum
    having?: StatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatusCountAggregateInputType | true
    _avg?: StatusAvgAggregateInputType
    _sum?: StatusSumAggregateInputType
    _min?: StatusMinAggregateInputType
    _max?: StatusMaxAggregateInputType
  }

  export type StatusGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    deletedAt: Date | null
    updatedAt: Date
    _count: StatusCountAggregateOutputType | null
    _avg: StatusAvgAggregateOutputType | null
    _sum: StatusSumAggregateOutputType | null
    _min: StatusMinAggregateOutputType | null
    _max: StatusMaxAggregateOutputType | null
  }

  type GetStatusGroupByPayload<T extends StatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatusGroupByOutputType[P]>
            : GetScalarType<T[P], StatusGroupByOutputType[P]>
        }
      >
    >


  export type StatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    Ticket?: boolean | Status$TicketArgs<ExtArgs>
    _count?: boolean | StatusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["status"]>

  export type StatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["status"]>

  export type StatusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["status"]>

  export type StatusSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
  }

  export type StatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "deletedAt" | "updatedAt", ExtArgs["result"]["status"]>
  export type StatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ticket?: boolean | Status$TicketArgs<ExtArgs>
    _count?: boolean | StatusCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StatusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StatusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Status"
    objects: {
      Ticket: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      deletedAt: Date | null
      updatedAt: Date
    }, ExtArgs["result"]["status"]>
    composites: {}
  }

  type StatusGetPayload<S extends boolean | null | undefined | StatusDefaultArgs> = $Result.GetResult<Prisma.$StatusPayload, S>

  type StatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StatusCountAggregateInputType | true
    }

  export interface StatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Status'], meta: { name: 'Status' } }
    /**
     * Find zero or one Status that matches the filter.
     * @param {StatusFindUniqueArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StatusFindUniqueArgs>(args: SelectSubset<T, StatusFindUniqueArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Status that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StatusFindUniqueOrThrowArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StatusFindUniqueOrThrowArgs>(args: SelectSubset<T, StatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Status that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusFindFirstArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StatusFindFirstArgs>(args?: SelectSubset<T, StatusFindFirstArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Status that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusFindFirstOrThrowArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StatusFindFirstOrThrowArgs>(args?: SelectSubset<T, StatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Statuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Statuses
     * const statuses = await prisma.status.findMany()
     * 
     * // Get first 10 Statuses
     * const statuses = await prisma.status.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const statusWithIdOnly = await prisma.status.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StatusFindManyArgs>(args?: SelectSubset<T, StatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Status.
     * @param {StatusCreateArgs} args - Arguments to create a Status.
     * @example
     * // Create one Status
     * const Status = await prisma.status.create({
     *   data: {
     *     // ... data to create a Status
     *   }
     * })
     * 
     */
    create<T extends StatusCreateArgs>(args: SelectSubset<T, StatusCreateArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Statuses.
     * @param {StatusCreateManyArgs} args - Arguments to create many Statuses.
     * @example
     * // Create many Statuses
     * const status = await prisma.status.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StatusCreateManyArgs>(args?: SelectSubset<T, StatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Statuses and returns the data saved in the database.
     * @param {StatusCreateManyAndReturnArgs} args - Arguments to create many Statuses.
     * @example
     * // Create many Statuses
     * const status = await prisma.status.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Statuses and only return the `id`
     * const statusWithIdOnly = await prisma.status.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StatusCreateManyAndReturnArgs>(args?: SelectSubset<T, StatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Status.
     * @param {StatusDeleteArgs} args - Arguments to delete one Status.
     * @example
     * // Delete one Status
     * const Status = await prisma.status.delete({
     *   where: {
     *     // ... filter to delete one Status
     *   }
     * })
     * 
     */
    delete<T extends StatusDeleteArgs>(args: SelectSubset<T, StatusDeleteArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Status.
     * @param {StatusUpdateArgs} args - Arguments to update one Status.
     * @example
     * // Update one Status
     * const status = await prisma.status.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StatusUpdateArgs>(args: SelectSubset<T, StatusUpdateArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Statuses.
     * @param {StatusDeleteManyArgs} args - Arguments to filter Statuses to delete.
     * @example
     * // Delete a few Statuses
     * const { count } = await prisma.status.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StatusDeleteManyArgs>(args?: SelectSubset<T, StatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Statuses
     * const status = await prisma.status.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StatusUpdateManyArgs>(args: SelectSubset<T, StatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Statuses and returns the data updated in the database.
     * @param {StatusUpdateManyAndReturnArgs} args - Arguments to update many Statuses.
     * @example
     * // Update many Statuses
     * const status = await prisma.status.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Statuses and only return the `id`
     * const statusWithIdOnly = await prisma.status.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StatusUpdateManyAndReturnArgs>(args: SelectSubset<T, StatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Status.
     * @param {StatusUpsertArgs} args - Arguments to update or create a Status.
     * @example
     * // Update or create a Status
     * const status = await prisma.status.upsert({
     *   create: {
     *     // ... data to create a Status
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Status we want to update
     *   }
     * })
     */
    upsert<T extends StatusUpsertArgs>(args: SelectSubset<T, StatusUpsertArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusCountArgs} args - Arguments to filter Statuses to count.
     * @example
     * // Count the number of Statuses
     * const count = await prisma.status.count({
     *   where: {
     *     // ... the filter for the Statuses we want to count
     *   }
     * })
    **/
    count<T extends StatusCountArgs>(
      args?: Subset<T, StatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StatusAggregateArgs>(args: Subset<T, StatusAggregateArgs>): Prisma.PrismaPromise<GetStatusAggregateType<T>>

    /**
     * Group by Status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatusGroupByArgs['orderBy'] }
        : { orderBy?: StatusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Status model
   */
  readonly fields: StatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Status.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Ticket<T extends Status$TicketArgs<ExtArgs> = {}>(args?: Subset<T, Status$TicketArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Status model
   */ 
  interface StatusFieldRefs {
    readonly id: FieldRef<"Status", 'Int'>
    readonly name: FieldRef<"Status", 'String'>
    readonly createdAt: FieldRef<"Status", 'DateTime'>
    readonly deletedAt: FieldRef<"Status", 'DateTime'>
    readonly updatedAt: FieldRef<"Status", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Status findUnique
   */
  export type StatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * Filter, which Status to fetch.
     */
    where: StatusWhereUniqueInput
  }

  /**
   * Status findUniqueOrThrow
   */
  export type StatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * Filter, which Status to fetch.
     */
    where: StatusWhereUniqueInput
  }

  /**
   * Status findFirst
   */
  export type StatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * Filter, which Status to fetch.
     */
    where?: StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statuses to fetch.
     */
    orderBy?: StatusOrderByWithRelationInput | StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Statuses.
     */
    cursor?: StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Statuses.
     */
    distinct?: StatusScalarFieldEnum | StatusScalarFieldEnum[]
  }

  /**
   * Status findFirstOrThrow
   */
  export type StatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * Filter, which Status to fetch.
     */
    where?: StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statuses to fetch.
     */
    orderBy?: StatusOrderByWithRelationInput | StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Statuses.
     */
    cursor?: StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Statuses.
     */
    distinct?: StatusScalarFieldEnum | StatusScalarFieldEnum[]
  }

  /**
   * Status findMany
   */
  export type StatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * Filter, which Statuses to fetch.
     */
    where?: StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statuses to fetch.
     */
    orderBy?: StatusOrderByWithRelationInput | StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Statuses.
     */
    cursor?: StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statuses.
     */
    skip?: number
    distinct?: StatusScalarFieldEnum | StatusScalarFieldEnum[]
  }

  /**
   * Status create
   */
  export type StatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * The data needed to create a Status.
     */
    data: XOR<StatusCreateInput, StatusUncheckedCreateInput>
  }

  /**
   * Status createMany
   */
  export type StatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Statuses.
     */
    data: StatusCreateManyInput | StatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Status createManyAndReturn
   */
  export type StatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * The data used to create many Statuses.
     */
    data: StatusCreateManyInput | StatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Status update
   */
  export type StatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * The data needed to update a Status.
     */
    data: XOR<StatusUpdateInput, StatusUncheckedUpdateInput>
    /**
     * Choose, which Status to update.
     */
    where: StatusWhereUniqueInput
  }

  /**
   * Status updateMany
   */
  export type StatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Statuses.
     */
    data: XOR<StatusUpdateManyMutationInput, StatusUncheckedUpdateManyInput>
    /**
     * Filter which Statuses to update
     */
    where?: StatusWhereInput
    /**
     * Limit how many Statuses to update.
     */
    limit?: number
  }

  /**
   * Status updateManyAndReturn
   */
  export type StatusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * The data used to update Statuses.
     */
    data: XOR<StatusUpdateManyMutationInput, StatusUncheckedUpdateManyInput>
    /**
     * Filter which Statuses to update
     */
    where?: StatusWhereInput
    /**
     * Limit how many Statuses to update.
     */
    limit?: number
  }

  /**
   * Status upsert
   */
  export type StatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * The filter to search for the Status to update in case it exists.
     */
    where: StatusWhereUniqueInput
    /**
     * In case the Status found by the `where` argument doesn't exist, create a new Status with this data.
     */
    create: XOR<StatusCreateInput, StatusUncheckedCreateInput>
    /**
     * In case the Status was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StatusUpdateInput, StatusUncheckedUpdateInput>
  }

  /**
   * Status delete
   */
  export type StatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * Filter which Status to delete.
     */
    where: StatusWhereUniqueInput
  }

  /**
   * Status deleteMany
   */
  export type StatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Statuses to delete
     */
    where?: StatusWhereInput
    /**
     * Limit how many Statuses to delete.
     */
    limit?: number
  }

  /**
   * Status.Ticket
   */
  export type Status$TicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Status without action
   */
  export type StatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
  }


  /**
   * Model Group
   */

  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupAvgAggregateOutputType = {
    id: number | null
  }

  export type GroupSumAggregateOutputType = {
    id: number | null
  }

  export type GroupMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type GroupMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type GroupCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type GroupAvgAggregateInputType = {
    id?: true
  }

  export type GroupSumAggregateInputType = {
    id?: true
  }

  export type GroupMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type GroupMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type GroupCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type GroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Group to aggregate.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type GroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithAggregationInput | GroupOrderByWithAggregationInput[]
    by: GroupScalarFieldEnum[] | GroupScalarFieldEnum
    having?: GroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _avg?: GroupAvgAggregateInputType
    _sum?: GroupSumAggregateInputType
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }

  export type GroupGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type GroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    users?: boolean | Group$usersArgs<ExtArgs>
    Ticket?: boolean | Group$TicketArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["group"]>

  export type GroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["group"]>

  export type GroupSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type GroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["group"]>
  export type GroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Group$usersArgs<ExtArgs>
    Ticket?: boolean | Group$TicketArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Group"
    objects: {
      users: Prisma.$UsersOnGroupPayload<ExtArgs>[]
      Ticket: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["group"]>
    composites: {}
  }

  type GroupGetPayload<S extends boolean | null | undefined | GroupDefaultArgs> = $Result.GetResult<Prisma.$GroupPayload, S>

  type GroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupCountAggregateInputType | true
    }

  export interface GroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Group'], meta: { name: 'Group' } }
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupFindUniqueArgs>(args: SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Group that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupFindFirstArgs>(args?: SelectSubset<T, GroupFindFirstArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupFindManyArgs>(args?: SelectSubset<T, GroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
     */
    create<T extends GroupCreateArgs>(args: SelectSubset<T, GroupCreateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Groups.
     * @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupCreateManyArgs>(args?: SelectSubset<T, GroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groups and returns the data saved in the database.
     * @param {GroupCreateManyAndReturnArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
     */
    delete<T extends GroupDeleteArgs>(args: SelectSubset<T, GroupDeleteArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupUpdateArgs>(args: SelectSubset<T, GroupUpdateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupDeleteManyArgs>(args?: SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupUpdateManyArgs>(args: SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups and returns the data updated in the database.
     * @param {GroupUpdateManyAndReturnArgs} args - Arguments to update many Groups.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GroupUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
     */
    upsert<T extends GroupUpsertArgs>(args: SelectSubset<T, GroupUpsertArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Group model
   */
  readonly fields: GroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Group$usersArgs<ExtArgs> = {}>(args?: Subset<T, Group$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersOnGroupPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    Ticket<T extends Group$TicketArgs<ExtArgs> = {}>(args?: Subset<T, Group$TicketArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Group model
   */ 
  interface GroupFieldRefs {
    readonly id: FieldRef<"Group", 'Int'>
    readonly name: FieldRef<"Group", 'String'>
    readonly createdAt: FieldRef<"Group", 'DateTime'>
    readonly updatedAt: FieldRef<"Group", 'DateTime'>
    readonly deletedAt: FieldRef<"Group", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Group findUnique
   */
  export type GroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findUniqueOrThrow
   */
  export type GroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findFirst
   */
  export type GroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findFirstOrThrow
   */
  export type GroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findMany
   */
  export type GroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group create
   */
  export type GroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to create a Group.
     */
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>
  }

  /**
   * Group createMany
   */
  export type GroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group createManyAndReturn
   */
  export type GroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group update
   */
  export type GroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to update a Group.
     */
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    /**
     * Choose, which Group to update.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Group updateManyAndReturn
   */
  export type GroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Group upsert
   */
  export type GroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The filter to search for the Group to update in case it exists.
     */
    where: GroupWhereUniqueInput
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     */
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
  }

  /**
   * Group delete
   */
  export type GroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter which Group to delete.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to delete.
     */
    limit?: number
  }

  /**
   * Group.users
   */
  export type Group$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersOnGroup
     */
    select?: UsersOnGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersOnGroup
     */
    omit?: UsersOnGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersOnGroupInclude<ExtArgs> | null
    where?: UsersOnGroupWhereInput
    orderBy?: UsersOnGroupOrderByWithRelationInput | UsersOnGroupOrderByWithRelationInput[]
    cursor?: UsersOnGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersOnGroupScalarFieldEnum | UsersOnGroupScalarFieldEnum[]
  }

  /**
   * Group.Ticket
   */
  export type Group$TicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Group without action
   */
  export type GroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
  }


  /**
   * Model UsersOnGroup
   */

  export type AggregateUsersOnGroup = {
    _count: UsersOnGroupCountAggregateOutputType | null
    _avg: UsersOnGroupAvgAggregateOutputType | null
    _sum: UsersOnGroupSumAggregateOutputType | null
    _min: UsersOnGroupMinAggregateOutputType | null
    _max: UsersOnGroupMaxAggregateOutputType | null
  }

  export type UsersOnGroupAvgAggregateOutputType = {
    userId: number | null
    groupId: number | null
  }

  export type UsersOnGroupSumAggregateOutputType = {
    userId: number | null
    groupId: number | null
  }

  export type UsersOnGroupMinAggregateOutputType = {
    userId: number | null
    groupId: number | null
    createdAt: Date | null
    deletedAt: Date | null
    updatedAt: Date | null
  }

  export type UsersOnGroupMaxAggregateOutputType = {
    userId: number | null
    groupId: number | null
    createdAt: Date | null
    deletedAt: Date | null
    updatedAt: Date | null
  }

  export type UsersOnGroupCountAggregateOutputType = {
    userId: number
    groupId: number
    createdAt: number
    deletedAt: number
    updatedAt: number
    _all: number
  }


  export type UsersOnGroupAvgAggregateInputType = {
    userId?: true
    groupId?: true
  }

  export type UsersOnGroupSumAggregateInputType = {
    userId?: true
    groupId?: true
  }

  export type UsersOnGroupMinAggregateInputType = {
    userId?: true
    groupId?: true
    createdAt?: true
    deletedAt?: true
    updatedAt?: true
  }

  export type UsersOnGroupMaxAggregateInputType = {
    userId?: true
    groupId?: true
    createdAt?: true
    deletedAt?: true
    updatedAt?: true
  }

  export type UsersOnGroupCountAggregateInputType = {
    userId?: true
    groupId?: true
    createdAt?: true
    deletedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersOnGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsersOnGroup to aggregate.
     */
    where?: UsersOnGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersOnGroups to fetch.
     */
    orderBy?: UsersOnGroupOrderByWithRelationInput | UsersOnGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersOnGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersOnGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersOnGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UsersOnGroups
    **/
    _count?: true | UsersOnGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersOnGroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersOnGroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersOnGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersOnGroupMaxAggregateInputType
  }

  export type GetUsersOnGroupAggregateType<T extends UsersOnGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateUsersOnGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsersOnGroup[P]>
      : GetScalarType<T[P], AggregateUsersOnGroup[P]>
  }




  export type UsersOnGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersOnGroupWhereInput
    orderBy?: UsersOnGroupOrderByWithAggregationInput | UsersOnGroupOrderByWithAggregationInput[]
    by: UsersOnGroupScalarFieldEnum[] | UsersOnGroupScalarFieldEnum
    having?: UsersOnGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersOnGroupCountAggregateInputType | true
    _avg?: UsersOnGroupAvgAggregateInputType
    _sum?: UsersOnGroupSumAggregateInputType
    _min?: UsersOnGroupMinAggregateInputType
    _max?: UsersOnGroupMaxAggregateInputType
  }

  export type UsersOnGroupGroupByOutputType = {
    userId: number
    groupId: number
    createdAt: Date
    deletedAt: Date | null
    updatedAt: Date
    _count: UsersOnGroupCountAggregateOutputType | null
    _avg: UsersOnGroupAvgAggregateOutputType | null
    _sum: UsersOnGroupSumAggregateOutputType | null
    _min: UsersOnGroupMinAggregateOutputType | null
    _max: UsersOnGroupMaxAggregateOutputType | null
  }

  type GetUsersOnGroupGroupByPayload<T extends UsersOnGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersOnGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersOnGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersOnGroupGroupByOutputType[P]>
            : GetScalarType<T[P], UsersOnGroupGroupByOutputType[P]>
        }
      >
    >


  export type UsersOnGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    groupId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    Group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usersOnGroup"]>

  export type UsersOnGroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    groupId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    Group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usersOnGroup"]>

  export type UsersOnGroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    groupId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    Group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usersOnGroup"]>

  export type UsersOnGroupSelectScalar = {
    userId?: boolean
    groupId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
  }

  export type UsersOnGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "groupId" | "createdAt" | "deletedAt" | "updatedAt", ExtArgs["result"]["usersOnGroup"]>
  export type UsersOnGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    Group?: boolean | GroupDefaultArgs<ExtArgs>
  }
  export type UsersOnGroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    Group?: boolean | GroupDefaultArgs<ExtArgs>
  }
  export type UsersOnGroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    Group?: boolean | GroupDefaultArgs<ExtArgs>
  }

  export type $UsersOnGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UsersOnGroup"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
      Group: Prisma.$GroupPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      groupId: number
      createdAt: Date
      deletedAt: Date | null
      updatedAt: Date
    }, ExtArgs["result"]["usersOnGroup"]>
    composites: {}
  }

  type UsersOnGroupGetPayload<S extends boolean | null | undefined | UsersOnGroupDefaultArgs> = $Result.GetResult<Prisma.$UsersOnGroupPayload, S>

  type UsersOnGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersOnGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersOnGroupCountAggregateInputType | true
    }

  export interface UsersOnGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UsersOnGroup'], meta: { name: 'UsersOnGroup' } }
    /**
     * Find zero or one UsersOnGroup that matches the filter.
     * @param {UsersOnGroupFindUniqueArgs} args - Arguments to find a UsersOnGroup
     * @example
     * // Get one UsersOnGroup
     * const usersOnGroup = await prisma.usersOnGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersOnGroupFindUniqueArgs>(args: SelectSubset<T, UsersOnGroupFindUniqueArgs<ExtArgs>>): Prisma__UsersOnGroupClient<$Result.GetResult<Prisma.$UsersOnGroupPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one UsersOnGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersOnGroupFindUniqueOrThrowArgs} args - Arguments to find a UsersOnGroup
     * @example
     * // Get one UsersOnGroup
     * const usersOnGroup = await prisma.usersOnGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersOnGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersOnGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersOnGroupClient<$Result.GetResult<Prisma.$UsersOnGroupPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first UsersOnGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersOnGroupFindFirstArgs} args - Arguments to find a UsersOnGroup
     * @example
     * // Get one UsersOnGroup
     * const usersOnGroup = await prisma.usersOnGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersOnGroupFindFirstArgs>(args?: SelectSubset<T, UsersOnGroupFindFirstArgs<ExtArgs>>): Prisma__UsersOnGroupClient<$Result.GetResult<Prisma.$UsersOnGroupPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first UsersOnGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersOnGroupFindFirstOrThrowArgs} args - Arguments to find a UsersOnGroup
     * @example
     * // Get one UsersOnGroup
     * const usersOnGroup = await prisma.usersOnGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersOnGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersOnGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersOnGroupClient<$Result.GetResult<Prisma.$UsersOnGroupPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more UsersOnGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersOnGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsersOnGroups
     * const usersOnGroups = await prisma.usersOnGroup.findMany()
     * 
     * // Get first 10 UsersOnGroups
     * const usersOnGroups = await prisma.usersOnGroup.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const usersOnGroupWithUserIdOnly = await prisma.usersOnGroup.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UsersOnGroupFindManyArgs>(args?: SelectSubset<T, UsersOnGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersOnGroupPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a UsersOnGroup.
     * @param {UsersOnGroupCreateArgs} args - Arguments to create a UsersOnGroup.
     * @example
     * // Create one UsersOnGroup
     * const UsersOnGroup = await prisma.usersOnGroup.create({
     *   data: {
     *     // ... data to create a UsersOnGroup
     *   }
     * })
     * 
     */
    create<T extends UsersOnGroupCreateArgs>(args: SelectSubset<T, UsersOnGroupCreateArgs<ExtArgs>>): Prisma__UsersOnGroupClient<$Result.GetResult<Prisma.$UsersOnGroupPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many UsersOnGroups.
     * @param {UsersOnGroupCreateManyArgs} args - Arguments to create many UsersOnGroups.
     * @example
     * // Create many UsersOnGroups
     * const usersOnGroup = await prisma.usersOnGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersOnGroupCreateManyArgs>(args?: SelectSubset<T, UsersOnGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UsersOnGroups and returns the data saved in the database.
     * @param {UsersOnGroupCreateManyAndReturnArgs} args - Arguments to create many UsersOnGroups.
     * @example
     * // Create many UsersOnGroups
     * const usersOnGroup = await prisma.usersOnGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UsersOnGroups and only return the `userId`
     * const usersOnGroupWithUserIdOnly = await prisma.usersOnGroup.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersOnGroupCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersOnGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersOnGroupPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a UsersOnGroup.
     * @param {UsersOnGroupDeleteArgs} args - Arguments to delete one UsersOnGroup.
     * @example
     * // Delete one UsersOnGroup
     * const UsersOnGroup = await prisma.usersOnGroup.delete({
     *   where: {
     *     // ... filter to delete one UsersOnGroup
     *   }
     * })
     * 
     */
    delete<T extends UsersOnGroupDeleteArgs>(args: SelectSubset<T, UsersOnGroupDeleteArgs<ExtArgs>>): Prisma__UsersOnGroupClient<$Result.GetResult<Prisma.$UsersOnGroupPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one UsersOnGroup.
     * @param {UsersOnGroupUpdateArgs} args - Arguments to update one UsersOnGroup.
     * @example
     * // Update one UsersOnGroup
     * const usersOnGroup = await prisma.usersOnGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersOnGroupUpdateArgs>(args: SelectSubset<T, UsersOnGroupUpdateArgs<ExtArgs>>): Prisma__UsersOnGroupClient<$Result.GetResult<Prisma.$UsersOnGroupPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more UsersOnGroups.
     * @param {UsersOnGroupDeleteManyArgs} args - Arguments to filter UsersOnGroups to delete.
     * @example
     * // Delete a few UsersOnGroups
     * const { count } = await prisma.usersOnGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersOnGroupDeleteManyArgs>(args?: SelectSubset<T, UsersOnGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsersOnGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersOnGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsersOnGroups
     * const usersOnGroup = await prisma.usersOnGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersOnGroupUpdateManyArgs>(args: SelectSubset<T, UsersOnGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsersOnGroups and returns the data updated in the database.
     * @param {UsersOnGroupUpdateManyAndReturnArgs} args - Arguments to update many UsersOnGroups.
     * @example
     * // Update many UsersOnGroups
     * const usersOnGroup = await prisma.usersOnGroup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UsersOnGroups and only return the `userId`
     * const usersOnGroupWithUserIdOnly = await prisma.usersOnGroup.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersOnGroupUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersOnGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersOnGroupPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one UsersOnGroup.
     * @param {UsersOnGroupUpsertArgs} args - Arguments to update or create a UsersOnGroup.
     * @example
     * // Update or create a UsersOnGroup
     * const usersOnGroup = await prisma.usersOnGroup.upsert({
     *   create: {
     *     // ... data to create a UsersOnGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsersOnGroup we want to update
     *   }
     * })
     */
    upsert<T extends UsersOnGroupUpsertArgs>(args: SelectSubset<T, UsersOnGroupUpsertArgs<ExtArgs>>): Prisma__UsersOnGroupClient<$Result.GetResult<Prisma.$UsersOnGroupPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of UsersOnGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersOnGroupCountArgs} args - Arguments to filter UsersOnGroups to count.
     * @example
     * // Count the number of UsersOnGroups
     * const count = await prisma.usersOnGroup.count({
     *   where: {
     *     // ... the filter for the UsersOnGroups we want to count
     *   }
     * })
    **/
    count<T extends UsersOnGroupCountArgs>(
      args?: Subset<T, UsersOnGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersOnGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsersOnGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersOnGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersOnGroupAggregateArgs>(args: Subset<T, UsersOnGroupAggregateArgs>): Prisma.PrismaPromise<GetUsersOnGroupAggregateType<T>>

    /**
     * Group by UsersOnGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersOnGroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersOnGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersOnGroupGroupByArgs['orderBy'] }
        : { orderBy?: UsersOnGroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersOnGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersOnGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UsersOnGroup model
   */
  readonly fields: UsersOnGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UsersOnGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersOnGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    Group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UsersOnGroup model
   */ 
  interface UsersOnGroupFieldRefs {
    readonly userId: FieldRef<"UsersOnGroup", 'Int'>
    readonly groupId: FieldRef<"UsersOnGroup", 'Int'>
    readonly createdAt: FieldRef<"UsersOnGroup", 'DateTime'>
    readonly deletedAt: FieldRef<"UsersOnGroup", 'DateTime'>
    readonly updatedAt: FieldRef<"UsersOnGroup", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UsersOnGroup findUnique
   */
  export type UsersOnGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersOnGroup
     */
    select?: UsersOnGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersOnGroup
     */
    omit?: UsersOnGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersOnGroupInclude<ExtArgs> | null
    /**
     * Filter, which UsersOnGroup to fetch.
     */
    where: UsersOnGroupWhereUniqueInput
  }

  /**
   * UsersOnGroup findUniqueOrThrow
   */
  export type UsersOnGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersOnGroup
     */
    select?: UsersOnGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersOnGroup
     */
    omit?: UsersOnGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersOnGroupInclude<ExtArgs> | null
    /**
     * Filter, which UsersOnGroup to fetch.
     */
    where: UsersOnGroupWhereUniqueInput
  }

  /**
   * UsersOnGroup findFirst
   */
  export type UsersOnGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersOnGroup
     */
    select?: UsersOnGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersOnGroup
     */
    omit?: UsersOnGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersOnGroupInclude<ExtArgs> | null
    /**
     * Filter, which UsersOnGroup to fetch.
     */
    where?: UsersOnGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersOnGroups to fetch.
     */
    orderBy?: UsersOnGroupOrderByWithRelationInput | UsersOnGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsersOnGroups.
     */
    cursor?: UsersOnGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersOnGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersOnGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsersOnGroups.
     */
    distinct?: UsersOnGroupScalarFieldEnum | UsersOnGroupScalarFieldEnum[]
  }

  /**
   * UsersOnGroup findFirstOrThrow
   */
  export type UsersOnGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersOnGroup
     */
    select?: UsersOnGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersOnGroup
     */
    omit?: UsersOnGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersOnGroupInclude<ExtArgs> | null
    /**
     * Filter, which UsersOnGroup to fetch.
     */
    where?: UsersOnGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersOnGroups to fetch.
     */
    orderBy?: UsersOnGroupOrderByWithRelationInput | UsersOnGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsersOnGroups.
     */
    cursor?: UsersOnGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersOnGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersOnGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsersOnGroups.
     */
    distinct?: UsersOnGroupScalarFieldEnum | UsersOnGroupScalarFieldEnum[]
  }

  /**
   * UsersOnGroup findMany
   */
  export type UsersOnGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersOnGroup
     */
    select?: UsersOnGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersOnGroup
     */
    omit?: UsersOnGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersOnGroupInclude<ExtArgs> | null
    /**
     * Filter, which UsersOnGroups to fetch.
     */
    where?: UsersOnGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersOnGroups to fetch.
     */
    orderBy?: UsersOnGroupOrderByWithRelationInput | UsersOnGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UsersOnGroups.
     */
    cursor?: UsersOnGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersOnGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersOnGroups.
     */
    skip?: number
    distinct?: UsersOnGroupScalarFieldEnum | UsersOnGroupScalarFieldEnum[]
  }

  /**
   * UsersOnGroup create
   */
  export type UsersOnGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersOnGroup
     */
    select?: UsersOnGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersOnGroup
     */
    omit?: UsersOnGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersOnGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a UsersOnGroup.
     */
    data: XOR<UsersOnGroupCreateInput, UsersOnGroupUncheckedCreateInput>
  }

  /**
   * UsersOnGroup createMany
   */
  export type UsersOnGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UsersOnGroups.
     */
    data: UsersOnGroupCreateManyInput | UsersOnGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UsersOnGroup createManyAndReturn
   */
  export type UsersOnGroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersOnGroup
     */
    select?: UsersOnGroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsersOnGroup
     */
    omit?: UsersOnGroupOmit<ExtArgs> | null
    /**
     * The data used to create many UsersOnGroups.
     */
    data: UsersOnGroupCreateManyInput | UsersOnGroupCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersOnGroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsersOnGroup update
   */
  export type UsersOnGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersOnGroup
     */
    select?: UsersOnGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersOnGroup
     */
    omit?: UsersOnGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersOnGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a UsersOnGroup.
     */
    data: XOR<UsersOnGroupUpdateInput, UsersOnGroupUncheckedUpdateInput>
    /**
     * Choose, which UsersOnGroup to update.
     */
    where: UsersOnGroupWhereUniqueInput
  }

  /**
   * UsersOnGroup updateMany
   */
  export type UsersOnGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UsersOnGroups.
     */
    data: XOR<UsersOnGroupUpdateManyMutationInput, UsersOnGroupUncheckedUpdateManyInput>
    /**
     * Filter which UsersOnGroups to update
     */
    where?: UsersOnGroupWhereInput
    /**
     * Limit how many UsersOnGroups to update.
     */
    limit?: number
  }

  /**
   * UsersOnGroup updateManyAndReturn
   */
  export type UsersOnGroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersOnGroup
     */
    select?: UsersOnGroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsersOnGroup
     */
    omit?: UsersOnGroupOmit<ExtArgs> | null
    /**
     * The data used to update UsersOnGroups.
     */
    data: XOR<UsersOnGroupUpdateManyMutationInput, UsersOnGroupUncheckedUpdateManyInput>
    /**
     * Filter which UsersOnGroups to update
     */
    where?: UsersOnGroupWhereInput
    /**
     * Limit how many UsersOnGroups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersOnGroupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsersOnGroup upsert
   */
  export type UsersOnGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersOnGroup
     */
    select?: UsersOnGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersOnGroup
     */
    omit?: UsersOnGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersOnGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the UsersOnGroup to update in case it exists.
     */
    where: UsersOnGroupWhereUniqueInput
    /**
     * In case the UsersOnGroup found by the `where` argument doesn't exist, create a new UsersOnGroup with this data.
     */
    create: XOR<UsersOnGroupCreateInput, UsersOnGroupUncheckedCreateInput>
    /**
     * In case the UsersOnGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersOnGroupUpdateInput, UsersOnGroupUncheckedUpdateInput>
  }

  /**
   * UsersOnGroup delete
   */
  export type UsersOnGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersOnGroup
     */
    select?: UsersOnGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersOnGroup
     */
    omit?: UsersOnGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersOnGroupInclude<ExtArgs> | null
    /**
     * Filter which UsersOnGroup to delete.
     */
    where: UsersOnGroupWhereUniqueInput
  }

  /**
   * UsersOnGroup deleteMany
   */
  export type UsersOnGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsersOnGroups to delete
     */
    where?: UsersOnGroupWhereInput
    /**
     * Limit how many UsersOnGroups to delete.
     */
    limit?: number
  }

  /**
   * UsersOnGroup without action
   */
  export type UsersOnGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersOnGroup
     */
    select?: UsersOnGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersOnGroup
     */
    omit?: UsersOnGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersOnGroupInclude<ExtArgs> | null
  }


  /**
   * Model Priority
   */

  export type AggregatePriority = {
    _count: PriorityCountAggregateOutputType | null
    _avg: PriorityAvgAggregateOutputType | null
    _sum: PrioritySumAggregateOutputType | null
    _min: PriorityMinAggregateOutputType | null
    _max: PriorityMaxAggregateOutputType | null
  }

  export type PriorityAvgAggregateOutputType = {
    id: number | null
  }

  export type PrioritySumAggregateOutputType = {
    id: number | null
  }

  export type PriorityMinAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
  }

  export type PriorityMaxAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
  }

  export type PriorityCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    _all: number
  }


  export type PriorityAvgAggregateInputType = {
    id?: true
  }

  export type PrioritySumAggregateInputType = {
    id?: true
  }

  export type PriorityMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
  }

  export type PriorityMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
  }

  export type PriorityCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    _all?: true
  }

  export type PriorityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Priority to aggregate.
     */
    where?: PriorityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Priorities to fetch.
     */
    orderBy?: PriorityOrderByWithRelationInput | PriorityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PriorityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Priorities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Priorities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Priorities
    **/
    _count?: true | PriorityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PriorityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrioritySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PriorityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PriorityMaxAggregateInputType
  }

  export type GetPriorityAggregateType<T extends PriorityAggregateArgs> = {
        [P in keyof T & keyof AggregatePriority]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePriority[P]>
      : GetScalarType<T[P], AggregatePriority[P]>
  }




  export type PriorityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriorityWhereInput
    orderBy?: PriorityOrderByWithAggregationInput | PriorityOrderByWithAggregationInput[]
    by: PriorityScalarFieldEnum[] | PriorityScalarFieldEnum
    having?: PriorityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PriorityCountAggregateInputType | true
    _avg?: PriorityAvgAggregateInputType
    _sum?: PrioritySumAggregateInputType
    _min?: PriorityMinAggregateInputType
    _max?: PriorityMaxAggregateInputType
  }

  export type PriorityGroupByOutputType = {
    id: number
    name: string
    created_at: Date
    _count: PriorityCountAggregateOutputType | null
    _avg: PriorityAvgAggregateOutputType | null
    _sum: PrioritySumAggregateOutputType | null
    _min: PriorityMinAggregateOutputType | null
    _max: PriorityMaxAggregateOutputType | null
  }

  type GetPriorityGroupByPayload<T extends PriorityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PriorityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PriorityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PriorityGroupByOutputType[P]>
            : GetScalarType<T[P], PriorityGroupByOutputType[P]>
        }
      >
    >


  export type PrioritySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    Ticket?: boolean | Priority$TicketArgs<ExtArgs>
    _count?: boolean | PriorityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["priority"]>

  export type PrioritySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["priority"]>

  export type PrioritySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["priority"]>

  export type PrioritySelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
  }

  export type PriorityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "created_at", ExtArgs["result"]["priority"]>
  export type PriorityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ticket?: boolean | Priority$TicketArgs<ExtArgs>
    _count?: boolean | PriorityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PriorityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PriorityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PriorityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Priority"
    objects: {
      Ticket: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      created_at: Date
    }, ExtArgs["result"]["priority"]>
    composites: {}
  }

  type PriorityGetPayload<S extends boolean | null | undefined | PriorityDefaultArgs> = $Result.GetResult<Prisma.$PriorityPayload, S>

  type PriorityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PriorityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PriorityCountAggregateInputType | true
    }

  export interface PriorityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Priority'], meta: { name: 'Priority' } }
    /**
     * Find zero or one Priority that matches the filter.
     * @param {PriorityFindUniqueArgs} args - Arguments to find a Priority
     * @example
     * // Get one Priority
     * const priority = await prisma.priority.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PriorityFindUniqueArgs>(args: SelectSubset<T, PriorityFindUniqueArgs<ExtArgs>>): Prisma__PriorityClient<$Result.GetResult<Prisma.$PriorityPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Priority that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PriorityFindUniqueOrThrowArgs} args - Arguments to find a Priority
     * @example
     * // Get one Priority
     * const priority = await prisma.priority.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PriorityFindUniqueOrThrowArgs>(args: SelectSubset<T, PriorityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PriorityClient<$Result.GetResult<Prisma.$PriorityPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Priority that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriorityFindFirstArgs} args - Arguments to find a Priority
     * @example
     * // Get one Priority
     * const priority = await prisma.priority.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PriorityFindFirstArgs>(args?: SelectSubset<T, PriorityFindFirstArgs<ExtArgs>>): Prisma__PriorityClient<$Result.GetResult<Prisma.$PriorityPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Priority that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriorityFindFirstOrThrowArgs} args - Arguments to find a Priority
     * @example
     * // Get one Priority
     * const priority = await prisma.priority.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PriorityFindFirstOrThrowArgs>(args?: SelectSubset<T, PriorityFindFirstOrThrowArgs<ExtArgs>>): Prisma__PriorityClient<$Result.GetResult<Prisma.$PriorityPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Priorities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriorityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Priorities
     * const priorities = await prisma.priority.findMany()
     * 
     * // Get first 10 Priorities
     * const priorities = await prisma.priority.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const priorityWithIdOnly = await prisma.priority.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PriorityFindManyArgs>(args?: SelectSubset<T, PriorityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriorityPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Priority.
     * @param {PriorityCreateArgs} args - Arguments to create a Priority.
     * @example
     * // Create one Priority
     * const Priority = await prisma.priority.create({
     *   data: {
     *     // ... data to create a Priority
     *   }
     * })
     * 
     */
    create<T extends PriorityCreateArgs>(args: SelectSubset<T, PriorityCreateArgs<ExtArgs>>): Prisma__PriorityClient<$Result.GetResult<Prisma.$PriorityPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Priorities.
     * @param {PriorityCreateManyArgs} args - Arguments to create many Priorities.
     * @example
     * // Create many Priorities
     * const priority = await prisma.priority.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PriorityCreateManyArgs>(args?: SelectSubset<T, PriorityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Priorities and returns the data saved in the database.
     * @param {PriorityCreateManyAndReturnArgs} args - Arguments to create many Priorities.
     * @example
     * // Create many Priorities
     * const priority = await prisma.priority.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Priorities and only return the `id`
     * const priorityWithIdOnly = await prisma.priority.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PriorityCreateManyAndReturnArgs>(args?: SelectSubset<T, PriorityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriorityPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Priority.
     * @param {PriorityDeleteArgs} args - Arguments to delete one Priority.
     * @example
     * // Delete one Priority
     * const Priority = await prisma.priority.delete({
     *   where: {
     *     // ... filter to delete one Priority
     *   }
     * })
     * 
     */
    delete<T extends PriorityDeleteArgs>(args: SelectSubset<T, PriorityDeleteArgs<ExtArgs>>): Prisma__PriorityClient<$Result.GetResult<Prisma.$PriorityPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Priority.
     * @param {PriorityUpdateArgs} args - Arguments to update one Priority.
     * @example
     * // Update one Priority
     * const priority = await prisma.priority.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PriorityUpdateArgs>(args: SelectSubset<T, PriorityUpdateArgs<ExtArgs>>): Prisma__PriorityClient<$Result.GetResult<Prisma.$PriorityPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Priorities.
     * @param {PriorityDeleteManyArgs} args - Arguments to filter Priorities to delete.
     * @example
     * // Delete a few Priorities
     * const { count } = await prisma.priority.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PriorityDeleteManyArgs>(args?: SelectSubset<T, PriorityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Priorities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriorityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Priorities
     * const priority = await prisma.priority.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PriorityUpdateManyArgs>(args: SelectSubset<T, PriorityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Priorities and returns the data updated in the database.
     * @param {PriorityUpdateManyAndReturnArgs} args - Arguments to update many Priorities.
     * @example
     * // Update many Priorities
     * const priority = await prisma.priority.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Priorities and only return the `id`
     * const priorityWithIdOnly = await prisma.priority.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PriorityUpdateManyAndReturnArgs>(args: SelectSubset<T, PriorityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriorityPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Priority.
     * @param {PriorityUpsertArgs} args - Arguments to update or create a Priority.
     * @example
     * // Update or create a Priority
     * const priority = await prisma.priority.upsert({
     *   create: {
     *     // ... data to create a Priority
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Priority we want to update
     *   }
     * })
     */
    upsert<T extends PriorityUpsertArgs>(args: SelectSubset<T, PriorityUpsertArgs<ExtArgs>>): Prisma__PriorityClient<$Result.GetResult<Prisma.$PriorityPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Priorities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriorityCountArgs} args - Arguments to filter Priorities to count.
     * @example
     * // Count the number of Priorities
     * const count = await prisma.priority.count({
     *   where: {
     *     // ... the filter for the Priorities we want to count
     *   }
     * })
    **/
    count<T extends PriorityCountArgs>(
      args?: Subset<T, PriorityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PriorityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Priority.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriorityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PriorityAggregateArgs>(args: Subset<T, PriorityAggregateArgs>): Prisma.PrismaPromise<GetPriorityAggregateType<T>>

    /**
     * Group by Priority.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriorityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PriorityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PriorityGroupByArgs['orderBy'] }
        : { orderBy?: PriorityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PriorityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPriorityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Priority model
   */
  readonly fields: PriorityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Priority.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PriorityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Ticket<T extends Priority$TicketArgs<ExtArgs> = {}>(args?: Subset<T, Priority$TicketArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Priority model
   */ 
  interface PriorityFieldRefs {
    readonly id: FieldRef<"Priority", 'Int'>
    readonly name: FieldRef<"Priority", 'String'>
    readonly created_at: FieldRef<"Priority", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Priority findUnique
   */
  export type PriorityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Priority
     */
    select?: PrioritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Priority
     */
    omit?: PriorityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriorityInclude<ExtArgs> | null
    /**
     * Filter, which Priority to fetch.
     */
    where: PriorityWhereUniqueInput
  }

  /**
   * Priority findUniqueOrThrow
   */
  export type PriorityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Priority
     */
    select?: PrioritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Priority
     */
    omit?: PriorityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriorityInclude<ExtArgs> | null
    /**
     * Filter, which Priority to fetch.
     */
    where: PriorityWhereUniqueInput
  }

  /**
   * Priority findFirst
   */
  export type PriorityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Priority
     */
    select?: PrioritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Priority
     */
    omit?: PriorityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriorityInclude<ExtArgs> | null
    /**
     * Filter, which Priority to fetch.
     */
    where?: PriorityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Priorities to fetch.
     */
    orderBy?: PriorityOrderByWithRelationInput | PriorityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Priorities.
     */
    cursor?: PriorityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Priorities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Priorities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Priorities.
     */
    distinct?: PriorityScalarFieldEnum | PriorityScalarFieldEnum[]
  }

  /**
   * Priority findFirstOrThrow
   */
  export type PriorityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Priority
     */
    select?: PrioritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Priority
     */
    omit?: PriorityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriorityInclude<ExtArgs> | null
    /**
     * Filter, which Priority to fetch.
     */
    where?: PriorityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Priorities to fetch.
     */
    orderBy?: PriorityOrderByWithRelationInput | PriorityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Priorities.
     */
    cursor?: PriorityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Priorities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Priorities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Priorities.
     */
    distinct?: PriorityScalarFieldEnum | PriorityScalarFieldEnum[]
  }

  /**
   * Priority findMany
   */
  export type PriorityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Priority
     */
    select?: PrioritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Priority
     */
    omit?: PriorityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriorityInclude<ExtArgs> | null
    /**
     * Filter, which Priorities to fetch.
     */
    where?: PriorityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Priorities to fetch.
     */
    orderBy?: PriorityOrderByWithRelationInput | PriorityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Priorities.
     */
    cursor?: PriorityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Priorities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Priorities.
     */
    skip?: number
    distinct?: PriorityScalarFieldEnum | PriorityScalarFieldEnum[]
  }

  /**
   * Priority create
   */
  export type PriorityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Priority
     */
    select?: PrioritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Priority
     */
    omit?: PriorityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriorityInclude<ExtArgs> | null
    /**
     * The data needed to create a Priority.
     */
    data: XOR<PriorityCreateInput, PriorityUncheckedCreateInput>
  }

  /**
   * Priority createMany
   */
  export type PriorityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Priorities.
     */
    data: PriorityCreateManyInput | PriorityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Priority createManyAndReturn
   */
  export type PriorityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Priority
     */
    select?: PrioritySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Priority
     */
    omit?: PriorityOmit<ExtArgs> | null
    /**
     * The data used to create many Priorities.
     */
    data: PriorityCreateManyInput | PriorityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Priority update
   */
  export type PriorityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Priority
     */
    select?: PrioritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Priority
     */
    omit?: PriorityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriorityInclude<ExtArgs> | null
    /**
     * The data needed to update a Priority.
     */
    data: XOR<PriorityUpdateInput, PriorityUncheckedUpdateInput>
    /**
     * Choose, which Priority to update.
     */
    where: PriorityWhereUniqueInput
  }

  /**
   * Priority updateMany
   */
  export type PriorityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Priorities.
     */
    data: XOR<PriorityUpdateManyMutationInput, PriorityUncheckedUpdateManyInput>
    /**
     * Filter which Priorities to update
     */
    where?: PriorityWhereInput
    /**
     * Limit how many Priorities to update.
     */
    limit?: number
  }

  /**
   * Priority updateManyAndReturn
   */
  export type PriorityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Priority
     */
    select?: PrioritySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Priority
     */
    omit?: PriorityOmit<ExtArgs> | null
    /**
     * The data used to update Priorities.
     */
    data: XOR<PriorityUpdateManyMutationInput, PriorityUncheckedUpdateManyInput>
    /**
     * Filter which Priorities to update
     */
    where?: PriorityWhereInput
    /**
     * Limit how many Priorities to update.
     */
    limit?: number
  }

  /**
   * Priority upsert
   */
  export type PriorityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Priority
     */
    select?: PrioritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Priority
     */
    omit?: PriorityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriorityInclude<ExtArgs> | null
    /**
     * The filter to search for the Priority to update in case it exists.
     */
    where: PriorityWhereUniqueInput
    /**
     * In case the Priority found by the `where` argument doesn't exist, create a new Priority with this data.
     */
    create: XOR<PriorityCreateInput, PriorityUncheckedCreateInput>
    /**
     * In case the Priority was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PriorityUpdateInput, PriorityUncheckedUpdateInput>
  }

  /**
   * Priority delete
   */
  export type PriorityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Priority
     */
    select?: PrioritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Priority
     */
    omit?: PriorityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriorityInclude<ExtArgs> | null
    /**
     * Filter which Priority to delete.
     */
    where: PriorityWhereUniqueInput
  }

  /**
   * Priority deleteMany
   */
  export type PriorityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Priorities to delete
     */
    where?: PriorityWhereInput
    /**
     * Limit how many Priorities to delete.
     */
    limit?: number
  }

  /**
   * Priority.Ticket
   */
  export type Priority$TicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Priority without action
   */
  export type PriorityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Priority
     */
    select?: PrioritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Priority
     */
    omit?: PriorityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriorityInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    description: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    Ticket?: boolean | Category$TicketArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ticket?: boolean | Category$TicketArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      Ticket: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Ticket<T extends Category$TicketArgs<ExtArgs> = {}>(args?: Subset<T, Category$TicketArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
    readonly deletedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.Ticket
   */
  export type Category$TicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    logo: 'logo',
    description: 'description',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt',
    updatedAt: 'updatedAt'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const MembershipScalarFieldEnum: {
    organizationId: 'organizationId',
    userId: 'userId',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt',
    updatedAt: 'updatedAt'
  };

  export type MembershipScalarFieldEnum = (typeof MembershipScalarFieldEnum)[keyof typeof MembershipScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    first_name: 'first_name',
    last_name: 'last_name',
    photo: 'photo',
    phone: 'phone',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    id: 'id',
    subject: 'subject',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    organizationId: 'organizationId',
    createdById: 'createdById',
    groupId: 'groupId',
    priorityId: 'priorityId',
    statusId: 'statusId',
    categoryId: 'categoryId'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const TicketNotesScalarFieldEnum: {
    id: 'id',
    content: 'content',
    ticketId: 'ticketId',
    creatorId: 'creatorId',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt',
    updatedAt: 'updatedAt',
    NoteType: 'NoteType'
  };

  export type TicketNotesScalarFieldEnum = (typeof TicketNotesScalarFieldEnum)[keyof typeof TicketNotesScalarFieldEnum]


  export const TagsOnTicketScalarFieldEnum: {
    ticketId: 'ticketId',
    tagId: 'tagId',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt',
    updatedAt: 'updatedAt'
  };

  export type TagsOnTicketScalarFieldEnum = (typeof TagsOnTicketScalarFieldEnum)[keyof typeof TagsOnTicketScalarFieldEnum]


  export const TicketAssignmentsScalarFieldEnum: {
    ticketId: 'ticketId',
    assigneeId: 'assigneeId',
    assignerId: 'assignerId',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt',
    updatedAt: 'updatedAt'
  };

  export type TicketAssignmentsScalarFieldEnum = (typeof TicketAssignmentsScalarFieldEnum)[keyof typeof TicketAssignmentsScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt',
    updatedAt: 'updatedAt'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const StatusScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt',
    updatedAt: 'updatedAt'
  };

  export type StatusScalarFieldEnum = (typeof StatusScalarFieldEnum)[keyof typeof StatusScalarFieldEnum]


  export const GroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


  export const UsersOnGroupScalarFieldEnum: {
    userId: 'userId',
    groupId: 'groupId',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt',
    updatedAt: 'updatedAt'
  };

  export type UsersOnGroupScalarFieldEnum = (typeof UsersOnGroupScalarFieldEnum)[keyof typeof UsersOnGroupScalarFieldEnum]


  export const PriorityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at'
  };

  export type PriorityScalarFieldEnum = (typeof PriorityScalarFieldEnum)[keyof typeof PriorityScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'NoteType'
   */
  export type EnumNoteTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NoteType'>
    


  /**
   * Reference to a field of type 'NoteType[]'
   */
  export type ListEnumNoteTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NoteType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    id?: IntFilter<"Organization"> | number
    name?: StringFilter<"Organization"> | string
    logo?: StringNullableFilter<"Organization"> | string | null
    description?: StringNullableFilter<"Organization"> | string | null
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Organization"> | Date | string | null
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    Ticket?: TicketListRelationFilter
    Membership?: MembershipListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    Ticket?: TicketOrderByRelationAggregateInput
    Membership?: MembershipOrderByRelationAggregateInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    logo?: StringNullableFilter<"Organization"> | string | null
    description?: StringNullableFilter<"Organization"> | string | null
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Organization"> | Date | string | null
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    Ticket?: TicketListRelationFilter
    Membership?: MembershipListRelationFilter
  }, "id" | "name">

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _avg?: OrganizationAvgOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
    _sum?: OrganizationSumOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Organization"> | number
    name?: StringWithAggregatesFilter<"Organization"> | string
    logo?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    description?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Organization"> | Date | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
  }

  export type MembershipWhereInput = {
    AND?: MembershipWhereInput | MembershipWhereInput[]
    OR?: MembershipWhereInput[]
    NOT?: MembershipWhereInput | MembershipWhereInput[]
    organizationId?: IntFilter<"Membership"> | number
    userId?: IntFilter<"Membership"> | number
    createdAt?: DateTimeFilter<"Membership"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Membership"> | Date | string | null
    updatedAt?: DateTimeFilter<"Membership"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MembershipOrderByWithRelationInput = {
    organizationId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type MembershipWhereUniqueInput = Prisma.AtLeast<{
    organizationId_userId?: MembershipOrganizationIdUserIdCompoundUniqueInput
    AND?: MembershipWhereInput | MembershipWhereInput[]
    OR?: MembershipWhereInput[]
    NOT?: MembershipWhereInput | MembershipWhereInput[]
    organizationId?: IntFilter<"Membership"> | number
    userId?: IntFilter<"Membership"> | number
    createdAt?: DateTimeFilter<"Membership"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Membership"> | Date | string | null
    updatedAt?: DateTimeFilter<"Membership"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "organizationId_userId">

  export type MembershipOrderByWithAggregationInput = {
    organizationId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: MembershipCountOrderByAggregateInput
    _avg?: MembershipAvgOrderByAggregateInput
    _max?: MembershipMaxOrderByAggregateInput
    _min?: MembershipMinOrderByAggregateInput
    _sum?: MembershipSumOrderByAggregateInput
  }

  export type MembershipScalarWhereWithAggregatesInput = {
    AND?: MembershipScalarWhereWithAggregatesInput | MembershipScalarWhereWithAggregatesInput[]
    OR?: MembershipScalarWhereWithAggregatesInput[]
    NOT?: MembershipScalarWhereWithAggregatesInput | MembershipScalarWhereWithAggregatesInput[]
    organizationId?: IntWithAggregatesFilter<"Membership"> | number
    userId?: IntWithAggregatesFilter<"Membership"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Membership"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Membership"> | Date | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"Membership"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    updatedAt?: DateTimeFilter<"User"> | Date | string
    TicketNotes?: TicketNotesListRelationFilter
    createdTickets?: TicketListRelationFilter
    organizations?: MembershipListRelationFilter
    assignedTickets?: TicketAssignmentsListRelationFilter
    assignedByTickets?: TicketAssignmentsListRelationFilter
    UsersOnGroup?: UsersOnGroupListRelationFilter
    Profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    TicketNotes?: TicketNotesOrderByRelationAggregateInput
    createdTickets?: TicketOrderByRelationAggregateInput
    organizations?: MembershipOrderByRelationAggregateInput
    assignedTickets?: TicketAssignmentsOrderByRelationAggregateInput
    assignedByTickets?: TicketAssignmentsOrderByRelationAggregateInput
    UsersOnGroup?: UsersOnGroupOrderByRelationAggregateInput
    Profile?: ProfileOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    updatedAt?: DateTimeFilter<"User"> | Date | string
    TicketNotes?: TicketNotesListRelationFilter
    createdTickets?: TicketListRelationFilter
    organizations?: MembershipListRelationFilter
    assignedTickets?: TicketAssignmentsListRelationFilter
    assignedByTickets?: TicketAssignmentsListRelationFilter
    UsersOnGroup?: UsersOnGroupListRelationFilter
    Profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: IntFilter<"Profile"> | number
    first_name?: StringFilter<"Profile"> | string
    last_name?: StringFilter<"Profile"> | string
    photo?: StringNullableFilter<"Profile"> | string | null
    phone?: StringNullableFilter<"Profile"> | string | null
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Profile"> | Date | string | null
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    userId?: IntFilter<"Profile"> | number
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    photo?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    first_name?: StringFilter<"Profile"> | string
    last_name?: StringFilter<"Profile"> | string
    photo?: StringNullableFilter<"Profile"> | string | null
    phone?: StringNullableFilter<"Profile"> | string | null
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Profile"> | Date | string | null
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    photo?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _avg?: ProfileAvgOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
    _sum?: ProfileSumOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Profile"> | number
    first_name?: StringWithAggregatesFilter<"Profile"> | string
    last_name?: StringWithAggregatesFilter<"Profile"> | string
    photo?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Profile"> | Date | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    userId?: IntWithAggregatesFilter<"Profile"> | number
  }

  export type TicketWhereInput = {
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    id?: IntFilter<"Ticket"> | number
    subject?: StringFilter<"Ticket"> | string
    content?: StringNullableFilter<"Ticket"> | string | null
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    organizationId?: IntFilter<"Ticket"> | number
    createdById?: IntFilter<"Ticket"> | number
    groupId?: IntNullableFilter<"Ticket"> | number | null
    priorityId?: IntFilter<"Ticket"> | number
    statusId?: IntFilter<"Ticket"> | number
    categoryId?: IntNullableFilter<"Ticket"> | number | null
    notes?: TicketNotesListRelationFilter
    Organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    CreatedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    Group?: XOR<GroupNullableScalarRelationFilter, GroupWhereInput> | null
    Priority?: XOR<PriorityScalarRelationFilter, PriorityWhereInput>
    Status?: XOR<StatusScalarRelationFilter, StatusWhereInput>
    Category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    Assignees?: TicketAssignmentsListRelationFilter
    Tags?: TagsOnTicketListRelationFilter
  }

  export type TicketOrderByWithRelationInput = {
    id?: SortOrder
    subject?: SortOrder
    content?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    organizationId?: SortOrder
    createdById?: SortOrder
    groupId?: SortOrderInput | SortOrder
    priorityId?: SortOrder
    statusId?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    notes?: TicketNotesOrderByRelationAggregateInput
    Organization?: OrganizationOrderByWithRelationInput
    CreatedBy?: UserOrderByWithRelationInput
    Group?: GroupOrderByWithRelationInput
    Priority?: PriorityOrderByWithRelationInput
    Status?: StatusOrderByWithRelationInput
    Category?: CategoryOrderByWithRelationInput
    Assignees?: TicketAssignmentsOrderByRelationAggregateInput
    Tags?: TagsOnTicketOrderByRelationAggregateInput
  }

  export type TicketWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    subject?: StringFilter<"Ticket"> | string
    content?: StringNullableFilter<"Ticket"> | string | null
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    organizationId?: IntFilter<"Ticket"> | number
    createdById?: IntFilter<"Ticket"> | number
    groupId?: IntNullableFilter<"Ticket"> | number | null
    priorityId?: IntFilter<"Ticket"> | number
    statusId?: IntFilter<"Ticket"> | number
    categoryId?: IntNullableFilter<"Ticket"> | number | null
    notes?: TicketNotesListRelationFilter
    Organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    CreatedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    Group?: XOR<GroupNullableScalarRelationFilter, GroupWhereInput> | null
    Priority?: XOR<PriorityScalarRelationFilter, PriorityWhereInput>
    Status?: XOR<StatusScalarRelationFilter, StatusWhereInput>
    Category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    Assignees?: TicketAssignmentsListRelationFilter
    Tags?: TagsOnTicketListRelationFilter
  }, "id">

  export type TicketOrderByWithAggregationInput = {
    id?: SortOrder
    subject?: SortOrder
    content?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    organizationId?: SortOrder
    createdById?: SortOrder
    groupId?: SortOrderInput | SortOrder
    priorityId?: SortOrder
    statusId?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    _count?: TicketCountOrderByAggregateInput
    _avg?: TicketAvgOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
    _sum?: TicketSumOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    OR?: TicketScalarWhereWithAggregatesInput[]
    NOT?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ticket"> | number
    subject?: StringWithAggregatesFilter<"Ticket"> | string
    content?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Ticket"> | Date | string | null
    organizationId?: IntWithAggregatesFilter<"Ticket"> | number
    createdById?: IntWithAggregatesFilter<"Ticket"> | number
    groupId?: IntNullableWithAggregatesFilter<"Ticket"> | number | null
    priorityId?: IntWithAggregatesFilter<"Ticket"> | number
    statusId?: IntWithAggregatesFilter<"Ticket"> | number
    categoryId?: IntNullableWithAggregatesFilter<"Ticket"> | number | null
  }

  export type TicketNotesWhereInput = {
    AND?: TicketNotesWhereInput | TicketNotesWhereInput[]
    OR?: TicketNotesWhereInput[]
    NOT?: TicketNotesWhereInput | TicketNotesWhereInput[]
    id?: IntFilter<"TicketNotes"> | number
    content?: StringFilter<"TicketNotes"> | string
    ticketId?: IntFilter<"TicketNotes"> | number
    creatorId?: IntFilter<"TicketNotes"> | number
    createdAt?: DateTimeFilter<"TicketNotes"> | Date | string
    deletedAt?: DateTimeNullableFilter<"TicketNotes"> | Date | string | null
    updatedAt?: DateTimeFilter<"TicketNotes"> | Date | string
    NoteType?: EnumNoteTypeFilter<"TicketNotes"> | $Enums.NoteType
    Creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    Ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
  }

  export type TicketNotesOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    ticketId?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    NoteType?: SortOrder
    Creator?: UserOrderByWithRelationInput
    Ticket?: TicketOrderByWithRelationInput
  }

  export type TicketNotesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    content?: string
    AND?: TicketNotesWhereInput | TicketNotesWhereInput[]
    OR?: TicketNotesWhereInput[]
    NOT?: TicketNotesWhereInput | TicketNotesWhereInput[]
    ticketId?: IntFilter<"TicketNotes"> | number
    creatorId?: IntFilter<"TicketNotes"> | number
    createdAt?: DateTimeFilter<"TicketNotes"> | Date | string
    deletedAt?: DateTimeNullableFilter<"TicketNotes"> | Date | string | null
    updatedAt?: DateTimeFilter<"TicketNotes"> | Date | string
    NoteType?: EnumNoteTypeFilter<"TicketNotes"> | $Enums.NoteType
    Creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    Ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
  }, "id" | "content">

  export type TicketNotesOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    ticketId?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    NoteType?: SortOrder
    _count?: TicketNotesCountOrderByAggregateInput
    _avg?: TicketNotesAvgOrderByAggregateInput
    _max?: TicketNotesMaxOrderByAggregateInput
    _min?: TicketNotesMinOrderByAggregateInput
    _sum?: TicketNotesSumOrderByAggregateInput
  }

  export type TicketNotesScalarWhereWithAggregatesInput = {
    AND?: TicketNotesScalarWhereWithAggregatesInput | TicketNotesScalarWhereWithAggregatesInput[]
    OR?: TicketNotesScalarWhereWithAggregatesInput[]
    NOT?: TicketNotesScalarWhereWithAggregatesInput | TicketNotesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TicketNotes"> | number
    content?: StringWithAggregatesFilter<"TicketNotes"> | string
    ticketId?: IntWithAggregatesFilter<"TicketNotes"> | number
    creatorId?: IntWithAggregatesFilter<"TicketNotes"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TicketNotes"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"TicketNotes"> | Date | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"TicketNotes"> | Date | string
    NoteType?: EnumNoteTypeWithAggregatesFilter<"TicketNotes"> | $Enums.NoteType
  }

  export type TagsOnTicketWhereInput = {
    AND?: TagsOnTicketWhereInput | TagsOnTicketWhereInput[]
    OR?: TagsOnTicketWhereInput[]
    NOT?: TagsOnTicketWhereInput | TagsOnTicketWhereInput[]
    ticketId?: IntFilter<"TagsOnTicket"> | number
    tagId?: IntFilter<"TagsOnTicket"> | number
    createdAt?: DateTimeFilter<"TagsOnTicket"> | Date | string
    deletedAt?: DateTimeNullableFilter<"TagsOnTicket"> | Date | string | null
    updatedAt?: DateTimeFilter<"TagsOnTicket"> | Date | string
    Ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
    Tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }

  export type TagsOnTicketOrderByWithRelationInput = {
    ticketId?: SortOrder
    tagId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    Ticket?: TicketOrderByWithRelationInput
    Tag?: TagOrderByWithRelationInput
  }

  export type TagsOnTicketWhereUniqueInput = Prisma.AtLeast<{
    ticketId_tagId?: TagsOnTicketTicketIdTagIdCompoundUniqueInput
    AND?: TagsOnTicketWhereInput | TagsOnTicketWhereInput[]
    OR?: TagsOnTicketWhereInput[]
    NOT?: TagsOnTicketWhereInput | TagsOnTicketWhereInput[]
    ticketId?: IntFilter<"TagsOnTicket"> | number
    tagId?: IntFilter<"TagsOnTicket"> | number
    createdAt?: DateTimeFilter<"TagsOnTicket"> | Date | string
    deletedAt?: DateTimeNullableFilter<"TagsOnTicket"> | Date | string | null
    updatedAt?: DateTimeFilter<"TagsOnTicket"> | Date | string
    Ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
    Tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }, "ticketId_tagId">

  export type TagsOnTicketOrderByWithAggregationInput = {
    ticketId?: SortOrder
    tagId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: TagsOnTicketCountOrderByAggregateInput
    _avg?: TagsOnTicketAvgOrderByAggregateInput
    _max?: TagsOnTicketMaxOrderByAggregateInput
    _min?: TagsOnTicketMinOrderByAggregateInput
    _sum?: TagsOnTicketSumOrderByAggregateInput
  }

  export type TagsOnTicketScalarWhereWithAggregatesInput = {
    AND?: TagsOnTicketScalarWhereWithAggregatesInput | TagsOnTicketScalarWhereWithAggregatesInput[]
    OR?: TagsOnTicketScalarWhereWithAggregatesInput[]
    NOT?: TagsOnTicketScalarWhereWithAggregatesInput | TagsOnTicketScalarWhereWithAggregatesInput[]
    ticketId?: IntWithAggregatesFilter<"TagsOnTicket"> | number
    tagId?: IntWithAggregatesFilter<"TagsOnTicket"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TagsOnTicket"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"TagsOnTicket"> | Date | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"TagsOnTicket"> | Date | string
  }

  export type TicketAssignmentsWhereInput = {
    AND?: TicketAssignmentsWhereInput | TicketAssignmentsWhereInput[]
    OR?: TicketAssignmentsWhereInput[]
    NOT?: TicketAssignmentsWhereInput | TicketAssignmentsWhereInput[]
    ticketId?: IntFilter<"TicketAssignments"> | number
    assigneeId?: IntFilter<"TicketAssignments"> | number
    assignerId?: IntFilter<"TicketAssignments"> | number
    createdAt?: DateTimeFilter<"TicketAssignments"> | Date | string
    deletedAt?: DateTimeNullableFilter<"TicketAssignments"> | Date | string | null
    updatedAt?: DateTimeFilter<"TicketAssignments"> | Date | string
    Ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
    Assignee?: XOR<UserScalarRelationFilter, UserWhereInput>
    AssignedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TicketAssignmentsOrderByWithRelationInput = {
    ticketId?: SortOrder
    assigneeId?: SortOrder
    assignerId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    Ticket?: TicketOrderByWithRelationInput
    Assignee?: UserOrderByWithRelationInput
    AssignedBy?: UserOrderByWithRelationInput
  }

  export type TicketAssignmentsWhereUniqueInput = Prisma.AtLeast<{
    ticketId_assigneeId?: TicketAssignmentsTicketIdAssigneeIdCompoundUniqueInput
    AND?: TicketAssignmentsWhereInput | TicketAssignmentsWhereInput[]
    OR?: TicketAssignmentsWhereInput[]
    NOT?: TicketAssignmentsWhereInput | TicketAssignmentsWhereInput[]
    ticketId?: IntFilter<"TicketAssignments"> | number
    assigneeId?: IntFilter<"TicketAssignments"> | number
    assignerId?: IntFilter<"TicketAssignments"> | number
    createdAt?: DateTimeFilter<"TicketAssignments"> | Date | string
    deletedAt?: DateTimeNullableFilter<"TicketAssignments"> | Date | string | null
    updatedAt?: DateTimeFilter<"TicketAssignments"> | Date | string
    Ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
    Assignee?: XOR<UserScalarRelationFilter, UserWhereInput>
    AssignedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "ticketId_assigneeId">

  export type TicketAssignmentsOrderByWithAggregationInput = {
    ticketId?: SortOrder
    assigneeId?: SortOrder
    assignerId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: TicketAssignmentsCountOrderByAggregateInput
    _avg?: TicketAssignmentsAvgOrderByAggregateInput
    _max?: TicketAssignmentsMaxOrderByAggregateInput
    _min?: TicketAssignmentsMinOrderByAggregateInput
    _sum?: TicketAssignmentsSumOrderByAggregateInput
  }

  export type TicketAssignmentsScalarWhereWithAggregatesInput = {
    AND?: TicketAssignmentsScalarWhereWithAggregatesInput | TicketAssignmentsScalarWhereWithAggregatesInput[]
    OR?: TicketAssignmentsScalarWhereWithAggregatesInput[]
    NOT?: TicketAssignmentsScalarWhereWithAggregatesInput | TicketAssignmentsScalarWhereWithAggregatesInput[]
    ticketId?: IntWithAggregatesFilter<"TicketAssignments"> | number
    assigneeId?: IntWithAggregatesFilter<"TicketAssignments"> | number
    assignerId?: IntWithAggregatesFilter<"TicketAssignments"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TicketAssignments"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"TicketAssignments"> | Date | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"TicketAssignments"> | Date | string
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: IntFilter<"Tag"> | number
    name?: StringFilter<"Tag"> | string
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Tag"> | Date | string | null
    updatedAt?: DateTimeFilter<"Tag"> | Date | string
    tickets?: TagsOnTicketListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    tickets?: TagsOnTicketOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Tag"> | Date | string | null
    updatedAt?: DateTimeFilter<"Tag"> | Date | string
    tickets?: TagsOnTicketListRelationFilter
  }, "id" | "name">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _avg?: TagAvgOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
    _sum?: TagSumOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tag"> | number
    name?: StringWithAggregatesFilter<"Tag"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Tag"> | Date | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
  }

  export type StatusWhereInput = {
    AND?: StatusWhereInput | StatusWhereInput[]
    OR?: StatusWhereInput[]
    NOT?: StatusWhereInput | StatusWhereInput[]
    id?: IntFilter<"Status"> | number
    name?: StringFilter<"Status"> | string
    createdAt?: DateTimeFilter<"Status"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Status"> | Date | string | null
    updatedAt?: DateTimeFilter<"Status"> | Date | string
    Ticket?: TicketListRelationFilter
  }

  export type StatusOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    Ticket?: TicketOrderByRelationAggregateInput
  }

  export type StatusWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: StatusWhereInput | StatusWhereInput[]
    OR?: StatusWhereInput[]
    NOT?: StatusWhereInput | StatusWhereInput[]
    createdAt?: DateTimeFilter<"Status"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Status"> | Date | string | null
    updatedAt?: DateTimeFilter<"Status"> | Date | string
    Ticket?: TicketListRelationFilter
  }, "id" | "name">

  export type StatusOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: StatusCountOrderByAggregateInput
    _avg?: StatusAvgOrderByAggregateInput
    _max?: StatusMaxOrderByAggregateInput
    _min?: StatusMinOrderByAggregateInput
    _sum?: StatusSumOrderByAggregateInput
  }

  export type StatusScalarWhereWithAggregatesInput = {
    AND?: StatusScalarWhereWithAggregatesInput | StatusScalarWhereWithAggregatesInput[]
    OR?: StatusScalarWhereWithAggregatesInput[]
    NOT?: StatusScalarWhereWithAggregatesInput | StatusScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Status"> | number
    name?: StringWithAggregatesFilter<"Status"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Status"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Status"> | Date | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"Status"> | Date | string
  }

  export type GroupWhereInput = {
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    id?: IntFilter<"Group"> | number
    name?: StringFilter<"Group"> | string
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Group"> | Date | string | null
    users?: UsersOnGroupListRelationFilter
    Ticket?: TicketListRelationFilter
  }

  export type GroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    users?: UsersOnGroupOrderByRelationAggregateInput
    Ticket?: TicketOrderByRelationAggregateInput
  }

  export type GroupWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Group"> | Date | string | null
    users?: UsersOnGroupListRelationFilter
    Ticket?: TicketListRelationFilter
  }, "id" | "name">

  export type GroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: GroupCountOrderByAggregateInput
    _avg?: GroupAvgOrderByAggregateInput
    _max?: GroupMaxOrderByAggregateInput
    _min?: GroupMinOrderByAggregateInput
    _sum?: GroupSumOrderByAggregateInput
  }

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    OR?: GroupScalarWhereWithAggregatesInput[]
    NOT?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Group"> | number
    name?: StringWithAggregatesFilter<"Group"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Group"> | Date | string | null
  }

  export type UsersOnGroupWhereInput = {
    AND?: UsersOnGroupWhereInput | UsersOnGroupWhereInput[]
    OR?: UsersOnGroupWhereInput[]
    NOT?: UsersOnGroupWhereInput | UsersOnGroupWhereInput[]
    userId?: IntFilter<"UsersOnGroup"> | number
    groupId?: IntFilter<"UsersOnGroup"> | number
    createdAt?: DateTimeFilter<"UsersOnGroup"> | Date | string
    deletedAt?: DateTimeNullableFilter<"UsersOnGroup"> | Date | string | null
    updatedAt?: DateTimeFilter<"UsersOnGroup"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    Group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
  }

  export type UsersOnGroupOrderByWithRelationInput = {
    userId?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    User?: UserOrderByWithRelationInput
    Group?: GroupOrderByWithRelationInput
  }

  export type UsersOnGroupWhereUniqueInput = Prisma.AtLeast<{
    userId_groupId?: UsersOnGroupUserIdGroupIdCompoundUniqueInput
    AND?: UsersOnGroupWhereInput | UsersOnGroupWhereInput[]
    OR?: UsersOnGroupWhereInput[]
    NOT?: UsersOnGroupWhereInput | UsersOnGroupWhereInput[]
    userId?: IntFilter<"UsersOnGroup"> | number
    groupId?: IntFilter<"UsersOnGroup"> | number
    createdAt?: DateTimeFilter<"UsersOnGroup"> | Date | string
    deletedAt?: DateTimeNullableFilter<"UsersOnGroup"> | Date | string | null
    updatedAt?: DateTimeFilter<"UsersOnGroup"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    Group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
  }, "userId_groupId">

  export type UsersOnGroupOrderByWithAggregationInput = {
    userId?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: UsersOnGroupCountOrderByAggregateInput
    _avg?: UsersOnGroupAvgOrderByAggregateInput
    _max?: UsersOnGroupMaxOrderByAggregateInput
    _min?: UsersOnGroupMinOrderByAggregateInput
    _sum?: UsersOnGroupSumOrderByAggregateInput
  }

  export type UsersOnGroupScalarWhereWithAggregatesInput = {
    AND?: UsersOnGroupScalarWhereWithAggregatesInput | UsersOnGroupScalarWhereWithAggregatesInput[]
    OR?: UsersOnGroupScalarWhereWithAggregatesInput[]
    NOT?: UsersOnGroupScalarWhereWithAggregatesInput | UsersOnGroupScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"UsersOnGroup"> | number
    groupId?: IntWithAggregatesFilter<"UsersOnGroup"> | number
    createdAt?: DateTimeWithAggregatesFilter<"UsersOnGroup"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"UsersOnGroup"> | Date | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"UsersOnGroup"> | Date | string
  }

  export type PriorityWhereInput = {
    AND?: PriorityWhereInput | PriorityWhereInput[]
    OR?: PriorityWhereInput[]
    NOT?: PriorityWhereInput | PriorityWhereInput[]
    id?: IntFilter<"Priority"> | number
    name?: StringFilter<"Priority"> | string
    created_at?: DateTimeFilter<"Priority"> | Date | string
    Ticket?: TicketListRelationFilter
  }

  export type PriorityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    Ticket?: TicketOrderByRelationAggregateInput
  }

  export type PriorityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: PriorityWhereInput | PriorityWhereInput[]
    OR?: PriorityWhereInput[]
    NOT?: PriorityWhereInput | PriorityWhereInput[]
    created_at?: DateTimeFilter<"Priority"> | Date | string
    Ticket?: TicketListRelationFilter
  }, "id" | "name">

  export type PriorityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    _count?: PriorityCountOrderByAggregateInput
    _avg?: PriorityAvgOrderByAggregateInput
    _max?: PriorityMaxOrderByAggregateInput
    _min?: PriorityMinOrderByAggregateInput
    _sum?: PrioritySumOrderByAggregateInput
  }

  export type PriorityScalarWhereWithAggregatesInput = {
    AND?: PriorityScalarWhereWithAggregatesInput | PriorityScalarWhereWithAggregatesInput[]
    OR?: PriorityScalarWhereWithAggregatesInput[]
    NOT?: PriorityScalarWhereWithAggregatesInput | PriorityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Priority"> | number
    name?: StringWithAggregatesFilter<"Priority"> | string
    created_at?: DateTimeWithAggregatesFilter<"Priority"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    description?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Category"> | Date | string | null
    Ticket?: TicketListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    Ticket?: TicketOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    description?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Category"> | Date | string | null
    Ticket?: TicketListRelationFilter
  }, "id" | "name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
    description?: StringWithAggregatesFilter<"Category"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Category"> | Date | string | null
  }

  export type OrganizationCreateInput = {
    name: string
    logo?: string | null
    description?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    Ticket?: TicketCreateNestedManyWithoutOrganizationInput
    Membership?: MembershipCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateInput = {
    id?: number
    name: string
    logo?: string | null
    description?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    Ticket?: TicketUncheckedCreateNestedManyWithoutOrganizationInput
    Membership?: MembershipUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Ticket?: TicketUpdateManyWithoutOrganizationNestedInput
    Membership?: MembershipUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Ticket?: TicketUncheckedUpdateManyWithoutOrganizationNestedInput
    Membership?: MembershipUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateManyInput = {
    id?: number
    name: string
    logo?: string | null
    description?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type OrganizationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipCreateInput = {
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutMembershipInput
    user: UserCreateNestedOneWithoutOrganizationsInput
  }

  export type MembershipUncheckedCreateInput = {
    organizationId: number
    userId: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type MembershipUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutMembershipNestedInput
    user?: UserUpdateOneRequiredWithoutOrganizationsNestedInput
  }

  export type MembershipUncheckedUpdateInput = {
    organizationId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipCreateManyInput = {
    organizationId: number
    userId: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type MembershipUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipUncheckedUpdateManyInput = {
    organizationId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    TicketNotes?: TicketNotesCreateNestedManyWithoutCreatorInput
    createdTickets?: TicketCreateNestedManyWithoutCreatedByInput
    organizations?: MembershipCreateNestedManyWithoutUserInput
    assignedTickets?: TicketAssignmentsCreateNestedManyWithoutAssigneeInput
    assignedByTickets?: TicketAssignmentsCreateNestedManyWithoutAssignedByInput
    UsersOnGroup?: UsersOnGroupCreateNestedManyWithoutUserInput
    Profile?: ProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    TicketNotes?: TicketNotesUncheckedCreateNestedManyWithoutCreatorInput
    createdTickets?: TicketUncheckedCreateNestedManyWithoutCreatedByInput
    organizations?: MembershipUncheckedCreateNestedManyWithoutUserInput
    assignedTickets?: TicketAssignmentsUncheckedCreateNestedManyWithoutAssigneeInput
    assignedByTickets?: TicketAssignmentsUncheckedCreateNestedManyWithoutAssignedByInput
    UsersOnGroup?: UsersOnGroupUncheckedCreateNestedManyWithoutUserInput
    Profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TicketNotes?: TicketNotesUpdateManyWithoutCreatorNestedInput
    createdTickets?: TicketUpdateManyWithoutCreatedByNestedInput
    organizations?: MembershipUpdateManyWithoutUserNestedInput
    assignedTickets?: TicketAssignmentsUpdateManyWithoutAssigneeNestedInput
    assignedByTickets?: TicketAssignmentsUpdateManyWithoutAssignedByNestedInput
    UsersOnGroup?: UsersOnGroupUpdateManyWithoutUserNestedInput
    Profile?: ProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TicketNotes?: TicketNotesUncheckedUpdateManyWithoutCreatorNestedInput
    createdTickets?: TicketUncheckedUpdateManyWithoutCreatedByNestedInput
    organizations?: MembershipUncheckedUpdateManyWithoutUserNestedInput
    assignedTickets?: TicketAssignmentsUncheckedUpdateManyWithoutAssigneeNestedInput
    assignedByTickets?: TicketAssignmentsUncheckedUpdateManyWithoutAssignedByNestedInput
    UsersOnGroup?: UsersOnGroupUncheckedUpdateManyWithoutUserNestedInput
    Profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileCreateInput = {
    first_name: string
    last_name: string
    photo?: string | null
    phone?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    User: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: number
    first_name: string
    last_name: string
    photo?: string | null
    phone?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    userId: number
  }

  export type ProfileUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ProfileCreateManyInput = {
    id?: number
    first_name: string
    last_name: string
    photo?: string | null
    phone?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    userId: number
  }

  export type ProfileUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type TicketCreateInput = {
    subject: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    notes?: TicketNotesCreateNestedManyWithoutTicketInput
    Organization: OrganizationCreateNestedOneWithoutTicketInput
    CreatedBy: UserCreateNestedOneWithoutCreatedTicketsInput
    Group?: GroupCreateNestedOneWithoutTicketInput
    Priority: PriorityCreateNestedOneWithoutTicketInput
    Status: StatusCreateNestedOneWithoutTicketInput
    Category?: CategoryCreateNestedOneWithoutTicketInput
    Assignees?: TicketAssignmentsCreateNestedManyWithoutTicketInput
    Tags?: TagsOnTicketCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateInput = {
    id?: number
    subject: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    organizationId: number
    createdById: number
    groupId?: number | null
    priorityId: number
    statusId: number
    categoryId?: number | null
    notes?: TicketNotesUncheckedCreateNestedManyWithoutTicketInput
    Assignees?: TicketAssignmentsUncheckedCreateNestedManyWithoutTicketInput
    Tags?: TagsOnTicketUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketUpdateInput = {
    subject?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: TicketNotesUpdateManyWithoutTicketNestedInput
    Organization?: OrganizationUpdateOneRequiredWithoutTicketNestedInput
    CreatedBy?: UserUpdateOneRequiredWithoutCreatedTicketsNestedInput
    Group?: GroupUpdateOneWithoutTicketNestedInput
    Priority?: PriorityUpdateOneRequiredWithoutTicketNestedInput
    Status?: StatusUpdateOneRequiredWithoutTicketNestedInput
    Category?: CategoryUpdateOneWithoutTicketNestedInput
    Assignees?: TicketAssignmentsUpdateManyWithoutTicketNestedInput
    Tags?: TagsOnTicketUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizationId?: IntFieldUpdateOperationsInput | number
    createdById?: IntFieldUpdateOperationsInput | number
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    priorityId?: IntFieldUpdateOperationsInput | number
    statusId?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: TicketNotesUncheckedUpdateManyWithoutTicketNestedInput
    Assignees?: TicketAssignmentsUncheckedUpdateManyWithoutTicketNestedInput
    Tags?: TagsOnTicketUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketCreateManyInput = {
    id?: number
    subject: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    organizationId: number
    createdById: number
    groupId?: number | null
    priorityId: number
    statusId: number
    categoryId?: number | null
  }

  export type TicketUpdateManyMutationInput = {
    subject?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizationId?: IntFieldUpdateOperationsInput | number
    createdById?: IntFieldUpdateOperationsInput | number
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    priorityId?: IntFieldUpdateOperationsInput | number
    statusId?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TicketNotesCreateInput = {
    content: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    NoteType?: $Enums.NoteType
    Creator: UserCreateNestedOneWithoutTicketNotesInput
    Ticket: TicketCreateNestedOneWithoutNotesInput
  }

  export type TicketNotesUncheckedCreateInput = {
    id?: number
    content: string
    ticketId: number
    creatorId: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    NoteType?: $Enums.NoteType
  }

  export type TicketNotesUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    NoteType?: EnumNoteTypeFieldUpdateOperationsInput | $Enums.NoteType
    Creator?: UserUpdateOneRequiredWithoutTicketNotesNestedInput
    Ticket?: TicketUpdateOneRequiredWithoutNotesNestedInput
  }

  export type TicketNotesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    ticketId?: IntFieldUpdateOperationsInput | number
    creatorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    NoteType?: EnumNoteTypeFieldUpdateOperationsInput | $Enums.NoteType
  }

  export type TicketNotesCreateManyInput = {
    id?: number
    content: string
    ticketId: number
    creatorId: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    NoteType?: $Enums.NoteType
  }

  export type TicketNotesUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    NoteType?: EnumNoteTypeFieldUpdateOperationsInput | $Enums.NoteType
  }

  export type TicketNotesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    ticketId?: IntFieldUpdateOperationsInput | number
    creatorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    NoteType?: EnumNoteTypeFieldUpdateOperationsInput | $Enums.NoteType
  }

  export type TagsOnTicketCreateInput = {
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    Ticket: TicketCreateNestedOneWithoutTagsInput
    Tag: TagCreateNestedOneWithoutTicketsInput
  }

  export type TagsOnTicketUncheckedCreateInput = {
    ticketId: number
    tagId: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type TagsOnTicketUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Ticket?: TicketUpdateOneRequiredWithoutTagsNestedInput
    Tag?: TagUpdateOneRequiredWithoutTicketsNestedInput
  }

  export type TagsOnTicketUncheckedUpdateInput = {
    ticketId?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagsOnTicketCreateManyInput = {
    ticketId: number
    tagId: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type TagsOnTicketUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagsOnTicketUncheckedUpdateManyInput = {
    ticketId?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketAssignmentsCreateInput = {
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    Ticket: TicketCreateNestedOneWithoutAssigneesInput
    Assignee: UserCreateNestedOneWithoutAssignedTicketsInput
    AssignedBy: UserCreateNestedOneWithoutAssignedByTicketsInput
  }

  export type TicketAssignmentsUncheckedCreateInput = {
    ticketId: number
    assigneeId: number
    assignerId: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type TicketAssignmentsUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Ticket?: TicketUpdateOneRequiredWithoutAssigneesNestedInput
    Assignee?: UserUpdateOneRequiredWithoutAssignedTicketsNestedInput
    AssignedBy?: UserUpdateOneRequiredWithoutAssignedByTicketsNestedInput
  }

  export type TicketAssignmentsUncheckedUpdateInput = {
    ticketId?: IntFieldUpdateOperationsInput | number
    assigneeId?: IntFieldUpdateOperationsInput | number
    assignerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketAssignmentsCreateManyInput = {
    ticketId: number
    assigneeId: number
    assignerId: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type TicketAssignmentsUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketAssignmentsUncheckedUpdateManyInput = {
    ticketId?: IntFieldUpdateOperationsInput | number
    assigneeId?: IntFieldUpdateOperationsInput | number
    assignerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagCreateInput = {
    name: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    tickets?: TagsOnTicketCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    tickets?: TagsOnTicketUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TagsOnTicketUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TagsOnTicketUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type TagUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatusCreateInput = {
    name: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    Ticket?: TicketCreateNestedManyWithoutStatusInput
  }

  export type StatusUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    Ticket?: TicketUncheckedCreateNestedManyWithoutStatusInput
  }

  export type StatusUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Ticket?: TicketUpdateManyWithoutStatusNestedInput
  }

  export type StatusUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Ticket?: TicketUncheckedUpdateManyWithoutStatusNestedInput
  }

  export type StatusCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type StatusUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatusUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: UsersOnGroupCreateNestedManyWithoutGroupInput
    Ticket?: TicketCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: UsersOnGroupUncheckedCreateNestedManyWithoutGroupInput
    Ticket?: TicketUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UsersOnGroupUpdateManyWithoutGroupNestedInput
    Ticket?: TicketUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UsersOnGroupUncheckedUpdateManyWithoutGroupNestedInput
    Ticket?: TicketUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type GroupUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GroupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsersOnGroupCreateInput = {
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    User: UserCreateNestedOneWithoutUsersOnGroupInput
    Group: GroupCreateNestedOneWithoutUsersInput
  }

  export type UsersOnGroupUncheckedCreateInput = {
    userId: number
    groupId: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type UsersOnGroupUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutUsersOnGroupNestedInput
    Group?: GroupUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UsersOnGroupUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersOnGroupCreateManyInput = {
    userId: number
    groupId: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type UsersOnGroupUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersOnGroupUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriorityCreateInput = {
    name: string
    created_at?: Date | string
    Ticket?: TicketCreateNestedManyWithoutPriorityInput
  }

  export type PriorityUncheckedCreateInput = {
    id?: number
    name: string
    created_at?: Date | string
    Ticket?: TicketUncheckedCreateNestedManyWithoutPriorityInput
  }

  export type PriorityUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Ticket?: TicketUpdateManyWithoutPriorityNestedInput
  }

  export type PriorityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Ticket?: TicketUncheckedUpdateManyWithoutPriorityNestedInput
  }

  export type PriorityCreateManyInput = {
    id?: number
    name: string
    created_at?: Date | string
  }

  export type PriorityUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriorityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Ticket?: TicketCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Ticket?: TicketUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Ticket?: TicketUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Ticket?: TicketUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type TicketListRelationFilter = {
    every?: TicketWhereInput
    some?: TicketWhereInput
    none?: TicketWhereInput
  }

  export type MembershipListRelationFilter = {
    every?: MembershipWhereInput
    some?: MembershipWhereInput
    none?: MembershipWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MembershipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type OrganizationScalarRelationFilter = {
    is?: OrganizationWhereInput
    isNot?: OrganizationWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MembershipOrganizationIdUserIdCompoundUniqueInput = {
    organizationId: number
    userId: number
  }

  export type MembershipCountOrderByAggregateInput = {
    organizationId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MembershipAvgOrderByAggregateInput = {
    organizationId?: SortOrder
    userId?: SortOrder
  }

  export type MembershipMaxOrderByAggregateInput = {
    organizationId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MembershipMinOrderByAggregateInput = {
    organizationId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MembershipSumOrderByAggregateInput = {
    organizationId?: SortOrder
    userId?: SortOrder
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type TicketNotesListRelationFilter = {
    every?: TicketNotesWhereInput
    some?: TicketNotesWhereInput
    none?: TicketNotesWhereInput
  }

  export type TicketAssignmentsListRelationFilter = {
    every?: TicketAssignmentsWhereInput
    some?: TicketAssignmentsWhereInput
    none?: TicketAssignmentsWhereInput
  }

  export type UsersOnGroupListRelationFilter = {
    every?: UsersOnGroupWhereInput
    some?: UsersOnGroupWhereInput
    none?: UsersOnGroupWhereInput
  }

  export type ProfileNullableScalarRelationFilter = {
    is?: ProfileWhereInput | null
    isNot?: ProfileWhereInput | null
  }

  export type TicketNotesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketAssignmentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersOnGroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    photo?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    photo?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    photo?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type GroupNullableScalarRelationFilter = {
    is?: GroupWhereInput | null
    isNot?: GroupWhereInput | null
  }

  export type PriorityScalarRelationFilter = {
    is?: PriorityWhereInput
    isNot?: PriorityWhereInput
  }

  export type StatusScalarRelationFilter = {
    is?: StatusWhereInput
    isNot?: StatusWhereInput
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type TagsOnTicketListRelationFilter = {
    every?: TagsOnTicketWhereInput
    some?: TagsOnTicketWhereInput
    none?: TagsOnTicketWhereInput
  }

  export type TagsOnTicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketCountOrderByAggregateInput = {
    id?: SortOrder
    subject?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    organizationId?: SortOrder
    createdById?: SortOrder
    groupId?: SortOrder
    priorityId?: SortOrder
    statusId?: SortOrder
    categoryId?: SortOrder
  }

  export type TicketAvgOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    createdById?: SortOrder
    groupId?: SortOrder
    priorityId?: SortOrder
    statusId?: SortOrder
    categoryId?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    id?: SortOrder
    subject?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    organizationId?: SortOrder
    createdById?: SortOrder
    groupId?: SortOrder
    priorityId?: SortOrder
    statusId?: SortOrder
    categoryId?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    id?: SortOrder
    subject?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    organizationId?: SortOrder
    createdById?: SortOrder
    groupId?: SortOrder
    priorityId?: SortOrder
    statusId?: SortOrder
    categoryId?: SortOrder
  }

  export type TicketSumOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    createdById?: SortOrder
    groupId?: SortOrder
    priorityId?: SortOrder
    statusId?: SortOrder
    categoryId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumNoteTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NoteType | EnumNoteTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NoteType[] | ListEnumNoteTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NoteType[] | ListEnumNoteTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNoteTypeFilter<$PrismaModel> | $Enums.NoteType
  }

  export type TicketScalarRelationFilter = {
    is?: TicketWhereInput
    isNot?: TicketWhereInput
  }

  export type TicketNotesCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    ticketId?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
    NoteType?: SortOrder
  }

  export type TicketNotesAvgOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    creatorId?: SortOrder
  }

  export type TicketNotesMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    ticketId?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
    NoteType?: SortOrder
  }

  export type TicketNotesMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    ticketId?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
    NoteType?: SortOrder
  }

  export type TicketNotesSumOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    creatorId?: SortOrder
  }

  export type EnumNoteTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NoteType | EnumNoteTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NoteType[] | ListEnumNoteTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NoteType[] | ListEnumNoteTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNoteTypeWithAggregatesFilter<$PrismaModel> | $Enums.NoteType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNoteTypeFilter<$PrismaModel>
    _max?: NestedEnumNoteTypeFilter<$PrismaModel>
  }

  export type TagScalarRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type TagsOnTicketTicketIdTagIdCompoundUniqueInput = {
    ticketId: number
    tagId: number
  }

  export type TagsOnTicketCountOrderByAggregateInput = {
    ticketId?: SortOrder
    tagId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagsOnTicketAvgOrderByAggregateInput = {
    ticketId?: SortOrder
    tagId?: SortOrder
  }

  export type TagsOnTicketMaxOrderByAggregateInput = {
    ticketId?: SortOrder
    tagId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagsOnTicketMinOrderByAggregateInput = {
    ticketId?: SortOrder
    tagId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagsOnTicketSumOrderByAggregateInput = {
    ticketId?: SortOrder
    tagId?: SortOrder
  }

  export type TicketAssignmentsTicketIdAssigneeIdCompoundUniqueInput = {
    ticketId: number
    assigneeId: number
  }

  export type TicketAssignmentsCountOrderByAggregateInput = {
    ticketId?: SortOrder
    assigneeId?: SortOrder
    assignerId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketAssignmentsAvgOrderByAggregateInput = {
    ticketId?: SortOrder
    assigneeId?: SortOrder
    assignerId?: SortOrder
  }

  export type TicketAssignmentsMaxOrderByAggregateInput = {
    ticketId?: SortOrder
    assigneeId?: SortOrder
    assignerId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketAssignmentsMinOrderByAggregateInput = {
    ticketId?: SortOrder
    assigneeId?: SortOrder
    assignerId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketAssignmentsSumOrderByAggregateInput = {
    ticketId?: SortOrder
    assigneeId?: SortOrder
    assignerId?: SortOrder
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StatusCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StatusAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StatusMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StatusMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StatusSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type GroupAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type GroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type GroupSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GroupScalarRelationFilter = {
    is?: GroupWhereInput
    isNot?: GroupWhereInput
  }

  export type UsersOnGroupUserIdGroupIdCompoundUniqueInput = {
    userId: number
    groupId: number
  }

  export type UsersOnGroupCountOrderByAggregateInput = {
    userId?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersOnGroupAvgOrderByAggregateInput = {
    userId?: SortOrder
    groupId?: SortOrder
  }

  export type UsersOnGroupMaxOrderByAggregateInput = {
    userId?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersOnGroupMinOrderByAggregateInput = {
    userId?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersOnGroupSumOrderByAggregateInput = {
    userId?: SortOrder
    groupId?: SortOrder
  }

  export type PriorityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type PriorityAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PriorityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type PriorityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type PrioritySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TicketCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<TicketCreateWithoutOrganizationInput, TicketUncheckedCreateWithoutOrganizationInput> | TicketCreateWithoutOrganizationInput[] | TicketUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutOrganizationInput | TicketCreateOrConnectWithoutOrganizationInput[]
    createMany?: TicketCreateManyOrganizationInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type MembershipCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<MembershipCreateWithoutOrganizationInput, MembershipUncheckedCreateWithoutOrganizationInput> | MembershipCreateWithoutOrganizationInput[] | MembershipUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutOrganizationInput | MembershipCreateOrConnectWithoutOrganizationInput[]
    createMany?: MembershipCreateManyOrganizationInputEnvelope
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<TicketCreateWithoutOrganizationInput, TicketUncheckedCreateWithoutOrganizationInput> | TicketCreateWithoutOrganizationInput[] | TicketUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutOrganizationInput | TicketCreateOrConnectWithoutOrganizationInput[]
    createMany?: TicketCreateManyOrganizationInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type MembershipUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<MembershipCreateWithoutOrganizationInput, MembershipUncheckedCreateWithoutOrganizationInput> | MembershipCreateWithoutOrganizationInput[] | MembershipUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutOrganizationInput | MembershipCreateOrConnectWithoutOrganizationInput[]
    createMany?: MembershipCreateManyOrganizationInputEnvelope
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TicketUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<TicketCreateWithoutOrganizationInput, TicketUncheckedCreateWithoutOrganizationInput> | TicketCreateWithoutOrganizationInput[] | TicketUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutOrganizationInput | TicketCreateOrConnectWithoutOrganizationInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutOrganizationInput | TicketUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: TicketCreateManyOrganizationInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutOrganizationInput | TicketUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutOrganizationInput | TicketUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type MembershipUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<MembershipCreateWithoutOrganizationInput, MembershipUncheckedCreateWithoutOrganizationInput> | MembershipCreateWithoutOrganizationInput[] | MembershipUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutOrganizationInput | MembershipCreateOrConnectWithoutOrganizationInput[]
    upsert?: MembershipUpsertWithWhereUniqueWithoutOrganizationInput | MembershipUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: MembershipCreateManyOrganizationInputEnvelope
    set?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    disconnect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    delete?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    update?: MembershipUpdateWithWhereUniqueWithoutOrganizationInput | MembershipUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: MembershipUpdateManyWithWhereWithoutOrganizationInput | MembershipUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TicketUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<TicketCreateWithoutOrganizationInput, TicketUncheckedCreateWithoutOrganizationInput> | TicketCreateWithoutOrganizationInput[] | TicketUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutOrganizationInput | TicketCreateOrConnectWithoutOrganizationInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutOrganizationInput | TicketUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: TicketCreateManyOrganizationInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutOrganizationInput | TicketUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutOrganizationInput | TicketUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type MembershipUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<MembershipCreateWithoutOrganizationInput, MembershipUncheckedCreateWithoutOrganizationInput> | MembershipCreateWithoutOrganizationInput[] | MembershipUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutOrganizationInput | MembershipCreateOrConnectWithoutOrganizationInput[]
    upsert?: MembershipUpsertWithWhereUniqueWithoutOrganizationInput | MembershipUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: MembershipCreateManyOrganizationInputEnvelope
    set?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    disconnect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    delete?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    update?: MembershipUpdateWithWhereUniqueWithoutOrganizationInput | MembershipUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: MembershipUpdateManyWithWhereWithoutOrganizationInput | MembershipUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutMembershipInput = {
    create?: XOR<OrganizationCreateWithoutMembershipInput, OrganizationUncheckedCreateWithoutMembershipInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutMembershipInput
    connect?: OrganizationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOrganizationsInput = {
    create?: XOR<UserCreateWithoutOrganizationsInput, UserUncheckedCreateWithoutOrganizationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationsInput
    connect?: UserWhereUniqueInput
  }

  export type OrganizationUpdateOneRequiredWithoutMembershipNestedInput = {
    create?: XOR<OrganizationCreateWithoutMembershipInput, OrganizationUncheckedCreateWithoutMembershipInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutMembershipInput
    upsert?: OrganizationUpsertWithoutMembershipInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutMembershipInput, OrganizationUpdateWithoutMembershipInput>, OrganizationUncheckedUpdateWithoutMembershipInput>
  }

  export type UserUpdateOneRequiredWithoutOrganizationsNestedInput = {
    create?: XOR<UserCreateWithoutOrganizationsInput, UserUncheckedCreateWithoutOrganizationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationsInput
    upsert?: UserUpsertWithoutOrganizationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrganizationsInput, UserUpdateWithoutOrganizationsInput>, UserUncheckedUpdateWithoutOrganizationsInput>
  }

  export type TicketNotesCreateNestedManyWithoutCreatorInput = {
    create?: XOR<TicketNotesCreateWithoutCreatorInput, TicketNotesUncheckedCreateWithoutCreatorInput> | TicketNotesCreateWithoutCreatorInput[] | TicketNotesUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TicketNotesCreateOrConnectWithoutCreatorInput | TicketNotesCreateOrConnectWithoutCreatorInput[]
    createMany?: TicketNotesCreateManyCreatorInputEnvelope
    connect?: TicketNotesWhereUniqueInput | TicketNotesWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<TicketCreateWithoutCreatedByInput, TicketUncheckedCreateWithoutCreatedByInput> | TicketCreateWithoutCreatedByInput[] | TicketUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCreatedByInput | TicketCreateOrConnectWithoutCreatedByInput[]
    createMany?: TicketCreateManyCreatedByInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type MembershipCreateNestedManyWithoutUserInput = {
    create?: XOR<MembershipCreateWithoutUserInput, MembershipUncheckedCreateWithoutUserInput> | MembershipCreateWithoutUserInput[] | MembershipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutUserInput | MembershipCreateOrConnectWithoutUserInput[]
    createMany?: MembershipCreateManyUserInputEnvelope
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
  }

  export type TicketAssignmentsCreateNestedManyWithoutAssigneeInput = {
    create?: XOR<TicketAssignmentsCreateWithoutAssigneeInput, TicketAssignmentsUncheckedCreateWithoutAssigneeInput> | TicketAssignmentsCreateWithoutAssigneeInput[] | TicketAssignmentsUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: TicketAssignmentsCreateOrConnectWithoutAssigneeInput | TicketAssignmentsCreateOrConnectWithoutAssigneeInput[]
    createMany?: TicketAssignmentsCreateManyAssigneeInputEnvelope
    connect?: TicketAssignmentsWhereUniqueInput | TicketAssignmentsWhereUniqueInput[]
  }

  export type TicketAssignmentsCreateNestedManyWithoutAssignedByInput = {
    create?: XOR<TicketAssignmentsCreateWithoutAssignedByInput, TicketAssignmentsUncheckedCreateWithoutAssignedByInput> | TicketAssignmentsCreateWithoutAssignedByInput[] | TicketAssignmentsUncheckedCreateWithoutAssignedByInput[]
    connectOrCreate?: TicketAssignmentsCreateOrConnectWithoutAssignedByInput | TicketAssignmentsCreateOrConnectWithoutAssignedByInput[]
    createMany?: TicketAssignmentsCreateManyAssignedByInputEnvelope
    connect?: TicketAssignmentsWhereUniqueInput | TicketAssignmentsWhereUniqueInput[]
  }

  export type UsersOnGroupCreateNestedManyWithoutUserInput = {
    create?: XOR<UsersOnGroupCreateWithoutUserInput, UsersOnGroupUncheckedCreateWithoutUserInput> | UsersOnGroupCreateWithoutUserInput[] | UsersOnGroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsersOnGroupCreateOrConnectWithoutUserInput | UsersOnGroupCreateOrConnectWithoutUserInput[]
    createMany?: UsersOnGroupCreateManyUserInputEnvelope
    connect?: UsersOnGroupWhereUniqueInput | UsersOnGroupWhereUniqueInput[]
  }

  export type ProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type TicketNotesUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<TicketNotesCreateWithoutCreatorInput, TicketNotesUncheckedCreateWithoutCreatorInput> | TicketNotesCreateWithoutCreatorInput[] | TicketNotesUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TicketNotesCreateOrConnectWithoutCreatorInput | TicketNotesCreateOrConnectWithoutCreatorInput[]
    createMany?: TicketNotesCreateManyCreatorInputEnvelope
    connect?: TicketNotesWhereUniqueInput | TicketNotesWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<TicketCreateWithoutCreatedByInput, TicketUncheckedCreateWithoutCreatedByInput> | TicketCreateWithoutCreatedByInput[] | TicketUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCreatedByInput | TicketCreateOrConnectWithoutCreatedByInput[]
    createMany?: TicketCreateManyCreatedByInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type MembershipUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MembershipCreateWithoutUserInput, MembershipUncheckedCreateWithoutUserInput> | MembershipCreateWithoutUserInput[] | MembershipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutUserInput | MembershipCreateOrConnectWithoutUserInput[]
    createMany?: MembershipCreateManyUserInputEnvelope
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
  }

  export type TicketAssignmentsUncheckedCreateNestedManyWithoutAssigneeInput = {
    create?: XOR<TicketAssignmentsCreateWithoutAssigneeInput, TicketAssignmentsUncheckedCreateWithoutAssigneeInput> | TicketAssignmentsCreateWithoutAssigneeInput[] | TicketAssignmentsUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: TicketAssignmentsCreateOrConnectWithoutAssigneeInput | TicketAssignmentsCreateOrConnectWithoutAssigneeInput[]
    createMany?: TicketAssignmentsCreateManyAssigneeInputEnvelope
    connect?: TicketAssignmentsWhereUniqueInput | TicketAssignmentsWhereUniqueInput[]
  }

  export type TicketAssignmentsUncheckedCreateNestedManyWithoutAssignedByInput = {
    create?: XOR<TicketAssignmentsCreateWithoutAssignedByInput, TicketAssignmentsUncheckedCreateWithoutAssignedByInput> | TicketAssignmentsCreateWithoutAssignedByInput[] | TicketAssignmentsUncheckedCreateWithoutAssignedByInput[]
    connectOrCreate?: TicketAssignmentsCreateOrConnectWithoutAssignedByInput | TicketAssignmentsCreateOrConnectWithoutAssignedByInput[]
    createMany?: TicketAssignmentsCreateManyAssignedByInputEnvelope
    connect?: TicketAssignmentsWhereUniqueInput | TicketAssignmentsWhereUniqueInput[]
  }

  export type UsersOnGroupUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UsersOnGroupCreateWithoutUserInput, UsersOnGroupUncheckedCreateWithoutUserInput> | UsersOnGroupCreateWithoutUserInput[] | UsersOnGroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsersOnGroupCreateOrConnectWithoutUserInput | UsersOnGroupCreateOrConnectWithoutUserInput[]
    createMany?: UsersOnGroupCreateManyUserInputEnvelope
    connect?: UsersOnGroupWhereUniqueInput | UsersOnGroupWhereUniqueInput[]
  }

  export type ProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type TicketNotesUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<TicketNotesCreateWithoutCreatorInput, TicketNotesUncheckedCreateWithoutCreatorInput> | TicketNotesCreateWithoutCreatorInput[] | TicketNotesUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TicketNotesCreateOrConnectWithoutCreatorInput | TicketNotesCreateOrConnectWithoutCreatorInput[]
    upsert?: TicketNotesUpsertWithWhereUniqueWithoutCreatorInput | TicketNotesUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: TicketNotesCreateManyCreatorInputEnvelope
    set?: TicketNotesWhereUniqueInput | TicketNotesWhereUniqueInput[]
    disconnect?: TicketNotesWhereUniqueInput | TicketNotesWhereUniqueInput[]
    delete?: TicketNotesWhereUniqueInput | TicketNotesWhereUniqueInput[]
    connect?: TicketNotesWhereUniqueInput | TicketNotesWhereUniqueInput[]
    update?: TicketNotesUpdateWithWhereUniqueWithoutCreatorInput | TicketNotesUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: TicketNotesUpdateManyWithWhereWithoutCreatorInput | TicketNotesUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: TicketNotesScalarWhereInput | TicketNotesScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<TicketCreateWithoutCreatedByInput, TicketUncheckedCreateWithoutCreatedByInput> | TicketCreateWithoutCreatedByInput[] | TicketUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCreatedByInput | TicketCreateOrConnectWithoutCreatedByInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutCreatedByInput | TicketUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: TicketCreateManyCreatedByInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutCreatedByInput | TicketUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutCreatedByInput | TicketUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type MembershipUpdateManyWithoutUserNestedInput = {
    create?: XOR<MembershipCreateWithoutUserInput, MembershipUncheckedCreateWithoutUserInput> | MembershipCreateWithoutUserInput[] | MembershipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutUserInput | MembershipCreateOrConnectWithoutUserInput[]
    upsert?: MembershipUpsertWithWhereUniqueWithoutUserInput | MembershipUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MembershipCreateManyUserInputEnvelope
    set?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    disconnect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    delete?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    update?: MembershipUpdateWithWhereUniqueWithoutUserInput | MembershipUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MembershipUpdateManyWithWhereWithoutUserInput | MembershipUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
  }

  export type TicketAssignmentsUpdateManyWithoutAssigneeNestedInput = {
    create?: XOR<TicketAssignmentsCreateWithoutAssigneeInput, TicketAssignmentsUncheckedCreateWithoutAssigneeInput> | TicketAssignmentsCreateWithoutAssigneeInput[] | TicketAssignmentsUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: TicketAssignmentsCreateOrConnectWithoutAssigneeInput | TicketAssignmentsCreateOrConnectWithoutAssigneeInput[]
    upsert?: TicketAssignmentsUpsertWithWhereUniqueWithoutAssigneeInput | TicketAssignmentsUpsertWithWhereUniqueWithoutAssigneeInput[]
    createMany?: TicketAssignmentsCreateManyAssigneeInputEnvelope
    set?: TicketAssignmentsWhereUniqueInput | TicketAssignmentsWhereUniqueInput[]
    disconnect?: TicketAssignmentsWhereUniqueInput | TicketAssignmentsWhereUniqueInput[]
    delete?: TicketAssignmentsWhereUniqueInput | TicketAssignmentsWhereUniqueInput[]
    connect?: TicketAssignmentsWhereUniqueInput | TicketAssignmentsWhereUniqueInput[]
    update?: TicketAssignmentsUpdateWithWhereUniqueWithoutAssigneeInput | TicketAssignmentsUpdateWithWhereUniqueWithoutAssigneeInput[]
    updateMany?: TicketAssignmentsUpdateManyWithWhereWithoutAssigneeInput | TicketAssignmentsUpdateManyWithWhereWithoutAssigneeInput[]
    deleteMany?: TicketAssignmentsScalarWhereInput | TicketAssignmentsScalarWhereInput[]
  }

  export type TicketAssignmentsUpdateManyWithoutAssignedByNestedInput = {
    create?: XOR<TicketAssignmentsCreateWithoutAssignedByInput, TicketAssignmentsUncheckedCreateWithoutAssignedByInput> | TicketAssignmentsCreateWithoutAssignedByInput[] | TicketAssignmentsUncheckedCreateWithoutAssignedByInput[]
    connectOrCreate?: TicketAssignmentsCreateOrConnectWithoutAssignedByInput | TicketAssignmentsCreateOrConnectWithoutAssignedByInput[]
    upsert?: TicketAssignmentsUpsertWithWhereUniqueWithoutAssignedByInput | TicketAssignmentsUpsertWithWhereUniqueWithoutAssignedByInput[]
    createMany?: TicketAssignmentsCreateManyAssignedByInputEnvelope
    set?: TicketAssignmentsWhereUniqueInput | TicketAssignmentsWhereUniqueInput[]
    disconnect?: TicketAssignmentsWhereUniqueInput | TicketAssignmentsWhereUniqueInput[]
    delete?: TicketAssignmentsWhereUniqueInput | TicketAssignmentsWhereUniqueInput[]
    connect?: TicketAssignmentsWhereUniqueInput | TicketAssignmentsWhereUniqueInput[]
    update?: TicketAssignmentsUpdateWithWhereUniqueWithoutAssignedByInput | TicketAssignmentsUpdateWithWhereUniqueWithoutAssignedByInput[]
    updateMany?: TicketAssignmentsUpdateManyWithWhereWithoutAssignedByInput | TicketAssignmentsUpdateManyWithWhereWithoutAssignedByInput[]
    deleteMany?: TicketAssignmentsScalarWhereInput | TicketAssignmentsScalarWhereInput[]
  }

  export type UsersOnGroupUpdateManyWithoutUserNestedInput = {
    create?: XOR<UsersOnGroupCreateWithoutUserInput, UsersOnGroupUncheckedCreateWithoutUserInput> | UsersOnGroupCreateWithoutUserInput[] | UsersOnGroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsersOnGroupCreateOrConnectWithoutUserInput | UsersOnGroupCreateOrConnectWithoutUserInput[]
    upsert?: UsersOnGroupUpsertWithWhereUniqueWithoutUserInput | UsersOnGroupUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UsersOnGroupCreateManyUserInputEnvelope
    set?: UsersOnGroupWhereUniqueInput | UsersOnGroupWhereUniqueInput[]
    disconnect?: UsersOnGroupWhereUniqueInput | UsersOnGroupWhereUniqueInput[]
    delete?: UsersOnGroupWhereUniqueInput | UsersOnGroupWhereUniqueInput[]
    connect?: UsersOnGroupWhereUniqueInput | UsersOnGroupWhereUniqueInput[]
    update?: UsersOnGroupUpdateWithWhereUniqueWithoutUserInput | UsersOnGroupUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UsersOnGroupUpdateManyWithWhereWithoutUserInput | UsersOnGroupUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UsersOnGroupScalarWhereInput | UsersOnGroupScalarWhereInput[]
  }

  export type ProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type TicketNotesUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<TicketNotesCreateWithoutCreatorInput, TicketNotesUncheckedCreateWithoutCreatorInput> | TicketNotesCreateWithoutCreatorInput[] | TicketNotesUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TicketNotesCreateOrConnectWithoutCreatorInput | TicketNotesCreateOrConnectWithoutCreatorInput[]
    upsert?: TicketNotesUpsertWithWhereUniqueWithoutCreatorInput | TicketNotesUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: TicketNotesCreateManyCreatorInputEnvelope
    set?: TicketNotesWhereUniqueInput | TicketNotesWhereUniqueInput[]
    disconnect?: TicketNotesWhereUniqueInput | TicketNotesWhereUniqueInput[]
    delete?: TicketNotesWhereUniqueInput | TicketNotesWhereUniqueInput[]
    connect?: TicketNotesWhereUniqueInput | TicketNotesWhereUniqueInput[]
    update?: TicketNotesUpdateWithWhereUniqueWithoutCreatorInput | TicketNotesUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: TicketNotesUpdateManyWithWhereWithoutCreatorInput | TicketNotesUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: TicketNotesScalarWhereInput | TicketNotesScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<TicketCreateWithoutCreatedByInput, TicketUncheckedCreateWithoutCreatedByInput> | TicketCreateWithoutCreatedByInput[] | TicketUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCreatedByInput | TicketCreateOrConnectWithoutCreatedByInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutCreatedByInput | TicketUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: TicketCreateManyCreatedByInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutCreatedByInput | TicketUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutCreatedByInput | TicketUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type MembershipUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MembershipCreateWithoutUserInput, MembershipUncheckedCreateWithoutUserInput> | MembershipCreateWithoutUserInput[] | MembershipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutUserInput | MembershipCreateOrConnectWithoutUserInput[]
    upsert?: MembershipUpsertWithWhereUniqueWithoutUserInput | MembershipUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MembershipCreateManyUserInputEnvelope
    set?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    disconnect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    delete?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    update?: MembershipUpdateWithWhereUniqueWithoutUserInput | MembershipUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MembershipUpdateManyWithWhereWithoutUserInput | MembershipUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
  }

  export type TicketAssignmentsUncheckedUpdateManyWithoutAssigneeNestedInput = {
    create?: XOR<TicketAssignmentsCreateWithoutAssigneeInput, TicketAssignmentsUncheckedCreateWithoutAssigneeInput> | TicketAssignmentsCreateWithoutAssigneeInput[] | TicketAssignmentsUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: TicketAssignmentsCreateOrConnectWithoutAssigneeInput | TicketAssignmentsCreateOrConnectWithoutAssigneeInput[]
    upsert?: TicketAssignmentsUpsertWithWhereUniqueWithoutAssigneeInput | TicketAssignmentsUpsertWithWhereUniqueWithoutAssigneeInput[]
    createMany?: TicketAssignmentsCreateManyAssigneeInputEnvelope
    set?: TicketAssignmentsWhereUniqueInput | TicketAssignmentsWhereUniqueInput[]
    disconnect?: TicketAssignmentsWhereUniqueInput | TicketAssignmentsWhereUniqueInput[]
    delete?: TicketAssignmentsWhereUniqueInput | TicketAssignmentsWhereUniqueInput[]
    connect?: TicketAssignmentsWhereUniqueInput | TicketAssignmentsWhereUniqueInput[]
    update?: TicketAssignmentsUpdateWithWhereUniqueWithoutAssigneeInput | TicketAssignmentsUpdateWithWhereUniqueWithoutAssigneeInput[]
    updateMany?: TicketAssignmentsUpdateManyWithWhereWithoutAssigneeInput | TicketAssignmentsUpdateManyWithWhereWithoutAssigneeInput[]
    deleteMany?: TicketAssignmentsScalarWhereInput | TicketAssignmentsScalarWhereInput[]
  }

  export type TicketAssignmentsUncheckedUpdateManyWithoutAssignedByNestedInput = {
    create?: XOR<TicketAssignmentsCreateWithoutAssignedByInput, TicketAssignmentsUncheckedCreateWithoutAssignedByInput> | TicketAssignmentsCreateWithoutAssignedByInput[] | TicketAssignmentsUncheckedCreateWithoutAssignedByInput[]
    connectOrCreate?: TicketAssignmentsCreateOrConnectWithoutAssignedByInput | TicketAssignmentsCreateOrConnectWithoutAssignedByInput[]
    upsert?: TicketAssignmentsUpsertWithWhereUniqueWithoutAssignedByInput | TicketAssignmentsUpsertWithWhereUniqueWithoutAssignedByInput[]
    createMany?: TicketAssignmentsCreateManyAssignedByInputEnvelope
    set?: TicketAssignmentsWhereUniqueInput | TicketAssignmentsWhereUniqueInput[]
    disconnect?: TicketAssignmentsWhereUniqueInput | TicketAssignmentsWhereUniqueInput[]
    delete?: TicketAssignmentsWhereUniqueInput | TicketAssignmentsWhereUniqueInput[]
    connect?: TicketAssignmentsWhereUniqueInput | TicketAssignmentsWhereUniqueInput[]
    update?: TicketAssignmentsUpdateWithWhereUniqueWithoutAssignedByInput | TicketAssignmentsUpdateWithWhereUniqueWithoutAssignedByInput[]
    updateMany?: TicketAssignmentsUpdateManyWithWhereWithoutAssignedByInput | TicketAssignmentsUpdateManyWithWhereWithoutAssignedByInput[]
    deleteMany?: TicketAssignmentsScalarWhereInput | TicketAssignmentsScalarWhereInput[]
  }

  export type UsersOnGroupUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UsersOnGroupCreateWithoutUserInput, UsersOnGroupUncheckedCreateWithoutUserInput> | UsersOnGroupCreateWithoutUserInput[] | UsersOnGroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsersOnGroupCreateOrConnectWithoutUserInput | UsersOnGroupCreateOrConnectWithoutUserInput[]
    upsert?: UsersOnGroupUpsertWithWhereUniqueWithoutUserInput | UsersOnGroupUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UsersOnGroupCreateManyUserInputEnvelope
    set?: UsersOnGroupWhereUniqueInput | UsersOnGroupWhereUniqueInput[]
    disconnect?: UsersOnGroupWhereUniqueInput | UsersOnGroupWhereUniqueInput[]
    delete?: UsersOnGroupWhereUniqueInput | UsersOnGroupWhereUniqueInput[]
    connect?: UsersOnGroupWhereUniqueInput | UsersOnGroupWhereUniqueInput[]
    update?: UsersOnGroupUpdateWithWhereUniqueWithoutUserInput | UsersOnGroupUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UsersOnGroupUpdateManyWithWhereWithoutUserInput | UsersOnGroupUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UsersOnGroupScalarWhereInput | UsersOnGroupScalarWhereInput[]
  }

  export type ProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type TicketNotesCreateNestedManyWithoutTicketInput = {
    create?: XOR<TicketNotesCreateWithoutTicketInput, TicketNotesUncheckedCreateWithoutTicketInput> | TicketNotesCreateWithoutTicketInput[] | TicketNotesUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketNotesCreateOrConnectWithoutTicketInput | TicketNotesCreateOrConnectWithoutTicketInput[]
    createMany?: TicketNotesCreateManyTicketInputEnvelope
    connect?: TicketNotesWhereUniqueInput | TicketNotesWhereUniqueInput[]
  }

  export type OrganizationCreateNestedOneWithoutTicketInput = {
    create?: XOR<OrganizationCreateWithoutTicketInput, OrganizationUncheckedCreateWithoutTicketInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutTicketInput
    connect?: OrganizationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedTicketsInput = {
    create?: XOR<UserCreateWithoutCreatedTicketsInput, UserUncheckedCreateWithoutCreatedTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedTicketsInput
    connect?: UserWhereUniqueInput
  }

  export type GroupCreateNestedOneWithoutTicketInput = {
    create?: XOR<GroupCreateWithoutTicketInput, GroupUncheckedCreateWithoutTicketInput>
    connectOrCreate?: GroupCreateOrConnectWithoutTicketInput
    connect?: GroupWhereUniqueInput
  }

  export type PriorityCreateNestedOneWithoutTicketInput = {
    create?: XOR<PriorityCreateWithoutTicketInput, PriorityUncheckedCreateWithoutTicketInput>
    connectOrCreate?: PriorityCreateOrConnectWithoutTicketInput
    connect?: PriorityWhereUniqueInput
  }

  export type StatusCreateNestedOneWithoutTicketInput = {
    create?: XOR<StatusCreateWithoutTicketInput, StatusUncheckedCreateWithoutTicketInput>
    connectOrCreate?: StatusCreateOrConnectWithoutTicketInput
    connect?: StatusWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutTicketInput = {
    create?: XOR<CategoryCreateWithoutTicketInput, CategoryUncheckedCreateWithoutTicketInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutTicketInput
    connect?: CategoryWhereUniqueInput
  }

  export type TicketAssignmentsCreateNestedManyWithoutTicketInput = {
    create?: XOR<TicketAssignmentsCreateWithoutTicketInput, TicketAssignmentsUncheckedCreateWithoutTicketInput> | TicketAssignmentsCreateWithoutTicketInput[] | TicketAssignmentsUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketAssignmentsCreateOrConnectWithoutTicketInput | TicketAssignmentsCreateOrConnectWithoutTicketInput[]
    createMany?: TicketAssignmentsCreateManyTicketInputEnvelope
    connect?: TicketAssignmentsWhereUniqueInput | TicketAssignmentsWhereUniqueInput[]
  }

  export type TagsOnTicketCreateNestedManyWithoutTicketInput = {
    create?: XOR<TagsOnTicketCreateWithoutTicketInput, TagsOnTicketUncheckedCreateWithoutTicketInput> | TagsOnTicketCreateWithoutTicketInput[] | TagsOnTicketUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TagsOnTicketCreateOrConnectWithoutTicketInput | TagsOnTicketCreateOrConnectWithoutTicketInput[]
    createMany?: TagsOnTicketCreateManyTicketInputEnvelope
    connect?: TagsOnTicketWhereUniqueInput | TagsOnTicketWhereUniqueInput[]
  }

  export type TicketNotesUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<TicketNotesCreateWithoutTicketInput, TicketNotesUncheckedCreateWithoutTicketInput> | TicketNotesCreateWithoutTicketInput[] | TicketNotesUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketNotesCreateOrConnectWithoutTicketInput | TicketNotesCreateOrConnectWithoutTicketInput[]
    createMany?: TicketNotesCreateManyTicketInputEnvelope
    connect?: TicketNotesWhereUniqueInput | TicketNotesWhereUniqueInput[]
  }

  export type TicketAssignmentsUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<TicketAssignmentsCreateWithoutTicketInput, TicketAssignmentsUncheckedCreateWithoutTicketInput> | TicketAssignmentsCreateWithoutTicketInput[] | TicketAssignmentsUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketAssignmentsCreateOrConnectWithoutTicketInput | TicketAssignmentsCreateOrConnectWithoutTicketInput[]
    createMany?: TicketAssignmentsCreateManyTicketInputEnvelope
    connect?: TicketAssignmentsWhereUniqueInput | TicketAssignmentsWhereUniqueInput[]
  }

  export type TagsOnTicketUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<TagsOnTicketCreateWithoutTicketInput, TagsOnTicketUncheckedCreateWithoutTicketInput> | TagsOnTicketCreateWithoutTicketInput[] | TagsOnTicketUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TagsOnTicketCreateOrConnectWithoutTicketInput | TagsOnTicketCreateOrConnectWithoutTicketInput[]
    createMany?: TagsOnTicketCreateManyTicketInputEnvelope
    connect?: TagsOnTicketWhereUniqueInput | TagsOnTicketWhereUniqueInput[]
  }

  export type TicketNotesUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TicketNotesCreateWithoutTicketInput, TicketNotesUncheckedCreateWithoutTicketInput> | TicketNotesCreateWithoutTicketInput[] | TicketNotesUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketNotesCreateOrConnectWithoutTicketInput | TicketNotesCreateOrConnectWithoutTicketInput[]
    upsert?: TicketNotesUpsertWithWhereUniqueWithoutTicketInput | TicketNotesUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TicketNotesCreateManyTicketInputEnvelope
    set?: TicketNotesWhereUniqueInput | TicketNotesWhereUniqueInput[]
    disconnect?: TicketNotesWhereUniqueInput | TicketNotesWhereUniqueInput[]
    delete?: TicketNotesWhereUniqueInput | TicketNotesWhereUniqueInput[]
    connect?: TicketNotesWhereUniqueInput | TicketNotesWhereUniqueInput[]
    update?: TicketNotesUpdateWithWhereUniqueWithoutTicketInput | TicketNotesUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TicketNotesUpdateManyWithWhereWithoutTicketInput | TicketNotesUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TicketNotesScalarWhereInput | TicketNotesScalarWhereInput[]
  }

  export type OrganizationUpdateOneRequiredWithoutTicketNestedInput = {
    create?: XOR<OrganizationCreateWithoutTicketInput, OrganizationUncheckedCreateWithoutTicketInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutTicketInput
    upsert?: OrganizationUpsertWithoutTicketInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutTicketInput, OrganizationUpdateWithoutTicketInput>, OrganizationUncheckedUpdateWithoutTicketInput>
  }

  export type UserUpdateOneRequiredWithoutCreatedTicketsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedTicketsInput, UserUncheckedCreateWithoutCreatedTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedTicketsInput
    upsert?: UserUpsertWithoutCreatedTicketsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedTicketsInput, UserUpdateWithoutCreatedTicketsInput>, UserUncheckedUpdateWithoutCreatedTicketsInput>
  }

  export type GroupUpdateOneWithoutTicketNestedInput = {
    create?: XOR<GroupCreateWithoutTicketInput, GroupUncheckedCreateWithoutTicketInput>
    connectOrCreate?: GroupCreateOrConnectWithoutTicketInput
    upsert?: GroupUpsertWithoutTicketInput
    disconnect?: GroupWhereInput | boolean
    delete?: GroupWhereInput | boolean
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutTicketInput, GroupUpdateWithoutTicketInput>, GroupUncheckedUpdateWithoutTicketInput>
  }

  export type PriorityUpdateOneRequiredWithoutTicketNestedInput = {
    create?: XOR<PriorityCreateWithoutTicketInput, PriorityUncheckedCreateWithoutTicketInput>
    connectOrCreate?: PriorityCreateOrConnectWithoutTicketInput
    upsert?: PriorityUpsertWithoutTicketInput
    connect?: PriorityWhereUniqueInput
    update?: XOR<XOR<PriorityUpdateToOneWithWhereWithoutTicketInput, PriorityUpdateWithoutTicketInput>, PriorityUncheckedUpdateWithoutTicketInput>
  }

  export type StatusUpdateOneRequiredWithoutTicketNestedInput = {
    create?: XOR<StatusCreateWithoutTicketInput, StatusUncheckedCreateWithoutTicketInput>
    connectOrCreate?: StatusCreateOrConnectWithoutTicketInput
    upsert?: StatusUpsertWithoutTicketInput
    connect?: StatusWhereUniqueInput
    update?: XOR<XOR<StatusUpdateToOneWithWhereWithoutTicketInput, StatusUpdateWithoutTicketInput>, StatusUncheckedUpdateWithoutTicketInput>
  }

  export type CategoryUpdateOneWithoutTicketNestedInput = {
    create?: XOR<CategoryCreateWithoutTicketInput, CategoryUncheckedCreateWithoutTicketInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutTicketInput
    upsert?: CategoryUpsertWithoutTicketInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutTicketInput, CategoryUpdateWithoutTicketInput>, CategoryUncheckedUpdateWithoutTicketInput>
  }

  export type TicketAssignmentsUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TicketAssignmentsCreateWithoutTicketInput, TicketAssignmentsUncheckedCreateWithoutTicketInput> | TicketAssignmentsCreateWithoutTicketInput[] | TicketAssignmentsUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketAssignmentsCreateOrConnectWithoutTicketInput | TicketAssignmentsCreateOrConnectWithoutTicketInput[]
    upsert?: TicketAssignmentsUpsertWithWhereUniqueWithoutTicketInput | TicketAssignmentsUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TicketAssignmentsCreateManyTicketInputEnvelope
    set?: TicketAssignmentsWhereUniqueInput | TicketAssignmentsWhereUniqueInput[]
    disconnect?: TicketAssignmentsWhereUniqueInput | TicketAssignmentsWhereUniqueInput[]
    delete?: TicketAssignmentsWhereUniqueInput | TicketAssignmentsWhereUniqueInput[]
    connect?: TicketAssignmentsWhereUniqueInput | TicketAssignmentsWhereUniqueInput[]
    update?: TicketAssignmentsUpdateWithWhereUniqueWithoutTicketInput | TicketAssignmentsUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TicketAssignmentsUpdateManyWithWhereWithoutTicketInput | TicketAssignmentsUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TicketAssignmentsScalarWhereInput | TicketAssignmentsScalarWhereInput[]
  }

  export type TagsOnTicketUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TagsOnTicketCreateWithoutTicketInput, TagsOnTicketUncheckedCreateWithoutTicketInput> | TagsOnTicketCreateWithoutTicketInput[] | TagsOnTicketUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TagsOnTicketCreateOrConnectWithoutTicketInput | TagsOnTicketCreateOrConnectWithoutTicketInput[]
    upsert?: TagsOnTicketUpsertWithWhereUniqueWithoutTicketInput | TagsOnTicketUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TagsOnTicketCreateManyTicketInputEnvelope
    set?: TagsOnTicketWhereUniqueInput | TagsOnTicketWhereUniqueInput[]
    disconnect?: TagsOnTicketWhereUniqueInput | TagsOnTicketWhereUniqueInput[]
    delete?: TagsOnTicketWhereUniqueInput | TagsOnTicketWhereUniqueInput[]
    connect?: TagsOnTicketWhereUniqueInput | TagsOnTicketWhereUniqueInput[]
    update?: TagsOnTicketUpdateWithWhereUniqueWithoutTicketInput | TagsOnTicketUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TagsOnTicketUpdateManyWithWhereWithoutTicketInput | TagsOnTicketUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TagsOnTicketScalarWhereInput | TagsOnTicketScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TicketNotesUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TicketNotesCreateWithoutTicketInput, TicketNotesUncheckedCreateWithoutTicketInput> | TicketNotesCreateWithoutTicketInput[] | TicketNotesUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketNotesCreateOrConnectWithoutTicketInput | TicketNotesCreateOrConnectWithoutTicketInput[]
    upsert?: TicketNotesUpsertWithWhereUniqueWithoutTicketInput | TicketNotesUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TicketNotesCreateManyTicketInputEnvelope
    set?: TicketNotesWhereUniqueInput | TicketNotesWhereUniqueInput[]
    disconnect?: TicketNotesWhereUniqueInput | TicketNotesWhereUniqueInput[]
    delete?: TicketNotesWhereUniqueInput | TicketNotesWhereUniqueInput[]
    connect?: TicketNotesWhereUniqueInput | TicketNotesWhereUniqueInput[]
    update?: TicketNotesUpdateWithWhereUniqueWithoutTicketInput | TicketNotesUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TicketNotesUpdateManyWithWhereWithoutTicketInput | TicketNotesUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TicketNotesScalarWhereInput | TicketNotesScalarWhereInput[]
  }

  export type TicketAssignmentsUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TicketAssignmentsCreateWithoutTicketInput, TicketAssignmentsUncheckedCreateWithoutTicketInput> | TicketAssignmentsCreateWithoutTicketInput[] | TicketAssignmentsUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketAssignmentsCreateOrConnectWithoutTicketInput | TicketAssignmentsCreateOrConnectWithoutTicketInput[]
    upsert?: TicketAssignmentsUpsertWithWhereUniqueWithoutTicketInput | TicketAssignmentsUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TicketAssignmentsCreateManyTicketInputEnvelope
    set?: TicketAssignmentsWhereUniqueInput | TicketAssignmentsWhereUniqueInput[]
    disconnect?: TicketAssignmentsWhereUniqueInput | TicketAssignmentsWhereUniqueInput[]
    delete?: TicketAssignmentsWhereUniqueInput | TicketAssignmentsWhereUniqueInput[]
    connect?: TicketAssignmentsWhereUniqueInput | TicketAssignmentsWhereUniqueInput[]
    update?: TicketAssignmentsUpdateWithWhereUniqueWithoutTicketInput | TicketAssignmentsUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TicketAssignmentsUpdateManyWithWhereWithoutTicketInput | TicketAssignmentsUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TicketAssignmentsScalarWhereInput | TicketAssignmentsScalarWhereInput[]
  }

  export type TagsOnTicketUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TagsOnTicketCreateWithoutTicketInput, TagsOnTicketUncheckedCreateWithoutTicketInput> | TagsOnTicketCreateWithoutTicketInput[] | TagsOnTicketUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TagsOnTicketCreateOrConnectWithoutTicketInput | TagsOnTicketCreateOrConnectWithoutTicketInput[]
    upsert?: TagsOnTicketUpsertWithWhereUniqueWithoutTicketInput | TagsOnTicketUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TagsOnTicketCreateManyTicketInputEnvelope
    set?: TagsOnTicketWhereUniqueInput | TagsOnTicketWhereUniqueInput[]
    disconnect?: TagsOnTicketWhereUniqueInput | TagsOnTicketWhereUniqueInput[]
    delete?: TagsOnTicketWhereUniqueInput | TagsOnTicketWhereUniqueInput[]
    connect?: TagsOnTicketWhereUniqueInput | TagsOnTicketWhereUniqueInput[]
    update?: TagsOnTicketUpdateWithWhereUniqueWithoutTicketInput | TagsOnTicketUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TagsOnTicketUpdateManyWithWhereWithoutTicketInput | TagsOnTicketUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TagsOnTicketScalarWhereInput | TagsOnTicketScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTicketNotesInput = {
    create?: XOR<UserCreateWithoutTicketNotesInput, UserUncheckedCreateWithoutTicketNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTicketNotesInput
    connect?: UserWhereUniqueInput
  }

  export type TicketCreateNestedOneWithoutNotesInput = {
    create?: XOR<TicketCreateWithoutNotesInput, TicketUncheckedCreateWithoutNotesInput>
    connectOrCreate?: TicketCreateOrConnectWithoutNotesInput
    connect?: TicketWhereUniqueInput
  }

  export type EnumNoteTypeFieldUpdateOperationsInput = {
    set?: $Enums.NoteType
  }

  export type UserUpdateOneRequiredWithoutTicketNotesNestedInput = {
    create?: XOR<UserCreateWithoutTicketNotesInput, UserUncheckedCreateWithoutTicketNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTicketNotesInput
    upsert?: UserUpsertWithoutTicketNotesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTicketNotesInput, UserUpdateWithoutTicketNotesInput>, UserUncheckedUpdateWithoutTicketNotesInput>
  }

  export type TicketUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<TicketCreateWithoutNotesInput, TicketUncheckedCreateWithoutNotesInput>
    connectOrCreate?: TicketCreateOrConnectWithoutNotesInput
    upsert?: TicketUpsertWithoutNotesInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutNotesInput, TicketUpdateWithoutNotesInput>, TicketUncheckedUpdateWithoutNotesInput>
  }

  export type TicketCreateNestedOneWithoutTagsInput = {
    create?: XOR<TicketCreateWithoutTagsInput, TicketUncheckedCreateWithoutTagsInput>
    connectOrCreate?: TicketCreateOrConnectWithoutTagsInput
    connect?: TicketWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutTicketsInput = {
    create?: XOR<TagCreateWithoutTicketsInput, TagUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: TagCreateOrConnectWithoutTicketsInput
    connect?: TagWhereUniqueInput
  }

  export type TicketUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<TicketCreateWithoutTagsInput, TicketUncheckedCreateWithoutTagsInput>
    connectOrCreate?: TicketCreateOrConnectWithoutTagsInput
    upsert?: TicketUpsertWithoutTagsInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutTagsInput, TicketUpdateWithoutTagsInput>, TicketUncheckedUpdateWithoutTagsInput>
  }

  export type TagUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<TagCreateWithoutTicketsInput, TagUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: TagCreateOrConnectWithoutTicketsInput
    upsert?: TagUpsertWithoutTicketsInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutTicketsInput, TagUpdateWithoutTicketsInput>, TagUncheckedUpdateWithoutTicketsInput>
  }

  export type TicketCreateNestedOneWithoutAssigneesInput = {
    create?: XOR<TicketCreateWithoutAssigneesInput, TicketUncheckedCreateWithoutAssigneesInput>
    connectOrCreate?: TicketCreateOrConnectWithoutAssigneesInput
    connect?: TicketWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssignedTicketsInput = {
    create?: XOR<UserCreateWithoutAssignedTicketsInput, UserUncheckedCreateWithoutAssignedTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedTicketsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssignedByTicketsInput = {
    create?: XOR<UserCreateWithoutAssignedByTicketsInput, UserUncheckedCreateWithoutAssignedByTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedByTicketsInput
    connect?: UserWhereUniqueInput
  }

  export type TicketUpdateOneRequiredWithoutAssigneesNestedInput = {
    create?: XOR<TicketCreateWithoutAssigneesInput, TicketUncheckedCreateWithoutAssigneesInput>
    connectOrCreate?: TicketCreateOrConnectWithoutAssigneesInput
    upsert?: TicketUpsertWithoutAssigneesInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutAssigneesInput, TicketUpdateWithoutAssigneesInput>, TicketUncheckedUpdateWithoutAssigneesInput>
  }

  export type UserUpdateOneRequiredWithoutAssignedTicketsNestedInput = {
    create?: XOR<UserCreateWithoutAssignedTicketsInput, UserUncheckedCreateWithoutAssignedTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedTicketsInput
    upsert?: UserUpsertWithoutAssignedTicketsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignedTicketsInput, UserUpdateWithoutAssignedTicketsInput>, UserUncheckedUpdateWithoutAssignedTicketsInput>
  }

  export type UserUpdateOneRequiredWithoutAssignedByTicketsNestedInput = {
    create?: XOR<UserCreateWithoutAssignedByTicketsInput, UserUncheckedCreateWithoutAssignedByTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedByTicketsInput
    upsert?: UserUpsertWithoutAssignedByTicketsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignedByTicketsInput, UserUpdateWithoutAssignedByTicketsInput>, UserUncheckedUpdateWithoutAssignedByTicketsInput>
  }

  export type TagsOnTicketCreateNestedManyWithoutTagInput = {
    create?: XOR<TagsOnTicketCreateWithoutTagInput, TagsOnTicketUncheckedCreateWithoutTagInput> | TagsOnTicketCreateWithoutTagInput[] | TagsOnTicketUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TagsOnTicketCreateOrConnectWithoutTagInput | TagsOnTicketCreateOrConnectWithoutTagInput[]
    createMany?: TagsOnTicketCreateManyTagInputEnvelope
    connect?: TagsOnTicketWhereUniqueInput | TagsOnTicketWhereUniqueInput[]
  }

  export type TagsOnTicketUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<TagsOnTicketCreateWithoutTagInput, TagsOnTicketUncheckedCreateWithoutTagInput> | TagsOnTicketCreateWithoutTagInput[] | TagsOnTicketUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TagsOnTicketCreateOrConnectWithoutTagInput | TagsOnTicketCreateOrConnectWithoutTagInput[]
    createMany?: TagsOnTicketCreateManyTagInputEnvelope
    connect?: TagsOnTicketWhereUniqueInput | TagsOnTicketWhereUniqueInput[]
  }

  export type TagsOnTicketUpdateManyWithoutTagNestedInput = {
    create?: XOR<TagsOnTicketCreateWithoutTagInput, TagsOnTicketUncheckedCreateWithoutTagInput> | TagsOnTicketCreateWithoutTagInput[] | TagsOnTicketUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TagsOnTicketCreateOrConnectWithoutTagInput | TagsOnTicketCreateOrConnectWithoutTagInput[]
    upsert?: TagsOnTicketUpsertWithWhereUniqueWithoutTagInput | TagsOnTicketUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: TagsOnTicketCreateManyTagInputEnvelope
    set?: TagsOnTicketWhereUniqueInput | TagsOnTicketWhereUniqueInput[]
    disconnect?: TagsOnTicketWhereUniqueInput | TagsOnTicketWhereUniqueInput[]
    delete?: TagsOnTicketWhereUniqueInput | TagsOnTicketWhereUniqueInput[]
    connect?: TagsOnTicketWhereUniqueInput | TagsOnTicketWhereUniqueInput[]
    update?: TagsOnTicketUpdateWithWhereUniqueWithoutTagInput | TagsOnTicketUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: TagsOnTicketUpdateManyWithWhereWithoutTagInput | TagsOnTicketUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: TagsOnTicketScalarWhereInput | TagsOnTicketScalarWhereInput[]
  }

  export type TagsOnTicketUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<TagsOnTicketCreateWithoutTagInput, TagsOnTicketUncheckedCreateWithoutTagInput> | TagsOnTicketCreateWithoutTagInput[] | TagsOnTicketUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TagsOnTicketCreateOrConnectWithoutTagInput | TagsOnTicketCreateOrConnectWithoutTagInput[]
    upsert?: TagsOnTicketUpsertWithWhereUniqueWithoutTagInput | TagsOnTicketUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: TagsOnTicketCreateManyTagInputEnvelope
    set?: TagsOnTicketWhereUniqueInput | TagsOnTicketWhereUniqueInput[]
    disconnect?: TagsOnTicketWhereUniqueInput | TagsOnTicketWhereUniqueInput[]
    delete?: TagsOnTicketWhereUniqueInput | TagsOnTicketWhereUniqueInput[]
    connect?: TagsOnTicketWhereUniqueInput | TagsOnTicketWhereUniqueInput[]
    update?: TagsOnTicketUpdateWithWhereUniqueWithoutTagInput | TagsOnTicketUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: TagsOnTicketUpdateManyWithWhereWithoutTagInput | TagsOnTicketUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: TagsOnTicketScalarWhereInput | TagsOnTicketScalarWhereInput[]
  }

  export type TicketCreateNestedManyWithoutStatusInput = {
    create?: XOR<TicketCreateWithoutStatusInput, TicketUncheckedCreateWithoutStatusInput> | TicketCreateWithoutStatusInput[] | TicketUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutStatusInput | TicketCreateOrConnectWithoutStatusInput[]
    createMany?: TicketCreateManyStatusInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutStatusInput = {
    create?: XOR<TicketCreateWithoutStatusInput, TicketUncheckedCreateWithoutStatusInput> | TicketCreateWithoutStatusInput[] | TicketUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutStatusInput | TicketCreateOrConnectWithoutStatusInput[]
    createMany?: TicketCreateManyStatusInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketUpdateManyWithoutStatusNestedInput = {
    create?: XOR<TicketCreateWithoutStatusInput, TicketUncheckedCreateWithoutStatusInput> | TicketCreateWithoutStatusInput[] | TicketUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutStatusInput | TicketCreateOrConnectWithoutStatusInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutStatusInput | TicketUpsertWithWhereUniqueWithoutStatusInput[]
    createMany?: TicketCreateManyStatusInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutStatusInput | TicketUpdateWithWhereUniqueWithoutStatusInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutStatusInput | TicketUpdateManyWithWhereWithoutStatusInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutStatusNestedInput = {
    create?: XOR<TicketCreateWithoutStatusInput, TicketUncheckedCreateWithoutStatusInput> | TicketCreateWithoutStatusInput[] | TicketUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutStatusInput | TicketCreateOrConnectWithoutStatusInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutStatusInput | TicketUpsertWithWhereUniqueWithoutStatusInput[]
    createMany?: TicketCreateManyStatusInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutStatusInput | TicketUpdateWithWhereUniqueWithoutStatusInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutStatusInput | TicketUpdateManyWithWhereWithoutStatusInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type UsersOnGroupCreateNestedManyWithoutGroupInput = {
    create?: XOR<UsersOnGroupCreateWithoutGroupInput, UsersOnGroupUncheckedCreateWithoutGroupInput> | UsersOnGroupCreateWithoutGroupInput[] | UsersOnGroupUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: UsersOnGroupCreateOrConnectWithoutGroupInput | UsersOnGroupCreateOrConnectWithoutGroupInput[]
    createMany?: UsersOnGroupCreateManyGroupInputEnvelope
    connect?: UsersOnGroupWhereUniqueInput | UsersOnGroupWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutGroupInput = {
    create?: XOR<TicketCreateWithoutGroupInput, TicketUncheckedCreateWithoutGroupInput> | TicketCreateWithoutGroupInput[] | TicketUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutGroupInput | TicketCreateOrConnectWithoutGroupInput[]
    createMany?: TicketCreateManyGroupInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type UsersOnGroupUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<UsersOnGroupCreateWithoutGroupInput, UsersOnGroupUncheckedCreateWithoutGroupInput> | UsersOnGroupCreateWithoutGroupInput[] | UsersOnGroupUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: UsersOnGroupCreateOrConnectWithoutGroupInput | UsersOnGroupCreateOrConnectWithoutGroupInput[]
    createMany?: UsersOnGroupCreateManyGroupInputEnvelope
    connect?: UsersOnGroupWhereUniqueInput | UsersOnGroupWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<TicketCreateWithoutGroupInput, TicketUncheckedCreateWithoutGroupInput> | TicketCreateWithoutGroupInput[] | TicketUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutGroupInput | TicketCreateOrConnectWithoutGroupInput[]
    createMany?: TicketCreateManyGroupInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type UsersOnGroupUpdateManyWithoutGroupNestedInput = {
    create?: XOR<UsersOnGroupCreateWithoutGroupInput, UsersOnGroupUncheckedCreateWithoutGroupInput> | UsersOnGroupCreateWithoutGroupInput[] | UsersOnGroupUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: UsersOnGroupCreateOrConnectWithoutGroupInput | UsersOnGroupCreateOrConnectWithoutGroupInput[]
    upsert?: UsersOnGroupUpsertWithWhereUniqueWithoutGroupInput | UsersOnGroupUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: UsersOnGroupCreateManyGroupInputEnvelope
    set?: UsersOnGroupWhereUniqueInput | UsersOnGroupWhereUniqueInput[]
    disconnect?: UsersOnGroupWhereUniqueInput | UsersOnGroupWhereUniqueInput[]
    delete?: UsersOnGroupWhereUniqueInput | UsersOnGroupWhereUniqueInput[]
    connect?: UsersOnGroupWhereUniqueInput | UsersOnGroupWhereUniqueInput[]
    update?: UsersOnGroupUpdateWithWhereUniqueWithoutGroupInput | UsersOnGroupUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: UsersOnGroupUpdateManyWithWhereWithoutGroupInput | UsersOnGroupUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: UsersOnGroupScalarWhereInput | UsersOnGroupScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutGroupNestedInput = {
    create?: XOR<TicketCreateWithoutGroupInput, TicketUncheckedCreateWithoutGroupInput> | TicketCreateWithoutGroupInput[] | TicketUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutGroupInput | TicketCreateOrConnectWithoutGroupInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutGroupInput | TicketUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: TicketCreateManyGroupInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutGroupInput | TicketUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutGroupInput | TicketUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type UsersOnGroupUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<UsersOnGroupCreateWithoutGroupInput, UsersOnGroupUncheckedCreateWithoutGroupInput> | UsersOnGroupCreateWithoutGroupInput[] | UsersOnGroupUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: UsersOnGroupCreateOrConnectWithoutGroupInput | UsersOnGroupCreateOrConnectWithoutGroupInput[]
    upsert?: UsersOnGroupUpsertWithWhereUniqueWithoutGroupInput | UsersOnGroupUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: UsersOnGroupCreateManyGroupInputEnvelope
    set?: UsersOnGroupWhereUniqueInput | UsersOnGroupWhereUniqueInput[]
    disconnect?: UsersOnGroupWhereUniqueInput | UsersOnGroupWhereUniqueInput[]
    delete?: UsersOnGroupWhereUniqueInput | UsersOnGroupWhereUniqueInput[]
    connect?: UsersOnGroupWhereUniqueInput | UsersOnGroupWhereUniqueInput[]
    update?: UsersOnGroupUpdateWithWhereUniqueWithoutGroupInput | UsersOnGroupUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: UsersOnGroupUpdateManyWithWhereWithoutGroupInput | UsersOnGroupUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: UsersOnGroupScalarWhereInput | UsersOnGroupScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<TicketCreateWithoutGroupInput, TicketUncheckedCreateWithoutGroupInput> | TicketCreateWithoutGroupInput[] | TicketUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutGroupInput | TicketCreateOrConnectWithoutGroupInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutGroupInput | TicketUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: TicketCreateManyGroupInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutGroupInput | TicketUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutGroupInput | TicketUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUsersOnGroupInput = {
    create?: XOR<UserCreateWithoutUsersOnGroupInput, UserUncheckedCreateWithoutUsersOnGroupInput>
    connectOrCreate?: UserCreateOrConnectWithoutUsersOnGroupInput
    connect?: UserWhereUniqueInput
  }

  export type GroupCreateNestedOneWithoutUsersInput = {
    create?: XOR<GroupCreateWithoutUsersInput, GroupUncheckedCreateWithoutUsersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutUsersInput
    connect?: GroupWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUsersOnGroupNestedInput = {
    create?: XOR<UserCreateWithoutUsersOnGroupInput, UserUncheckedCreateWithoutUsersOnGroupInput>
    connectOrCreate?: UserCreateOrConnectWithoutUsersOnGroupInput
    upsert?: UserUpsertWithoutUsersOnGroupInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUsersOnGroupInput, UserUpdateWithoutUsersOnGroupInput>, UserUncheckedUpdateWithoutUsersOnGroupInput>
  }

  export type GroupUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<GroupCreateWithoutUsersInput, GroupUncheckedCreateWithoutUsersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutUsersInput
    upsert?: GroupUpsertWithoutUsersInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutUsersInput, GroupUpdateWithoutUsersInput>, GroupUncheckedUpdateWithoutUsersInput>
  }

  export type TicketCreateNestedManyWithoutPriorityInput = {
    create?: XOR<TicketCreateWithoutPriorityInput, TicketUncheckedCreateWithoutPriorityInput> | TicketCreateWithoutPriorityInput[] | TicketUncheckedCreateWithoutPriorityInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutPriorityInput | TicketCreateOrConnectWithoutPriorityInput[]
    createMany?: TicketCreateManyPriorityInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutPriorityInput = {
    create?: XOR<TicketCreateWithoutPriorityInput, TicketUncheckedCreateWithoutPriorityInput> | TicketCreateWithoutPriorityInput[] | TicketUncheckedCreateWithoutPriorityInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutPriorityInput | TicketCreateOrConnectWithoutPriorityInput[]
    createMany?: TicketCreateManyPriorityInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketUpdateManyWithoutPriorityNestedInput = {
    create?: XOR<TicketCreateWithoutPriorityInput, TicketUncheckedCreateWithoutPriorityInput> | TicketCreateWithoutPriorityInput[] | TicketUncheckedCreateWithoutPriorityInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutPriorityInput | TicketCreateOrConnectWithoutPriorityInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutPriorityInput | TicketUpsertWithWhereUniqueWithoutPriorityInput[]
    createMany?: TicketCreateManyPriorityInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutPriorityInput | TicketUpdateWithWhereUniqueWithoutPriorityInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutPriorityInput | TicketUpdateManyWithWhereWithoutPriorityInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutPriorityNestedInput = {
    create?: XOR<TicketCreateWithoutPriorityInput, TicketUncheckedCreateWithoutPriorityInput> | TicketCreateWithoutPriorityInput[] | TicketUncheckedCreateWithoutPriorityInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutPriorityInput | TicketCreateOrConnectWithoutPriorityInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutPriorityInput | TicketUpsertWithWhereUniqueWithoutPriorityInput[]
    createMany?: TicketCreateManyPriorityInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutPriorityInput | TicketUpdateWithWhereUniqueWithoutPriorityInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutPriorityInput | TicketUpdateManyWithWhereWithoutPriorityInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TicketCreateWithoutCategoryInput, TicketUncheckedCreateWithoutCategoryInput> | TicketCreateWithoutCategoryInput[] | TicketUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCategoryInput | TicketCreateOrConnectWithoutCategoryInput[]
    createMany?: TicketCreateManyCategoryInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TicketCreateWithoutCategoryInput, TicketUncheckedCreateWithoutCategoryInput> | TicketCreateWithoutCategoryInput[] | TicketUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCategoryInput | TicketCreateOrConnectWithoutCategoryInput[]
    createMany?: TicketCreateManyCategoryInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TicketCreateWithoutCategoryInput, TicketUncheckedCreateWithoutCategoryInput> | TicketCreateWithoutCategoryInput[] | TicketUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCategoryInput | TicketCreateOrConnectWithoutCategoryInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutCategoryInput | TicketUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TicketCreateManyCategoryInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutCategoryInput | TicketUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutCategoryInput | TicketUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TicketCreateWithoutCategoryInput, TicketUncheckedCreateWithoutCategoryInput> | TicketCreateWithoutCategoryInput[] | TicketUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCategoryInput | TicketCreateOrConnectWithoutCategoryInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutCategoryInput | TicketUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TicketCreateManyCategoryInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutCategoryInput | TicketUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutCategoryInput | TicketUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumNoteTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NoteType | EnumNoteTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NoteType[] | ListEnumNoteTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NoteType[] | ListEnumNoteTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNoteTypeFilter<$PrismaModel> | $Enums.NoteType
  }

  export type NestedEnumNoteTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NoteType | EnumNoteTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NoteType[] | ListEnumNoteTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NoteType[] | ListEnumNoteTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNoteTypeWithAggregatesFilter<$PrismaModel> | $Enums.NoteType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNoteTypeFilter<$PrismaModel>
    _max?: NestedEnumNoteTypeFilter<$PrismaModel>
  }

  export type TicketCreateWithoutOrganizationInput = {
    subject: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    notes?: TicketNotesCreateNestedManyWithoutTicketInput
    CreatedBy: UserCreateNestedOneWithoutCreatedTicketsInput
    Group?: GroupCreateNestedOneWithoutTicketInput
    Priority: PriorityCreateNestedOneWithoutTicketInput
    Status: StatusCreateNestedOneWithoutTicketInput
    Category?: CategoryCreateNestedOneWithoutTicketInput
    Assignees?: TicketAssignmentsCreateNestedManyWithoutTicketInput
    Tags?: TagsOnTicketCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutOrganizationInput = {
    id?: number
    subject: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    createdById: number
    groupId?: number | null
    priorityId: number
    statusId: number
    categoryId?: number | null
    notes?: TicketNotesUncheckedCreateNestedManyWithoutTicketInput
    Assignees?: TicketAssignmentsUncheckedCreateNestedManyWithoutTicketInput
    Tags?: TagsOnTicketUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutOrganizationInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutOrganizationInput, TicketUncheckedCreateWithoutOrganizationInput>
  }

  export type TicketCreateManyOrganizationInputEnvelope = {
    data: TicketCreateManyOrganizationInput | TicketCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type MembershipCreateWithoutOrganizationInput = {
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrganizationsInput
  }

  export type MembershipUncheckedCreateWithoutOrganizationInput = {
    userId: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type MembershipCreateOrConnectWithoutOrganizationInput = {
    where: MembershipWhereUniqueInput
    create: XOR<MembershipCreateWithoutOrganizationInput, MembershipUncheckedCreateWithoutOrganizationInput>
  }

  export type MembershipCreateManyOrganizationInputEnvelope = {
    data: MembershipCreateManyOrganizationInput | MembershipCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type TicketUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutOrganizationInput, TicketUncheckedUpdateWithoutOrganizationInput>
    create: XOR<TicketCreateWithoutOrganizationInput, TicketUncheckedCreateWithoutOrganizationInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutOrganizationInput, TicketUncheckedUpdateWithoutOrganizationInput>
  }

  export type TicketUpdateManyWithWhereWithoutOrganizationInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type TicketScalarWhereInput = {
    AND?: TicketScalarWhereInput | TicketScalarWhereInput[]
    OR?: TicketScalarWhereInput[]
    NOT?: TicketScalarWhereInput | TicketScalarWhereInput[]
    id?: IntFilter<"Ticket"> | number
    subject?: StringFilter<"Ticket"> | string
    content?: StringNullableFilter<"Ticket"> | string | null
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    organizationId?: IntFilter<"Ticket"> | number
    createdById?: IntFilter<"Ticket"> | number
    groupId?: IntNullableFilter<"Ticket"> | number | null
    priorityId?: IntFilter<"Ticket"> | number
    statusId?: IntFilter<"Ticket"> | number
    categoryId?: IntNullableFilter<"Ticket"> | number | null
  }

  export type MembershipUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: MembershipWhereUniqueInput
    update: XOR<MembershipUpdateWithoutOrganizationInput, MembershipUncheckedUpdateWithoutOrganizationInput>
    create: XOR<MembershipCreateWithoutOrganizationInput, MembershipUncheckedCreateWithoutOrganizationInput>
  }

  export type MembershipUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: MembershipWhereUniqueInput
    data: XOR<MembershipUpdateWithoutOrganizationInput, MembershipUncheckedUpdateWithoutOrganizationInput>
  }

  export type MembershipUpdateManyWithWhereWithoutOrganizationInput = {
    where: MembershipScalarWhereInput
    data: XOR<MembershipUpdateManyMutationInput, MembershipUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type MembershipScalarWhereInput = {
    AND?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
    OR?: MembershipScalarWhereInput[]
    NOT?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
    organizationId?: IntFilter<"Membership"> | number
    userId?: IntFilter<"Membership"> | number
    createdAt?: DateTimeFilter<"Membership"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Membership"> | Date | string | null
    updatedAt?: DateTimeFilter<"Membership"> | Date | string
  }

  export type OrganizationCreateWithoutMembershipInput = {
    name: string
    logo?: string | null
    description?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    Ticket?: TicketCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutMembershipInput = {
    id?: number
    name: string
    logo?: string | null
    description?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    Ticket?: TicketUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutMembershipInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutMembershipInput, OrganizationUncheckedCreateWithoutMembershipInput>
  }

  export type UserCreateWithoutOrganizationsInput = {
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    TicketNotes?: TicketNotesCreateNestedManyWithoutCreatorInput
    createdTickets?: TicketCreateNestedManyWithoutCreatedByInput
    assignedTickets?: TicketAssignmentsCreateNestedManyWithoutAssigneeInput
    assignedByTickets?: TicketAssignmentsCreateNestedManyWithoutAssignedByInput
    UsersOnGroup?: UsersOnGroupCreateNestedManyWithoutUserInput
    Profile?: ProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrganizationsInput = {
    id?: number
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    TicketNotes?: TicketNotesUncheckedCreateNestedManyWithoutCreatorInput
    createdTickets?: TicketUncheckedCreateNestedManyWithoutCreatedByInput
    assignedTickets?: TicketAssignmentsUncheckedCreateNestedManyWithoutAssigneeInput
    assignedByTickets?: TicketAssignmentsUncheckedCreateNestedManyWithoutAssignedByInput
    UsersOnGroup?: UsersOnGroupUncheckedCreateNestedManyWithoutUserInput
    Profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrganizationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrganizationsInput, UserUncheckedCreateWithoutOrganizationsInput>
  }

  export type OrganizationUpsertWithoutMembershipInput = {
    update: XOR<OrganizationUpdateWithoutMembershipInput, OrganizationUncheckedUpdateWithoutMembershipInput>
    create: XOR<OrganizationCreateWithoutMembershipInput, OrganizationUncheckedCreateWithoutMembershipInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutMembershipInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutMembershipInput, OrganizationUncheckedUpdateWithoutMembershipInput>
  }

  export type OrganizationUpdateWithoutMembershipInput = {
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Ticket?: TicketUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutMembershipInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Ticket?: TicketUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type UserUpsertWithoutOrganizationsInput = {
    update: XOR<UserUpdateWithoutOrganizationsInput, UserUncheckedUpdateWithoutOrganizationsInput>
    create: XOR<UserCreateWithoutOrganizationsInput, UserUncheckedCreateWithoutOrganizationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrganizationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrganizationsInput, UserUncheckedUpdateWithoutOrganizationsInput>
  }

  export type UserUpdateWithoutOrganizationsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TicketNotes?: TicketNotesUpdateManyWithoutCreatorNestedInput
    createdTickets?: TicketUpdateManyWithoutCreatedByNestedInput
    assignedTickets?: TicketAssignmentsUpdateManyWithoutAssigneeNestedInput
    assignedByTickets?: TicketAssignmentsUpdateManyWithoutAssignedByNestedInput
    UsersOnGroup?: UsersOnGroupUpdateManyWithoutUserNestedInput
    Profile?: ProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrganizationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TicketNotes?: TicketNotesUncheckedUpdateManyWithoutCreatorNestedInput
    createdTickets?: TicketUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedTickets?: TicketAssignmentsUncheckedUpdateManyWithoutAssigneeNestedInput
    assignedByTickets?: TicketAssignmentsUncheckedUpdateManyWithoutAssignedByNestedInput
    UsersOnGroup?: UsersOnGroupUncheckedUpdateManyWithoutUserNestedInput
    Profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type TicketNotesCreateWithoutCreatorInput = {
    content: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    NoteType?: $Enums.NoteType
    Ticket: TicketCreateNestedOneWithoutNotesInput
  }

  export type TicketNotesUncheckedCreateWithoutCreatorInput = {
    id?: number
    content: string
    ticketId: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    NoteType?: $Enums.NoteType
  }

  export type TicketNotesCreateOrConnectWithoutCreatorInput = {
    where: TicketNotesWhereUniqueInput
    create: XOR<TicketNotesCreateWithoutCreatorInput, TicketNotesUncheckedCreateWithoutCreatorInput>
  }

  export type TicketNotesCreateManyCreatorInputEnvelope = {
    data: TicketNotesCreateManyCreatorInput | TicketNotesCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutCreatedByInput = {
    subject: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    notes?: TicketNotesCreateNestedManyWithoutTicketInput
    Organization: OrganizationCreateNestedOneWithoutTicketInput
    Group?: GroupCreateNestedOneWithoutTicketInput
    Priority: PriorityCreateNestedOneWithoutTicketInput
    Status: StatusCreateNestedOneWithoutTicketInput
    Category?: CategoryCreateNestedOneWithoutTicketInput
    Assignees?: TicketAssignmentsCreateNestedManyWithoutTicketInput
    Tags?: TagsOnTicketCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutCreatedByInput = {
    id?: number
    subject: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    organizationId: number
    groupId?: number | null
    priorityId: number
    statusId: number
    categoryId?: number | null
    notes?: TicketNotesUncheckedCreateNestedManyWithoutTicketInput
    Assignees?: TicketAssignmentsUncheckedCreateNestedManyWithoutTicketInput
    Tags?: TagsOnTicketUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutCreatedByInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutCreatedByInput, TicketUncheckedCreateWithoutCreatedByInput>
  }

  export type TicketCreateManyCreatedByInputEnvelope = {
    data: TicketCreateManyCreatedByInput | TicketCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type MembershipCreateWithoutUserInput = {
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutMembershipInput
  }

  export type MembershipUncheckedCreateWithoutUserInput = {
    organizationId: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type MembershipCreateOrConnectWithoutUserInput = {
    where: MembershipWhereUniqueInput
    create: XOR<MembershipCreateWithoutUserInput, MembershipUncheckedCreateWithoutUserInput>
  }

  export type MembershipCreateManyUserInputEnvelope = {
    data: MembershipCreateManyUserInput | MembershipCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TicketAssignmentsCreateWithoutAssigneeInput = {
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    Ticket: TicketCreateNestedOneWithoutAssigneesInput
    AssignedBy: UserCreateNestedOneWithoutAssignedByTicketsInput
  }

  export type TicketAssignmentsUncheckedCreateWithoutAssigneeInput = {
    ticketId: number
    assignerId: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type TicketAssignmentsCreateOrConnectWithoutAssigneeInput = {
    where: TicketAssignmentsWhereUniqueInput
    create: XOR<TicketAssignmentsCreateWithoutAssigneeInput, TicketAssignmentsUncheckedCreateWithoutAssigneeInput>
  }

  export type TicketAssignmentsCreateManyAssigneeInputEnvelope = {
    data: TicketAssignmentsCreateManyAssigneeInput | TicketAssignmentsCreateManyAssigneeInput[]
    skipDuplicates?: boolean
  }

  export type TicketAssignmentsCreateWithoutAssignedByInput = {
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    Ticket: TicketCreateNestedOneWithoutAssigneesInput
    Assignee: UserCreateNestedOneWithoutAssignedTicketsInput
  }

  export type TicketAssignmentsUncheckedCreateWithoutAssignedByInput = {
    ticketId: number
    assigneeId: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type TicketAssignmentsCreateOrConnectWithoutAssignedByInput = {
    where: TicketAssignmentsWhereUniqueInput
    create: XOR<TicketAssignmentsCreateWithoutAssignedByInput, TicketAssignmentsUncheckedCreateWithoutAssignedByInput>
  }

  export type TicketAssignmentsCreateManyAssignedByInputEnvelope = {
    data: TicketAssignmentsCreateManyAssignedByInput | TicketAssignmentsCreateManyAssignedByInput[]
    skipDuplicates?: boolean
  }

  export type UsersOnGroupCreateWithoutUserInput = {
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    Group: GroupCreateNestedOneWithoutUsersInput
  }

  export type UsersOnGroupUncheckedCreateWithoutUserInput = {
    groupId: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type UsersOnGroupCreateOrConnectWithoutUserInput = {
    where: UsersOnGroupWhereUniqueInput
    create: XOR<UsersOnGroupCreateWithoutUserInput, UsersOnGroupUncheckedCreateWithoutUserInput>
  }

  export type UsersOnGroupCreateManyUserInputEnvelope = {
    data: UsersOnGroupCreateManyUserInput | UsersOnGroupCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProfileCreateWithoutUserInput = {
    first_name: string
    last_name: string
    photo?: string | null
    phone?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    id?: number
    first_name: string
    last_name: string
    photo?: string | null
    phone?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type TicketNotesUpsertWithWhereUniqueWithoutCreatorInput = {
    where: TicketNotesWhereUniqueInput
    update: XOR<TicketNotesUpdateWithoutCreatorInput, TicketNotesUncheckedUpdateWithoutCreatorInput>
    create: XOR<TicketNotesCreateWithoutCreatorInput, TicketNotesUncheckedCreateWithoutCreatorInput>
  }

  export type TicketNotesUpdateWithWhereUniqueWithoutCreatorInput = {
    where: TicketNotesWhereUniqueInput
    data: XOR<TicketNotesUpdateWithoutCreatorInput, TicketNotesUncheckedUpdateWithoutCreatorInput>
  }

  export type TicketNotesUpdateManyWithWhereWithoutCreatorInput = {
    where: TicketNotesScalarWhereInput
    data: XOR<TicketNotesUpdateManyMutationInput, TicketNotesUncheckedUpdateManyWithoutCreatorInput>
  }

  export type TicketNotesScalarWhereInput = {
    AND?: TicketNotesScalarWhereInput | TicketNotesScalarWhereInput[]
    OR?: TicketNotesScalarWhereInput[]
    NOT?: TicketNotesScalarWhereInput | TicketNotesScalarWhereInput[]
    id?: IntFilter<"TicketNotes"> | number
    content?: StringFilter<"TicketNotes"> | string
    ticketId?: IntFilter<"TicketNotes"> | number
    creatorId?: IntFilter<"TicketNotes"> | number
    createdAt?: DateTimeFilter<"TicketNotes"> | Date | string
    deletedAt?: DateTimeNullableFilter<"TicketNotes"> | Date | string | null
    updatedAt?: DateTimeFilter<"TicketNotes"> | Date | string
    NoteType?: EnumNoteTypeFilter<"TicketNotes"> | $Enums.NoteType
  }

  export type TicketUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutCreatedByInput, TicketUncheckedUpdateWithoutCreatedByInput>
    create: XOR<TicketCreateWithoutCreatedByInput, TicketUncheckedCreateWithoutCreatedByInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutCreatedByInput, TicketUncheckedUpdateWithoutCreatedByInput>
  }

  export type TicketUpdateManyWithWhereWithoutCreatedByInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type MembershipUpsertWithWhereUniqueWithoutUserInput = {
    where: MembershipWhereUniqueInput
    update: XOR<MembershipUpdateWithoutUserInput, MembershipUncheckedUpdateWithoutUserInput>
    create: XOR<MembershipCreateWithoutUserInput, MembershipUncheckedCreateWithoutUserInput>
  }

  export type MembershipUpdateWithWhereUniqueWithoutUserInput = {
    where: MembershipWhereUniqueInput
    data: XOR<MembershipUpdateWithoutUserInput, MembershipUncheckedUpdateWithoutUserInput>
  }

  export type MembershipUpdateManyWithWhereWithoutUserInput = {
    where: MembershipScalarWhereInput
    data: XOR<MembershipUpdateManyMutationInput, MembershipUncheckedUpdateManyWithoutUserInput>
  }

  export type TicketAssignmentsUpsertWithWhereUniqueWithoutAssigneeInput = {
    where: TicketAssignmentsWhereUniqueInput
    update: XOR<TicketAssignmentsUpdateWithoutAssigneeInput, TicketAssignmentsUncheckedUpdateWithoutAssigneeInput>
    create: XOR<TicketAssignmentsCreateWithoutAssigneeInput, TicketAssignmentsUncheckedCreateWithoutAssigneeInput>
  }

  export type TicketAssignmentsUpdateWithWhereUniqueWithoutAssigneeInput = {
    where: TicketAssignmentsWhereUniqueInput
    data: XOR<TicketAssignmentsUpdateWithoutAssigneeInput, TicketAssignmentsUncheckedUpdateWithoutAssigneeInput>
  }

  export type TicketAssignmentsUpdateManyWithWhereWithoutAssigneeInput = {
    where: TicketAssignmentsScalarWhereInput
    data: XOR<TicketAssignmentsUpdateManyMutationInput, TicketAssignmentsUncheckedUpdateManyWithoutAssigneeInput>
  }

  export type TicketAssignmentsScalarWhereInput = {
    AND?: TicketAssignmentsScalarWhereInput | TicketAssignmentsScalarWhereInput[]
    OR?: TicketAssignmentsScalarWhereInput[]
    NOT?: TicketAssignmentsScalarWhereInput | TicketAssignmentsScalarWhereInput[]
    ticketId?: IntFilter<"TicketAssignments"> | number
    assigneeId?: IntFilter<"TicketAssignments"> | number
    assignerId?: IntFilter<"TicketAssignments"> | number
    createdAt?: DateTimeFilter<"TicketAssignments"> | Date | string
    deletedAt?: DateTimeNullableFilter<"TicketAssignments"> | Date | string | null
    updatedAt?: DateTimeFilter<"TicketAssignments"> | Date | string
  }

  export type TicketAssignmentsUpsertWithWhereUniqueWithoutAssignedByInput = {
    where: TicketAssignmentsWhereUniqueInput
    update: XOR<TicketAssignmentsUpdateWithoutAssignedByInput, TicketAssignmentsUncheckedUpdateWithoutAssignedByInput>
    create: XOR<TicketAssignmentsCreateWithoutAssignedByInput, TicketAssignmentsUncheckedCreateWithoutAssignedByInput>
  }

  export type TicketAssignmentsUpdateWithWhereUniqueWithoutAssignedByInput = {
    where: TicketAssignmentsWhereUniqueInput
    data: XOR<TicketAssignmentsUpdateWithoutAssignedByInput, TicketAssignmentsUncheckedUpdateWithoutAssignedByInput>
  }

  export type TicketAssignmentsUpdateManyWithWhereWithoutAssignedByInput = {
    where: TicketAssignmentsScalarWhereInput
    data: XOR<TicketAssignmentsUpdateManyMutationInput, TicketAssignmentsUncheckedUpdateManyWithoutAssignedByInput>
  }

  export type UsersOnGroupUpsertWithWhereUniqueWithoutUserInput = {
    where: UsersOnGroupWhereUniqueInput
    update: XOR<UsersOnGroupUpdateWithoutUserInput, UsersOnGroupUncheckedUpdateWithoutUserInput>
    create: XOR<UsersOnGroupCreateWithoutUserInput, UsersOnGroupUncheckedCreateWithoutUserInput>
  }

  export type UsersOnGroupUpdateWithWhereUniqueWithoutUserInput = {
    where: UsersOnGroupWhereUniqueInput
    data: XOR<UsersOnGroupUpdateWithoutUserInput, UsersOnGroupUncheckedUpdateWithoutUserInput>
  }

  export type UsersOnGroupUpdateManyWithWhereWithoutUserInput = {
    where: UsersOnGroupScalarWhereInput
    data: XOR<UsersOnGroupUpdateManyMutationInput, UsersOnGroupUncheckedUpdateManyWithoutUserInput>
  }

  export type UsersOnGroupScalarWhereInput = {
    AND?: UsersOnGroupScalarWhereInput | UsersOnGroupScalarWhereInput[]
    OR?: UsersOnGroupScalarWhereInput[]
    NOT?: UsersOnGroupScalarWhereInput | UsersOnGroupScalarWhereInput[]
    userId?: IntFilter<"UsersOnGroup"> | number
    groupId?: IntFilter<"UsersOnGroup"> | number
    createdAt?: DateTimeFilter<"UsersOnGroup"> | Date | string
    deletedAt?: DateTimeNullableFilter<"UsersOnGroup"> | Date | string | null
    updatedAt?: DateTimeFilter<"UsersOnGroup"> | Date | string
  }

  export type ProfileUpsertWithoutUserInput = {
    update: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProfileUpdateWithoutUserInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutProfileInput = {
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    TicketNotes?: TicketNotesCreateNestedManyWithoutCreatorInput
    createdTickets?: TicketCreateNestedManyWithoutCreatedByInput
    organizations?: MembershipCreateNestedManyWithoutUserInput
    assignedTickets?: TicketAssignmentsCreateNestedManyWithoutAssigneeInput
    assignedByTickets?: TicketAssignmentsCreateNestedManyWithoutAssignedByInput
    UsersOnGroup?: UsersOnGroupCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: number
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    TicketNotes?: TicketNotesUncheckedCreateNestedManyWithoutCreatorInput
    createdTickets?: TicketUncheckedCreateNestedManyWithoutCreatedByInput
    organizations?: MembershipUncheckedCreateNestedManyWithoutUserInput
    assignedTickets?: TicketAssignmentsUncheckedCreateNestedManyWithoutAssigneeInput
    assignedByTickets?: TicketAssignmentsUncheckedCreateNestedManyWithoutAssignedByInput
    UsersOnGroup?: UsersOnGroupUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TicketNotes?: TicketNotesUpdateManyWithoutCreatorNestedInput
    createdTickets?: TicketUpdateManyWithoutCreatedByNestedInput
    organizations?: MembershipUpdateManyWithoutUserNestedInput
    assignedTickets?: TicketAssignmentsUpdateManyWithoutAssigneeNestedInput
    assignedByTickets?: TicketAssignmentsUpdateManyWithoutAssignedByNestedInput
    UsersOnGroup?: UsersOnGroupUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TicketNotes?: TicketNotesUncheckedUpdateManyWithoutCreatorNestedInput
    createdTickets?: TicketUncheckedUpdateManyWithoutCreatedByNestedInput
    organizations?: MembershipUncheckedUpdateManyWithoutUserNestedInput
    assignedTickets?: TicketAssignmentsUncheckedUpdateManyWithoutAssigneeNestedInput
    assignedByTickets?: TicketAssignmentsUncheckedUpdateManyWithoutAssignedByNestedInput
    UsersOnGroup?: UsersOnGroupUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TicketNotesCreateWithoutTicketInput = {
    content: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    NoteType?: $Enums.NoteType
    Creator: UserCreateNestedOneWithoutTicketNotesInput
  }

  export type TicketNotesUncheckedCreateWithoutTicketInput = {
    id?: number
    content: string
    creatorId: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    NoteType?: $Enums.NoteType
  }

  export type TicketNotesCreateOrConnectWithoutTicketInput = {
    where: TicketNotesWhereUniqueInput
    create: XOR<TicketNotesCreateWithoutTicketInput, TicketNotesUncheckedCreateWithoutTicketInput>
  }

  export type TicketNotesCreateManyTicketInputEnvelope = {
    data: TicketNotesCreateManyTicketInput | TicketNotesCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationCreateWithoutTicketInput = {
    name: string
    logo?: string | null
    description?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    Membership?: MembershipCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutTicketInput = {
    id?: number
    name: string
    logo?: string | null
    description?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    Membership?: MembershipUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutTicketInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutTicketInput, OrganizationUncheckedCreateWithoutTicketInput>
  }

  export type UserCreateWithoutCreatedTicketsInput = {
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    TicketNotes?: TicketNotesCreateNestedManyWithoutCreatorInput
    organizations?: MembershipCreateNestedManyWithoutUserInput
    assignedTickets?: TicketAssignmentsCreateNestedManyWithoutAssigneeInput
    assignedByTickets?: TicketAssignmentsCreateNestedManyWithoutAssignedByInput
    UsersOnGroup?: UsersOnGroupCreateNestedManyWithoutUserInput
    Profile?: ProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreatedTicketsInput = {
    id?: number
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    TicketNotes?: TicketNotesUncheckedCreateNestedManyWithoutCreatorInput
    organizations?: MembershipUncheckedCreateNestedManyWithoutUserInput
    assignedTickets?: TicketAssignmentsUncheckedCreateNestedManyWithoutAssigneeInput
    assignedByTickets?: TicketAssignmentsUncheckedCreateNestedManyWithoutAssignedByInput
    UsersOnGroup?: UsersOnGroupUncheckedCreateNestedManyWithoutUserInput
    Profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedTicketsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedTicketsInput, UserUncheckedCreateWithoutCreatedTicketsInput>
  }

  export type GroupCreateWithoutTicketInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: UsersOnGroupCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutTicketInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: UsersOnGroupUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutTicketInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutTicketInput, GroupUncheckedCreateWithoutTicketInput>
  }

  export type PriorityCreateWithoutTicketInput = {
    name: string
    created_at?: Date | string
  }

  export type PriorityUncheckedCreateWithoutTicketInput = {
    id?: number
    name: string
    created_at?: Date | string
  }

  export type PriorityCreateOrConnectWithoutTicketInput = {
    where: PriorityWhereUniqueInput
    create: XOR<PriorityCreateWithoutTicketInput, PriorityUncheckedCreateWithoutTicketInput>
  }

  export type StatusCreateWithoutTicketInput = {
    name: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type StatusUncheckedCreateWithoutTicketInput = {
    id?: number
    name: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type StatusCreateOrConnectWithoutTicketInput = {
    where: StatusWhereUniqueInput
    create: XOR<StatusCreateWithoutTicketInput, StatusUncheckedCreateWithoutTicketInput>
  }

  export type CategoryCreateWithoutTicketInput = {
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type CategoryUncheckedCreateWithoutTicketInput = {
    id?: number
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type CategoryCreateOrConnectWithoutTicketInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutTicketInput, CategoryUncheckedCreateWithoutTicketInput>
  }

  export type TicketAssignmentsCreateWithoutTicketInput = {
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    Assignee: UserCreateNestedOneWithoutAssignedTicketsInput
    AssignedBy: UserCreateNestedOneWithoutAssignedByTicketsInput
  }

  export type TicketAssignmentsUncheckedCreateWithoutTicketInput = {
    assigneeId: number
    assignerId: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type TicketAssignmentsCreateOrConnectWithoutTicketInput = {
    where: TicketAssignmentsWhereUniqueInput
    create: XOR<TicketAssignmentsCreateWithoutTicketInput, TicketAssignmentsUncheckedCreateWithoutTicketInput>
  }

  export type TicketAssignmentsCreateManyTicketInputEnvelope = {
    data: TicketAssignmentsCreateManyTicketInput | TicketAssignmentsCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type TagsOnTicketCreateWithoutTicketInput = {
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    Tag: TagCreateNestedOneWithoutTicketsInput
  }

  export type TagsOnTicketUncheckedCreateWithoutTicketInput = {
    tagId: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type TagsOnTicketCreateOrConnectWithoutTicketInput = {
    where: TagsOnTicketWhereUniqueInput
    create: XOR<TagsOnTicketCreateWithoutTicketInput, TagsOnTicketUncheckedCreateWithoutTicketInput>
  }

  export type TagsOnTicketCreateManyTicketInputEnvelope = {
    data: TagsOnTicketCreateManyTicketInput | TagsOnTicketCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type TicketNotesUpsertWithWhereUniqueWithoutTicketInput = {
    where: TicketNotesWhereUniqueInput
    update: XOR<TicketNotesUpdateWithoutTicketInput, TicketNotesUncheckedUpdateWithoutTicketInput>
    create: XOR<TicketNotesCreateWithoutTicketInput, TicketNotesUncheckedCreateWithoutTicketInput>
  }

  export type TicketNotesUpdateWithWhereUniqueWithoutTicketInput = {
    where: TicketNotesWhereUniqueInput
    data: XOR<TicketNotesUpdateWithoutTicketInput, TicketNotesUncheckedUpdateWithoutTicketInput>
  }

  export type TicketNotesUpdateManyWithWhereWithoutTicketInput = {
    where: TicketNotesScalarWhereInput
    data: XOR<TicketNotesUpdateManyMutationInput, TicketNotesUncheckedUpdateManyWithoutTicketInput>
  }

  export type OrganizationUpsertWithoutTicketInput = {
    update: XOR<OrganizationUpdateWithoutTicketInput, OrganizationUncheckedUpdateWithoutTicketInput>
    create: XOR<OrganizationCreateWithoutTicketInput, OrganizationUncheckedCreateWithoutTicketInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutTicketInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutTicketInput, OrganizationUncheckedUpdateWithoutTicketInput>
  }

  export type OrganizationUpdateWithoutTicketInput = {
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Membership?: MembershipUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Membership?: MembershipUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type UserUpsertWithoutCreatedTicketsInput = {
    update: XOR<UserUpdateWithoutCreatedTicketsInput, UserUncheckedUpdateWithoutCreatedTicketsInput>
    create: XOR<UserCreateWithoutCreatedTicketsInput, UserUncheckedCreateWithoutCreatedTicketsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedTicketsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedTicketsInput, UserUncheckedUpdateWithoutCreatedTicketsInput>
  }

  export type UserUpdateWithoutCreatedTicketsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TicketNotes?: TicketNotesUpdateManyWithoutCreatorNestedInput
    organizations?: MembershipUpdateManyWithoutUserNestedInput
    assignedTickets?: TicketAssignmentsUpdateManyWithoutAssigneeNestedInput
    assignedByTickets?: TicketAssignmentsUpdateManyWithoutAssignedByNestedInput
    UsersOnGroup?: UsersOnGroupUpdateManyWithoutUserNestedInput
    Profile?: ProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TicketNotes?: TicketNotesUncheckedUpdateManyWithoutCreatorNestedInput
    organizations?: MembershipUncheckedUpdateManyWithoutUserNestedInput
    assignedTickets?: TicketAssignmentsUncheckedUpdateManyWithoutAssigneeNestedInput
    assignedByTickets?: TicketAssignmentsUncheckedUpdateManyWithoutAssignedByNestedInput
    UsersOnGroup?: UsersOnGroupUncheckedUpdateManyWithoutUserNestedInput
    Profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type GroupUpsertWithoutTicketInput = {
    update: XOR<GroupUpdateWithoutTicketInput, GroupUncheckedUpdateWithoutTicketInput>
    create: XOR<GroupCreateWithoutTicketInput, GroupUncheckedCreateWithoutTicketInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutTicketInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutTicketInput, GroupUncheckedUpdateWithoutTicketInput>
  }

  export type GroupUpdateWithoutTicketInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UsersOnGroupUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UsersOnGroupUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type PriorityUpsertWithoutTicketInput = {
    update: XOR<PriorityUpdateWithoutTicketInput, PriorityUncheckedUpdateWithoutTicketInput>
    create: XOR<PriorityCreateWithoutTicketInput, PriorityUncheckedCreateWithoutTicketInput>
    where?: PriorityWhereInput
  }

  export type PriorityUpdateToOneWithWhereWithoutTicketInput = {
    where?: PriorityWhereInput
    data: XOR<PriorityUpdateWithoutTicketInput, PriorityUncheckedUpdateWithoutTicketInput>
  }

  export type PriorityUpdateWithoutTicketInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriorityUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatusUpsertWithoutTicketInput = {
    update: XOR<StatusUpdateWithoutTicketInput, StatusUncheckedUpdateWithoutTicketInput>
    create: XOR<StatusCreateWithoutTicketInput, StatusUncheckedCreateWithoutTicketInput>
    where?: StatusWhereInput
  }

  export type StatusUpdateToOneWithWhereWithoutTicketInput = {
    where?: StatusWhereInput
    data: XOR<StatusUpdateWithoutTicketInput, StatusUncheckedUpdateWithoutTicketInput>
  }

  export type StatusUpdateWithoutTicketInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatusUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUpsertWithoutTicketInput = {
    update: XOR<CategoryUpdateWithoutTicketInput, CategoryUncheckedUpdateWithoutTicketInput>
    create: XOR<CategoryCreateWithoutTicketInput, CategoryUncheckedCreateWithoutTicketInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutTicketInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutTicketInput, CategoryUncheckedUpdateWithoutTicketInput>
  }

  export type CategoryUpdateWithoutTicketInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CategoryUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketAssignmentsUpsertWithWhereUniqueWithoutTicketInput = {
    where: TicketAssignmentsWhereUniqueInput
    update: XOR<TicketAssignmentsUpdateWithoutTicketInput, TicketAssignmentsUncheckedUpdateWithoutTicketInput>
    create: XOR<TicketAssignmentsCreateWithoutTicketInput, TicketAssignmentsUncheckedCreateWithoutTicketInput>
  }

  export type TicketAssignmentsUpdateWithWhereUniqueWithoutTicketInput = {
    where: TicketAssignmentsWhereUniqueInput
    data: XOR<TicketAssignmentsUpdateWithoutTicketInput, TicketAssignmentsUncheckedUpdateWithoutTicketInput>
  }

  export type TicketAssignmentsUpdateManyWithWhereWithoutTicketInput = {
    where: TicketAssignmentsScalarWhereInput
    data: XOR<TicketAssignmentsUpdateManyMutationInput, TicketAssignmentsUncheckedUpdateManyWithoutTicketInput>
  }

  export type TagsOnTicketUpsertWithWhereUniqueWithoutTicketInput = {
    where: TagsOnTicketWhereUniqueInput
    update: XOR<TagsOnTicketUpdateWithoutTicketInput, TagsOnTicketUncheckedUpdateWithoutTicketInput>
    create: XOR<TagsOnTicketCreateWithoutTicketInput, TagsOnTicketUncheckedCreateWithoutTicketInput>
  }

  export type TagsOnTicketUpdateWithWhereUniqueWithoutTicketInput = {
    where: TagsOnTicketWhereUniqueInput
    data: XOR<TagsOnTicketUpdateWithoutTicketInput, TagsOnTicketUncheckedUpdateWithoutTicketInput>
  }

  export type TagsOnTicketUpdateManyWithWhereWithoutTicketInput = {
    where: TagsOnTicketScalarWhereInput
    data: XOR<TagsOnTicketUpdateManyMutationInput, TagsOnTicketUncheckedUpdateManyWithoutTicketInput>
  }

  export type TagsOnTicketScalarWhereInput = {
    AND?: TagsOnTicketScalarWhereInput | TagsOnTicketScalarWhereInput[]
    OR?: TagsOnTicketScalarWhereInput[]
    NOT?: TagsOnTicketScalarWhereInput | TagsOnTicketScalarWhereInput[]
    ticketId?: IntFilter<"TagsOnTicket"> | number
    tagId?: IntFilter<"TagsOnTicket"> | number
    createdAt?: DateTimeFilter<"TagsOnTicket"> | Date | string
    deletedAt?: DateTimeNullableFilter<"TagsOnTicket"> | Date | string | null
    updatedAt?: DateTimeFilter<"TagsOnTicket"> | Date | string
  }

  export type UserCreateWithoutTicketNotesInput = {
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    createdTickets?: TicketCreateNestedManyWithoutCreatedByInput
    organizations?: MembershipCreateNestedManyWithoutUserInput
    assignedTickets?: TicketAssignmentsCreateNestedManyWithoutAssigneeInput
    assignedByTickets?: TicketAssignmentsCreateNestedManyWithoutAssignedByInput
    UsersOnGroup?: UsersOnGroupCreateNestedManyWithoutUserInput
    Profile?: ProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTicketNotesInput = {
    id?: number
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    createdTickets?: TicketUncheckedCreateNestedManyWithoutCreatedByInput
    organizations?: MembershipUncheckedCreateNestedManyWithoutUserInput
    assignedTickets?: TicketAssignmentsUncheckedCreateNestedManyWithoutAssigneeInput
    assignedByTickets?: TicketAssignmentsUncheckedCreateNestedManyWithoutAssignedByInput
    UsersOnGroup?: UsersOnGroupUncheckedCreateNestedManyWithoutUserInput
    Profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTicketNotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTicketNotesInput, UserUncheckedCreateWithoutTicketNotesInput>
  }

  export type TicketCreateWithoutNotesInput = {
    subject: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Organization: OrganizationCreateNestedOneWithoutTicketInput
    CreatedBy: UserCreateNestedOneWithoutCreatedTicketsInput
    Group?: GroupCreateNestedOneWithoutTicketInput
    Priority: PriorityCreateNestedOneWithoutTicketInput
    Status: StatusCreateNestedOneWithoutTicketInput
    Category?: CategoryCreateNestedOneWithoutTicketInput
    Assignees?: TicketAssignmentsCreateNestedManyWithoutTicketInput
    Tags?: TagsOnTicketCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutNotesInput = {
    id?: number
    subject: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    organizationId: number
    createdById: number
    groupId?: number | null
    priorityId: number
    statusId: number
    categoryId?: number | null
    Assignees?: TicketAssignmentsUncheckedCreateNestedManyWithoutTicketInput
    Tags?: TagsOnTicketUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutNotesInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutNotesInput, TicketUncheckedCreateWithoutNotesInput>
  }

  export type UserUpsertWithoutTicketNotesInput = {
    update: XOR<UserUpdateWithoutTicketNotesInput, UserUncheckedUpdateWithoutTicketNotesInput>
    create: XOR<UserCreateWithoutTicketNotesInput, UserUncheckedCreateWithoutTicketNotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTicketNotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTicketNotesInput, UserUncheckedUpdateWithoutTicketNotesInput>
  }

  export type UserUpdateWithoutTicketNotesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdTickets?: TicketUpdateManyWithoutCreatedByNestedInput
    organizations?: MembershipUpdateManyWithoutUserNestedInput
    assignedTickets?: TicketAssignmentsUpdateManyWithoutAssigneeNestedInput
    assignedByTickets?: TicketAssignmentsUpdateManyWithoutAssignedByNestedInput
    UsersOnGroup?: UsersOnGroupUpdateManyWithoutUserNestedInput
    Profile?: ProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTicketNotesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdTickets?: TicketUncheckedUpdateManyWithoutCreatedByNestedInput
    organizations?: MembershipUncheckedUpdateManyWithoutUserNestedInput
    assignedTickets?: TicketAssignmentsUncheckedUpdateManyWithoutAssigneeNestedInput
    assignedByTickets?: TicketAssignmentsUncheckedUpdateManyWithoutAssignedByNestedInput
    UsersOnGroup?: UsersOnGroupUncheckedUpdateManyWithoutUserNestedInput
    Profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type TicketUpsertWithoutNotesInput = {
    update: XOR<TicketUpdateWithoutNotesInput, TicketUncheckedUpdateWithoutNotesInput>
    create: XOR<TicketCreateWithoutNotesInput, TicketUncheckedCreateWithoutNotesInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutNotesInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutNotesInput, TicketUncheckedUpdateWithoutNotesInput>
  }

  export type TicketUpdateWithoutNotesInput = {
    subject?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Organization?: OrganizationUpdateOneRequiredWithoutTicketNestedInput
    CreatedBy?: UserUpdateOneRequiredWithoutCreatedTicketsNestedInput
    Group?: GroupUpdateOneWithoutTicketNestedInput
    Priority?: PriorityUpdateOneRequiredWithoutTicketNestedInput
    Status?: StatusUpdateOneRequiredWithoutTicketNestedInput
    Category?: CategoryUpdateOneWithoutTicketNestedInput
    Assignees?: TicketAssignmentsUpdateManyWithoutTicketNestedInput
    Tags?: TagsOnTicketUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutNotesInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizationId?: IntFieldUpdateOperationsInput | number
    createdById?: IntFieldUpdateOperationsInput | number
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    priorityId?: IntFieldUpdateOperationsInput | number
    statusId?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    Assignees?: TicketAssignmentsUncheckedUpdateManyWithoutTicketNestedInput
    Tags?: TagsOnTicketUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketCreateWithoutTagsInput = {
    subject: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    notes?: TicketNotesCreateNestedManyWithoutTicketInput
    Organization: OrganizationCreateNestedOneWithoutTicketInput
    CreatedBy: UserCreateNestedOneWithoutCreatedTicketsInput
    Group?: GroupCreateNestedOneWithoutTicketInput
    Priority: PriorityCreateNestedOneWithoutTicketInput
    Status: StatusCreateNestedOneWithoutTicketInput
    Category?: CategoryCreateNestedOneWithoutTicketInput
    Assignees?: TicketAssignmentsCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutTagsInput = {
    id?: number
    subject: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    organizationId: number
    createdById: number
    groupId?: number | null
    priorityId: number
    statusId: number
    categoryId?: number | null
    notes?: TicketNotesUncheckedCreateNestedManyWithoutTicketInput
    Assignees?: TicketAssignmentsUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutTagsInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutTagsInput, TicketUncheckedCreateWithoutTagsInput>
  }

  export type TagCreateWithoutTicketsInput = {
    name: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type TagUncheckedCreateWithoutTicketsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type TagCreateOrConnectWithoutTicketsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutTicketsInput, TagUncheckedCreateWithoutTicketsInput>
  }

  export type TicketUpsertWithoutTagsInput = {
    update: XOR<TicketUpdateWithoutTagsInput, TicketUncheckedUpdateWithoutTagsInput>
    create: XOR<TicketCreateWithoutTagsInput, TicketUncheckedCreateWithoutTagsInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutTagsInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutTagsInput, TicketUncheckedUpdateWithoutTagsInput>
  }

  export type TicketUpdateWithoutTagsInput = {
    subject?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: TicketNotesUpdateManyWithoutTicketNestedInput
    Organization?: OrganizationUpdateOneRequiredWithoutTicketNestedInput
    CreatedBy?: UserUpdateOneRequiredWithoutCreatedTicketsNestedInput
    Group?: GroupUpdateOneWithoutTicketNestedInput
    Priority?: PriorityUpdateOneRequiredWithoutTicketNestedInput
    Status?: StatusUpdateOneRequiredWithoutTicketNestedInput
    Category?: CategoryUpdateOneWithoutTicketNestedInput
    Assignees?: TicketAssignmentsUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizationId?: IntFieldUpdateOperationsInput | number
    createdById?: IntFieldUpdateOperationsInput | number
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    priorityId?: IntFieldUpdateOperationsInput | number
    statusId?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: TicketNotesUncheckedUpdateManyWithoutTicketNestedInput
    Assignees?: TicketAssignmentsUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TagUpsertWithoutTicketsInput = {
    update: XOR<TagUpdateWithoutTicketsInput, TagUncheckedUpdateWithoutTicketsInput>
    create: XOR<TagCreateWithoutTicketsInput, TagUncheckedCreateWithoutTicketsInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutTicketsInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutTicketsInput, TagUncheckedUpdateWithoutTicketsInput>
  }

  export type TagUpdateWithoutTicketsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateWithoutTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateWithoutAssigneesInput = {
    subject: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    notes?: TicketNotesCreateNestedManyWithoutTicketInput
    Organization: OrganizationCreateNestedOneWithoutTicketInput
    CreatedBy: UserCreateNestedOneWithoutCreatedTicketsInput
    Group?: GroupCreateNestedOneWithoutTicketInput
    Priority: PriorityCreateNestedOneWithoutTicketInput
    Status: StatusCreateNestedOneWithoutTicketInput
    Category?: CategoryCreateNestedOneWithoutTicketInput
    Tags?: TagsOnTicketCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutAssigneesInput = {
    id?: number
    subject: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    organizationId: number
    createdById: number
    groupId?: number | null
    priorityId: number
    statusId: number
    categoryId?: number | null
    notes?: TicketNotesUncheckedCreateNestedManyWithoutTicketInput
    Tags?: TagsOnTicketUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutAssigneesInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutAssigneesInput, TicketUncheckedCreateWithoutAssigneesInput>
  }

  export type UserCreateWithoutAssignedTicketsInput = {
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    TicketNotes?: TicketNotesCreateNestedManyWithoutCreatorInput
    createdTickets?: TicketCreateNestedManyWithoutCreatedByInput
    organizations?: MembershipCreateNestedManyWithoutUserInput
    assignedByTickets?: TicketAssignmentsCreateNestedManyWithoutAssignedByInput
    UsersOnGroup?: UsersOnGroupCreateNestedManyWithoutUserInput
    Profile?: ProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAssignedTicketsInput = {
    id?: number
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    TicketNotes?: TicketNotesUncheckedCreateNestedManyWithoutCreatorInput
    createdTickets?: TicketUncheckedCreateNestedManyWithoutCreatedByInput
    organizations?: MembershipUncheckedCreateNestedManyWithoutUserInput
    assignedByTickets?: TicketAssignmentsUncheckedCreateNestedManyWithoutAssignedByInput
    UsersOnGroup?: UsersOnGroupUncheckedCreateNestedManyWithoutUserInput
    Profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAssignedTicketsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignedTicketsInput, UserUncheckedCreateWithoutAssignedTicketsInput>
  }

  export type UserCreateWithoutAssignedByTicketsInput = {
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    TicketNotes?: TicketNotesCreateNestedManyWithoutCreatorInput
    createdTickets?: TicketCreateNestedManyWithoutCreatedByInput
    organizations?: MembershipCreateNestedManyWithoutUserInput
    assignedTickets?: TicketAssignmentsCreateNestedManyWithoutAssigneeInput
    UsersOnGroup?: UsersOnGroupCreateNestedManyWithoutUserInput
    Profile?: ProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAssignedByTicketsInput = {
    id?: number
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    TicketNotes?: TicketNotesUncheckedCreateNestedManyWithoutCreatorInput
    createdTickets?: TicketUncheckedCreateNestedManyWithoutCreatedByInput
    organizations?: MembershipUncheckedCreateNestedManyWithoutUserInput
    assignedTickets?: TicketAssignmentsUncheckedCreateNestedManyWithoutAssigneeInput
    UsersOnGroup?: UsersOnGroupUncheckedCreateNestedManyWithoutUserInput
    Profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAssignedByTicketsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignedByTicketsInput, UserUncheckedCreateWithoutAssignedByTicketsInput>
  }

  export type TicketUpsertWithoutAssigneesInput = {
    update: XOR<TicketUpdateWithoutAssigneesInput, TicketUncheckedUpdateWithoutAssigneesInput>
    create: XOR<TicketCreateWithoutAssigneesInput, TicketUncheckedCreateWithoutAssigneesInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutAssigneesInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutAssigneesInput, TicketUncheckedUpdateWithoutAssigneesInput>
  }

  export type TicketUpdateWithoutAssigneesInput = {
    subject?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: TicketNotesUpdateManyWithoutTicketNestedInput
    Organization?: OrganizationUpdateOneRequiredWithoutTicketNestedInput
    CreatedBy?: UserUpdateOneRequiredWithoutCreatedTicketsNestedInput
    Group?: GroupUpdateOneWithoutTicketNestedInput
    Priority?: PriorityUpdateOneRequiredWithoutTicketNestedInput
    Status?: StatusUpdateOneRequiredWithoutTicketNestedInput
    Category?: CategoryUpdateOneWithoutTicketNestedInput
    Tags?: TagsOnTicketUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutAssigneesInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizationId?: IntFieldUpdateOperationsInput | number
    createdById?: IntFieldUpdateOperationsInput | number
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    priorityId?: IntFieldUpdateOperationsInput | number
    statusId?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: TicketNotesUncheckedUpdateManyWithoutTicketNestedInput
    Tags?: TagsOnTicketUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type UserUpsertWithoutAssignedTicketsInput = {
    update: XOR<UserUpdateWithoutAssignedTicketsInput, UserUncheckedUpdateWithoutAssignedTicketsInput>
    create: XOR<UserCreateWithoutAssignedTicketsInput, UserUncheckedCreateWithoutAssignedTicketsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignedTicketsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignedTicketsInput, UserUncheckedUpdateWithoutAssignedTicketsInput>
  }

  export type UserUpdateWithoutAssignedTicketsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TicketNotes?: TicketNotesUpdateManyWithoutCreatorNestedInput
    createdTickets?: TicketUpdateManyWithoutCreatedByNestedInput
    organizations?: MembershipUpdateManyWithoutUserNestedInput
    assignedByTickets?: TicketAssignmentsUpdateManyWithoutAssignedByNestedInput
    UsersOnGroup?: UsersOnGroupUpdateManyWithoutUserNestedInput
    Profile?: ProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignedTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TicketNotes?: TicketNotesUncheckedUpdateManyWithoutCreatorNestedInput
    createdTickets?: TicketUncheckedUpdateManyWithoutCreatedByNestedInput
    organizations?: MembershipUncheckedUpdateManyWithoutUserNestedInput
    assignedByTickets?: TicketAssignmentsUncheckedUpdateManyWithoutAssignedByNestedInput
    UsersOnGroup?: UsersOnGroupUncheckedUpdateManyWithoutUserNestedInput
    Profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserUpsertWithoutAssignedByTicketsInput = {
    update: XOR<UserUpdateWithoutAssignedByTicketsInput, UserUncheckedUpdateWithoutAssignedByTicketsInput>
    create: XOR<UserCreateWithoutAssignedByTicketsInput, UserUncheckedCreateWithoutAssignedByTicketsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignedByTicketsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignedByTicketsInput, UserUncheckedUpdateWithoutAssignedByTicketsInput>
  }

  export type UserUpdateWithoutAssignedByTicketsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TicketNotes?: TicketNotesUpdateManyWithoutCreatorNestedInput
    createdTickets?: TicketUpdateManyWithoutCreatedByNestedInput
    organizations?: MembershipUpdateManyWithoutUserNestedInput
    assignedTickets?: TicketAssignmentsUpdateManyWithoutAssigneeNestedInput
    UsersOnGroup?: UsersOnGroupUpdateManyWithoutUserNestedInput
    Profile?: ProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignedByTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TicketNotes?: TicketNotesUncheckedUpdateManyWithoutCreatorNestedInput
    createdTickets?: TicketUncheckedUpdateManyWithoutCreatedByNestedInput
    organizations?: MembershipUncheckedUpdateManyWithoutUserNestedInput
    assignedTickets?: TicketAssignmentsUncheckedUpdateManyWithoutAssigneeNestedInput
    UsersOnGroup?: UsersOnGroupUncheckedUpdateManyWithoutUserNestedInput
    Profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type TagsOnTicketCreateWithoutTagInput = {
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    Ticket: TicketCreateNestedOneWithoutTagsInput
  }

  export type TagsOnTicketUncheckedCreateWithoutTagInput = {
    ticketId: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type TagsOnTicketCreateOrConnectWithoutTagInput = {
    where: TagsOnTicketWhereUniqueInput
    create: XOR<TagsOnTicketCreateWithoutTagInput, TagsOnTicketUncheckedCreateWithoutTagInput>
  }

  export type TagsOnTicketCreateManyTagInputEnvelope = {
    data: TagsOnTicketCreateManyTagInput | TagsOnTicketCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type TagsOnTicketUpsertWithWhereUniqueWithoutTagInput = {
    where: TagsOnTicketWhereUniqueInput
    update: XOR<TagsOnTicketUpdateWithoutTagInput, TagsOnTicketUncheckedUpdateWithoutTagInput>
    create: XOR<TagsOnTicketCreateWithoutTagInput, TagsOnTicketUncheckedCreateWithoutTagInput>
  }

  export type TagsOnTicketUpdateWithWhereUniqueWithoutTagInput = {
    where: TagsOnTicketWhereUniqueInput
    data: XOR<TagsOnTicketUpdateWithoutTagInput, TagsOnTicketUncheckedUpdateWithoutTagInput>
  }

  export type TagsOnTicketUpdateManyWithWhereWithoutTagInput = {
    where: TagsOnTicketScalarWhereInput
    data: XOR<TagsOnTicketUpdateManyMutationInput, TagsOnTicketUncheckedUpdateManyWithoutTagInput>
  }

  export type TicketCreateWithoutStatusInput = {
    subject: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    notes?: TicketNotesCreateNestedManyWithoutTicketInput
    Organization: OrganizationCreateNestedOneWithoutTicketInput
    CreatedBy: UserCreateNestedOneWithoutCreatedTicketsInput
    Group?: GroupCreateNestedOneWithoutTicketInput
    Priority: PriorityCreateNestedOneWithoutTicketInput
    Category?: CategoryCreateNestedOneWithoutTicketInput
    Assignees?: TicketAssignmentsCreateNestedManyWithoutTicketInput
    Tags?: TagsOnTicketCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutStatusInput = {
    id?: number
    subject: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    organizationId: number
    createdById: number
    groupId?: number | null
    priorityId: number
    categoryId?: number | null
    notes?: TicketNotesUncheckedCreateNestedManyWithoutTicketInput
    Assignees?: TicketAssignmentsUncheckedCreateNestedManyWithoutTicketInput
    Tags?: TagsOnTicketUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutStatusInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutStatusInput, TicketUncheckedCreateWithoutStatusInput>
  }

  export type TicketCreateManyStatusInputEnvelope = {
    data: TicketCreateManyStatusInput | TicketCreateManyStatusInput[]
    skipDuplicates?: boolean
  }

  export type TicketUpsertWithWhereUniqueWithoutStatusInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutStatusInput, TicketUncheckedUpdateWithoutStatusInput>
    create: XOR<TicketCreateWithoutStatusInput, TicketUncheckedCreateWithoutStatusInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutStatusInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutStatusInput, TicketUncheckedUpdateWithoutStatusInput>
  }

  export type TicketUpdateManyWithWhereWithoutStatusInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutStatusInput>
  }

  export type UsersOnGroupCreateWithoutGroupInput = {
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    User: UserCreateNestedOneWithoutUsersOnGroupInput
  }

  export type UsersOnGroupUncheckedCreateWithoutGroupInput = {
    userId: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type UsersOnGroupCreateOrConnectWithoutGroupInput = {
    where: UsersOnGroupWhereUniqueInput
    create: XOR<UsersOnGroupCreateWithoutGroupInput, UsersOnGroupUncheckedCreateWithoutGroupInput>
  }

  export type UsersOnGroupCreateManyGroupInputEnvelope = {
    data: UsersOnGroupCreateManyGroupInput | UsersOnGroupCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutGroupInput = {
    subject: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    notes?: TicketNotesCreateNestedManyWithoutTicketInput
    Organization: OrganizationCreateNestedOneWithoutTicketInput
    CreatedBy: UserCreateNestedOneWithoutCreatedTicketsInput
    Priority: PriorityCreateNestedOneWithoutTicketInput
    Status: StatusCreateNestedOneWithoutTicketInput
    Category?: CategoryCreateNestedOneWithoutTicketInput
    Assignees?: TicketAssignmentsCreateNestedManyWithoutTicketInput
    Tags?: TagsOnTicketCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutGroupInput = {
    id?: number
    subject: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    organizationId: number
    createdById: number
    priorityId: number
    statusId: number
    categoryId?: number | null
    notes?: TicketNotesUncheckedCreateNestedManyWithoutTicketInput
    Assignees?: TicketAssignmentsUncheckedCreateNestedManyWithoutTicketInput
    Tags?: TagsOnTicketUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutGroupInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutGroupInput, TicketUncheckedCreateWithoutGroupInput>
  }

  export type TicketCreateManyGroupInputEnvelope = {
    data: TicketCreateManyGroupInput | TicketCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type UsersOnGroupUpsertWithWhereUniqueWithoutGroupInput = {
    where: UsersOnGroupWhereUniqueInput
    update: XOR<UsersOnGroupUpdateWithoutGroupInput, UsersOnGroupUncheckedUpdateWithoutGroupInput>
    create: XOR<UsersOnGroupCreateWithoutGroupInput, UsersOnGroupUncheckedCreateWithoutGroupInput>
  }

  export type UsersOnGroupUpdateWithWhereUniqueWithoutGroupInput = {
    where: UsersOnGroupWhereUniqueInput
    data: XOR<UsersOnGroupUpdateWithoutGroupInput, UsersOnGroupUncheckedUpdateWithoutGroupInput>
  }

  export type UsersOnGroupUpdateManyWithWhereWithoutGroupInput = {
    where: UsersOnGroupScalarWhereInput
    data: XOR<UsersOnGroupUpdateManyMutationInput, UsersOnGroupUncheckedUpdateManyWithoutGroupInput>
  }

  export type TicketUpsertWithWhereUniqueWithoutGroupInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutGroupInput, TicketUncheckedUpdateWithoutGroupInput>
    create: XOR<TicketCreateWithoutGroupInput, TicketUncheckedCreateWithoutGroupInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutGroupInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutGroupInput, TicketUncheckedUpdateWithoutGroupInput>
  }

  export type TicketUpdateManyWithWhereWithoutGroupInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutGroupInput>
  }

  export type UserCreateWithoutUsersOnGroupInput = {
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    TicketNotes?: TicketNotesCreateNestedManyWithoutCreatorInput
    createdTickets?: TicketCreateNestedManyWithoutCreatedByInput
    organizations?: MembershipCreateNestedManyWithoutUserInput
    assignedTickets?: TicketAssignmentsCreateNestedManyWithoutAssigneeInput
    assignedByTickets?: TicketAssignmentsCreateNestedManyWithoutAssignedByInput
    Profile?: ProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUsersOnGroupInput = {
    id?: number
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    TicketNotes?: TicketNotesUncheckedCreateNestedManyWithoutCreatorInput
    createdTickets?: TicketUncheckedCreateNestedManyWithoutCreatedByInput
    organizations?: MembershipUncheckedCreateNestedManyWithoutUserInput
    assignedTickets?: TicketAssignmentsUncheckedCreateNestedManyWithoutAssigneeInput
    assignedByTickets?: TicketAssignmentsUncheckedCreateNestedManyWithoutAssignedByInput
    Profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUsersOnGroupInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUsersOnGroupInput, UserUncheckedCreateWithoutUsersOnGroupInput>
  }

  export type GroupCreateWithoutUsersInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Ticket?: TicketCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Ticket?: TicketUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutUsersInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutUsersInput, GroupUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutUsersOnGroupInput = {
    update: XOR<UserUpdateWithoutUsersOnGroupInput, UserUncheckedUpdateWithoutUsersOnGroupInput>
    create: XOR<UserCreateWithoutUsersOnGroupInput, UserUncheckedCreateWithoutUsersOnGroupInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUsersOnGroupInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUsersOnGroupInput, UserUncheckedUpdateWithoutUsersOnGroupInput>
  }

  export type UserUpdateWithoutUsersOnGroupInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TicketNotes?: TicketNotesUpdateManyWithoutCreatorNestedInput
    createdTickets?: TicketUpdateManyWithoutCreatedByNestedInput
    organizations?: MembershipUpdateManyWithoutUserNestedInput
    assignedTickets?: TicketAssignmentsUpdateManyWithoutAssigneeNestedInput
    assignedByTickets?: TicketAssignmentsUpdateManyWithoutAssignedByNestedInput
    Profile?: ProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUsersOnGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TicketNotes?: TicketNotesUncheckedUpdateManyWithoutCreatorNestedInput
    createdTickets?: TicketUncheckedUpdateManyWithoutCreatedByNestedInput
    organizations?: MembershipUncheckedUpdateManyWithoutUserNestedInput
    assignedTickets?: TicketAssignmentsUncheckedUpdateManyWithoutAssigneeNestedInput
    assignedByTickets?: TicketAssignmentsUncheckedUpdateManyWithoutAssignedByNestedInput
    Profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type GroupUpsertWithoutUsersInput = {
    update: XOR<GroupUpdateWithoutUsersInput, GroupUncheckedUpdateWithoutUsersInput>
    create: XOR<GroupCreateWithoutUsersInput, GroupUncheckedCreateWithoutUsersInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutUsersInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutUsersInput, GroupUncheckedUpdateWithoutUsersInput>
  }

  export type GroupUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Ticket?: TicketUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Ticket?: TicketUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type TicketCreateWithoutPriorityInput = {
    subject: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    notes?: TicketNotesCreateNestedManyWithoutTicketInput
    Organization: OrganizationCreateNestedOneWithoutTicketInput
    CreatedBy: UserCreateNestedOneWithoutCreatedTicketsInput
    Group?: GroupCreateNestedOneWithoutTicketInput
    Status: StatusCreateNestedOneWithoutTicketInput
    Category?: CategoryCreateNestedOneWithoutTicketInput
    Assignees?: TicketAssignmentsCreateNestedManyWithoutTicketInput
    Tags?: TagsOnTicketCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutPriorityInput = {
    id?: number
    subject: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    organizationId: number
    createdById: number
    groupId?: number | null
    statusId: number
    categoryId?: number | null
    notes?: TicketNotesUncheckedCreateNestedManyWithoutTicketInput
    Assignees?: TicketAssignmentsUncheckedCreateNestedManyWithoutTicketInput
    Tags?: TagsOnTicketUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutPriorityInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutPriorityInput, TicketUncheckedCreateWithoutPriorityInput>
  }

  export type TicketCreateManyPriorityInputEnvelope = {
    data: TicketCreateManyPriorityInput | TicketCreateManyPriorityInput[]
    skipDuplicates?: boolean
  }

  export type TicketUpsertWithWhereUniqueWithoutPriorityInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutPriorityInput, TicketUncheckedUpdateWithoutPriorityInput>
    create: XOR<TicketCreateWithoutPriorityInput, TicketUncheckedCreateWithoutPriorityInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutPriorityInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutPriorityInput, TicketUncheckedUpdateWithoutPriorityInput>
  }

  export type TicketUpdateManyWithWhereWithoutPriorityInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutPriorityInput>
  }

  export type TicketCreateWithoutCategoryInput = {
    subject: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    notes?: TicketNotesCreateNestedManyWithoutTicketInput
    Organization: OrganizationCreateNestedOneWithoutTicketInput
    CreatedBy: UserCreateNestedOneWithoutCreatedTicketsInput
    Group?: GroupCreateNestedOneWithoutTicketInput
    Priority: PriorityCreateNestedOneWithoutTicketInput
    Status: StatusCreateNestedOneWithoutTicketInput
    Assignees?: TicketAssignmentsCreateNestedManyWithoutTicketInput
    Tags?: TagsOnTicketCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutCategoryInput = {
    id?: number
    subject: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    organizationId: number
    createdById: number
    groupId?: number | null
    priorityId: number
    statusId: number
    notes?: TicketNotesUncheckedCreateNestedManyWithoutTicketInput
    Assignees?: TicketAssignmentsUncheckedCreateNestedManyWithoutTicketInput
    Tags?: TagsOnTicketUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutCategoryInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutCategoryInput, TicketUncheckedCreateWithoutCategoryInput>
  }

  export type TicketCreateManyCategoryInputEnvelope = {
    data: TicketCreateManyCategoryInput | TicketCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type TicketUpsertWithWhereUniqueWithoutCategoryInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutCategoryInput, TicketUncheckedUpdateWithoutCategoryInput>
    create: XOR<TicketCreateWithoutCategoryInput, TicketUncheckedCreateWithoutCategoryInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutCategoryInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutCategoryInput, TicketUncheckedUpdateWithoutCategoryInput>
  }

  export type TicketUpdateManyWithWhereWithoutCategoryInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutCategoryInput>
  }

  export type TicketCreateManyOrganizationInput = {
    id?: number
    subject: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    createdById: number
    groupId?: number | null
    priorityId: number
    statusId: number
    categoryId?: number | null
  }

  export type MembershipCreateManyOrganizationInput = {
    userId: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type TicketUpdateWithoutOrganizationInput = {
    subject?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: TicketNotesUpdateManyWithoutTicketNestedInput
    CreatedBy?: UserUpdateOneRequiredWithoutCreatedTicketsNestedInput
    Group?: GroupUpdateOneWithoutTicketNestedInput
    Priority?: PriorityUpdateOneRequiredWithoutTicketNestedInput
    Status?: StatusUpdateOneRequiredWithoutTicketNestedInput
    Category?: CategoryUpdateOneWithoutTicketNestedInput
    Assignees?: TicketAssignmentsUpdateManyWithoutTicketNestedInput
    Tags?: TagsOnTicketUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: IntFieldUpdateOperationsInput | number
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    priorityId?: IntFieldUpdateOperationsInput | number
    statusId?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: TicketNotesUncheckedUpdateManyWithoutTicketNestedInput
    Assignees?: TicketAssignmentsUncheckedUpdateManyWithoutTicketNestedInput
    Tags?: TagsOnTicketUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: IntFieldUpdateOperationsInput | number
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    priorityId?: IntFieldUpdateOperationsInput | number
    statusId?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MembershipUpdateWithoutOrganizationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrganizationsNestedInput
  }

  export type MembershipUncheckedUpdateWithoutOrganizationInput = {
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipUncheckedUpdateManyWithoutOrganizationInput = {
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketNotesCreateManyCreatorInput = {
    id?: number
    content: string
    ticketId: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    NoteType?: $Enums.NoteType
  }

  export type TicketCreateManyCreatedByInput = {
    id?: number
    subject: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    organizationId: number
    groupId?: number | null
    priorityId: number
    statusId: number
    categoryId?: number | null
  }

  export type MembershipCreateManyUserInput = {
    organizationId: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type TicketAssignmentsCreateManyAssigneeInput = {
    ticketId: number
    assignerId: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type TicketAssignmentsCreateManyAssignedByInput = {
    ticketId: number
    assigneeId: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type UsersOnGroupCreateManyUserInput = {
    groupId: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type TicketNotesUpdateWithoutCreatorInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    NoteType?: EnumNoteTypeFieldUpdateOperationsInput | $Enums.NoteType
    Ticket?: TicketUpdateOneRequiredWithoutNotesNestedInput
  }

  export type TicketNotesUncheckedUpdateWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    ticketId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    NoteType?: EnumNoteTypeFieldUpdateOperationsInput | $Enums.NoteType
  }

  export type TicketNotesUncheckedUpdateManyWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    ticketId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    NoteType?: EnumNoteTypeFieldUpdateOperationsInput | $Enums.NoteType
  }

  export type TicketUpdateWithoutCreatedByInput = {
    subject?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: TicketNotesUpdateManyWithoutTicketNestedInput
    Organization?: OrganizationUpdateOneRequiredWithoutTicketNestedInput
    Group?: GroupUpdateOneWithoutTicketNestedInput
    Priority?: PriorityUpdateOneRequiredWithoutTicketNestedInput
    Status?: StatusUpdateOneRequiredWithoutTicketNestedInput
    Category?: CategoryUpdateOneWithoutTicketNestedInput
    Assignees?: TicketAssignmentsUpdateManyWithoutTicketNestedInput
    Tags?: TagsOnTicketUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizationId?: IntFieldUpdateOperationsInput | number
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    priorityId?: IntFieldUpdateOperationsInput | number
    statusId?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: TicketNotesUncheckedUpdateManyWithoutTicketNestedInput
    Assignees?: TicketAssignmentsUncheckedUpdateManyWithoutTicketNestedInput
    Tags?: TagsOnTicketUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizationId?: IntFieldUpdateOperationsInput | number
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    priorityId?: IntFieldUpdateOperationsInput | number
    statusId?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MembershipUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutMembershipNestedInput
  }

  export type MembershipUncheckedUpdateWithoutUserInput = {
    organizationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipUncheckedUpdateManyWithoutUserInput = {
    organizationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketAssignmentsUpdateWithoutAssigneeInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Ticket?: TicketUpdateOneRequiredWithoutAssigneesNestedInput
    AssignedBy?: UserUpdateOneRequiredWithoutAssignedByTicketsNestedInput
  }

  export type TicketAssignmentsUncheckedUpdateWithoutAssigneeInput = {
    ticketId?: IntFieldUpdateOperationsInput | number
    assignerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketAssignmentsUncheckedUpdateManyWithoutAssigneeInput = {
    ticketId?: IntFieldUpdateOperationsInput | number
    assignerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketAssignmentsUpdateWithoutAssignedByInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Ticket?: TicketUpdateOneRequiredWithoutAssigneesNestedInput
    Assignee?: UserUpdateOneRequiredWithoutAssignedTicketsNestedInput
  }

  export type TicketAssignmentsUncheckedUpdateWithoutAssignedByInput = {
    ticketId?: IntFieldUpdateOperationsInput | number
    assigneeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketAssignmentsUncheckedUpdateManyWithoutAssignedByInput = {
    ticketId?: IntFieldUpdateOperationsInput | number
    assigneeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersOnGroupUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Group?: GroupUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UsersOnGroupUncheckedUpdateWithoutUserInput = {
    groupId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersOnGroupUncheckedUpdateManyWithoutUserInput = {
    groupId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketNotesCreateManyTicketInput = {
    id?: number
    content: string
    creatorId: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    NoteType?: $Enums.NoteType
  }

  export type TicketAssignmentsCreateManyTicketInput = {
    assigneeId: number
    assignerId: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type TagsOnTicketCreateManyTicketInput = {
    tagId: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type TicketNotesUpdateWithoutTicketInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    NoteType?: EnumNoteTypeFieldUpdateOperationsInput | $Enums.NoteType
    Creator?: UserUpdateOneRequiredWithoutTicketNotesNestedInput
  }

  export type TicketNotesUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    creatorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    NoteType?: EnumNoteTypeFieldUpdateOperationsInput | $Enums.NoteType
  }

  export type TicketNotesUncheckedUpdateManyWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    creatorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    NoteType?: EnumNoteTypeFieldUpdateOperationsInput | $Enums.NoteType
  }

  export type TicketAssignmentsUpdateWithoutTicketInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Assignee?: UserUpdateOneRequiredWithoutAssignedTicketsNestedInput
    AssignedBy?: UserUpdateOneRequiredWithoutAssignedByTicketsNestedInput
  }

  export type TicketAssignmentsUncheckedUpdateWithoutTicketInput = {
    assigneeId?: IntFieldUpdateOperationsInput | number
    assignerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketAssignmentsUncheckedUpdateManyWithoutTicketInput = {
    assigneeId?: IntFieldUpdateOperationsInput | number
    assignerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagsOnTicketUpdateWithoutTicketInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tag?: TagUpdateOneRequiredWithoutTicketsNestedInput
  }

  export type TagsOnTicketUncheckedUpdateWithoutTicketInput = {
    tagId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagsOnTicketUncheckedUpdateManyWithoutTicketInput = {
    tagId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagsOnTicketCreateManyTagInput = {
    ticketId: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type TagsOnTicketUpdateWithoutTagInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Ticket?: TicketUpdateOneRequiredWithoutTagsNestedInput
  }

  export type TagsOnTicketUncheckedUpdateWithoutTagInput = {
    ticketId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagsOnTicketUncheckedUpdateManyWithoutTagInput = {
    ticketId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateManyStatusInput = {
    id?: number
    subject: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    organizationId: number
    createdById: number
    groupId?: number | null
    priorityId: number
    categoryId?: number | null
  }

  export type TicketUpdateWithoutStatusInput = {
    subject?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: TicketNotesUpdateManyWithoutTicketNestedInput
    Organization?: OrganizationUpdateOneRequiredWithoutTicketNestedInput
    CreatedBy?: UserUpdateOneRequiredWithoutCreatedTicketsNestedInput
    Group?: GroupUpdateOneWithoutTicketNestedInput
    Priority?: PriorityUpdateOneRequiredWithoutTicketNestedInput
    Category?: CategoryUpdateOneWithoutTicketNestedInput
    Assignees?: TicketAssignmentsUpdateManyWithoutTicketNestedInput
    Tags?: TagsOnTicketUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutStatusInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizationId?: IntFieldUpdateOperationsInput | number
    createdById?: IntFieldUpdateOperationsInput | number
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    priorityId?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: TicketNotesUncheckedUpdateManyWithoutTicketNestedInput
    Assignees?: TicketAssignmentsUncheckedUpdateManyWithoutTicketNestedInput
    Tags?: TagsOnTicketUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutStatusInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizationId?: IntFieldUpdateOperationsInput | number
    createdById?: IntFieldUpdateOperationsInput | number
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    priorityId?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UsersOnGroupCreateManyGroupInput = {
    userId: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type TicketCreateManyGroupInput = {
    id?: number
    subject: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    organizationId: number
    createdById: number
    priorityId: number
    statusId: number
    categoryId?: number | null
  }

  export type UsersOnGroupUpdateWithoutGroupInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutUsersOnGroupNestedInput
  }

  export type UsersOnGroupUncheckedUpdateWithoutGroupInput = {
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersOnGroupUncheckedUpdateManyWithoutGroupInput = {
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUpdateWithoutGroupInput = {
    subject?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: TicketNotesUpdateManyWithoutTicketNestedInput
    Organization?: OrganizationUpdateOneRequiredWithoutTicketNestedInput
    CreatedBy?: UserUpdateOneRequiredWithoutCreatedTicketsNestedInput
    Priority?: PriorityUpdateOneRequiredWithoutTicketNestedInput
    Status?: StatusUpdateOneRequiredWithoutTicketNestedInput
    Category?: CategoryUpdateOneWithoutTicketNestedInput
    Assignees?: TicketAssignmentsUpdateManyWithoutTicketNestedInput
    Tags?: TagsOnTicketUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizationId?: IntFieldUpdateOperationsInput | number
    createdById?: IntFieldUpdateOperationsInput | number
    priorityId?: IntFieldUpdateOperationsInput | number
    statusId?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: TicketNotesUncheckedUpdateManyWithoutTicketNestedInput
    Assignees?: TicketAssignmentsUncheckedUpdateManyWithoutTicketNestedInput
    Tags?: TagsOnTicketUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizationId?: IntFieldUpdateOperationsInput | number
    createdById?: IntFieldUpdateOperationsInput | number
    priorityId?: IntFieldUpdateOperationsInput | number
    statusId?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TicketCreateManyPriorityInput = {
    id?: number
    subject: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    organizationId: number
    createdById: number
    groupId?: number | null
    statusId: number
    categoryId?: number | null
  }

  export type TicketUpdateWithoutPriorityInput = {
    subject?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: TicketNotesUpdateManyWithoutTicketNestedInput
    Organization?: OrganizationUpdateOneRequiredWithoutTicketNestedInput
    CreatedBy?: UserUpdateOneRequiredWithoutCreatedTicketsNestedInput
    Group?: GroupUpdateOneWithoutTicketNestedInput
    Status?: StatusUpdateOneRequiredWithoutTicketNestedInput
    Category?: CategoryUpdateOneWithoutTicketNestedInput
    Assignees?: TicketAssignmentsUpdateManyWithoutTicketNestedInput
    Tags?: TagsOnTicketUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutPriorityInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizationId?: IntFieldUpdateOperationsInput | number
    createdById?: IntFieldUpdateOperationsInput | number
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    statusId?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: TicketNotesUncheckedUpdateManyWithoutTicketNestedInput
    Assignees?: TicketAssignmentsUncheckedUpdateManyWithoutTicketNestedInput
    Tags?: TagsOnTicketUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutPriorityInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizationId?: IntFieldUpdateOperationsInput | number
    createdById?: IntFieldUpdateOperationsInput | number
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    statusId?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TicketCreateManyCategoryInput = {
    id?: number
    subject: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    organizationId: number
    createdById: number
    groupId?: number | null
    priorityId: number
    statusId: number
  }

  export type TicketUpdateWithoutCategoryInput = {
    subject?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: TicketNotesUpdateManyWithoutTicketNestedInput
    Organization?: OrganizationUpdateOneRequiredWithoutTicketNestedInput
    CreatedBy?: UserUpdateOneRequiredWithoutCreatedTicketsNestedInput
    Group?: GroupUpdateOneWithoutTicketNestedInput
    Priority?: PriorityUpdateOneRequiredWithoutTicketNestedInput
    Status?: StatusUpdateOneRequiredWithoutTicketNestedInput
    Assignees?: TicketAssignmentsUpdateManyWithoutTicketNestedInput
    Tags?: TagsOnTicketUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizationId?: IntFieldUpdateOperationsInput | number
    createdById?: IntFieldUpdateOperationsInput | number
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    priorityId?: IntFieldUpdateOperationsInput | number
    statusId?: IntFieldUpdateOperationsInput | number
    notes?: TicketNotesUncheckedUpdateManyWithoutTicketNestedInput
    Assignees?: TicketAssignmentsUncheckedUpdateManyWithoutTicketNestedInput
    Tags?: TagsOnTicketUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizationId?: IntFieldUpdateOperationsInput | number
    createdById?: IntFieldUpdateOperationsInput | number
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    priorityId?: IntFieldUpdateOperationsInput | number
    statusId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}