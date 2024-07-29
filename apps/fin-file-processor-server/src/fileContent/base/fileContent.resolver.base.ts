/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { FileContent } from "./FileContent";
import { FileContentCountArgs } from "./FileContentCountArgs";
import { FileContentFindManyArgs } from "./FileContentFindManyArgs";
import { FileContentFindUniqueArgs } from "./FileContentFindUniqueArgs";
import { CreateFileContentArgs } from "./CreateFileContentArgs";
import { UpdateFileContentArgs } from "./UpdateFileContentArgs";
import { DeleteFileContentArgs } from "./DeleteFileContentArgs";
import { FileInfo } from "../../fileInfo/base/FileInfo";
import { FileContentService } from "../fileContent.service";
@graphql.Resolver(() => FileContent)
export class FileContentResolverBase {
  constructor(protected readonly service: FileContentService) {}

  async _fileContentsMeta(
    @graphql.Args() args: FileContentCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [FileContent])
  async fileContents(
    @graphql.Args() args: FileContentFindManyArgs
  ): Promise<FileContent[]> {
    return this.service.fileContents(args);
  }

  @graphql.Query(() => FileContent, { nullable: true })
  async fileContent(
    @graphql.Args() args: FileContentFindUniqueArgs
  ): Promise<FileContent | null> {
    const result = await this.service.fileContent(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => FileContent)
  async createFileContent(
    @graphql.Args() args: CreateFileContentArgs
  ): Promise<FileContent> {
    return await this.service.createFileContent({
      ...args,
      data: {
        ...args.data,

        fileInfo: args.data.fileInfo
          ? {
              connect: args.data.fileInfo,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => FileContent)
  async updateFileContent(
    @graphql.Args() args: UpdateFileContentArgs
  ): Promise<FileContent | null> {
    try {
      return await this.service.updateFileContent({
        ...args,
        data: {
          ...args.data,

          fileInfo: args.data.fileInfo
            ? {
                connect: args.data.fileInfo,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => FileContent)
  async deleteFileContent(
    @graphql.Args() args: DeleteFileContentArgs
  ): Promise<FileContent | null> {
    try {
      return await this.service.deleteFileContent(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => FileInfo, {
    nullable: true,
    name: "fileInfo",
  })
  async getFileInfo(
    @graphql.Parent() parent: FileContent
  ): Promise<FileInfo | null> {
    const result = await this.service.getFileInfo(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
