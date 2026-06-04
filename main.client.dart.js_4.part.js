((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,E,A={eh:function eh(d,e,f){this.d=d
this.w=e
this.a=f},
kq(){return new A.au(null)},
au:function au(d){this.a=d},
a7:function a7(d,e){this.a=d
this.b=e},
e0:function e0(d){var _=this
_.d="home"
_.e=!1
_.f=d
_.c=_.a=null},
fB:function fB(){},
fC:function fC(d){this.a=d},
fA:function fA(d,e){this.a=d
this.b=e},
fv:function fv(d){this.a=d},
fx:function fx(d){this.a=d},
fw:function fw(d){this.a=d},
fy:function fy(d){this.a=d},
fz:function fz(d){this.a=d},
eY:function eY(){this.a=null},
eZ:function eZ(d){this.a=d},
lg(d,e,f,g){y.Z.a(d)
B.ah(g)
if(g>=2)return d.$2(e,f)
if(g===1)return d.$1(e)
return d.$0()}},C,D
J=c[1]
B=c[0]
E=c[8]
A=a.updateHolder(c[4],A)
C=c[10]
D=c[7]
A.eh.prototype={
B(d){var x=null
return new B.J("nav",x,this.d,x,x,x,this.w,x)}}
A.au.prototype={
b2(){return new A.e0(new A.eY())}}
A.a7.prototype={}
A.e0.prototype={
b3(){this.c1()
var x=y.Y
x=B.aZ(new B.c4(C.r,y.w.a(new A.fB()),x),x.h("U.E"))
this.f.bS(x,new A.fC(this))},
aw(){var x=this.f.a
if(x!=null)x.disconnect()
this.bf()},
bi(){if(this.e)this.S(new A.fv(this))},
B(d){var x,w,v,u,t,s,r=this,q=null,p=r.e?" is-open":"",o=y.i,n=D.jk(B.c([D.i3("Thijs Pirmez logo","nav__logo","images/logo.png")],o),q,"nav__brand",q,"#home",q),m=y.N,l=B.aY(["aria-label","Toggle navigation","aria-expanded",""+r.e],m,m)
l=E.jn(B.c([D.el(B.c([],o),q),D.el(B.c([],o),q),D.el(B.c([],o),q)],o),l,"nav__burger",new A.fx(r))
x=B.c([],o)
for(w=y.v,v=0;v<4;++v){u=C.r[v]
t=u.a
s=r.d===t?" is-active":""
x.push(new D.b7("#"+t,q,"nav__link"+s,q,B.aY(["click",new A.fy(r)],m,w),B.c([new B.L(u.b,q)],o),q))}x=D.W(x,"nav__links")
w=B.aY(["click",new A.fz(r)],m,w)
return new A.eh("nav"+p,B.c([D.W(B.c([n,l,D.W(B.c([x,D.jk(B.c([new B.L("contact \u21b5",q)],o),q,"nav__cta",w,"#contact",q)],o),"nav__menu")],o),"nav__in")],o),q)}}
A.eY.prototype={
bS(d,e){var x,w,v,u,t,s,r
y.a.a(d)
y.q.a(e)
x=b.G
w=x.IntersectionObserver
v=new A.eZ(e)
if(typeof v=="function")B.ht(B.bG("Attempting to rewrap a JS function.",null))
u=function(f,g){return function(h,i){return f(g,h,i,arguments.length)}}(A.lg,v)
u[$.hu()]=v
this.a=B.o(new w(u,{rootMargin:"-45% 0px -50% 0px"}))
for(w=d.length,t=0;t<d.length;d.length===w||(0,B.aE)(d),++t){s=d[t]
r=B.C(B.o(x.document).getElementById(s))
if(r!=null)this.a.observe(r)}}}
var z=a.updateTypes(["a(a7)"])
A.fB.prototype={
$1(d){return y.S.a(d).a},
$S:z+0}
A.fC.prototype={
$1(d){var x=this.a
if(d!==x.d)x.S(new A.fA(x,d))},
$S:5}
A.fA.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.fv.prototype={
$0(){return this.a.e=!1},
$S:0}
A.fx.prototype={
$0(){var x=this.a
return x.S(new A.fw(x))},
$S:0}
A.fw.prototype={
$0(){var x=this.a
return x.e=!x.e},
$S:0}
A.fy.prototype={
$1(d){B.o(d)
return this.a.bi()},
$S:3}
A.fz.prototype={
$1(d){B.o(d)
return this.a.bi()},
$S:3}
A.eZ.prototype={
$2(d,e){var x,w,v
y.c.a(d)
B.o(e)
x=J.ap(y.l.b(d)?d:new B.aq(d,B.a9(d).h("aq<1,l>")))
w=this.a
while(x.j()){v=x.gk()
if(B.b5(v.isIntersecting)&&B.G(B.o(v.target).id).length!==0)w.$1(B.G(B.o(v.target).id))}},
$S:38};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.eh,E.F)
x(A.au,E.a_)
w(B.k,[A.a7,A.eY])
x(A.e0,E.Q)
w(B.aa,[A.fB,A.fC,A.fy,A.fz])
w(B.aS,[A.fA,A.fv,A.fx,A.fw])
x(A.eZ,B.bL)})()
B.bu(b.typeUniverse,JSON.parse('{"eh":{"F":[],"j":[]},"au":{"a_":[],"j":[]},"e0":{"Q":["au"],"Q.T":"au"}}'))
var y=(function rtii(){var x=B.r
return{Z:x("aJ"),i:x("n<j>"),c:x("n<k?>"),l:x("m<l>"),a:x("m<a>"),Y:x("c4<a7,a>"),N:x("a"),w:x("a(a7)"),S:x("a7"),v:x("~(l)"),q:x("~(a)")}})();(function constants(){var x=a.makeConstList
C.aH=new A.a7("home","Home")
C.aF=new A.a7("about","About")
C.aG=new A.a7("education","Education")
C.aI=new A.a7("projects","Projects")
C.r=x([C.aH,C.aF,C.aG,C.aI],B.r("n<a7>"))})()};
(a=>{a["Hyq9ePaz+o4Ais44Vn8VDFujnvM="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_4.part.js.map
