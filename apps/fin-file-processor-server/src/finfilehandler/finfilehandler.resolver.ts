import * as graphql from "@nestjs/graphql";
import { ConvertFinFileToJsonDto } from "../finFileHandler/ConvertFinFileToJsonDto";
import { ParseFinFileDto } from "../finFileHandler/ParseFinFileDto";
import { UploadFinFileDto } from "../finFileHandler/UploadFinFileDto";
import { FinFileHandlerService } from "./finfilehandler.service";

export class FinFileHandlerResolver {
  constructor(protected readonly service: FinFileHandlerService) {}

  @graphql.Mutation(() => String)
  async ConvertFinFileToJson(
    @graphql.Args()
    args: ConvertFinFileToJsonDto
  ): Promise<string> {
    return this.service.ConvertFinFileToJson(args);
  }

  @graphql.Mutation(() => String)
  async ParseFinFile(
    @graphql.Args()
    args: ParseFinFileDto
  ): Promise<string> {
    return this.service.ParseFinFile(args);
  }

  @graphql.Mutation(() => String)
  async UploadFinFile(
    @graphql.Args()
    args: UploadFinFileDto
  ): Promise<string> {
    return this.service.UploadFinFile(args);
  }
}
