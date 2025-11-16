import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { v4 as uuid } from 'uuid';

@Entity()
export class Book {
  @PrimaryKey()
  id: string = uuid();

  @Property()
  title!: string;

  @Property()
  author!: string;

  @Property({ nullable: true })
  description?: string;

  @Property()
  publishedYear!: number;

  @Property({ default: true })
  isAvailable: boolean = true;

  @Property({ onCreate: () => new Date() })
  createdAt!: Date;

  @Property({ onUpdate: () => new Date(), nullable: true })
  updatedAt?: Date;
}
