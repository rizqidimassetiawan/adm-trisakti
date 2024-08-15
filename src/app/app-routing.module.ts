import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './layout/auth/auth.component';
import { AuthGuard, LoginGuard, RectorGuard } from './_classes/auth.guard';
import { AdminComponent } from './layout/admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: './theme/_home/home.module#HomeModule',
        data: {animation: '1'}
      },
      {
        path: 'adm-dashboard',
        loadChildren: './theme/adm-dashboard/adm-dashboard.module#AdmDashboardModule',
        data: {animation: '1'}
      },
      {
        path: 'sample-page',
        loadChildren: './theme/sample-page/sample-page.module#SamplePageModule',
        data: {animation: '2'}
      },
      {
        path: 'student-profile',
        loadChildren: './theme/student-profile/student-profile.module#StudentProfileModule',
        data: {animation: '2'}
      },
      {
        path: 'new-registration',
        loadChildren: './theme/new-registration/new-registration.module#NewRegistrationModule',
        data: {animation: '2'}
      },
      {
        path: 'registration-history',
        loadChildren: './theme/registration-history/registration-history.module#RegistrationHistoryModule',
        data: {animation: '2'}
      },
      {
        path: 'registration-report',
        loadChildren: './theme/registration-report/registration-report.module#RegistrationReportModule',
        data: {animation: '2'}
      },
      {
        path: 'questionnaire-data-participant',
        loadChildren: './theme/questionnaire-data-participant/questionnaire-data-participant.module#QuestionnaireDataParticipantModule',
        data: {animation: '2'}
      },
      {
        path: 'adm-ms-program-data',
        loadChildren: './theme/adm-ms-program-data/adm-ms-program-data.module#AdmMsProgramDataModule',
        data: {animation: '2'}
      },
      {
        path: 'adm-ms-passing-grade-data',
        loadChildren: './theme/adm-ms-passing-grade-data/adm-ms-passing-grade-data.module#AdmMsPassingGradeDataModule',
        data: {animation: '2'}
      },
      {
        path: 'adm-ms-selection-schedule-data',
        loadChildren: './theme/adm-ms-selection-schedule-data/adm-ms-selection-schedule-data.module#AdmMsSelectionScheduleDataModule',
        data: {animation: '2'}
      },
      {
        path: 'adm-ms-selection-intake-data',
        loadChildren: './theme/adm-ms-selection-intake-data/adm-ms-selection-intake-data.module#AdmMsSelectionIntakeDataModule',
        data: {animation: '2'}
      },
      {
        path: 'adm-ms-selection-data',
        loadChildren: './theme/adm-ms-selection-data/adm-ms-selection-data.module#AdmMsSelectionDataModule',
        data: {animation: '2'}
      },
      {
        path: 'adm-ms-questionnaire-data',
        loadChildren: './theme/adm-ms-questionnaire-data/adm-ms-questionnaire-data.module#AdmMsQuestionnaireDataModule',
        data: {animation: '2'}
      },
      {
        path: 'adm-ms-exam-detail-data',
        loadChildren: './theme/adm-ms-exam-detail-data/adm-ms-exam-detail-data.module#AdmMsExamDetailDataModule',
        data: {animation: '2'}
      },
      {
        path: 'adm-mp-approval-data',
        loadChildren: './theme/adm-mp-approval-data/adm-mp-approval-data.module#AdmMpApprovalDataModule',
        data: {animation: '2'}
      },
      {
        path: 'adm-mp-participant-data',
        loadChildren: './theme/adm-mp-participant-data/adm-mp-participant-data.module#AdmMpParticipantDataModule',
        data: {animation: '2'}
      },
      {
        path: 'adm-mp-document-data',
        loadChildren: './theme/adm-mp-document-data/adm-mp-document-data.module#AdmMpDocumentDataModule',
        data: {animation: '2'}
      },
      {
        path: 'adm-mp-payment-data',
        loadChildren: './theme/adm-mp-payment-data/adm-mp-payment-data.module#AdmMpPaymentDataModule',
        data: {animation: '2'}
      },
      {
        path: 'adm-mp-participant-score-data',
        loadChildren: './theme/adm-mp-participant-score-data/adm-mp-participant-score-data.module#AdmMpParticipantScoreDataModule',
        data: {animation: '2'}
      },
      {
        path: 'adm-mp-approval-participant-score-data',
        loadChildren: './theme/adm-mp-approval-participant-score-data/adm-mp-approval-participant-score-data.module#AdmMpApprovalParticipantScoreDataModule',
        data: {animation: '2'}
      },
      {
        path: 'adm-mr-new-student-data',
        loadChildren: './theme/adm-mr-new-student-data/adm-mr-new-student-data.module#AdmMrNewStudentDataModule',
        data: {animation: '2'}
      },
      {
        path: 'adm-mp-credit-transfer/:registration_number',
        loadChildren: './theme/adm-mp-credit-transfer/adm-mp-credit-transfer.module#AdmMpCreditTransferModule',
        data: {animation: '2'}
      },
      {
        path: 'adm-mr-verification-document-data',
        loadChildren: './theme/adm-mr-verification-document-data/adm-mr-verification-document-data.module#AdmMrVerificationDocumentDataModule',
        data: {animation: '2'}
      },
      {
        path: 'new-student-registration',
        loadChildren: './theme/new-student-registration/new-student-registration.module#NewStudentRegistrationModule',
        data: {animation: '2'}
      }
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'auth',
        canActivate: [LoginGuard],
        loadChildren: './theme/auth/authentication.module#AuthenticationModule'
      },
      {
        path: 'recommendation',
        loadChildren: './theme/recommendation/recommendation.module#RecommendationModule'
      },
      {
        path: 'postgraduate-participant',
        loadChildren: './theme/postgraduate-participant/postgraduate-participant.module#PostgraduateParticipantModule'
      },
      {
        path: 'error',
        loadChildren: './theme/error/error.module#ErrorModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/error/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
