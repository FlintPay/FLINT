import { Module } from "@nestjs/common";
import { CryptoInfoModuleBase } from "./base/cryptoInfo.module.base";
import { CryptoInfoService } from "./cryptoInfo.service";
import { CryptoInfoController } from "./cryptoInfo.controller";
import { CryptoInfoResolver } from "./cryptoInfo.resolver";

@Module({
  imports: [CryptoInfoModuleBase],
  controllers: [CryptoInfoController],
  providers: [CryptoInfoService, CryptoInfoResolver],
  exports: [CryptoInfoService],
})
export class CryptoInfoModule {}
