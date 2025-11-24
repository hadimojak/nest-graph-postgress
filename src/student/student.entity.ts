import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { v4 as uuid } from 'uuid';

@Entity()
export class Student {
  @PrimaryKey()
  id: string = uuid();

  @Property()
  name!: string;

  @Property()
  email!: string;

  @Property()
  createdAt: Date;

  @Property()
  updatedAt!: Date;

  @Property()
  age: number;
}
