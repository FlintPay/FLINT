import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DecryptionKeyResolverBase } from "./base/decryptionKey.resolver.base";
import { DecryptionKey } from "./base/DecryptionKey";
import { DecryptionKeyService } from "./decryptionKey.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DecryptionKey)
export class DecryptionKeyResolver extends DecryptionKeyResolverBase {
  constructor(
    protected readonly service: DecryptionKeyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
