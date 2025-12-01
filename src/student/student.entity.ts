import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { v4 as uuid } from 'uuid';
import { StudentRepository } from './student.repository';

@ObjectType()
@Entity({ repository: () => StudentRepository })
export class Student {
  @Field(() => ID)
  @PrimaryKey()
  id: string = uuid();

  @Field()
  @Property()
  name!: string;

  @Field()
  @Property()
  email!: string;

  @Field()
  @Property()
  createdAt!: Date;

  @Field()
  @Property()
  updatedAt?: Date;

  @Field(() => Int)
  @Property()
  age!: number;
}
