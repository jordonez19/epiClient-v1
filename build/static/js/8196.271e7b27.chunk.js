/*! For license information please see 8196.271e7b27.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunknowa=self.webpackChunknowa||[]).push([[8196],{70198:function(e,t,r){r.r(t),r.d(t,{default:function(){return N}});var s=r(29439),n=r(72791),a=r(2461),c=r(89743),l=r(2677),i=r(9140),o=r(62591),d=r(43360),m=r(8396),u=r(12576),p=r(57644),f=r(323),h=r(43504),x=r(59434),j=[{id:"1",src:r(18765),name:"party wear",Size:"Size",XXl:"XXL",bg:"Color",color:" purple color",Quantity:"2",prices:"80.00",stockbg:"danger ",stock:"Out of stock"},{id:"2",src:r(80735),name:"party wear",Size:"Size",XXl:"XXL",bg:"Color",color:"purple color",Quantity:"2",prices:"50.30",stockbg:"success",stock:"In stock"},{id:"3",src:r(98030),name:"party wear",Size:"Size",XXl:"XXL",bg:"Color",color:"purple color",Quantity:"2",prices:"79.90",stockbg:"danger ",stock:"Out of stock"},{id:"4",src:r(74134),name:"party wear",Size:"Size",XXl:"XXL",bg:"Color",color:"purple color",Quantity:"2",prices:"79.90",stockbg:"success",stock:"In stock"}],b=r(63954),y=r(80184),v=function(){var e=function(e){if(0===e.target.parentElement.querySelector("input").value)return!1;e.target.parentElement.querySelector("input").value--},t=function(e){e.target.parentElement.querySelector("input").value++};var r=n.useState(j),v=(0,s.Z)(r,2),N=v[0],g=v[1],Z=(0,n.useState)(0),w=(0,s.Z)(Z,2),S=w[0],P=w[1],k=(0,x.v9)((function(e){return e.cartreducer.carts})),$=(0,x.I0)(),C=(0,n.useState)(null),E=(0,s.Z)(C,2),X=E[0],z=E[1],R=Boolean(X);console.log(R);var T=function(){z(null)},F=function(e){$((0,b.HG)(e))},O=function(){var e=0;k.map((function(t){e=t.price*t.qnty+e})),P(e)};return(0,n.useEffect)((function(){O()}),[O]),(0,y.jsxs)("div",{children:[(0,y.jsxs)("div",{className:"breadcrumb-header justify-content-between",children:[(0,y.jsx)("div",{className:"left-content",children:(0,y.jsx)("span",{className:"main-content-title mg-b-0 mg-b-lg-1",children:"CART"})}),(0,y.jsx)("div",{className:"justify-content-center mt-2",children:(0,y.jsxs)(a.Z,{className:"breadcrumb",children:[(0,y.jsx)(a.Z.Item,{className:"breadcrumb-item tx-15",href:"#",children:"Ecommerce"}),(0,y.jsx)(a.Z.Item,{className:"breadcrumb-item ",active:!0,"aria-current":"page",children:"Cart"})]})})]}),(0,y.jsxs)(c.Z,{children:[(0,y.jsx)(l.Z,{md:12,xl:9,lg:12,children:(0,y.jsxs)(i.Z,{children:[(0,y.jsx)(i.Z.Body,{children:(0,y.jsx)("div",{className:"product-details table-responsive text-nowrap",children:(0,y.jsxs)(o.Z,{className:"table table-bordered table-hover mb-0 text-nowrap",children:[(0,y.jsx)("thead",{children:(0,y.jsxs)("tr",{children:[(0,y.jsx)("th",{className:"text-start",children:"Product"}),(0,y.jsx)("th",{className:"w-150",children:"num"}),(0,y.jsx)("th",{children:"price"}),(0,y.jsx)("th",{children:"STATUS"}),(0,y.jsx)("th",{children:"Action"})]})}),(0,y.jsx)("tbody",{children:k.length?(0,y.jsx)(n.Fragment,{children:k.map((function(e){return(0,y.jsx)(n.Fragment,{children:(0,y.jsxs)("tr",{children:[(0,y.jsx)("td",{onClick:T,children:(0,y.jsxs)("div",{className:"media",children:[(0,y.jsx)("div",{className:"card-aside-img",children:(0,y.jsx)("img",{src:e.src,className:"h-60 w-60",alt:""})}),(0,y.jsx)("div",{className:"media-body",children:(0,y.jsxs)("div",{className:"card-item-desc mt-0",children:[(0,y.jsx)("h6",{className:"font-weight-semibold mt-0 text-uppercase",children:e.name}),(0,y.jsxs)("dl",{className:"card-item-desc-1",children:[(0,y.jsx)("dt",{children:e.Size}),(0,y.jsx)("dd",{children:e.XXL})]}),(0,y.jsxs)("dl",{className:"card-item-desc-1",children:[(0,y.jsxs)("dt",{children:[e.bg," "]}),(0,y.jsx)("dd",{children:e.colors})]})]})})]})}),(0,y.jsx)("td",{children:(0,y.jsxs)("span",{className:"handle-counter ms-2",id:"handleCounter4",children:[(0,y.jsx)(d.Z,{variant:"",className:"counter-minus btn btn-white lh-2 shadow-none",onClick:e.qnty<=1?function(){return F(e.id)}:function(){return function(e){$((0,b.Dq)(e))}(e)},children:"-"}),(0,y.jsx)("span",{className:"qty",children:(0,y.jsx)("div",{className:"mt-2",children:e.qnty})}),(0,y.jsx)(d.Z,{variant:"",className:"counter-plus btn btn-white lh-2 shadow-none",onClick:function(){return t=e,void $((0,b.D7)(t));var t},children:"+"})]})}),(0,y.jsxs)("td",{className:"text-center text-lg text-medium font-weight-bold  tx-15",children:["$",e.price]}),(0,y.jsx)("td",{className:"text-center",children:(0,y.jsx)("span",{className:"badge bg-".concat(e.stockbg," p-1"),children:e.stock})}),(0,y.jsxs)("td",{className:"text-center",children:[(0,y.jsx)(m.Z,{placement:"top",overlay:(0,y.jsx)(u.Z,{children:"Remove item"}),children:(0,y.jsx)("div",{className:"btn btn-sm btn-danger-light",onClick:function(){return F(e.id)},children:(0,y.jsx)("i",{className:"fe fe-trash "})})}),(0,y.jsxs)("div",{className:" d-none",children:[" ",S]})]})]})},e.id)}))}):(0,y.jsx)(y.Fragment,{children:N.map((function(r,s){return(0,y.jsx)(n.Fragment,{children:(0,y.jsxs)("tr",{children:[(0,y.jsx)("td",{onClick:T,children:(0,y.jsxs)("div",{className:"media",children:[(0,y.jsx)("div",{className:"card-aside-img",children:(0,y.jsx)("img",{src:r.src,className:"h-60 w-60",alt:""})}),(0,y.jsx)("div",{className:"media-body",children:(0,y.jsxs)("div",{className:"card-item-desc mt-0",children:[(0,y.jsx)("h6",{className:"font-weight-semibold mt-0 text-uppercase",children:r.name}),(0,y.jsxs)("dl",{className:"card-item-desc-1",children:[(0,y.jsx)("dt",{children:r.Size}),":"," ",(0,y.jsx)("dd",{children:r.XXl})]}),(0,y.jsxs)("dl",{className:"card-item-desc-1",children:[(0,y.jsxs)("dt",{children:[r.bg," "]}),":"," ",(0,y.jsx)("dd",{children:r.color})]})]})})]})}),(0,y.jsx)("td",{children:(0,y.jsxs)("span",{className:"handle-counter ms-2",id:"handleCounter4",children:[(0,y.jsx)(d.Z,{variant:"",className:"counter-minus btn btn-white lh-2 shadow-none",onClick:e,children:"-"}),(0,y.jsx)("input",{type:"text",className:"qty",defaultValue:r.Quantity}),(0,y.jsx)(d.Z,{variant:"",className:"counter-plus btn btn-white lh-2 shadow-none",onClick:t,children:"+"})]})}),(0,y.jsxs)("td",{className:"text-center text-lg text-medium font-weight-bold  tx-15",children:["$",r.prices]}),(0,y.jsx)("td",{className:"text-center",children:(0,y.jsx)("span",{className:"badge bg-".concat(r.stockbg," p-1"),children:r.stock})}),(0,y.jsxs)("td",{className:"text-center",children:[(0,y.jsx)(m.Z,{placement:"top",overlay:(0,y.jsx)(u.Z,{children:"Remove item"}),children:(0,y.jsx)("div",{className:"btn btn-sm btn-danger-light",onClick:function(){return function(e){var t=N.filter((function(t){return t.id!==e}));g(t)}(r.id)},children:(0,y.jsx)("i",{className:"fe fe-trash "})})}),(0,y.jsxs)("div",{className:" d-none",children:[" ",S]})]})]})},s)}))})})]})})}),(0,y.jsx)(i.Z.Footer,{children:(0,y.jsxs)("div",{className:"shopping-cart-footer bd-0",children:[(0,y.jsx)("div",{className:"column",children:(0,y.jsxs)(h.rU,{className:"btn btn-secondary",to:"".concat("/GestorNew","/pages/e-commerce/shop"),children:[(0,y.jsx)("i",{className:"fe fe-corner-up-left  mx-2"}),"Back to Shopping"]})}),(0,y.jsxs)("div",{className:"column",children:[(0,y.jsxs)(h.rU,{className:"btn btn-primary",to:"".concat("/GestorNew","/pages/e-commerce/cart"),children:[(0,y.jsx)("i",{className:"fe fe-refresh-cw mx-2"}),"Update Cart"]}),(0,y.jsxs)(h.rU,{className:"btn btn-outline-primary",to:"".concat("/GestorNew","/pages/e-commerce/checkout"),children:[(0,y.jsx)("i",{className:"fe fe-log-in mx-2"}),"Checkout"]})]})]})})]})}),(0,y.jsxs)(l.Z,{lg:12,xl:3,md:12,children:[(0,y.jsx)(i.Z,{className:"custom-card",children:(0,y.jsx)(i.Z.Body,{children:(0,y.jsx)(p.Z,{children:(0,y.jsxs)(f.Z,{className:"mb-0",children:[" ",(0,y.jsx)("label",{children:"Have coupon?"}),(0,y.jsxs)("div",{className:"input-group",children:[" ",(0,y.jsx)("input",{type:"text",className:"form-control coupon",placeholder:"Coupon code"})," ",(0,y.jsxs)("span",{className:"input-group-append",children:[" ",(0,y.jsx)(d.Z,{variant:"",className:"btn btn-primary btn-apply coupon",children:"Apply"})," "]})," "]})]})})})}),(0,y.jsxs)(i.Z,{className:"custom-card cart-details",children:[(0,y.jsxs)(i.Z.Body,{children:[(0,y.jsx)("h5",{className:"mb-3 font-weight-bold tx-14",children:"PRICE DETAIL"}),(0,y.jsxs)("dl",{className:"dlist-align",children:[(0,y.jsx)("dt",{className:"",children:"ITEMS 3"}),(0,y.jsx)("dd",{className:"text-end ms-auto",children:"$ 262.00"})]}),(0,y.jsxs)("dl",{className:"dlist-align",children:[(0,y.jsx)("dt",{children:"Discount:"}),(0,y.jsx)("dd",{className:"text-end text-danger ms-auto",children:"- $20.00"})]}),(0,y.jsxs)("dl",{className:"dlist-align",children:[(0,y.jsx)("dt",{children:"Total price:"}),(0,y.jsx)("dd",{className:"text-end ms-auto",children:"$252.97"})]}),(0,y.jsxs)("dl",{className:"dlist-align",children:[(0,y.jsx)("dt",{children:"Delivery:"}),(0,y.jsx)("dd",{className:"text-end text-success ms-auto",children:"Free"})]}),(0,y.jsx)("hr",{}),(0,y.jsxs)("dl",{className:"dlist-align",children:[(0,y.jsx)("dt",{children:"Total:"}),(0,y.jsx)("dd",{className:"text-end  ms-auto tx-20",children:(0,y.jsx)("strong",{children:"$252.97"})})]})]}),(0,y.jsx)(i.Z.Footer,{children:(0,y.jsx)("div",{className:"column",children:(0,y.jsx)(h.rU,{className:"btn btn-primary",to:"".concat("/GestorNew","/pages/e-commerce/shop"),children:"Continue Shopping"})})})]})]})]})]})};v.defaultProps={};var N=v},63954:function(e,t,r){r.d(t,{D7:function(){return s},Dq:function(){return a},HG:function(){return n}});var s=function(e){return{type:"ADD_CART",payload:e}},n=function(e){return{type:"RMV_CART",payload:e}},a=function(e){return{type:"RMV_ONE",payload:e}}},62110:function(e,t,r){var s=r(48309),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};function i(e){return s.isMemo(e)?c:l[e.$$typeof]||n}l[s.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},l[s.Memo]=c;var o=Object.defineProperty,d=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,f=Object.prototype;e.exports=function e(t,r,s){if("string"!==typeof r){if(f){var n=p(r);n&&n!==f&&e(t,n,s)}var c=d(r);m&&(c=c.concat(m(r)));for(var l=i(t),h=i(r),x=0;x<c.length;++x){var j=c[x];if(!a[j]&&(!s||!s[j])&&(!h||!h[j])&&(!l||!l[j])){var b=u(r,j);try{o(t,j,b)}catch(y){}}}}return t}},746:function(e,t){var r="function"===typeof Symbol&&Symbol.for,s=r?Symbol.for("react.element"):60103,n=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,l=r?Symbol.for("react.profiler"):60114,i=r?Symbol.for("react.provider"):60109,o=r?Symbol.for("react.context"):60110,d=r?Symbol.for("react.async_mode"):60111,m=r?Symbol.for("react.concurrent_mode"):60111,u=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,f=r?Symbol.for("react.suspense_list"):60120,h=r?Symbol.for("react.memo"):60115,x=r?Symbol.for("react.lazy"):60116,j=r?Symbol.for("react.block"):60121,b=r?Symbol.for("react.fundamental"):60117,y=r?Symbol.for("react.responder"):60118,v=r?Symbol.for("react.scope"):60119;function N(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case s:switch(e=e.type){case d:case m:case a:case l:case c:case p:return e;default:switch(e=e&&e.$$typeof){case o:case u:case x:case h:case i:return e;default:return t}}case n:return t}}}function g(e){return N(e)===m}t.AsyncMode=d,t.ConcurrentMode=m,t.ContextConsumer=o,t.ContextProvider=i,t.Element=s,t.ForwardRef=u,t.Fragment=a,t.Lazy=x,t.Memo=h,t.Portal=n,t.Profiler=l,t.StrictMode=c,t.Suspense=p,t.isAsyncMode=function(e){return g(e)||N(e)===d},t.isConcurrentMode=g,t.isContextConsumer=function(e){return N(e)===o},t.isContextProvider=function(e){return N(e)===i},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===s},t.isForwardRef=function(e){return N(e)===u},t.isFragment=function(e){return N(e)===a},t.isLazy=function(e){return N(e)===x},t.isMemo=function(e){return N(e)===h},t.isPortal=function(e){return N(e)===n},t.isProfiler=function(e){return N(e)===l},t.isStrictMode=function(e){return N(e)===c},t.isSuspense=function(e){return N(e)===p},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===a||e===m||e===l||e===c||e===p||e===f||"object"===typeof e&&null!==e&&(e.$$typeof===x||e.$$typeof===h||e.$$typeof===i||e.$$typeof===o||e.$$typeof===u||e.$$typeof===b||e.$$typeof===y||e.$$typeof===v||e.$$typeof===j)},t.typeOf=N},48309:function(e,t,r){e.exports=r(746)},2461:function(e,t,r){r.d(t,{Z:function(){return x}});var s=r(1413),n=r(45987),a=r(81694),c=r.n(a),l=r(72791),i=r(10162),o=r(16445),d=r(80184),m=["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"],u=l.forwardRef((function(e,t){var r=e.bsPrefix,a=e.active,l=e.children,u=e.className,p=e.as,f=void 0===p?"li":p,h=e.linkAs,x=void 0===h?o.Z:h,j=e.linkProps,b=e.href,y=e.title,v=e.target,N=(0,n.Z)(e,m),g=(0,i.vE)(r,"breadcrumb-item");return(0,d.jsx)(f,(0,s.Z)((0,s.Z)({ref:t},N),{},{className:c()(g,u,{active:a}),"aria-current":a?"page":void 0,children:a?l:(0,d.jsx)(x,(0,s.Z)((0,s.Z)({},j),{},{href:b,title:y,target:v,children:l}))}))}));u.displayName="BreadcrumbItem",u.defaultProps={active:!1,linkProps:{}};var p=u,f=["bsPrefix","className","listProps","children","label","as"],h=l.forwardRef((function(e,t){var r=e.bsPrefix,a=e.className,l=e.listProps,o=e.children,m=e.label,u=e.as,p=void 0===u?"nav":u,h=(0,n.Z)(e,f),x=(0,i.vE)(r,"breadcrumb");return(0,d.jsx)(p,(0,s.Z)((0,s.Z)({"aria-label":m,className:a,ref:t},h),{},{children:(0,d.jsx)("ol",(0,s.Z)((0,s.Z)({},l),{},{className:c()(x,null==l?void 0:l.className),children:o}))}))}));h.displayName="Breadcrumb",h.defaultProps={label:"breadcrumb",listProps:{}};var x=Object.assign(h,{Item:p})},43360:function(e,t,r){var s=r(1413),n=r(29439),a=r(45987),c=r(81694),l=r.n(c),i=r(72791),o=r(15341),d=r(10162),m=r(80184),u=["as","bsPrefix","variant","size","active","className"],p=i.forwardRef((function(e,t){var r=e.as,c=e.bsPrefix,i=e.variant,p=e.size,f=e.active,h=e.className,x=(0,a.Z)(e,u),j=(0,d.vE)(c,"btn"),b=(0,o.FT)((0,s.Z)({tagName:r},x)),y=(0,n.Z)(b,2),v=y[0],N=y[1].tagName;return(0,m.jsx)(N,(0,s.Z)((0,s.Z)((0,s.Z)({},v),x),{},{ref:t,className:l()(h,j,f&&"active",i&&"".concat(j,"-").concat(i),p&&"".concat(j,"-").concat(p),x.href&&x.disabled&&"disabled")}))}));p.displayName="Button",p.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=p},89743:function(e,t,r){var s=r(1413),n=r(45987),a=r(81694),c=r.n(a),l=r(72791),i=r(10162),o=r(80184),d=["bsPrefix","className","as"],m=l.forwardRef((function(e,t){var r=e.bsPrefix,a=e.className,l=e.as,m=void 0===l?"div":l,u=(0,n.Z)(e,d),p=(0,i.vE)(r,"row"),f=(0,i.pi)(),h=(0,i.zG)(),x="".concat(p,"-cols"),j=[];return f.forEach((function(e){var t,r=u[e];delete u[e],t=null!=r&&"object"===typeof r?r.cols:r;var s=e!==h?"-".concat(e):"";null!=t&&j.push("".concat(x).concat(s,"-").concat(t))})),(0,o.jsx)(m,(0,s.Z)((0,s.Z)({ref:t},u),{},{className:c().apply(void 0,[a,p].concat(j))}))}));m.displayName="Row",t.Z=m},62591:function(e,t,r){var s=r(1413),n=r(45987),a=r(81694),c=r.n(a),l=r(72791),i=r(10162),o=r(80184),d=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],m=l.forwardRef((function(e,t){var r=e.bsPrefix,a=e.className,l=e.striped,m=e.bordered,u=e.borderless,p=e.hover,f=e.size,h=e.variant,x=e.responsive,j=(0,n.Z)(e,d),b=(0,i.vE)(r,"table"),y=c()(a,b,h&&"".concat(b,"-").concat(h),f&&"".concat(b,"-").concat(f),l&&"".concat(b,"-").concat("string"===typeof l?"striped-".concat(l):"striped"),m&&"".concat(b,"-bordered"),u&&"".concat(b,"-borderless"),p&&"".concat(b,"-hover")),v=(0,o.jsx)("table",(0,s.Z)((0,s.Z)({},j),{},{className:y,ref:t}));if(x){var N="".concat(b,"-responsive");return"string"===typeof x&&(N="".concat(N,"-").concat(x)),(0,o.jsx)("div",{className:N,children:v})}return v}));t.Z=m},12576:function(e,t,r){var s=r(1413),n=r(29439),a=r(45987),c=r(81694),l=r.n(c),i=r(72791),o=r(10162),d=r(57860),m=r(80184),u=["bsPrefix","placement","className","style","children","arrowProps","popper","show"],p=i.forwardRef((function(e,t){var r=e.bsPrefix,c=e.placement,i=e.className,p=e.style,f=e.children,h=e.arrowProps,x=(e.popper,e.show,(0,a.Z)(e,u));r=(0,o.vE)(r,"tooltip");var j=(0,o.SC)(),b=(null==c?void 0:c.split("-"))||[],y=(0,n.Z)(b,1)[0],v=(0,d.z)(y,j);return(0,m.jsxs)("div",(0,s.Z)((0,s.Z)({ref:t,style:p,role:"tooltip","x-placement":y,className:l()(i,r,"bs-tooltip-".concat(v))},x),{},{children:[(0,m.jsx)("div",(0,s.Z)({className:"tooltip-arrow"},h)),(0,m.jsx)("div",{className:"".concat(r,"-inner"),children:f})]}))}));p.defaultProps={placement:"right"},p.displayName="Tooltip",t.Z=p}}]);
//# sourceMappingURL=8196.271e7b27.chunk.js.map