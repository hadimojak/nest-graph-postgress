import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MikroOrmModule } from '@mikro-orm/nestjs';
@Module({
  imports: [MikroOrmModule.forRoot()],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
