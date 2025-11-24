import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { StudentModule } from './student/student.module';
import { ApolloDriver } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: true,
      driver: ApolloDriver,
    }),
    MikroOrmModule.forRoot(),
    StudentModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
