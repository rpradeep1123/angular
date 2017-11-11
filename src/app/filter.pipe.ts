import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todos: any, searchTerm: any): any {
    if(searchTerm===undefined) return todos;
    return todos.filter(function(todo){
      return todo.title.toLowerCase().includes(searchTerm.toLowerCase());
    })
  }

}
