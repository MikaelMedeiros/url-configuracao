import { Field, InputType } from "@nestjs/graphql";
import { MaxLength } from "class-validator";

@InputType()
export class NewUrlInput {
  @Field()
  @MaxLength(500)
  nome: string;

  @Field()
  @MaxLength(300)
  url: string;

  @Field({nullable: true})
  codigoSistema: number;
}