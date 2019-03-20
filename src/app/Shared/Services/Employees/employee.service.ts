import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  newEmployee = new FormGroup({
    Name: new FormControl("", [
      Validators.required,
      Validators.minLength(4),
    ]),
    Phone: new FormControl("", [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10)
    ]),
    Email: new FormControl("", [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ]),
    Adddress : new FormControl("",[
      Validators.required
    ])

  })


  constructor(
    private firestore: AngularFirestore,
  ) { }
}
