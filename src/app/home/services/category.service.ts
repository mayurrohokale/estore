import { Injectable } from '@angular/core';
import { Category } from '../types/category.type';
import { categories } from '../sampleData/categories.data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  getAllcategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(
      'http://localhost:5001/productcategories'
    );
  }
}
