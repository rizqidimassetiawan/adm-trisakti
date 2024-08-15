import { Injectable, EventEmitter, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BroadcasterService {
  public changeTheme$: EventEmitter<any>;
  public scopeBroadcast$: EventEmitter<any>;
  public notifBroadcast$: EventEmitter<any>;
  public profileBroadcast$: EventEmitter<any>;
  public getMenuBroadcast$: EventEmitter<any>;
  public resetMenuBroadcast$: EventEmitter<any>;
  public changeLangBroadcast$: EventEmitter<any>;
  public hideProfileMenuBroadcast$: EventEmitter<any>;

  constructor(private injector: Injector) {
    this.changeTheme$ = new EventEmitter();
    this.scopeBroadcast$ = new EventEmitter();
    this.notifBroadcast$ = new EventEmitter();
    this.profileBroadcast$ = new EventEmitter();
    this.getMenuBroadcast$ = new EventEmitter();
    this.resetMenuBroadcast$ = new EventEmitter();
    this.changeLangBroadcast$ = new EventEmitter();
    this.hideProfileMenuBroadcast$ = new EventEmitter();
  }

  notifBroadcast(result, data) {
    if (result) {
      this.notifBroadcast$.emit({ event: result, data });
    }
  }

  changeTheme(result, layout) {
    if (result) {
      this.changeTheme$.emit({ event: result, layout });
    }
  }

  changeLangBroadcast(result, lang) {
    if (result === true) {
      this.changeLangBroadcast$.emit({ event: result, lang });
    }
  }

  profileLoaded(result) {
    if (result === true) {
      this.profileBroadcast$.emit({ event: result});
    }
  }

  getMenuBroadcast(result) {
    if (result === true) {
      this.getMenuBroadcast$.emit({ event: result});
    }
  }

  resetMenuBroadcast(result) {
    if (result === true) {
      this.resetMenuBroadcast$.emit({ event: result});
    }
  }

  hideProfileMenuBroadcast(result) {
    if (result === true) {
      this.hideProfileMenuBroadcast$.emit({ event: result});
    }
  }

  scopeLoaded(result) {
    if (result === true) {
      this.scopeBroadcast$.emit({ event: result});
    }
  }
}
