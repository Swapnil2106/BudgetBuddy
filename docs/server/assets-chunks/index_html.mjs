export default `<!DOCTYPE html><html lang="en" data-beasties-container><head>
  <meta charset="utf-8">
  <title>BudgetBuddy</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="logo.png">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    </style>
<style>.fa-solid{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:var(--fa-display,inline-block);font-style:normal;font-variant:normal;line-height:1;text-rendering:auto}.fa-solid:before{content:var(--fa)}.fa-solid{font-family:"Font Awesome 6 Free"}.fa-square-plus{--fa:"\\f0fe"}.fa-filter{--fa:"\\f0b0"}.fa-money-bill-transfer{--fa:"\\e528"}.fa-wallet{--fa:"\\f555"}.fa-arrow-down{--fa:"\\f063"}.fa-magnifying-glass{--fa:"\\f002"}.fa-arrow-up{--fa:"\\f062"}.fa-broom{--fa:"\\f51a"}:root{--fa-style-family-brands:"Font Awesome 6 Brands";--fa-font-brands:normal 400 1em/1 "Font Awesome 6 Brands"}@font-face{font-family:"Font Awesome 6 Brands";font-style:normal;font-weight:400;font-display:block;src:url("./media/fa-brands-400-Q3XCMWHQ.woff2") format("woff2"),url("./media/fa-brands-400-R2XQZCET.ttf") format("truetype")}:root{--fa-font-regular:normal 400 1em/1 "Font Awesome 6 Free"}@font-face{font-family:"Font Awesome 6 Free";font-style:normal;font-weight:400;font-display:block;src:url("./media/fa-regular-400-QSNYFYRT.woff2") format("woff2"),url("./media/fa-regular-400-XUOPSR7E.ttf") format("truetype")}:root{--fa-style-family-classic:"Font Awesome 6 Free";--fa-font-solid:normal 900 1em/1 "Font Awesome 6 Free"}@font-face{font-family:"Font Awesome 6 Free";font-style:normal;font-weight:900;font-display:block;src:url("./media/fa-solid-900-5ZUYHGA7.woff2") format("woff2"),url("./media/fa-solid-900-PJNKLK6W.ttf") format("truetype")}.fa-solid{font-weight:900}
</style><link rel="stylesheet" href="styles-JGX4B2HB.css" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="styles-JGX4B2HB.css"></noscript><style ng-app-id="ng">.fixedBtn[_ngcontent-ng-c3420824212]{position:fixed;bottom:8%;left:80%}</style><style ng-app-id="ng">.textColor[_ngcontent-ng-c3879117729]{color:#eee}.logostyle[_ngcontent-ng-c3879117729]{font-family:Barlow Condensed,sans-serif;font-weight:600;font-style:normal;color:#eee;font-size:xx-large}</style><style ng-app-id="ng">.bgBalance[_ngcontent-ng-c862595486]{background-color:#eff3ea}.bgWallet[_ngcontent-ng-c862595486]{background-color:#f7f7f7;height:50px;padding-top:5px;font-size:x-large}.cardColor[_ngcontent-ng-c862595486]{background-color:#222831;color:#fff2f2;width:60%;box-shadow:0 4px 8px #000000e6,0 6px 20px #00000030}.amountSize[_ngcontent-ng-c862595486]{font-size:25px}</style><style ng-app-id="ng">.bgTransactions[_ngcontent-ng-c724076513]{background-color:#222831;height:50px;padding-top:5px;font-size:x-large;color:#f7f7f7}.bgFilter[_ngcontent-ng-c724076513]{background-color:#f7f7f7;height:50px;padding-top:9px;font-size:large}.bgFilterform[_ngcontent-ng-c724076513]{padding-top:1%;padding-left:3%;padding-bottom:1.5%;background-color:#eff3ea;font-weight:600}</style></head>
<body><!--nghm--><script type="text/javascript" id="ng-event-dispatch-contract">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();
</script><script>window.__jsaction_bootstrap(document.body,"ng",["click","submit","input","compositionstart","compositionend","change"],["blur"]);</script>
  <app-root ng-version="19.2.1" _nghost-ng-c3420824212 ngh="2" ng-server-context="ssg"><app-header-component _ngcontent-ng-c3420824212 _nghost-ng-c3879117729 ngh="0"><nav _ngcontent-ng-c3879117729 class="navbar navbar-expand-lg sticky-top" style="background-color: #222831;"><div _ngcontent-ng-c3879117729 class="container-fluid"><a _ngcontent-ng-c3879117729 routerlinkactive="router-link-active" class="navbar-brand mx-5 logostyle" href="/home" jsaction="click:;"><img _ngcontent-ng-c3879117729 src="logo.png" alt="Logo" width="10%" class="d-inline-block"> BudgetBuddy </a></div><div _ngcontent-ng-c3879117729 id="navbarNav" class="collapse navbar-collapse mx-5"><ul _ngcontent-ng-c3879117729 class="navbar-nav nav-underline"><li _ngcontent-ng-c3879117729 class="nav-item mx-5"><a _ngcontent-ng-c3879117729 routerlink="home" routerlinkactive="active-link" class="nav-link textColor" href="/home" jsaction="click:;">OVERVIEW</a></li><li _ngcontent-ng-c3879117729 class="nav-item mx-5"><a _ngcontent-ng-c3879117729 routerlink="report" routerlinkactive="active-link" class="nav-link textColor" href="/report" jsaction="click:;">REPORT</a></li><li _ngcontent-ng-c3879117729 class="nav-item mx-5"><a _ngcontent-ng-c3879117729 routerlink="budget" routerlinkactive="active-link" class="nav-link textColor" href="/budget" jsaction="click:;">BUDGET</a></li></ul></div></nav></app-header-component><router-outlet _ngcontent-ng-c3420824212></router-outlet><app-home-component ngh="0"><app-balance-component _nghost-ng-c862595486 ngh="0"><div _ngcontent-ng-c862595486 class="bgBalance"><div _ngcontent-ng-c862595486 class="container-fluid text-center bgWallet"><i _ngcontent-ng-c862595486 class="fa-solid fa-wallet mx-2"></i><strong _ngcontent-ng-c862595486><span _ngcontent-ng-c862595486>My Wallet</span></strong></div><div _ngcontent-ng-c862595486 class="container px-4 text-center"><div _ngcontent-ng-c862595486 class="row gx-5 mt-3"><div _ngcontent-ng-c862595486 class="col mb-4 mt-3"><div _ngcontent-ng-c862595486 class="card cardColor" style="margin-left: 20%;"><div _ngcontent-ng-c862595486 class="card-body"><h4 _ngcontent-ng-c862595486 class="card-title">EXPENSE</h4><div _ngcontent-ng-c862595486 class="d-flex align-items-center justify-content-center gap-3 mt-4 amountSize"><i _ngcontent-ng-c862595486 class="fa-solid fa-arrow-down" style="color: #A31D1D; background-color: #EC7FA9; padding: 10px; border-radius: 8px;"></i><p _ngcontent-ng-c862595486 class="mb-0">₹0</p></div></div></div></div><div _ngcontent-ng-c862595486 class="col mb-4"><h3 _ngcontent-ng-c862595486 class="p-3">TOTAL BALANCE</h3><h1 _ngcontent-ng-c862595486>₹0</h1><hr _ngcontent-ng-c862595486></div><div _ngcontent-ng-c862595486 class="col mb-4 mt-3"><div _ngcontent-ng-c862595486 class="card cardColor" style="margin-left: 20%;"><div _ngcontent-ng-c862595486 class="card-body"><h4 _ngcontent-ng-c862595486 class="card-title">INCOME</h4><div _ngcontent-ng-c862595486 class="d-flex align-items-center justify-content-center gap-3 mt-4 amountSize"><i _ngcontent-ng-c862595486 class="fa-solid fa-arrow-up text-success" style="color: #1B4D3E; background-color: #B3D8A8; padding: 10px; border-radius: 8px;"></i><p _ngcontent-ng-c862595486 class="mb-0">₹0</p></div></div></div></div></div></div></div></app-balance-component><app-transaction-component _nghost-ng-c724076513 ngh="1"><div _ngcontent-ng-c724076513><div _ngcontent-ng-c724076513><div _ngcontent-ng-c724076513 class="container-fluid text-center bgFilter"><i _ngcontent-ng-c724076513 class="fa-solid fa-magnifying-glass mx-2"></i><strong _ngcontent-ng-c724076513><span _ngcontent-ng-c724076513>Filter Search</span></strong></div><form _ngcontent-ng-c724076513 novalidate class="bgFilterform ng-untouched ng-pristine ng-valid" jsaction="submit:;"><div _ngcontent-ng-c724076513 class="row"><div _ngcontent-ng-c724076513 class="form-group col-md-2"><label _ngcontent-ng-c724076513 for="fromDate" class="form-label">From Date</label><input _ngcontent-ng-c724076513 type="date" formcontrolname="fromDate" placeholder="From Date" class="form-control ng-untouched ng-pristine ng-valid" value jsaction="input:;blur:;compositionstart:;compositionend:;"></div><div _ngcontent-ng-c724076513 class="form-group col-md-2"><label _ngcontent-ng-c724076513 for="toDate" class="form-label">To Date</label><input _ngcontent-ng-c724076513 type="date" formcontrolname="toDate" placeholder="To Date" class="form-control ng-untouched ng-pristine ng-valid" value jsaction="input:;blur:;compositionstart:;compositionend:;"></div><div _ngcontent-ng-c724076513 class="form-group col-md-2"><label _ngcontent-ng-c724076513 for="category" class="form-label">Category</label><select _ngcontent-ng-c724076513 id="category" formcontrolname="category" class="form-select ng-untouched ng-pristine ng-valid" jsaction="change:;blur:;"><option _ngcontent-ng-c724076513 value disabled selected>Select a category</option><option _ngcontent-ng-c724076513 value="Food &amp; Drink"> Food &amp; Drink </option><option _ngcontent-ng-c724076513 value="Shopping"> Shopping </option><option _ngcontent-ng-c724076513 value="Travel"> Travel </option><option _ngcontent-ng-c724076513 value="Rent"> Rent </option><option _ngcontent-ng-c724076513 value="Healthcare"> Healthcare </option><option _ngcontent-ng-c724076513 value="Entertainment"> Entertainment </option><option _ngcontent-ng-c724076513 value="Education"> Education </option><!----></select></div><div _ngcontent-ng-c724076513 class="form-group col-md-2"><label _ngcontent-ng-c724076513 for="amount" class="form-label">Amount</label><input _ngcontent-ng-c724076513 type="number" formcontrolname="amount" placeholder="Amount" class="form-control ng-untouched ng-pristine ng-valid" value jsaction="input:;blur:;compositionstart:;compositionend:;"></div><div _ngcontent-ng-c724076513 class="form-group col-md-2"><label _ngcontent-ng-c724076513 for="paymentMethod" class="form-label">Payment Method</label><select _ngcontent-ng-c724076513 id="paymentMethod" formcontrolname="paymentMethod" class="form-select ng-untouched ng-pristine ng-valid" jsaction="change:;blur:;"><option _ngcontent-ng-c724076513 value disabled selected>Select a Payment Method</option><option _ngcontent-ng-c724076513 value="In Cash"> In Cash </option><option _ngcontent-ng-c724076513 value="Credit Card"> Credit Card </option><option _ngcontent-ng-c724076513 value="Debit Card"> Debit Card </option><option _ngcontent-ng-c724076513 value="Net Banking"> Net Banking </option><option _ngcontent-ng-c724076513 value="Online UPI"> Online UPI </option><!----></select></div><div _ngcontent-ng-c724076513 class="col-md-2 mt-4"><button _ngcontent-ng-c724076513 type="button" title="Search Filter" class="btn btn btn-outline-success mx-2" jsaction="click:;"><i _ngcontent-ng-c724076513 class="fa-solid fa-filter"></i></button><button _ngcontent-ng-c724076513 type="button" title="Clear Filter" class="btn btn btn-outline-danger mx-2" jsaction="click:;"><i _ngcontent-ng-c724076513 class="fa-solid fa-broom"></i></button></div></div></form></div><div _ngcontent-ng-c724076513 class="container-fluid text-center bgTransactions"><i _ngcontent-ng-c724076513 class="fa-solid fa-money-bill-transfer mx-2"></i><span _ngcontent-ng-c724076513>My Transactions</span></div><table _ngcontent-ng-c724076513 class="table table-hover text-center" style="background-color: #EFF3EA;"><thead _ngcontent-ng-c724076513><tr _ngcontent-ng-c724076513><th _ngcontent-ng-c724076513 scope="col">Date</th><th _ngcontent-ng-c724076513 scope="col">Category</th><th _ngcontent-ng-c724076513 scope="col">Amount</th><th _ngcontent-ng-c724076513 scope="col">Payment Method</th><th _ngcontent-ng-c724076513 scope="col">Action</th></tr></thead><tbody _ngcontent-ng-c724076513><!----></tbody></table></div><div _ngcontent-ng-c724076513 id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" class="modal fade"><div _ngcontent-ng-c724076513 class="modal-dialog"><div _ngcontent-ng-c724076513 class="modal-content"><div _ngcontent-ng-c724076513 class="modal-header"><h1 _ngcontent-ng-c724076513 id="staticBackdropLabel" class="modal-title fs-5">Update Transaction</h1><button _ngcontent-ng-c724076513 type="button" data-bs-dismiss="modal" aria-label="Close" class="btn-close"></button></div><div _ngcontent-ng-c724076513 class="modal-body"><form _ngcontent-ng-c724076513 novalidate class="ng-untouched ng-pristine ng-invalid" jsaction="submit:;"><div _ngcontent-ng-c724076513 class="form-group mb-2"><label _ngcontent-ng-c724076513 for="amount" class="form-label">Amount</label><div _ngcontent-ng-c724076513 class="input-group"><input _ngcontent-ng-c724076513 type="number" id="amount" formcontrolname="amount" placeholder="Enter your Amount" class="form-control ng-untouched ng-pristine ng-invalid" value jsaction="input:;blur:;compositionstart:;compositionend:;"><div _ngcontent-ng-c724076513 class="input-group-append"><span _ngcontent-ng-c724076513 class="input-group-text">₹</span></div></div></div><div _ngcontent-ng-c724076513 class="form-group mb-2"><label _ngcontent-ng-c724076513 for="category" class="form-label">Category</label><select _ngcontent-ng-c724076513 id="category" formcontrolname="category" class="form-select ng-untouched ng-pristine ng-invalid" jsaction="change:;blur:;"><option _ngcontent-ng-c724076513 value disabled selected>Select a category</option><option _ngcontent-ng-c724076513 value="Food &amp; Drink"> Food &amp; Drink </option><option _ngcontent-ng-c724076513 value="Shopping"> Shopping </option><option _ngcontent-ng-c724076513 value="Travel"> Travel </option><option _ngcontent-ng-c724076513 value="Rent"> Rent </option><option _ngcontent-ng-c724076513 value="Healthcare"> Healthcare </option><option _ngcontent-ng-c724076513 value="Entertainment"> Entertainment </option><option _ngcontent-ng-c724076513 value="Education"> Education </option><!----></select></div><div _ngcontent-ng-c724076513 class="form-group mb-2"><label _ngcontent-ng-c724076513 for="paymentMethod" class="form-label">Payment Method</label><select _ngcontent-ng-c724076513 id="paymentMethod" formcontrolname="paymentMethod" class="form-select ng-untouched ng-pristine ng-invalid" jsaction="change:;blur:;"><option _ngcontent-ng-c724076513 value disabled selected>Select a Payment Method</option><option _ngcontent-ng-c724076513 value="In Cash"> In Cash </option><option _ngcontent-ng-c724076513 value="Credit Card"> Credit Card </option><option _ngcontent-ng-c724076513 value="Debit Card"> Debit Card </option><option _ngcontent-ng-c724076513 value="Net Banking"> Net Banking </option><option _ngcontent-ng-c724076513 value="Online UPI"> Online UPI </option><!----></select></div><div _ngcontent-ng-c724076513 class="form-group mb-2"><label _ngcontent-ng-c724076513 for="date" class="form-label">Date</label><input _ngcontent-ng-c724076513 type="date" id="date" formcontrolname="date" class="form-control ng-untouched ng-pristine ng-invalid" max="2025-03-09" value jsaction="input:;blur:;compositionstart:;compositionend:;"></div></form></div><div _ngcontent-ng-c724076513 class="modal-footer"><button _ngcontent-ng-c724076513 type="button" data-bs-dismiss="modal" class="btn btn-danger btn-sm">Close</button><button _ngcontent-ng-c724076513 type="button" data-bs-dismiss="modal" class="btn btn-warning btn-sm" jsaction="click:;">Update</button></div></div></div></div></app-transaction-component></app-home-component><!----><div _ngcontent-ng-c3420824212 class="container-fluid fixedBtn"><button _ngcontent-ng-c3420824212 routerlink="addNew" class="btn btn-dark" tabindex="0" jsaction="click:;"><i _ngcontent-ng-c3420824212 class="fa-solid fa-square-plus mx-2"></i><span _ngcontent-ng-c3420824212>New Transaction</span></button><!----></div></app-root>
<script src="polyfills-FFHMD2TL.js" type="module"></script><script src="main-SURQ5GBW.js" type="module"></script>

<script id="ng-state" type="application/json">{"__nghData__":[{},{"t":{"23":"t0","34":"t1","58":"t2","82":"t3","89":"t4"},"c":{"23":[{"i":"t0","r":1,"x":7}],"34":[{"i":"t1","r":1,"x":5}],"58":[],"82":[{"i":"t3","r":1,"x":7}],"89":[{"i":"t4","r":1,"x":5}]}},{"c":{"1":[{"i":"c197463129","r":1}],"3":[{"i":"t5","r":1}]},"t":{"3":"t5"}}]}</script></body></html>`;