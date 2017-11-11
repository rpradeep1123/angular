import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { TodoComponent } from './todo/todo.component';
import { FilterPipe } from './filter.pipe';

const routes:Routes=[
  {path:'',component:UserComponent},
  {path:'user',component:UserComponent},
  {path:'todo/:id/:name',component:TodoComponent}
];
@NgModule({
  declarations: [
    AppComponent,UserComponent,TodoComponent, FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
