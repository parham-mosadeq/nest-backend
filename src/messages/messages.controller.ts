import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dto/messages.dto';
import { MessagesProvider } from './messages.provider';

@Controller('messages')
export class MessagesController {
  messagesService: MessagesProvider;
  constructor() {
    this.messagesService = new MessagesProvider();
  }

  @Get()
  getMessages() {
    return this.messagesService.findAll();
  }

  @Get('/:id')
  getSingleMessage(@Param('id') id: string) {
    return this.messagesService.findOne(id);
  }

  @Post()
  postMessages(@Body() body: CreateMessageDto) {
    const { content } = body;
    return this.messagesService.create(content);
  }
}
