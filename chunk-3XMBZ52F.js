import{a as Ae,b as ke,c as Ve,d as Ne,e as Re,f as Le,g as S,h as Qe,i as et}from"./chunk-H6QSSJLL.js";import{a as xe}from"./chunk-POZMMAKG.js";import{a as $,b as q,c as it,d as ot,e as rt,f as at,g as mt,h as pt,i as dt,j as ct,k as ne,l as le}from"./chunk-MO3NAMEE.js";import{a as L,b as ae,c as tt,e as j,f as O,g as B,h as G,i as nt,j as lt,k as st}from"./chunk-ZHSY4VI5.js";import{b as Je,c as Ke,e as Z,h as re}from"./chunk-V6JY7RLY.js";import{$ as P,$a as D,$c as $e,Ac as we,Cd as oe,Da as h,Db as Ie,Ia as C,Id as E,Jd as b,Mb as Te,O as Se,Oc as A,Pa as c,Pb as Fe,Pc as je,Qb as w,Qc as _,Sc as J,Ua as F,Uc as he,Va as ge,Wa as I,Wc as K,Xa as T,Xc as Oe,Ya as o,Za as r,Zc as Be,_a as f,_c as Ge,aa as g,ad as qe,bb as d,bd as We,cb as v,cd as He,dd as Q,ed as X,fd as Y,gd as ze,hd as Ue,id as k,ja as Pe,jb as x,kb as n,mb as y,md as V,nb as Ee,nd as N,oa as M,od as R,pd as ee,sb as be,sd as Xe,td as Ye,ua as s,ub as z,vb as U,wd as Ze,xd as te,ya as p,yd as ie}from"./chunk-QJHPDPAE.js";var se=(e=>(e.All="All",e.Pending="Pending",e.Processed="Processed",e))(se||{}),W=class l{searchTerm=M("");selectedFilters=M([]);filterPayslips(i,t,e){let a=this.selectedFilters(),m=this.searchTerm();return i.filter(u=>{let ht=t.find(fe=>fe.id===u.employeeId)?.name||"",De=e.find(fe=>fe.id===u.periodId)?.status||"",vt=m===""||ht.toLowerCase().includes(m)||u.periodId.toLowerCase().includes(m),_t=a.length===0||a.includes("All")||a.includes("Pending")&&De==="Pending"||a.includes("Processed")&&De==="Processed";return vt&&_t})}setSearchTerm(i){this.searchTerm.set(i.toLowerCase())}toggleFilter(i){this.selectedFilters.update(t=>{if(i==="All")return t.includes("All")?[]:["All"];let e=t.filter(a=>a!=="All");return e.includes(i)?e=e.filter(a=>a!==i):e.push(i),e})}clearFilters(){this.selectedFilters.set([])}removeFilter(i){this.selectedFilters.update(t=>t.filter(e=>e!==i))}static \u0275fac=function(t){return new(t||l)};static \u0275prov=Se({token:l,factory:l.\u0275fac,providedIn:"root"})};function Dt(l,i){if(l&1){let t=D();o(0,"div",10)(1,"mat-checkbox",13),d("change",function(){let a=P(t).$implicit,m=v();return m.filterService.toggleFilter(a),g(m.filterChange.emit())}),n(2),r()()}if(l&2){let t=i.$implicit,e=v();s(),c("checked",e.filterService.selectedFilters().includes(t)),s(),y(" ",t," ")}}function St(l,i){if(l&1){let t=D();o(0,"mat-chip",14),n(1),o(2,"button",15),d("click",function(){let a=P(t).$implicit,m=v(2);return m.filterService.removeFilter(a),g(m.filterChange.emit())}),o(3,"mat-icon"),n(4,"cancel"),r()()()}if(l&2){let t=i.$implicit;s(),y(" ",t," ")}}function Et(l,i){if(l&1&&(o(0,"mat-toolbar-row",12),I(1,St,5,1,"mat-chip",14,ge),r()),l&2){let t=v();s(),T(t.filterService.selectedFilters())}}var me=class l{constructor(i){this.filterService=i}filterChange=new Pe;addPayPeriod=new Pe;filterTypes=Object.values(se);PayrollFilterType=se;onSearch(i){let t=i.target.value;this.filterService.setSearchTerm(t),this.filterChange.emit()}static \u0275fac=function(t){return new(t||l)(p(W))};static \u0275cmp=h({type:l,selectors:[["app-payroll-toolbar"]],outputs:{filterChange:"filterChange",addPayPeriod:"addPayPeriod"},decls:31,vars:4,consts:[["menu","matMenu"],["filterMenu","matMenu"],[1,"payroll-toolbar"],[1,"search-row"],["matInput","","placeholder","Search",3,"input"],["matSuffix",""],[2,"flex","1 1 auto"],["mat-icon-button","","aria-label","Menu button",3,"matMenuTriggerFor"],["mat-menu-item","",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click"],["mat-menu-item",""],["mat-menu-item","",3,"click","disabled"],[1,"chip-container"],[3,"change","checked"],["highlighted","","color","primary"],["matChipRemove","",3,"click"]],template:function(t,e){if(t&1){let a=D();o(0,"mat-toolbar",2)(1,"mat-toolbar-row",3)(2,"mat-form-field")(3,"input",4),d("input",function(u){return P(a),g(e.onSearch(u))}),r(),o(4,"mat-icon",5),n(5,"search"),r()(),f(6,"span",6),o(7,"button",7)(8,"mat-icon"),n(9,"more_vert"),r()(),o(10,"mat-menu",null,0)(12,"button",8)(13,"mat-icon"),n(14,"filter_list"),r(),o(15,"span"),n(16,"Filters"),r()(),o(17,"button",9),d("click",function(){return P(a),g(e.addPayPeriod.emit())}),o(18,"mat-icon"),n(19,"add"),r(),o(20,"span"),n(21,"Add Pay Period"),r()()(),o(22,"mat-menu",null,1),I(24,Dt,3,2,"div",10,ge),f(26,"mat-divider"),o(27,"button",11),d("click",function(){return P(a),e.filterService.clearFilters(),g(e.filterChange.emit())}),o(28,"span"),n(29,"Clear Filters"),r()()()(),C(30,Et,3,0,"mat-toolbar-row",12),r()}if(t&2){let a=x(11),m=x(23);s(7),c("matMenuTriggerFor",a),s(5),c("matMenuTriggerFor",m),s(12),T(e.filterTypes),s(3),c("disabled",e.filterService.selectedFilters().length===0),s(3),F(e.filterService.selectedFilters().length>0?30:-1)}},dependencies:[N,V,k,q,$,_,je,st,lt,nt,b,E,ct,pt,mt,dt,Z,Ke,Je,ee,R,le,ne],styles:[".payroll-toolbar[_ngcontent-%COMP%]{padding-bottom:1rem}.search-row[_ngcontent-%COMP%]{display:flex;align-items:baseline}.search-row[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{flex-grow:1}.chip-container[_ngcontent-%COMP%]{height:auto;flex-wrap:wrap;padding-top:.5rem;padding-bottom:.5rem;gap:.5rem}"]})};var It=(l,i)=>i.type;function Tt(l,i){if(l&1&&n(0),l&2){let t=v().$implicit;y(" (",t.percentage*100,"%) ")}}function Ft(l,i){if(l&1&&(o(0,"span",3),n(1),z(2,"currency"),C(3,Tt,1,1),r()),l&2){let t=i.$implicit;s(),Ee(" ",t.type,": ",U(2,3,t.amount)," "),s(2),F(t.percentage?3:-1)}}var de=class l{constructor(i,t,e){this.dialogRef=i;this.payslip=t;this.payrollService=e;let a=this.payrollService.getEmployees()().find(m=>m.id===t.employeeId);this.employeeName=a?.name||"Unknown Employee"}employeeName;closeDialog(){this.dialogRef.close()}static \u0275fac=function(t){return new(t||l)(p(L),p(ae),p(S))};static \u0275cmp=h({type:l,selectors:[["app-payslip-detail"]],decls:38,vars:10,consts:[["mat-dialog-title",""],["matListItemIcon",""],["matListItemTitle",""],["matListItemLine",""],["mat-button","",3,"click"]],template:function(t,e){t&1&&(o(0,"h2",0),n(1),r(),o(2,"mat-dialog-content")(3,"mat-list")(4,"mat-list-item")(5,"mat-icon",1),n(6,"person"),r(),o(7,"span",2),n(8),r(),o(9,"span",3),n(10),r()(),f(11,"mat-divider"),o(12,"mat-list-item")(13,"mat-icon",1),n(14,"attach_money"),r(),o(15,"span",2),n(16),z(17,"currency"),r(),o(18,"span",3),n(19),z(20,"currency"),r()(),f(21,"mat-divider"),o(22,"mat-list-item")(23,"mat-icon",1),n(24,"list"),r(),o(25,"span",2),n(26,"Deductions:"),r(),I(27,Ft,4,5,"span",3,It),r(),f(29,"mat-divider"),o(30,"mat-list-item")(31,"mat-icon",1),n(32,"calendar_today"),r(),o(33,"span",2),n(34),r()()()(),o(35,"mat-dialog-actions")(36,"button",4),d("click",function(){return e.closeDialog()}),n(37,"Close"),r()()),t&2&&(s(),y("Payslip - ",e.employeeName,""),s(7),y("Employee ID: ",e.payslip.employeeId,""),s(2),y("Period: ",e.payslip.periodId,""),s(6),y("Gross Pay: ",U(17,6,e.payslip.grossPay),""),s(3),y("Net Pay: ",U(20,8,e.payslip.netPay),""),s(8),T(e.payslip.deductions),s(7),y("Payment Date: ",e.payslip.paymentDate,""))},dependencies:[G,j,B,O,_,A,oe,te,ie,Ze,R,Ye,Xe,b,E,Fe],encapsulation:2})};function At(l,i){l&1&&(o(0,"mat-error"),n(1," Start date is required "),r())}function kt(l,i){l&1&&(o(0,"mat-error"),n(1," End date is required "),r())}var ce=class l{constructor(i,t,e,a){this.fb=i;this.dialogRef=t;this.payrollService=e;this.notification=a;this.payPeriodForm=this.fb.group({startDate:[null,he.required],endDate:[null,he.required]},{validators:this.dateRangeValidator})}payPeriodForm;startDateValue=null;endDateValue=null;generatedId="";dateRangeValidator(i){let t=i.get("startDate")?.value,e=i.get("endDate")?.value;return t&&e&&new Date(t)>new Date(e)?{dateRange:!0}:null}onStartDateChange(i){i.value&&(this.startDateValue=i.value,this.payPeriodForm.patchValue({startDate:this.startDateValue}),this.startDateValue&&(this.generatedId=this.payrollService.generatePayPeriodId(this.startDateValue)),this.payPeriodForm.updateValueAndValidity())}onEndDateChange(i){i.value&&(this.endDateValue=i.value,this.payPeriodForm.patchValue({endDate:this.endDateValue}),this.payPeriodForm.updateValueAndValidity())}hasError(i,t){let e=this.payPeriodForm.get(i);return e?e.hasError(t)&&(e.touched||e.dirty):!1}cancel(){this.dialogRef.close()}save(){if(this.payPeriodForm.invalid){this.notification.error("Please fix the validation errors before saving");return}if(!this.startDateValue||!this.endDateValue){this.notification.error("Both start and end dates are required");return}try{let i=this.payrollService.formatDateString(this.startDateValue),t=this.payrollService.formatDateString(this.endDateValue),e={id:this.generatedId,startDate:i,endDate:t,status:"Pending"};this.dialogRef.close(e)}catch(i){this.notification.error("Failed to create pay period. Please try again."),console.error("Error creating pay period:",i)}}static \u0275fac=function(t){return new(t||l)(p(He),p(L),p(S),p(re))};static \u0275cmp=h({type:l,selectors:[["app-add-pay-period-dialog"]],features:[be([we()])],decls:37,vars:10,consts:[["startPicker",""],["endPicker",""],["mat-dialog-title",""],[1,"pay-period-form",3,"formGroup"],[1,"form-section"],[1,"section-heading"],[1,"form-fields"],[1,"full-width"],["matInput","","placeholder","Autogenerated","disabled","","readonly","",3,"value"],["matInput","","formControlName","startDate",3,"dateChange","matDatepicker"],["matIconSuffix","",3,"for"],[4,"ngIf"],["matInput","","formControlName","endDate",3,"dateChange","matDatepicker","min"],["mat-button","",3,"click"],["mat-flat-button","","color","primary",3,"click","disabled"]],template:function(t,e){if(t&1){let a=D();o(0,"h2",2),n(1,"Add New Pay Period"),r(),o(2,"mat-dialog-content")(3,"form",3)(4,"div",4)(5,"h3",5)(6,"mat-icon"),n(7,"payments"),r(),n(8," Pay Period Details "),r(),o(9,"div",6)(10,"mat-form-field",7)(11,"mat-label"),n(12,"ID"),r(),f(13,"input",8),o(14,"mat-hint"),n(15,"Automatically generated based on dates"),r()(),o(16,"mat-form-field",7)(17,"mat-label"),n(18,"Start Date"),r(),o(19,"input",9),d("dateChange",function(u){return P(a),g(e.onStartDateChange(u))}),r(),f(20,"mat-datepicker-toggle",10)(21,"mat-datepicker",null,0),C(23,At,2,0,"mat-error",11),r(),o(24,"mat-form-field",7)(25,"mat-label"),n(26,"End Date"),r(),o(27,"input",12),d("dateChange",function(u){return P(a),g(e.onEndDateChange(u))}),r(),f(28,"mat-datepicker-toggle",10)(29,"mat-datepicker",null,1),C(31,kt,2,0,"mat-error",11),r()()()()(),o(32,"mat-dialog-actions")(33,"button",13),d("click",function(){return P(a),g(e.cancel())}),n(34,"Cancel"),r(),o(35,"button",14),d("click",function(){return P(a),g(e.save())}),n(36," Add Pay Period "),r()()}if(t&2){let a,m=x(22),u=x(30);s(3),c("formGroup",e.payPeriodForm),s(10),c("value",e.generatedId),s(6),c("matDatepicker",m),s(),c("for",m),s(3),c("ngIf",e.hasError("startDate","required")),s(4),c("matDatepicker",u)("min",((a=e.payPeriodForm.get("startDate"))==null?null:a.value)||null),s(),c("for",u),s(3),c("ngIf",e.hasError("endDate","required")),s(4),c("disabled",e.payPeriodForm.invalid||!e.generatedId)}},dependencies:[w,Te,G,j,B,O,_,A,N,V,Y,Ue,ze,k,q,$,b,E,at,it,ot,rt,Q,Ge,J,K,Oe,X,qe,We],styles:[".pay-period-form[_ngcontent-%COMP%]{min-width:500px}.form-section[_ngcontent-%COMP%]{margin-bottom:24px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:16px}.section-heading[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:8px}.form-fields[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.full-width[_ngcontent-%COMP%]{width:100%}"]})};var Vt=(l,i)=>i.id;function Nt(l,i){l&1&&(o(0,"p"),n(1,"No employees available to assign to this pay period."),r())}function Rt(l,i){if(l&1){let t=D();o(0,"mat-list-item")(1,"mat-checkbox",6),d("change",function(){let a=P(t).$implicit,m=v();return g(m.toggleEmployee(a.id))}),n(2),r()(),f(3,"mat-divider")}if(l&2){let t=i.$implicit,e=v();s(),c("checked",e.isSelected(t.id)),s(),y(" ",t.name," ")}}var ue=class l{constructor(i,t,e){this.dialogRef=i;this.data=t;this.payrollService=e}availableEmployees=[];selectedEmployeeIds=new Set;searchControl=new Be("");filteredEmployees=[];ngOnInit(){this.loadAvailableEmployees(),this.setupSearchFilter()}loadAvailableEmployees(){let t=this.payrollService.getEmployees()().filter(a=>a.status==="Active"),e=new Set(this.payrollService.getEmployeesWithPayslips(this.data.payPeriod.id));this.availableEmployees=t.filter(a=>!e.has(a.id)),this.filteredEmployees=[...this.availableEmployees]}setupSearchFilter(){this.searchControl.valueChanges.subscribe(i=>{this.filterEmployees(i||"")})}filterEmployees(i){if(!i){this.filteredEmployees=[...this.availableEmployees];return}let t=i.toLowerCase();this.filteredEmployees=this.availableEmployees.filter(e=>e.name.toLowerCase().includes(t)||e.role.toLowerCase().includes(t)||e.department&&e.department.toLowerCase().includes(t))}toggleEmployee(i){this.selectedEmployeeIds.has(i)?this.selectedEmployeeIds.delete(i):this.selectedEmployeeIds.add(i)}isSelected(i){return this.selectedEmployeeIds.has(i)}selectAll(){this.filteredEmployees.forEach(i=>this.selectedEmployeeIds.add(i.id))}clearSelection(){this.selectedEmployeeIds.clear()}cancel(){this.dialogRef.close()}confirm(){let i=this.availableEmployees.filter(t=>this.selectedEmployeeIds.has(t.id));this.dialogRef.close(i)}static \u0275fac=function(t){return new(t||l)(p(L),p(ae),p(S))};static \u0275cmp=h({type:l,selectors:[["app-assign-employees-to-period-dialog"]],decls:27,vars:5,consts:[["mat-dialog-title",""],["matInput","","placeholder","Name, role, or dept.",3,"formControl"],["matSuffix",""],[1,"selection-actions"],["mat-button","",3,"click"],["mat-raised-button","","color","primary",3,"click","disabled"],[3,"change","checked"]],template:function(t,e){t&1&&(o(0,"h2",0),n(1,"Assign Employees to Pay Period"),r(),o(2,"mat-dialog-content")(3,"h3"),n(4),r(),o(5,"mat-form-field")(6,"mat-label"),n(7,"Search Employees"),r(),f(8,"input",1),o(9,"mat-icon",2),n(10,"search"),r()(),o(11,"div",3)(12,"button",4),d("click",function(){return e.selectAll()}),n(13,"Select All"),r(),o(14,"button",4),d("click",function(){return e.clearSelection()}),n(15,"Clear"),r(),o(16,"span"),n(17),r()(),C(18,Nt,2,0,"p"),o(19,"mat-list"),I(20,Rt,4,2,null,null,Vt),r()(),o(22,"mat-dialog-actions")(23,"button",4),d("click",function(){return e.cancel()}),n(24,"Cancel"),r(),o(25,"button",5),d("click",function(){return e.confirm()}),n(26," Assign Employees "),r()()),t&2&&(s(4),y("Pay Period: ",e.data.payPeriod.id,""),s(4),c("formControl",e.searchControl),s(9),y("",e.selectedEmployeeIds.size," employees selected"),s(),F(e.filteredEmployees.length===0?18:-1),s(2),T(e.filteredEmployees),s(5),c("disabled",e.selectedEmployeeIds.size===0))},dependencies:[w,G,j,B,O,_,A,oe,te,ie,R,le,ne,ee,N,V,Y,k,q,$,Q,J,K,X,$e,Z,b,E],encapsulation:2})};var gt=class l{constructor(i,t,e,a,m,u){this.route=i;this.dialog=t;this.payrollService=e;this.payrollAnalytics=a;this.filterService=m;this.notification=u;this.route.queryParams.subscribe(ye=>{ye.expandedPeriodId&&this.currentPeriodId.set(ye.expandedPeriodId)}),this.updatePayrollData(),Ie(()=>{this.updatePayrollData()})}payslips=M([]);payPeriods=M([]);filteredPayslips=M([]);payrollGroups=M([]);currentPeriodId=M("");updatePayrollData(){let i=this.payrollService.getPayslips()(),t=this.payrollService.getPayPeriods()(),e=this.payrollService.getEmployees()();this.payslips.set(i),this.payPeriods.set(t);let a=this.filterService.filterPayslips(i,e,t),m=this.payrollAnalytics.getPayslipsWithDetails(a,e,t);this.filteredPayslips.set(m);let u=this.payrollAnalytics.groupPayslipsByPeriod(m,t);this.payrollGroups.set(u),u.length>0&&this.currentPeriodId()===""&&this.currentPeriodId.set(u[0].periodId)}onPayslipClick(i){this.dialog.open(de,{data:i.payslip})}addNewPayPeriod(){this.dialog.open(ce).afterClosed().subscribe(t=>{t&&(this.payrollService.addPayPeriod(t)?(this.notification.success("Pay period added successfully"),this.currentPeriodId.set(t.id),this.updatePayrollData()):this.notification.error("Failed to add pay period. ID already exists."))})}assignEmployeesToPeriod(i){let t=this.payPeriods().find(a=>a.id===i);if(!t){this.notification.error("Pay period not found");return}this.dialog.open(ue,{data:{payPeriod:t},width:"600px"}).afterClosed().subscribe(a=>{a&&a.length>0&&(this.payrollService.addEmployeesToPayPeriod(i,a)?(this.notification.success(`Assigned ${a.length} employee(s) to pay period`),this.updatePayrollData()):this.notification.error("Failed to assign employees to pay period"))})}processPayroll(i){this.payrollService.processPayroll(i.id),this.notification.success(`Payroll for period ${i.id} processed successfully`),this.updatePayrollData()}static \u0275fac=function(t){return new(t||l)(p(xe),p(tt),p(S),p(Qe),p(W),p(re))};static \u0275cmp=h({type:l,selectors:[["app-payroll"]],decls:9,vars:4,consts:[[3,"filterChange","addPayPeriod"],[3,"processPayroll","assignEmployees","viewPayslip","payPeriods","payslipGroups","currentPeriodId","expandable"]],template:function(t,e){t&1&&(o(0,"app-payroll-toolbar",0),d("filterChange",function(){return e.updatePayrollData()})("addPayPeriod",function(){return e.addNewPayPeriod()}),r(),o(1,"mat-card")(2,"mat-card-header")(3,"mat-card-title"),n(4,"Payroll Overview"),r(),o(5,"mat-card-subtitle"),n(6,"Manage pay periods and payslips"),r()(),o(7,"mat-card-content")(8,"app-pay-period-list",1),d("processPayroll",function(m){return e.processPayroll(m)})("assignEmployees",function(m){return e.assignEmployeesToPeriod(m)})("viewPayslip",function(m){return e.onPayslipClick(m)}),r()()()),t&2&&(s(8),c("payPeriods",e.payPeriods())("payslipGroups",e.payrollGroups())("currentPeriodId",e.currentPeriodId())("expandable",!0))},dependencies:[w,Le,Ae,Ve,Re,Ne,ke,_,me,et],styles:["mat-card-header[_ngcontent-%COMP%]{padding:1rem}"]})};export{gt as PayrollComponent};
