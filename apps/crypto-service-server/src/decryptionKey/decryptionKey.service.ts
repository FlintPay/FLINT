import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DecryptionKeyServiceBase } from "./base/decryptionKey.service.base";

@Injectable()
export class DecryptionKeyService extends DecryptionKeyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
