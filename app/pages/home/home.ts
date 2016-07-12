import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
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



}
