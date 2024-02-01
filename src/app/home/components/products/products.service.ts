import { Injectable } from '@angular/core';
import { Product } from './products.type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductsService {

  constructor(private httpClient: HttpClient) { }
  getAllProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>('http://localhost:5001/products')
  }
  
}
