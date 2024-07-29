import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DecryptionKeyModuleBase } from "./base/decryptionKey.module.base";
import { DecryptionKeyService } from "./decryptionKey.service";
import { DecryptionKeyController } from "./decryptionKey.controller";
import { DecryptionKeyResolver } from "./decryptionKey.resolver";

@Module({
  imports: [DecryptionKeyModuleBase, forwardRef(() => AuthModule)],
  controllers: [DecryptionKeyController],
  providers: [DecryptionKeyService, DecryptionKeyResolver],
  exports: [DecryptionKeyService],
})
export class DecryptionKeyModule {}
