((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,F,E,G,D,A={ec:function ec(d,e,f,g){var _=this
_.d=d
_.e=e
_.w=f
_.a=g},ek:function ek(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},ei:function ei(d,e,f){this.d=d
this.w=e
this.a=f},f3:function f3(d,e){this.a=d
this.b=e},c0:function c0(d,e,f,g){var _=this
_.c=d
_.d=e
_.a=f
_.b=g},am:function am(d,e){this.a=d
this.b=e},d6:function d6(d,e,f,g){var _=this
_.c=d
_.d=e
_.a=f
_.b=g},be:function be(d,e){this.a=d
this.b=e},ae:function ae(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ku(){return new A.av(null)},
br:function br(d,e){this.a=d
this.b=e},
av:function av(d){this.a=d},
e1:function e1(){this.d="all"
this.c=this.a=null},
fD:function fD(d){this.a=d},
fF:function fF(d){this.a=d},
fG:function fG(d,e){this.a=d
this.b=e},
fE:function fE(d,e){this.a=d
this.b=e}},B
C=c[0]
F=c[2]
E=c[8]
G=c[6]
D=c[7]
A=a.updateHolder(c[5],A)
B=c[11]
A.ec.prototype={
B(d){var x=null
return new C.J("article",x,this.d,this.e,x,x,this.w,x)}}
A.ek.prototype={
B(d){var x=null
return new C.J("section",this.c,this.d,x,x,x,this.w,x)}}
A.ei.prototype={
B(d){var x=null
return new C.J("p",x,this.d,x,x,x,this.w,x)}}
A.f3.prototype={
a3(){return"Target."+this.b}}
A.c0.prototype={
a3(){return"LinkType."+this.b}}
A.am.prototype={}
A.d6.prototype={
a3(){return"DownloadStore."+this.b}}
A.be.prototype={}
A.ae.prototype={}
A.br.prototype={}
A.av.prototype={
b2(){return new A.e1()}}
A.e1.prototype={
cc(d){return d==="all"?3:new C.bm(B.q,y.B.a(new A.fD(d)),y.v).gm(0)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=y.v,n=C.aZ(new C.bm(B.q,y.B.a(new A.fF(q)),o),o.h("d.E"))
o=y.F
x=D.W(C.c([D.el(C.c([new C.L("03 / PROJECTS",p)],o),"s-num")],o),"s-head reveal")
w=C.c([],o)
for(v=0;v<3;++v){u=B.Z[v]
t=u.a
s=q.d===t?" is-active":""
w.push(new E.cQ(new A.fG(q,u),"filter"+s,p,C.c([new C.L(u.b,p),new D.bE("cnt",C.c([new C.L("("+q.cc(t)+")",p)],o),p)],o),p))}w=D.W(w,"filterbar reveal")
t=C.c([],o)
for(r=0;r<n.length;++r)t.push(q.c7(n[r],r))
return new A.ek("projects","section",C.c([D.W(C.c([x,w,D.W(t,"proj-grid")],o),"wrap")],o),p)},
c7(d,e){var x,w,v,u,t,s,r,q,p=null,o=y.w,n=C.aY(["--d",""+F.c.bO(e,2)*70+"ms"],o,o),m=d.a,l=y.F,k=d.c
k=D.W(C.c([D.W(C.c([D.i3(m+" icon",p,d.d)],l),"proj__ico"),D.W(C.c([D.W(C.c([new C.L(m,p)],l),"proj__name"),D.W(C.c([new C.L(d.b,p)],l),"proj__path")],l),"proj__head"),D.el(C.c([new C.L(k,p)],l),"proj__badge "+k)],l),"proj__top")
m=C.c([new C.L(d.e,p)],l)
x=C.c([],l)
for(w=d.f,v=w.length,u=0;u<v;++u)x.push(new D.bE(p,C.c([new C.L("#"+w[u],p)],l),p))
x=D.W(x,"proj__tags")
w=C.c([],l)
for(v=d.r,t=v.length,u=0;u<t;++u){s=v[u]
r=s.b
w.push(new D.b7("https://"+s.a,B.v,"proj__link",C.aY(["rel","noreferrer"],o,o),p,C.c([new G.bS(r.c,p),new C.L(" "+r.d,p)],l),p))}m=C.c([k,new A.ei("proj__desc",m,p),x,D.W(w,"proj__foot")],l)
k=d.w
x=k.length
if(x!==0){w=C.c([],l)
for(u=0;u<x;++u){q=k[u]
v=q.b
t=v.d
w.push(new D.b7("https://"+q.a,B.v,"proj__badge-link",C.aY(["rel","noreferrer","aria-label",t],o,o),p,C.c([D.i3(t,p,v.c)],l),p))}m.push(D.W(w,"proj__downloads"))}return new A.ec("proj reveal",new C.cG(p,p,p,p,n),m,p)}}
var z=a.updateTypes(["ao(ae)"])
A.fD.prototype={
$1(d){return y.p.a(d).c===this.a},
$S:z+0}
A.fF.prototype={
$1(d){var x
y.p.a(d)
x=this.a.d
return x==="all"||d.c===x},
$S:z+0}
A.fG.prototype={
$0(){var x=this.a
return x.S(new A.fE(x,this.b))},
$S:0}
A.fE.prototype={
$0(){return this.a.d=this.b.a},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(E.F,[A.ec,A.ek,A.ei])
x(C.dU,[A.f3,A.c0,A.d6])
x(C.k,[A.am,A.be,A.ae,A.br])
w(A.av,E.a_)
w(A.e1,E.Q)
x(C.aa,[A.fD,A.fF])
x(C.aS,[A.fG,A.fE])})()
C.bu(b.typeUniverse,JSON.parse('{"ec":{"F":[],"j":[]},"ek":{"F":[],"j":[]},"ei":{"F":[],"j":[]},"av":{"a_":[],"j":[]},"e1":{"Q":["av"],"Q.T":"av"}}'))
var y={F:C.r("n<j>"),e:C.r("n<be>"),x:C.r("n<am>"),A:C.r("n<a>"),p:C.r("ae"),w:C.r("a"),v:C.r("bm<ae>"),B:C.r("ao(ae)")};(function constants(){var x=a.makeConstList
B.a7=x(["Flutter","Dart","OCR","Computer Vision"],y.A)
B.i=new A.c0("video","video",1,"video")
B.Y=new A.am("youtu.be/AYX27-1b2ZE?si=XEzgsNLnibn_oa8T",B.i)
B.V=new A.am("youtu.be/KLN7sRXRguU?si=sMVv3NUg7LmAL5n9",B.i)
B.a2=x([B.Y,B.V],y.x)
B.a4=x([],y.e)
B.ah=new A.ae("SiloConnect2","Industry, transport","howest","images/projects/app_icon_silo_connect_2.webp","Silo Connect is a Flutter mobile app developed at Howest for Lambrecht Constructie nv, a family-owned bulk transport company. The app uses AI/ML \u2014 specifically YOLOv8 object detection and Google ML Kit \u2014 to automatically identify silo numbers via the smartphone camera and verify that a trailer is connected to the correct silo before unloading. Communication between the app and trailer cabinet happens over TCP/IP, making the entire process hardware-cost-free for the customer. A robust, driver-friendly solution built to eliminate incorrect unloadings without any modifications to existing silo installations.",B.a7,B.a2,B.a4)
B.a1=x(["Flutter","Dart","Firebase"],y.A)
B.R=new A.c0("globe","website",0,"website")
B.X=new A.am("vitalcities.be/en/projects/yet",B.R)
B.T=new A.am("youtu.be/R-_OANgCEP0?si=qQFpKbs3XT3Qrbzr",B.i)
B.S=new A.am("youtu.be/oPsviVpsVCo?si=u68ayW5dbYVrjdIp",B.i)
B.p=new A.c0("news","news",3,"news")
B.W=new A.am("vlaanderen.be/cjm/nl/nieuws/yet-een-app-die-jongeren-mee-laat-denken-over-hun-omgeving",B.p)
B.U=new A.am("hln.be/brugge/onderzoekers-van-howest-ontwikkelen-app-die-bestaande-buurten-via-ai-nieuwe-look-kan-geven~a74bb091/",B.p)
B.a_=x([B.X,B.T,B.S,B.W,B.U],y.x)
B.o=new A.d6("images/badges/google_play_badge.png","Get it on Google Play",2,"playStore")
B.H=new A.be("play.google.com/store/apps/details?id=com.howest.yet",B.o)
B.K=new A.d6("images/badges/app_store_badge.png","Download on the App Store",1,"appStore")
B.J=new A.be("apps.apple.com/us/app/yet-app/id6670743484",B.K)
B.a3=x([B.H,B.J],y.e)
B.ai=new A.ae("YET","Social, Smart city","howest","images/projects/app_icon_yet.webp","YET is a Flutter & Firebase mobile app developed at Howest University that empowers children and young people to actively shape their living environment \u2014 sharing ideas, flagging spatial issues, and participating in local co-creation projects. Paired with a custom web-based admin dashboard, YET was my first end-to-end project built from scratch, and the one that truly marked my growth as a developer.",B.a1,B.a_,B.a3)
B.a0=x(["Flutter","Dart"],y.A)
B.a5=x([],y.x)
B.I=new A.be("play.google.com/store/apps/details?id=com.thpir.myenergydesk&hl=en_US",B.o)
B.a6=x([B.I],y.e)
B.ag=new A.ae("My Energy Desk","Energy, Tool","personal","images/projects/app_icon_my_energy_desk.webp","My Energy Desk is a personal Flutter app \u2014 originally built as a native Android/Java project for Harvard's CS50 final \u2014 that lets users log and monitor home energy consumption across electricity, gas, water, etc. By periodically entering meter readings, the app builds a personal database and visualizes usage trends through graphs over time. 100% free, ad-free, and with Excel import/export built in. I'm still actively developing the app, and has since been converted to Flutter.",B.a0,B.a5,B.a6)
B.q=x([B.ah,B.ai,B.ag],C.r("n<ae>"))
B.aD=new A.br("all","All")
B.aC=new A.br("Howest","Howest")
B.aE=new A.br("personal","Personal")
B.Z=x([B.aD,B.aC,B.aE],C.r("n<br>"))
B.v=new A.f3(1,"blank")})()};
(a=>{a["8UH6TxcQLHvxmUcDHKhtW9kqGJ0="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_6.part.js.map
