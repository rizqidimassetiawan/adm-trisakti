import { OauthService } from './../../_services/oauth.service';
import { Component, OnInit, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BroadcasterService } from 'src/app/_services/broadcaster.service';
import { ParticipantService } from 'src/app/_services/participant.service';
import { AdminManagementService } from 'src/app/_services/admin-management.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { formatDate } from '@angular/common';
import * as moment from 'moment/moment';

import { WizardComponent } from 'ng2-archwizard/dist';
@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})

export class StudentProfileComponent implements OnInit {
  public edit: any;
  public username: any;
  public loading: boolean;
  public loadingWork: boolean;
  public loadingParents: boolean;
  public loadingEdu: boolean;
  public loadingCity: boolean;
  public loadDataDiri: boolean;
  protected userProfile: any;
  protected userData: any;
  public photoData: any;
  public participantId: any;
  public email: any;
  public passportExpiryDate: any;
  public familyRelationshipFilter: any;
  public documentUrl: any;
  public uploadStatus: any;
  public cityChoosen: any;
  public questionnaireId: any;
  public photoFlag: any;
  public emailUser: string;
  public submitloader: boolean;
  public hiddenAddressDetail: boolean;
  public hiddenInstitutionandMajor: boolean;
  public hiddenMajor: boolean;
  public isNotHighSchool: boolean;
  public isForeignSchool: boolean;
  public cityEdu: string;
  public countryOrigin: string;
  public isForeignStudent: boolean;
  public hiddenCity: boolean;
  //for Filtering (Dropdown Select)
  public loadFilter: boolean;
  public listGender: any;
  public gender: string;
  public listReligion: any;
  public religion: string;
  public listNationality: any;
  public nationality: string;
  public listCountry: any;
  public country: string;
  public listCountryBirth: any;
  public countryBirth: string;
  public listProvince: any;
  public province: string;
  public listProvinceBirth: any;
  public provinceBirth: string;
  public listCity: any;
  public listCityAll: any;
  public listYears: any;
  public listYearsSchool: any;
  public city: string;
  public birthPlace: string;
  public cityAll: string;
  public listCityBirth: any;
  public cityBirth: string;
  public listDistrict: any;
  public district: string;
  public listMarriageStatus: any;
  public marriageStatus: string;
  public listEducationDegree: any;
  public educationDegreeType: string;
  public educationDegree: string;
  public listEducationMajor: any;
  public educationMajor: string;
  public educationYears: string;
  public listFamilyRelationshipParent: any;
  public familyRelationshipParent: string;
  public listFamilyRelationshipSibling: any;
  public familyRelationshipSibling: string;
  public specialNeeds: string;
  public colorBlind: string;
  public listOptions: Array<any>;
  public listWorkField: any;
  public workField: string;
  public listWorkType: any;
  public workType: string;
  public listIncomeRange: any;
  public incomeRange: string;
  public listSchool: any;
  public school: string;
  public isForeign: string;
  public unameEmailAdmin: string;
  public isEducationDataEmpty: boolean;
  public myDate: Date = new Date();
  public formatMyDate: any;
  public dateMax: any;
  public isIndonesiaCountry: boolean;
  public loadEducationModal: boolean;
  public showSpecialNeeds: boolean;
  public colorBlindList: Array<any>;
  public foreignStudentList: Array<any>;
  public isIndonesianNationality: boolean;
  public isIndonesiaBirthCountry: boolean;
  public isReload: boolean;
  public isEditEducation: boolean;
  public isViewEducation: boolean;
  public isViewWorkHistory: boolean;
  public educationDegreeStudent: string;
  public schoolNpsn: number;
  public isNpsn: boolean;
  public dateTransform: string;
  public urlPhoto: any
  public previewPhoto: any
  public loadingSaveGambar: boolean;
  public maskDateSlash = [/\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public loadingListCity: boolean;
  public isViewParentsData: boolean;
  public errType: boolean;
  public errSize: boolean;
  public formData = new FormData();
  public formData1 = new FormData();
  public payloadRegistration = new FormData();
  public payloadUpdateParent = new FormData();
  public photoCheck: any;
  public notHavePhoto: boolean;

  @ViewChildren(DataTableDirective)
  dtElements: QueryList<DataTableDirective>;
  public dtOptions: any = [];
  public dtTrigger = new Subject();
  public dtTrigger1 = new Subject();
  public dtTrigger2 = new Subject();
  public dtTrigger3 = new Subject();

  // lang
  public confirmation: string;
  public confirmationText: string;
  public no: string;
  public yes: string;

  /*Education History Table*/
  @ViewChild(DataTableDirective, { static: true }) public dtElement: DataTableDirective;
  public loadtableEducationHistory: boolean;
  public dataTableEducationHistory: any;
  public tableData: Array<any>;
  @ViewChild(DataTableDirective, { static: true }) public dtElement1: DataTableDirective;
  public loadtableParentsData: boolean;
  public dataTableParentsData: any;
  public tableData1: Array<any>;
  @ViewChild(DataTableDirective, { static: true }) public dtElement4: DataTableDirective;
  public loadtableSiblingsData: boolean;
  public dataTableSiblingsData: any;
  public tableData4: Array<any>;
  public loadtableWorkHistory: boolean;
  public dataTableWorkHistory: any;
  public tableData2: Array<any>;
  public loadtablePersonalDocument: boolean;
  public dataTablePersonalDocument: any;
  public tableData3: Array<any>;
  private filesControl = new FormControl(null);

  @ViewChild('modalPreview', { static: true }) public modalPreview: any;

  public educationHistoryId: any;
  @ViewChild('modalStudent', { static: true }) public modalStudent: any;
  public parentId: any;
  @ViewChild('modalViewStudent', { static: true }) public modalViewStudent: any;
  @ViewChild('modalParents', { static: true }) public modalParents: any;
  public siblingId: any;
  @ViewChild('modalBrosist', { static: true }) public modalBrosist: any;
  public workId: any;
  @ViewChild('modalWorkStory', { static: true }) public modalWorkStory: any;
  public personalDocumentId: any;
  @ViewChild('modalPersonalDocument', { static: true }) public modalPersonalDocument: any;
  @ViewChild(WizardComponent, { static: true }) public wizard: WizardComponent;

  public submitted: boolean;
  public loadingParticipantDetail: boolean;
  getYear = new Date();

  constructor(
    public translateService: TranslateService,
    private broadcasterService: BroadcasterService,
    private userService: ParticipantService,
    private chartService: AdminManagementService,
    private oauthService: OauthService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private datePipe: DatePipe,
    public router: Router
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
    this.edit = 'input';
    this.photoData = [];
    this.errSize = false;
    this.errType = false;
    this.isReload = false;
    this.loadingCity = false;
    this.loading = false;
    this.loadingParents = false;
    this.loadingEdu = false;
    this.loadingWork = false;
    this.loadingSaveGambar = false;
    this.loadDataDiri = false;
    this.educationDegree = '0';
    this.familyRelationshipParent = '0';
    this.familyRelationshipSibling = '0';
    this.workField = '0';
    this.workType = '0';
    this.incomeRange = '0';
    this.submitted = false;
    this.isEducationDataEmpty = false;
    this.isIndonesiaCountry = false;
    this.loadEducationModal = false;
    this.submitloader = false;
    this.hiddenAddressDetail = true;
    this.hiddenInstitutionandMajor = false;
    this.hiddenMajor = false;
    this.showSpecialNeeds = false;
    this.isIndonesianNationality = false;
    this.isIndonesiaBirthCountry = false;
    this.isViewParentsData = false;
    this.isViewWorkHistory = false;
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
    this.foreignStudentList = [
      {
        value: '1',
        label: 'Ya'
      },
      {
        value: '0',
        label: 'Tidak'
      }
    ]
  }

  registrationParticipantDataForm = this.fb.group({
    fullname: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(100), Validators.pattern(`^[a-zA-Z' ]*$`)])),
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
    nis: new FormControl('', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern('^[0-9]*$')])),
    address_country: ['', Validators.required],
    address_province: ['', Validators.required],
    address_city: ['', Validators.required],
    address_district: [''],
    address_detail: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(150)])),
    zipcode: new FormControl('', Validators.compose([Validators.maxLength(5), Validators.minLength(5), Validators.pattern('^[0-9]*$')])),
    house_phone_number: new FormControl('', [Validators.maxLength(11), Validators.pattern('^[0-9]*$')]),
    mobile_phone_number: new FormControl('', Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(13), Validators.pattern('^[0-9]*$')])),
    email: ['', Validators.required],
    color_blind: new FormControl(''),
    special_needs: new FormControl(''),
    special_needs_text: new FormControl(''),
    passport_number: new FormControl(''),
    passport_expiry_date: new FormControl(''),

  });

  educationHistoryDataForm = this.fb.group({
    education_degree_id:  new FormControl('', Validators.required),
    education_major_id: new FormControl('', Validators.required),
    city_edu: new FormControl(''),
    city: new FormControl(''),
    school_id: new FormControl(''),
    school_detail: new FormControl(''),
    major_detail: new FormControl('',  Validators.compose([Validators.maxLength(100), Validators.required])),
    graduate_year: new FormControl('', Validators.required),
    student_foreign: new FormControl('', Validators.required),
  });

  parentsDataForm = this.fb.group({
    relationship_id: ['', Validators.required],
    family_name: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(50)])),
    email: ['', Validators.maxLength(100)],
    mobile_phone_number: new FormControl('', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(15), Validators.pattern('^[0-9]*$')])),
    work_field_id: ['', Validators.required],
    work_type_id: ['', Validators.required],
    work_income_range_id: ['', Validators.required],
    birth_place: [''],
    birth_date: ['', Validators.required],
    education_degree_id: [''],
    work_position: new FormControl('', Validators.compose([Validators.maxLength(50)])),
    company_name: new FormControl('', Validators.compose([Validators.maxLength(50)])),
  });

  workHistoryDataForm = this.fb.group({
    company_name: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(100)])),
    work_field_id: ['', Validators.required],
    work_type_id: ['', Validators.required],
    work_income_range_id: ['', Validators.required],
    work_position: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(100)])),
    work_start_date: ['', Validators.required],
    work_end_date: [''],
    company_address: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(150)])),
    company_phone_number: new FormControl('', [Validators.maxLength(15), Validators.pattern('^[0-9]*$'), Validators.required]),
  });

  get f() {
    return this.registrationParticipantDataForm.controls;
  }

  get fpf() {
     return this.parentsDataForm.controls;
  }

  get fwh() {
     return this.workHistoryDataForm.controls;
  }

  ngOnInit() {
    this.formatMyDate = formatDate(this.myDate, 'yyyy', 'en-US');
    this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
    this.emailUser = this.userProfile.email;
    this.dtOptions[0] = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      retrieve: true,
      language: {
        info: 'Show _START_ to _END_ from _TOTAL_ data',
        zeroRecords: 'No data found!',
        emptyTable: 'No data found!',
        lengthMenu: 'Show _MENU_ data',
        processing: 'Loading data. . . . .',
        infoFiltered: '',
        infoEmpty: ''
      },
      order: [[0, 'asc']],
      initComplete: () => { }
    };
    this.dtOptions[1] = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      retrieve: true,
      language: {
        info: 'Show _START_ to _END_ from _TOTAL_ data',
        zeroRecords: 'No data found!',
        emptyTable: 'No data found!',
        lengthMenu: 'Show _MENU_ data',
        processing: 'Loading data. . . . .',
        infoFiltered: '',
        infoEmpty: ''
      },
      order: [[0, 'asc']],
      initComplete: () => { }
    };
    this.dtOptions[2] = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      retrieve: true,
      language: {
        info: 'Show _START_ to _END_ from _TOTAL_ data',
        zeroRecords: 'No data found!',
        emptyTable: 'No data found!',
        lengthMenu: 'Show _MENU_ data',
        processing: 'Loading data. . . . .',
        infoFiltered: '',
        infoEmpty: ''
      },
      order: [[0, 'asc']],
      initComplete: () => { }
    };
    this.dtOptions[3] = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      retrieve: true,
      language: {
        info: 'Show _START_ to _END_ from _TOTAL_ data',
        zeroRecords: 'No data found!',
        emptyTable: 'No data found!',
        lengthMenu: 'Show _MENU_ data',
        processing: 'Loading data. . . . .',
        infoFiltered: '',
        infoEmpty: ''
      },
      order: [[0, 'asc']],
      initComplete: () => { }
    };
    this.dtOptions[4] = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      retrieve: true,
      language: {
        info: 'Show _START_ to _END_ from _TOTAL_ data',
        zeroRecords: 'No data found!',
        emptyTable: 'No data found!',
        lengthMenu: 'Show _MENU_ data',
        processing: 'Loading data. . . . .',
        infoFiltered: '',
        infoEmpty: ''
      },
      order: [[0, 'asc']],
      initComplete: () => { }
    };
    this.loadDetailParticipantData();
    //filtering (dropdown select)
    this.loadGenderDataFilter();
    this.loadReligionDataFilter();
    this.loadNationalityDataFilter();
    this.loadCountryDataFilter();
    this.loadCountryBirthDataFilter();
    this.loadEducationDegreeDataFilter();
    this.loadEducationMajorDataFilter();
    this.loadFamilyRelationshipParentDataFilter();
    this.loadWorkFieldDataFilter();
    this.loadWorkTypeDataFilter();
    this.loadIncomeRangeDataFilter();
    this.getListCity();
    //table
    this.loadEducationHistoryData();
    this.loadParentsData();
    this.loadWorkHistory();
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

  loadDelete() {
    this.broadcasterService.notifBroadcast(true, {
      title: 'Success',
      msg: 'Data telah terhapus',
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
      case 'gender':
        this.gender = '0';
        break;
      case 'religion':
        this.religion = '0';
        break;
      case 'nationality':
        this.nationality = '0';
        break;
      case 'country':
        this.country = '0';
        break;
      case 'countryBirth':
        this.countryBirth = '0';
        break;
      case 'province':
        this.province = '0';
        break;
      case 'provinceBirth':
        this.provinceBirth = '0';
        break;
      case 'city':
        this.city = '0';
        break;
      case 'cityBirth':
        this.cityBirth = '0';
        break;
      case 'marriageStatus':
        this.marriageStatus = '0';
        break;
      case 'educationDegree':
        this.educationDegree = '0';
        break;
      case 'educationMajor':
        this.educationMajor = '0';
        break;
      case 'educationYears':
        this.educationYears = '0';
        break;
      case 'familyRelationshipParent':
        this.familyRelationshipParent = '0';
        break;
      case 'familyRelationshipSibling':
        this.familyRelationshipSibling = '0';
        break;
      case 'workField':
        this.workField = '0';
        break;
      case 'workType':
        this.workType = '0';
        break;
      case 'incomeRange':
        this.incomeRange = '0';
        break;
    }
  }

  loadDetailParticipantData() {
    this.mode('edit');
    this.loadDataDiri = true;
    this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (this.userProfile.email !== undefined) {
      this.userService.getParticipantDetailData(this.userProfile.email).subscribe(res => {
        this.userData = res;
        this.photoData = res;
        this.photoCheck = res.photo_url;
        if (this.photoCheck == null || this.photoCheck == '') {
          this.photoFlag = 0;
          this.notHavePhoto = true;
        }
        else if (this.photoCheck != null || this.photoCheck != '') {
          this.photoFlag = 1;
          this.notHavePhoto = false;
        }
        this.loadDataDiri = false;
        const changeBirthDateFormat = res.birth_date && moment(res.birth_date).format('DD-MM-YYYY');
        this.registrationParticipantDataForm.patchValue({ fullname: res.fullname });
        this.registrationParticipantDataForm.patchValue({ birthdate: changeBirthDateFormat });
        this.registrationParticipantDataForm.patchValue({ NIK: res.identify_number });
        this.registrationParticipantDataForm.patchValue({ nis: res.nis });
        this.registrationParticipantDataForm.patchValue({ passport_number: res.passport_number });
        this.registrationParticipantDataForm.patchValue({ address_detail: res.address_detail });
        if (res.house_phone_number == 'null') {
          this.registrationParticipantDataForm.patchValue({ house_phone_number: '' });
        } else {
          this.registrationParticipantDataForm.patchValue({ house_phone_number: res.house_phone_number });
        }
        this.registrationParticipantDataForm.patchValue({ mobile_phone_number: res.mobile_phone_number });
        this.registrationParticipantDataForm.patchValue({ email: res.username });
        this.colorBlind = res.color_blind;
        if (res.passport_expiry_date == ' - ') {
          this.registrationParticipantDataForm.patchValue({ passport_expiry_date: '' });
        } else {
          const changePassportFormat = res.passport_expiry_date && moment(res.passport_expiry_date).format('YYYY-MM-DD');
          this.registrationParticipantDataForm.patchValue({ passport_expiry_date: changePassportFormat });
        }
        if (res.gender == null) {
          this.registrationParticipantDataForm.patchValue({ gender: '0' });
        }
        else {
          this.registrationParticipantDataForm.patchValue({ gender: res.gender && res.gender.toString() })
        }
        if (res.religion == null) {
          this.registrationParticipantDataForm.patchValue({ religion: '0' });
        }
        else {
          this.registrationParticipantDataForm.patchValue({ religion: res.religion && res.religion.toString() })
        }
        if (res.birth_country == null) {
          this.registrationParticipantDataForm.patchValue({ country_birth: '0' });
        }
        else {
          this.registrationParticipantDataForm.patchValue({ country_birth: res.birth_country && res.birth_country.toString() })
        }
        if (res.birth_province == null) {
          this.registrationParticipantDataForm.patchValue({ province_birth: '0' });
          this.registrationParticipantDataForm.patchValue({ province_birth_other: res.birth_province_name });
          this.provinceBirth = '';
        }
        else {
          this.registrationParticipantDataForm.patchValue({ province_birth: res.birth_province && res.birth_province.toString() })
          this.provinceBirth = res.birth_province && res.birth_province.toString();
          this.registrationParticipantDataForm.patchValue({ province_birth_other: '' });
        }
        if (res.birth_city == null) {
          this.registrationParticipantDataForm.patchValue({ city_birth: '0' });
          this.registrationParticipantDataForm.patchValue({ city_birth_other: res.birth_city_name });
          this.cityBirth = '';
        }
        else {
          this.registrationParticipantDataForm.patchValue({ city_birth: res.birth_city && res.birth_city.toString() })
          this.cityBirth = res.birth_city && res.birth_city.toString();
          this.registrationParticipantDataForm.patchValue({ city_birth_other: '' });
        }
        if (res.nationality == null) {
          this.registrationParticipantDataForm.patchValue({ nationality: '0' });
        }
        else {
          this.registrationParticipantDataForm.patchValue({ nationality: res.nationality && res.nationality.toString() })
        }
        if (res.origin_country == null) {
          this.registrationParticipantDataForm.patchValue({ country_origin: '0' });
        }
        else {
          this.registrationParticipantDataForm.patchValue({ country_origin: res.origin_country && res.origin_country.toString() })
        }
        if (res.address_country == null) {
          this.registrationParticipantDataForm.patchValue({ address_country: '0' });
        }
        else {
          this.registrationParticipantDataForm.patchValue({ address_country: res.address_country && res.address_country.toString() })
        }
        if (res.special_needs !== null) {
          this.showSpecialNeeds = true;
          this.specialNeeds = '1';
          this.registrationParticipantDataForm.patchValue({ special_needs_text: res.special_needs })
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
          this.registrationParticipantDataForm.patchValue({ zipcode: res.address_postal_code });
          this.hiddenAddressDetail = false;
          this.isIndonesiaCountry = true;
        } else {
          this.province = '';
          this.city = '';
          this.district = '';
          this.registrationParticipantDataForm.patchValue({ zipcode: '' });
          this.hiddenAddressDetail = true;
          this.isIndonesiaCountry = false;
          this.registrationParticipantDataForm.get('address_province').clearValidators();
          this.registrationParticipantDataForm.get('address_province').updateValueAndValidity();
          this.registrationParticipantDataForm.get('address_city').clearValidators();
          this.registrationParticipantDataForm.get('address_city').updateValueAndValidity();
          this.registrationParticipantDataForm.get('zipcode').clearValidators();
          this.registrationParticipantDataForm.get('zipcode').updateValueAndValidity();
        }
      });
    }
  }

  changeNationality(value) {
    if (value == 98) {
      this.isIndonesianNationality = true;
      this.registrationParticipantDataForm.get('NIK').setValidators(Validators.compose([Validators.required, Validators.minLength(16), Validators.maxLength(16), Validators.pattern('^[0-9]*$')]));
      this.registrationParticipantDataForm.get('NIK').updateValueAndValidity();
      this.registrationParticipantDataForm.get('nis').setValidators(Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern('^[0-9]*$')]));
      this.registrationParticipantDataForm.get('nis').updateValueAndValidity();
      this.registrationParticipantDataForm.get('passport_number').clearValidators();
      this.registrationParticipantDataForm.get('passport_number').updateValueAndValidity();
      this.registrationParticipantDataForm.get('passport_expiry_date').clearValidators();
      this.registrationParticipantDataForm.get('passport_expiry_date').updateValueAndValidity();
      this.registrationParticipantDataForm.get('passport_number').reset();
      this.registrationParticipantDataForm.get('passport_expiry_date').reset();
    } else {
      this.isIndonesianNationality = false;
      this.registrationParticipantDataForm.get('NIK').clearValidators();
      this.registrationParticipantDataForm.get('NIK').updateValueAndValidity();
      this.registrationParticipantDataForm.get('nis').clearValidators();
      this.registrationParticipantDataForm.get('nis').updateValueAndValidity();
      this.registrationParticipantDataForm.get('passport_number').setValidators(Validators.compose([Validators.required, Validators.minLength(7), Validators.maxLength(7), Validators.pattern('^[0-9]*$')]));
      this.registrationParticipantDataForm.get('passport_number').updateValueAndValidity();
      this.registrationParticipantDataForm.get('passport_expiry_date').setValidators(Validators.required);
      this.registrationParticipantDataForm.get('passport_expiry_date').updateValueAndValidity();
      this.registrationParticipantDataForm.get('NIK').reset();
      this.registrationParticipantDataForm.get('nis').reset();
    }
  }

  changeSpecialNeeds(value) {
    if (value == 1) {
      this.showSpecialNeeds = true;
      this.registrationParticipantDataForm.get('special_needs_text').setValidators(Validators.required);
      this.registrationParticipantDataForm.get('special_needs_text').updateValueAndValidity();
    } else {
      this.showSpecialNeeds = false;
      this.registrationParticipantDataForm.patchValue({ special_needs_text: '' })
      this.registrationParticipantDataForm.get('special_needs_text').clearValidators();
      this.registrationParticipantDataForm.get('special_needs_text').updateValueAndValidity()
    }
  }

  createParticipantData() {
    this.loadingParticipantDetail = true;
    this.submitloader = true;
    this.submitted = true;
    this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (this.registrationParticipantDataForm.valid) {
      this.userService.getParticipantDetailData(this.userProfile.email).subscribe(res => {
        this.participantId = res.participant_id;
        this.email = res.username;
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
          identify_number,
          mobile_phone_number,
          nationality,
          country_origin,
          religion,
          email,
          NIK,
          passport_expiry_date,
          passport_number,
          special_needs_text,
          nis
        } = this.registrationParticipantDataForm.value;
        this.dateTransform = birthdate.split("-").reverse().join("-");
        let payload = {
          id: this.participantId,
          address_city: address_city,
          address_country: address_country,
          address_detail: address_detail,
          address_disctrict: address_district,
          address_postal_code: zipcode,
          address_province: address_province,
          birth_city: city_birth,
          birth_city_foreign: city_birth_other,
          birth_country: country_birth,
          birth_date: this.dateTransform,
          birth_province: province_birth,
          birth_province_foreign: province_birth_other,
          fullname: fullname,
          gender: gender,
          house_phone_number: house_phone_number,
          marriage_status: 0,
          mobile_phone_number: mobile_phone_number,
          nationality: nationality,
          origin_country: country_origin,
          passport_number: passport_number ? passport_number : '0',
          religion: religion,
          username: email,
          passport_expiry_date: passport_expiry_date,
          identify_number: NIK ? NIK : '0',
          color_blind: this.colorBlind,
          special_needs: this.specialNeeds == '1' ? special_needs_text : '',
          nis: nis,
        }
        this.userService.postParticipantDetailData(payload).subscribe(
          res => {
            if (res.status === 'Success') {
              this.wizard.navigation.goToStep(1);
              this.broadcasterService.notifBroadcast(true, {
                title: res.status,
                msg: res.message,
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'success'
              });
              this.submitloader = false;
              this.loadingParticipantDetail = false;
              this.loadDataDiri = false;
            } else {
              this.broadcasterService.notifBroadcast(true, {
                title: res.status,
                msg: res.message,
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'error'
              });
              this.submitloader = false;
              this.loadingParticipantDetail = false;
              this.loadDataDiri = false;
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
            this.submitloader = false;
            this.loadDataDiri = false;
            this.loadingParticipantDetail = false;
          });
      });
    }
  }

  uploadParticipantData(event) {
    this.errSize = false;
    this.errType = false;
    const elem = event.target;
    const files = elem.files[0].name;
    const fileType = files.substr(files.lastIndexOf('.') + 1);
    const size = elem.files[0].size;
    if (elem.files.length > 0) {
      if (
        fileType == 'JPG' || fileType == 'jpg' || fileType == 'jpeg' ||
        fileType == 'png' || fileType == 'PNG' || fileType == 'JPEG'
      ) {
        if (size < 2000000) {
          this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
          this.userService.getParticipantDetailData(this.userProfile.email).subscribe(res => {
            this.participantId = res.participant_id;
            this.email = res.username;

            // foto baru rolin komen buat cek update data
            // this.formData1.append('photo_url', elem.files[0]);

          });
        } else {
          this.errSize = true;
          // this.registrationParticipantDataForm.get('photo_url').patchValue('');
        }
      } else {
        this.errType = true;
        // this.registrationParticipantDataForm.get('photo_url').patchValue('');
      }
    }
  }

  loadGenderDataFilter() {
    this.loadingParticipantDetail = true;
    this.chartService.getGender().subscribe((filterArray) => {
      const dataGender = [];
      let x: any;
      for (let i = 0; i < filterArray.length; i++) {
        x = {
          value: filterArray[i].id.toString(),
          label: filterArray[i].gender
        };
        dataGender.push(x);
        this.listGender = dataGender;
      }
      this.loadingParticipantDetail = false;
    }, err => {
      this.loadError();
      this.loadingParticipantDetail = false;
    });
  }

  loadReligionDataFilter() {
    this.loadingParticipantDetail = true;
    this.userService.getReligionData().subscribe((filterArray) => {
      const dataReligion = [];
      let x: any;
      for (let i = 0; i < filterArray.length; i++) {
        x = {
          value: filterArray[i].id.toString(),
          label: filterArray[i].religion
        };
        dataReligion.push(x);
        this.listReligion = dataReligion;
      }
      this.loadingParticipantDetail = false;
    }, err => {
      this.loadError();
      this.loadFilter = false;
    });
  }

  loadNationalityDataFilter() {
    this.loadingParticipantDetail = true;
    this.chartService.getNationalityData().subscribe((filterArray) => {
      const dataNationality = [];
      let x: any;
      for (let i = 0; i < filterArray.length; i++) {
        x = {
          value: filterArray[i].id.toString(),
          label: filterArray[i].nationality
        };
        dataNationality.push(x);
        this.listNationality = dataNationality;
      }
      this.loadingParticipantDetail = false;
    }, err => {
      this.loadError();
      this.loadingParticipantDetail = false;
    });
  }

  loadCountryDataFilter() {
    this.loadingParticipantDetail = true;
    this.userService.getCountryData().subscribe((filterArray) => {
      const dataCountry = [];
      let x: any;
      for (let i = 0; i < filterArray.length; i++) {
        x = {
          value: filterArray[i].id.toString(),
          label: filterArray[i].detail_name
        };
        dataCountry.push(x);
        this.listCountry = dataCountry;
      }
      this.loadingParticipantDetail = false;
    }, err => {
      this.loadError();
      this.loadingParticipantDetail = false;
    });
  }

  loadCountryBirthDataFilter() {
    this.loadingParticipantDetail = true;
    this.userService.getCountryData().subscribe((filterArray) => {
      const dataCountry = [];
      let x: any;
      for (let i = 0; i < filterArray.length; i++) {
        x = {
          value: filterArray[i].id.toString(),
          label: filterArray[i].detail_name
        };
        dataCountry.push(x);
        this.listCountryBirth = dataCountry;
      }
      this.loadingParticipantDetail = false;
    }, err => {
      this.loadError();
      this.loadingParticipantDetail = false;
    });
  }

  changeCountryDataforProvince(evnt) {
    this.country = evnt.value;
    this.loadingParticipantDetail = true;
    if (evnt.value != '1') {
      this.hiddenAddressDetail = true;
      this.isIndonesiaCountry = false;
      this.registrationParticipantDataForm.get('address_province').clearValidators();
      this.registrationParticipantDataForm.get('address_province').updateValueAndValidity();
      this.registrationParticipantDataForm.get('address_city').clearValidators();
      this.registrationParticipantDataForm.get('address_city').updateValueAndValidity();
      this.registrationParticipantDataForm.get('zipcode').clearValidators();
      this.registrationParticipantDataForm.get('zipcode').updateValueAndValidity();
    } else {
      this.hiddenAddressDetail = false;
      this.isIndonesiaCountry = true;
      this.registrationParticipantDataForm.get('address_province').setValidators(Validators.required);
      this.registrationParticipantDataForm.get('address_province').updateValueAndValidity();
      this.registrationParticipantDataForm.get('address_city').setValidators(Validators.required);
      this.registrationParticipantDataForm.get('address_city').updateValueAndValidity();
      this.registrationParticipantDataForm.get('zipcode').setValidators(Validators.compose([Validators.maxLength(5), Validators.minLength(5), Validators.pattern('^[0-9]*$'), Validators.required]));
      this.registrationParticipantDataForm.get('zipcode').updateValueAndValidity();
      this.userService.getProvinceData(`?country_id=${this.country}`).subscribe((filterArray) => {
        const dataProvince = [];
        let x: any;
        for (let i = 0; i < filterArray.length; i++) {
          x = {
            value: filterArray[i].id.toString(),
            label: filterArray[i].detail_name
          };
          dataProvince.push(x);
          this.listProvince = dataProvince;
        }
        this.loadingParticipantDetail = false;
      }, err => {
        this.loadError();
        this.loadingParticipantDetail = false;
      });
    }
  }

  changeProvinceDataforCity(event) {
    this.province = event.value;
    this.loadingParticipantDetail = true;
    if (this.province != undefined) {
      this.chartService.getCityData(`?province_id=${this.province}`).subscribe((filterArray) => {
        const dataCity = [];
        let x: any;
        for (let i = 0; i < filterArray.length; i++) {
          x = {
            value: filterArray[i].id.toString(),
            label: filterArray[i].city
          };
          dataCity.push(x);
          this.listCity = dataCity;
        }
        this.loadingParticipantDetail = false;
      }, err => {
        this.loadError();
        this.loadingParticipantDetail = false;
      });
    } else {
      this.listCity = [];
      this.loadingParticipantDetail = false;
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

  getYearlist() {
    this.formatMyDate = formatDate(this.myDate, 'yyyy', 'en-US');
    const year = new Date();
    const maxYear = year.getFullYear() + 1;
    const minYear = year.getFullYear() - 21;
    const listYear = [];
    let x: any;
    for (let i = maxYear; i >= minYear; i--) {
      x = {
        value: i.toString(),
        label: i
      };
      listYear.push(x);
      this.listYears = listYear;
    }
  }

  getYearlistHighSchool() {
    this.formatMyDate = formatDate(this.myDate, 'yyyy', 'en-US');
    const year = new Date();
    const maxYear = year.getFullYear() + 1;
    const minYear = year.getFullYear() - 7;
    const listYear = [];
    let x: any;
    for (let i = maxYear; i >= minYear; i--) {
      x = {
        value: i.toString(),
        label: i
      };
      listYear.push(x);
      this.listYears = listYear;
    }
  }

  getYearListPascasarjana() {
    this.formatMyDate = formatDate(this.myDate, 'yyyy', 'en-US');
    const year = new Date();
    const maxYear = year.getFullYear() + 1;
    const minYear = year.getFullYear() - 61;
    const listYear = [];
    let x: any;
    for (let i = maxYear; i >= minYear; i--) {
      x = {
        value: i.toString(),
        label: i
      };
      listYear.push(x);
      this.listYears = listYear;
    }
  }

  getListCity() {
    this.loadEducationModal = true;
    this.chartService.getCityData('').subscribe((res) => {
      this.listCityAll = res && res.map((value) => {
        const { id, city } = value;
        return { value: id.toString(), label: city }
      });
      this.loadEducationModal = false;
    }, err => {
    });
  }

  changeCityDataforDistrict(event) {
    this.district = event.value;
    this.loadingParticipantDetail = true;
    if (this.district == undefined) {
      this.listDistrict = [];
      this.loadingParticipantDetail = false;
    } else {
      this.userService.getDistrictData(`?city_region_id=${this.district}`).subscribe((filterArray) => {
        this.listDistrict = filterArray && filterArray.map((value) => {
          const { id, detail_name } = value;
          return { value: id.toString(), label: detail_name }
        })
        this.loadingParticipantDetail = false;
      }, err => {
        this.loadingParticipantDetail = false;
      });

    }
  }

  changeProvinceBirth(value) {
    this.loadingParticipantDetail = true;
    if (value !== undefined) {
      if (value == 1) {
        this.loadingParticipantDetail = false;
        this.loadProvinceBirthDataFilter();
        this.isIndonesiaBirthCountry = true;
        this.registrationParticipantDataForm.get('province_birth').setValidators(Validators.required);
        this.registrationParticipantDataForm.get('province_birth').updateValueAndValidity();
        this.registrationParticipantDataForm.get('city_birth').setValidators(Validators.required);
        this.registrationParticipantDataForm.get('city_birth').updateValueAndValidity();
        this.registrationParticipantDataForm.get('province_birth_other').clearValidators();
        this.registrationParticipantDataForm.get('province_birth_other').updateValueAndValidity();
        this.registrationParticipantDataForm.get('city_birth_other').clearValidators();
        this.registrationParticipantDataForm.get('city_birth_other').updateValueAndValidity();
        this.registrationParticipantDataForm.get('city_birth_other').reset();
        this.registrationParticipantDataForm.get('province_birth_other').reset();
      } else {
        this.loadingParticipantDetail = false;
        this.registrationParticipantDataForm.get('province_birth').clearValidators();
        this.registrationParticipantDataForm.get('province_birth').updateValueAndValidity();
        this.registrationParticipantDataForm.get('city_birth').clearValidators();
        this.registrationParticipantDataForm.get('city_birth').updateValueAndValidity();
        this.registrationParticipantDataForm.get('province_birth_other').setValidators(Validators.required);
        this.registrationParticipantDataForm.get('province_birth_other').updateValueAndValidity();
        this.registrationParticipantDataForm.get('city_birth_other').setValidators(Validators.required);
        this.registrationParticipantDataForm.get('city_birth_other').updateValueAndValidity();
        this.registrationParticipantDataForm.get('city_birth').reset();
        this.registrationParticipantDataForm.get('province_birth').reset();
        this.isIndonesiaBirthCountry = false;
      }
    }
  }

  loadProvinceBirthDataFilter() {
    this.loadingParticipantDetail = true;
    this.userService.getProvinceData(`?country_id=1`).subscribe((filterArray) => {
      const dataProvince = [];
      let x: any;
      for (let i = 0; i < filterArray.length; i++) {
        x = {
          value: filterArray[i].id.toString(),
          label: filterArray[i].detail_name
        };
        dataProvince.push(x);
        this.listProvinceBirth = dataProvince;
      }
      this.loadingParticipantDetail = false;
    }, err => {
      this.loadError();
      this.loadingParticipantDetail = false;
    });
  }

  loadCityBirthDataFilter(value) {
    if (value !== undefined) {
      this.loadingParticipantDetail = true;
      this.chartService.getCityData(`?province_id=${value}`).subscribe((filterArray) => {
        const dataCity = [];
        let x: any;
        for (let i = 0; i < filterArray.length; i++) {
          x = {
            value: filterArray[i].id.toString(),
            label: filterArray[i].city
          };
          dataCity.push(x);
          this.listCityBirth = dataCity;
        }
        this.loadingParticipantDetail = false;
      }, err => {
        this.loadError();
        this.loadingParticipantDetail = false;
      });
    }
  }

  loadEducationDegreeDataFilter() {
    this.loadFilter = true;
    this.userService.getEducationDegreeData().subscribe((filterArray) => {
      const dataEducationDegree = [];
      let x: any;
      for (let i = 0; i < filterArray.length; i++) {
        x = {
          value: filterArray[i].id.toString(),
          label: filterArray[i].level,
          subitem: filterArray[i].type
        };
        dataEducationDegree.push(x);
        this.listEducationDegree = dataEducationDegree;
      }
      this.loadFilter = false;
    }, err => {
      this.loadError();
      this.loadFilter = false;
    });
  }

  loadEducationMajorDataFilter() {
    this.loadFilter = true;
    this.userService.getSchoolMajorData().subscribe((filterArray) => {
      const dataEducationMajor = [];
      let x: any;
      for (let i = 0; i < filterArray.length; i++) {
        x = {
          value: filterArray[i].id.toString(),
          label: filterArray[i].major
        };
        dataEducationMajor.push(x);
        this.listEducationMajor = dataEducationMajor;
      }
      this.loadFilter = false;
    }, err => {
      this.loadError();
      this.loadFilter = false;
    });
  }

  loadFamilyRelationshipParentDataFilter() {
    this.loadFilter = true;
    this.familyRelationshipFilter = 'parent';
    this.userService.getFamilyRelationshipData(`${this.familyRelationshipFilter}`).subscribe((filterArray) => {
      const dataFamilyRelationshipParent = [];
      let x: any;
      for (let i = 0; i < filterArray.length; i++) {
        x = {
          value: filterArray[i].id.toString(),
          label: filterArray[i].relationship
        };
        dataFamilyRelationshipParent.push(x);
        this.listFamilyRelationshipParent = dataFamilyRelationshipParent;
      }
      this.loadFilter = false;
    }, err => {
      this.loadError();
      this.loadFilter = false;
    });
  }

  loadWorkFieldDataFilter() {
    this.loadFilter = true;
    this.userService.getWorkFieldData().subscribe((filterArray) => {
      const dataWorkField = [];
      let x: any;
      for (let i = 0; i < filterArray.length; i++) {
        x = {
          value: filterArray[i].id.toString(),
          label: filterArray[i].field
        };
        dataWorkField.push(x);
        this.listWorkField = dataWorkField;
      }
      this.loadFilter = false;
    }, err => {
      this.loadError();
      this.loadFilter = false;
    });
  }

  loadWorkTypeDataFilter() {
    this.loadFilter = true;
    this.userService.getWorkTypeData(`is_productive=1`).subscribe((filterArray) => {
      const dataWorkType = [];
      let x: any;
      for (let i = 0; i < filterArray.length; i++) {
        x = {
          value: filterArray[i].id.toString(),
          label: filterArray[i].name
        };
        dataWorkType.push(x);
        this.listWorkType = dataWorkType;
      }
      this.loadFilter = false;
    }, err => {
      this.loadError();
      this.loadFilter = false;
    });
  }

  loadIncomeRangeDataFilter() {
    this.loadFilter = true;
    this.userService.getIncomeRangeData().subscribe((filterArray) => {
      const dataIncomeRange = [];
      let x: any;
      for (let i = 0; i < filterArray.length; i++) {
        x = {
          value: filterArray[i].id.toString(),
          label: filterArray[i].range
        };
        dataIncomeRange.push(x);
        this.listIncomeRange = dataIncomeRange;
      }
      this.loadFilter = false;
    }, err => {
      this.loadError();
      this.loadFilter = false;
    });
  }

  changeSchoolCity(val) {
    if (!val) {
      this.listSchool = [];
    } else {
      this.userService.getSchoolData(`city_region_id=${val}&type=${this.educationDegreeType}`).subscribe((filterArray) => {
        if (this.educationDegreeType == 'he') {
          this.listSchool = filterArray && filterArray.map((value) => {
            const { id, name, npsn } = value;
            return { value: npsn.toString(), label: name, npsn: npsn }
          });
          this.isNpsn = true;
        } else {
          this.isNpsn = false;
          this.listSchool = filterArray && filterArray.map((value) => {
            const { id, name, npsn } = value;
            return { value: id.toString(), label: name, npsn: npsn }
          });
        }
      }, err => {
        this.loadError();
      });
    }
  }

  changeTypeStudent(event) {
    if (event.value == '1') {
      this.isForeignStudent = true;
      this.educationDegreeStudent = '';
      this.cityEdu = '';
      this.educationMajor = '';
      this.school = '';
      this.educationHistoryDataForm.get('city_edu').clearValidators();
      this.educationHistoryDataForm.get('city_edu').updateValueAndValidity();
      this.educationHistoryDataForm.get('education_major_id').clearValidators();
      this.educationHistoryDataForm.get('education_major_id').updateValueAndValidity();
      this.educationHistoryDataForm.get('school_detail').setValidators(Validators.compose([Validators.maxLength(100), Validators.required]));
      this.educationHistoryDataForm.get('school_detail').updateValueAndValidity();
      this.educationHistoryDataForm.get('major_detail').setValidators(Validators.compose([Validators.maxLength(100), Validators.required]));
      this.educationHistoryDataForm.get('major_detail').updateValueAndValidity();
    } else {
      this.educationHistoryDataForm.get('school_detail').clearValidators();
      this.educationHistoryDataForm.get('school_detail').updateValueAndValidity();
      this.isForeignStudent = false;
      this.educationDegreeStudent = '';
    }
  }

  changeSchool(data) {
    this.educationDegreeType = data.subitem;
    const dataSchool = data.value;
    if (this.isForeignStudent) {
      this.hiddenInstitutionandMajor = true;
      this.hiddenMajor = true;
      this.isForeignSchool = true;
      this.isNotHighSchool = true;
      this.cityEdu = '';
      this.school = '';
      this.educationHistoryDataForm.get('city_edu').clearValidators();
      this.educationHistoryDataForm.get('city_edu').updateValueAndValidity();
      this.educationHistoryDataForm.get('education_major_id').clearValidators();
      this.educationHistoryDataForm.get('education_major_id').updateValueAndValidity();
      this.educationHistoryDataForm.get('major_detail').setValidators(Validators.required);
      this.educationHistoryDataForm.get('major_detail').updateValueAndValidity();
      if (dataSchool === '7' || dataSchool === '8' || dataSchool === '9' || dataSchool === '10' || dataSchool === '11') {
        this.getYearListPascasarjana();
      } else {
        this.getYearlistHighSchool();
      }
    } else {
      if (this.educationDegreeType == 'he') {
        this.hiddenMajor = true;
        this.hiddenInstitutionandMajor = false;
        this.isNotHighSchool = true;
        this.isForeignSchool = false;
        this.cityEdu = '';
        this.school = '';
        this.educationHistoryDataForm.get('city_edu').clearValidators();
        this.educationHistoryDataForm.get('city_edu').updateValueAndValidity();
        this.educationHistoryDataForm.get('education_major_id').clearValidators();
        this.educationHistoryDataForm.get('education_major_id').updateValueAndValidity();
        this.educationHistoryDataForm.get('major_detail').setValidators(Validators.required);
        this.educationHistoryDataForm.get('major_detail').updateValueAndValidity();
        this.educationHistoryDataForm.patchValue({ major_detail: '' });
        this.educationHistoryDataForm.patchValue({ school_detail: data.school_name });
        this.loadFilter = false;
        this.getYearListPascasarjana();
      } else {
        this.getYearlistHighSchool();
        this.cityEdu = '';
        this.school = '';
        this.hiddenInstitutionandMajor = false;
        this.hiddenMajor = false;
        this.isForeignSchool = false;
        this.isNotHighSchool = false;
        this.educationHistoryDataForm.get('city_edu').setValidators(Validators.required);
        this.educationHistoryDataForm.get('city_edu').updateValueAndValidity();
        this.educationHistoryDataForm.get('education_major_id').setValidators(Validators.required);
        this.educationHistoryDataForm.get('education_major_id').updateValueAndValidity();
        this.educationHistoryDataForm.get('major_detail').clearValidators();
        this.educationHistoryDataForm.get('major_detail').updateValueAndValidity();
      }
    }
  }

  loadEducationHistoryData() {
    this.loadtableEducationHistory = true;
    this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (this.userProfile.email !== undefined) {
      this.unameEmailAdmin = this.userProfile.email;
      this.userService.getParticipantDetailData(this.userProfile.email).subscribe(res => {
        this.participantId = res.participant_id;
        this.userService.getEducationHistoryData(`${this.participantId}`).subscribe(response => {
          this.tableData = response.data;
          this.dtTrigger.next();
          this.loadtableEducationHistory = false;
          if (response.data.length === 0) {
            this.isEducationDataEmpty = true;
          } else {
            this.isEducationDataEmpty = false;
          }
        }, err => {
          this.loadError();
          this.loadtableEducationHistory = false;
        });
      });
    }
  }

  renderEducationHistory(): void {
    this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
      if (index == 0) {
        dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
        });
      }
    });
  }

  loadViewEducationHistory(data) {
    this.mode('view');
    this.isViewEducation = true;
    this.educationHistoryDataForm.patchValue({ graduate_year: data.graduate_year });
    this.educationHistoryDataForm.patchValue({ major_detail: data.major });
    this.educationHistoryDataForm.patchValue({ school_detail: data.school_name });
    this.educationHistoryDataForm.patchValue({ city: data.city_region });
    this.educationHistoryDataForm.patchValue({ education_degree_id: data.level });
    if (data.student_foreign == false) {
      this.educationHistoryDataForm.patchValue({ student_foreign: 'Tidak' });
      this.hiddenCity = false;
    } else if (data.student_foreign == true) {
      this.educationHistoryDataForm.patchValue({ student_foreign: 'Ya' });
      this.hiddenCity = true;
    } else if (data.student_foreign == null) {
      this.educationHistoryDataForm.patchValue({ student_foreign: '-' });
    }
    this.modalViewStudent.show()
  }

  closeModalStudentView() {
    this.modalViewStudent.hide();
    this.educationHistoryDataForm.reset();
  }

  loadInputEducationHistoryData() {
    this.mode('input');
    this.isEditEducation = false;
    this.isViewEducation = false;
    this.educationDegree = '';
    this.educationMajor = '';
    this.educationYears = '';
    this.school = '';
    this.city = '';
    this.cityEdu = '';
    this.educationMajor = '';
    this.educationMajor = '';
    this.isForeign = '';
    this.educationHistoryDataForm.reset();
    this.educationHistoryDataForm.patchValue({ graduate_year: '' });
    this.modalStudent.show();
  }

  hideModalEducation() {
    this.modalStudent.hide();
    this.educationHistoryDataForm.reset();
  }

  deleteEducation(data) {
    this.educationHistoryId = data.id;
    const payload = {
      id: this.educationHistoryId
    }
    Swal.fire({
      title: this.confirmation,
      text: this.confirmationText,
      type: 'question',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: "#ffba57",
      confirmButtonText: this.yes,
      cancelButtonText: this.no,
      allowOutsideClick: false
    }).then((confirm) => {
      if (confirm.value) {
        this.loading = true;
        this.userService.deleteEducationHistoryData(payload).subscribe(res => {
          if (res.status === 'Success') {
            this.loading = false;
            Swal.fire({
              title: res.status,
              text: res.message,
              type: 'success',
              timer: 5000
            });
            this.renderEducationHistory();
            this.loadEducationHistoryData();
          } else {
            Swal.fire({
              title: res.status,
              text: res.message,
              type: 'error',
              timer: 5000
            });
            this.loading = false;
          }
        });
      }
    });
  }

  createEducationHistoryData() {
    this.loadingEdu = true;
    if (this.edit == 'input') {
      this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
      if (this.userProfile.email !== undefined) {
        this.userService.getParticipantDetailData(this.userProfile.email).subscribe(res => {
          this.participantId = res.participant_id;
        });
        const data = {
          participant_id: this.participantId,
          education_degree_id: this.educationDegreeStudent,
          education_major_id: this.educationMajor,
          school_id: '',
          npsn_he: '',
          school: this.educationHistoryDataForm.controls['school_detail'].value,
          education_major: this.educationHistoryDataForm.controls['major_detail'].value,
          graduate_year: this.educationHistoryDataForm.controls['graduate_year'].value,
          student_id: '0',
          last_score: '0',
          student_foreign: this.isForeign,
          city_id: this.cityEdu
        };
        let datas = {};
        if (this.isNpsn) {
          datas = {
            ...data,
            school_id: '',
            npsn_he: this.school
          }
        } else {
          datas = {
            ...data,
            school_id: this.school,
            npsn_he: ''
          }
        }
        this.userService.postEducationHistoryData(datas).subscribe(res => {
          if (res != null) {
            if (res.status == 'Success') {
              this.broadcasterService.notifBroadcast(true, {
                title: res.status,
                msg: res.message,
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'success'
              });
              this.hideModalEducation();
              this.renderEducationHistory();
              this.loadEducationHistoryData();
              this.loadingEdu = false;
            } else {
              this.loadError();
              this.loadingEdu = false;
            }
          } else {
            this.loadError();
            this.loadingEdu = false;
          }
        }, (reason) => {
          this.loadingEdu = false;
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
    }
  }

  loadParentsData() {
    this.loadtableParentsData = true;
    this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (this.userProfile.email !== undefined) {
      this.userService.getParticipantDetailData(this.userProfile.email).subscribe(res => {
        this.participantId = res.participant_id;
        this.userService.getParentsData(`${this.participantId}`).subscribe(response => {
          this.tableData1 = response.data;
          this.dtTrigger1.next(); // Trigger for load datatable
          this.loadtableParentsData = false;
        }, err => {
          this.loadError();
          this.loadtableParentsData = false;
        });
      });
    }
  }

  renderParentsData(): void {
    this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
      if (index == 1) {
        dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
        });
      }
    });
  }

  loadDetailParentsData(data) {
    this.isViewParentsData = true;
    this.parentId = data.id;
    this.workField = data.work_field_id && data.work_field_id.toString();
    this.incomeRange = data.work_income_range_id && data.work_income_range_id.toString();
    this.parentsDataForm.patchValue({ relationship_id: data.family_relationship_id && data.family_relationship_id.toString() });
    this.parentsDataForm.patchValue({ family_name: data.family_name });
    this.parentsDataForm.patchValue({ email: data.email ? data.email : '' });
    this.parentsDataForm.patchValue({ mobile_phone_number: data.mobile_phone_number });
    this.parentsDataForm.patchValue({ work_field_id: data.work_field_id && data.work_field_id.toString() });
    this.parentsDataForm.patchValue({ work_type_id: data.work_type_id && data.work_type_id.toString() });
    this.parentsDataForm.patchValue({ work_income_range_id: data.work_income_range_id && data.work_income_range_id.toString() });
    this.birthPlace = data.birth_city && data.birth_city.toString();
    this.parentsDataForm.patchValue({ birth_date: data.birth_date && moment(data.birth_date).format('YYYY-MM-DD') });
    this.parentsDataForm.patchValue({ education_degree_id: data.education_degree && data.education_degree.toString() });
    this.parentsDataForm.patchValue({ work_position: data.work_position });
    this.parentsDataForm.patchValue({ company_name: data.company_name });
    this.modalParents.show();
  }

  loadInputParentsData() {
    this.isViewParentsData = false;
    this.educationDegree = '';
    this.familyRelationshipParent = '';
    this.workField = '';
    this.workType = '';
    this.birthPlace = '';
    this.incomeRange = '';
    this.parentsDataForm.patchValue({ family_name: '' });
    this.parentsDataForm.patchValue({ email: '' });
    this.parentsDataForm.patchValue({ mobile_phone_number: '' });
    this.parentsDataForm.patchValue({ birth_date: '' });
    this.parentsDataForm.patchValue({ work_position: '' });
    this.parentsDataForm.patchValue({ company_name: '' });
    this.modalParents.show();
  }

  modalParentsClose() {
    this.modalParents.hide();
    this.parentsDataForm.reset();
    this.isViewParentsData = false;
  }

  deleteParentsData(data) {
    this.parentId = data.id;
    const payload = {
      id: this.parentId
    }
    Swal.fire({
      title: this.confirmation,
      text: this.confirmationText,
      type: 'question',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: "#ffba57",
      confirmButtonText: this.yes,
      cancelButtonText: this.no,
      allowOutsideClick: false
    }).then((confirm) => {
      if (confirm.value) {
        this.loading = true;
        this.userService.deleteParentsData(payload).subscribe(res => {
          if (res.status === 'Success') {
            this.loading = false;
            this.loadDelete();
            this.renderParentsData();
            this.loadParentsData();
          } else {
            this.loadError();
            this.loading = false;
          }
        });
      }
    });
  }

  createParentsData() {
    this.loadingParents = true;
      this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
      if (this.userProfile.email !== undefined) {
        this.userService.getParticipantDetailData(this.userProfile.email).subscribe(res => {
          this.participantId = res.participant_id;
        });
        const data = {
          participant_id: this.participantId,
          family_relationship_id: this.parentsDataForm.controls['relationship_id'].value,
          family_name: this.parentsDataForm.controls['family_name'].value,
          email: this.parentsDataForm.controls['email'].value,
          mobile_phone_number: this.parentsDataForm.controls['mobile_phone_number'].value,
          birth_place: this.birthPlace,
          birth_date: this.parentsDataForm.controls['birth_date'].value,
          education_degree_id: this.parentsDataForm.controls['education_degree_id'].value,
          work_field_id: this.parentsDataForm.controls['work_field_id'].value,
          work_type_id: this.parentsDataForm.controls['work_type_id'].value,
          work_position: this.parentsDataForm.controls['work_position'].value,
          work_income_range_id: this.parentsDataForm.controls['work_income_range_id'].value,
          company_name: this.parentsDataForm.controls['company_name'].value
        };
        this.userService.postParentsData(data).subscribe(res => {
          if (res != null) {
            if (res.status == 'Success') {
              this.loadSuccess();
              this.modalParentsClose();
              this.renderParentsData();
              this.loadParentsData();
              this.loadingParents = false;
            } else {
              this.loadError();
              this.loadingParents = false;
            }
          } else {
            this.loadError();
            this.loadingParents = false;
          }
        }, (reason) => {
          this.loadingParents = false;
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
  }

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
    this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
    this.userService.getParticipantDetailData(this.userProfile.email).subscribe(res => {
      let username = res.username;
      this.participantId = res.participant_id;
      let formDataPhoto = new FormData();
      formDataPhoto.append('username', username);
      formDataPhoto.append('participant_id', this.participantId);
      formDataPhoto.append('photo_url', this.urlPhoto);
      this.userService.postParticipantDetailData(formDataPhoto).subscribe(res => {
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
          this.loadError();
        }
        this.loadingSaveGambar = false
      }, () => { this.modalPreview.hide(); this.loadingSaveGambar = false })
    });
  }

  loadWorkHistory() {
    this.loadtableWorkHistory = true;
    this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (this.userProfile.email !== undefined) {
      this.userService.getParticipantDetailData(this.userProfile.email).subscribe(res => {
        this.participantId = res.participant_id;
        this.userService.getWorkHistoryData(`${this.participantId}`).subscribe(response => {
          this.tableData2 = response.data;
          this.dtTrigger2.next();
          this.loadtableWorkHistory = false;
        }, err => {
          this.loadError();
          this.loadtableWorkHistory = false;
        });
      });
    } else {
      const unameEx = this.userProfile.username + '@gmail.com';
      this.userService.getParticipantDetailData(unameEx).subscribe(res => {
        this.participantId = res.participant_id;
        this.userService.getWorkHistoryData(`${this.participantId}`).subscribe(response => {
          setTimeout(() => { // for fake loading for 3sec [just ignore if in development mode]
            this.tableData2 = response.data;
            this.dtTrigger2.next(); // Trigger for load datatable
            this.loadtableWorkHistory = false;
          }, 3000);
        }, err => {
          this.loadError();
          this.loadtableWorkHistory = false;
        });
      });
    }
  }

  renderWorkHistoryData(): void {
    this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
      if (index == 2) {
        dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
        });
      }
    });
  }

  loadDetailWorkHistoryData(data) {
    this.isViewWorkHistory = true;
    this.workId = data.id;
    this.workHistoryDataForm.patchValue({ company_name: data.company_name });
    this.workHistoryDataForm.patchValue({ work_field_id: data.work_field_id.toString() });
    this.workHistoryDataForm.patchValue({ work_type_id: data.work_type_id.toString() });
    this.workHistoryDataForm.patchValue({ work_income_range_id: data.work_income_range_id.toString() });
    this.workHistoryDataForm.patchValue({ work_position: data.work_position });
    const changestartdate = data.work_start_date && moment(data.work_start_date).format('YYYY-MM-DD');
    this.workHistoryDataForm.patchValue({ work_start_date: changestartdate });
    this.workHistoryDataForm.patchValue({ work_end_date: data.work_end_date && moment(data.work_end_date).format('YYYY-MM-DD') });
    this.workHistoryDataForm.patchValue({ company_address: data.company_address });
    this.workHistoryDataForm.patchValue({ company_phone_number: data.company_phone_number });
    this.modalWorkStory.show();
  }

  loadInputWorkHistoryData() {
    this.workHistoryDataForm.reset();
    this.modalWorkStory.show();
    this.isViewWorkHistory = false;
  }

  modalWorkStoryClose() {
    this.modalWorkStory.hide();
    this.workHistoryDataForm.reset();
    this.isViewWorkHistory = false;
  }


  deleteWorkHistoryData(data) {
    this.workId = data.id;
    const payload = {
      id: this.workId
    }
    Swal.fire({
      title: this.confirmation,
      text: this.confirmationText,
      type: 'question',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: "#ffba57",
      confirmButtonText: this.yes,
      cancelButtonText: this.no,
      allowOutsideClick: false
    }).then((confirm) => {
      if (confirm.value) {
        this.loading = true;
        this.userService.deleteWorkHistoryData(payload).subscribe(res => {
          if (res.status === 'Success') {
            this.loading = false;
            this.loadDelete();
            this.renderWorkHistoryData();
            this.loadWorkHistory();
          } else {
            this.loadError();
            this.loading = false;
          }
        });
      }
    });
  }

  createWorkHistoryData() {
    this.loadingWork = true;
      this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
      if (this.userProfile.email !== undefined) {
        this.userService.getParticipantDetailData(this.userProfile.email).subscribe(res => {
          this.participantId = res.participant_id;
        });
        const data = {
          participant_id: this.participantId,
          company_name: this.workHistoryDataForm.controls['company_name'].value,
          work_type_id: this.workHistoryDataForm.controls['work_type_id'].value,
          work_income_range_id: this.workHistoryDataForm.controls['work_income_range_id'].value,
          work_field_id: this.workHistoryDataForm.controls['work_field_id'].value,
          work_position: this.workHistoryDataForm.controls['work_position'].value,
          work_start_date: this.workHistoryDataForm.controls['work_start_date'].value,
          work_end_date: this.workHistoryDataForm.controls['work_end_date'].value,
          company_address: this.workHistoryDataForm.controls['company_address'].value,
          company_phone_number: this.workHistoryDataForm.controls['company_phone_number'].value
        };
        this.userService.postWorkHistoryData(data).subscribe(res => {
          if (res != null) {
            if (res.status == 'Success') {
              this.loadSuccess();
              this.renderWorkHistoryData();
              this.loadWorkHistory();
              this.modalWorkStoryClose();
              this.loadingWork = false;
            } else {
              this.loadError();
              this.loadingWork = false;
            }
          } else {
            this.loadingWork = false;
            this.loadError();
          }
        }, (reason) => {
          this.loadingWork = false;
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
  }

  goToRegistrationStep() {
    this.router.navigate(['/', 'new-registration']);
  }
}
