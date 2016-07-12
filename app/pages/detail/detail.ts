import {Component} from '@angular/core';
import {NavController,NavParams} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/detail/detail.html',
})

export class DetailPage {
    itemDetail:Object;
  constructor(private navController: NavController, private navParams:NavParams) {
        this.itemDetail = this.navParams.get('obj');
    }

}
