import{a as Z,b as U,c as de}from"./chunk-4YH4PB5R.js";import{b as Pe,c as _e,d as ve,e as Me,f as ge,g as Se}from"./chunk-HJKTOPK2.js";import{A as be,B as Fe,a as ye,b as ue,c as fe,d as F,e as D,u as Ce,v as he,w as Ie,y as xe,z as Te}from"./chunk-IXSSMF7G.js";import{a as ae,d as le,g as ne,h as se,i as me,j,l as B}from"./chunk-IHJXRI23.js";import{Ab as A,Cd as b,Da as s,Dd as $,Fd as R,Gd as W,Ha as d,Hb as I,Hd as pe,Ib as x,Jd as ce,Kd as O,Ld as G,Oa as S,Pd as H,Rb as re,Ta as L,V as ie,_a as C,cc as V,db as k,eb as X,fb as v,ga as u,gb as M,ha as f,hb as r,ib as o,jb as P,kb as h,ld as oe,mb as p,md as N,nb as y,nd as T,qa as Q,wa as _,wb as Y,xb as a,yb as w,zb as c}from"./chunk-LGPHYK4G.js";var q=(t=>(t.All="All",t.Pending="Pending",t.Processed="Processed",t))(q||{}),E=class l{searchTerm=_("");selectedFilters=_([]);filterPayslips(i,e,t){let n=this.selectedFilters(),m=this.searchTerm();return i.filter(g=>{let Ve=e.find(K=>K.id===g.employeeId)?.name||"",te=t.find(K=>K.id===g.periodId)?.status||"",Ne=m===""||Ve.toLowerCase().includes(m)||g.periodId.toLowerCase().includes(m),je=n.length===0||n.includes("All")||n.includes("Pending")&&te==="Pending"||n.includes("Processed")&&te==="Processed";return Ne&&je})}setSearchTerm(i){this.searchTerm.set(i.toLowerCase())}toggleFilter(i){this.selectedFilters.update(e=>{if(i==="All")return e.includes("All")?[]:["All"];let t=e.filter(n=>n!=="All");return t.includes(i)?t=t.filter(n=>n!==i):t.push(i),t})}clearFilters(){this.selectedFilters.set([])}removeFilter(i){this.selectedFilters.update(e=>e.filter(t=>t!==i))}static \u0275fac=function(e){return new(e||l)};static \u0275prov=ie({token:l,factory:l.\u0275fac,providedIn:"root"})};function $e(l,i){if(l&1){let e=h();r(0,"button",7),p("click",function(){let n=u(e).$implicit,m=y();return m.filterService.toggleFilter(n),f(m.filterChange.emit())}),r(1,"mat-icon"),a(2),o(),r(3,"span"),a(4),o()()}if(l&2){let e=i.$implicit,t=y();s(2),w(t.filterService.selectedFilters().includes(e)?"check_box":"check_box_outline_blank"),s(2),w(e)}}function Re(l,i){if(l&1){let e=h();r(0,"mat-chip"),a(1),r(2,"button",10),p("click",function(){let n=u(e).$implicit,m=y(2);return m.filterService.removeFilter(n),f(m.filterChange.emit())}),r(3,"mat-icon"),a(4,"cancel"),o()()()}if(l&2){let e=i.$implicit;s(),c(" ",e," ")}}function We(l,i){if(l&1&&(r(0,"mat-toolbar-row"),v(1,Re,5,1,"mat-chip",null,X),o()),l&2){let e=y();s(),M(e.filterService.selectedFilters())}}var z=class l{constructor(i){this.filterService=i}filterChange=new Q;addPayPeriod=new Q;filterTypes=Object.values(q);PayrollFilterType=q;onSearch(i){let e=i.target.value;this.filterService.setSearchTerm(e),this.filterChange.emit()}static \u0275fac=function(e){return new(e||l)(d(E))};static \u0275cmp=S({type:l,selectors:[["app-payroll-toolbar"]],outputs:{filterChange:"filterChange",addPayPeriod:"addPayPeriod"},decls:33,vars:4,consts:[["menu","matMenu"],["filterMenu","matMenu"],["matInput","","placeholder","Search payslips",3,"input"],["matSuffix",""],[2,"flex","1 1 auto"],["mat-icon-button","","aria-label","Menu button",3,"matMenuTriggerFor"],["mat-menu-item","",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click"],["mat-menu-item",""],["mat-menu-item","",3,"click","disabled"],["matChipRemove","",3,"click"]],template:function(e,t){if(e&1){let n=h();r(0,"mat-toolbar")(1,"mat-toolbar-row")(2,"mat-form-field")(3,"mat-label"),a(4,"Search"),o(),r(5,"input",2),p("input",function(g){return u(n),f(t.onSearch(g))}),o(),r(6,"mat-icon",3),a(7,"search"),o()(),P(8,"span",4),r(9,"button",5)(10,"mat-icon"),a(11,"more_vert"),o()(),r(12,"mat-menu",null,0)(14,"button",6)(15,"mat-icon"),a(16,"filter_list"),o(),r(17,"span"),a(18,"Filters"),o()(),r(19,"button",7),p("click",function(){return u(n),f(t.addPayPeriod.emit())}),r(20,"mat-icon"),a(21,"add"),o(),r(22,"span"),a(23,"Add Pay Period"),o()()(),r(24,"mat-menu",null,1),v(26,$e,5,2,"button",8,X),P(28,"mat-divider"),r(29,"button",9),p("click",function(){return u(n),t.filterService.clearFilters(),f(t.filterChange.emit())}),r(30,"span"),a(31,"Clear Filters"),o()()()(),L(32,We,3,0,"mat-toolbar-row"),o()}if(e&2){let n=Y(13),m=Y(25);s(9),C("matMenuTriggerFor",n),s(5),C("matMenuTriggerFor",m),s(12),M(t.filterTypes),s(3),C("disabled",t.filterService.selectedFilters().length===0),s(3),k(t.filterService.selectedFilters().length>0?32:-1)}},dependencies:[se,ne,ae,le,_e,Pe,T,N,fe,ue,ye,D,F,Se,Me,ve,ge,B,j,me,$,b],encapsulation:2})};var Ue=(l,i)=>i.type;function qe(l,i){if(l&1&&a(0),l&2){let e=y().$implicit;c(" (",e.percentage*100,"%) ")}}function ze(l,i){if(l&1&&(r(0,"span",3),a(1),I(2,"currency"),L(3,qe,1,1),o()),l&2){let e=i.$implicit;s(),A(" ",e.type,": ",x(2,3,e.amount)," "),s(2),k(e.percentage?3:-1)}}var J=class l{constructor(i,e,t){this.dialogRef=i;this.payslip=e;this.payrollService=t;let n=this.payrollService.getEmployees()().find(m=>m.id===e.employeeId);this.employeeName=n?.name||"Unknown Employee"}employeeName;closeDialog(){this.dialogRef.close()}static \u0275fac=function(e){return new(e||l)(d(Ce),d(he),d(U))};static \u0275cmp=S({type:l,selectors:[["app-payslip-detail"]],decls:38,vars:10,consts:[["mat-dialog-title",""],["matListItemIcon",""],["matListItemTitle",""],["matListItemLine",""],["mat-button","",3,"click"]],template:function(e,t){e&1&&(r(0,"h2",0),a(1),o(),r(2,"mat-dialog-content")(3,"mat-list")(4,"mat-list-item")(5,"mat-icon",1),a(6,"person"),o(),r(7,"span",2),a(8),o(),r(9,"span",3),a(10),o()(),P(11,"mat-divider"),r(12,"mat-list-item")(13,"mat-icon",1),a(14,"attach_money"),o(),r(15,"span",2),a(16),I(17,"currency"),o(),r(18,"span",3),a(19),I(20,"currency"),o()(),P(21,"mat-divider"),r(22,"mat-list-item")(23,"mat-icon",1),a(24,"list"),o(),r(25,"span",2),a(26,"Deductions:"),o(),v(27,ze,4,5,"span",3,Ue),o(),P(29,"mat-divider"),r(30,"mat-list-item")(31,"mat-icon",1),a(32,"calendar_today"),o(),r(33,"span",2),a(34),o()()()(),r(35,"mat-dialog-actions")(36,"button",4),p("click",function(){return t.closeDialog()}),a(37,"Close"),o()()),e&2&&(s(),c("Payslip - ",t.employeeName,""),s(7),c("Employee ID: ",t.payslip.employeeId,""),s(2),c("Period: ",t.payslip.periodId,""),s(6),c("Gross Pay: ",x(17,6,t.payslip.grossPay),""),s(3),c("Net Pay: ",x(20,8,t.payslip.netPay),""),s(8),M(t.payslip.deductions),s(7),c("Payment Date: ",t.payslip.paymentDate,""))},dependencies:[Fe,xe,be,Te,T,oe,H,O,G,ce,b,W,R,D,F,V],encapsulation:2})};var Je=(l,i)=>i.payslip.id;function Ke(l,i){if(l&1){let e=h();r(0,"mat-list-item",1),p("click",function(){let n=u(e).$implicit,m=y();return f(m.onPayslipClick(n.payslip))}),r(1,"span",2),a(2),o(),r(3,"span",3),a(4),I(5,"currency"),o(),r(6,"div",4)(7,"mat-chip",5),a(8),o(),r(9,"button",6),p("click",function(n){let m=u(e).$implicit;return y().regeneratePayslip(m.payslip),f(n.stopPropagation())}),r(10,"mat-icon"),a(11,"refresh"),o()()()(),P(12,"mat-divider")}if(l&2){let e=i.$implicit,t=y();s(2),w(e.employeeName),s(2),A(" Period: ",e.payslip.periodId," | Net Pay: ",x(5,5,e.payslip.netPay)," "),s(3),C("color",e.periodStatus===t.PayPeriodStatus.Pending?"warn":"primary"),s(),c(" ",e.periodStatus," ")}}var Ae=class l{constructor(i,e,t,n){this.payrollService=i;this.payrollAnalytics=e;this.dialog=t;this.filterService=n;this.updatePayrollData(),re(()=>{this.updatePayrollData()})}payslips=_([]);payPeriods=_([]);filteredPayslips=_([]);PayPeriodStatus=Z;updatePayrollData(){let i=this.payrollService.getPayslips()(),e=this.payrollService.getPayPeriods()();this.payslips.set(i),this.payPeriods.set(e),this.updateFilteredPayslips()}onPayslipClick(i){this.dialog.open(J,{data:i})}regeneratePayslip(i){console.log("Regenerate payslip:",i)}addNewPayPeriod(){console.log("Adding new pay period")}updateFilteredPayslips(){let i=this.payrollService.getEmployees()(),e=this.filterService.filterPayslips(this.payslips(),i,this.payPeriods()),t=this.payrollAnalytics.getPayslipsWithDetails(e,i,this.payPeriods());this.filteredPayslips.set(t)}static \u0275fac=function(e){return new(e||l)(d(U),d(de),d(Ie),d(E))};static \u0275cmp=S({type:l,selectors:[["app-payroll-list"]],decls:4,vars:0,consts:[[3,"filterChange","addPayPeriod"],[3,"click"],["matListItemTitle",""],["matListItemLine",""],["matListItemMeta",""],["highlighted","",3,"color"],["mat-icon-button","",3,"click"]],template:function(e,t){e&1&&(r(0,"app-payroll-toolbar",0),p("filterChange",function(){return t.updateFilteredPayslips()})("addPayPeriod",function(){return t.addNewPayPeriod()}),o(),r(1,"mat-list"),v(2,Ke,13,7,null,null,Je),o()),e&2&&(s(2),M(t.filteredPayslips()))},dependencies:[H,O,G,b,W,R,pe,D,F,$,T,N,B,j,V,z],encapsulation:2})};export{Ae as PayrollListComponent};
