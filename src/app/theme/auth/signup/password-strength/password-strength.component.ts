import { Component, OnInit, Input, SimpleChange, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BroadcasterService } from 'src/app/_services/broadcaster.service';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.scss']
})

export class PasswordStrengthComponent implements OnInit {

  @Input() public passwordToCheck: string;
  @Output() passwordStrength = new EventEmitter<boolean>();

  bar0: string;
  bar1: string;
  bar2: string;
  bar3: string;

  msg: string;
  msgColor: string;

  // lang
  messageReturn: string;

  public passGood: boolean;
  public passWeak: boolean;
  public passFair: boolean;
  public passStrong: boolean;
  public passwordHidden = true;


  private colors = ['darkred','orange','steelblue', 'yellowgreen'];
  // private colors = ['darkred', 'orangered', 'orange', 'yellowgreen'];

  constructor(
  ) {
    this.passFair = false;
    this.passGood = false;
    this.passWeak = false;
    this.passStrong = false;
  }

  ngOnInit() {
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

  ngOnChanges(changes: { [propName: string]: SimpleChange }): void {
    const password = changes.passwordToCheck.currentValue;
    this.setBarColors(4, '#DDD');
    if (password) {
      const c = this.getColor(this.checkStrength(password));
      this.setBarColors(c.index, c.color);
      const pwdStrength = this.checkStrength(password);
      pwdStrength === 40 ? this.passwordStrength.emit(true) : this.passwordStrength.emit(false);
      switch (pwdStrength) {
        case 10:
          this.passWeak = true;
          this.passStrong = false;
          this.passGood = false;
          this.passFair = false;
          this.msg = 'Kata sandi sangat lemah';
          // this.msg = 'Password Strength is Weak';
          this.messageReturn = 'Kata sandi harus terdiri dari 8-12 karakter setidaknya mengandung huruf besar (A-Z), huruf kecil (a-z), angka (0-9), dan tanda baca (@!*)'
          break;
        case 20:
          this.passWeak = false;
          this.passStrong = false;
          this.passGood = false;
          this.passFair = true;
          // this.msg = 'Password Strength is Fair';
          this.msg = 'Kata sandi lemah';
          this.messageReturn = 'Kata sandi harus terdiri dari 8-12 karakter setidaknya mengandung huruf besar (A-Z), huruf kecil (a-z), angka (0-9), dan tanda baca (@!*)'
          break;
        case 30:
          this.passWeak = false;
          this.passStrong = false;
          this.passGood = true;
          this.passFair = false;
          // this.msg = 'Password Strength is Good';
          this.msg = 'Kata sandi cukup';
          this.messageReturn = 'Kata sandi harus terdiri dari 8-12 karakter setidaknya mengandung huruf besar (A-Z), huruf kecil (a-z), angka (0-9), dan tanda baca (@!*)'
          break;
        case 40:
          this.passWeak = false;
          this.passStrong = true;
          this.passGood = false;
          this.passFair = false;
          // this.msg = 'Password Strength is Strong';
          this.msg = 'Kata sandi aman';
          this.messageReturn = 'Kata sandi Anda bagus. Nice work!'
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


}
