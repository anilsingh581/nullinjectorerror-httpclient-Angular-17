import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  data: any[] = [];
  constructor(private httpClient: HttpClient) { }

  public getData(): Observable<any> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/todos/1');
  }


  // public fetchData(): void {
  //   this.httpClient.get('https://jsonplaceholder.typicode.com/posts')
  //     .subscribe((posts: any[]) => {
  //       this.data = posts;
  //       console.log(posts);
  //     });
  // }

}
