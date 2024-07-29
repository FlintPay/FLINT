import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DataExtractionResolverBase } from "./base/dataExtraction.resolver.base";
import { DataExtraction } from "./base/DataExtraction";
import { DataExtractionService } from "./dataExtraction.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DataExtraction)
export class DataExtractionResolver extends DataExtractionResolverBase {
  constructor(
    protected readonly service: DataExtractionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
