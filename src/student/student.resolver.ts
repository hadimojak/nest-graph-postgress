import { Query, Resolver } from '@nestjs/graphql';
import { StudentService } from './student.service';

@Resolver()
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Query(() => String)
  getStuff() {
    return 'hey youuuuuuuuuuuuuuu';
  }
}
