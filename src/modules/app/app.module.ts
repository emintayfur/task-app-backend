import { Module } from '@nestjs/common';
import appImports from './app.imports';

@Module({
  imports: appImports,
})
export class AppModule {}
