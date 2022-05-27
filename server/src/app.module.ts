import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { environment } from './environment/environment';
import { User } from './user/entities/user.entity';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from 'dotenv';
config();
const ormConfig = {
  ...environment.database,
  entities: [User],
} as TypeOrmModuleOptions;
@Module({
  imports: [TypeOrmModule.forRoot(ormConfig), UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
