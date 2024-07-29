import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CryptoInfoServiceBase } from "./base/cryptoInfo.service.base";

@Injectable()
export class CryptoInfoService extends CryptoInfoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
