import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DataExtractionServiceBase } from "./base/dataExtraction.service.base";

@Injectable()
export class DataExtractionService extends DataExtractionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
