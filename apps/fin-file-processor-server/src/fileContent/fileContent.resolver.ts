import * as graphql from "@nestjs/graphql";
import { FileContentResolverBase } from "./base/fileContent.resolver.base";
import { FileContent } from "./base/FileContent";
import { FileContentService } from "./fileContent.service";

@graphql.Resolver(() => FileContent)
export class FileContentResolver extends FileContentResolverBase {
  constructor(protected readonly service: FileContentService) {
    super(service);
  }
}
