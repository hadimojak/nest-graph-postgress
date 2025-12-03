import { Migration } from '@mikro-orm/migrations';

export class Migration20251203105856_create_student_table extends Migration {
  override async up(): Promise<void> {
    this.addSql(
      `create table "student" ("id" varchar(255) not null, "name" varchar(255) not null, "email" varchar(255) not null, "created_at" timestamptz not null, "updated_at" timestamptz not null, "age" int not null, constraint "student_pkey" primary key ("id"));`,
    );
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "student" cascade;`);
  }
}
