import{B as I,Da as _,Dd as $,Ea as b,Ed as Ot,Fa as h,Fb as N,Fd as kt,Ga as y,Gd as O,Ha as pt,Hd as k,I as F,Ia as P,Ld as Mt,O as L,Oa as x,Od as Rt,P as f,Pd as Et,Qd as K,R as m,Ra as w,Sa as gt,Sd as D,U as n,Vd as H,Wb as V,Ya as ft,Yb as z,Za as _t,_ as st,a as d,ab as Y,ac as G,b as at,bb as bt,cc as U,da as S,db as yt,eb as q,fa as A,fb as vt,g as c,gb as Dt,hb as B,ib as j,ja as lt,k as nt,ka as dt,lc as At,ma as g,mc as xt,qa as ct,rc as wt,sa as mt,t as E,tc as Tt,uc as T,v as rt,va as ht,vc as Z,w as C,wc as v,xa as ut,zb as Ct}from"./chunk-QJHPDPAE.js";function zt(i,a){}var u=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;componentFactoryResolver;providers;container;templateContext};var tt=(()=>{class i extends kt{_elementRef=n(g);_focusTrapFactory=n(xt);_config;_interactivityChecker=n(At);_ngZone=n(dt);_overlayRef=n(K);_focusMonitor=n(wt);_renderer=n(ut);_platform=n(V);_document=n(N,{optional:!0});_portalOutlet;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_changeDetectorRef=n(Ct);_injector=n(A);_isDestroyed=!1;constructor(){super(),this._config=n(u,{optional:!0})||new u,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(t){this._ariaLabelledByQueue.push(t),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(t){let e=this._ariaLabelledByQueue.indexOf(t);e>-1&&(this._ariaLabelledByQueue.splice(e,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._handleBackdropClicks(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._contentAttached(),e}attachTemplatePortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._contentAttached(),e}attachDomPortal=t=>{this._portalOutlet.hasAttached();let e=this._portalOutlet.attachDomPortal(t);return this._contentAttached(),e};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let o=()=>{r(),s(),t.removeAttribute("tabindex")},r=this._renderer.listen(t,"blur",o),s=this._renderer.listen(t,"mousedown",o)})),t.focus(e)}_focusByCssSelector(t,e){let o=this._elementRef.nativeElement.querySelector(t);o&&this._forceFocus(o,e)}_trapFocus(){this._isDestroyed||mt(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus();break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement()||this._focusDialogContainer();break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this._config.autoFocus);break}},{injector:this._injector})}_restoreFocus(){let t=this._config.restoreFocus,e=null;if(typeof t=="string"?e=this._document.querySelector(t):typeof t=="boolean"?e=t?this._elementFocusedBeforeDialogWasOpened:null:t&&(e=t),this._config.restoreFocus&&e&&typeof e.focus=="function"){let o=z(),r=this._elementRef.nativeElement;(!o||o===this._document.body||o===r||r.contains(o))&&(this._focusMonitor?(this._focusMonitor.focusVia(e,this._closeInteractionType),this._closeInteractionType=null):e.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(){this._elementRef.nativeElement.focus&&this._elementRef.nativeElement.focus()}_containsFocus(){let t=this._elementRef.nativeElement,e=z();return t===e||t.contains(e)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=z()))}_handleBackdropClicks(){this._overlayRef.backdropClick().subscribe(()=>{this._config.disableClose&&this._recaptureFocus()})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=_({type:i,selectors:[["cdk-dialog-container"]],viewQuery:function(e,o){if(e&1&&Dt(O,7),e&2){let r;B(r=j())&&(o._portalOutlet=r.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(e,o){e&2&&x("id",o._config.id||null)("role",o._config.role)("aria-modal",o._config.ariaModal)("aria-labelledby",o._config.ariaLabel?null:o._ariaLabelledByQueue[0])("aria-label",o._config.ariaLabel)("aria-describedby",o._config.ariaDescribedBy||null)},features:[y],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(e,o){e&1&&P(0,zt,0,0,"ng-template",0)},dependencies:[O],styles:[".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}"],encapsulation:2})}return i})(),M=class{overlayRef;config;componentInstance;componentRef;containerInstance;disableClose;closed=new c;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(a,t){this.overlayRef=a,this.config=t,this.disableClose=t.disableClose,this.backdropClick=a.backdropClick(),this.keydownEvents=a.keydownEvents(),this.outsidePointerEvents=a.outsidePointerEvents(),this.id=t.id,this.keydownEvents.subscribe(e=>{e.keyCode===27&&!this.disableClose&&!G(e)&&(e.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{this.disableClose||this.close(void 0,{focusOrigin:"mouse"})}),this._detachSubscription=a.detachments().subscribe(()=>{t.closeOnOverlayDetachments!==!1&&this.close()})}close(a,t){if(this.containerInstance){let e=this.closed;this.containerInstance._closeInteractionType=t?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),e.next(a),e.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(a="",t=""){return this.overlayRef.updateSize({width:a,height:t}),this}addPanelClass(a){return this.overlayRef.addPanelClass(a),this}removePanelClass(a){return this.overlayRef.removePanelClass(a),this}},Gt=new m("DialogScrollStrategy",{providedIn:"root",factory:()=>{let i=n(D);return()=>i.scrollStrategies.block()}}),Ht=new m("DialogData"),Qt=new m("DefaultDialogConfig");var et=(()=>{class i{_overlay=n(D);_injector=n(A);_defaultOptions=n(Qt,{optional:!0});_parentDialog=n(i,{optional:!0,skipSelf:!0});_overlayContainer=n(Et);_idGenerator=n(T);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new c;_afterOpenedAtThisLevel=new c;_ariaHiddenElements=new Map;_scrollStrategy=n(Gt);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=E(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(F(void 0)));constructor(){}open(t,e){let o=this._defaultOptions||new u;e=d(d({},o),e),e.id=e.id||this._idGenerator.getId("cdk-dialog-"),e.id&&this.getDialogById(e.id);let r=this._getOverlayConfig(e),s=this._overlay.create(r),l=new M(s,e),p=this._attachContainer(s,l,e);return l.containerInstance=p,this._attachDialogContent(t,l,p,e),this.openDialogs.length||this._hideNonDialogContentFromAssistiveTechnology(),this.openDialogs.push(l),l.closed.subscribe(()=>this._removeOpenDialog(l,!0)),this.afterOpened.next(l),l}closeAll(){X(this.openDialogs,t=>t.close())}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){X(this._openDialogsAtThisLevel,t=>{t.config.closeOnDestroy===!1&&this._removeOpenDialog(t,!1)}),X(this._openDialogsAtThisLevel,t=>t.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(t){let e=new Rt({positionStrategy:t.positionStrategy||this._overlay.position().global().centerHorizontally().centerVertically(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,direction:t.direction,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,width:t.width,height:t.height,disposeOnNavigation:t.closeOnNavigation});return t.backdropClass&&(e.backdropClass=t.backdropClass),e}_attachContainer(t,e,o){let r=o.injector||o.viewContainerRef?.injector,s=[{provide:u,useValue:o},{provide:M,useValue:e},{provide:K,useValue:t}],l;o.container?typeof o.container=="function"?l=o.container:(l=o.container.type,s.push(...o.container.providers(o))):l=tt;let p=new $(l,o.viewContainerRef,A.create({parent:r||this._injector,providers:s}));return t.attach(p).instance}_attachDialogContent(t,e,o,r){if(t instanceof ht){let s=this._createInjector(r,e,o,void 0),l={$implicit:r.data,dialogRef:e};r.templateContext&&(l=d(d({},l),typeof r.templateContext=="function"?r.templateContext():r.templateContext)),o.attachTemplatePortal(new Ot(t,null,l,s))}else{let s=this._createInjector(r,e,o,this._injector),l=o.attachComponentPortal(new $(t,r.viewContainerRef,s));e.componentRef=l,e.componentInstance=l.instance}}_createInjector(t,e,o,r){let s=t.injector||t.viewContainerRef?.injector,l=[{provide:Ht,useValue:t.data},{provide:M,useValue:e}];return t.providers&&(typeof t.providers=="function"?l.push(...t.providers(e,t,o)):l.push(...t.providers)),t.direction&&(!s||!s.get(Z,null,{optional:!0}))&&l.push({provide:Z,useValue:{value:t.direction,change:nt()}}),A.create({parent:s||r,providers:l})}_removeOpenDialog(t,e){let o=this.openDialogs.indexOf(t);o>-1&&(this.openDialogs.splice(o,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((r,s)=>{r?s.setAttribute("aria-hidden",r):s.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),e&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(){let t=this._overlayContainer.getContainerElement();if(t.parentElement){let e=t.parentElement.children;for(let o=e.length-1;o>-1;o--){let r=e[o];r!==t&&r.nodeName!=="SCRIPT"&&r.nodeName!=="STYLE"&&!r.hasAttribute("aria-live")&&(this._ariaHiddenElements.set(r,r.getAttribute("aria-hidden")),r.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(e){return new(e||i)};static \u0275prov=L({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function X(i,a){let t=i.length;for(;t--;)a(i[t])}var Ft=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=b({type:i});static \u0275inj=f({providers:[et],imports:[H,k,Tt,k]})}return i})();function Wt(i,a){}var W=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;componentFactoryResolver;enterAnimationDuration;exitAnimationDuration},it="mdc-dialog--open",Lt="mdc-dialog--opening",St="mdc-dialog--closing",Yt=150,qt=75,Ut=(()=>{class i extends tt{_animationMode=n(ct,{optional:!0});_animationStateChanged=new lt;_animationsEnabled=this._animationMode!=="NoopAnimations";_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Bt(this._config.enterAnimationDuration)??Yt:0;_exitAnimationDuration=this._animationsEnabled?Bt(this._config.exitAnimationDuration)??qt:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Pt,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Lt,it)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(it),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(it),this._animationsEnabled?(this._hostElement.style.setProperty(Pt,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(St)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(t){this._actionSectionCount+=t,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(Lt,St)}_waitForAnimationToComplete(t,e){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(e,t)}_requestAnimationFrame(t){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(t):t()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(t){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:t})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(t){let e=super.attachComponentPortal(t);return e.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),e}static \u0275fac=(()=>{let t;return function(o){return(t||(t=S(i)))(o||i)}})();static \u0275cmp=_({type:i,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(e,o){e&2&&(Y("id",o._config.id),x("aria-modal",o._config.ariaModal)("role",o._config.role)("aria-labelledby",o._config.ariaLabel?null:o._ariaLabelledByQueue[0])("aria-label",o._config.ariaLabel)("aria-describedby",o._config.ariaDescribedBy||null),w("_mat-animation-noopable",!o._animationsEnabled)("mat-mdc-dialog-container-with-actions",o._actionSectionCount>0))},features:[y],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(e,o){e&1&&(ft(0,"div",0)(1,"div",1),P(2,Wt,0,0,"ng-template",2),_t()())},dependencies:[O],styles:['.mat-mdc-dialog-container{width:100%;height:100%;display:block;box-sizing:border-box;max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;outline:0}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 560px);min-width:var(--mat-dialog-container-min-width, 280px)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, calc(100vw - 32px))}}.mat-mdc-dialog-inner-container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;transition:opacity linear var(--mat-dialog-transition-duration, 0ms);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mdc-dialog--closing .mat-mdc-dialog-inner-container{transition:opacity 75ms linear;transform:none}.mdc-dialog--open .mat-mdc-dialog-inner-container{opacity:1}._mat-animation-noopable .mat-mdc-dialog-inner-container{transition:none}.mat-mdc-dialog-surface{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;width:100%;height:100%;position:relative;overflow-y:auto;outline:0;transform:scale(0.8);transition:transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;box-shadow:var(--mat-dialog-container-elevation-shadow, none);border-radius:var(--mdc-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));background-color:var(--mdc-dialog-container-color, var(--mat-sys-surface, white))}[dir=rtl] .mat-mdc-dialog-surface{text-align:right}.mdc-dialog--open .mat-mdc-dialog-surface,.mdc-dialog--closing .mat-mdc-dialog-surface{transform:none}._mat-animation-noopable .mat-mdc-dialog-surface{transition:none}.mat-mdc-dialog-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mat-mdc-dialog-title{display:block;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:var(--mat-dialog-headline-padding, 6px 24px 13px)}.mat-mdc-dialog-title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mat-mdc-dialog-title{text-align:right}.mat-mdc-dialog-container .mat-mdc-dialog-title{color:var(--mdc-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mdc-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));line-height:var(--mdc-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));font-size:var(--mdc-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));font-weight:var(--mdc-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));letter-spacing:var(--mdc-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em))}.mat-mdc-dialog-content{display:block;flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;max-height:65vh}.mat-mdc-dialog-content>:first-child{margin-top:0}.mat-mdc-dialog-content>:last-child{margin-bottom:0}.mat-mdc-dialog-container .mat-mdc-dialog-content{color:var(--mdc-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));font-family:var(--mdc-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));line-height:var(--mdc-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));font-size:var(--mdc-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));font-weight:var(--mdc-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));letter-spacing:var(--mdc-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em))}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px 0)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0);padding:var(--mat-dialog-actions-padding, 16px 24px);justify-content:var(--mat-dialog-actions-alignment, flex-end)}@media(forced-colors: active){.mat-mdc-dialog-actions{border-top-color:CanvasText}}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}.mat-mdc-dialog-component-host{display:contents}'],encapsulation:2})}return i})(),Pt="--mat-dialog-transition-duration";function Bt(i){return i==null?null:typeof i=="number"?i:i.endsWith("ms")?U(i.substring(0,i.length-2)):i.endsWith("s")?U(i.substring(0,i.length-1))*1e3:i==="0"?0:null}var Q=function(i){return i[i.OPEN=0]="OPEN",i[i.CLOSING=1]="CLOSING",i[i.CLOSED=2]="CLOSED",i}(Q||{}),R=class{_ref;_containerInstance;componentInstance;componentRef;disableClose;id;_afterOpened=new c;_beforeClosed=new c;_result;_closeFallbackTimeout;_state=Q.OPEN;_closeInteractionType;constructor(a,t,e){this._ref=a,this._containerInstance=e,this.disableClose=t.disableClose,this.id=a.id,a.addPanelClass("mat-mdc-dialog-panel"),e._animationStateChanged.pipe(C(o=>o.state==="opened"),I(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),e._animationStateChanged.pipe(C(o=>o.state==="closed"),I(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),a.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),rt(this.backdropClick(),this.keydownEvents().pipe(C(o=>o.keyCode===27&&!this.disableClose&&!G(o)))).subscribe(o=>{this.disableClose||(o.preventDefault(),jt(this,o.type==="keydown"?"keyboard":"mouse"))})}close(a){this._result=a,this._containerInstance._animationStateChanged.pipe(C(t=>t.state==="closing"),I(1)).subscribe(t=>{this._beforeClosed.next(a),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=Q.CLOSING,this._containerInstance._startExitAnimation()}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(a){let t=this._ref.config.positionStrategy;return a&&(a.left||a.right)?a.left?t.left(a.left):t.right(a.right):t.centerHorizontally(),a&&(a.top||a.bottom)?a.top?t.top(a.top):t.bottom(a.bottom):t.centerVertically(),this._ref.updatePosition(),this}updateSize(a="",t=""){return this._ref.updateSize(a,t),this}addPanelClass(a){return this._ref.addPanelClass(a),this}removePanelClass(a){return this._ref.removePanelClass(a),this}getState(){return this._state}_finishDialogClose(){this._state=Q.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function jt(i,a,t){return i._closeInteractionType=a,i.close(t)}var Zt=new m("MatMdcDialogData"),$t=new m("mat-mdc-dialog-default-options"),Kt=new m("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let i=n(D);return()=>i.scrollStrategies.block()}});var ot=(()=>{class i{_overlay=n(D);_defaultOptions=n($t,{optional:!0});_scrollStrategy=n(Kt);_parentDialog=n(i,{optional:!0,skipSelf:!0});_idGenerator=n(T);_dialog=n(et);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new c;_afterOpenedAtThisLevel=new c;dialogConfigClass=W;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=E(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(F(void 0)));constructor(){this._dialogRefConstructor=R,this._dialogContainerType=Ut,this._dialogDataToken=Zt}open(t,e){let o;e=d(d({},this._defaultOptions||new W),e),e.id=e.id||this._idGenerator.getId("mat-mdc-dialog-"),e.scrollStrategy=e.scrollStrategy||this._scrollStrategy();let r=this._dialog.open(t,at(d({},e),{positionStrategy:this._overlay.position().global().centerHorizontally().centerVertically(),disableClose:!0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:e},{provide:u,useValue:e}]},templateContext:()=>({dialogRef:o}),providers:(s,l,p)=>(o=new this._dialogRefConstructor(s,e,p),o.updatePosition(e?.position),[{provide:this._dialogContainerType,useValue:p},{provide:this._dialogDataToken,useValue:l.data},{provide:this._dialogRefConstructor,useValue:o}])}));return o.componentRef=r.componentRef,o.componentInstance=r.componentInstance,this.openDialogs.push(o),this.afterOpened.next(o),o.afterClosed().subscribe(()=>{let s=this.openDialogs.indexOf(o);s>-1&&(this.openDialogs.splice(s,1),this.openDialogs.length||this._getAfterAllClosed().next())}),o}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(t){let e=t.length;for(;e--;)t[e].close()}static \u0275fac=function(e){return new(e||i)};static \u0275prov=L({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),je=(()=>{class i{dialogRef=n(R,{optional:!0});_elementRef=n(g);_dialog=n(ot);ariaLabel;type="button";dialogResult;_matDialogClose;constructor(){}ngOnInit(){this.dialogRef||(this.dialogRef=Vt(this._elementRef,this._dialog.openDialogs))}ngOnChanges(t){let e=t._matDialogClose||t._matDialogCloseResult;e&&(this.dialogResult=e.currentValue)}_onButtonClick(t){jt(this.dialogRef,t.screenX===0&&t.screenY===0?"keyboard":"mouse",this.dialogResult)}static \u0275fac=function(e){return new(e||i)};static \u0275dir=h({type:i,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(e,o){e&1&&bt("click",function(s){return o._onButtonClick(s)}),e&2&&x("aria-label",o.ariaLabel||null)("type",o.type)},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],type:"type",dialogResult:[0,"mat-dialog-close","dialogResult"],_matDialogClose:[0,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[st]})}return i})(),Nt=(()=>{class i{_dialogRef=n(R,{optional:!0});_elementRef=n(g);_dialog=n(ot);constructor(){}ngOnInit(){this._dialogRef||(this._dialogRef=Vt(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(e){return new(e||i)};static \u0275dir=h({type:i})}return i})(),Ne=(()=>{class i extends Nt{id=n(T).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let t;return function(o){return(t||(t=S(i)))(o||i)}})();static \u0275dir=h({type:i,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(e,o){e&2&&Y("id",o.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[y]})}return i})(),Ve=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=h({type:i,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[pt([Mt])]})}return i})(),ze=(()=>{class i extends Nt{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let t;return function(o){return(t||(t=S(i)))(o||i)}})();static \u0275dir=h({type:i,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(e,o){e&2&&w("mat-mdc-dialog-actions-align-start",o.align==="start")("mat-mdc-dialog-actions-align-center",o.align==="center")("mat-mdc-dialog-actions-align-end",o.align==="end")},inputs:{align:"align"},features:[y]})}return i})();function Vt(i,a){let t=i.nativeElement.parentElement;for(;t&&!t.classList.contains("mat-mdc-dialog-container");)t=t.parentElement;return t?a.find(e=>e.id===t.id):null}var Ge=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=b({type:i});static \u0275inj=f({providers:[ot],imports:[Ft,H,k,v,v]})}return i})();var Xt=["*",[["mat-toolbar-row"]]],Jt=["*","mat-toolbar-row"],te=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=h({type:i,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return i})(),ii=(()=>{class i{_elementRef=n(g);_platform=n(V);_document=n(N);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=_({type:i,selectors:[["mat-toolbar"]],contentQueries:function(e,o,r){if(e&1&&vt(r,te,5),e&2){let s;B(s=j())&&(o._toolbarRows=s)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(e,o){e&2&&(gt(o.color?"mat-"+o.color:""),w("mat-toolbar-multiple-rows",o._toolbarRows.length>0)("mat-toolbar-single-row",o._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:Jt,decls:2,vars:0,template:function(e,o){e&1&&(yt(Xt),q(0),q(1,1))},styles:[".mat-toolbar{background:var(--mat-toolbar-container-background-color, var(--mat-sys-surface));color:var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface))}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));font-size:var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));line-height:var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));font-weight:var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));letter-spacing:var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));margin:0}@media(forced-colors: active){.mat-toolbar{outline:solid 1px}}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mdc-text-button-label-text-color:var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));--mdc-outlined-button-label-text-color:var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface))}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height, 64px)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height, 56px)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height, 64px)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height, 56px)}}"],encapsulation:2,changeDetection:0})}return i})();var oi=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=b({type:i});static \u0275inj=f({imports:[v,v]})}return i})();export{R as a,Zt as b,ot as c,je as d,Ne as e,Ve as f,ze as g,Ge as h,te as i,ii as j,oi as k};
