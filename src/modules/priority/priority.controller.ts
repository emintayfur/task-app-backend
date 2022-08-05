import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import Priority from '../../dump/priority';
import { success } from '../../utils/response';

@Controller('priority')
@ApiTags('Priority')
export class PriorityController {
  @Get('/list')
  @ApiOperation({ summary: 'Öncelikleri liste ve obje şeklinde döner.' })
  getPriorityList() {
    const list = Object.entries(Priority).map((entry) => entry[1]);

    const result = {
      list,
      obj: Priority,
    };

    return success(result);
  }
}
