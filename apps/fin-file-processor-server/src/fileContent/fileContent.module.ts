import { Module } from "@nestjs/common";
import { FileContentModuleBase } from "./base/fileContent.module.base";
import { FileContentService } from "./fileContent.service";
import { FileContentController } from "./fileContent.controller";
import { FileContentResolver } from "./fileContent.resolver";

@Module({
  imports: [FileContentModuleBase],
  controllers: [FileContentController],
  providers: [FileContentService, FileContentResolver],
  exports: [FileContentService],
})
export class FileContentModule {}
