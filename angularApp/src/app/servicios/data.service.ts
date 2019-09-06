import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  URL_BASE = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(`${this.URL_BASE}/posts`)
  }

  getPost(id) {
    const uri = `${this.URL_BASE}/posts/${id}`;
    return this.http.get(uri)
  }
}
