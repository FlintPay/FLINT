import { ArgsType, Field } from "@nestjs/graphql";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ArgsType()
class ConvertFinFileToJsonDto {
    @Field(() => GraphQLJSON)
    parsedContent!: InputJsonValue;
}

export { ConvertFinFileToJsonDto as ConvertFinFileToJsonDto };