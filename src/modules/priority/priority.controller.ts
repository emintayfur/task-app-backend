import {
  Controller,
  Get,
  Query,
  ServiceUnavailableException,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import Priority from '../../dump/priority';
import { success } from '../../utils/response';

const DELAY_RANGE = [
  2121, // 2.1~ saniye ile
  4242, // 4.2~ saniye arasında
];

const ERROR_TOLERANCE = 0.42;
const ERROR_TOLERANCE_PERCENTAGE = ERROR_TOLERANCE * 100;

@Controller('priority')
@ApiTags('Priority')
export class PriorityController {
  @Get('/list')
  @ApiOperation({ summary: 'Öncelikleri liste ve obje şeklinde döner.' })
  async getPriorityList(@Query('isPrefetch') isPrefetch?: string) {
    // Eğer ki talep prefetch ise (NextJS sayfayı render almadan önce talepte bulunuyorsa) direktmen burayı atla.
    if (Boolean(!isPrefetch || !isPrefetch.length)) {
      const wait = Math.max(
        DELAY_RANGE[0],
        Math.floor(Math.random() * DELAY_RANGE[1]),
      );
      await new Promise((resolve) => setTimeout(() => resolve(true), wait));

      const crash = Math.random() < ERROR_TOLERANCE;
      if (crash) {
        throw new ServiceUnavailableException(
          `Hata töleransı %${ERROR_TOLERANCE_PERCENTAGE} olarak ayarlandı bu yüzden hata alıyorsunuz. Yani gönderdiğiniz talep %${ERROR_TOLERANCE_PERCENTAGE} ihtimalle reddedilecek.`,
        );
      }
    }

    const list = Object.entries(Priority).map((entry) => entry[1]);

    const result = {
      list,
      obj: Priority,
    };

    return success(result);
  }
}
