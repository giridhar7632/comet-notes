(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7931)}])},7931:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return K}});var t=n(5893),i=n(6536),s=n(5434),l=n(2498),o=n(204),a=n(8911),d=n(5059),c=n(7630),u=(0,d.G)(function(e,r){let{templateAreas:n,gap:i,rowGap:s,columnGap:l,column:o,row:a,autoFlow:d,autoRows:u,templateRows:m,autoColumns:x,templateColumns:h,...f}=e;return(0,t.jsx)(c.m.div,{ref:r,__css:{display:"grid",gridTemplateAreas:n,gridGap:i,gridRowGap:s,gridColumnGap:l,gridAutoColumns:x,gridColumn:o,gridRow:a,gridAutoFlow:d,gridAutoRows:u,gridTemplateRows:m,gridTemplateColumns:h},...f})});u.displayName="Grid";var[m,x]=(0,n(6452).eC)("Card"),h=n(5432),f=n(3179),p=n(1639),g=(0,d.G)(function(e,r){let{className:n,children:i,direction:s="column",justify:l,align:o,...a}=(0,f.Lr)(e),d=(0,p.jC)("Card",e);return(0,t.jsx)(c.m.div,{ref:r,className:(0,h.cx)("chakra-card",n),__css:{display:"flex",flexDirection:s,justifyContent:l,alignItems:o,position:"relative",minWidth:0,wordWrap:"break-word",...d.container},...a,children:(0,t.jsx)(m,{value:d,children:i})})}),j=n(4418),v=n(8420),w=(0,d.G)((e,r)=>(0,t.jsx)(v.K,{align:"center",...e,direction:"row",ref:r}));w.displayName="HStack";var y=n(9154),_=["second","minute","hour","day","week","month","year"],C=["秒","分钟","小时","天","周","个月","年"],k={},b=function(e,r){k[e]=r},S=[60,60,24,7,365/7/12,12];function N(e){return e instanceof Date?e:!isNaN(e)||/^\d+$/.test(e)?new Date(parseInt(e)):(e=(e||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(e))}var W=function(e,r,n){var t;return function(e,r){for(var n=e<0?1:0,t=e=Math.abs(e),i=0;e>=S[i]&&i<S.length;i++)e/=S[i];return i*=2,(e=Math.floor(e))>(0===i?9:1)&&(i+=1),r(e,i,t)[n].replace("%s",e.toString())}((+((t=n&&n.relativeDate)?N(t):new Date)-+N(e))/1e3,k[r]||k.en_US)};b("en_US",function(e,r){if(0===r)return["just now","right now"];var n=_[Math.floor(r/2)];return e>1&&(n+="s"),[e+" "+n+" ago","in "+e+" "+n]}),b("zh_CN",function(e,r){if(0===r)return["刚刚","片刻后"];var n=C[~~(r/2)];return[e+" "+n+"前",e+" "+n+"后"]});var z=n(858),T=n(7335),B=n(3396),A=n(1963),E=n(4801),I=n(4504),D=n(5819),L=n(3793),G=n(8267),R=n(5370),F=n(8129),O=n(1753),X=n(7018),M=n(9222),$=n(7294);let Z=e=>{let{title:r="",content:n="",_id:i}=e,[l,o]=(0,$.useState)({title:r,content:n,id:i}),[a,d]=(0,$.useState)(!1),{editNote:c}=(0,z.iX)(),{isOpen:u,onOpen:m,onClose:x}=(0,T.q)(),h=(0,$.useRef)(null),f=e=>{let{name:r,value:n}=e.target;o({...l,[r]:n})},p=async e=>{e.preventDefault(),d(!0),await c(l),d(!1),x()};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(y.h,{colorScheme:"purple",variant:"solid",size:"sm",onClick:m,icon:(0,t.jsx)(s.z,{width:18})}),(0,t.jsxs)(B.u_,{onClose:x,isOpen:u,size:["full","xl"],initialFocusRef:h,scrollBehavior:"inside",children:[(0,t.jsx)(A.Z,{}),(0,t.jsxs)(E.h,{children:[(0,t.jsx)(I.x,{children:"Edit Note"}),(0,t.jsx)(D.o,{}),(0,t.jsxs)(L.f,{children:[(0,t.jsxs)(G.NI,{children:[(0,t.jsx)(R.l,{children:"Title"}),(0,t.jsx)(F.I,{name:"title",value:l.title,focusBorderColor:"purple.400",onChange:f})]}),(0,t.jsxs)(G.NI,{mt:4,isRequired:!0,children:[(0,t.jsx)(R.l,{children:"Content"}),(0,t.jsx)(O.g,{name:"content",value:l.content,ref:h,focusBorderColor:"purple.400",minHeight:"200px",resize:"vertical",onChange:f})]})]}),(0,t.jsxs)(X.m,{gap:4,children:[(0,t.jsx)(M.z,{onClick:p,colorScheme:"purple",isLoading:a,loadingText:"Saving...",children:"Save"}),(0,t.jsx)(M.z,{variant:"outline",onClick:x,children:"Close"})]})]})]})]})};var q=n(3100);let H=e=>{let{note:r,children:n,...i}=e,{deleteNote:l}=(0,z.iX)(),{isOpen:d,onOpen:c,onClose:u}=(0,T.q)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(q.xu,{onClick:c,...i,children:n}),(0,t.jsxs)(B.u_,{onClose:u,isOpen:d,size:["full","xl"],scrollBehavior:"inside",children:[(0,t.jsx)(A.Z,{}),(0,t.jsxs)(E.h,{children:[(0,t.jsx)(I.x,{children:(0,t.jsx)(D.o,{})}),(0,t.jsxs)(L.f,{minHeight:300,children:[(0,t.jsx)(j.X,{as:"h2",mb:2,borderBottom:1,children:r.title}),(0,t.jsxs)(a.x,{children:[" ",r.content]})]}),(0,t.jsxs)(X.m,{display:"flex",alignItems:"end",justifyContent:"space-between",children:[(0,t.jsxs)(o.k,{gap:4,alignItems:"center",children:[(0,t.jsx)(Z,{...r}),(0,t.jsx)(y.h,{onClick:()=>{l(r._id),u()},colorScheme:"red",variant:"outline",size:"sm",icon:(0,t.jsx)(s.rF,{width:18})})]}),(0,t.jsxs)(a.x,{fontSize:"sm",textAlign:"right",color:"gray.400",children:["Last updated ",W(r.updatedAt)]})]})]})]})]})};function K(){let{notes:e,deleteNote:r,loading:n}=(0,z.iX)(),d=(0,l.ff)("white","gray.800"),c=(0,l.ff)("gray.200","gray.700");return(0,t.jsx)(o.k,{w:"100%",flexDirection:"column",mb:8,children:n?(0,t.jsx)(i.Z,{}):e.length?(0,t.jsx)(u,{templateColumns:["repeat(1, 1fr)","repeat(2, 1fr)","repeat(2, 1fr)","repeat(3, 1fr)"],gap:[4,6],mx:"auto",maxWidth:["100%"],children:e.map(e=>(0,t.jsxs)(g,{display:"flex",direction:"column",p:5,cursor:"pointer",shadow:"sm",w:"100%",bg:d,borderColor:c,borderWidth:"1px",borderRadius:"md",_hover:{shadow:"md"},children:[(0,t.jsxs)(H,{note:e,flex:"1",children:[(0,t.jsx)(j.X,{size:"md",isTruncated:!0,children:e.title}),(0,t.jsx)(a.x,{my:4,noOfLines:[3,4,5],children:e.content})]}),(0,t.jsxs)(w,{alignItems:"end",justifyContent:"space-between",children:[(0,t.jsxs)(o.k,{gap:4,alignItems:"center",children:[(0,t.jsx)(Z,{...e}),(0,t.jsx)(y.h,{onClick:()=>r(e._id),colorScheme:"red",variant:"outline",size:"sm",icon:(0,t.jsx)(s.rF,{width:18})})]}),(0,t.jsxs)(a.x,{fontSize:"x-small",textAlign:"right",color:"gray.400",children:["Last updated ",W(e.updatedAt)]})]})]},e._id))}):(0,t.jsx)(o.k,{h:["30vh","50vh"],w:"100%",justifyContent:"center",alignItems:"center",children:(0,t.jsx)(a.x,{fontSize:["2xl","3xl"],opacity:"0.2",children:"No Notes Added"})})})}},8420:function(e,r,n){"use strict";n.d(r,{K:function(){return m}});var t=n(7630),i=n(5893),s=e=>(0,i.jsx)(t.m.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});s.displayName="StackItem";var l=n(5432);function o(e,r){return Array.isArray(e)?e.map(e=>null===e?null:r(e)):(0,l.Kn)(e)?Object.keys(e).reduce((n,t)=>(n[t]=r(e[t]),n),{}):null!=e?r(e):null}Object.freeze(["base","sm","md","lg","xl","2xl"]);var a="& > *:not(style) ~ *:not(style)",d=n(5059),c=n(2495),u=n(7294),m=(0,d.G)((e,r)=>{let{isInline:n,direction:d,align:m,justify:x,spacing:h="0.5rem",wrap:f,children:p,divider:g,className:j,shouldWrapChildren:v,...w}=e,y=n?"row":null!=d?d:"column",_=(0,u.useMemo)(()=>(function(e){let{spacing:r,direction:n}=e,t={column:{marginTop:r,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:r},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:r,marginStart:0},"row-reverse":{marginTop:0,marginEnd:r,marginBottom:0,marginStart:0}};return{flexDirection:n,[a]:o(n,e=>t[e])}})({direction:y,spacing:h}),[y,h]),C=(0,u.useMemo)(()=>(function(e){let{spacing:r,direction:n}=e,t={column:{my:r,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:r,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:r,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:r,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":o(n,e=>t[e])}})({spacing:h,direction:y}),[h,y]),k=!!g,b=!v&&!k,S=(0,u.useMemo)(()=>{let e=(0,c.W)(p);return b?e:e.map((r,n)=>{let t=void 0!==r.key?r.key:n,l=n+1===e.length,o=(0,i.jsx)(s,{children:r},t),a=v?o:r;if(!k)return a;let d=(0,u.cloneElement)(g,{__css:C});return(0,i.jsxs)(u.Fragment,{children:[a,l?null:d]},t)})},[g,C,k,b,v,p]),N=(0,l.cx)("chakra-stack",j);return(0,i.jsx)(t.m.div,{ref:r,display:"flex",alignItems:m,justifyContent:x,flexDirection:_.flexDirection,flexWrap:f,className:N,__css:k?{}:{[a]:_[a]},...w,children:S})});m.displayName="Stack"},2495:function(e,r,n){"use strict";n.d(r,{W:function(){return i}});var t=n(7294);function i(e){return t.Children.toArray(e).filter(e=>(0,t.isValidElement)(e))}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);