import { EntityRepository } from '@mikro-orm/core';
import { Student } from './student.entity';

export class StudentRepository extends EntityRepository<Student> {
  async persistAndFlush(student: Student): Promise<void> {
    this.em.persist(student);
    await this.em.flush();
  }
}
