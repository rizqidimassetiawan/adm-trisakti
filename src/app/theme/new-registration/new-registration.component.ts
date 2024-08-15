import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BroadcasterService } from 'src/app/_services/broadcaster.service';
import { ParticipantService } from 'src/app/_services/participant.service';
import { AdminManagementService } from 'src/app/_services/admin-management.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-new-registration',
  templateUrl: './new-registration.component.html',
  styleUrls: ['./new-registration.component.scss']
})
export class NewRegistrationComponent implements OnInit {

  public isCollapsed: boolean;
  public loadFilter: boolean;
  public edit: any;
  public loading: boolean;
  protected userProfile: any;
  public registration_number: any;
  public payment_code: any;
  public url_payment: any;
  public participantId: any;
  public email: any;
  public fullname: any;
  public phonenumber: any;
  public isCollapse: boolean;
  public isCollapseReg: boolean;
  public checklist: string;
  public isEducationDataEmpty: boolean;
  public loadingCard: boolean;
  public idPinPrice: string;
  public listSelectionProgram: any;
  public selectionProgram: string;
  public listSelectionPath: any;
  public selectionPath: string;
  public listPINPrice: any;
  public maxProdi: string;
  public pinPrice: string;
  public val: string;
  public listPaymentMethod: any;
  public paymentMethod: string;
  public loadPin: boolean;
  public loadSelectionPath: boolean;
  public showPassport: boolean;
  public isNotFinpay: boolean;
  public mappingPathYearId: number;
  public mappingPathYearIntakeId: number;
  public alertValidationParticipantWithSelectionPath: string;
  @ViewChild('modalOrderForm', { static: true }) public modalOrderForm: any;
  constructor(
    public translateService: TranslateService,
    private broadcasterService: BroadcasterService,
    private userService: ParticipantService,
    private chartService: AdminManagementService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private datePipe: DatePipe) {
    translateService.setDefaultLang(localStorage.getItem('lang'));
    this.translateService.get('CONTENT.alert-validate-participant-with-selection-path').subscribe((l) => { this.alertValidationParticipantWithSelectionPath = l; });
    broadcasterService.changeLangBroadcast$.subscribe(res => {
      translateService.setDefaultLang(res.lang);
      this.translateService.get('CONTENT.alert-validate-participant-with-selection-path').subscribe((l) => { this.alertValidationParticipantWithSelectionPath = l; });
    });
    this.registration_number = +this.route.snapshot.paramMap.get('registration_number');
    this.selectionProgram = '';
    this.selectionPath = '';
    this.pinPrice = '';
    this.idPinPrice = '';
    this.isCollapse = true;
    this.isCollapseReg = true;
    this.isEducationDataEmpty = false;
    this.loading = false;
    this.loadingCard = false;
    this.isNotFinpay = false;
    this.showPassport = false;
  }

  registrationParticipantDataForm = this.fb.group({
    fullname: ({ value: '', disabled: true }),
    NIK: ({ value: '', disabled: true }),
    registration_number: ({ value: '', disabled: true }),
    payment_methodd: ({ value: '', disabled: true }),
    payment_code: ({ value: '', disabled: true })
  });

  registrationDataForm = this.fb.group({
    participant_id: [''],
    semester_intake: [''],
    notes: [''],
    selection_path_id: [''],
    pin_price: [''],
    checklist: [''],
    payment_method: ['']
  });

  ngOnInit() {
    this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
    this.isCollapsed = true;
    this.isCollapse = true;
    this.isCollapseReg = true;
    this.checkEducationData();
    this.loadPaymentMethodDataFilter();
    this.changeSelectionProgram();
  }

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

  // loadDetailParticipantData(registrationNumber) {
  //   this.loadingCard = true;
  //   this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
  //   if (this.userProfile.email !== undefined) {
  //     this.userService.getParticipantDetailData(this.userProfile.email).subscribe(res => {
  //       this.registrationParticipantDataForm.patchValue({ fullname: res.fullname });
  //       this.registrationParticipantDataForm.patchValue({ NIK: res.identify_number ? res.identify_number : res.passport_number  });
  //       this.registrationParticipantDataForm.patchValue({ registration_number: registrationNumber });
  //       this.registrationParticipantDataForm.patchValue({ payment_code: this.payment_code });
  //       if (res[0].identify_number == null) {
  //         this.showPassport = true;
  //       } else {
  //         this.showPassport = false;
  //       }
  //       this.userService.getRegistrationListParticipantData(`registration_number=${registrationNumber}`).subscribe(result => {
  //         const {
  //           payment_method
  //         } = result.data[0];
  //         this.registrationParticipantDataForm.patchValue({ payment_methodd: payment_method });
  //         this.loadingCard = false;
  //       });
  //     });
  //   } else {
  //     const unameEx = this.userProfile.username + '@gmail.com';
  //     this.userService.getParticipantDetailData(unameEx).subscribe(res => {
  //       this.registrationParticipantDataForm.patchValue({ fullname: res.fullname });
  //       this.registrationParticipantDataForm.patchValue({ NIK: res.identify_number.toString() });
  //       this.registrationParticipantDataForm.patchValue({ registration_number: registrationNumber });
  //       this.registrationParticipantDataForm.patchValue({ payment_code: this.payment_code });
  //       this.userService.getRegistrationListParticipantData(`registration_number=${registrationNumber}`).subscribe(result => {
  //         const {
  //           payment_method
  //         } = result.data[0];
  //         this.registrationParticipantDataForm.patchValue({ payment_methodd: payment_method });
  //         this.loadingCard = false;
  //       });
  //     });
  //   }
  // }

  getPaymentUrl() {
    window.open(this.url_payment).focus();
  }

  loadDataDiri() {
    this.userService.getParticipantDetailData(this.userProfile.email).subscribe(res => {
      this.participantId = res.participant_id;
      this.loadEducationData();
    });
  }

  loadEducationData() {
    this.userService.getEducationHistoryData(`${this.participantId}`).subscribe(response => {
      if (response.data.length === 0) {
        this.isEducationDataEmpty = true;
        this.loading = false;
        Swal.fire({
          title: 'Warning!',
          text: "Mohon Maaf, Anda harus melengkapi data diri dan data pendidikan terlebih dahulu sebelum melakukan pemesanan formulir",
          type: 'warning',
          showConfirmButton: true,
          allowOutsideClick: false
        }).then((confirm) => {
          if (confirm.value) {
            this.router.navigate(['/student-profile'])
          }
        });
      } else {
        this.loading = false;
        this.isEducationDataEmpty = false;
        this.checkQuestionnaire();
      }
    });
  }

  // api untuk pengecekan data pendidikan
  checkEducationData() {
    this.loading = true;
    if (this.userProfile.email !== undefined) {
      this.loadDataDiri();
    } else {
      const unameEx = this.userProfile.username + '@gmail.com';
      this.userService.getParticipantDetailData(unameEx).subscribe(res => {
        this.participantId = res.participant_id;
        this.userService.getEducationHistoryData(`${this.participantId}`).subscribe(response => {
          if (response.data.length === 0) {
            this.loading = false;
            Swal.fire({
              title: 'Warning!',
              text: "Mohon Maaf, Anda harus melengkapi data diri dan data pendidikan terlebih dahulu sebelum melakukan pemesanan formulir",
              type: 'warning',
              showConfirmButton: true,
              allowOutsideClick: false
            }).then((confirm) => {
              if (confirm.value) {
                this.router.navigate(['/student-profile'])
              }
            });
            this.isEducationDataEmpty = true;
          } else {
            this.isEducationDataEmpty = false;
            this.loading = false;
          }
        });
      });
    }
  }

  loadPaymentMethodDataFilter() {
    this.loadFilter = true;
    this.chartService.getPaymentMethodData().subscribe((filterArray) => {
      const dataPaymentMethod = [];
      let x: any;
      for (let i = 0; i < filterArray.length; i++) {
        x = {
          value: filterArray[i].id.toString(),
          label: filterArray[i].method
        };
        dataPaymentMethod.push(x);
        this.listPaymentMethod = dataPaymentMethod;
      }
      this.loadFilter = false;
    }, err => {
      this.loadError();
      this.loadFilter = false;
    });
  }

  goToReg() {
    window.open('/registration-history').focus();
  }

  createRegistrationData() {
    this.loading = true;
    this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
    // pengecekan jika user adalah admin dan maba
    if (this.userProfile.email !== undefined) {
      this.userService.getParticipantDetailData(this.userProfile.email).subscribe(res => {
        this.participantId = res.participant_id;
        this.email = res.username;
        this.fullname = res.fullname;
        this.phonenumber = res.mobile_phone_number;
        const data = {
          participant_id: this.participantId,
          selection_path_id: this.registrationDataForm.controls['selection_path_id'].value,
          mapping_path_year_id: this.mappingPathYearId,
          mapping_path_year_intake_id: this.mappingPathYearIntakeId,
        };
            this.userService.postRegistrationDetailData(data).subscribe(res => {
              if (res != null) {
                if (res.status == 'Success') {
                  this.registration_number = res.registration_number;
                  const data = {
                    registration_number: this.registration_number,
                    registration_step_id: 1
                  };
                  Swal.fire({
                    title: res.status,
                    text: 'Pemesanan Formulir telah berhasil selanjutnya klik disini untuk melanjutkan tahapan registrasi',
                    type: 'success',
                    showConfirmButton: true,
                    allowOutsideClick: false,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#ffba57',
                  }).then((confirm) => {
                    if (confirm.value) {
                      this.router.navigate(['registration-history/registration-data/' + this.registration_number]);
                    }
                  });
                  this.loading = false;
                 } else {
                  this.loadError();
                  this.loading = false;
                }
              } else {
                this.loadError();
                this.loading = false;
              }
            }, (reason) => {
              this.loading = false;
              this.broadcasterService.notifBroadcast(true, {
                title: 'Gagal',
                msg: reason.error.message,
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'error'
              });
            });
      });
    }
  }

  changeSelectionProgram() {
    this.loadFilter = true;
    this.loadSelectionPath = true;
      this.userService.getSelectionPathData(`active_status=1`).subscribe((resp) => {
        this.listSelectionPath =
          resp &&
          resp.map((value) => {
            return {
              value: value && value.selection_path_id.toString(),
              label: value.selection_path_name + ' ' + '-' + ' SEMESTER' + ' ' + value.semester_name,
              intake: value.mapping_path_year_intake_id,
              path_year: value.mapping_path_year_id,
              notes: value.notes
            };
          });
        this.loadFilter = false;
        this.loadPin = true;
        this.loadSelectionPath = false;
      }, err => {
        this.loadError();
        this.loadFilter = false;
      });
  }

  changeSelectionPath(event) {
    this.selectionPath = event.value;
    this.loadPin = true;
    if (this.selectionPath !== '') {
      this.mappingPathYearId = event.path_year;
      this.mappingPathYearIntakeId = event.intake;
      this.registrationDataForm.patchValue({ notes : event.notes})
    } else {
      this.loadPin = false;
      this.registrationDataForm.patchValue({ pin_price: 0 })
    }
  }

  checkParticipantWithSelectionPath() {
    this.userService.getValidateParticipantWithSelectionPath(`?participant_id=${this.participantId}&selection_path_id=${this.selectionPath}&mapping_path_year_id=${this.mappingPathYearId}&mapping_path_year_intake_id=${this.mappingPathYearIntakeId}`).subscribe(res => {
      if (res.status == 'Failed') {
        if (res.available == false) {
          Swal.fire({
            title: res.status,
            text: res.message,
            type: 'error',
            showConfirmButton: true,
            allowOutsideClick: false
          });
        }
      } else {
        this.createRegistrationData();
      }
    });
  }

  updatePinPrice(idPin) {
    const pinPrice = [];
    this.chartService.getPINPriceData(`id=${idPin}`).subscribe((response) => {
      if (response.data.length !== 0) {
        let pinPrice = response.data[0].price;
        this.registrationDataForm.patchValue({ pin_price: pinPrice });
      }
    });
  }

  goToStudentProfile() {
    this.router.navigate(['/student-profile']);
  }

  goToRegistrationHistory() {
    this.router.navigate(['/registration-history/payment-registration/' + this.registration_number]);
  }

  checkQuestionnaire() {
    if (this.userProfile.email !== undefined) {
      this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
      this.userService.getParticipantDetailData(this.userProfile.email).subscribe(res => {
        this.participantId = res.participant_id;
        this.userService.getStatusQuestionnaireData(`participant_id=${this.participantId}`).subscribe(res => {
          if (res.status == 0) {
            this.router.navigate(['/', 'questionnaire-data-participant']);
          }
        }, (reason) => {
          this.router.navigate(['/', 'home']);
        });
      });
    }
  }

}
