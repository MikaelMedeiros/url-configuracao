import { Resolver, Args, Query } from "@nestjs/graphql";
import { Service } from "./models/service.model";
import { UrlConfiguracaoService } from "./services/url-configuracao.service";
import { NotFoundException } from "@nestjs/common";
import { PubSub } from "apollo-server-express"

const pubSub = new PubSub();

@Resolver(of => Service)
export class UrlResolver {
 constructor(private readonly urlConfiguracaoService: UrlConfiguracaoService) {}

 @Query(returns => Service)
 async url(@Args('id', {type: () => String}) id: string) {
   const url = await this.urlConfiguracaoService.findOneById(id);
   if(!url) {
     throw new NotFoundException(`URL com o id "${id}" informado não foi encontrada`);
   }
   return url;
 }

 @Query(returns => [Service])
  urls(): Promise<Service[]> {
    return this.urlConfiguracaoService.findAll();
  }
}