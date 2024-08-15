import { TranslateService } from '@ngx-translate/core';
import { BroadcasterService } from 'src/app/_services/broadcaster.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { OauthService } from 'src/app/_services/oauth.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'underscore';
import { ParticipantService } from 'src/app/_services/participant.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  public email: string;
  public password: string;
  public resetPasswordForm: FormGroup;
  public loading: boolean;
  public lang: string;
  public passwordIsValid :boolean;
  public passwordRepeatIsValid : boolean;
  public position = 'top-right';
  public title: string;
  public msg: string;
  public showClose = true;
  public theme = 'bootstrap';
  public type = 'default';
  public closeOther = false;
  public passwordHidden = true
  public id: string;
  public token: string;
  public username:any;
  public bar0: string;
  public bar1: string;
  public bar2: string;
  public bar3: string;
  public msgColor: string;
  public passwordRepeatVar: string;

  // lang
  public messageReturn: string;
  public passGood: boolean;
  public passWeak: boolean;
  public passFair: boolean;
  public passStrong: boolean;
  private colors = ['darkred','orange','steelblue', 'yellowgreen'];

  constructor(
    private oauthService: OauthService,
    private router: Router,
    private fb: FormBuilder,
    private broadcasterService: BroadcasterService,
    private translateService: TranslateService,
    private chartService: ParticipantService,
    private route: ActivatedRoute,
  ) {
    this.resetPasswordForm = this.fb.group ({
      password: new FormControl('', Validators.required),
      passwordRepeat:['',Validators.required],
    });
    this.passFair = false;
    this.passGood = false;
    this.passWeak = false;
    this.passStrong = false;
    this.loading = false;
    this.id = this.route.snapshot.paramMap.get('id');
    this.token = this.route.snapshot.paramMap.get('token');
    this.lang = localStorage.getItem('lang');
    translateService.setDefaultLang(localStorage.getItem('lang'));
    broadcasterService.changeLangBroadcast$.subscribe(res => {
      translateService.setDefaultLang(res.lang);
    });
  }

  ngOnInit() {
    this.passwordIsValid = false;
  }

  passwordValid(event) {
    this.passwordIsValid = event;
  }

  checkPasswordRepeat(event) {
      if(event.target.value == this.resetPasswordForm.controls.password.value) {
        this.passwordRepeatIsValid = true;
      } else {
        this.passwordRepeatIsValid = false;
      }

  }

  checkStrength(p) {
    // 1
    let force = 0;

    // 2
    const regex = /[$-/:-?{-~!"^_@`\[\]]/g;
    const lowerLetters = /[a-z]+/.test(p);
    const upperLetters = /[A-Z]+/.test(p);
    const numbers = /[0-9]+/.test(p);
    const symbols = regex.test(p);

    // 3
    const flags = [lowerLetters, upperLetters, numbers, symbols];

    // 4
    let passedMatches = 0;
    for (const flag of flags) {
      passedMatches += flag === true ? 1 : 0;
    }

    // 5
    force += 2 * p.length + ((p.length >= 10) ? 1 : 0);
    force += passedMatches * 10;

    // 6
    force = (p.length <= 7) ? Math.min(force, 10) : force;

    // 7
    force = (passedMatches === 1) ? Math.min(force, 10) : force;
    force = (passedMatches === 2) ? Math.min(force, 20) : force;
    force = (passedMatches === 3) ? Math.min(force, 30) : force;
    force = (passedMatches === 4) ? Math.min(force, 40) : force;

    return force;
  }

  changeStrengthbar(x) {
    const password = x;
    this.setBarColors(4, '#DDD');
    if (password) {
      const c = this.getColor(this.checkStrength(password));
      if (this.resetPasswordForm.controls.passwordRepeat.value != undefined) {
        if (this.resetPasswordForm.controls.passwordRepeat.value == this.resetPasswordForm.controls.password.value) {
          this.passwordRepeatIsValid = true;
        } else {
          this.passwordRepeatIsValid = false;
        }
      }
      this.setBarColors(c.index, c.color);
      const pwdStrength = this.checkStrength(password);
      pwdStrength === 40 ? true : false;
      switch (pwdStrength) {
        case 10:
          this.passWeak = true;
          this.passStrong = false;
          this.passGood = false;
          this.passFair = false;
          this.msg = 'Password Strength is Weak';
          this.messageReturn = 'Password must includes 8-12 characters, at least one uppercase letter (A-Z), at least one lowercase letter (a-z), at least one number (0-9), and at least one special character (@!*)'
          break;
        case 20:
          this.passWeak = false;
          this.passStrong = false;
          this.passGood = false;
          this.passFair = true;
          this.msg = 'Password Strength is Fair';
          this.messageReturn = 'Password must includes 8-12 characters at least one uppercase letter (A-Z), at least one lowercase letter (a-z), at least one number (0-9), and at least one special character (@!*)'
          break;
        case 30:
          this.passWeak = false;
          this.passStrong = false;
          this.passGood = true;
          this.passFair = false;
          this.msg = 'Password Strength is Good';
          this.messageReturn = 'Password must includes 8-12 characters, at least one uppercase letter (A-Z), at least one lowercase letter (a-z), at least one number (0-9), and at least one special character (@!*)'
          break;
        case 40:
          this.passWeak = false;
          this.passStrong = true;
          this.passGood = false;
          this.passFair = false;
          this.passwordValid(x);
          this.msg = 'Password Strength is Strong';
          this.messageReturn = 'Your password is great. Nice work!'
          break;
      }
    } else {
      this.msg = '';
      this.messageReturn = '';
    }
  }

  private getColor(s) {
    let index = 0;
    if (s === 10) {
      index = 0;
    } else if (s === 20) {
      index = 1;
    } else if (s === 30) {
      index = 2;
    } else if (s === 40) {
      index = 3;
    } else {
      index = 4;
    }
    this.msgColor = this.colors[index];
    return {
      index: index + 1,
      color: this.colors[index]
    };
  }

  private setBarColors(count, col) {
    for (let n = 0; n < count; n++) {
      this['bar' + n] = col;
    }
  }

  updateResetPassword() {
    this.loading = true;
    const updatePassword = {
      password: this.resetPasswordForm.controls['password'].value
    };
    this.chartService.postResetPassword(`${this.id}/${this.token}`,updatePassword).subscribe(res => {
      if (res.status == 'Success') {
        this.loading = false;
        Swal.fire({
          title: res.status,
          text: res.message,
          type: 'success',
          showConfirmButton: true,
          allowOutsideClick: false,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#ffba57',
        }).then((confirm) => {
          if (confirm.value) {
            this.router.navigate(['auth/login']);
          }
        });
      } else {
        Swal.fire({
          title: res.status,
          text: res.message,
          type: 'error',
          showConfirmButton: true,
        });
      }
    });
  }

}
