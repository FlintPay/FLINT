import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DecryptionKeyService } from "./decryptionKey.service";
import { DecryptionKeyControllerBase } from "./base/decryptionKey.controller.base";

@swagger.ApiTags("decryptionKeys")
@common.Controller("decryptionKeys")
export class DecryptionKeyController extends DecryptionKeyControllerBase {
  constructor(
    protected readonly service: DecryptionKeyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
