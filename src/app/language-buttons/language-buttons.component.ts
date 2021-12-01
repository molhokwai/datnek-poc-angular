import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-language-buttons',
  templateUrl: './language-buttons.component.html',
  styleUrls: ['./language-buttons.component.less']
})
export class LanguageButtonsComponent implements OnInit {

  @Input() language!: string;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
