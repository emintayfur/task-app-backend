import { Module } from '@nestjs/common';
import { PriorityController } from './priority.controller';

@Module({
  controllers: [PriorityController],
})
export class PriorityModule {}
