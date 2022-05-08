import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})

export class ticketService {

  httpOptions: object;
  constructor(private _HttpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        Accept: '*/*',
        // 'Connection': 'keep-alive',
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa('admin:1233'),
      }),
    };
  }
  getallproblems(): Observable<any> {
    let formData = { articlesType: 5 };
    return this._HttpClient.post(
      'v1/Web/GetAll',
      formData,
      this.httpOptions
    );
  }
  getpost(id: number): Observable<any> {
    let formData = {
      articlesID: id,
    };
    return this._HttpClient.post(
      'v1/Web/Post',
      formData,
      this.httpOptions
    );
  }
  editpost(id: number, articlesBody: string): Observable<any> {
    console.log('start to collect data')
    let formData = {
      articlesID: id,
      "articlesTitle": "string",
      "articlesShortBody": "string",
      "articlesBody": articlesBody,
      "groupID": 0,
      "publishOption": 0,
      "publishDate": "2022-04-24T08:48:38.799Z",
      "allowComment": true,
      "thumHeaderImageURL": "string",
      "inPageHeadrImageURL": "string"
    };
    console.log('formdata details')
    console.log(formData)
    return this._HttpClient.post(
      'v1/Web/EditPost',
      formData,
      this.httpOptions
    );
  }
  getallcomments(id: number): Observable<any> {
    let formData = {
      articlesID: id,
      approveStatus: 1,
    };
    return this._HttpClient.post(
      'v1/Web/PostComments',
      formData,
      this.httpOptions
    );
  }
  createNewComment(formData: FormGroup): Observable<any> {
    return this._HttpClient.post(
      'v1/Web/NewComment',
      formData,
      this.httpOptions
    );
  }
  getnewpost(): Observable<any> {
    let formData = {
      comment: 'string',
      articlesID: 0,
      commentOwner: 0,
    };
    return this._HttpClient.post(
      'v1/Web/NewPost',
      formData,
      this.httpOptions
    );
  }
}

