import { OauthService } from 'src/app/_services/oauth.service';
import { Injectable } from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const Participants = [
  {
    id: 3,
    title: 'MENU.student_profile',
    type: 'item',
    url: '/student-profile',
    classes: 'nav-item',
    icon: 'icofont icofont-user-alt-2',
  },
  {
    id: 2,
    title: 'MENU.registration_data',
    type: 'collapse',
    classes: 'nav-item',
    icon: 'icofont icofont-prescription',
    children: [
      {
        id: 'new-registration',
        title: 'MENU.new_registration',
        type: 'item',
        url: '/new-registration',
        classes: 'nav-item',
        hidden: false,
        breadcrumbs: true,
        children: [
          {
            id: 'form-payment',
            title: 'MENU.form-payment',
            type: 'item',
            url: '/registration/form-payment',
            external: false,
            classes: 'nav-item',
            breadcrumbs: false,
            hidden: true
          }
        ]
      },
      {
        id: 'registration-history',
        title: 'MENU.registration_history',
        type: 'item',
        url: '/registration-history',
        classes: 'nav-item',
        hidden: false,
        breadcrumbs: true,
      },
      {
        id: 'registration-report',
        title: 'MENU.registration_report',
        type: 'item',
        url: '/registration-report',
        classes: 'nav-item',
        hidden: false,
        breadcrumbs: true,
      }
    ]
  },
  {
    id: 'questionnaire-data-participant',
    title: 'MENU.questionnaire-data-participant',
    type: 'item',
    url: '/questionnaire-data-participant',
    classes: 'nav-item',
    hidden: true,
    breadcrumbs: true
  }
];

const NewStudent = [
  {       
        id: 11,
        title: 'MENU.new-student-data',
        type: 'item',
        url: '/new-student-registration',
        classes: 'nav-item',
        icon: 'icofont icofont-hat',
        hidden: false,
        breadcrumbs: true,
        children: [
          {
            id: 'new-student-registration-detail',
            external: false,
            title: 'MENU.new-student-detail',
            type: 'item',
            url: '/new-student-registration/new-student-registration-detail',
            classes: 'nav-item',
            breadcrumbs: false,
            hidden: true
          },
        ]
      }
]

const Admins = [
  {
    id: 'selection-data',
    title: 'MENU.add-selection-data',
    type: 'item',
    url: '/adm-ms-selection-data/selection-data',
    external: false,
    classes: 'nav-item',
    hidden: true,
  },
  {
    id: 5,
    title: 'MENU.manage-selection-data',
    type: 'collapse',
    classes: 'nav-item',
    icon: 'icofont icofont-connection',
    children: [
      {
        id: 'adm-ms-selection-data',
        title: 'MENU.selection-data',
        type: 'item',
        url: '/adm-ms-selection-data',
        classes: 'nav-item',
        hidden: false,
        breadcrumbs: true,
        children: [
          {
            id: 'selection-data',
            external: false,
            title: 'MENU.selection-data',
            type: 'item',
            url: '/adm-ms-selection-data/selection-data',
            classes: 'nav-item',
            breadcrumbs: false,
            hidden: true
          },
        ]
      },
      {
        id: 'adm-ms-selection-schedule-data',
        title: 'MENU.selection-schedule',
        type: 'item',
        url: '/adm-ms-selection-schedule-data',
        classes: 'nav-item',
        hidden: false,
        breadcrumbs: true,
      },
      {
        id: 'adm-ms-selection-intake-data',
        title: 'MENU.selection-intake',
        type: 'item',
        url: '/adm-ms-selection-intake-data',
        classes: 'nav-item',
        hidden: false,
        breadcrumbs: true,
      },
      {
        id: 'adm-ms-passing-grade-data',
        title: 'MENU.passing-grade',
        type: 'item',
        url: '/adm-ms-passing-grade-data',
        classes: 'nav-item',
        hidden: false,
        breadcrumbs: true,
      },
      {
        id: 'adm-ms-questionnaire-data',
        title: 'MENU.questionnaire-data',
        type: 'item',
        url: '/adm-ms-questionnaire-data',
        classes: 'nav-item',
        hidden: false,
        breadcrumbs: true,
        children: [
          {
            id: 'questionnaire-data-step',
            title: 'MENU.questionnaire-data',
            type: 'item',
            url: '/adm-ms-questionnaire-data/questionnaire-data-step',
            external: false,
            classes: 'nav-item',
            breadcrumbs: false,
            hidden: true
          }
        ]
      }
    ]
  }
];

const AdminUniversity = [
  {
    id: 8,
    title: 'MENU.manage-participant-data',
    type: 'collapse',
    classes: 'nav-item',
    icon: 'icofont icofont-users-alt-2',
    children: []
  }
];

const AdminNewStudent = [
  {
    id: 12,
    title: 'MENU.manage-new-student-data',
    type: 'collapse',
    classes: 'nav-item',
    icon: 'icofont icofont-social-slidshare',
    children: [
      {
        id: 'adm-mr-new-student-data',
        title: 'MENU.document-new-student',
        type: 'item',
        url: '/adm-mr-new-student-data',
        classes: 'nav-item',
        hidden: false,
        breadcrumbs: true,
        children: []
      },
      {
        id: 'adm-mr-verification-document-data',
        title: 'MENU.verification-document',
        type: 'item',
        url: '/adm-mr-verification-document-data',
        classes: 'nav-item',
        hidden: false,
        breadcrumbs: true,
        children: []
      }
    ]
  }
]

const NavigationItems = [
  {
    id: 0,
    title: 'Menu',
    type: 'group',
    icon: 'ti-home',
    children: [
      {
        id: 'home',
        title: 'HOME.dashboard',
        type: 'item',
        url: '/home',
        classes: 'nav-item',
        icon: 'ti-home'
      },
      // {
      //   id: 'disabled-menu',
      //   title: 'Disabled Menu',
      //   type: 'item',
      //   url: 'javascript:',
      //   classes: 'nav-item disabled',
      //   icon: 'feather icon-power',
      //   external: true
      // }
    ]
  }
];

const participants = 
      {
        id: 'adm-mp-participant-data',
        title: 'MENU.participant-data',
        type: 'item',
        url: '/adm-mp-participant-data',
        classes: 'nav-item',
        hidden: false,
        breadcrumbs: true,
        children: [
          {
            id: 'participant-data-detail',
            title: 'MENU.participant-data-detail',
            type: 'item',
            url: '/adm-mp-participant-data/participant-data-detail',
            external: false,
            classes: 'nav-item',
            breadcrumbs: false,
            hidden: true
          }
        ]
      }

const pembayaran = 
  {
    id: 'adm-mp-payment-data',
    title: 'MENU.payment-data',
    type: 'item',
    url: '/adm-mp-payment-data',
    classes: 'nav-item',
    hidden: false,
    breadcrumbs: true,
  }

  const Dashboard = [
    {
      id: 4,
      title: 'MENU.dashboard',
      type: 'item',
      url: '/adm-dashboard',
      classes: 'nav-item',
      icon: 'icofont icofont-chart-bar-graph',
    }
]

const dokumen = 
  {
    id: 'adm-mp-document-data',
    title: 'MENU.document-data',
    type: 'item',
    url: '/adm-mp-document-data',
    classes: 'nav-item',
    hidden: false,
    breadcrumbs: true,
    children: [
      {
        id: 'document-data-detail',
        title: 'MENU.document-data-detail',
        type: 'item',
        url: '/adm-mp-document-data/document-data-detail',
        external: false,
        classes: 'nav-item',
        breadcrumbs: false,
        hidden: true
      }
    ]
  }

const kelulusan = 
  {
    id: 'adm-mp-approval-data',
    title: 'MENU.approval-data',
    type: 'item',
    url: '/adm-mp-approval-data',
    classes: 'nav-item',
    hidden: false,
    breadcrumbs: true,
  }

const persetujuan = 
  {
    id: 'adm-mp-approval-participant-score-data',
    title: 'MENU.approval-participant-score-data',
    type: 'item',
    url: '/adm-mp-approval-participant-score-data',
    classes: 'nav-item',
    hidden: false,
    breadcrumbs: true,
  }

const score = 
  {
    id: 'adm-mp-participant-score-data',
    title: 'MENU.participant-score-data',
    type: 'item',
    url: '/adm-mp-participant-score-data',
    classes: 'nav-item',
    hidden: false,
    breadcrumbs: true,
  }
@Injectable()
export class NavigationItem {
  public items = [];
  constructor(
    private oauthService: OauthService
  ) {}

  public addOrReplace(item) {
    if (this.items.indexOf(item) === -1) {
      this.items.push(item);
      NavigationItems[0]['children'].push(item);
    }
  }

  public addOrReplaceSubAdmin(item) {
    if (this.items.indexOf(item) === -1) {
      this.items.push(item);
      AdminUniversity[0]['children'].push(item);
    }
  }

  public get() {
    if (this.oauthService.checkScope('admission-participant')) {
      Participants.forEach(function(participant){
        this.addOrReplace(participant);
      },this);
    }

    if (this.oauthService.checkScope('admission-new-participant')) {
      NewStudent.forEach(function(newStudent){
        this.addOrReplace(newStudent);
      },this);
    }

    if (this.oauthService.checkScope('admission-participant')) {
      Participants.forEach(function(participant){
        this.addOrReplace(participant);
      },this);
    }
    
    if (this.oauthService.checkScope('admission-admisi')) {
      Dashboard.forEach(function(dashboard){
        this.addOrReplace(dashboard);
      },this);
    }

    if (this.oauthService.checkScope('admission-admin')) {
      Dashboard.forEach(function(dashboard){
        this.addOrReplace(dashboard);
      },this);
    }

    if (this.oauthService.checkScope('admission-admisi' || 'admission-admin')) {
      Admins.forEach(function(admin){
        this.addOrReplace(admin);
      },this);
    }
    
    if (this.oauthService.checkScope('admission-admin')) {
      Admins.forEach(function(admin){
        this.addOrReplace(admin);
      },this);
    }

    if (this.oauthService.checkScope('admission-admisi')) {
      AdminUniversity.forEach(function(adminUniversity){
        this.addOrReplace(adminUniversity);
        this.addOrReplaceSubAdmin(participants);
        this.addOrReplaceSubAdmin(dokumen);
        this.addOrReplaceSubAdmin(pembayaran);
      },this);
    }

    if (this.oauthService.checkScope('admission-admin')) {
      AdminUniversity.forEach(function(adminUniversity){
        this.addOrReplace(adminUniversity);
        this.addOrReplaceSubAdmin(participants);
        this.addOrReplaceSubAdmin(dokumen);
        this.addOrReplaceSubAdmin(pembayaran);
        this.addOrReplaceSubAdmin(persetujuan);
        this.addOrReplaceSubAdmin(kelulusan);
      },this);
    }

    if (this.oauthService.checkScope('admission-admin')) {
      AdminNewStudent.forEach(function(adminNewstudent) {
        this.addOrReplace(adminNewstudent);
      },this);
    }
    
    if (this.oauthService.checkScope('admission-admin-participant')) {
      AdminUniversity.forEach(function(adminUniversity) {
        this.addOrReplace(adminUniversity);
        this.addOrReplaceSubAdmin(participants);
        this.addOrReplaceSubAdmin(dokumen);
        this.addOrReplaceSubAdmin(pembayaran);
      },this);
    }


    if (this.oauthService.checkScope('admission-faculty')) {
      Dashboard.forEach(function(dashboard){
        this.addOrReplace(dashboard);
      },this);
    }

    if (this.oauthService.checkScope('admission-faculty')) {
      AdminUniversity.forEach(function(adminUniversity) {
        this.addOrReplace(adminUniversity);
        this.addOrReplaceSubAdmin(participants);
        this.addOrReplaceSubAdmin(dokumen);
        this.addOrReplaceSubAdmin(score);
        this.addOrReplaceSubAdmin(kelulusan);
      },this);
    }
    
    if (this.oauthService.checkScope('admission-university')) {
      Dashboard.forEach(function(dashboard){
        this.addOrReplace(dashboard);
      },this);
    }
    
    if (this.oauthService.checkScope('admission-university')) {
      AdminUniversity.forEach(function(adminUniversity) {
        this.addOrReplace(adminUniversity);
        this.addOrReplaceSubAdmin(participants);
        this.addOrReplaceSubAdmin(dokumen);
        this.addOrReplaceSubAdmin(persetujuan);
        this.addOrReplaceSubAdmin(kelulusan);
      },this);
    }

    if (this.oauthService.checkScope('admission-university')) {
      AdminNewStudent.forEach(function(adminNewstudent) {
        this.addOrReplace(adminNewstudent);
      },this);
    }

    return NavigationItems;
  }
}
