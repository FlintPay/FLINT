/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FileContentCreateInput } from "./FileContentCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateFileContentArgs {
  @ApiProperty({
    required: true,
    type: () => FileContentCreateInput,
  })
  @ValidateNested()
  @Type(() => FileContentCreateInput)
  @Field(() => FileContentCreateInput, { nullable: false })
  data!: FileContentCreateInput;
}

export { CreateFileContentArgs as CreateFileContentArgs };