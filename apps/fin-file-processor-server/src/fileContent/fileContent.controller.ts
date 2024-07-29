import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FileContentService } from "./fileContent.service";
import { FileContentControllerBase } from "./base/fileContent.controller.base";

@swagger.ApiTags("fileContents")
@common.Controller("fileContents")
export class FileContentController extends FileContentControllerBase {
  constructor(protected readonly service: FileContentService) {
    super(service);
  }
}
