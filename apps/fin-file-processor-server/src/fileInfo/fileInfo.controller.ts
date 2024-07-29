import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FileInfoService } from "./fileInfo.service";
import { FileInfoControllerBase } from "./base/fileInfo.controller.base";

@swagger.ApiTags("fileInfos")
@common.Controller("fileInfos")
export class FileInfoController extends FileInfoControllerBase {
  constructor(protected readonly service: FileInfoService) {
    super(service);
  }
}
