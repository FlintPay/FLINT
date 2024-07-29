import { Module } from "@nestjs/common";
import { FinFileHandlerService } from "./finfilehandler.service";
import { FinFileHandlerController } from "./finfilehandler.controller";
import { FinFileHandlerResolver } from "./finfilehandler.resolver";

@Module({
  controllers: [FinFileHandlerController],
  providers: [FinFileHandlerService, FinFileHandlerResolver],
  exports: [FinFileHandlerService],
})
export class FinFileHandlerModule {}
