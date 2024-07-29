import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DataExtractionModuleBase } from "./base/dataExtraction.module.base";
import { DataExtractionService } from "./dataExtraction.service";
import { DataExtractionController } from "./dataExtraction.controller";
import { DataExtractionResolver } from "./dataExtraction.resolver";

@Module({
  imports: [DataExtractionModuleBase, forwardRef(() => AuthModule)],
  controllers: [DataExtractionController],
  providers: [DataExtractionService, DataExtractionResolver],
  exports: [DataExtractionService],
})
export class DataExtractionModule {}
