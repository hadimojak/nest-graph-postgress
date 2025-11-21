import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Student } from './student.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Student])],
  providers: [StudentService],
})
export class StudentModule {}
