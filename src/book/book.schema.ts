/* eslint-disable prettier/prettier */
import { ObjectType, Int, Field } from '@nestjs/graphql';

@ObjectType()
export class Book {
  @Field((type) => Int)
  id: number;
  @Field()
  author: string
  @Field()
  name: string
  @Field((type) => Int)
  price: number
}
