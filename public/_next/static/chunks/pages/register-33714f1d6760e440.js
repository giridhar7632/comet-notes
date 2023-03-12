(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{5511:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){return n(72)}])},72:function(e,t,n){"use strict";n.r(t);var r=n(5893),i=n(7294),l=n(2498),s=n(204),a=n(3100),o=n(4418),u=n(8267),d=n(5370),p=n(8129),c=n(3863),m=n(3775),h=n(9222),f=n(8911),x=n(1703),g=n(6642),y=n(1163);let v=()=>{let[e,t]=(0,i.useState)({name:"",email:"",password:""}),{isAuth:n,register:v,isLoading:j}=(0,g.aC)(),I=(0,y.useRouter)(),[w,E]=(0,i.useState)(!1),_=(0,l.ff)("gray.200","gray.700"),C=(0,l.ff)("whiteAlpha.700","gray.800");(0,i.useEffect)(()=>{n&&I.replace("/")},[n]);let b=n=>{let{name:r,value:i}=n.target;t({...e,[r]:i})},N=()=>E(!w),S=async n=>{n.preventDefault(),await v(e),t({name:"",email:"",password:""}),I.replace("/login")};return(0,r.jsxs)(s.k,{flexDirection:"column",alignItems:"center",justifyContent:"center",children:[(0,r.jsxs)(a.xu,{shadow:"sm",as:"form",p:12,w:"100%",maxW:"500px",rounded:"xl",backdropBlur:"12px",borderWidth:"1px",borderColor:_,bg:C,onSubmit:S,children:[(0,r.jsx)(o.X,{as:"h1",size:"lg",mb:6,children:"Register"}),(0,r.jsxs)(u.NI,{id:"name",isRequired:!0,mb:2,children:[(0,r.jsx)(d.l,{children:"Username"}),(0,r.jsx)(p.I,{type:"text",name:"name",autoComplete:"off",value:e.name,focusBorderColor:"purple.400",onChange:b,placeholder:"your sweet name"})]}),(0,r.jsxs)(u.NI,{id:"email",isRequired:!0,mb:2,children:[(0,r.jsx)(d.l,{children:"Email"}),(0,r.jsx)(p.I,{type:"email",name:"email",autoComplete:"email",value:e.email,focusBorderColor:"purple.400",onChange:b,placeholder:"your@email.com"})]}),(0,r.jsxs)(u.NI,{id:"password",isRequired:!0,mb:2,children:[(0,r.jsx)(d.l,{children:"Password"}),(0,r.jsxs)(c.B,{size:"md",children:[(0,r.jsx)(p.I,{pr:"4.5rem",type:w?"text":"password",name:"password",value:e.password,focusBorderColor:"purple.400",onChange:b,placeholder:"super secret - min 8 characters"}),(0,r.jsx)(m.x,{width:"4.5rem",children:(0,r.jsx)(h.z,{h:"1.75rem",size:"sm",onClick:N,children:w?"Hide":"Show"})})]})]}),(0,r.jsx)(h.z,{mt:6,type:"submit",isLoading:j,loadingText:"Registering...",colorScheme:"purple",variant:"solid",children:"Register"})]}),(0,r.jsxs)(f.x,{display:"flex",gap:1,mt:6,children:["Already have an account? ",(0,r.jsx)(x.Z,{href:"/login",children:"Login"})]})]})};t.default=v},3863:function(e,t,n){"use strict";n.d(t,{B:function(){return f},m:function(){return h}});var r=n(5227),i=n(2495),l=n(5059),s=n(1639),a=n(3179),o=n(7630),u=n(5432),d=n(888),p=n(7294),c=n(5893),[m,h]=(0,r.k)({name:"InputGroupStylesContext",errorMessage:"useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" "}),f=(0,l.G)(function(e,t){let n=(0,s.jC)("Input",e),{children:r,className:l,...h}=(0,a.Lr)(e),f=(0,u.cx)("chakra-input__group",l),x={},g=(0,i.W)(r),y=n.field;g.forEach(e=>{var t,r;n&&(y&&"InputLeftElement"===e.type.id&&(x.paddingStart=null!=(t=y.height)?t:y.h),y&&"InputRightElement"===e.type.id&&(x.paddingEnd=null!=(r=y.height)?r:y.h),"InputRightAddon"===e.type.id&&(x.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(x.borderStartRadius=0))});let v=g.map(t=>{var n,r;let i=(0,d.oA)({size:(null==(n=t.props)?void 0:n.size)||e.size,variant:(null==(r=t.props)?void 0:r.variant)||e.variant});return"Input"!==t.type.id?(0,p.cloneElement)(t,i):(0,p.cloneElement)(t,Object.assign(i,x,t.props))});return(0,c.jsx)(o.m.div,{className:f,ref:t,__css:{width:"100%",display:"flex",position:"relative",isolation:"isolate"},"data-group":!0,...h,children:(0,c.jsx)(m,{value:n,children:v})})});f.displayName="InputGroup"},3775:function(e,t,n){"use strict";n.d(t,{x:function(){return p}});var r=n(3863),i=n(7630),l=n(5059),s=n(5432),a=n(5893),o=(0,i.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),u=(0,l.G)(function(e,t){var n,i;let{placement:l="left",...s}=e,u=(0,r.m)(),d=u.field,p={["left"===l?"insetStart":"insetEnd"]:"0",width:null!=(n=null==d?void 0:d.height)?n:null==d?void 0:d.h,height:null!=(i=null==d?void 0:d.height)?i:null==d?void 0:d.h,fontSize:null==d?void 0:d.fontSize,...u.element};return(0,a.jsx)(o,{ref:t,__css:p,...s})});u.id="InputElement",u.displayName="InputElement";var d=(0,l.G)(function(e,t){let{className:n,...r}=e,i=(0,s.cx)("chakra-input__left-element",n);return(0,a.jsx)(u,{ref:t,placement:"left",className:i,...r})});d.id="InputLeftElement",d.displayName="InputLeftElement";var p=(0,l.G)(function(e,t){let{className:n,...r}=e,i=(0,s.cx)("chakra-input__right-element",n);return(0,a.jsx)(u,{ref:t,placement:"right",className:i,...r})});p.id="InputRightElement",p.displayName="InputRightElement"},2495:function(e,t,n){"use strict";n.d(t,{W:function(){return i}});var r=n(7294);function i(e){return r.Children.toArray(e).filter(e=>(0,r.isValidElement)(e))}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5511)}),_N_E=e.O()}]);