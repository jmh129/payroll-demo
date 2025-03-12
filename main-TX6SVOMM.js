import{b as nt,c as rt,d as ot,e as at,f as st,g as dt}from"./chunk-BE72TI4Q.js";import{a as kt,b as Dt,c as St,e as It,f as Tt,g as Et,h as Ft,j as re,k as oe}from"./chunk-WUGD7GWD.js";import{$a as Ue,$b as it,A as Re,Aa as Le,Ab as He,Ad as O,Ba as w,Bb as We,C as Oe,Cc as ut,D as Ce,Dc as Se,Eb as Ze,Fb as Y,Gd as ie,Ha as m,Hd as ne,Ia as Ve,Ib as qe,Id as xt,Jd as B,Ka as V,Kd as Mt,L as ye,Lb as $e,Ld as Ie,Ma as x,N as _,R as W,S as Be,Sa as ke,Sb as Ke,Ta as g,U as j,Ua as J,Ub as Je,Va as I,Vc as ht,W as Z,Wb as Ye,Wc as ft,X as d,Xc as ee,Ya as z,Yb as Xe,Zb as et,_a as ze,_b as tt,ab as o,ac as X,bb as a,ca as C,cb as h,da as y,db as E,fb as p,ga as q,gb as v,gc as ct,h as S,hb as M,hc as F,ia as xe,ib as f,ic as De,jb as U,kb as Q,lb as k,ma as P,mb as D,md as _t,na as $,nd as gt,p as be,pa as K,qb as s,qd as vt,ra as L,rb as b,rd as wt,sa as Ne,sb as Qe,sc as lt,ta as je,tc as mt,ud as bt,v as Ae,va as Me,vd as Ct,w as Pe,wd as te,x as A,xa as c,yb as R,yc as pt,yd as yt,zb as Ge}from"./chunk-PSTFCVTG.js";var ae=[{path:"",redirectTo:"/dashboard",pathMatch:"full"},{path:"dashboard",loadComponent:()=>import("./chunk-VKIMRS6S.js").then(i=>i.DashboardComponent)},{path:"employees",loadComponent:()=>import("./chunk-OJTMLT6B.js").then(i=>i.EmployeeComponent)},{path:"payroll",loadComponent:()=>import("./chunk-7CF62TOH.js").then(i=>i.PayrollComponent)}];var At="1.0.0",Pt="A demo payroll dashboard built with Angular",Rt="James Holding",Ot=["payroll","demo","Angular","dashboard"];var Bt={siteName:"Payroll Dashboard",version:At,meta:{description:Pt,keywords:Ot,author:Rt},defaultCountry:"US",production:!1},N=new j("app.config");var Nt={providers:[Ze({eventCoalescing:!0}),it(),st(ae),{provide:N,useValue:Bt}]};var le=["*"],Ut=["content"],Qt=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],Gt=["mat-drawer","mat-drawer-content","*"];function Ht(i,r){if(i&1){let e=E();o(0,"div",1),p("click",function(){C(e);let n=v();return y(n._onBackdropClicked())}),a()}if(i&2){let e=v();I("mat-drawer-shown",e._isShowingBackdrop())}}function Wt(i,r){i&1&&(o(0,"mat-drawer-content"),f(1,2),a())}var Zt=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],qt=["mat-sidenav","mat-sidenav-content","*"];function $t(i,r){if(i&1){let e=E();o(0,"div",1),p("click",function(){C(e);let n=v();return y(n._onBackdropClicked())}),a()}if(i&2){let e=v();I("mat-drawer-shown",e._isShowingBackdrop())}}function Kt(i,r){i&1&&(o(0,"mat-sidenav-content"),f(1,2),a())}var Jt=".mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));background-color:var(--mat-sidenav-content-background-color, var(--mat-sys-background));box-sizing:border-box;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent))}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}@media(forced-colors: active){.mat-drawer-backdrop{opacity:.5}}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-content.mat-drawer-content-hidden{opacity:0}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;color:var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));box-shadow:var(--mat-sidenav-container-elevation-shadow, none);background-color:var(--mat-sidenav-container-background-color, var(--mat-sys-surface));border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));width:var(--mat-sidenav-container-width, 360px);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}@media(forced-colors: active){.mat-drawer,[dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}}@media(forced-colors: active){[dir=rtl] .mat-drawer,.mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-transition .mat-drawer{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating){visibility:hidden;box-shadow:none}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container{display:none}.mat-drawer.mat-drawer-opened.mat-drawer-opened{transform:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto}.mat-sidenav-fixed{position:fixed}";var Yt=new j("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:Xt}),Fe=new j("MAT_DRAWER_CONTAINER");function Xt(){return!1}var de=(()=>{class i extends B{_platform=d(X);_changeDetectorRef=d(Y);_container=d(Ee);constructor(){let e=d(K),t=d(xt),n=d($);super(e,t,n)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:t}=this._container;return e!=null&&e.mode!=="over"&&e.opened||t!=null&&t.mode!=="over"&&t.opened}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=m({type:i,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(t,n){t&2&&(J("margin-left",n._container._contentMargins.left,"px")("margin-right",n._container._contentMargins.right,"px"),I("mat-drawer-content-hidden",n._shouldBeHidden()))},features:[R([{provide:B,useExisting:i}]),V],ngContentSelectors:le,decls:1,vars:0,template:function(t,n){t&1&&(M(),f(0))},encapsulation:2,changeDetection:0})}return i})(),Te=(()=>{class i{_elementRef=d(K);_focusTrapFactory=d(mt);_focusMonitor=d(pt);_platform=d(X);_ngZone=d($);_renderer=d(Le);_interactivityChecker=d(lt);_doc=d($e,{optional:!0});_container=d(Fe,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached;_anchor;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=F(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=F(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened}set opened(e){this.toggle(F(e))}_opened=!1;_openedVia;_animationStarted=new S;_animationEnd=new S;openedChange=new P(!0);_openedStream=this.openedChange.pipe(A(e=>e),be(()=>{}));openedStart=this._animationStarted.pipe(A(()=>this.opened),Ce(void 0));_closedStream=this.openedChange.pipe(A(e=>!e),be(()=>{}));closedStart=this._animationStarted.pipe(A(()=>!this.opened),Ce(void 0));_destroyed=new S;onPositionChanged=new P;_content;_modeChanged=new S;_injector=d(xe);_changeDetectorRef=d(Y);constructor(){this.openedChange.pipe(_(this._destroyed)).subscribe(e=>{e?(this._doc&&(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement),this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement;Ae(e,"keydown").pipe(A(t=>t.keyCode===27&&!this.disableClose&&!ct(t)),_(this._destroyed)).subscribe(t=>this._ngZone.run(()=>{this.close(),t.stopPropagation(),t.preventDefault()})),this._eventCleanups=[this._renderer.listen(e,"transitionrun",this._handleTransitionEvent),this._renderer.listen(e,"transitionend",this._handleTransitionEvent),this._renderer.listen(e,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this._opened)})}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{l(),u(),e.removeAttribute("tabindex")},l=this._renderer.listen(e,"blur",n),u=this._renderer.listen(e,"mousedown",n)})),e.focus(t)}_focusByCssSelector(e,t){let n=this._elementRef.nativeElement.querySelector(e);n&&this._forceFocus(n,t)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":Me(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,t){e&&t&&(this._openedVia=t);let n=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),n}_setOpen(e,t,n){return e===this._opened?Promise.resolve(e?"open":"close"):(this._opened=e,this._container?._transitionsEnabled?this._setIsAnimating(!0):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&t&&this._restoreFocus(n),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(l=>{this.openedChange.pipe(Oe(1)).subscribe(u=>l(u?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=!!this._container?.hasBackdrop&&this.opened)}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let t=this._elementRef.nativeElement,n=t.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),n.insertBefore(this._anchor,t)),n.appendChild(t)):this._anchor&&this._anchor.parentNode.insertBefore(t,this._anchor)}_handleTransitionEvent=e=>{let t=this._elementRef.nativeElement;e.target===t&&this._ngZone.run(()=>{e.type==="transitionrun"?this._animationStarted.next(e):(e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e))})};static \u0275fac=function(t){return new(t||i)};static \u0275cmp=m({type:i,selectors:[["mat-drawer"]],viewQuery:function(t,n){if(t&1&&Q(Ut,5),t&2){let l;k(l=D())&&(n._content=l.first)}},hostAttrs:["tabIndex","-1",1,"mat-drawer"],hostVars:11,hostBindings:function(t,n){t&2&&(ke("align",null),J("visibility",!n._container&&!n.opened?"hidden":null),I("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:le,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,n){t&1&&(M(),o(0,"div",1,0),f(2),a())},dependencies:[B],encapsulation:2,changeDetection:0})}return i})(),Ee=(()=>{class i{_dir=d(ut,{optional:!0});_element=d(K);_ngZone=d($);_changeDetectorRef=d(Y);_animationMode=d(je,{optional:!0});_transitionsEnabled=!1;_allDrawers;_drawers=new Ne;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=F(e)}_autosize=d(Yt);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:F(e)}_backdropOverride;backdropClick=new P;_start;_end;_left;_right;_destroyed=new S;_doCheckSubject=new S;_contentMargins={left:null,right:null};_contentMarginChanges=new S;get scrollable(){return this._userContent||this._content}_injector=d(xe);constructor(){let e=d(X),t=d(Mt);this._dir?.change.pipe(_(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),t.change().pipe(_(this._destroyed)).subscribe(()=>this.updateContentMargins()),this._animationMode!=="NoopAnimations"&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(ye(this._allDrawers),_(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(t=>!t._container||t._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(ye(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Re(10),_(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,t=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let n=this._left._getWidth();e+=n,t-=n}}if(this._right&&this._right.opened){if(this._right.mode=="side")t+=this._right._getWidth();else if(this._right.mode=="push"){let n=this._right._getWidth();t+=n,e-=n}}e=e||null,t=t||null,(e!==this._contentMargins.left||t!==this._contentMargins.right)&&(this._contentMargins={left:e,right:t},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(_(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(_(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(_(this._drawers.changes)).subscribe(()=>{Me({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(_(Pe(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let t=this._element.nativeElement.classList,n="mat-drawer-container-has-open";e?t.add(n):t.remove(n)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=m({type:i,selectors:[["mat-drawer-container"]],contentQueries:function(t,n,l){if(t&1&&(U(l,de,5),U(l,Te,5)),t&2){let u;k(u=D())&&(n._content=u.first),k(u=D())&&(n._allDrawers=u)}},viewQuery:function(t,n){if(t&1&&Q(de,5),t&2){let l;k(l=D())&&(n._userContent=l.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(t,n){t&2&&I("mat-drawer-container-explicit-backdrop",n._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[R([{provide:Fe,useExisting:i}])],ngContentSelectors:Gt,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,n){t&1&&(M(Qt),x(0,Ht,1,2,"div",0),f(1),f(2,1),x(3,Wt,2,0,"mat-drawer-content")),t&2&&(z(n.hasBackdrop?0:-1),c(3),z(n._content?-1:3))},dependencies:[de],styles:[".mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));background-color:var(--mat-sidenav-content-background-color, var(--mat-sys-background));box-sizing:border-box;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent))}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}@media(forced-colors: active){.mat-drawer-backdrop{opacity:.5}}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-content.mat-drawer-content-hidden{opacity:0}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;color:var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));box-shadow:var(--mat-sidenav-container-elevation-shadow, none);background-color:var(--mat-sidenav-container-background-color, var(--mat-sys-surface));border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));width:var(--mat-sidenav-container-width, 360px);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}@media(forced-colors: active){.mat-drawer,[dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}}@media(forced-colors: active){[dir=rtl] .mat-drawer,.mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-transition .mat-drawer{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating){visibility:hidden;box-shadow:none}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container{display:none}.mat-drawer.mat-drawer-opened.mat-drawer-opened{transform:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto}.mat-sidenav-fixed{position:fixed}"],encapsulation:2,changeDetection:0})}return i})(),ce=(()=>{class i extends de{static \u0275fac=(()=>{let e;return function(n){return(e||(e=q(i)))(n||i)}})();static \u0275cmp=m({type:i,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[R([{provide:B,useExisting:i}]),V],ngContentSelectors:le,decls:1,vars:0,template:function(t,n){t&1&&(M(),f(0))},encapsulation:2,changeDetection:0})}return i})(),G=(()=>{class i extends Te{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=F(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=De(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=De(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(n){return(e||(e=q(i)))(n||i)}})();static \u0275cmp=m({type:i,selectors:[["mat-sidenav"]],hostAttrs:["tabIndex","-1",1,"mat-drawer","mat-sidenav"],hostVars:15,hostBindings:function(t,n){t&2&&(ke("align",null),J("top",n.fixedInViewport?n.fixedTopGap:null,"px")("bottom",n.fixedInViewport?n.fixedBottomGap:null,"px"),I("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side")("mat-sidenav-fixed",n.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[R([{provide:Te,useExisting:i}]),V],ngContentSelectors:le,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,n){t&1&&(M(),o(0,"div",1,0),f(2),a())},dependencies:[B],encapsulation:2,changeDetection:0})}return i})(),jt=(()=>{class i extends Ee{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(n){return(e||(e=q(i)))(n||i)}})();static \u0275cmp=m({type:i,selectors:[["mat-sidenav-container"]],contentQueries:function(t,n,l){if(t&1&&(U(l,ce,5),U(l,G,5)),t&2){let u;k(u=D())&&(n._content=u.first),k(u=D())&&(n._allDrawers=u)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(t,n){t&2&&I("mat-drawer-container-explicit-backdrop",n._backdropOverride)},exportAs:["matSidenavContainer"],features:[R([{provide:Fe,useExisting:i},{provide:Ee,useExisting:i}]),V],ngContentSelectors:qt,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,n){t&1&&(M(Zt),x(0,$t,1,2,"div",0),f(1),f(2,1),x(3,Kt,2,0,"mat-sidenav-content")),t&2&&(z(n.hasBackdrop?0:-1),c(3),z(n._content?-1:3))},dependencies:[ce],styles:[Jt],encapsulation:2,changeDetection:0})}return i})(),me=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=Ve({type:i});static \u0275inj=Be({imports:[Se,Ie,Ie,Se]})}return i})();var Lt={id:"123456",name:"John Smith",email:"john.smith@company.com",phoneNumber:"+1 (555) 123-4567",department:"IT Department",role:"Administrator",country:"US",lastLogin:"2025-03-10T09:30:00Z"};function oi(i,r){if(i&1&&(o(0,"mat-list-item")(1,"mat-icon",4),s(2,"phone"),a(),o(3,"div",5),s(4,"Phone"),a(),o(5,"div",6),s(6),a()()),i&2){let e=v();c(6),b(e.user.phoneNumber)}}function ai(i,r){i&1&&h(0,"mat-divider")}function si(i,r){if(i&1&&(o(0,"mat-list-item")(1,"mat-icon",4),s(2,"business"),a(),o(3,"div",5),s(4,"Department"),a(),o(5,"div",6),s(6),a()()),i&2){let e=v();c(6),b(e.user.department)}}function di(i,r){i&1&&h(0,"mat-divider")}function ci(i,r){if(i&1&&(o(0,"mat-list-item")(1,"mat-icon",4),s(2,"access_time"),a(),o(3,"div",5),s(4,"Last Login"),a(),o(5,"div",6),s(6),He(7,"date"),a()()),i&2){let e=v();c(6),b(We(7,1,e.user.lastLogin))}}var pe=class i{constructor(r,e){this.dialogRef=r;this.user=e}closeDialog(){this.dialogRef.close()}logoutAction(){this.dialogRef.close()}static \u0275fac=function(e){return new(e||i)(w(kt),w(Dt))};static \u0275cmp=m({type:i,selectors:[["app-user-profile"]],decls:42,vars:9,consts:[[1,"profile-container"],[1,"avatar-container"],[1,"avatar-icon"],["mat-dialog-title",""],["matListItemIcon",""],["matListItemTitle",""],["matListItemLine",""],[4,"ngIf"],["mat-button","",3,"click"]],template:function(e,t){e&1&&(o(0,"div",0)(1,"div",1)(2,"mat-icon",2),s(3,"account_circle"),a()(),o(4,"h2",3),s(5),a(),o(6,"mat-dialog-content")(7,"mat-list")(8,"mat-list-item")(9,"mat-icon",4),s(10,"email"),a(),o(11,"div",5),s(12,"Email"),a(),o(13,"div",6),s(14),a()(),h(15,"mat-divider"),x(16,oi,7,1,"mat-list-item",7)(17,ai,1,0,"mat-divider",7),o(18,"mat-list-item")(19,"mat-icon",4),s(20,"work"),a(),o(21,"div",5),s(22,"Role"),a(),o(23,"div",6),s(24),a()(),h(25,"mat-divider"),x(26,si,7,1,"mat-list-item",7)(27,di,1,0,"mat-divider",7),o(28,"mat-list-item")(29,"mat-icon",4),s(30,"public"),a(),o(31,"div",5),s(32,"Country"),a(),o(33,"div",6),s(34),a()(),h(35,"mat-divider"),x(36,ci,8,3,"mat-list-item",7),a()(),o(37,"mat-dialog-actions")(38,"button",8),p("click",function(){return t.closeDialog()}),s(39,"Close"),a(),o(40,"button",8),p("click",function(){return t.logoutAction()}),s(41,"Logout"),a()()()),e&2&&(c(5),b(t.user.name),c(9),b(t.user.email),c(2),g("ngIf",t.user.phoneNumber),c(),g("ngIf",t.user.phoneNumber),c(7),b(t.user.role),c(2),g("ngIf",t.user.department),c(),g("ngIf",t.user.department),c(7),b(t.user.country),c(2),g("ngIf",t.user.lastLogin))},dependencies:[Ye,Ke,Je,Ft,It,Et,Tt,ee,ht,ne,ie,gt,_t,O,Ct,te,bt,wt,vt],styles:[".profile-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;padding:1rem}.avatar-container[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:1rem}.avatar-icon[_ngcontent-%COMP%]{font-size:4rem;height:4rem;width:4rem}mat-dialog-title[_ngcontent-%COMP%]{text-align:center;margin-bottom:1rem}mat-dialog-content[_ngcontent-%COMP%]{width:100%;margin-bottom:1rem}mat-dialog-actions[_ngcontent-%COMP%]{justify-content:space-between;width:100%}"]})};var ue=class i{constructor(r){this.dialog=r}toggleSidenav=new P;onToggleSidenav(){this.toggleSidenav.emit()}openUserProfile(){let r=this.dialog.open(pe,{data:Lt})}static \u0275fac=function(e){return new(e||i)(w(St))};static \u0275cmp=m({type:i,selectors:[["app-header"]],outputs:{toggleSidenav:"toggleSidenav"},decls:9,vars:0,consts:[["mat-icon-button","","aria-label","Toggle navigation menu",3,"click"],[1,"toolbar-spacer"],["mat-icon-button","","aria-label","User profile",3,"click"]],template:function(e,t){e&1&&(o(0,"header")(1,"mat-toolbar")(2,"button",0),p("click",function(){return t.onToggleSidenav()}),o(3,"mat-icon"),s(4,"menu"),a()(),h(5,"span",1),o(6,"button",2),p("click",function(){return t.openUserProfile()}),o(7,"mat-icon"),s(8,"account_circle"),a()()()())},dependencies:[oe,re,ee,ft,ne,ie],styles:[".toolbar-spacer[_ngcontent-%COMP%]{flex:1 1 auto}"]})};var he=class i{navItems=[];constructor(){this.navItems=this.generateNavItems(ae)}getNavItems(){return this.navItems}generateNavItems(r){return[...r.filter(t=>t.path&&t.path!=="**").map(t=>({path:`/${t.path}`,title:this.capitalize(t.path||"")}))]}capitalize(r){return r.charAt(0).toUpperCase()+r.slice(1)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=W({token:i,factory:i.\u0275fac,providedIn:"root"})};var pi=i=>({exact:i}),ui=(i,r)=>r.path;function hi(i,r){if(i&1){let e=E();o(0,"a",1),p("click",function(){let n=C(e).$implicit,l=v();return y(l.navigate(n))}),s(1),a()}if(i&2){let e=r.$implicit;g("routerLink",e.path)("routerLinkActiveOptions",Ge(3,pi,e.path==="/")),c(),Qe(" ",e.title," ")}}var fe=class i{constructor(r,e){this.navigationService=r;this.router=e;this.navItems.set(this.navigationService.getNavItems()),this.router.events.subscribe(()=>{this.currentRoute.set(this.router.url)})}onClose;navItems=L([]);currentRoute=L("");activeItem=qe(()=>this.navItems().find(r=>r.path===this.currentRoute())||null);navigate(r){this.router.navigate([r.path]),this.currentRoute.set(r.path),this.onClose&&this.onClose()}static \u0275fac=function(e){return new(e||i)(w(he),w(rt))};static \u0275cmp=m({type:i,selectors:[["app-sidenav"]],inputs:{onClose:"onClose"},decls:3,vars:0,consts:[["mat-list-item","","routerLinkActive","mat-list-item-active",3,"routerLink","routerLinkActiveOptions"],["mat-list-item","","routerLinkActive","mat-list-item-active",3,"click","routerLink","routerLinkActiveOptions"]],template:function(e,t){e&1&&(o(0,"mat-nav-list"),ze(1,hi,2,5,"a",0,ui),a()),e&2&&(c(),Ue(t.navItems()))},dependencies:[me,dt,ot,at,O,yt,te],styles:[".mat-list-item-active[_ngcontent-%COMP%]{background-color:#0000000a;font-weight:500}"]})};var _e=class i{config=d(N);static \u0275fac=function(e){return new(e||i)};static \u0275cmp=m({type:i,selectors:[["app-footer"]],decls:4,vars:1,consts:[[1,"footer-toolbar"]],template:function(e,t){e&1&&(o(0,"footer")(1,"mat-toolbar",0)(2,"span"),s(3),a()()()),e&2&&(c(3),b(t.config.siteName))},dependencies:[oe,re],styles:[".footer-toolbar[_ngcontent-%COMP%]{justify-content:center;padding:0 20px}"]})};var fi=["*"],ge=class i{sidenav;isSidenavOpen=L(!1);toggleSidenav(){this.sidenav.toggle(),this.isSidenavOpen.update(r=>!r)}closeSidenav(){this.sidenav.close(),this.isSidenavOpen.set(!1)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=m({type:i,selectors:[["app-layout"]],viewQuery:function(e,t){if(e&1&&Q(G,5),e&2){let n;k(n=D())&&(t.sidenav=n.first)}},ngContentSelectors:fi,decls:9,vars:4,consts:[["sidenav",""],[1,"app-container"],[3,"toggleSidenav"],[1,"sidenav-container"],[3,"opened","closed","mode","autoFocus"],[3,"onClose"]],template:function(e,t){if(e&1){let n=E();M(),o(0,"div",1)(1,"app-header",2),p("toggleSidenav",function(){return C(n),y(t.toggleSidenav())}),a(),o(2,"mat-sidenav-container",3)(3,"mat-sidenav",4,0),p("opened",function(){return C(n),y(t.isSidenavOpen.set(!0))})("closed",function(){return C(n),y(t.isSidenavOpen.set(!1))}),h(5,"app-sidenav",5),a(),o(6,"mat-sidenav-content"),f(7),h(8,"app-footer"),a()()()}e&2&&(c(3),g("mode","over")("opened",t.isSidenavOpen())("autoFocus",!1),c(2),g("onClose",t.closeSidenav.bind(t)))},dependencies:[me,G,jt,ce,O,ue,fe,_e],styles:[".app-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}.sidenav-container[_ngcontent-%COMP%]{flex:1}"]})};var ve=class i{constructor(r,e,t){this.meta=r;this.title=e;this.config=t}initializeMetaTags(){this.title.setTitle(this.config.siteName),this.meta.addTag({name:"description",content:this.config.meta.description}),this.meta.addTag({name:"author",content:this.config.meta.author}),this.meta.addTag({name:"keywords",content:this.config.meta.keywords.join(", ")}),this.meta.addTag({name:"version",content:this.config.version}),this.meta.addTag({name:"application-name",content:this.config.siteName})}updateMetaTag(r,e){this.meta.updateTag({name:r,content:e})}updateTitle(r){this.title.setTitle(r)}setRouteMetaTags(r,e){this.updateTitle(`${r} | ${this.config.siteName}`),e&&this.updateMetaTag("description",e)}static \u0275fac=function(e){return new(e||i)(Z(et),Z(tt),Z(N))};static \u0275prov=W({token:i,factory:i.\u0275fac,providedIn:"root"})};var we=class i{constructor(r){this.metaService=r}ngOnInit(){this.metaService.initializeMetaTags()}static \u0275fac=function(e){return new(e||i)(w(ve))};static \u0275cmp=m({type:i,selectors:[["app-root"]],decls:2,vars:0,template:function(e,t){e&1&&(o(0,"app-layout"),h(1,"router-outlet"),a())},dependencies:[nt,ge],encapsulation:2})};Xe(we,Nt).catch(i=>console.error(i));
