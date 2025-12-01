import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateStudentDto {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field(() => Int)
  age: number;
}
