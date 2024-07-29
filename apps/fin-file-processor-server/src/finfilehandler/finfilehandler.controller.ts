import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { FinFileHandlerService } from "./finfilehandler.service";
import { UploadFinFileDto } from "../finFileHandler/UploadFinFileDto";

@swagger.ApiTags("finFileHandlers")
@common.Controller("finFileHandlers")
export class FinFileHandlerController {
  constructor(protected readonly service: FinFileHandlerService) {}

  @common.Post("/convert-to-json")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ConvertFinFileToJson(
    @common.Body()
    body: UploadFinFileDto
  ): Promise<string> {
        return this.service.ConvertFinFileToJson(body);
      }

  @common.Post("/parse")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ParseFinFile(
    @common.Body()
    body: UploadFinFileDto
  ): Promise<string> {
        return this.service.ParseFinFile(body);
      }

  @common.Post("/upload")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UploadFinFile(
    @common.Body()
    body: UploadFinFileDto
  ): Promise<string> {
        return this.service.UploadFinFile(body);
      }
}
