function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,t){for(var o=0;o<t.length;o++){var l=t[o];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(n,l.key,l)}}function _createClass(n,t,o){return t&&_defineProperties(n.prototype,t),o&&_defineProperties(n,o),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"8kiS":function(n,t,o){"use strict";var l=o("8Y7J"),e=o("SVse");o("FYjP"),o.d(t,"a",(function(){return i})),o.d(t,"b",(function(){return a}));var i=l["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function r(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,2,"button",[["aria-label","Close"],["class","close"],["data-dismiss","alert"],["type","button"]],null,[[null,"click"]],(function(n,t,o){var e=!0;return"click"===t&&(e=!1!==n.component.dismissAlert(l["\u0275nov"](n.parent,0))&&e),e}),null,null)),(n()(),l["\u0275eld"](1,0,null,null,1,"span",[["aria-hidden","true"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["\xd7"]))],null,null)}function a(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,[["alert",1]],null,6,"div",[["role","alert"]],null,null,null,null,null)),l["\u0275prd"](512,null,e["\u0275NgClassImpl"],e["\u0275NgClassR2Impl"],[l.IterableDiffers,l.KeyValueDiffers,l.ElementRef,l.Renderer2]),l["\u0275did"](2,278528,null,0,e.NgClass,[e["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),l["\u0275pod"](3,{"alert-dismissible":0}),l["\u0275ncd"](null,0),(n()(),l["\u0275and"](16777216,null,null,1,null,r)),l["\u0275did"](6,16384,null,0,e.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,t){var o=t.component,e=l["\u0275inlineInterpolate"](1,"alert alert-",o.type,""),i=n(t,3,0,o.dismiss);n(t,2,0,e,i),n(t,6,0,o.dismiss)}),null)}},FYjP:function(n,t,o){"use strict";o.d(t,"a",(function(){return l}));var l=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"dismissAlert",value:function(n){n.parentElement.removeChild(n)}}]),_createClass(n,[{key:"ngOnInit",value:function(){}}]),n}()},MTyQ:function(n,t,o){"use strict";o.d(t,"a",(function(){return e})),o.d(t,"b",(function(){return i}));var l=o("8Y7J"),e=(o("jVjg"),o("+9il"),l["\u0275crt"]({encapsulation:0,styles:["[_nghost-%COMP%] {\n      height: auto;\n      width: 100%;\n    }"],data:{}}));function i(n){return l["\u0275vid"](0,[l["\u0275ncd"](null,0)],null,null)}},Mhr8:function(n,t,o){"use strict";var l=o("8Y7J"),e=o("SVse"),i=o("/2Va"),r=o("vPt3"),a=o("jVjg"),s=o("AfkX"),c=l["\u0275crt"]({encapsulation:0,styles:[".horizontal.small[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%] {\n      padding: 24px 0 10px 0;\n    }\n    .horizontal.small[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child):before {\n      background-color: #E6E6E6;\n      content: '';\n      position: absolute;\n      height: 1px;\n      width: calc(100% - 14px);\n      top: -7px;\n      left: calc(50% + 7px);\n    }\n    .horizontal.small[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n      position: absolute;\n      top: -14px;\n      left: calc(50% - 7px);\n      width: 14px;\n      height: 14px;\n      content: '';\n      text-align: center;\n      vertical-align: middle;\n      line-height: 14px;\n      transition: 0.25s;\n      border-radius: 100%;\n      background-color: #E6E6E6;\n    }\n    .horizontal.small[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.default[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n      color: #808080;\n    }\n    .horizontal.small[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.current[_ngcontent-%COMP%]:after {\n      background-color: #808080;\n    }\n    .horizontal.small[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.done[_ngcontent-%COMP%]:after {\n      background-color: #339933;\n    }\n    .horizontal.small[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.optional[_ngcontent-%COMP%]:after {\n      background-color: #38ef38;\n    }\n    .horizontal.small[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.editing[_ngcontent-%COMP%]:after {\n      background-color: #FF0000;\n    }\n    .horizontal.large-filled[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%] {\n      padding: 60px 0 10px 0;\n    }\n    .horizontal.large-filled[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child):before {\n      background-color: #E6E6E6;\n      content: '';\n      position: absolute;\n      height: 1px;\n      width: calc(100% - 50px);\n      top: -25px;\n      left: calc(50% + 25px);\n    }\n    .horizontal.large-filled[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n      position: absolute;\n      top: -50px;\n      left: calc(50% - 25px);\n      width: 50px;\n      height: 50px;\n      content: '';\n      text-align: center;\n      vertical-align: middle;\n      line-height: 50px;\n      transition: 0.25s;\n      border-radius: 100%;\n      background-color: #E6E6E6;\n    }\n    .horizontal.large-filled[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.default[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n      color: #808080;\n    }\n    .horizontal.large-filled[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.current[_ngcontent-%COMP%]:after {\n      background-color: #808080;\n    }\n    .horizontal.large-filled[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.done[_ngcontent-%COMP%]:after {\n      background-color: #339933;\n    }\n    .horizontal.large-filled[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.optional[_ngcontent-%COMP%]:after {\n      background-color: #38ef38;\n    }\n    .horizontal.large-filled[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.editing[_ngcontent-%COMP%]:after {\n      background-color: #FF0000;\n    }\n    .horizontal.large-empty[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%] {\n      padding: 60px 0 10px 0;\n    }\n    .horizontal.large-empty[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child):before {\n      background-color: #E6E6E6;\n      content: '';\n      position: absolute;\n      height: 1px;\n      width: calc(100% - 50px);\n      top: -25px;\n      left: calc(50% + 25px);\n    }\n    .horizontal.large-empty[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n      position: absolute;\n      top: -50px;\n      left: calc(50% - 25px);\n      width: 50px;\n      height: 50px;\n      content: '';\n      text-align: center;\n      vertical-align: middle;\n      line-height: 46px;\n      transition: 0.25s;\n      border-radius: 100%;\n      border-width: 2px;\n      border-style: solid;\n      border-color: #E6E6E6;\n    }\n    .horizontal.large-empty[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.default[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n      color: #808080;\n    }\n    .horizontal.large-empty[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.current[_ngcontent-%COMP%]:after {\n      border-width: 2px;\n      border-style: solid;\n      border-color: #808080;\n    }\n    .horizontal.large-empty[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.done[_ngcontent-%COMP%]:after {\n      border-width: 2px;\n      border-style: solid;\n      border-color: #339933;\n    }\n    .horizontal.large-empty[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.optional[_ngcontent-%COMP%]:after {\n      border-width: 2px;\n      border-style: solid;\n      border-color: #38ef38;\n    }\n    .horizontal.large-empty[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.editing[_ngcontent-%COMP%]:after {\n      border-width: 2px;\n      border-style: solid;\n      border-color: #FF0000;\n    }\n    .horizontal.large-filled-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%] {\n      padding: 60px 0 10px 0;\n    }\n    .horizontal.large-filled-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child):before {\n      background-color: #E6E6E6;\n      content: '';\n      position: absolute;\n      height: 1px;\n      width: calc(100% - 50px);\n      top: -25px;\n      left: calc(50% + 25px);\n    }\n    .horizontal.large-filled-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n      position: absolute;\n      top: -50px;\n      left: calc(50% - 25px);\n      width: 50px;\n      height: 50px;\n      content: '';\n      text-align: center;\n      vertical-align: middle;\n      line-height: 50px;\n      transition: 0.25s;\n      border-radius: 100%;\n      background-color: #E6E6E6;\n      color: black;\n      content: attr(step-symbol);\n    }\n    .horizontal.large-filled-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.default[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n      color: #808080;\n    }\n    .horizontal.large-filled-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.current[_ngcontent-%COMP%]:after {\n      background-color: #808080;\n      color: black;\n    }\n    .horizontal.large-filled-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.done[_ngcontent-%COMP%]:after {\n      background-color: #339933;\n      color: black;\n    }\n    .horizontal.large-filled-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.optional[_ngcontent-%COMP%]:after {\n      background-color: #38ef38;\n      color: black;\n    }\n    .horizontal.large-filled-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.editing[_ngcontent-%COMP%]:after {\n      background-color: #FF0000;\n      color: black;\n    }\n    .horizontal.large-empty-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%] {\n      padding: 60px 0 10px 0;\n    }\n    .horizontal.large-empty-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child):before {\n      background-color: #E6E6E6;\n      content: '';\n      position: absolute;\n      height: 1px;\n      width: calc(100% - 50px);\n      top: -25px;\n      left: calc(50% + 25px);\n    }\n    .horizontal.large-empty-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n      position: absolute;\n      top: -50px;\n      left: calc(50% - 25px);\n      width: 50px;\n      height: 50px;\n      content: '';\n      text-align: center;\n      vertical-align: middle;\n      line-height: 46px;\n      transition: 0.25s;\n      border-radius: 100%;\n      border-width: 2px;\n      border-style: solid;\n      border-color: #E6E6E6;\n      color: #E6E6E6;\n      content: attr(step-symbol);\n    }\n    .horizontal.large-empty-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.default[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n      color: #808080;\n    }\n    .horizontal.large-empty-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.current[_ngcontent-%COMP%]:after {\n      border-width: 2px;\n      border-style: solid;\n      border-color: #808080;\n      color: #808080;\n    }\n    .horizontal.large-empty-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.done[_ngcontent-%COMP%]:after {\n      border-width: 2px;\n      border-style: solid;\n      border-color: #339933;\n      color: #339933;\n    }\n    .horizontal.large-empty-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.optional[_ngcontent-%COMP%]:after {\n      border-width: 2px;\n      border-style: solid;\n      border-color: #38ef38;\n      color: #38ef38;\n    }\n    .horizontal.large-empty-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.editing[_ngcontent-%COMP%]:after {\n      border-width: 2px;\n      border-style: solid;\n      border-color: #FF0000;\n      color: #FF0000;\n    }\n    .horizontal[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      margin: 0;\n      width: 100%;\n      list-style: none;\n      \n    }\n    .horizontal[_nghost-%COMP%]   ul.steps-indicator.steps-2[_ngcontent-%COMP%]:before {\n      left: 25%;\n      right: 25%;\n    }\n    .horizontal[_nghost-%COMP%]   ul.steps-indicator.steps-2[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      width: 50%;\n    }\n    .horizontal[_nghost-%COMP%]   ul.steps-indicator.steps-3[_ngcontent-%COMP%]:before {\n      left: 16.66666667%;\n      right: 16.66666667%;\n    }\n    .horizontal[_nghost-%COMP%]   ul.steps-indicator.steps-3[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      width: 33.33333333%;\n    }\n    .horizontal[_nghost-%COMP%]   ul.steps-indicator.steps-4[_ngcontent-%COMP%]:before {\n      left: 12.5%;\n      right: 12.5%;\n    }\n    .horizontal[_nghost-%COMP%]   ul.steps-indicator.steps-4[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      width: 25%;\n    }\n    .horizontal[_nghost-%COMP%]   ul.steps-indicator.steps-5[_ngcontent-%COMP%]:before {\n      left: 10%;\n      right: 10%;\n    }\n    .horizontal[_nghost-%COMP%]   ul.steps-indicator.steps-5[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      width: 20%;\n    }\n    .horizontal[_nghost-%COMP%]   ul.steps-indicator.steps-6[_ngcontent-%COMP%]:before {\n      left: 8.33333333%;\n      right: 8.33333333%;\n    }\n    .horizontal[_nghost-%COMP%]   ul.steps-indicator.steps-6[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      width: 16.66666667%;\n    }\n    .horizontal[_nghost-%COMP%]   ul.steps-indicator.steps-7[_ngcontent-%COMP%]:before {\n      left: 7.14285714%;\n      right: 7.14285714%;\n    }\n    .horizontal[_nghost-%COMP%]   ul.steps-indicator.steps-7[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      width: 14.28571429%;\n    }\n    .horizontal[_nghost-%COMP%]   ul.steps-indicator.steps-8[_ngcontent-%COMP%]:before {\n      left: 6.25%;\n      right: 6.25%;\n    }\n    .horizontal[_nghost-%COMP%]   ul.steps-indicator.steps-8[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      width: 12.5%;\n    }\n    .horizontal[_nghost-%COMP%]   ul.steps-indicator.steps-9[_ngcontent-%COMP%]:before {\n      left: 5.55555556%;\n      right: 5.55555556%;\n    }\n    .horizontal[_nghost-%COMP%]   ul.steps-indicator.steps-9[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      width: 11.11111111%;\n    }\n    .horizontal[_nghost-%COMP%]   ul.steps-indicator.steps-10[_ngcontent-%COMP%]:before {\n      left: 5%;\n      right: 5%;\n    }\n    .horizontal[_nghost-%COMP%]   ul.steps-indicator.steps-10[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      width: 10%;\n    }\n    .horizontal[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n      -webkit-box-sizing: border-box;\n      -moz-box-sizing: border-box;\n      box-sizing: border-box;\n    }\n    .horizontal[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      position: relative;\n      margin: 0;\n      padding: 10px 0 0 0;\n      pointer-events: none;\n    }\n    .horizontal[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    }\n    .horizontal[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n      color: #808080;\n      line-height: 14px;\n      font-size: 14px;\n      text-decoration: none;\n      text-transform: uppercase;\n      text-align: center;\n      font-weight: bold;\n      transition: 0.25s;\n      cursor: pointer;\n    }\n    .horizontal[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n      color: #4d4d4d;\n    }\n    .horizontal[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.navigable[_ngcontent-%COMP%] {\n      pointer-events: auto;\n    }\n    \n    \n    \n    .vertical[_nghost-%COMP%] {\n      max-width: 280px;\n      width: 20%;\n      height: 100%;\n      position: sticky;\n      top: 0;\n    }\n    .vertical.small[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%] {\n      padding: 5px 5px 5px 19px;\n    }\n    .vertical.small[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child):before {\n      background-color: #E6E6E6;\n      content: '';\n      position: absolute;\n      left: -7px;\n      top: 14px;\n      height: calc(100% - 14px);\n      width: 1px;\n    }\n    .vertical.small[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n      position: absolute;\n      top: 0;\n      left: -14px;\n      width: 14px;\n      height: 14px;\n      content: '';\n      text-align: center;\n      vertical-align: middle;\n      line-height: 14px;\n      transition: 0.25s;\n      border-radius: 100%;\n      background-color: #E6E6E6;\n    }\n    .vertical.small[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n      min-height: 14px;\n    }\n    .vertical.small[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.default[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n      color: #808080;\n    }\n    .vertical.small[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.current[_ngcontent-%COMP%]:after {\n      background-color: #808080;\n    }\n    .vertical.small[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.done[_ngcontent-%COMP%]:after {\n      background-color: #339933;\n    }\n    .vertical.small[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.optional[_ngcontent-%COMP%]:after {\n      background-color: #38ef38;\n    }\n    .vertical.small[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.editing[_ngcontent-%COMP%]:after {\n      background-color: #FF0000;\n    }\n    .vertical.large-filled[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%] {\n      padding: 5px 5px 5px 55px;\n    }\n    .vertical.large-filled[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child):before {\n      background-color: #E6E6E6;\n      content: '';\n      position: absolute;\n      left: -25px;\n      top: 50px;\n      height: calc(100% - 50px);\n      width: 1px;\n    }\n    .vertical.large-filled[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n      position: absolute;\n      top: 0;\n      left: -50px;\n      width: 50px;\n      height: 50px;\n      content: '';\n      text-align: center;\n      vertical-align: middle;\n      line-height: 50px;\n      transition: 0.25s;\n      border-radius: 100%;\n      background-color: #E6E6E6;\n    }\n    .vertical.large-filled[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n      min-height: 50px;\n    }\n    .vertical.large-filled[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.default[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n      color: #808080;\n    }\n    .vertical.large-filled[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.current[_ngcontent-%COMP%]:after {\n      background-color: #808080;\n    }\n    .vertical.large-filled[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.done[_ngcontent-%COMP%]:after {\n      background-color: #339933;\n    }\n    .vertical.large-filled[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.optional[_ngcontent-%COMP%]:after {\n      background-color: #38ef38;\n    }\n    .vertical.large-filled[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.editing[_ngcontent-%COMP%]:after {\n      background-color: #FF0000;\n    }\n    .vertical.large-empty[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%] {\n      padding: 5px 5px 5px 55px;\n    }\n    .vertical.large-empty[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child):before {\n      background-color: #E6E6E6;\n      content: '';\n      position: absolute;\n      left: -25px;\n      top: 50px;\n      height: calc(100% - 50px);\n      width: 1px;\n    }\n    .vertical.large-empty[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n      position: absolute;\n      top: 0;\n      left: -50px;\n      width: 50px;\n      height: 50px;\n      content: '';\n      text-align: center;\n      vertical-align: middle;\n      line-height: 46px;\n      transition: 0.25s;\n      border-radius: 100%;\n      border-width: 2px;\n      border-style: solid;\n      border-color: #E6E6E6;\n    }\n    .vertical.large-empty[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n      min-height: 54px;\n    }\n    .vertical.large-empty[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.default[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n      color: #808080;\n    }\n    .vertical.large-empty[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.current[_ngcontent-%COMP%]:after {\n      border-width: 2px;\n      border-style: solid;\n      border-color: #808080;\n    }\n    .vertical.large-empty[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.done[_ngcontent-%COMP%]:after {\n      border-width: 2px;\n      border-style: solid;\n      border-color: #339933;\n    }\n    .vertical.large-empty[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.optional[_ngcontent-%COMP%]:after {\n      border-width: 2px;\n      border-style: solid;\n      border-color: #38ef38;\n    }\n    .vertical.large-empty[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.editing[_ngcontent-%COMP%]:after {\n      border-width: 2px;\n      border-style: solid;\n      border-color: #FF0000;\n    }\n    .vertical.large-filled-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%] {\n      padding: 5px 5px 5px 55px;\n    }\n    .vertical.large-filled-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child):before {\n      background-color: #E6E6E6;\n      content: '';\n      position: absolute;\n      left: -25px;\n      top: 50px;\n      height: calc(100% - 50px);\n      width: 1px;\n    }\n    .vertical.large-filled-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n      position: absolute;\n      top: 0;\n      left: -50px;\n      width: 50px;\n      height: 50px;\n      content: '';\n      text-align: center;\n      vertical-align: middle;\n      line-height: 50px;\n      transition: 0.25s;\n      border-radius: 100%;\n      background-color: #E6E6E6;\n      color: black;\n      content: attr(step-symbol);\n    }\n    .vertical.large-filled-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n      min-height: 50px;\n    }\n    .vertical.large-filled-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.default[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n      color: #808080;\n    }\n    .vertical.large-filled-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.current[_ngcontent-%COMP%]:after {\n      background-color: #808080;\n      color: black;\n    }\n    .vertical.large-filled-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.done[_ngcontent-%COMP%]:after {\n      background-color: #339933;\n      color: black;\n    }\n    .vertical.large-filled-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.optional[_ngcontent-%COMP%]:after {\n      background-color: #38ef38;\n      color: black;\n    }\n    .vertical.large-filled-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.editing[_ngcontent-%COMP%]:after {\n      background-color: #FF0000;\n      color: black;\n    }\n    .vertical.large-empty-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%] {\n      padding: 5px 5px 5px 55px;\n    }\n    .vertical.large-empty-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child):before {\n      background-color: #E6E6E6;\n      content: '';\n      position: absolute;\n      left: -25px;\n      top: 50px;\n      height: calc(100% - 50px);\n      width: 1px;\n    }\n    .vertical.large-empty-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n      position: absolute;\n      top: 0;\n      left: -50px;\n      width: 50px;\n      height: 50px;\n      content: '';\n      text-align: center;\n      vertical-align: middle;\n      line-height: 46px;\n      transition: 0.25s;\n      border-radius: 100%;\n      border-width: 2px;\n      border-style: solid;\n      border-color: #E6E6E6;\n      color: #E6E6E6;\n      content: attr(step-symbol);\n    }\n    .vertical.large-empty-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n      min-height: 54px;\n    }\n    .vertical.large-empty-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.default[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n      color: #808080;\n    }\n    .vertical.large-empty-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.current[_ngcontent-%COMP%]:after {\n      border-width: 2px;\n      border-style: solid;\n      border-color: #808080;\n      color: #808080;\n    }\n    .vertical.large-empty-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.done[_ngcontent-%COMP%]:after {\n      border-width: 2px;\n      border-style: solid;\n      border-color: #339933;\n      color: #339933;\n    }\n    .vertical.large-empty-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.optional[_ngcontent-%COMP%]:after {\n      border-width: 2px;\n      border-style: solid;\n      border-color: #38ef38;\n      color: #38ef38;\n    }\n    .vertical.large-empty-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.editing[_ngcontent-%COMP%]:after {\n      border-width: 2px;\n      border-style: solid;\n      border-color: #FF0000;\n      color: #FF0000;\n    }\n    .vertical[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      list-style: none;\n      margin: auto;\n      \n    }\n    .vertical[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n      -webkit-box-sizing: border-box;\n      -moz-box-sizing: border-box;\n      box-sizing: border-box;\n    }\n    .vertical[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      position: relative;\n      pointer-events: none;\n    }\n    .vertical[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child) {\n      margin-bottom: 0;\n      padding-bottom: 10px;\n    }\n    .vertical[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n    }\n    .vertical[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n      color: #808080;\n      margin-left: 15px;\n      line-height: 14px;\n      font-size: 14px;\n      text-decoration: none;\n      text-transform: uppercase;\n      text-align: left;\n      font-weight: bold;\n      transition: 0.25s;\n      cursor: pointer;\n    }\n    .vertical[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n      color: #4d4d4d;\n    }\n    .vertical[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.navigable[_ngcontent-%COMP%] {\n      pointer-events: auto;\n    }"],data:{}});function g(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,16777216,null,null,1,null,null,null,null,null,null,null)),l["\u0275did"](1,540672,null,0,e.NgTemplateOutlet,[l.ViewContainerRef],{ngTemplateOutlet:[0,"ngTemplateOutlet"]},null),(n()(),l["\u0275and"](0,null,null,0))],(function(n,t){n(t,1,0,t.parent.context.$implicit.stepTitleTemplate.templateRef)}),null)}function d(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,null,null,null,null,null,null,null)),(n()(),l["\u0275ted"](1,null,["",""]))],null,(function(n,t){n(t,1,0,t.parent.context.$implicit.stepTitle)}))}function p(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,13,"li",[],[[1,"step-symbol",0]],null,null,null,null)),l["\u0275prd"](512,null,e["\u0275NgClassImpl"],e["\u0275NgClassR2Impl"],[l.IterableDiffers,l.KeyValueDiffers,l.ElementRef,l.Renderer2]),l["\u0275did"](2,278528,null,0,e.NgClass,[e["\u0275NgClassImpl"]],{ngClass:[0,"ngClass"]},null),l["\u0275pod"](3,{default:0,current:1,done:2,editing:3,optional:4,navigable:5}),l["\u0275prd"](512,null,e["\u0275NgStyleImpl"],e["\u0275NgStyleR2Impl"],[l.ElementRef,l.KeyValueDiffers,l.Renderer2]),l["\u0275did"](5,278528,null,0,e.NgStyle,[e["\u0275NgStyleImpl"]],{ngStyle:[0,"ngStyle"]},null),l["\u0275pod"](6,{"font-family":0}),(n()(),l["\u0275eld"](7,0,null,null,6,"div",[],null,null,null,null,null)),(n()(),l["\u0275eld"](8,0,null,null,5,"a",[],null,[[null,"click"]],(function(n,t,o){var e=!0;return"click"===t&&(e=!1!==l["\u0275nov"](n,9).onClick(o)&&e),e}),null,null)),l["\u0275did"](9,16384,null,0,i.a,[r.a,[2,a.a]],{goToStep:[0,"goToStep"]},null),(n()(),l["\u0275and"](16777216,null,null,1,null,g)),l["\u0275did"](11,16384,null,0,e.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["\u0275and"](16777216,null,null,1,null,d)),l["\u0275did"](13,16384,null,0,e.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,t){var o=t.component,l=n(t,3,0,o.isDefault(t.context.$implicit),o.isCurrent(t.context.$implicit),o.isDone(t.context.$implicit),o.isEditing(t.context.$implicit),o.isOptional(t.context.$implicit),o.isNavigable(t.context.$implicit));n(t,2,0,l);var e=n(t,6,0,t.context.$implicit.navigationSymbolFontFamily);n(t,5,0,e),n(t,9,0,t.context.$implicit),n(t,11,0,t.context.$implicit.stepTitleTemplate),n(t,13,0,!t.context.$implicit.stepTitleTemplate)}),(function(n,t){n(t,0,0,t.context.$implicit.navigationSymbol)}))}function u(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,2,"ul",[],[[8,"className",0]],null,null,null,null)),(n()(),l["\u0275and"](16777216,null,null,1,null,p)),l["\u0275did"](2,278528,null,0,e.NgForOf,[l.ViewContainerRef,l.TemplateRef,l.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(n,t){n(t,2,0,t.component.wizardSteps)}),(function(n,t){n(t,0,0,l["\u0275inlineInterpolate"](1,"steps-indicator steps-",t.component.numberOfWizardSteps,""))}))}o("ROcH"),o.d(t,"a",(function(){return C})),o.d(t,"b",(function(){return h}));var C=l["\u0275crt"]({encapsulation:0,styles:["[_nghost-%COMP%] {\n      display: flex;\n      justify-content: flex-start;\n    }\n    .vertical[_nghost-%COMP%] {\n      flex-direction: row;\n    }\n    .horizontal[_nghost-%COMP%] {\n      flex-direction: column;\n    }\n    [_nghost-%COMP%]   .wizard-steps[_ngcontent-%COMP%] {\n      top: 0;\n      display: flex;\n    }\n    [_nghost-%COMP%]   .wizard-steps.vertical[_ngcontent-%COMP%] {\n      min-width: calc(100% - 280px);\n      width: 80%;\n      height: 100%;\n      flex-direction: column;\n    }\n    [_nghost-%COMP%]   .wizard-steps.horizontal[_ngcontent-%COMP%] {\n      width: 100%;\n      flex-direction: row;\n    }"],data:{}});function O(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,4,"wizard-navigation-bar",[],null,null,null,u,c)),l["\u0275prd"](512,null,e["\u0275NgClassImpl"],e["\u0275NgClassR2Impl"],[l.IterableDiffers,l.KeyValueDiffers,l.ElementRef,l.Renderer2]),l["\u0275did"](2,278528,null,0,e.NgClass,[e["\u0275NgClassImpl"]],{ngClass:[0,"ngClass"]},null),l["\u0275pod"](3,{vertical:0,horizontal:1,small:2,"large-filled":3,"large-filled-symbols":4,"large-empty":5,"large-empty-symbols":6}),l["\u0275did"](4,49152,null,0,s.a,[r.a],{direction:[0,"direction"]},null)],(function(n,t){var o=t.component,l=n(t,3,0,"left"==o.navBarLocation,"top"==o.navBarLocation,"small"==o.navBarLayout,"large-filled"==o.navBarLayout,"large-filled-symbols"==o.navBarLayout,"large-empty"==o.navBarLayout,"large-empty-symbols"==o.navBarLayout);n(t,2,0,l),n(t,4,0,o.navBarDirection)}),null)}function P(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,4,"wizard-navigation-bar",[],null,null,null,u,c)),l["\u0275prd"](512,null,e["\u0275NgClassImpl"],e["\u0275NgClassR2Impl"],[l.IterableDiffers,l.KeyValueDiffers,l.ElementRef,l.Renderer2]),l["\u0275did"](2,278528,null,0,e.NgClass,[e["\u0275NgClassImpl"]],{ngClass:[0,"ngClass"]},null),l["\u0275pod"](3,{vertical:0,horizontal:1,small:2,"large-filled":3,"large-filled-symbols":4,"large-empty":5,"large-empty-symbols":6}),l["\u0275did"](4,49152,null,0,s.a,[r.a],{direction:[0,"direction"]},null)],(function(n,t){var o=t.component,l=n(t,3,0,"right"==o.navBarLocation,"bottom"==o.navBarLocation,"small"==o.navBarLayout,"large-filled"==o.navBarLayout,"large-filled-symbols"==o.navBarLayout,"large-empty"==o.navBarLayout,"large-empty-symbols"==o.navBarLayout);n(t,2,0,l),n(t,4,0,o.navBarDirection)}),null)}function h(n){return l["\u0275vid"](0,[(n()(),l["\u0275and"](16777216,null,null,1,null,O)),l["\u0275did"](1,16384,null,0,e.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["\u0275eld"](2,0,null,null,4,"div",[],null,null,null,null,null)),l["\u0275prd"](512,null,e["\u0275NgClassImpl"],e["\u0275NgClassR2Impl"],[l.IterableDiffers,l.KeyValueDiffers,l.ElementRef,l.Renderer2]),l["\u0275did"](4,278528,null,0,e.NgClass,[e["\u0275NgClassImpl"]],{ngClass:[0,"ngClass"]},null),l["\u0275pod"](5,{"wizard-steps":0,vertical:1,horizontal:2}),l["\u0275ncd"](null,0),(n()(),l["\u0275and"](16777216,null,null,1,null,P)),l["\u0275did"](8,16384,null,0,e.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,t){var o=t.component;n(t,1,0,"top"==o.navBarLocation||"left"==o.navBarLocation);var l=n(t,5,0,!0,"left"==o.navBarLocation||"right"==o.navBarLocation,"top"==o.navBarLocation||"bottom"==o.navBarLocation);n(t,4,0,l),n(t,8,0,"bottom"==o.navBarLocation||"right"==o.navBarLocation)}),null)}},Qmfo:function(n,t,o){"use strict";o("ROcH"),o("gf1k"),o("AfkX"),o("+9il"),o("cMSX"),o("/2Va"),o("J0gI"),o("rEGZ"),o("z4lZ"),o("LyPp"),o("Fu13"),o("dL/F"),o("NPlm"),o("m+si"),o("KGXb"),o("PZi+"),o("p8yK"),o("OBOw"),o("cLGu"),o("vPt3"),o("gmQZ"),o("mTXO"),o("AdHS"),o("jVjg"),o("WsXz")}}]);