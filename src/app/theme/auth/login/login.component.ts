import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';
import { BroadcasterService } from 'src/app/_services/broadcaster.service';
import { trigger, state, style, transition, animate, AUTO_STYLE } from '@angular/animations';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { OauthService } from 'src/app/_services/oauth.service';
import { TokenFactory } from 'src/app/_classes/token.factory';
import { DefaultConfig } from 'src/app/app-config';
import { Router } from '@angular/router';
import * as _ from 'underscore';
import { ParticipantService } from 'src/app/_services/participant.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.scss',
    '../../../../../node_modules/ng2-toasty/style-bootstrap.css'
  ],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('notificationBottom', [
      state('an-off, void',
        style({
          overflow: 'hidden',
          height: '0px',
        })
      ),
      state('an-animate',
        style({
          overflow: 'hidden',
          height: AUTO_STYLE,
        })
      ),
      transition('an-off <=> an-animate', [
        animate('400ms ease-in-out')
      ])
    ]),
    trigger('mobileHeaderNavRight', [
      state('nav-off, void',
        style({
          overflow: 'hidden',
          height: '0px',
        })
      ),
      state('nav-on',
        style({
          height: AUTO_STYLE,
        })
      ),
      transition('nav-off <=> nav-on', [
        animate('400ms ease-in-out')
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {
  @ViewChild('forgotPasswordModal', { static: true }) public forgotPasswordModal: any;
  private tokenFactory = new TokenFactory();
  public myStyle: object = {};
  public myParams: object = {};
  public width = 100;
  public height = 100;

  public email: string;
  public password: string;
  public loginForm: FormGroup;
  public forgotPasswordForm: FormGroup;
  public loading: boolean;
  public loadingPass: boolean;
  public lang: string;
  public defApp: any;

  public position = 'top-right';
  public title: string;
  public msg: string;
  public showClose = true;
  public theme = 'bootstrap';
  public type = 'default';
  public closeOther = false;
  public username:any;
  public passwordHidden = true;

  constructor(
    private oauthService: OauthService,
    private router: Router,
    private fb: FormBuilder,
    private broadcasterService: BroadcasterService,
    private translateService: TranslateService,
    private chartService: ParticipantService,
  ) {
    this.defApp = DefaultConfig.Application.appName;
    this.loginForm = this.fb.group ({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
    this.forgotPasswordForm = this.fb.group ({
      email: new FormControl('', Validators.required)
    });
    this.loading = false;
    this.loadingPass = false;
    this.loading = false;
    this.lang = localStorage.getItem('lang');
    translateService.setDefaultLang(localStorage.getItem('lang'));
    broadcasterService.changeLangBroadcast$.subscribe(res => {
      translateService.setDefaultLang(res.lang);
    });
    this.myStyle = {
      position: 'fixed',
      width: '100%',
      height: '100%',
      'z-index': 1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    };
    this.myParams = {
      particles: {
        number: {
          value: 50,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#4680ff'
          // value: '#d21616'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000'
          },
          polygon: {
            nb_sides: 3
          },
          image: {
            src: 'img/github.svg',
            width: 100,
            height: 100
          }
        },
        opacity: {
          value: 0.58,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: false,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#ccc',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'bounce',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'repulse'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 200,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    };
  }

  ngOnInit() {}

  doLogin(e) {
    this.loading = true;
    this.loginForm.disable();
    setTimeout(() => {
      if (this.loginForm.invalid) {
        this.broadcasterService.notifBroadcast(true, {
          title: 'Login Failed',
          msg: 'Username & Password required',
          timeout: 5000,
          theme: 'bootstrap',
          position: 'top-right',
          type: 'error'
        });
        this.loading = false;
        this.loginForm.enable();
      } else {
        this.username = this.loginForm.value.username.toLowerCase();
        if (this.username.includes("@")){
          const body = {
            username: this.loginForm.value.username.toLowerCase(),
            email:this.loginForm.value.username.toLowerCase(),
            password: this.loginForm.value.password
          };
          localStorage.setItem('userProfile', JSON.stringify(body));
          this.oauthService.getAccessToken(body).subscribe(res => {
            if (res) {
              this.oauthService.broadcastLogin(res, this.lang ? this.lang : DefaultConfig.lang.defaultLang);
              this.getScope();
              this.loading = false;
              this.loginForm.enable();
              // this.broadcasterService.profileBroadcast$.subscribe(res => {
              //   this.getScope();
              // });
            }
          }, (err) => {
            this.broadcasterService.notifBroadcast(true, {
              title: 'Login Failed',
              msg: err.error.message,
              timeout: 5000,
              theme: 'default',
              position: 'top-right',
              type: 'error'
            });
            this.loading = false;
            this.loginForm.enable();
          });
        } else {
          const body = {
            username: this.loginForm.value.username.toLowerCase(),
            password: this.loginForm.value.password
          };
          localStorage.setItem('userProfile', JSON.stringify(body));
          this.oauthService.getAccessToken(body).subscribe(res => {
            if (res) {
              this.oauthService.broadcastLogin(res, this.lang ? this.lang : DefaultConfig.lang.defaultLang);
              this.getProfile();
              this.loading = false;
              this.loginForm.enable();
              this.broadcasterService.profileBroadcast$.subscribe(res => {
                this.getScope();
              });
            }
          }, (err) => {
            this.broadcasterService.notifBroadcast(true, {
              title: 'Login Failed',
              msg: err.error.message,
              timeout: 5000,
              theme: 'bootstrap',
              position: 'top-right',
              type: 'error'
            });
            this.loading = false;
            this.loginForm.enable();
          });
        }
      }
    }, 0);
  }

  getScope() {
    this.oauthService.getScope().subscribe(res => {
      const scopes = _.uniq(_.pluck(res, 'scope'));
      if (res) {
        this.oauthService.setScope(scopes);
        this.broadcasterService.getMenuBroadcast(true);
        this.broadcasterService.scopeLoaded(true);
      }
    });
  }

  getProfile() {
    this.oauthService.getUserProfile().subscribe(data => {
      if (data) {
        this.oauthService.setProfile(data);
        this.broadcasterService.profileLoaded(true);
      }
    });
  }

  showForgotPasswordForm() {
    this.forgotPasswordModal.show();
    this.forgotPasswordForm.reset();
  }

  sendEmailForgotPassword() {
    this.loadingPass = true;
    const dataForgotPass = {
      email: this.forgotPasswordForm.controls['email'].value
    }
    this.chartService.postForgotPassword(dataForgotPass).subscribe(res => {
      if (res.status == 'Success') {
        this.loadingPass = false;
        this.forgotPasswordModal.hide();
        Swal.fire({
          title: res.status,
          text: res.message,
          type: 'success',
          showConfirmButton: true
        });
      } else {
        this.loadingPass = false;
      }
    }, (reason) => {
      Swal.fire({
        title: 'Gagal pemulihan akun!',
        text: 'Mohon maaf, email tidak terdaftar didalam sistem',
        type: 'error',
        showConfirmButton: true
      });
      this.loadingPass = false;
      this.forgotPasswordModal.hide();
    });
  }

}
