// import {
//   Body,
//   Controller,
//   Delete,
//   Get,
//   Param,
//   ParseIntPipe,
//   Patch,
//   Post,
// } from '@nestjs/common';
// import { TicketTagsService } from './ticket-tags.service';
// import { TagSelect } from '@ticketz/database';

// @Controller('tickets/:id/tags')
// export class TicketTagsController {
//   constructor(private readonly ticketTagsService: TicketTagsService) {}

//   @Get()
//   findMany(@Param('id', ParseIntPipe) id: number) {
//     return this.ticketTagsService.findMany(id);
//   }

//   @Post()
//   addTag(@Param('id', ParseIntPipe) id: number, @Body() tags: TagSelect[]) {
//     return this.ticketTagsService.add(id, tags);
//   }

//   @Patch()
//   bulkRemove(@Param('id', ParseIntPipe) id: number, @Body() tags: TagSelect[]) {
//     return this.ticketTagsService.bulkRemove(id, tags);
//   }

//   @Delete(':tagId')
//   removeTag(
//     @Param('id', ParseIntPipe) id: number,
//     @Param('tagId', ParseIntPipe) tagId: number,
//   ) {
//     return this.ticketTagsService.remove(id, tagId);
//   }
// }
