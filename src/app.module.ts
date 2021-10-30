import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore ORMConfig is currently not imported as per projects module system
import ORMConfig from '../ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(ORMConfig as TypeOrmModuleOptions)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
