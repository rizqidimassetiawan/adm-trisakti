import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BroadcasterService } from 'src/app/_services/broadcaster.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ParticipantService } from 'src/app/_services/participant.service';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-activation-account',
  templateUrl: './activation-account.component.html',
  styleUrls: ['./activation-account.component.scss']
})
export class ActivationAccountComponent implements OnInit {
  @ViewChild('registerModalSuccess', { static: true }) public registerModalSuccess: any;
  @ViewChild('registerModalFailed', { static: true }) public registerModalFailed: any;

  public loading:boolean;
  public edit: any;
  public status: any;

  public passwordIsValid :boolean;
  public passwordRepeatIsValid : boolean;

  constructor(
    public translateService: TranslateService,
    private broadcasterService: BroadcasterService,
    private fb: FormBuilder,
    private chartService: ParticipantService,
    private modalService: NgbModal,
  ) {
    translateService.setDefaultLang(localStorage.getItem('lang'));

    broadcasterService.changeLangBroadcast$.subscribe(res => {
      translateService.setDefaultLang(res.lang);
    });
    this.edit='input';
  }

  registerDataForm = this.fb.group({
    email:['',Validators.required],
    phonenumber: new FormControl('', Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(13),  Validators.pattern('^[0-9]*$')])),
    password:['',Validators.required],
    passwordRepeat:['',Validators.required],
    name:['',Validators.required]
  });

  ngOnInit() {
    this.passwordIsValid = false;
  }

  passwordValid(event) {
    this.passwordIsValid = event;
  }

  checkPasswordRepeat(event) {
    if(event.target.value == this.registerDataForm.controls.password.value) {
      this.passwordRepeatIsValid = true;
    } else {
      this.passwordRepeatIsValid = false;
    }
  }

  createSelectionData(){
    // if (this.registerDataForm.valid) {
      this.loading = true;
      if (this.edit == 'input') {
        const data = {
          email : this.registerDataForm.controls['email'].value,
          name: this.registerDataForm.controls['name'].value,
          mobile_phone_number: this.registerDataForm.controls['phonenumber'].value,
          password: this.registerDataForm.controls['password'].value
        };
        const data1 = {
          username : this.registerDataForm.controls['email'].value,
          name: this.registerDataForm.controls['name'].value,
          password: this.registerDataForm.controls['password'].value
        };
        const { email, name, phonenumber, password } = this.registerDataForm.value;
        let payloadRegister = {
          username: email,
          name: name,
          mobile_phone_number: phonenumber,
          password: password
        }
        if(this.registerDataForm.controls['name'].value.length != 0){
          this.chartService.postRegistrationData(data).subscribe(res => {
              this.status = res.status;
              if(res.status == 'Success') {
                this.chartService.postEmailConfirmationData(payloadRegister).subscribe(res => {
                  this.status = 'Success';
                  this.registerModalSuccess.show();
                });
              }else if(res.status == 'Failed' ) {
                Swal.fire({
                  title: res.status,
                  text: res.message,
                  type: 'error',
                  showConfirmButton: true
                });
              }
          // });
          }, (reason) => {
            Swal.fire({
              title: 'Gagal Mendaftar!',
              text: 'Mohon maaf, pendaftaran tidak berhasil. Email sudah pernah digunakan, silakan coba lagi dengan email lainnya.',
              type: 'error',
              showConfirmButton: true
            });
            // this.registerModalFailed.show();
          });
        }
      }
    // }
  }

  loadSuccess() {
    this.broadcasterService.notifBroadcast(true, {
      title: 'Success',
      msg: 'Data yang anda masukkan sudah tersimpan',
      timeout: 5000,
      theme: 'default',
      position: 'top-right',
      type: 'success'
    });
  }

  loadError() {
    this.broadcasterService.notifBroadcast(true, {
      title: 'Gagal',
      msg: 'Terjadi kesalahan sistem',
      timeout: 5000,
      theme: 'default',
      position: 'top-right',
      type: 'error'
    });
  }
}
