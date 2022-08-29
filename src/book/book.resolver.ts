/* eslint-disable prettier/prettier */
import { Book as BookModule } from './../graphql';
/* eslint-disable prettier/prettier */

import { Resolver, Query } from '@nestjs/graphql';
import { Book } from './book.schema';
Book
@Resolver(of => Book)
export class BookResolver {

  @Query(returns => [Book], { name: 'books' })
  getAllBook() {
    const arr: BookModule[] =
      // return
      [{ id: 1, name: 'HarryPotter', author: 'JK', price: 250 },
      { id: 2, name: 'Alchamist', author: 'Poulo Chole', price: 300 },
      { id: 3, name: 'India', author: 'Gandhi', price: 100 }
      ]
    return arr
  }
}
