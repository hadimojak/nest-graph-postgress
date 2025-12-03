import { Entity, PrimaryKey, Property, OptionalProps } from '@mikro-orm/core';
import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';
import { v4 as uuid } from 'uuid';
import { StudentRepository } from './student.repository';

@ObjectType()
@Entity({ repository: () => StudentRepository })
export class Student {
  // Tell MikroORM these fields are optional when creating
  [OptionalProps]?: 'id' | 'createdAt' | 'updatedAt';

  @Field(() => ID)
  @PrimaryKey()
  id: string = uuid();

  @Field()
  @Property()
  name!: string;

  @Field()
  @Property()
  @IsEmail()
  email!: string;

  @Field()
  @Property({ onCreate: () => new Date() })
  createdAt!: Date;

  @Field()
  @Property({ onCreate: () => new Date(), onUpdate: () => new Date() })
  updatedAt!: Date;

  @Field(() => Int)
  @Property()
  age!: number;
}
