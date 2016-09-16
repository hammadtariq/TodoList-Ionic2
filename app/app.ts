import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';
import {HomePage} from './pages/home/home';


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp,[FIREBASE_PROVIDERS,
  // Initialize Firebase app  
  defaultFirebase({
    apiKey: "AIzaSyAZB2a7SEmbQQd4r236nQNrRtiBnuhF5hk",
    authDomain: "todo-list-8f989.firebaseapp.com",
    databaseURL: "https://todo-list-8f989.firebaseio.com",
    storageBucket: "todo-list-8f989.appspot.com"
  })
  ]);