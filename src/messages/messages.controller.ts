import {
  Body,
  Controller,
  Get,
  Injectable,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CreateMessageDto } from './dto/messages.dto';
import { MessagesProvider } from './messages.provider';
@Injectable()
@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesProvider) {}

  @Get()
  getMessages() {
    return this.messagesService.findAll();
  }

  @Get('/:id')
  async getSingleMessage(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id);
    if (!message) {
      throw new NotFoundException(`message not found - ${id}`);
    }
    return message;
  }

  @Post()
  postMessages(@Body() body: CreateMessageDto) {
    const { content } = body;
    return this.messagesService.create(content);
  }
}
