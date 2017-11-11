import { Injectable } from '@angular/core';
import { Http,Response,RequestOptions,Headers } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserserviceService {

  private url_user="https://jsonplaceholder.typicode.com/users";
  private url_todo="https://jsonplaceholder.typicode.com/todos";
  constructor(private _http:Http) { }

  getUserDetails(){
    return this._http.get(this.url_user)
            .map((response:Response)=>response.json())
            .catch(this.errorHandling);
  }

  getTodoDetails(userId:any){
    return this._http.get(this.url_todo+"?userId="+userId)
            .map((response:Response)=>response.json())
            .catch(this.errorHandling);
  }

  updateTodoList(todo){
    let bodyString = JSON.stringify(todo);
    let headers      = new Headers({ 'Content-Type': 'application/json' ,'Access-Control-Allow-Origin':'*'});
    let options       = new RequestOptions({ headers: headers });

    return this._http.put(this.url_todo+"/"+todo.id,bodyString,options)
            .map((response:Response)=>response.json())
            .catch(this.errorHandling);
  }

  addTodo(todo){
    let bodyString = JSON.stringify(todo);
    let headers      = new Headers({ 'Content-Type': 'application/json' ,'Access-Control-Allow-Origin':'*'});
    let options       = new RequestOptions({ headers: headers });

    return this._http.post(this.url_todo,bodyString,options)
            .map((response:Response)=>response.json())
            .catch(this.errorHandling);
  }

  errorHandling(error:Response){
    return Observable.throw(error || "Server Error");
  }

}
