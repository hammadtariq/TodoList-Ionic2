import {Component, OnInit} from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {DetailPage} from './../detail/detail';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  templateUrl: 'build/pages/home/home.html',
})

export class HomePage implements OnInit {
  todos:Object[] = [];
  items:FirebaseListObservable<any[]>;
  
  constructor(private alertController: AlertController, private navController: NavController, private af:AngularFire) {
    this.todos = [{name:"item1",status:false},{name:"item2",status:true},{name:"item3",status:true}];
  }

  ngOnInit(){
      this.items = this.af.database.list('')
      console.log("data: ",this.items)
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
    let prompt = this.alertController.create({
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
    prompt.present();
  }
  
}
