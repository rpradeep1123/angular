import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public userData=[];
  public errorData;
  constructor(private _userservice : UserserviceService,private _router:Router) { }

  ngOnInit() {
    this._userservice.getUserDetails()
            .subscribe(userResponse=>this.userData=userResponse,errorResponse=>this.errorData=errorResponse);
  }

  viewTodo(userId:any,name:string){
    this._router.navigate(['/todo',userId,name]);
  }

}
