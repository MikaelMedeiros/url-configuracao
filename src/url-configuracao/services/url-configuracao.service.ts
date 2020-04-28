import { Injectable } from '@nestjs/common';
import { NewServiceInput } from '../dto/new-service.input';
import { Service } from '../models/service.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Mongoose } from 'mongoose';
import { ServiceInterface } from '../interfaces/service.interface';

@Injectable()
export class UrlConfiguracaoService {

  constructor(@InjectModel('Service') private readonly serviceModel: Model<ServiceInterface>){}

  service: Service;

  async create(data: NewServiceInput): Promise<Service> {
    const createdService = new this.serviceModel(data);
    return {} as any;
  }

  async findOneById(id: string): Promise<Service> {
    return this.serviceModel.findById(id).exec();
  }

  async findAll(): Promise<Service[]> {
    return this.serviceModel.find().exec();
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }

}
