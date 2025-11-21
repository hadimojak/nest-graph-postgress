import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { v4 as uuid } from 'uuid';

@Entity()
export class Student {
  @PrimaryKey()
  id: string = uuid();

  @Property()
  fullName!: string;

  @Property()
  email!: string;

  @Property()
  major!: string;

  @Property()
  semester!: number;

  @Property()
  createdAt: Date;

  @Property()
  updatedAt!: Date;

  @Property()
  age: number;
}
