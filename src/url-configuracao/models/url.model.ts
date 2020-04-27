import { ObjectType, Field, ID } from "@nestjs/graphql";

@ObjectType()
export class Url {
  @Field(type => ID)
  id: string;

  @Field()
  nome: string;

  @Field()
  url: string;

  @Field({ nullable: true })
  codigoSistema: number;

  @Field()
  dataCriacao: Date;

  @Field()
  excluido: boolean;
}