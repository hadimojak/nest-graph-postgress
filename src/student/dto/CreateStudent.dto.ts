import { InputType, Field, Int } from '@nestjs/graphql';
import { IsEmail, IsNumber } from 'class-validator';
import { Min, Max } from 'class-validator';

@InputType()
export class CreateStudentDto {
  @Field()
  name: string;

  @Field()
  @IsEmail({}, { message: 'invalid email address' })
  email: string;

  @Field(() => Int)
  @IsNumber()
  @Min(1)
  @Max(100)
  age: number;
}
