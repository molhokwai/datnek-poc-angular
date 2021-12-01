import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { UserLanguage } from '../user-languages';
import { UserLanguageService } from '../user-language.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.less']
})
export class LanguagesComponent implements OnInit {

  items = this.userLanguageService.getItems()
  languages = this.userLanguageService.getLanguages()
  languagesCount = this.userLanguageService.getLanguagesCount()

  userLanguageForm = this.formBuilder.group({
      userName: '',
      language: '',
      spokenLevel: '',
      writtenLevel: '',
      understandingLevel: ''
  });

  constructor(
    private userLanguageService: UserLanguageService,
    private formBuilder: FormBuilder,

  ) { }

  ngOnInit(): void {
  }

  modify(item: UserLanguage): void {
    this.userLanguageForm.controls['userName'].setValue(item.userName)
    this.userLanguageForm.controls['language'].setValue(item.language)
    this.userLanguageForm.controls['spokenLevel'].setValue(item.spokenLevel)
    this.userLanguageForm.controls['writtenLevel'].setValue(item.writtenLevel)
    this.userLanguageForm.controls['understandingLevel'].setValue(item.understandingLevel)
  }

  view(item: UserLanguage): void {
    
  }

  delete(item: UserLanguage): void {
    this.userLanguageService.delete(this.userLanguageForm.value)
  }


  onNotify(language: string): void {
    window.alert('Translate page...' + language)
  }

  onSubmit(): void {
    this.userLanguageService.save(this.userLanguageForm.value)
    console.log('User Language saved', this.userLanguageForm.value);
    this.userLanguageForm.reset();
  }  

}
