import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FileContentServiceBase } from "./base/fileContent.service.base";

@Injectable()
export class FileContentService extends FileContentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
