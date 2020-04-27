import { Resolver, Args, Query } from "@nestjs/graphql";
import { Url } from "./models/url.model";
import { UrlConfiguracaoService } from "./services/url-configuracao.service";
import { NotFoundException } from "@nestjs/common";
import { PubSub } from "apollo-server-express"

const pubSub = new PubSub();

@Resolver(of => Url)
export class UrlResolver {
 constructor(private readonly urlConfiguracaoService: UrlConfiguracaoService) {}

 @Query(returns => Url)
 async url(@Args('id', {type: () => String}) id: string) {
   const url = await this.urlConfiguracaoService.findOneById(id);
   if(!url) {
     throw new NotFoundException(`URL com o id "${id}" informado não foi encontrada`);
   }
   return url;
 }

 @Query(returns => [Url])
  urls(): Promise<Url[]> {
    return this.urlConfiguracaoService.findAll();
  }
}