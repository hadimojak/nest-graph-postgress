import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Student } from './student.entity';
import { StudentRepository } from './student.repository';
import { CreateStudentDto } from './dto/CreateStudent.dto';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: StudentRepository,
  ) {}

  async createStudent(studentInput: CreateStudentDto): Promise<Student> {
    const now = new Date();
    const student = this.studentRepository.create({
      ...studentInput,
      createdAt: now,
    });
    await this.studentRepository.persistAndFlush(student);
    return student;
  }
}
