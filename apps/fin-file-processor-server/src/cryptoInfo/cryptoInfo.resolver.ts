import * as graphql from "@nestjs/graphql";
import { CryptoInfoResolverBase } from "./base/cryptoInfo.resolver.base";
import { CryptoInfo } from "./base/CryptoInfo";
import { CryptoInfoService } from "./cryptoInfo.service";

@graphql.Resolver(() => CryptoInfo)
export class CryptoInfoResolver extends CryptoInfoResolverBase {
  constructor(protected readonly service: CryptoInfoService) {
    super(service);
  }
}
