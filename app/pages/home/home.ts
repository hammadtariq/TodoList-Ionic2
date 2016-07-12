import {Component} from '@angular/core';
import {Alert, NavController} from 'ionic-angular';
import {DetailPage} from './../detail/detail';

@Component({
  templateUrl: 'build/pages/home/home.html',
})

export class HomePage {
  todos:Object[] = [];

  constructor(private navController: NavController) {
    this.todos = [{name:"item1",status:false},{name:"item2",status:true},{name:"item3",status:true}];
  }

  itemCompleted(index){
    this.todos[index]['status'] = true;
    console.log('i am index: ',index);
    this.navController.push(DetailPage,{obj:this.todos[index]});
  }

  addTodo(){
    this.doPrompt()    
  }
  
  doPrompt(){
    let prompt = Alert.create({
      title: 'Todo',
      message: "add a todo",
      inputs: [
        {
          name: 'todo',
          placeholder: 'enter text here ...'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
            this.todos.push({name:data.todo,status:false})
          }
        }
      ]
    });
    this.navController.present(prompt);
  }
  
}
