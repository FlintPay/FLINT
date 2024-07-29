import * as graphql from "@nestjs/graphql";
import { FileInfoResolverBase } from "./base/fileInfo.resolver.base";
import { FileInfo } from "./base/FileInfo";
import { FileInfoService } from "./fileInfo.service";

@graphql.Resolver(() => FileInfo)
export class FileInfoResolver extends FileInfoResolverBase {
  constructor(protected readonly service: FileInfoService) {
    super(service);
  }
}
