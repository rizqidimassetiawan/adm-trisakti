import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BroadcasterService } from 'src/app/_services/broadcaster.service';
import { AdminManagementService } from 'src/app/_services/admin-management.service';
import { ParticipantService } from 'src/app/_services/participant.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { WizardComponent } from 'ng2-archwizard/dist';
import Swal from 'sweetalert2';
import * as moment from 'moment';
import * as _ from 'underscore';

@Component({
  selector: 'app-home',
  templateUrl: './new-student-registration-detail.component.html',
  styleUrls: ['./new-student-registration-detail.component.scss']
})
export class NewStudentRegistrationDetailComponent implements OnInit {
  @ViewChild(WizardComponent, { static: true }) public wizard: WizardComponent;
  @ViewChild('uploadDocumentModals', { static: true }) public uploadDocumentModals: any;
  @ViewChild('showTableDoc', { static: true }) public showTableDoc: any;
  @ViewChild('modalPreview', { static: true }) public modalPreview: any;
  @ViewChild('revisedModals', { static: true }) public revisedModals: any;
  @ViewChild('showTableDocDetails', { static: true }) public showTableDocDetails: any;
  @ViewChildren(DataTableDirective) dtElements: QueryList<DataTableDirective>;
  public tableDocument: Array<any>;
  public dtTrigger = new Subject();
  public dtOptions: any = [];
  public registrationNumber:any;
  private newstudentId:any;
  private username:any;
  public loadTableDocument: boolean;
  public biodatasForms: FormGroup;
  public parentsForm: FormGroup;
  public rejectedForm: FormGroup;
  public uploadFileForm: FormGroup;
  public uploadRaportFileForm: FormGroup;
  public loadBiodata: boolean;
  public notHavePhoto: boolean;
  public photoCard: any;
  public userProfile: any;
  public participantId: any;
  public specialNeeds: string;
  public province: string;
  public city: string;
  public district: string;
  public colorBlind: string;
  public religion: string;
  public gender: string;
  public provinceBirth: string;
  public countryBirth: string;
  public cityBirth: string;
  public nationality: string;
  public country: string;
  public countryOrigin: string;
  public realtionshipSelected: string;
  public listReligion: any;
  public listGender: any;
  public listCountryBirth: any;
  public listProvinceBirth: any;
  public listCityBirth: any;
  public listNationality: any;
  public listCountry: any;
  public listOptions: any;
  public submitloader: boolean;
  public submitted: boolean;
  public isIndonesianNationality: boolean;
  public isIndonesiaBirthCountry: boolean;
  public isIndonesiaCountry: boolean;
  public loadEducationModal: boolean;
  public showSpecialNeeds: boolean;
  public hiddenAddressDetail: boolean;
  public haveParents: boolean;
  public colorBlindList: Array<any>;
  public listFamilyRelationship: Array<any>;
  public listProvince: any;
  public listCity: any;
  public listDistrict: any;
  private filesControl = new FormControl(null);
  public formDataBiodataUpdate: FormData;
  public urlPhoto: any
  public previewPhoto: any
  public loadingSaveGambar: boolean;
  public formDataDocument: FormData;
  public formDataDocumentCreate: FormData;
  public formRaportEdit: FormData;
  public formRaportInput: FormData;
  public errType: boolean;
  public isUpdatedDoc: boolean;
  public errSize: boolean;
  public loadingDownload: boolean;
  public loadingUpload: boolean;
  public loadingParents: boolean;
  public confirmation: string;
  public confirmationText: string;
  public documentId: any;
  public documentIdRaport: any;
  public documentTypeId: any;
  public documentTypeIdRaport: any;
  public documentName: any;
  public tableDataRaport: Array<any>;
  public loadTableRaport: boolean;
  public isUpdatedRaport: boolean;
  public loadingUploadRaport: boolean;
  public totalRecord: number;
  public pageDocument: number = 1;
  public reportID: any;
  public semesterID: any;
  public utbkID: any;
  public no: string;
  public yes: string;
  public dateTransform: string;
  public steps: number;
  public isViewData: boolean;
  public loadCard: boolean;
  public dataEmail: any;
  public haveNimEmail: boolean;
  public isComplete: boolean;
  public dataRevised: any;
  public maskDateSlash = [/\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  constructor(
    public translateService: TranslateService,
    private broadcasterService: BroadcasterService,
    private chartService: AdminManagementService,
    private userService: ParticipantService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) {
    translateService.setDefaultLang(localStorage.getItem('lang'));
    this.translateService.get('ROOT.no').subscribe((l) => { this.no = l; });
    this.translateService.get('ROOT.yes').subscribe((l) => { this.yes = l; });
    this.translateService.get('ROOT.confirmation').subscribe((l) => { this.confirmation = l; });
    this.translateService.get('ROOT.delete_confirmation').subscribe((l) => { this.confirmationText = l; });
    broadcasterService.changeLangBroadcast$.subscribe(res => {
      translateService.setDefaultLang(res.lang);
      this.translateService.get('ROOT.no').subscribe((l) => { this.no = l; });
      this.translateService.get('ROOT.yes').subscribe((l) => { this.yes = l; });
      this.translateService.get('ROOT.confirmation').subscribe((l) => { this.confirmation = l; });
      this.translateService.get('ROOT.delete_confirmation').subscribe((l) => { this.confirmationText = l; });
    });
    const data = JSON.parse(localStorage.getItem('userProfile'));
    this.username = data.email;
    this.registrationNumber = this.route.snapshot.paramMap.get('registrationnumber');
    this.newstudentId = this.route.snapshot.paramMap.get('id');
    this.biodatasForms = this.fb.group({
      fullname: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(100), Validators.pattern('^[a-zA-Z ]*$')])),
      gender: ['', Validators.required],
      religion: ['', Validators.required],
      country_birth: ['', Validators.required],
      province_birth: ['', Validators.required],
      province_birth_other: ['', Validators.required],
      city_birth: ['', Validators.required],
      city_birth_other: ['', Validators.required],
      birthdate: new FormControl('', Validators.compose([Validators.required])),
      nationality: ['', Validators.required],
      country_origin: ['', Validators.required],
      NIK: new FormControl('', Validators.compose([Validators.required, Validators.minLength(16), Validators.maxLength(16), Validators.pattern('^[0-9]*$')])),
      address_country: ['', Validators.required],
      address_province: ['', Validators.required],
      address_city: ['', Validators.required],
      address_district: [''],
      address_detail: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(150)])),
      zipcode: new FormControl('', Validators.compose([Validators.maxLength(5), Validators.minLength(5), Validators.pattern('^[0-9]*$')])),
      house_phone_number: new FormControl('', [Validators.maxLength(11), Validators.pattern('^[0-9]*$')]),
      mobile_phone_number: new FormControl('', Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(13), Validators.pattern('^[0-9]*$')])),
      email: ['', Validators.required],
      color_blind: new FormControl('', Validators.required),
      special_needs: new FormControl('', Validators.required),
      special_needs_text: new FormControl('', Validators.required),
      passport_number: new FormControl('', Validators.compose([Validators.required, Validators.minLength(7), Validators.maxLength(7), Validators.pattern('^[0-9]*$')])),
      passport_expiry_date: new FormControl('', Validators.required),
      nisn: new FormControl('', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')])),
      nis: new FormControl('', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern('^[0-9]*$')])),
      ijazah_number: new FormControl('', Validators.compose([Validators.required, Validators.minLength(14), Validators.maxLength(25)])),
    });
    this.parentsForm = this.fb.group({
      parents: new FormControl('', Validators.required),
      mothersName: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(100), Validators.pattern('^[a-zA-Z ]*$')])),
      fathersName: new FormControl('',  Validators.compose([Validators.required, Validators.maxLength(100), Validators.pattern('^[a-zA-Z ]*$')])),
      maleRelativesName: new FormControl('',  Validators.compose([Validators.required, Validators.maxLength(100), Validators.pattern('^[a-zA-Z ]*$')])),
      mothersPhone: new FormControl('', Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(13), Validators.pattern('^[0-9]*$')])),
      fathersPhone: new FormControl('', Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(13), Validators.pattern('^[0-9]*$')])),
      maleRelativesPhone: new FormControl('', Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(13), Validators.pattern('^[0-9]*$')])),
      mothersIdentityNumber: new FormControl('',  Validators.compose([Validators.required, Validators.minLength(16), Validators.maxLength(16), Validators.pattern('^[0-9]*$')])),
      fathersIdentityNumber: new FormControl('',  Validators.compose([Validators.required, Validators.minLength(16), Validators.maxLength(16), Validators.pattern('^[0-9]*$')])),
      maleRelativesIdentityNumber: new FormControl('',  Validators.compose([Validators.required, Validators.minLength(16), Validators.maxLength(16), Validators.pattern('^[0-9]*$')])),
    });
    this.formDataDocument = new FormData();
    this.formDataDocumentCreate = new FormData();
    this.formRaportInput = new FormData();
    this.formRaportEdit = new FormData();
    this.rejectedForm = this.fb.group({
      desc_rejected: new FormControl('')
    });
    this.uploadFileForm = this.fb.group({
      url: new FormControl('', Validators.required)
    });
    this.uploadRaportFileForm = this.fb.group({
      url: new FormControl('', Validators.required)
    });
    this.listOptions = [
      {
        value: '0',
        label: 'Tidak'
      },
      {
        value: '1',
        label: 'Ya'
      },
    ];
    this.colorBlindList = [
      {
        value: 'Tidak',
        label: 'Tidak'
      },
      {
        value: 'Ya',
        label: 'Ya'
      },
      {
        value: 'Parsial',
        label: 'Parsial'
      },
    ];
    this.listFamilyRelationship = [
      {
        value: '1',
        label: 'Orang Tua'
      },
      {
        value: '2',
        label: 'Wali'
      }
    ];
    this.loadingUpload = false;
    this.loadingDownload = false;
    this.loadBiodata = false;
    this.notHavePhoto = false;
    this.showSpecialNeeds = false;
    this.showSpecialNeeds = false;
    this.isIndonesianNationality = false;
    this.isIndonesiaBirthCountry = false;
    this.loadingSaveGambar = false;
    this.isIndonesiaCountry = false;
    this.hiddenAddressDetail = true;
    this.loadingParents = false;
    this.isUpdatedRaport = false;
    this.isUpdatedDoc = false;
    this.loadTableRaport = false;
    this.loadingUploadRaport = false;
    this.loadTableDocument = false;
    this.isViewData = false;
    this.loadCard = false;
    this.haveNimEmail = false;
    this.isComplete =  false;
    this.tableDataRaport = [];
    this.photoCard = [];
    this.tableDocument = [];
    this.dataEmail = [];
    this.dataRevised = [];
  }

  get f() {
    return this.biodatasForms.controls;
  }

  get fp() {
    return this.parentsForm.controls;
  }

  get fuf() {
    return this.uploadFileForm.controls;
  }

  get fur() {
    return this.uploadRaportFileForm.controls;
  }


  ngOnInit() {
    this.loadReligionDataList();
    this.loadGenderDataList();
    this.loadNationalityDataList();
    this.loadCountryBirthDataList();
    this.loadProvinceBirthDataList();
    this.getParticipantId();
  }

  getParticipantId() {
    this.loadBiodata = true;
    this.userService.getParticipantDataInformation(`?username=${this.username}`).subscribe(resp => {
      if (resp.length !== 0) {
        this.participantId = resp.participant_id;
        this.loadBiodata = false;
        this.checkIsApprovedDoc();
        this.getBiodatas();
      } else {
        this.loadBiodata = false;
      }
    });
  }

  checkIsApprovedDoc() {
    this.checkDocumentStatusApproval();
  }

  goToParentsData() {
    this.wizard.navigation.goToStep(1);
    this.getParents();
  }

  getParents() {
    this.loadingParents = true;
    this.userService.getFamilyNewstudent(`?participant_id=${this.participantId}`).subscribe(res => {
      if (res.is_guardian == false) {
        this.loadingParents = false;
        this.realtionshipSelected = '1';
        this.haveParents = true;
        this.parentsForm.patchValue({ fathersName: res.father_name ? res.father_name : ''});
        this.parentsForm.patchValue({ fathersPhone: res.father_mobile_phone_number ? res.father_mobile_phone_number : ''});
        this.parentsForm.patchValue({ fathersIdentityNumber: res.father_identify_number ? res.father_identify_number : ''});
        this.parentsForm.patchValue({ mothersName: res.mother_name ? res.mother_name : ''});
        this.parentsForm.patchValue({ mothersPhone: res.mother_mobile_phone_number ? res.mother_mobile_phone_number : ''});
        this.parentsForm.patchValue({ mothersIdentityNumber: res.mother_identify_number ? res.mother_identify_number : ''});
        this.parentsForm.get('maleRelativesName').clearValidators();
        this.parentsForm.get('maleRelativesName').updateValueAndValidity();
        this.parentsForm.get('maleRelativesPhone').clearValidators();
        this.parentsForm.get('maleRelativesPhone').updateValueAndValidity();
        this.parentsForm.get('maleRelativesIdentityNumber').clearValidators();
        this.parentsForm.get('maleRelativesIdentityNumber').updateValueAndValidity();
      } else if (res.is_guardian == true) {
        this.realtionshipSelected = '2';
        this.haveParents = false;
        this.loadingParents = false;
        this.parentsForm.patchValue({ maleRelativesName: res.guardian_name ? res.guardian_name : ''});
        this.parentsForm.patchValue({ maleRelativesPhone: res.guardian_mobile_phone_number ? res.guardian_mobile_phone_number : ''});
        this.parentsForm.patchValue({ maleRelativesIdentityNumber: res.guardian_identify_number ? res.guardian_identify_number : ''});
        this.parentsForm.get('fathersName').clearValidators();
        this.parentsForm.get('fathersName').updateValueAndValidity();
        this.parentsForm.get('fathersPhone').clearValidators();
        this.parentsForm.get('fathersPhone').updateValueAndValidity();
        this.parentsForm.get('fathersIdentityNumber').clearValidators();
        this.parentsForm.get('fathersIdentityNumber').updateValueAndValidity();
        this.parentsForm.get('mothersName').clearValidators();
        this.parentsForm.get('mothersName').updateValueAndValidity();
        this.parentsForm.get('mothersPhone').clearValidators();
        this.parentsForm.get('mothersPhone').updateValueAndValidity();
        this.parentsForm.get('mothersIdentityNumber').clearValidators();
        this.parentsForm.get('mothersIdentityNumber').updateValueAndValidity();
      } else {
        this.loadingParents = false;
      }
    });
  }

  gotoStepDocument() {
    this.wizard.navigation.goToStep(2);
    this.checkDocumentStatusApproval();
    this.checkCompletenessDocument();
    this.renderDocument();
  }

  goToNim() {
    this.wizard.navigation.goToStep(3);
    this.getNim();
  }


  getNim() {
    this.loadCard = true;
    this.userService.getNewStudentRegistration(`?participant_id=${this.participantId}&registration_number=${this.registrationNumber}`).subscribe(res => {
      this.loadCard = false;
      this.dataEmail = res[0];
      if (res.length != 0) {
        if (res[0].university_email != null && res[0].student_id != null) {
          this.haveNimEmail = true;
        } else {
          this.haveNimEmail = false;
        }
      } else {
        this.haveNimEmail = false;
      }
    });
    }

  loadGenderDataList() {
    this.loadBiodata = true;
    this.chartService.getGender().subscribe((res) => {
      this.loadBiodata = false;
      this.listGender = res && res.map((value) => {
        const { id, gender } = value;
        return { value: id.toString(), label: gender }
      });
    }, (reason) => {
      this.loadBiodata = false;
      this.broadcasterService.notifBroadcast(true, {
        title: 'Gagal',
        msg: reason.error.message,
        timeout: 5000,
        theme: 'default',
        position: 'top-right',
        type: 'error'
      });
    });
  }

  loadReligionDataList() {
    this.loadBiodata = true;
    this.userService.getReligionData().subscribe((res) => {
      this.loadBiodata = false;
      this.listReligion = res && res.map((value) => {
        const { id, religion } = value;
        return { value: id.toString(), label: religion }
      });
    }, (reason) => {
      this.loadBiodata = false;
      this.broadcasterService.notifBroadcast(true, {
        title: 'Gagal',
        msg: reason.error.message,
        timeout: 5000,
        theme: 'default',
        position: 'top-right',
        type: 'error'
      });
    });
  }

  loadNationalityDataList() {
    this.loadBiodata = true;
    this.chartService.getNationalityData().subscribe((res) => {
      this.listNationality = res && res.map((value) => {
        const { id, nationality } = value;
        return { value: id.toString(), label: nationality }
      });
      this.loadBiodata = false;
    }, (reason) => {
      this.loadBiodata = false;
      this.broadcasterService.notifBroadcast(true, {
        title: 'Gagal',
        msg: reason.error.message,
        timeout: 5000,
        theme: 'default',
        position: 'top-right',
        type: 'error'
      });
    });
  }

  loadCountryBirthDataList() {
    this.loadBiodata = true;
    this.userService.getCountryData().subscribe((res) => {
      this.listCountryBirth = res && res.map((value) => {
        const { id, detail_name } = value;
        return { value: id.toString(), label: detail_name }
      });
      this.loadBiodata = false;
    }, (reason) => {
      this.loadBiodata = false;
      this.broadcasterService.notifBroadcast(true, {
        title: 'Gagal',
        msg: reason.error.message,
        timeout: 5000,
        theme: 'default',
        position: 'top-right',
        type: 'error'
      });
    });
  }

  changeProvinceBirth(value) {
    this.loadBiodata = true;
    if (value !== undefined) {
      if (value == 1) {
        this.loadBiodata = false;
        this.loadProvinceBirthDataList();
        this.isIndonesiaBirthCountry = true;
        this.biodatasForms.get('province_birth').setValidators(Validators.required);
        this.biodatasForms.get('province_birth').updateValueAndValidity();
        this.biodatasForms.get('city_birth').setValidators(Validators.required);
        this.biodatasForms.get('city_birth').updateValueAndValidity();
        this.biodatasForms.get('province_birth_other').clearValidators();
        this.biodatasForms.get('province_birth_other').updateValueAndValidity();
        this.biodatasForms.get('city_birth_other').clearValidators();
        this.biodatasForms.get('city_birth_other').updateValueAndValidity();
        this.biodatasForms.get('city_birth_other').reset();
        this.biodatasForms.get('province_birth_other').reset();
      } else {
        this.loadBiodata = false;
        this.biodatasForms.get('province_birth').clearValidators();
        this.biodatasForms.get('province_birth').updateValueAndValidity();
        this.biodatasForms.get('city_birth').clearValidators();
        this.biodatasForms.get('city_birth').updateValueAndValidity();
        this.biodatasForms.get('province_birth_other').setValidators(Validators.required);
        this.biodatasForms.get('province_birth_other').updateValueAndValidity();
        this.biodatasForms.get('city_birth_other').setValidators(Validators.required);
        this.biodatasForms.get('city_birth_other').updateValueAndValidity();
        this.biodatasForms.get('city_birth').reset();
        this.biodatasForms.get('province_birth').reset();
        this.isIndonesiaBirthCountry = false;
      }
    }
  }

  loadProvinceBirthDataList() {
    this.loadBiodata = true;
    this.userService.getProvinceData(`?country_id=1`).subscribe((res) => {
      this.listProvinceBirth = res && res.map((value) => {
        const { id, detail_name } = value;
        return { value: id.toString(), label: detail_name }
      });
      this.loadBiodata = false;
    }, (err) => {
      this.loadBiodata = false;
      this.broadcasterService.notifBroadcast(true, {
        title: 'Gagal',
        msg: err.error.message,
        timeout: 5000,
        theme: 'default',
        position: 'top-right',
        type: 'error'
      });
    });
  }

  loadCityBirthDataList(value) {
    this.loadBiodata = true;
    if (value != undefined) {
      this.chartService.getCityData(`?province_id=${value}`).subscribe((res) => {
        this.listCityBirth = res && res.map((value) => {
          const { id, city } = value;
          return { value: id.toString(), label: city }
        });
        this.loadBiodata = false;
      }, (err) => {
        this.loadBiodata = false;
        this.broadcasterService.notifBroadcast(true, {
          title: 'Gagal',
          msg: err.error.message,
          timeout: 5000,
          theme: 'default',
          position: 'top-right',
          type: 'error'
        });
      });
    } else {
      this.listCityBirth = [];
      this.loadBiodata = false;
    }
  }

  changeNationality(value) {
    if (value == 98) {
      this.isIndonesianNationality = true;
      this.biodatasForms.get('NIK').setValidators(Validators.compose([Validators.required, Validators.minLength(16), Validators.maxLength(16), Validators.pattern('^[0-9]*$')]));
      this.biodatasForms.get('NIK').updateValueAndValidity();
      this.biodatasForms.get('nis').setValidators(Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern('^[0-9]*$')]));
      this.biodatasForms.get('nis').updateValueAndValidity();
      this.biodatasForms.get('nisn').setValidators(Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]));
      this.biodatasForms.get('nisn').updateValueAndValidity();
      this.biodatasForms.get('passport_number').clearValidators();
      this.biodatasForms.get('passport_number').updateValueAndValidity();
      this.biodatasForms.get('passport_expiry_date').clearValidators();
      this.biodatasForms.get('passport_expiry_date').updateValueAndValidity();
      this.biodatasForms.get('passport_number').reset();
      this.biodatasForms.get('passport_expiry_date').reset();
    } else {
      this.isIndonesianNationality = false;
      this.biodatasForms.get('NIK').clearValidators();
      this.biodatasForms.get('NIK').updateValueAndValidity();
      this.biodatasForms.get('nis').clearValidators();
      this.biodatasForms.get('nis').updateValueAndValidity();
      this.biodatasForms.get('nisn').clearValidators();
      this.biodatasForms.get('nisn').updateValueAndValidity();
      this.biodatasForms.get('passport_number').setValidators(Validators.compose([Validators.required, Validators.minLength(7), Validators.maxLength(7), Validators.pattern('^[0-9]*$')]));
      this.biodatasForms.get('passport_number').updateValueAndValidity();
      this.biodatasForms.get('passport_expiry_date').setValidators(Validators.required);
      this.biodatasForms.get('passport_expiry_date').updateValueAndValidity();
      this.biodatasForms.get('NIK').reset();
      this.biodatasForms.get('nis').reset();
      this.biodatasForms.get('nisn').reset();
    }
  }

  changeSpecialNeeds(value) {
    if (value == 1) {
      this.showSpecialNeeds = true;
      this.biodatasForms.get('special_needs_text').setValidators(Validators.required);
      this.biodatasForms.get('special_needs_text').updateValueAndValidity();
    } else {
      this.showSpecialNeeds = false;
      this.biodatasForms.patchValue({ special_needs_text: '' })
      this.biodatasForms.get('special_needs_text').clearValidators();
      this.biodatasForms.get('special_needs_text').updateValueAndValidity()
    }
  }

  changeCountryDataforProvince(evnt) {
    this.country = evnt.value;
    this.loadBiodata = true;
    if (evnt.value != '1') {
      this.hiddenAddressDetail = true;
      this.isIndonesiaCountry = false;
      this.loadBiodata = false;
      this.biodatasForms.get('address_province').clearValidators();
      this.biodatasForms.get('address_province').updateValueAndValidity();
      this.biodatasForms.get('address_city').clearValidators();
      this.biodatasForms.get('address_city').updateValueAndValidity();
      this.biodatasForms.get('zipcode').clearValidators();
      this.biodatasForms.get('zipcode').updateValueAndValidity();
    } else {
      this.hiddenAddressDetail = false;
      this.isIndonesiaCountry = true;
      this.biodatasForms.get('address_province').setValidators(Validators.required);
      this.biodatasForms.get('address_province').updateValueAndValidity();
      this.biodatasForms.get('address_city').setValidators(Validators.required);
      this.biodatasForms.get('address_city').updateValueAndValidity();
      this.biodatasForms.get('zipcode').setValidators(Validators.compose([Validators.maxLength(5), Validators.minLength(5), Validators.pattern('^[0-9]*$'), Validators.required]));
      this.biodatasForms.get('zipcode').updateValueAndValidity();
      this.userService.getProvinceData(`?country_id=${this.country}`).subscribe((res) => {
        this.listProvince = res && res.map((value) => {
          const { id, detail_name } = value;
          return { value: id.toString(), label: detail_name }
        });
        this.loadBiodata = false;
      }, (err) => {
        this.loadBiodata = false;
        this.broadcasterService.notifBroadcast(true, {
          title: 'Gagal',
          msg: err.error.message,
          timeout: 5000,
          theme: 'default',
          position: 'top-right',
          type: 'error'
        });
      });
    }
  }

  changeProvinceDataforCity(event) {
    this.province = event.value;
    this.loadBiodata = true;
    if (this.province != undefined) {
      this.chartService.getCityData(`?province_id=${this.province}`).subscribe((res) => {
        this.listCity = res && res.map((value) => {
          const { id, city } = value;
          return { value: id.toString(), label: city }
        });
        this.loadBiodata = false;
      }, (err) => {
        this.loadBiodata = false;
        this.broadcasterService.notifBroadcast(true, {
          title: 'Gagal',
          msg: err.error.message,
          timeout: 5000,
          theme: 'default',
          position: 'top-right',
          type: 'error'
        });
      });
    } else {
      this.listCity = [];
      this.loadBiodata = false;
    }
  }

  changeCityDataforDistrict(event) {
    this.district = event.value;
    this.loadBiodata = true;
    if (this.district == undefined) {
      this.listDistrict = [];
      this.loadBiodata = false;
    } else {
      this.userService.getDistrictData(`?city_region_id=${this.district}`).subscribe((filterArray) => {
        this.listDistrict = filterArray && filterArray.map((value) => {
          const { id, detail_name } = value;
          return { value: id.toString(), label: detail_name }
        })
        this.loadBiodata = false;
      }, err => {
        this.loadBiodata = false;
      });

    }
  }

  getProvinceIndonesian(country) {
    this.userService.getProvinceData(`?country_id=${country}`).subscribe((res) => {
      this.listProvince = res && res.map((value) => {
        const { id, detail_name } = value;
        return { value: id.toString(), label: detail_name }
      });
      this.loadEducationModal = false;
    }, err => {
    });
  }

  getCityIndonesian(province) {
    this.chartService.getCityData(`?province_id=${province}`).subscribe((res) => {
      this.listCity = res && res.map((value) => {
        const { id, city } = value;
        return { value: id.toString(), label: city }
      });
      this.loadEducationModal = false;
    }, err => {
    });
  }

  getDistrictIndonesian(city) {
    this.userService.getDistrictData(`?city_region_id=${city}`).subscribe((res) => {
      this.listDistrict = res && res.map((value) => {
        const { id, detail_name } = value;
        return { value: id.toString(), label: detail_name }
      });
      this.loadEducationModal = false;
    }, err => {
    });
  }

  getBiodatas() {
    this.loadBiodata = true;
    this.userService.getPartcipantNewstudent(`?username=${this.username}`).subscribe(res => {
      this.loadBiodata = false;
      this.photoCard = res;
      if (res.photo_url == null || res.photo_url == '') {
        this.notHavePhoto = true;
      }
      else if (res.photo_url != null || res.photo_url != '') {
        this.notHavePhoto = false;
      }
      const changeBirthDateFormat = res.birth_date && moment(res.birth_date).format('DD-MM-YYYY');
        this.biodatasForms.patchValue({ fullname: res.fullname });
        this.biodatasForms.patchValue({ birthdate: changeBirthDateFormat });
        this.biodatasForms.patchValue({ NIK: res.identify_number });
        this.biodatasForms.patchValue({ nis: res.nis });
        this.biodatasForms.patchValue({ ijazah_number: res.diploma_number });
        this.biodatasForms.patchValue({ passport_number: res.passport_number });
        this.biodatasForms.patchValue({ address_detail: res.address_detail });
        this.biodatasForms.patchValue({ nisn: res.nisn });
        if (res.house_phone_number == 'null') {
          this.biodatasForms.patchValue({ house_phone_number: '' });
        } else {
          this.biodatasForms.patchValue({ house_phone_number: res.house_phone_number });
        }
        this.biodatasForms.patchValue({ mobile_phone_number: res.mobile_phone_number });
        this.biodatasForms.patchValue({ email: res.username });
        this.colorBlind = res.color_blind;
        if (res.passport_expiry_date == ' - ') {
          this.biodatasForms.patchValue({ passport_expiry_date: '' });
        } else {
          const changePassportFormat = res.passport_expiry_date && moment(res.passport_expiry_date).format('YYYY-MM-DD');
          this.biodatasForms.patchValue({ passport_expiry_date: changePassportFormat });
        }
        if (res.gender == null) {
          this.biodatasForms.patchValue({ gender: '0' });
        }
        else {
          this.biodatasForms.patchValue({ gender: res.gender && res.gender.toString() })
        }
        if (res.religion == null) {
          this.biodatasForms.patchValue({ religion: '0' });
        }
        else {
          this.biodatasForms.patchValue({ religion: res.religion && res.religion.toString() })
        }
        if (res.birth_country == null) {
          this.biodatasForms.patchValue({ country_birth: '0' });
        }
        else {
          this.biodatasForms.patchValue({ country_birth: res.birth_country && res.birth_country.toString() })
        }
        if (res.birth_province == null) {
          this.biodatasForms.patchValue({ province_birth: '0' });
          this.biodatasForms.patchValue({ province_birth_other: res.birth_province_name });
        }
        else {
          this.biodatasForms.patchValue({ province_birth: res.birth_province && res.birth_province.toString() })
          this.biodatasForms.patchValue({ province_birth_other: '' });
        }
        if (res.birth_city == null) {
          this.biodatasForms.patchValue({ city_birth: '0' });
          this.biodatasForms.patchValue({ city_birth_other: res.birth_city_name });
        }
        else {
          this.biodatasForms.patchValue({ city_birth: res.birth_city && res.birth_city.toString() })
          this.biodatasForms.patchValue({ city_birth_other: '' });
        }
        if (res.nationality == null) {
          this.biodatasForms.patchValue({ nationality: '0' });
        }
        else {
          this.biodatasForms.patchValue({ nationality: res.nationality && res.nationality.toString() })
        }
        if (res.origin_country == null) {
          this.biodatasForms.patchValue({ country_origin: '0' });
        }
        else {
          this.biodatasForms.patchValue({ country_origin: res.origin_country && res.origin_country.toString() })
        }
        if (res.address_country == null) {
          this.biodatasForms.patchValue({ address_country: '0' });
        }
        else {
          this.biodatasForms.patchValue({ address_country: res.address_country && res.address_country.toString() })
        }
        if (res.special_needs !== null) {
          this.showSpecialNeeds = true;
          this.specialNeeds = '1';
          this.biodatasForms.patchValue({ special_needs_text: res.special_needs })
        } else {
          this.specialNeeds = '0';
          this.showSpecialNeeds = false;
        }
        if (res.address_country == 1) {
          const country = res.address_country;
          const province = res.address_province;
          const city = res.address_city;
          this.getProvinceIndonesian(country);
          this.getCityIndonesian(province);
          this.getDistrictIndonesian(city);
          this.province = res.address_province && res.address_province.toString();
          this.city = res.address_city && res.address_city.toString();
          this.district = res.address_disctrict && res.address_disctrict.toString();
          this.biodatasForms.patchValue({ zipcode: res.address_postal_code });
          this.hiddenAddressDetail = false;
          this.isIndonesiaCountry = true;
        } else {
          this.province = '';
          this.city = '';
          this.district = '';
          this.biodatasForms.get('address_province').clearValidators();
          this.biodatasForms.get('address_province').updateValueAndValidity();
          this.biodatasForms.get('address_city').clearValidators();
          this.biodatasForms.get('address_city').updateValueAndValidity();
          this.biodatasForms.get('zipcode').clearValidators();
          this.biodatasForms.get('zipcode').updateValueAndValidity();
          this.biodatasForms.patchValue({ zipcode: '' });
          this.hiddenAddressDetail = true;
          this.isIndonesiaCountry = false;
        }
    });
  }

  // photo details
  openFile() {
    document.getElementById('fileInput').click();
  }

  onUploadImagePhoto(e) {
    let file = e.target.files[0]
    if (file.type.includes('image/jp') || file.type.includes('image/png')) {
      if (file.size > 1024000) {
        this.filesControl.setValue([]); return Swal.fire({
          title: this.confirmation,
          text: 'gagal', type: 'error', showConfirmButton: true,
        })
      } else {
        this.urlPhoto = e.target.files[0]
        let reader = new FileReader();
        reader.onload = function (ev) {
          this.previewPhoto = ev.target.result
        }.bind(this);
        reader.readAsDataURL(e.target.files[0]);
        this.modalPreview.show();
      }
    } else {
      this.filesControl.setValue([]); return Swal.fire({ title: this.confirmation, text: 'gagal', type: 'error', showConfirmButton: true, })
    }
  }

  saveImg() {
    this.loadingSaveGambar = true
      let formDataPhoto = new FormData();
      formDataPhoto.append('username', this.username);
      formDataPhoto.append('photo_url', this.urlPhoto);
      this.userService.updateParticipantNewStudent(formDataPhoto).subscribe(res => {
        if (res && res.status === 'Success') {
          this.loadingSaveGambar = false
          this.modalPreview.hide();
          Swal.fire({
            title: res.status,
            text: res.message,
            type: 'success',
            allowOutsideClick: false,
            showConfirmButton: true
          }).then((confirm) => {
            if (confirm.value) {
              window.location.reload();
            }
          });
        } else {
          this.broadcasterService.notifBroadcast(true, {
            title: 'Gagal',
            msg: res.message,
            timeout: 5000,
            theme: 'default',
            position: 'top-right',
            type: 'error'
          });
          this.loadingSaveGambar = false
        }
        this.loadingSaveGambar = false
      }, () => { this.modalPreview.hide(); this.loadingSaveGambar = false })
  }

  createBiodatas() {
    if (this.biodatasForms.valid) {
      const {
        address_city,
        address_country,
        address_detail,
        address_district,
        zipcode,
        address_province,
        city_birth,
        city_birth_other,
        country_birth,
        birthdate,
        province_birth,
        province_birth_other,
        fullname,
        gender,
        house_phone_number,
        mobile_phone_number,
        nationality,
        country_origin,
        religion,
        email,
        NIK,
        passport_expiry_date,
        passport_number,
        special_needs_text,
        nisn,
        nis,
        ijazah_number
      } = this.biodatasForms.value;
      this.dateTransform = birthdate.split("-").reverse().join("-");
      let payload = {
        username: this.username,
        fullname: fullname,
        gender: gender,
        religion: religion,
        birth_country: country_birth,
        birth_province: province_birth,
        birth_city: city_birth,
        birth_date: this.dateTransform,
        nationality: nationality,
        origin_country: country_origin,
        identify_number: NIK ? NIK : '0',
        passport_number: passport_number ? passport_number : '0',
        passport_expiry_date: passport_expiry_date,
        address_country: address_country,
        address_province: address_province,
        address_city: address_city,
        address_district: address_district,
        address_detail: address_detail,
        address_postal_code: zipcode,
        house_phone_number: house_phone_number,
        mobile_phone_number: mobile_phone_number,
        color_blind: this.colorBlind,
        special_needs: this.specialNeeds == '1' ? special_needs_text : '',
        birth_province_foreign: province_birth_other,
        birth_city_foreign: city_birth_other,
        nisn: nisn,
        nis: nis,
        diploma_number: ijazah_number,
      }
      this.userService.updateParticipantNewStudent(payload).subscribe(res => {
        if (res.status == 'Success') {
          this.createMappingNewStep();
        } else {
          this.loadBiodata = false;
          this.broadcasterService.notifBroadcast(true, {
            title: res.status,
            msg: res.message,
            timeout: 5000,
            theme: "default",
            position: "top-right",
            type: "error",
          });
        }
      },
      (reason) => {
        this.broadcasterService.notifBroadcast(true, {
          title: "Gagal",
          msg: reason.error.message,
          timeout: 5000,
          theme: "default",
          position: "top-right",
          type: "error",
        });
        this.loadBiodata = false;
      });
    } else {
      Swal.fire({
        title: 'Failed',
        text: 'Masih ada data yang belum lengkap',
        type: 'error',
        allowOutsideClick: false,
      });
    }
  }

  createMappingNewStep() {
    this.loadBiodata = true;
    const steps = {
      new_student_id: this.newstudentId,
      new_student_step_id: 1
    }
    this.userService.createMappingNewStudentStep(steps).subscribe(
      (res) => {
        if (res.status == "Success") {
          this.broadcasterService.notifBroadcast(true, {
            title: res.status,
            msg: res.message,
            timeout: 5000,
            theme: "default",
            position: "top-right",
            type: "success",
          });
          this.loadBiodata = false;
          this.goToParentsData();
        } else {
          this.broadcasterService.notifBroadcast(true, {
            title: res.status,
            msg: res.message,
            timeout: 5000,
            theme: "default",
            position: "top-right",
            type: "error",
          });
          this.loadBiodata = false;
        }
      },
      (reason) => {
        this.broadcasterService.notifBroadcast(true, {
          title: "Gagal",
          msg: reason.error.message,
          timeout: 5000,
          theme: "default",
          position: "top-right",
          type: "error",
        });
        this.loadBiodata = false;
      }
    );
  }

  createMappingNewStepParents() {
    this.loadingParents = true;
    const steps = {
      new_student_id: this.newstudentId,
      new_student_step_id: 2
    }
    this.userService.createMappingNewStudentStep(steps).subscribe(
      (res) => {
        if (res.status == "Success") {
          this.broadcasterService.notifBroadcast(true, {
            title: res.status,
            msg: res.message,
            timeout: 5000,
            theme: "default",
            position: "top-right",
            type: "success",
          });
          this.loadingParents = false;
          this.gotoStepDocument();
        } else {
          this.broadcasterService.notifBroadcast(true, {
            title: res.status,
            msg: res.message,
            timeout: 5000,
            theme: "default",
            position: "top-right",
            type: "error",
          });
          this.loadingParents = false;
        }
      },
      (reason) => {
        this.broadcasterService.notifBroadcast(true, {
          title: "Gagal",
          msg: reason.error.message,
          timeout: 5000,
          theme: "default",
          position: "top-right",
          type: "error",
        });
        this.loadingParents = false;
      }
    );
  }

  createMappingNewStepDocument() {
    this.loadTableDocument = true;
    const steps = {
      new_student_id: this.newstudentId,
      new_student_step_id: 3
    }
    this.userService.createMappingNewStudentStep(steps).subscribe(
      (res) => {
        if (res.status == "Success") {
          this.broadcasterService.notifBroadcast(true, {
            title: res.status,
            msg: res.message,
            timeout: 5000,
            theme: "default",
            position: "top-right",
            type: "success",
          });
          this.loadTableDocument = false;
          this.goToNim();
        } else {
          this.broadcasterService.notifBroadcast(true, {
            title: res.status,
            msg: res.message,
            timeout: 5000,
            theme: "default",
            position: "top-right",
            type: "error",
          });
          this.loadTableDocument = false;
        }
      },
      (reason) => {
        this.broadcasterService.notifBroadcast(true, {
          title: "Gagal",
          msg: reason.error.message,
          timeout: 5000,
          theme: "default",
          position: "top-right",
          type: "error",
        });
        this.loadingParents = false;
      }
    );
  }

  createParents() {
    if (this.parentsForm.valid) {
      this.loadingParents = true;
      const payload = {
        participant_id: this.participantId,
        father_name: this.parentsForm.value.fathersName ? this.parentsForm.value.fathersName : '',
        father_mobile_phone_number: this.parentsForm.value.fathersPhone ? this.parentsForm.value.fathersPhone : '',
        father_identify_number: this.parentsForm.value.fathersIdentityNumber ? this.parentsForm.value.fathersIdentityNumber : '',
        mother_name: this.parentsForm.value.mothersName ? this.parentsForm.value.mothersName : '',
        mother_mobile_phone_number: this.parentsForm.value.mothersPhone ? this.parentsForm.value.mothersPhone : '',
        mother_identify_number: this.parentsForm.value.mothersIdentityNumber ? this.parentsForm.value.mothersIdentityNumber : '',
        guardian_name: this.parentsForm.value.maleRelativesName ? this.parentsForm.value.maleRelativesName : '',
        guardian_mobile_phone_number: this.parentsForm.value.maleRelativesPhone ? this.parentsForm.value.maleRelativesPhone : '',
        guardian_identify_number:this.parentsForm.value.maleRelativesIdentityNumber ? this.parentsForm.value.maleRelativesIdentityNumber : '',
        is_guardian: this.realtionshipSelected == '1' ? false : true
      };
      this.userService.updateFamilyNewStudent(payload).subscribe(res => {
        if (res.status == 'Success') {
          this.createMappingNewStepParents();
        } else {
          this.broadcasterService.notifBroadcast(true, {
            title: res.status,
            msg: res.message,
            timeout: 5000,
            theme: "default",
            position: "top-right",
            type: "error",
          });
          this.loadingParents = false
        }
      });
    } else {
      Swal.fire({
        title: 'Failed',
        text: 'Masih ada data yang belum lengkap',
        type: 'error',
        allowOutsideClick: false,
      });
    }
  }

  downloadDocument(data) {
    this.loadingDownload = true;
    if (data.document == null) {
      this.loadingDownload = false;
      Swal.fire({
        title: 'Failed',
        text: 'Tidak ada dokumen',
        type: 'error',
        allowOutsideClick: false,
      });
    } else {
      if (data.document.url != null) {
        this.loadingDownload = false;
        window.open(data.document.url, 'blank');
      } else {
        this.loadingDownload = false;
        Swal.fire({
          title: 'Failed',
          text: 'Tidak ada dokumen',
          type: 'error',
          allowOutsideClick: false,
        });
      }
    }
  }

  downloadDocumentRaport(data) {
    this.loadingDownload = true;
      if (data.url != null) {
        this.loadingDownload = false;
        window.open(data.url, 'blank');
      } else {
        this.loadingDownload = false;
        Swal.fire({
          title: 'Failed',
          text: 'Tidak ada dokumen',
          type: 'error',
          allowOutsideClick: false,
        });
      }
  }

  uploadDocumentData(data) {
    if (data.document != null) {
      if (data.document.approval_final_status == true) {
        Swal.fire({
          title: 'Warning',
          text: 'Anda tidak dapat mengubah dokumen karena status dokumen anda telah disetujui!',
          type: 'warning',
          allowOutsideClick: false,
        });
      } else {
        // edit document
        this.documentTypeId = data.document_type_id;
        if (this.documentTypeId == 1 || this.documentTypeId == 2 || this.documentTypeId == 4 || this.documentTypeId == 5 || this.documentTypeId == 6 ||  this.documentTypeId == 29 || this.documentTypeId == 30 || this.documentTypeId == 31 || this.documentTypeId == 32 || this.documentTypeId == 33) {
          this.isUpdatedDoc = true;
          this.documentId = data.document.id;
          this.uploadDocumentModals.show();
        } else if (this.documentTypeId == 7) {
          this.showTableDocument();
        } else if (this.documentTypeId == 12) {
          this.isUpdatedDoc = true;
          this.documentTypeId = 12;
          this.utbkID = data.document.id;
          this.documentId = data.document.document_id;
          this.uploadDocumentModals.show();
        }
      }
    } else {
      // input all document
      this.isUpdatedDoc = false;
      this.documentTypeId = data.document_type_id;
      this.documentName = data.new_student_document_type;
      this.uploadDocumentModals.show();
    }
  }

  uploadDocumentClose() {
    this.uploadDocumentModals.hide();
    this.uploadFileForm.reset();
    this.isUpdatedDoc = false;
  }

  uploadUrl(event) {
    this.errSize = false;
    this.errType = false;
    const elem = event.target;
    const files = elem.files[0].name;
    const fileType = files.substr(files.lastIndexOf('.') + 1);
    const size = elem.files[0].size;
    if (elem.files.length > 0) {
      if (
          fileType == 'pdf' || fileType == 'jpg' || fileType == 'jpeg' ||
          fileType == 'png'
          )
          {
            if (size < 2000000) {
              if (this.isUpdatedDoc) {
                this.formDataDocument.append('url', elem.files[0]);
              } else {
                this.formDataDocumentCreate.append('url', elem.files[0]);
              }
            } else {
              this.errSize = true;
              this.uploadFileForm.get('url').patchValue('');
            }
          } else {
            this.errType = true;
            this.uploadFileForm.get('url').patchValue('');
      }
    }
  }

  uploadRaportUrl(event) {
    this.errSize = false;
    this.errType = false;
    const elem = event.target;
    const files = elem.files[0].name;
    const fileType = files.substr(files.lastIndexOf('.') + 1);
    const size = elem.files[0].size;
    if (elem.files.length > 0) {
      if (
          fileType == 'pdf' || fileType == 'jpg' || fileType == 'jpeg' ||
          fileType == 'png'
          )
          {
            if (size < 2000000) {
              if (this.isUpdatedRaport) {
                this.formRaportEdit.append('url', elem.files[0]);
              } else {
                this.formRaportInput.append('url', elem.files[0]);
              }
            } else {
              this.errSize = true;
              this.uploadRaportFileForm.get('url').patchValue('');
            }
          } else {
            this.errType = true;
            this.uploadRaportFileForm.get('url').patchValue('');
      }
    }
  }

  createDocParticipant() {
    if (this.uploadFileForm.valid) {
      if (this.isUpdatedDoc) {
        this.loadingUpload = true;
        if (this.documentTypeId == 12) {
          this.formDataDocument.append('document_id', this.documentId);
          this.formDataDocument.append('utbk_id', this.utbkID);
          this.formDataDocument.append('registration_number', this.registrationNumber);
          this.userService.updUtbkdocument(this.formDataDocument).subscribe(res => {
            if (res.status == 'Success') {
              this.formDataDocument.delete('document_id');
              this.formDataDocument.delete('utbk_id');
              this.formDataDocument.delete('registration_number');
              this.formDataDocument.delete('url');
              this.renderDocument();
              this.broadcasterService.notifBroadcast(true, {
                title: 'Sukses',
                msg: res.message,
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'success'
              });
              this.loadingUpload = false;
              this.uploadDocumentClose();
            } else {
              this.broadcasterService.notifBroadcast(true, {
                title: 'Gagal',
                msg: res.message,
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'error'
              });
              this.loadingUpload = false;
              this.formDataDocument.delete('document_id');
              this.formDataDocument.delete('utbk_id');
              this.formDataDocument.delete('registration_number');
              this.formDataDocument.delete('url');
            }
          }, (reason) => {
            this.broadcasterService.notifBroadcast(true, {
              title: 'Gagal',
              msg: reason.error.message,
              timeout: 5000,
              theme: 'default',
              position: 'top-right',
              type: 'error'
            });
            this.loadingUpload = false;
          });
        } else if (this.documentTypeId == 1 || this.documentTypeId == 2 || this.documentTypeId == 4 || this.documentTypeId == 5 || this.documentTypeId == 6 || this.documentTypeId == 29 || this.documentTypeId == 30 || this.documentTypeId == 31 || this.documentTypeId == 32 || this.documentTypeId == 33) {
          this.formDataDocument.append('id', this.documentId);
          this.userService.updateDocumentNewStudent(this.formDataDocument).subscribe(res => {
            if (res.status == 'Success') {
              this.formDataDocument.delete('id');
              this.formDataDocument.delete('url');
              this.renderDocument();
              this.broadcasterService.notifBroadcast(true, {
                title: 'Sukses',
                msg: res.message,
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'success'
              });
              this.loadingUpload = false;
              this.uploadDocumentClose();
            } else {
              this.broadcasterService.notifBroadcast(true, {
                title: 'Gagal',
                msg: res.message,
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'error'
              });
              this.loadingUpload = false;
              this.formDataDocument.delete('id');
              this.formDataDocument.delete('url');
            }
          }, (reason) => {
            this.broadcasterService.notifBroadcast(true, {
              title: 'Gagal',
              msg: reason.error.message,
              timeout: 5000,
              theme: 'default',
              position: 'top-right',
              type: 'error'
            });
            this.loadingUpload = false;
          });
        }
      } else {
        this.loadingUpload = true;
        if (this.documentTypeId == 12) {
          this.formDataDocumentCreate.append('document_type_id', '12');
          this.formDataDocumentCreate.append('registration_number', this.registrationNumber);
          this.userService.postUtbkDocument(this.formDataDocumentCreate).subscribe(res => {
            if (res.status == 'Success') {
              this.formDataDocumentCreate.delete('document_type_id');
              this.formDataDocumentCreate.delete('registration_number');
              this.formDataDocumentCreate.delete('url');
              this.renderDocument();
              this.broadcasterService.notifBroadcast(true, {
                title: 'Sukses',
                msg: res.message,
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'success'
              });
              this.loadingUpload = false;
              this.uploadDocumentClose();
            } else {
              this.broadcasterService.notifBroadcast(true, {
                title: 'Gagal',
                msg: res.message,
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'error'
              });
              this.formDataDocumentCreate.delete('document_type_id');
              this.formDataDocumentCreate.delete('registration_number');
              this.formDataDocumentCreate.delete('url');
              this.loadingUpload = false;
            }
          }, (reason) => {
            this.loadBiodata = false;
            this.broadcasterService.notifBroadcast(true, {
              title: 'Gagal',
              msg: reason.error.message,
              timeout: 5000,
              theme: 'default',
              position: 'top-right',
              type: 'error'
            });
            this.loadingUpload = false;
          });
        } else if (this.documentTypeId == 1 || this.documentTypeId == 2 || this.documentTypeId == 4 || this.documentTypeId == 5 || this.documentTypeId == 6 || this.documentTypeId == 29 || this.documentTypeId == 30 || this.documentTypeId == 31 || this.documentTypeId == 32 || this.documentTypeId == 33) {
          this.formDataDocumentCreate.append('document_type_id', this.documentTypeId);
          this.formDataDocumentCreate.append('name', this.documentName);
          this.formDataDocumentCreate.append('participant_id', this.participantId);
          this.userService.postPersonalDocumentData(this.formDataDocumentCreate).subscribe(res => {
            if (res.status == 'Success') {
              this.formDataDocumentCreate.delete('document_type_id');
              this.formDataDocumentCreate.delete('name');
              this.formDataDocumentCreate.delete('participant_id');
              this.formDataDocumentCreate.delete('url');
              this.renderDocument();
              this.broadcasterService.notifBroadcast(true, {
                title: 'Sukses',
                msg: res.message,
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'success'
              });
              this.loadingUpload = false;
              this.uploadDocumentClose();
            } else {
              this.broadcasterService.notifBroadcast(true, {
                title: 'Gagal',
                msg: res.message,
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'error'
              });
              this.formDataDocumentCreate.delete('document_type_id');
              this.formDataDocumentCreate.delete('name');
              this.formDataDocumentCreate.delete('participant_id');
              this.formDataDocumentCreate.delete('url');
              this.loadingUpload = false;
            }
          }, (reason) => {
            this.loadBiodata = false;
            this.broadcasterService.notifBroadcast(true, {
              title: 'Gagal',
              msg: reason.error.message,
              timeout: 5000,
              theme: 'default',
              position: 'top-right',
              type: 'error'
            });
            this.loadingUpload = false;
          });
        }
      }
    } else {
      Swal.fire({
        title: 'Failed',
        text: 'Masih ada data yang belum lengkap',
        type: 'error',
        allowOutsideClick: false,
      });
    }
  }

  createRaportDocument() {
    if (this.uploadRaportFileForm.valid) {
      if (this.isUpdatedRaport) {
        this.loadingUploadRaport = true;
        this.formRaportEdit.append('document_id', this.documentIdRaport);
        this.formRaportEdit.append('document_type_id', this.documentTypeIdRaport);
        this.formRaportEdit.append('semester_id', this.semesterID);
        this.formRaportEdit.append('registration_number', this.registrationNumber);
        this.formRaportEdit.append('report_id', this.reportID);
        this.userService.updDocumentReportCardData(this.formRaportEdit).subscribe(res => {
          if (res.status == 'Success') {
            this.broadcasterService.notifBroadcast(true, {
              title: 'Sukses',
              msg: res.message,
              timeout: 5000,
              theme: 'default',
              position: 'top-right',
              type: 'success'
            });
            this.showTableDocDetailsClose();
            this.loadingUploadRaport = false;
            this.formRaportEdit.delete('document_id');
            this.formRaportEdit.delete('document_type_id');
            this.formRaportEdit.delete('semester_id');
            this.formRaportEdit.delete('registration_number');
            this.formRaportEdit.delete('report_id');
            this.getRaportTableDocument();
          } else {
            this.broadcasterService.notifBroadcast(true, {
              title: 'Gagal',
              msg: res.message,
              timeout: 5000,
              theme: 'default',
              position: 'top-right',
              type: 'error'
            });
            this.loadingUploadRaport = false;
            this.formRaportEdit.delete('document_id');
            this.formRaportEdit.delete('document_type_id');
            this.formRaportEdit.delete('semester_id');
            this.formRaportEdit.delete('registration_number');
            this.formRaportEdit.delete('report_id');
          }
        }, (reason) => {
          this.broadcasterService.notifBroadcast(true, {
            title: 'Gagal',
            msg: reason.error.message,
            timeout: 5000,
            theme: 'default',
            position: 'top-right',
            type: 'error'
          });
          this.loadingUploadRaport = false;
        });
      } else {
        this.loadingUploadRaport = true;
        this.formRaportInput.append('document_type_id', this.documentTypeIdRaport);
        this.formRaportInput.append('semester_id', this.semesterID);
        this.formRaportInput.append('registration_number', this.registrationNumber);
        this.userService.postDocumentReportCardData(this.formRaportInput).subscribe(res => {
          if (res.status == 'Success') {
            this.broadcasterService.notifBroadcast(true, {
              title: 'Sukses',
              msg: res.message,
              timeout: 5000,
              theme: 'default',
              position: 'top-right',
              type: 'success'
            });
            this.showTableDocDetailsClose();
            this.loadingUploadRaport = false;
            this.formRaportEdit.delete('document_type_id');
            this.formRaportEdit.delete('semester_id');
            this.formRaportEdit.delete('registration_number');
            this.getRaportTableDocument();
          } else {
            this.broadcasterService.notifBroadcast(true, {
              title: 'Gagal',
              msg: res.message,
              timeout: 5000,
              theme: 'default',
              position: 'top-right',
              type: 'error'
            });
            this.loadingUploadRaport = false;
            this.formRaportEdit.delete('document_type_id');
            this.formRaportEdit.delete('semester_id');
            this.formRaportEdit.delete('registration_number');
          }
        }, (reason) => {
          this.broadcasterService.notifBroadcast(true, {
            title: 'Gagal',
            msg: reason.error.message,
            timeout: 5000,
            theme: 'default',
            position: 'top-right',
            type: 'error'
          });
          this.loadingUploadRaport = false;
        });
      }
    } else {
      Swal.fire({
        title: 'Failed',
        text: 'Masih ada data yang belum lengkap',
        type: 'error',
        allowOutsideClick: false,
      });
    }
  }

  submitDocument() {
    this.loadingUpload = false;
    this.uploadDocumentClose();
    this.renderDocument();
  }

  revisedDataRaport(data) {
    this.revisedModals.show();
    this.dataRevised = data;
    // this.rejectedForm.patchValue({ desc_rejected: data.document.approval_final_comment });
  }

  revisedData(data) {
    this.dataRevised = data.document;
    this.revisedModals.show();
  }

  closeRevisedModals() {
    this.revisedModals.hide();
    this.rejectedForm.reset();
  }

  changeFamilyRelationship(event) {
    if (event.value !== null) {
      if (event.value == '2') {
        this.haveParents = false;
        this.parentsForm.controls.mothersName.reset();
        this.parentsForm.controls.fathersName.reset();
        this.parentsForm.controls.mothersPhone.reset();
        this.parentsForm.controls.fathersPhone.reset();
        this.parentsForm.controls.mothersIdentityNumber.reset();
        this.parentsForm.controls.fathersIdentityNumber.reset();
        this.parentsForm.get('fathersName').clearValidators();
        this.parentsForm.get('fathersName').updateValueAndValidity();
        this.parentsForm.get('fathersPhone').clearValidators();
        this.parentsForm.get('fathersPhone').updateValueAndValidity();
        this.parentsForm.get('fathersIdentityNumber').clearValidators();
        this.parentsForm.get('fathersIdentityNumber').updateValueAndValidity();
        this.parentsForm.get('mothersName').clearValidators();
        this.parentsForm.get('mothersName').updateValueAndValidity();
        this.parentsForm.get('mothersPhone').clearValidators();
        this.parentsForm.get('mothersPhone').updateValueAndValidity();
        this.parentsForm.get('mothersIdentityNumber').clearValidators();
        this.parentsForm.get('mothersIdentityNumber').updateValueAndValidity();
        this.parentsForm.get('maleRelativesName').setValidators(Validators.compose([Validators.required, Validators.maxLength(100), Validators.pattern('^[a-zA-Z ]*$')]));
        this.parentsForm.get('maleRelativesPhone').setValidators(Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(13), Validators.pattern('^[0-9]*$')]));
        this.parentsForm.get('maleRelativesIdentityNumber').setValidators( Validators.compose([Validators.required, Validators.minLength(16), Validators.maxLength(16), Validators.pattern('^[0-9]*$')]));
      } else if (event.value == '1') {
        this.haveParents = true;
        this.parentsForm.get('maleRelativesName').clearValidators();
        this.parentsForm.get('maleRelativesName').updateValueAndValidity();
        this.parentsForm.get('maleRelativesPhone').clearValidators();
        this.parentsForm.get('maleRelativesPhone').updateValueAndValidity();
        this.parentsForm.get('maleRelativesIdentityNumber').clearValidators();
        this.parentsForm.get('maleRelativesIdentityNumber').updateValueAndValidity();
        this.parentsForm.get('fathersName').setValidators(Validators.compose([Validators.required, Validators.maxLength(100), Validators.pattern('^[a-zA-Z ]*$')]));
        this.parentsForm.get('fathersPhone').setValidators(Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(13), Validators.pattern('^[0-9]*$')]));
        this.parentsForm.get('fathersIdentityNumber').setValidators( Validators.compose([Validators.required, Validators.minLength(16), Validators.maxLength(16), Validators.pattern('^[0-9]*$')]));
        this.parentsForm.get('mothersName').setValidators(Validators.compose([Validators.required, Validators.maxLength(100), Validators.pattern('^[a-zA-Z ]*$')]));
        this.parentsForm.get('mothersPhone').setValidators(Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(13), Validators.pattern('^[0-9]*$')]));
        this.parentsForm.get('mothersIdentityNumber').setValidators( Validators.compose([Validators.required, Validators.minLength(16), Validators.maxLength(16), Validators.pattern('^[0-9]*$')]));
        this.parentsForm.controls.maleRelativesName.reset();
        this.parentsForm.controls.maleRelativesPhone.reset();
        this.parentsForm.controls.maleRelativesIdentityNumber.reset();
      }
    }
  }

  getDocumentRegistrationTable() {
    this.loadTableDocument = true;
    this.userService.getNewStudentDocument(`?id=${this.newstudentId}`).subscribe(response => {
      this.tableDocument = response;
      this.dtTrigger.next();
      this.loadTableDocument = false;
    }, (reason) => {
      this.loadTableDocument = false;
      this.broadcasterService.notifBroadcast(true, {
        title: 'Gagal',
        msg: reason.error.message,
        timeout: 5000,
        theme: 'default',
        position: 'top-right',
        type: 'error'
      });
    });
  }

  getRaportTableDocument() {
    this.loadTableRaport = true;
    this.userService.getNewStudentDocument(`?id=${this.newstudentId}&document_type_id=7`).subscribe(response => {
      this.tableDataRaport = response[0].document;
      this.loadTableRaport = false;
    }, (reason) => {
      this.loadTableDocument = false;
      this.broadcasterService.notifBroadcast(true, {
        title: 'Gagal',
        msg: reason.error.message,
        timeout: 5000,
        theme: 'default',
        position: 'top-right',
        type: 'error'
      });
    });
  }

  showTableDocument() {
    this.getRaportTableDocument();
    this.showTableDoc.show();
  }

  showTableDocClose() {
    document.querySelector('body').classList.add('modal-open');
    this.showTableDoc.hide();
  }

  showTableDocDetailsClose() {
    this.isUpdatedRaport = false;
    this.uploadRaportFileForm.reset();
    this.showTableDocDetails.hide();
  }

  uploadDocumentDataRaport(data) {
    if (data.url != null) {
      if (data.approval_final_status == true) {
        Swal.fire({
          title: 'Warning',
          text: 'Anda tidak dapat mengubah dokumen karena status dokumen anda telah disetujui!',
          type: 'warning',
          allowOutsideClick: false,
        });
      } else {
        // edit raport document
        this.documentIdRaport = data.document_id;
        this.documentTypeIdRaport = data.document_type_id;
        this.isUpdatedRaport = true;
        this.semesterID = data.semester_id;
        this.reportID = data.id;
        this.showTableDocDetails.show();
      }
    } else {
      // input raport
      this.documentTypeIdRaport = 7;
      this.isUpdatedRaport = false;
      this.semesterID = data.semester_id;
      this.showTableDocDetails.show();
    }
  }

  checkDocumentStatusApproval() {
    this.loadTableDocument = true;
    this.userService.getNewStudentDocumentStatus(`?registration_number=${this.registrationNumber}`).subscribe( res => {
      if (res.length != 0) {
        const docAppovalFalse = _.findWhere(res, {approval_final_status: false });
        const docAppovalNull = _.findWhere(res, {approval_final_status: null });
        const notHaveDoc = _.findWhere(res, {url: null})
        if (docAppovalNull == undefined) {
          if (docAppovalFalse == undefined) {
            this.loadTableDocument = false;
            this.isViewData = true;
          } else {
            this.loadTableDocument = false;
            this.isViewData = false;
          }
        } else {
          this.loadTableDocument = false;
          this.isViewData = false;
        }
      }
    });
  }

  checkCompletenessDocument() {
    this.loadTableDocument = true;
    this.userService.getNewStudentDocumentStatus(`?registration_number=${this.registrationNumber}`).subscribe( res => {
      if (res.length != 0) {
        const notHaveDoc = _.findWhere(res, {url: null})
        if (notHaveDoc == undefined) {
            this.loadTableDocument = false;
            this.isComplete = true;
        } else {
          this.loadTableDocument = false;
          this.isComplete = false;
        }
      }
    });
  }

  renderDocument(): void {
    if (this.tableDocument.length == 0) {
      this.getDocumentRegistrationTable();
    } else {
      this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
        if (index == 0) {
          dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.destroy();
            this.getDocumentRegistrationTable();
          });
        }
      });
    }
  }

}
