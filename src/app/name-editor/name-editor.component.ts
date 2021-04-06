import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  profileForm=new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    age: new FormControl(''),
    stackDetails: new FormGroup({
      stack: new FormControl(''),
      experience: new FormControl('')
    }),
    address: new FormGroup({
      country: new FormControl(''),
      city: new FormControl('')
    })
  })

  submitFunction(){
    console.log(this.profileForm.value)
  }
  updateFunction(){
    this.profileForm.patchValue({
      firstname: 'chinu',
      lastname: 'limon',
      address:{
        city:'Anandapur',
        country: 'odisha'
      }
    })
  }
}
