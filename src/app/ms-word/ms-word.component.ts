import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ms-word',
  templateUrl: './ms-word.component.html',
  styleUrls: ['./ms-word.component.css'],
})
export class MsWordComponent implements OnInit {
  bgColor;
  cl;
  fontSz;
  fontFam;
  constructor() {}

  ngOnInit(): void {}

  ajouterUnite(szValue) {
    //this.fontSz = szValue + 'px';
    this.fontSz = `${szValue}px`;
  }
}
