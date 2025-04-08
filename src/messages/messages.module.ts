import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesProvider } from './messages.provider';
import { MessagesRepository } from './messages.repository';

@Module({
  controllers: [MessagesController],
  providers: [MessagesProvider, MessagesRepository],
})
export class MessagesModule {}
