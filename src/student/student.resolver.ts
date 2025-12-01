import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { Student } from './student.entity';
import { CreateStudentDto } from './dto/CreateStudent.dto';

@Resolver(() => Student)
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}

  @Query(() => String, { name: 'getStuff' })
  getStuff(): string {
    return 'hey youuuuuuuuuuuuuuu';
  }

  @Mutation(() => Student, { name: 'createStudent' })
  createStudent(@Args('student') student: CreateStudentDto): Promise<Student> {
    return this.studentService.createStudent(student);
  }
}
