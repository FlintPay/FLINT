import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CryptoInfoService } from "./cryptoInfo.service";
import { CryptoInfoControllerBase } from "./base/cryptoInfo.controller.base";

@swagger.ApiTags("cryptoInfos")
@common.Controller("cryptoInfos")
export class CryptoInfoController extends CryptoInfoControllerBase {
  constructor(protected readonly service: CryptoInfoService) {
    super(service);
  }
}
