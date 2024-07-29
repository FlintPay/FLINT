import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DataExtractionService } from "./dataExtraction.service";
import { DataExtractionControllerBase } from "./base/dataExtraction.controller.base";

@swagger.ApiTags("dataExtractions")
@common.Controller("dataExtractions")
export class DataExtractionController extends DataExtractionControllerBase {
  constructor(
    protected readonly service: DataExtractionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
