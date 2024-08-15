import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BroadcasterService } from 'src/app/_services/broadcaster.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ParticipantService } from 'src/app/_services/participant.service';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public loading:boolean;
  public loadingSignup:boolean;
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
    private router: Router
  ) {
    translateService.setDefaultLang(localStorage.getItem('lang'));

    broadcasterService.changeLangBroadcast$.subscribe(res => {
      translateService.setDefaultLang(res.lang);
    });
    this.edit='input';
  }

  registerDataForm = this.fb.group({
    email:['',Validators.compose([Validators.required, Validators.maxLength(100)])],
    phonenumber: new FormControl('', Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(13),  Validators.pattern('^[0-9]*$')])),
    password:['',Validators.required],
    passwordRepeat:['',Validators.required],
    name: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(250), Validators.pattern(`^[a-zA-Z' ]*$`)])),
  });

  ngOnInit() {
    this.passwordIsValid = false;
    this.loadingSignup = false;
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
      this.loadingSignup = true;
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
            if (res.status == 'Success') {
              this.loadingSignup = false;
              Swal.fire({
                title: res.status,
                text: res.message,
                type: 'success',
                allowOutsideClick: false,
                showConfirmButton: true
              }).then((confirm)=>{
                if (confirm.value) {
                  this.router.navigate(['auth/login']);
                }
              });
            } else {
              Swal.fire({
                title: res.status,
                text: res.message,
                type: 'error',
                showConfirmButton: true
              });
              this.loadingSignup = false;
            }
          // });
          }, (reason) => {
            Swal.fire({
              title: 'Gagal Mendaftar!',
              text: reason.error.message,
              type: 'error',
              showConfirmButton: true
            });
            this.loadingSignup = false;
          });
        }
      }
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
