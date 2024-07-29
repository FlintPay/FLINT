/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DecryptionKey } from "./DecryptionKey";
import { DecryptionKeyCountArgs } from "./DecryptionKeyCountArgs";
import { DecryptionKeyFindManyArgs } from "./DecryptionKeyFindManyArgs";
import { DecryptionKeyFindUniqueArgs } from "./DecryptionKeyFindUniqueArgs";
import { DeleteDecryptionKeyArgs } from "./DeleteDecryptionKeyArgs";
import { DecryptionKeyService } from "../decryptionKey.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DecryptionKey)
export class DecryptionKeyResolverBase {
  constructor(
    protected readonly service: DecryptionKeyService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "DecryptionKey",
    action: "read",
    possession: "any",
  })
  async _decryptionKeysMeta(
    @graphql.Args() args: DecryptionKeyCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [DecryptionKey])
  @nestAccessControl.UseRoles({
    resource: "DecryptionKey",
    action: "read",
    possession: "any",
  })
  async decryptionKeys(
    @graphql.Args() args: DecryptionKeyFindManyArgs
  ): Promise<DecryptionKey[]> {
    return this.service.decryptionKeys(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => DecryptionKey, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "DecryptionKey",
    action: "read",
    possession: "own",
  })
  async decryptionKey(
    @graphql.Args() args: DecryptionKeyFindUniqueArgs
  ): Promise<DecryptionKey | null> {
    const result = await this.service.decryptionKey(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => DecryptionKey)
  @nestAccessControl.UseRoles({
    resource: "DecryptionKey",
    action: "delete",
    possession: "any",
  })
  async deleteDecryptionKey(
    @graphql.Args() args: DeleteDecryptionKeyArgs
  ): Promise<DecryptionKey | null> {
    try {
      return await this.service.deleteDecryptionKey(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}