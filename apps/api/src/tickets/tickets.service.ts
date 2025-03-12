import { Injectable } from '@nestjs/common';
import { TicketInsert } from '@ticketz/database';


@Injectable()
export class TicketsService {
  create(createTicketDto: TicketInsert) {
    return 'This action adds a new ticket';
  }

  findAll() {
    return `This action returns all tickets`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ticket`;
  }

  update(id: number, updateTicketDto: any) {
    return `This action updates a #${id} ticket`;
  }

  remove(id: number) {
    return `This action removes a #${id} ticket`;
  }
}
