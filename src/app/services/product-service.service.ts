import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {PostsModel} from '../model/PostsModel';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private httpClient: HttpClient) { }

getAllProduct():Observable<PostsModel[]>{
    let host = environment.host;
    return this.httpClient.get<PostsModel[]>(host+"/posts")
}
}
