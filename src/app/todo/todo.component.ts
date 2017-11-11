import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  private userId:any;
  private name:string;
  private todoResponse=[];
  private statusList=[];
  private errorData;
  private showUpdate:boolean;
  private updateData=[];
  constructor(private route:ActivatedRoute,private _userservice:UserserviceService,private _router:Router) { }

  ngOnInit() {
    this.userId=this.route.snapshot.params['id'];
    this.name=this.route.snapshot.params['name'];
    this._userservice.getTodoDetails(this.userId)
        .subscribe(response=>this.todoResponse=response,errorResponse=>this.errorData=errorResponse);
  }

  ngOnChange(){
    console.log("Changed");
  }

  goBack(){
    this._router.navigate(['..'])
  }

  update(todo){
    let todoUpdate=todo;
    console.log(todo);
    todoUpdate.completed=true;
    this._userservice.updateTodoList(todoUpdate)
                      .subscribe(response=>this.updateData=response,errorResponse=>this.errorData=errorResponse);
  }

  addTodo(title:string){
    let todo={userId:this.userId,id:"201",title:title,completed:false};
    this._userservice.addTodo(todo)
    .subscribe(response=>this.updateData=response,errorResponse=>this.errorData=errorResponse);
    console.log(this.updateData);
  }
}
