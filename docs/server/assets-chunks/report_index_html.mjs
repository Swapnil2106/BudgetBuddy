export default `<!DOCTYPE html><html lang="en" data-beasties-container><head>
  <meta charset="utf-8">
  <title>BudgetBuddy</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="logo.png">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    </style>
<style>.fa-solid{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:var(--fa-display,inline-block);font-style:normal;font-variant:normal;line-height:1;text-rendering:auto}.fa-solid:before{content:var(--fa)}.fa-solid{font-family:"Font Awesome 6 Free"}.fa-2xl{font-size:2em;line-height:.03125em;vertical-align:-.1875em}.fa-arrow-trend-down{--fa:"\\e097"}:root{--fa-style-family-brands:"Font Awesome 6 Brands";--fa-font-brands:normal 400 1em/1 "Font Awesome 6 Brands"}@font-face{font-family:"Font Awesome 6 Brands";font-style:normal;font-weight:400;font-display:block;src:url("./media/fa-brands-400-Q3XCMWHQ.woff2") format("woff2"),url("./media/fa-brands-400-R2XQZCET.ttf") format("truetype")}:root{--fa-font-regular:normal 400 1em/1 "Font Awesome 6 Free"}@font-face{font-family:"Font Awesome 6 Free";font-style:normal;font-weight:400;font-display:block;src:url("./media/fa-regular-400-QSNYFYRT.woff2") format("woff2"),url("./media/fa-regular-400-XUOPSR7E.ttf") format("truetype")}:root{--fa-style-family-classic:"Font Awesome 6 Free";--fa-font-solid:normal 900 1em/1 "Font Awesome 6 Free"}@font-face{font-family:"Font Awesome 6 Free";font-style:normal;font-weight:900;font-display:block;src:url("./media/fa-solid-900-5ZUYHGA7.woff2") format("woff2"),url("./media/fa-solid-900-PJNKLK6W.ttf") format("truetype")}.fa-solid{font-weight:900}
</style><link rel="stylesheet" href="styles-JGX4B2HB.css" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="styles-JGX4B2HB.css"></noscript><style ng-app-id="ng">.fixedBtn[_ngcontent-ng-c3420824212]{position:fixed;bottom:8%;left:80%}</style><style ng-app-id="ng">.textColor[_ngcontent-ng-c3879117729]{color:#eee}.logostyle[_ngcontent-ng-c3879117729]{font-family:Barlow Condensed,sans-serif;font-weight:600;font-style:normal;color:#eee;font-size:xx-large}</style><style ng-app-id="ng">.pieChart[_ngcontent-ng-c792393006]{width:30%;height:30%;margin-left:35%}.typeClass[_ngcontent-ng-c792393006]{padding-top:2%;padding-left:3%;padding-right:3%;background-color:#eff3ea}</style></head>
<body><!--nghm--><script type="text/javascript" id="ng-event-dispatch-contract">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();
</script><script>window.__jsaction_bootstrap(document.body,"ng",["click"],[]);</script>
  <app-root ng-version="19.2.1" _nghost-ng-c3420824212 ngh="2" ng-server-context="ssg"><app-header-component _ngcontent-ng-c3420824212 _nghost-ng-c3879117729 ngh="0"><nav _ngcontent-ng-c3879117729 class="navbar navbar-expand-lg sticky-top" style="background-color: #222831;"><div _ngcontent-ng-c3879117729 class="container-fluid"><a _ngcontent-ng-c3879117729 routerlinkactive="router-link-active" class="navbar-brand mx-5 logostyle" href="/home" jsaction="click:;"><img _ngcontent-ng-c3879117729 src="logo.png" alt="Logo" width="10%" class="d-inline-block"> BudgetBuddy </a></div><div _ngcontent-ng-c3879117729 id="navbarNav" class="collapse navbar-collapse mx-5"><ul _ngcontent-ng-c3879117729 class="navbar-nav nav-underline"><li _ngcontent-ng-c3879117729 class="nav-item mx-5"><a _ngcontent-ng-c3879117729 routerlink="home" routerlinkactive="active-link" class="nav-link textColor" href="/home" jsaction="click:;">OVERVIEW</a></li><li _ngcontent-ng-c3879117729 class="nav-item mx-5"><a _ngcontent-ng-c3879117729 routerlink="report" routerlinkactive="active-link" class="nav-link textColor active-link" href="/report" jsaction="click:;">REPORT</a></li><li _ngcontent-ng-c3879117729 class="nav-item mx-5"><a _ngcontent-ng-c3879117729 routerlink="budget" routerlinkactive="active-link" class="nav-link textColor" href="/budget" jsaction="click:;">BUDGET</a></li></ul></div></nav></app-header-component><router-outlet _ngcontent-ng-c3420824212></router-outlet><app-report-component _nghost-ng-c792393006 ngh="1"><div _ngcontent-ng-c792393006 style="background-color: #F7F7F7;"><div _ngcontent-ng-c792393006 class="typeClass"><div _ngcontent-ng-c792393006 class="row" style="padding-bottom: 1%;"><div _ngcontent-ng-c792393006 class="col-md-4 text-center"><button _ngcontent-ng-c792393006 id="expense" class="btn btn-dark" jsaction="click:;">Expense</button></div><div _ngcontent-ng-c792393006 class="col-md-4 text-center">|</div><div _ngcontent-ng-c792393006 class="col-md-4 text-center"><button _ngcontent-ng-c792393006 id="income" class="btn btn-light" jsaction="click:;">Income</button></div></div><hr _ngcontent-ng-c792393006></div><div _ngcontent-ng-c792393006 class="text-center"><div _ngcontent-ng-c792393006 class="d-flex align-items-center justify-content-center gap-3"><h3 _ngcontent-ng-c792393006 class="mb-0" style="text-decoration: underline;">Expense</h3><i _ngcontent-ng-c792393006 class="fa-solid fa-arrow-trend-down fa-2xl" style="color: #A31D1D;"></i></div><!----><!----><div _ngcontent-ng-c792393006 class="pieChart mt-2"><canvas _ngcontent-ng-c792393006 id="categoryPieChart"></canvas></div></div></div></app-report-component><!----><div _ngcontent-ng-c3420824212 class="container-fluid fixedBtn"><!----></div></app-root>
<script src="polyfills-FFHMD2TL.js" type="module"></script><script src="main-SURQ5GBW.js" type="module"></script>

<script id="ng-state" type="application/json">{"__nghData__":[{},{"t":{"13":"t0","14":"t1"},"c":{"13":[{"i":"t0","r":1}],"14":[]}},{"c":{"1":[{"i":"c792393006","r":1}],"3":[]},"t":{"3":"t2"}}]}</script></body></html>`;