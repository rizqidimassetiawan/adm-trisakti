import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BroadcasterService } from 'src/app/_services/broadcaster.service';
import { ParticipantService } from 'src/app/_services/participant.service';
import { AdminManagementService } from 'src/app/_services/admin-management.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, NavigationEnd, NavigationStart } from '@angular/router';
import { DatePipe } from '@angular/common';
import { DataTableDirective } from 'angular-datatables';
import { Subject, Subscription } from 'rxjs';
import { Location, PopStateEvent } from "@angular/common";
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-payment-registration',
  templateUrl: './payment-registration.component.html',
  styleUrls: ['./payment-registration.component.scss']
})
export class PaymentRegistrationComponent implements OnInit {

  public registration_number: any;
  public loading:boolean;
  public edit:any;
  public loadFilter:boolean;
  public userProfile:any;
  public paymentMethodName:any;
  public checklist:string;
  public isPaymentMethodNotNull: boolean;

  private lastPoppedUrl: string;
  public bodyClasses = 'fixed-body';
  private yScrollStack: number[] = [];

  //for filtering (dropdown)
  public listPaymentMethod:any;
  public paymentMethod:string;
  // subscription: Subscription;

  constructor(public translateService: TranslateService,
    private broadcasterService: BroadcasterService,
    private userService: ParticipantService,
    private chartService: AdminManagementService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private location: Location,
    private viewportScroller: ViewportScroller
    ) {

    translateService.setDefaultLang(localStorage.getItem('lang'));
    broadcasterService.changeLangBroadcast$.subscribe(res => {
      translateService.setDefaultLang(res.lang);
    });
    this.registration_number = +this.route.snapshot.paramMap.get('registration_number');
    this.paymentMethod = '0';
    this.isPaymentMethodNotNull = false;
    this.viewportScroller.scrollToPosition([0, 0]);

  }

  registrationDataForm = this.fb.group({
    registration_number:[''],
    program:[''],
    selection_path:[''],
    payment_method :[''],
    fullname:[''],
    NIK:[''],
    registration_fee:[''],
    checklist: ['']
  });


  ngOnInit() {
  //   this.router.events.subscribe((evt) => {
  //     if (!(evt instanceof NavigationEnd)) {
  //         return;
  //     }
  //     document.body.scrollTop = 0;
  // });
  //   this.location.subscribe((ev:PopStateEvent) => {
  //     this.lastPoppedUrl = ev.url;
  // });

  // this.router.events.pipe(
  //   filter(event => event instanceof NavigationEnd)
  //   ).subscribe(() => window.scroll(0,0));

  // this.router.events.subscribe((ev:any) => {
  //     if (ev instanceof NavigationStart) {
  //         if (ev.url != this.lastPoppedUrl)
  //             this.yScrollStack.push(window.scrollY);
  //     } else if (ev instanceof NavigationEnd) {
  //         if (ev.url == this.lastPoppedUrl) {
  //             this.lastPoppedUrl = undefined;
  //             window.scrollTo(0, this.yScrollStack.pop());
  //         } else
  //             window.scrollTo(0, 0);
  //     }
  // });
    //Filtering
    this.loadPaymentMethodDataFilter();

    //Data
    this.loadDetailParticipantPaymentData(this.registration_number);
    this.loadDetailParticipantPaymentResultData(this.registration_number);
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

  mode(param) {
    this.edit = param;
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

  onDeselected(val) {
    switch (val) {
      case 'paymentMethod':
        this.paymentMethod = '0';
        break;
    }
  }

  loadPaymentMethodDataFilter(){
    this.loadFilter= true;
    this.chartService.getPaymentMethodData().subscribe((filterArray) => {
      const dataPaymentMethod = [];
      let x:any;
      for(let i = 0; i< filterArray.length; i++){
        x = {
          value: filterArray[i].id.toString(),
          label: filterArray[i].method
        };
        dataPaymentMethod.push(x);
        this.listPaymentMethod = dataPaymentMethod;
      }
      this.loadFilter = false;
    }, err =>{
      this.loadError();
      this.loadFilter = false;
    });
  }

  loadDetailParticipantPaymentData(registration_number) {
    this.loading = true;
    this.edit = 'edit';
    this.userService.getRegistrationListParticipantData(`registration_number=${registration_number}`).subscribe(result => {
      if (result) {
        const {
          registration_number,
          selection_program,
          selection_path,
          payment_method_id
        } = result.data[0];
        this.registrationDataForm.patchValue({registration_number: registration_number});
        this.registrationDataForm.patchValue({program: selection_program});
        this.registrationDataForm.patchValue({selection_path: result.data[0]['selection_path']});
        this.registrationDataForm.patchValue({payment_method: payment_method_id});
        this.registrationDataForm.patchValue({registration_fee: result.data[0]['price']});
        this.loading = false;
      }
    }, err => {
      this.broadcasterService.notifBroadcast(true, {
        title: 'Gagal',
        msg: err.error.message,
        timeout: 5000,
        theme: 'default',
        position: 'top-right',
        type: 'error'
      });
      this.loading = false;
    });
  }

  createPaymentRegistrationData(){
    this.loading = true;
    const data = {
      registration_number : this.registration_number,
      payment_method : this.registrationDataForm.controls['payment_method'].value,
      payment_status : 2
    };
    this.chartService.upRegistrationData(data).subscribe(res => {
      if(res != null) {
        if(res.status == 'Success') {
          this.loadSuccess();
          this.paymentMethodName = res.payment_method_name;
          // console.warn(res);
          // console.warn(this.paymentMethodName);
          // this.renderStudyProgramData();
          this.registrationDataForm.patchValue({payment_method: res.payment_method_name});

          this.registration_number = res.registration_number;
          const data = {
            registration_number : this.registration_number,
            registration_step_id: 2
          }
          this.userService.postRegistrationHistoryData(data).subscribe(res => {
            if(res != null) {
              if(res.status == 'Success') {
                this.loadSuccess();
              } else {
                this.loadError();
              }
            } else {
              this.loadError();
            }
          }, (reason) => {
            this.loadError();
          });
          this.loading=false;
        } else {
          this.loadError();
        }
      } else {
        this.loadError();
      }
    }, (reason) => {
      this.loadError();
    });
  }

  loadDetailParticipantPaymentResultData(registration_number) {
    this.loading = true;
    this.edit = 'edit';
    this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (this.userProfile.email !== undefined) {
    this.userService.getParticipantDetailData(this.userProfile.email).subscribe(res => {
      this.registrationDataForm.patchValue({fullname: res.fullname});
      this.registrationDataForm.patchValue({NIK: res.identify_number});
      this.userService.getRegistrationListParticipantData(`registration_number=${this.registration_number}`).subscribe(result => {
        this.registrationDataForm.patchValue({registration_number: this.registration_number});
        this.registrationDataForm.patchValue({payment_method: result.data[0].payment_method_id});
        this.registrationDataForm.patchValue({registration_fee: result.data[0].price});
        if (result.data[0].payment_method_id !== null) {
          this.isPaymentMethodNotNull = true;
        } else {
          this.isPaymentMethodNotNull = false;
        }
        // this.registrationDataForm.patchValue({registration_fee: });
      });
    });
    } else {
      const unameEx = this.userProfile.username + '@gmail.com';
      this.userService.getParticipantDetailData(unameEx).subscribe(res => {
        this.registrationDataForm.patchValue({fullname: res.fullname});
        this.registrationDataForm.patchValue({NIK: res.identify_number});
        this.userService.getRegistrationListParticipantData(`registration_number=${this.registration_number}`).subscribe(result => {
          this.registrationDataForm.patchValue({registration_number: this.registration_number});
          this.registrationDataForm.patchValue({payment_method: result.data[0].payment_method_id});
          this.registrationDataForm.patchValue({registration_fee: result.data[0].price});
          // window.scrollTo(0, 0);
          if (result.data[0].payment_method_id !== null) {
            this.isPaymentMethodNotNull = true;
          } else {
            this.isPaymentMethodNotNull = false;
          }
          this.loading = false;
        //   this.location.subscribe((ev:PopStateEvent) => {
        //     this.lastPoppedUrl = ev.url;
        // });
        });
      });
    }
  }

  goToRegistrationHistory() {
    window.location.href='registration-history/';
    // this.router.navigate(['/','registration-history'])
  }
}
