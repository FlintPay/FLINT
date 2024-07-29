import { Injectable } from "@nestjs/common";
import { ConvertFinFileToJsonDto } from "../finFileHandler/ConvertFinFileToJsonDto";
import { ParseFinFileDto } from "../finFileHandler/ParseFinFileDto";
import { UploadFinFileDto } from "../finFileHandler/UploadFinFileDto";

@Injectable()
export class FinFileHandlerService {
  constructor() {}
  async ConvertFinFileToJson(args: ConvertFinFileToJsonDto): Promise<string> {
    throw new Error("Not implemented");
  }
  async ParseFinFile(args: ParseFinFileDto): Promise<string> {
    throw new Error("Not implemented");
  }
  async UploadFinFile(args: UploadFinFileDto): Promise<string> {
    throw new Error("Not implemented");
  }
}
