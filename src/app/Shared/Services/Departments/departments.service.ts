import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {



  constructor(
    private firestore: AngularFirestore,
  ) {
  }



  newDepartment = new FormGroup({
    Name: new FormControl("", [
      Validators.required,
      Validators.minLength(4),
    ]),


  })
  addDepartment(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("Department")
        .add(data)
        .then(res => { }, err => reject(err));
    });
  }

  getDepartment() {
    return this.firestore.collection("Department").snapshotChanges();
  }

  deleteDepartment(data) {
    return this.firestore
      .collection("Department")
      .doc(data.payload.doc.id)
      .delete();
  }

}
