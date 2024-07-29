import { Module } from "@nestjs/common";
import { FileInfoModuleBase } from "./base/fileInfo.module.base";
import { FileInfoService } from "./fileInfo.service";
import { FileInfoController } from "./fileInfo.controller";
import { FileInfoResolver } from "./fileInfo.resolver";

@Module({
  imports: [FileInfoModuleBase],
  controllers: [FileInfoController],
  providers: [FileInfoService, FileInfoResolver],
  exports: [FileInfoService],
})
export class FileInfoModule {}
