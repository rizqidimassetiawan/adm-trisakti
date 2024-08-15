import { data } from 'jquery';
import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { AdminManagementService } from 'src/app/_services/admin-management.service';
import { TranslateService } from '@ngx-translate/core';
import { BroadcasterService } from 'src/app/_services/broadcaster.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ParticipantService } from 'src/app/_services/participant.service';
import { DatePipe } from '@angular/common';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import * as moment from 'moment/moment';

@Component({
  selector: 'app-approval-data-detail',
  templateUrl: './approval-data-detail.component.html',
  styleUrls: ['./approval-data-detail.component.scss']
})
export class ApprovalDataDetailComponent implements OnInit {
  public loadtableApprovalData: boolean;
  @ViewChildren(DataTableDirective) dtElements: QueryList<DataTableDirective>;
  public dataTableParticipantPass: any;
  public dtOptions: any;
  public tableData: Array<any>;
  public dtTrigger = new Subject();

  public dataResult: Array<any>;
  public passStatus: string;
  public programStudyTransfer: string;
  public transferStatus: string;
  public showProgramStudy: boolean;
  public userProfile: any;
  public participantId: string;
  public name: string;
  public email: string;
  public birthCity: string;
  public dateofbirth: string;
  public studyProgramName: string;
  public searching: string;
  public gender: string;
  public address: string;
  public city: string;
  public province: string;
  public postalcode: string;
  public handphone: number;
  public programName: string;
  public selectionProgramId: string;
  public lastEducationCity: string;
  public lastEducationProvince: string;
  public lastEducation: string;
  public errType: boolean;
  public errSize: boolean;
  public formData = new FormData();
  public importDataForm: FormGroup;
  public loadingImport: boolean;
  public loadExportReg: boolean;
  public educationLast: any;
  public listSelectionYear: any;
  public selectionYear: string;
  //for filtering
  public loadFilter: any;
  public listProgramStudy: any;
  public programStudy: string;
  public selectionPathid: any;
  public approvalDetailDataForm: FormGroup;
  public approvalId: any;
  public registrationNumber: any;
  public edit: any;
  public loading: boolean;
  public isApplyFilter: boolean;
  public isChangePage: boolean;
  public isTabledata: boolean;
  public totalRecord: number;
  public currentPage: number;
  public page: any;
  public collectionSize: number;
  public pageSize: number;
  public pageNumber: number;
  public from: number;
  public isPassStatus: boolean;
  public isTransferStatus: boolean;
  public isPassStatuTransferStatus: boolean;
  public loadingModals: boolean;
  public approvalData: any;
  public isPasca: boolean;
  public pathYearId: string;
  public examStatus: any;
  public gradeCbt: string;
  public raportPath: boolean;
  public loadingCbt: boolean;
  public listSpecialization: any;
  public specialization: string;

  @ViewChild('myPersistenceModal', { static: true }) public myPersistenceModal: any;
  @ViewChild('importApprovalModal', { static: true }) public importApprovalModal: any;

  constructor(
    public translateService: TranslateService,
    private broadcasterService: BroadcasterService,
    private chartService: AdminManagementService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private userService: ParticipantService,
    private datePipe: DatePipe,
  ) {
    translateService.setDefaultLang(localStorage.getItem('lang'));

    broadcasterService.changeLangBroadcast$.subscribe(res => {
      translateService.setDefaultLang(res.lang);
    });
    this.importDataForm = this.fb.group({
      url: new FormControl('', Validators.required),
      council_date: new FormControl('', Validators.required),
      step_1_end_date: new FormControl('', Validators.required),
      step_2_end_date: new FormControl('', Validators.required),
      step_3_start_date: new FormControl('', Validators.required),
      step_3_end_date: new FormControl('', Validators.required),

    })
    this.approvalDetailDataForm = this.fb.group({
      registration_number: new FormControl(['']),
      selection_program_id: new FormControl(['']),
      selection_program_name: new FormControl(['']),
      selection_path_id: new FormControl(['']),
      selection_path_name: new FormControl(['']),
      study_program_name: new FormControl(['']),
      total_score: new FormControl('', Validators.compose([Validators.required])),
      mapping_registration_program_study_id: new FormControl(''),
      transfer_status_study_program_id: new FormControl(''),
      pass_status: new FormControl('', [Validators.required]),
      publication_status: new FormControl('', [Validators.required]),
      transfer_status: new FormControl('', [Validators.required]),
      publication_date: new FormControl('', [Validators.required]),
      council_date: new FormControl('', [Validators.required]),
      specialization_id: new FormControl('', [Validators.required]),
      // up3: new FormControl('', [Validators.required]),
      // bpp: new FormControl('', [Validators.required]),
      // sdp2: new FormControl('', [Validators.required]),
      // dormitory: new FormControl('', [Validators.required]),
      // up3_disc: new FormControl('', [Validators.required]),
      // bpp_disc: new FormControl('', [Validators.required]),
      // sdp2_disc: new FormControl('', [Validators.required]),
      // dormitory_disc: new FormControl('', [Validators.required]),
      up3_start_date: new FormControl('', [Validators.required]),
      up3_end_date: new FormControl('', [Validators.required]),
      bpp_start_date: new FormControl('', [Validators.required]),
      bpp_end_date: new FormControl('', [Validators.required]),
      sdp2_start_date: new FormControl('', [Validators.required]),
      sdp2_end_date: new FormControl('', [Validators.required]),
      school_year: new FormControl('', [Validators.required]),
      // insurance: new FormControl('', [Validators.required]),
      beasiswa_id: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])),
      old_student_id: new FormControl('', Validators.pattern('^[0-9]*$')),
      semester: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$'), Validators.maxLength(1)])),
      reference_number: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])),
    });
    this.selectionPathid = +this.route.snapshot.paramMap.get('id');
    this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
    this.showProgramStudy = false;
    this.loadingImport = false;
    this.loadExportReg = false;
    this.isApplyFilter = false;
    this.isChangePage = false;
    this.isTabledata = false;
    this.loadingModals = false;
    this.isPasca = false;
    this.loadingCbt = false;
    this.raportPath = false;
    this.searching = '';
    this.dataResult = [];
  }

  get fap() {
    return this.approvalDetailDataForm.controls;
  }

  get fi() {
    return this.importDataForm.controls;
  }

  ngOnInit() {
    this.dtOptions = {
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
      initComplete: () => {
      }
    };
    // this.loadApprovalData(this.selectionPathid);
    this.yearList(this.selectionPathid);
    this.loadTypeApproval();
  }

  loadTypeApproval() {
    this.chartService.getParticipantRegistApprove(`?selection_path=${this.selectionPathid}`).subscribe(response => {
      this.approvalData = response.data[0].category;
      if (this.approvalData === 'PASCASARJANA' || this.approvalData === 'EKSTENSI' || this.approvalData === 'PJJ-ONLINE') {
        this.isPasca = true;
      } else {
        this.isPasca = false;
      }
    });
  }

  mappingPathYearChanged(event) {
    this.selectionYear = event.value;
    this.pathYearId = event.pathYear;
    this.examStatus = event.exam_status;
    if (this.examStatus == 1) {
      this.raportPath = true;
    } else {
      this.raportPath = false;
    }
    this.applyFilter();
  }

  generateScoreCbt() {
    this.loadingCbt = true;
    this.chartService.getMoodleExamGrades(`?registration_number=${this.registrationNumber}`).subscribe(res => {
      this.loadingCbt = false;
      this.gradeCbt = res.grade ? res.grade : '0';
      this.approvalDetailDataForm.patchValue({ total_score: this.gradeCbt});
    }, (reason) => {
      this.loadingCbt = false;
      this.broadcasterService.notifBroadcast(true, {
        title: 'Gagal',
        msg: reason.error.message,
        timeout: 5000,
        theme: 'default',
        position: 'top-right',
        type: 'error'
      });
      this.loadingImport = false;
    });
  }

  applyFilter() {
    this.dataResult = [];
    this.loadtableApprovalData = true;

    if (this.pageNumber !== undefined) {
      this.chartService.getResultPagination(`?page=${this.pageNumber}&selection_path=${this.selectionPathid}&mapping_path_year_id=${this.pathYearId}&registration_number=${this.searching}`).subscribe(response => {
        this.dataResult = response.data;
        this.isChangePage = false;
        this.isApplyFilter = true;
        this.currentPage = response.current_page;
        this.totalRecord = response.data.length;
        this.collectionSize = response.total;
        this.pageSize = response.per_page;
        this.loadtableApprovalData = false;
        this.dataResult.slice((response.current_page - response.current_page) * this.pageSize);
      });
    } else {
      this.chartService.getResultPagination(`?selection_path=${this.selectionPathid}&mapping_path_year_id=${this.pathYearId}&registration_number=${this.searching}`).subscribe(response => {
        this.dataResult = response.data;
        this.from = response.from;
        this.isChangePage = false;
        this.isApplyFilter = true;
        this.loadtableApprovalData = false;
        this.currentPage = response.current_page;
        this.totalRecord = response.data.length;
        this.collectionSize = response.total;
        this.pageSize = response.per_page;
        const to = response.to;
      });
    }
  }

  changePage(e) {
    this.pageNumber = e;
    this.applyFilter();
  }

  yearList(selectionPathid) {
    this.chartService.getMappingPathYearIntake(`?active_status=true&selection_path_id=${selectionPathid}`).subscribe((res) => {
      this.listSelectionYear = res && res.map((value) => {
        const { id, year, mapping_path_year_id, exam_status } = value;
        return { value: id.toString(), label: year, pathYear: mapping_path_year_id, exam_status: exam_status};
      });
    });
  }

  getSpecializationStudyProgram(evt) {
    this.userService.getStudyProgramSpecialization(`?program_study_id=${evt}`).subscribe((res) => {
      this.listSpecialization = res && res.map((value) => {
        const { id, specialization_name } = value;
        return { value: id.toString(), label: specialization_name };
      });
    });
  }

  onDeselected(val) {
    switch (val) {
      case 'programStudy':
        this.programStudy = '0';
    }
  }

  searchData(value) {
    this.searching = value;
    this.applyFilter()
  }

  loadMinimumSdp(value) {
    if (!value) {
      this.approvalDetailDataForm.patchValue({ sdp2: 0 });
    } else {
      this.chartService.getRegistrationProgramStudy(`${this.registrationNumber}&study_program_id=${value}`).subscribe((res) => {
        if (res.data.length !== 0) {
          this.approvalDetailDataForm.patchValue({ sdp2: res.data[0].minimum_donation });
          this.studyProgramName = res.data[0].study_program_name;
        }
      });

    }
  }

  renderTable(): void {
    this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
      if (index == 0) {
        dtElement.dtInstance.then((dtInstance: any) => {
          dtInstance.destroy();
        });
      }
    });
  }

  loadProgramStudyRegistrationDataFilter() {
    this.loadingModals = true;
    this.chartService.getStudyPrograms().subscribe((res) => {
      // this.chartService.getRegistrationProgramStudy(registrationNumber).subscribe((res) => {
      this.loadingModals = false;
      this.listProgramStudy = res && res.map((value) => {
        const { id, study_program_name } = value;
        return { value: id.toString(), label: study_program_name }
      });
    });
  }

  importExcelApprovalData() {
    this.importApprovalModal.show();
  }

  hideExcelForm() {
    this.importDataForm.patchValue({ url: '' });
    this.importApprovalModal.hide();
  }

  changeImportFile(event) {
    this.errSize = false;
    this.errType = false;
    const elem = event.target;
    const files = elem.files[0].name;
    const fileType = files.substr(files.lastIndexOf('.') + 1);
    const size = elem.files[0].size;
    if (elem.files.length > 0) {
      if (fileType == 'xlsx') {
        if (size < 2000000) {
          this.formData = new FormData;
          this.formData.append('excel', elem.files[0]);
        } else {
          this.errSize = true;
          this.importDataForm.get('url').patchValue('');
        }
      } else {
        this.errType = true;
        this.importDataForm.get('url').patchValue('');
      }
    }
  }

  passStatusChange(value) {
    if (value == 1) {
      this.isPassStatus = true;
      this.transferStatus = '';
    } else {
      this.isPassStatus = false;
      this.transferStatus = '';
    }
  }

  passStatusCheck(value) {
    if (value == 1) {
      if (this.isPassStatus === true) {
        this.isTransferStatus = true;
        this.isPassStatuTransferStatus = true;
        this.showProgramStudy = true;
        this.approvalDetailDataForm.get('mapping_registration_program_study_id').setValidators(Validators.required);
        this.approvalDetailDataForm.get('mapping_registration_program_study_id').updateValueAndValidity();
        this.approvalDetailDataForm.get('transfer_status_study_program_id').setValidators(Validators.required);
        this.approvalDetailDataForm.get('transfer_status_study_program_id').updateValueAndValidity();
        // this.approvalDetailDataForm.get('up3').setValidators(Validators.required);
        // this.approvalDetailDataForm.get('up3').updateValueAndValidity();
        // this.approvalDetailDataForm.get('bpp').setValidators(Validators.required);
        // this.approvalDetailDataForm.get('bpp').updateValueAndValidity();
        // this.approvalDetailDataForm.get('sdp2').setValidators(Validators.required);
        // this.approvalDetailDataForm.get('sdp2').updateValueAndValidity();
        // this.approvalDetailDataForm.get('dormitory').setValidators(Validators.required);
        // this.approvalDetailDataForm.get('dormitory').updateValueAndValidity();
        // this.approvalDetailDataForm.get('up3_disc').setValidators(Validators.required);
        // this.approvalDetailDataForm.get('up3_disc').updateValueAndValidity();
        // this.approvalDetailDataForm.get('bpp_disc').setValidators(Validators.required);
        // this.approvalDetailDataForm.get('bpp_disc').updateValueAndValidity();
        // this.approvalDetailDataForm.get('sdp2_disc').setValidators(Validators.required);
        // this.approvalDetailDataForm.get('sdp2_disc').updateValueAndValidity();
        // this.approvalDetailDataForm.get('dormitory_disc').setValidators(Validators.required);
        // this.approvalDetailDataForm.get('dormitory_disc').updateValueAndValidity();
        this.approvalDetailDataForm.get('up3_start_date').setValidators(Validators.required);
        this.approvalDetailDataForm.get('up3_start_date').updateValueAndValidity();
        this.approvalDetailDataForm.get('up3_end_date').setValidators(Validators.required);
        this.approvalDetailDataForm.get('up3_end_date').updateValueAndValidity();
        this.approvalDetailDataForm.get('bpp_start_date').setValidators(Validators.required);
        this.approvalDetailDataForm.get('bpp_start_date').updateValueAndValidity();
        this.approvalDetailDataForm.get('bpp_end_date').setValidators(Validators.required);
        this.approvalDetailDataForm.get('bpp_end_date').updateValueAndValidity();
        this.approvalDetailDataForm.get('sdp2_start_date').setValidators(Validators.required);
        this.approvalDetailDataForm.get('sdp2_start_date').updateValueAndValidity();
        this.approvalDetailDataForm.get('sdp2_end_date').setValidators(Validators.required);
        this.approvalDetailDataForm.get('sdp2_end_date').updateValueAndValidity();
        this.approvalDetailDataForm.get('school_year').setValidators(Validators.required);
        this.approvalDetailDataForm.get('school_year').updateValueAndValidity();
        this.approvalDetailDataForm.get('council_date').setValidators(Validators.required);
        this.approvalDetailDataForm.get('council_date').updateValueAndValidity();
        // this.approvalDetailDataForm.get('insurance').setValidators(Validators.required);
        // this.approvalDetailDataForm.get('insurance').updateValueAndValidity();
        this.approvalDetailDataForm.get('beasiswa_id').setValidators(Validators.compose([Validators.pattern('^[0-9]*$'), Validators.required]));
        this.approvalDetailDataForm.get('beasiswa_id').updateValueAndValidity();
        this.approvalDetailDataForm.get('reference_number').setValidators(Validators.compose([Validators.required]));
        this.approvalDetailDataForm.get('reference_number').updateValueAndValidity();
        this.approvalDetailDataForm.get('semester').setValidators(Validators.compose([Validators.required, Validators.pattern('^[0-9]*$'), Validators.maxLength(1)]));
        this.approvalDetailDataForm.get('semester').updateValueAndValidity();

      } else {
        this.showProgramStudy = true;
        this.approvalDetailDataForm.get('mapping_registration_program_study_id').clearValidators();
        this.approvalDetailDataForm.get('mapping_registration_program_study_id').updateValueAndValidity();
        this.approvalDetailDataForm.get('transfer_status_study_program_id').setValidators(Validators.required);
        this.approvalDetailDataForm.get('transfer_status_study_program_id').updateValueAndValidity();
        // this.approvalDetailDataForm.get('up3').setValidators(Validators.required);
        // this.approvalDetailDataForm.get('up3').updateValueAndValidity();
        // this.approvalDetailDataForm.get('bpp').setValidators(Validators.required);
        // this.approvalDetailDataForm.get('bpp').updateValueAndValidity();
        // this.approvalDetailDataForm.get('sdp2').setValidators(Validators.required);
        // this.approvalDetailDataForm.get('sdp2').updateValueAndValidity();
        // this.approvalDetailDataForm.get('dormitory').setValidators(Validators.required);
        // this.approvalDetailDataForm.get('dormitory').updateValueAndValidity();
        // this.approvalDetailDataForm.get('up3_disc').setValidators(Validators.required);
        // this.approvalDetailDataForm.get('up3_disc').updateValueAndValidity();
        // this.approvalDetailDataForm.get('bpp_disc').setValidators(Validators.required);
        // this.approvalDetailDataForm.get('bpp_disc').updateValueAndValidity();
        // this.approvalDetailDataForm.get('sdp2_disc').setValidators(Validators.required);
        // this.approvalDetailDataForm.get('sdp2_disc').updateValueAndValidity();
        // this.approvalDetailDataForm.get('dormitory_disc').setValidators(Validators.required);
        // this.approvalDetailDataForm.get('dormitory_disc').updateValueAndValidity();
        this.approvalDetailDataForm.get('up3_start_date').setValidators(Validators.required);
        this.approvalDetailDataForm.get('up3_start_date').updateValueAndValidity();
        this.approvalDetailDataForm.get('up3_end_date').setValidators(Validators.required);
        this.approvalDetailDataForm.get('up3_end_date').updateValueAndValidity();
        this.approvalDetailDataForm.get('bpp_start_date').setValidators(Validators.required);
        this.approvalDetailDataForm.get('bpp_start_date').updateValueAndValidity();
        this.approvalDetailDataForm.get('bpp_end_date').setValidators(Validators.required);
        this.approvalDetailDataForm.get('bpp_end_date').updateValueAndValidity();
        this.approvalDetailDataForm.get('sdp2_start_date').setValidators(Validators.required);
        this.approvalDetailDataForm.get('sdp2_start_date').updateValueAndValidity();
        this.approvalDetailDataForm.get('sdp2_end_date').setValidators(Validators.required);
        this.approvalDetailDataForm.get('sdp2_end_date').updateValueAndValidity();
        this.approvalDetailDataForm.get('school_year').setValidators(Validators.required);
        this.approvalDetailDataForm.get('school_year').updateValueAndValidity();
        this.approvalDetailDataForm.get('council_date').setValidators(Validators.required);
        this.approvalDetailDataForm.get('council_date').updateValueAndValidity();
        // this.approvalDetailDataForm.get('insurance').setValidators(Validators.required);
        // this.approvalDetailDataForm.get('insurance').updateValueAndValidity();
        this.approvalDetailDataForm.get('beasiswa_id').setValidators(Validators.compose([Validators.pattern('^[0-9]*$'), Validators.required]));
        this.approvalDetailDataForm.get('beasiswa_id').updateValueAndValidity();
        this.approvalDetailDataForm.get('reference_number').setValidators(Validators.compose([Validators.required]));
        this.approvalDetailDataForm.get('reference_number').updateValueAndValidity();
        this.approvalDetailDataForm.get('semester').setValidators(Validators.compose([Validators.required, Validators.pattern('^[0-9]*$'), Validators.maxLength(1)]));
        this.approvalDetailDataForm.get('semester').updateValueAndValidity();
        this.isTransferStatus = true;
        this.isPassStatuTransferStatus = false;
      }
    } else {
      if (this.isPassStatus === true) {
        this.showProgramStudy = true;
        this.approvalDetailDataForm.get('mapping_registration_program_study_id').clearValidators();
        this.approvalDetailDataForm.get('mapping_registration_program_study_id').updateValueAndValidity();
        this.approvalDetailDataForm.get('transfer_status_study_program_id').clearValidators();
        this.approvalDetailDataForm.get('transfer_status_study_program_id').updateValueAndValidity();
        // this.approvalDetailDataForm.get('up3').setValidators(Validators.required);
        // this.approvalDetailDataForm.get('up3').updateValueAndValidity();
        // this.approvalDetailDataForm.get('bpp').setValidators(Validators.required);
        // this.approvalDetailDataForm.get('bpp').updateValueAndValidity();
        // this.approvalDetailDataForm.get('sdp2').setValidators(Validators.required);
        // this.approvalDetailDataForm.get('sdp2').updateValueAndValidity();
        // this.approvalDetailDataForm.get('dormitory').setValidators(Validators.required);
        // this.approvalDetailDataForm.get('dormitory').updateValueAndValidity();
        // this.approvalDetailDataForm.get('up3_disc').setValidators(Validators.required);
        // this.approvalDetailDataForm.get('up3_disc').updateValueAndValidity();
        // this.approvalDetailDataForm.get('bpp_disc').setValidators(Validators.required);
        // this.approvalDetailDataForm.get('bpp_disc').updateValueAndValidity();
        // this.approvalDetailDataForm.get('sdp2_disc').setValidators(Validators.required);
        // this.approvalDetailDataForm.get('sdp2_disc').updateValueAndValidity();
        // this.approvalDetailDataForm.get('dormitory_disc').setValidators(Validators.required);
        // this.approvalDetailDataForm.get('dormitory_disc').updateValueAndValidity();
        this.approvalDetailDataForm.get('up3_start_date').setValidators(Validators.required);
        this.approvalDetailDataForm.get('up3_start_date').updateValueAndValidity();
        this.approvalDetailDataForm.get('up3_end_date').setValidators(Validators.required);
        this.approvalDetailDataForm.get('up3_end_date').updateValueAndValidity();
        this.approvalDetailDataForm.get('bpp_start_date').setValidators(Validators.required);
        this.approvalDetailDataForm.get('bpp_start_date').updateValueAndValidity();
        this.approvalDetailDataForm.get('bpp_end_date').setValidators(Validators.required);
        this.approvalDetailDataForm.get('bpp_end_date').updateValueAndValidity();
        this.approvalDetailDataForm.get('sdp2_start_date').setValidators(Validators.required);
        this.approvalDetailDataForm.get('sdp2_start_date').updateValueAndValidity();
        this.approvalDetailDataForm.get('sdp2_end_date').setValidators(Validators.required);
        this.approvalDetailDataForm.get('sdp2_end_date').updateValueAndValidity();
        this.approvalDetailDataForm.get('school_year').setValidators(Validators.required);
        this.approvalDetailDataForm.get('school_year').updateValueAndValidity();
        this.approvalDetailDataForm.get('council_date').setValidators(Validators.required);
        this.approvalDetailDataForm.get('council_date').updateValueAndValidity();
        // this.approvalDetailDataForm.get('insurance').setValidators(Validators.required);
        // this.approvalDetailDataForm.get('insurance').updateValueAndValidity();
        this.approvalDetailDataForm.get('beasiswa_id').setValidators(Validators.compose([Validators.pattern('^[0-9]*$'), Validators.required]));
        this.approvalDetailDataForm.get('beasiswa_id').updateValueAndValidity();
        this.approvalDetailDataForm.get('reference_number').setValidators(Validators.compose([Validators.required]));
        this.approvalDetailDataForm.get('reference_number').updateValueAndValidity();
        this.approvalDetailDataForm.get('semester').setValidators(Validators.compose([Validators.required, Validators.pattern('^[0-9]*$'), Validators.maxLength(1)]));
        this.approvalDetailDataForm.get('semester').updateValueAndValidity();
        this.isTransferStatus = false;
        this.isPassStatuTransferStatus = false;
      } else {
        this.showProgramStudy = false;
        this.isTransferStatus = false;
        this.isPassStatuTransferStatus = false;
        this.approvalDetailDataForm.get('mapping_registration_program_study_id').clearValidators();
        this.approvalDetailDataForm.get('mapping_registration_program_study_id').updateValueAndValidity();
        this.approvalDetailDataForm.get('transfer_status_study_program_id').clearValidators();
        this.approvalDetailDataForm.get('transfer_status_study_program_id').updateValueAndValidity();
        // this.approvalDetailDataForm.get('up3').clearValidators();
        // this.approvalDetailDataForm.get('up3').updateValueAndValidity();
        // this.approvalDetailDataForm.get('bpp').clearValidators();
        // this.approvalDetailDataForm.get('bpp').updateValueAndValidity();
        // this.approvalDetailDataForm.get('sdp2').clearValidators();
        // this.approvalDetailDataForm.get('sdp2').updateValueAndValidity();
        // this.approvalDetailDataForm.get('dormitory').clearValidators();
        // this.approvalDetailDataForm.get('dormitory').updateValueAndValidity();
        // this.approvalDetailDataForm.get('up3_disc').clearValidators();
        // this.approvalDetailDataForm.get('up3_disc').updateValueAndValidity();
        // this.approvalDetailDataForm.get('bpp_disc').clearValidators();
        // this.approvalDetailDataForm.get('bpp_disc').updateValueAndValidity();
        // this.approvalDetailDataForm.get('sdp2_disc').clearValidators();
        // this.approvalDetailDataForm.get('sdp2_disc').updateValueAndValidity();
        // this.approvalDetailDataForm.get('dormitory_disc').clearValidators();
        // this.approvalDetailDataForm.get('dormitory_disc').updateValueAndValidity();
        this.approvalDetailDataForm.get('up3_start_date').clearValidators();
        this.approvalDetailDataForm.get('up3_start_date').updateValueAndValidity();
        this.approvalDetailDataForm.get('up3_end_date').clearValidators();
        this.approvalDetailDataForm.get('up3_end_date').updateValueAndValidity();
        this.approvalDetailDataForm.get('bpp_start_date').clearValidators();
        this.approvalDetailDataForm.get('bpp_start_date').updateValueAndValidity();
        this.approvalDetailDataForm.get('bpp_end_date').clearValidators();
        this.approvalDetailDataForm.get('bpp_end_date').updateValueAndValidity();
        this.approvalDetailDataForm.get('sdp2_start_date').clearValidators();
        this.approvalDetailDataForm.get('sdp2_start_date').updateValueAndValidity();
        this.approvalDetailDataForm.get('sdp2_end_date').clearValidators();
        this.approvalDetailDataForm.get('sdp2_end_date').updateValueAndValidity();
        this.approvalDetailDataForm.get('school_year').clearValidators();
        this.approvalDetailDataForm.get('school_year').updateValueAndValidity();
        this.approvalDetailDataForm.get('council_date').clearValidators();
        this.approvalDetailDataForm.get('council_date').updateValueAndValidity();
        // this.approvalDetailDataForm.get('insurance').clearValidators();
        // this.approvalDetailDataForm.get('insurance').updateValueAndValidity();
        this.approvalDetailDataForm.get('beasiswa_id').clearValidators();
        this.approvalDetailDataForm.get('beasiswa_id').updateValueAndValidity();
        this.approvalDetailDataForm.get('reference_number').clearValidators();
        this.approvalDetailDataForm.get('reference_number').updateValueAndValidity();
        this.approvalDetailDataForm.get('semester').clearValidators();
        this.approvalDetailDataForm.get('semester').updateValueAndValidity();
        this.approvalDetailDataForm.get('specialization_id').clearValidators();
        this.approvalDetailDataForm.get('specialization_id').updateValueAndValidity();
      }
    }
  }

  loadApprovalData(selectionPathid) {
    this.loadtableApprovalData = true;
    this.chartService.getParticipantPassData(`selection_path=${this.selectionPathid}`).subscribe(response => {
      setTimeout(() => { // for fake loading for 3sec [just ignore if in development mode]
        this.tableData = response.data;
        this.dtTrigger.next(); // Trigger for load datatable
        this.loadtableApprovalData = false;
      }, 3000);
    }, err => {
      this.loadtableApprovalData = false;
    });
  }

  loadDetailApprovalData(data) {
    this.mode('edit');    
    this.loadingModals = false;
    this.approvalId = data.result_id;
    this.participantId = data.participant_id;
    this.selectionProgramId = data.selection_program_id;
    this.chartService.getParticipantDetailData(this.participantId).subscribe(res => {
      this.name = res.fullname;
      this.handphone = res.mobile_phone_number;
      this.email = res.username;
      this.birthCity = res.birth_city;
      this.dateofbirth = res.birth_date;
      this.gender = res.gender;
      this.address = res.address_detail;
      this.city = res.address_city;
      this.province = res.address_province;
      this.postalcode = res.address_postal_code;
    });
    this.chartService.getEducationLast(`?participant_id=${this.participantId}`).subscribe(response => {
      this.lastEducation = response.schools;
      this.lastEducationCity = response.school_city;
      this.lastEducationProvince = response.school_province;
    });
    this.programStudy = data.study_program_id && data.study_program_id.toString();
    if (data.pass_status == true && data.transfer_status == true && data.transfer_program_study_id != null) {
      this.getSpecializationStudyProgram(data.transfer_program_study_id);
    } else if (data.pass_status == true && data.transfer_status == '0' && data.study_program_id != null) {
      this.getSpecializationStudyProgram(data.study_program_id);
    } else if (data.pass_status == true && data.transfer_status == null && data.study_program_id != null) {
      this.getSpecializationStudyProgram(data.study_program_id);
    }
    this.specialization = data.specialization_id && data.specialization_id.toString();
    this.programStudyTransfer = data.transfer_program_study_id && data.transfer_program_study_id.toString();
    this.registrationNumber = data.registration_number;
    this.approvalDetailDataForm.patchValue({ registration_number: data.registration_number });
    this.approvalDetailDataForm.patchValue({ selection_program_name: data.program_name });
    this.approvalDetailDataForm.patchValue({ selection_path_name: data.selection_path_name });
    this.approvalDetailDataForm.patchValue({ study_program_name: data.study_program_id && data.study_program_id.toString() });
    if (data.pass_status == true) {
      this.approvalDetailDataForm.patchValue({ pass_status: '1' });
    } else if (data.pass_status == '0' || data.pass_status == null) {
      this.approvalDetailDataForm.patchValue({ pass_status: '0' });
    }
    if (data.transfer_status == true) {
      this.approvalDetailDataForm.patchValue({ transfer_status: '1' });
    } else if (data.transfer_status == '0' || data.transfer_status == null) {
      this.approvalDetailDataForm.patchValue({ transfer_status: '0' });
    }
    if (data.publication_status == true) {
      this.approvalDetailDataForm.patchValue({ publication_status: '1' });
    } else if (data.publication_status == '0' || data.publication_status == null) {
      this.approvalDetailDataForm.patchValue({ publication_status: '0' });
    }
    this.approvalDetailDataForm.patchValue({ total_score: data.total_score });
    this.approvalDetailDataForm.patchValue({ beasiswa_id: data.schoolarship_id ? data.schoolarship_id : 0 });
    this.approvalDetailDataForm.patchValue({ up3: data.up3 });
    this.approvalDetailDataForm.patchValue({ bpp: data.bpp });
    this.approvalDetailDataForm.patchValue({ sdp2: data.sdp2 });
    this.approvalDetailDataForm.patchValue({ dormitory: data.dormitory });
    this.approvalDetailDataForm.patchValue({ up3_disc: data.up3discount });
    this.approvalDetailDataForm.patchValue({ bpp_disc: data.bppdiscount });
    this.approvalDetailDataForm.patchValue({ sdp2_disc: data.sdp2discount });
    this.approvalDetailDataForm.patchValue({ dormitory_disc: data.dormitorydiscount });
    this.approvalDetailDataForm.patchValue({ insurance: data.insurance });
    this.approvalDetailDataForm.patchValue({ school_year: data.schoolyear });
    this.approvalDetailDataForm.patchValue({ old_student_id: data.oldstudentid });
    this.approvalDetailDataForm.patchValue({ semester: data.semester });
    this.approvalDetailDataForm.patchValue({ reference_number: data.reference_number });
    this.approvalDetailDataForm.patchValue({ council_date: this.datePipe.transform(data.council_date, 'yyyy-MM-dd') });
    this.approvalDetailDataForm.patchValue({ publication_date: this.datePipe.transform(data.publication_date, 'yyyy-MM-dd') });
    this.approvalDetailDataForm.patchValue({ up3_start_date: this.datePipe.transform(data.start_date_1, 'yyyy-MM-dd') });
    this.approvalDetailDataForm.patchValue({ bpp_start_date: this.datePipe.transform(data.start_date_2, 'yyyy-MM-dd') });
    this.approvalDetailDataForm.patchValue({ sdp2_start_date: this.datePipe.transform(data.start_date_3, 'yyyy-MM-dd') });
    this.approvalDetailDataForm.patchValue({ up3_end_date: this.datePipe.transform(data.end_date_1, 'yyyy-MM-dd') });
    this.approvalDetailDataForm.patchValue({ bpp_end_date: this.datePipe.transform(data.end_date_2, 'yyyy-MM-dd') });
    this.approvalDetailDataForm.patchValue({ sdp2_end_date: this.datePipe.transform(data.end_date_3, 'yyyy-MM-dd') })
    this.myPersistenceModal.show();
    this.loadProgramStudyRegistrationDataFilter();
  }

  mode(param) {
    this.edit = param;
  }

  createImportDataExcel() {
    this.loadingImport = true;
    this.formData.append('council_date', this.importDataForm.get('council_date').value);
    this.formData.append('step_1_end_date', this.importDataForm.get('step_1_end_date').value);
    this.formData.append('step_2_end_date', this.importDataForm.get('step_2_end_date').value);
    this.formData.append('step_3_start_date', this.importDataForm.get('step_3_start_date').value);
    this.formData.append('step_3_end_date', this.importDataForm.get('step_3_end_date').value);
    this.chartService.insertBulkRegistrationResult(this.formData).subscribe(res => {
      if (res !== null) {
        if (res.status == 'Success') {
          this.loadingImport = false;
          this.broadcasterService.notifBroadcast(true, {
            title: 'Success',
            msg: res.msg,
            timeout: 5000,
            theme: 'default',
            position: 'top-right',
            type: 'success'
          });
          this.applyFilter();
          this.importApprovalModal.hide();
        } else {
          this.broadcasterService.notifBroadcast(true, {
            title: 'Gagal',
            msg: res.message,
            timeout: 5000,
            theme: 'default',
            position: 'top-right',
            type: 'error'
          });
          this.loadingImport = false;
        }
      } else {
        this.broadcasterService.notifBroadcast(true, {
          title: 'Gagal',
          msg: res.message,
          timeout: 5000,
          theme: 'default',
          position: 'top-right',
          type: 'error'
        });
        this.loadingImport = false;
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
      this.loadingImport = false;
    });
  }

  createDetailSelectionStepData() {
    this.loading = true;
    if (this.edit == 'edit') {
      const { reference_number } = this.approvalDetailDataForm.value;
      let datas = {};
      let data = {};
      let payloadInput = {};
      data = {
        registration_number: this.approvalDetailDataForm.value.registration_number,
        pass_status: this.approvalDetailDataForm.value.pass_status,
        publication_status: 1,
        selection_path_id: this.selectionPathid,
        program_study_id: '',
        program_study_name: '',
        transfer_program_study_id: '',
        transfer_status: '',
        schoolarship_id: this.approvalDetailDataForm.value.beasiswa_id,
        specialization_id: this.approvalDetailDataForm.value.specialization_id,
        // up3: this.approvalDetailDataForm.value.up3 ? this.approvalDetailDataForm.value.up3 : 0,
        // bpp: this.approvalDetailDataForm.value.bpp ? this.approvalDetailDataForm.value.bpp : 0,
        // sdp2: this.approvalDetailDataForm.value.sdp2 ? this.approvalDetailDataForm.value.sdp2 : 0,
        // dormitory: this.approvalDetailDataForm.value.dormitory ? this.approvalDetailDataForm.value.dormitory : 0,
        // up3discount: this.approvalDetailDataForm.value.up3_disc ? this.approvalDetailDataForm.value.up3_disc : 0,
        // bppdiscount: this.approvalDetailDataForm.value.bpp_disc ? this.approvalDetailDataForm.value.bpp_disc : 0,
        // sdp2discount: this.approvalDetailDataForm.value.sdp2_disc ? this.approvalDetailDataForm.value.sdp2_disc : 0,
        // dormitorydiscount: this.approvalDetailDataForm.value.dormitory_disc ? this.approvalDetailDataForm.value.dormitory_disc : 0,
        semester: this.approvalDetailDataForm.value.semester,
        // insurance: this.approvalDetailDataForm.value.insurance ? this.approvalDetailDataForm.value.insurance : 0,
        notes: this.approvalDetailDataForm.value.notes,
        start_date_1: this.approvalDetailDataForm.value.up3_start_date,
        start_date_2: this.approvalDetailDataForm.value.bpp_start_date,
        start_date_3: this.approvalDetailDataForm.value.sdp2_start_date,
        end_date_1: this.approvalDetailDataForm.value.up3_end_date,
        end_date_2: this.approvalDetailDataForm.value.bpp_end_date,
        end_date_3: this.approvalDetailDataForm.value.sdp2_end_date,
        schoolyear: this.approvalDetailDataForm.value.school_year,
        type: this.approvalDetailDataForm.value.type,
        oldstudentid: this.approvalDetailDataForm.value.old_student_id,
        reference_number: reference_number,
        selection_program_name: this.approvalDetailDataForm.value.selection_program_name,
        selection_program_id: this.selectionProgramId,
        password: this.approvalDetailDataForm.value.password,
        publication_date: this.approvalDetailDataForm.value.publication_date,
        council_date: this.approvalDetailDataForm.value.council_date,
        participant_id: this.participantId,
      };
      if (this.isPassStatus === true) {
        if (this.isTransferStatus === true) {
          datas = {
            ...data,
            transfer_program_study_id : this.programStudyTransfer,
            transfer_status: true,
            program_study_id: this.programStudy,
            program_study_name: this.studyProgramName,
          }
        } else {
          datas = {
            ...data,
            program_study_id: this.programStudy,
            program_study_name: this.studyProgramName,
            transfer_status: false
          }
        }
      } else {
        if (this.isTransferStatus === true) {
          datas = {
            ...data,
            transfer_program_study_id : this.programStudyTransfer,
            transfer_status: true
          }
        } else {
          datas = {
            ...data,
            transfer_status: false
          }
        }
      }
      if (this.raportPath) {
        payloadInput = {
          ...datas,
          total_score: this.approvalDetailDataForm.value.total_score,
        }
      } else {
        payloadInput = {
          ...datas,
          total_score: this.gradeCbt
        }
      }
      this.chartService.postupdRegistrationResultData(payloadInput).subscribe(res => {
        if (res != null) {
          if (res.status == 'Success') {
            this.loading = false;
            this.loadSuccess();
            this.myPersistenceModal.hide();
            this.applyFilter();
            // this.renderTable();
            // this.loadApprovalData(this.selectionPathid);
          } else {
            this.loadError();
            this.loading = false;
          }
        } else {
          this.loadError();
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
        this.loading = false;
      });
    }
  }

  exportParticipantRegistration() {
    this.loadExportReg = true;
    const data = {
      selection_path: this.selectionPathid
    }
    this.chartService.exportParticipantRegistrationExcel(data).subscribe(res => {
      window.open(res.urls, "_blank");
      this.loadExportReg = false;
    }, (reason) => {
      this.broadcasterService.notifBroadcast(true, {
        title: 'Gagal',
        msg: reason.error.message,
        timeout: 5000,
        theme: 'default',
        position: 'top-right',
        type: 'error'
      });
      this.loadExportReg = false;
    })
  }

  exportPostGraduateExcel() {
    this.loadExportReg = true;
    const data = {
      selection_path: this.selectionPathid,
      mapping_path_year_id: this.selectionYear
    }
    this.chartService.exportPostGraduateExcel(data).subscribe(res => {
      window.open(res.urls, "_blank");
      this.loadExportReg = false;
    }, (reason) => {
      this.broadcasterService.notifBroadcast(true, {
        title: 'Gagal',
        msg: reason.error.message,
        timeout: 5000,
        theme: 'default',
        position: 'top-right',
        type: 'error'
      });
      this.loadExportReg = false;
    })
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
}
