import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FileInfoServiceBase } from "./base/fileInfo.service.base";

@Injectable()
export class FileInfoService extends FileInfoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
