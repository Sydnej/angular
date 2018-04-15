import { Component, OnInit } from '@angular/core';
import { NgSwitch } from '@angular/common';

@Component({
  selector: 'app-card-creator',
  templateUrl: './card-creator.component.html',
  styleUrls: ['./card-creator.component.css']
})
export class CardCreatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  text : string;
  text2 : string;
  categories = [
    {name:'Kategoria AM', cat:'AM'},
    {name:'Kategoria A1', cat:'A1'},
    {name:'Kategoria A2', cat:'A2'},
    {name:'Kategoria A', cat:'A'},
    {name:'Kategoria B', cat:'B'},
    {name:'Kategoria B+E', cat:'BE'},
    {name:'Kategoria C', cat:'C'},
    {name:'Kategoria C+E', cat:'CE'},
    {name:'Kategoria C1', cat:'C1'},
    {name:'Kategoria C1+E', cat:'C1E'},
    {name:'Kategoria D', cat:'D'},
    {name:'Kategoria D+E', cat:'DE'},
    {name:'Kategoria D1', cat:'D1'},
    {name:'Kategoria D1+E', cat:'D1E'},
  ];

  selectCategory = this.categories[0];

  clickMe(){
    this.text2 = this.text;
  }
}
