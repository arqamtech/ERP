import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from 'src/app/Shared/Services/Departments/departments.service';
import { ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-adddepartment',
  templateUrl: './adddepartment.component.html',
  styleUrls: ['./adddepartment.component.scss'],
})
export class AdddepartmentComponent implements OnInit {

  constructor(
    private depSer: DepartmentsService,
    public toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
  ) {

  }

  ngOnInit() {
  }
  async onSubmit() {
    const loading = await this.loadingCtrl.create({
      message: 'Adding Department',
    });
    loading.present();




    let data = this.depSer.newDepartment.value;

    if (this.depSer.newDepartment.valid) {

      this.depSer.addDepartment(data).then(res => {
      });
    } else {
      this.presentToast("Enter a name for the Department");
    }
    loading.dismiss();
  }


  deps;

  getCats = () =>
    this.depSer
      .getDepartment()
      .subscribe(res => (this.deps = res));

  deleteCat(data) {
    this.depSer.deleteDepartment(data);
  }



  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: 'bottom',

    });
    toast.present();
  }
}