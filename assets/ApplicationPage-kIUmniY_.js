const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BME2DKnP.js","assets/text-to-speech-BOnlUQ0d.js","assets/index-D4Spz8xS.js","assets/index-l2yWm1DY.css","assets/routes-CKz-qo7F.js","assets/index-ChzwlTc9.js","assets/objectWithoutPropertiesLoose-BjXSgPXB.js","assets/index-DPurFKuC.js","assets/index-Ux8lesU9.css"])))=>i.map(i=>d[i]);
import{c as De,r,j as a,P as V,i as Re,u as te,g as I,h as ne,s as q,Z as Ie,y as b,ah as Te,X as re,ag as Ae,ac as Oe,ae as Fe,p as Pe,_ as ie,L as le,aq as oe,E as Ve,__tla as qe}from"./index-D4Spz8xS.js";import{B as de,a1 as Je,a2 as Be,a3 as ze,a4 as He,a5 as Ue,a6 as We,a7 as $e,a8 as Ge,__tla as Xe}from"./routes-CKz-qo7F.js";import{u as Ze,__tla as Ke}from"./index-BYXFIEcO.js";import{aq as ce,I as ue,L as M,t as Qe,F as Ye,j as fe,A as ea,o as aa,k as sa,q as ta,x as na,__tla as ra}from"./text-to-speech-BOnlUQ0d.js";import ia,{__tla as la}from"./copy-CNhNqJSu.js";import oa,{__tla as da}from"./refresh-ccw-Cu4u1yU9.js";import ca,{__tla as ua}from"./volume-2-B1mZAeLj.js";import{__tla as fa}from"./createLucideIcon-ChJUg-Pp.js";let me,ma=Promise.all([(()=>{try{return qe}catch{}})(),(()=>{try{return Xe}catch{}})(),(()=>{try{return Ke}catch{}})(),(()=>{try{return ra}catch{}})(),(()=>{try{return la}catch{}})(),(()=>{try{return da}catch{}})(),(()=>{try{return ua}catch{}})(),(()=>{try{return fa}catch{}})()]).then(async()=>{var O="Avatar",[he,ha]=De(O),[pe,J]=he(O),B=r.forwardRef((e,i)=>{const{__scopeAvatar:l,...n}=e,[o,s]=r.useState("idle");return a.jsx(pe,{scope:l,imageLoadingStatus:o,onImageLoadingStatusChange:s,children:a.jsx(V.span,{...n,ref:i})})});B.displayName=O;var z="AvatarImage",H=r.forwardRef((e,i)=>{const{__scopeAvatar:l,src:n,onLoadingStatusChange:o=()=>{},...s}=e,d=J(z,l),m=_e(n,s.referrerPolicy),u=Re(c=>{o(c),d.onImageLoadingStatusChange(c)});return te(()=>{m!=="idle"&&u(m)},[m,u]),m==="loaded"?a.jsx(V.img,{...s,ref:i,src:n}):null});H.displayName=z;var U="AvatarFallback",W=r.forwardRef((e,i)=>{const{__scopeAvatar:l,delayMs:n,...o}=e,s=J(U,l),[d,m]=r.useState(n===void 0);return r.useEffect(()=>{if(n!==void 0){const u=window.setTimeout(()=>m(!0),n);return()=>window.clearTimeout(u)}},[n]),d&&s.imageLoadingStatus!=="loaded"?a.jsx(V.span,{...o,ref:i}):null});W.displayName=U;function _e(e,i){const[l,n]=r.useState("idle");return te(()=>{if(!e){n("error");return}let o=!0;const s=new window.Image,d=m=>()=>{o&&n(m)};return n("loading"),s.onload=d("loaded"),s.onerror=d("error"),s.src=e,i&&(s.referrerPolicy=i),()=>{o=!1}},[e,i]),l}var $=B,G=H,X=W;const Z=r.forwardRef(({className:e,...i},l)=>a.jsx($,{ref:l,className:I("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",e),...i}));Z.displayName=$.displayName;const K=r.forwardRef(({className:e,...i},l)=>a.jsx(G,{ref:l,className:I("aspect-square h-full w-full",e),...i}));K.displayName=G.displayName;const Q=r.forwardRef(({className:e,...i},l)=>a.jsx(X,{ref:l,className:I("flex h-full w-full items-center justify-center rounded-full bg-muted",e),...i}));Q.displayName=X.displayName;function Y(){return a.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"text-foreground",children:[a.jsx("circle",{cx:"4",cy:"12",r:"2",fill:"currentColor",children:a.jsx("animate",{id:"spinner_qFRN",begin:"0;spinner_OcgL.end+0.25s",attributeName:"cy",calcMode:"spline",dur:"0.6s",values:"12;6;12",keySplines:".33,.66,.66,1;.33,0,.66,.33"})}),a.jsx("circle",{cx:"12",cy:"12",r:"2",fill:"currentColor",children:a.jsx("animate",{begin:"spinner_qFRN.begin+0.1s",attributeName:"cy",calcMode:"spline",dur:"0.6s",values:"12;6;12",keySplines:".33,.66,.66,1;.33,0,.66,.33"})}),a.jsx("circle",{cx:"20",cy:"12",r:"2",fill:"currentColor",children:a.jsx("animate",{id:"spinner_OcgL",begin:"spinner_qFRN.begin+0.2s",attributeName:"cy",calcMode:"spline",dur:"0.6s",values:"12;6;12",keySplines:".33,.66,.66,1;.33,0,.66,.33"})})]})}const ge=ne("flex gap-2 max-w-[60%] items-end relative group",{variants:{variant:{received:"self-start",sent:"self-end flex-row-reverse"},layout:{default:"",ai:"max-w-full w-full items-center"}},defaultVariants:{variant:"received",layout:"default"}}),ee=r.forwardRef(({className:e,variant:i,layout:l,children:n,...o},s)=>a.jsx("div",{className:I(ge({variant:i,layout:l,className:e}),"relative group"),ref:s,...o,children:r.Children.map(n,d=>r.isValidElement(d)&&typeof d.type!="string"?r.cloneElement(d,{variant:i,layout:l}):d)}));ee.displayName="ChatBubble";const ye=({src:e,fallback:i,className:l})=>a.jsxs(Z,{className:l,children:[a.jsx(K,{src:e,alt:"Avatar"}),a.jsx(Q,{children:i})]}),xe=ne("p-4",{variants:{variant:{received:"bg-secondary text-secondary-foreground rounded-r-lg rounded-tl-lg",sent:"bg-primary text-primary-foreground rounded-l-lg rounded-tr-lg"},layout:{default:"",ai:"border-t w-full rounded-none bg-transparent"}},defaultVariants:{variant:"received",layout:"default"}}),ae=r.forwardRef(({className:e,variant:i,layout:l,isLoading:n=!1,children:o,...s},d)=>a.jsx("div",{className:I(xe({variant:i,layout:l,className:e}),"break-words max-w-full whitespace-pre-wrap"),ref:d,...s,children:n?a.jsx("div",{className:"flex items-center space-x-2",children:a.jsx(Y,{})}):o}));ae.displayName="ChatBubbleMessage";const we=({icon:e,onClick:i,className:l,variant:n="ghost",size:o="icon",...s})=>a.jsx(de,{variant:n,size:o,className:l,onClick:i,...s,children:e}),Ne=r.forwardRef(({variant:e,className:i,children:l,...n},o)=>a.jsx("div",{ref:o,className:I("absolute top-1/2 -translate-y-1/2 flex opacity-0 group-hover:opacity-100 transition-opacity duration-200",e==="sent"?"-left-1 -translate-x-full flex-row-reverse":"-right-1 translate-x-full",i),...n,children:l}));Ne.displayName="ChatBubbleActionWrapper";const se=r.forwardRef(({className:e,children:i,...l},n)=>a.jsx("div",{className:I("flex flex-col w-full h-full p-4 gap-6 overflow-y-auto",e),ref:n,...l,children:i}));se.displayName="ChatMessageList";const ve=()=>{var w;const[e,i]=r.useState(),[l,n]=r.useState(),[o,s]=r.useState(),[d,m]=r.useState(),u=r.useRef(),c=r.useRef({}),t=q(f=>f.currentSession),N=Ie(f=>f.loadModel),x=r.useCallback(async()=>{var f,j;try{if(c.current.handling=t==null?void 0:t.id,!(t!=null&&t.id)||!(t!=null&&t.main_source_id)||(t==null?void 0:t.main_source_type)!=="Thread")return;const[L,E]=await Promise.all([b("Thread").findOne({where:{id:t.main_source_id,session_id:t.id}}),b("FlowNode").findOne({where:{source_id:t.main_source_id,source_type:"Thread",session_id:t.id}})]);if(!L||!E)return;const F=await b("FlowEdge").find({where:{session_id:t.id,target:E.id}}),{flowNodes:P,flowNodeDatas:g}=await ce({where:{session_id:t.id,id:ue(F.map(p=>p.source))}}),_=(await b("FlowEdge").find({where:{session_id:t.id}})).filter(p=>p.target===E.id).map(p=>{var T;const y=P.find(A=>A.id===p.source);return{connection:p,source:y,entity:(T=g==null?void 0:g[y.source_type])==null?void 0:T.find(A=>A.id===y.source_id)}}),h=_.find(p=>p.source.source_type==="LLM"),D=_.filter(p=>p.source.source_type==="Prompt"),R=_.find(p=>p.source.source_type==="Schema");if(!(h!=null&&h.entity))return;const S=await b("FlowEdge").findOne({where:{session_id:t.id,source:E.id},order:{id:"DESC"}});if(S){const p=await b("FlowNode").findOne({where:{id:S.target,session_id:t.id}});if(!p)return;const y=await b("JSONData").findOne({where:{id:p.source_id,session_id:t.id}});if(!y)return;(f=u.current)==null||f.call(u,y.data),m({node:p,enity:y})}else{const p=await b("JSONData").save({headers:"item",session_id:t.id,json:"",data:[]});if(!p)return;const y=await b("FlowNode").save({session_id:t.id,source_id:p.id,source_type:"JSONData",node_type:"JSON_DATA",x:0,y:0});if(!y)return;await b("FlowEdge").save({session_id:t.id,source:E.id,target:y.id}),(j=u.current)==null||j.call(u,[]),m({node:y,enity:p})}s({llm:h.entity,status:M.Started,progress:""}),n({thread:L,threadNode:E}),i({prompts:(D==null?void 0:D.map(p=>p.entity))||[],schema:R==null?void 0:R.entity}),c.current.handled=t.id}finally{c.current.handling=void 0}},[t==null?void 0:t.id,t==null?void 0:t.main_source_id,t==null?void 0:t.main_source_type]),v=r.useCallback(async()=>{if(o!=null&&o.llm.name)try{s(f=>f&&{...f,status:M.Loading}),await N(o==null?void 0:o.llm.name,f=>{s(j=>j&&{...j,progress:f.text})}),s(f=>f&&{...f,status:M.Loaded,progress:""})}catch{s(f=>f&&{...f,status:M.Started,progress:""})}},[(w=o==null?void 0:o.llm)==null?void 0:w.name,N]),k=r.useCallback(f=>(u.current=f,()=>{u.current=void 0}),[]),C=r.useCallback(async f=>{!(d!=null&&d.node)||!(d!=null&&d.enity)||await b("JSONData").save({...d.enity,data:f})},[d==null?void 0:d.enity,d==null?void 0:d.node]);return r.useEffect(()=>{c.current.handling||(c==null?void 0:c.current.handled)===(t==null?void 0:t.id)||x()},[t==null?void 0:t.id,x]),{...e,loadLLM:v,threadInfo:l,mainLLMInfo:o,currentDataNode:d,updateMessagesData:C,onThreadMessagesLoaded:k}},je=()=>{const[e]=r.useState(!1),i=Te(s=>s.similaritySearchWithScore),{stream:l}=Qe(),n=r.useCallback(async(s,d)=>{const{placeholders:m}=d||{};if(!(m!=null&&m.length))return[];const u=[];return await Promise.all(m.map(async c=>{var N,x,v,k,C,w;const t=(N=c.node.data)==null?void 0:N.entity;if(t)switch(t.placeholder_type){case Ye.VECTOR_DATABASE_RETREIVER:{const f=(x=c.connectedNodes)==null?void 0:x.find(L=>L.type===re.VectorDatabase),j=(v=f==null?void 0:f.data)==null?void 0:v.entity;return(w=(C=(k=c.connectedNodes)==null?void 0:k.find(L=>L.type===re.Prompt))==null?void 0:C.data)!=null&&w.entity,void 0}}})),u},[i]),o=r.useCallback(async(s,d,m,u,{onMessageUpdate:c})=>{const{tools:t,schemas:N,placeholders:x}=m||{},v=[];x!=null&&x.length&&v.push(...await n(s,m));const k=d.map(w=>w.role==="system"?new Ae(w.content):w.role==="user"?new Oe(w.content):new Fe(w.content)),{content:C}=await l(k,{tools:t,schemas:N,onMessageUpdate:({content:w})=>{c==null||c({nodeData:{loading:!0,content:w}})}});return c==null||c({nodeData:{content:C}}),C},[n,l]);return{loading:e,sendMessage:o}},be=r.memo(({llm:e,status:i,loadLLM:l,progress:n})=>{const{t:o}=Pe("flows"),[s,d]=r.useState();r.useEffect(()=>{s||!(e!=null&&e.name)||ie(()=>import("./index-BME2DKnP.js").then(async c=>(await c.__tla,c)),__vite__mapDeps([0,1,2,3,4])).then(async({hasModelInCache:c,functionCallingModelIds:t,prebuiltAppConfig:N})=>{const x=await c(e==null?void 0:e.name);d({hasCache:x,isFunctionCalling:t.includes(e==null?void 0:e.name),info:N.model_list.find(v=>v.model_id===(e==null?void 0:e.name))})})},[e==null?void 0:e.name,s]);const m=r.useCallback(async()=>{await(l==null?void 0:l())},[l]),u=r.useMemo(()=>{switch(i){case M.Downloading:return a.jsx(le,{className:"animate-spin w-7 h-7",name:"arrow-big-down-dash"});case M.Loaded:return a.jsx(fe,{name:(e==null?void 0:e.name)||"brain",className:"w-7 h-7"});default:return a.jsx(fe,{name:(e==null?void 0:e.name)||"brain",className:"w-7 h-7"})}},[e==null?void 0:e.name,i]);return a.jsx(ea,{className:"flex justify-center !border-none !bg-inherit !p-2 max-w-full overflow-y-hidden mb-2",children:a.jsxs("div",{className:"ml-2 pt-1 max-w-full",children:[a.jsxs(aa,{className:"flex gap-2 items-center pr-6",children:[u,`${(e==null?void 0:e.name)||""}`]}),a.jsxs("div",{className:"max-w-full mt-2 flex-wrap flex gap-1",children:[a.jsx(sa,{model:s==null?void 0:s.info,isFunctionCalling:(s==null?void 0:s.isFunctionCalling)||!1,name:e==null?void 0:e.name,isCached:(s==null?void 0:s.hasCache)||!1}),i!==M.Loaded?n?a.jsx("div",{className:"text-sm break-words flex-wrap",children:n}):a.jsx(de,{disabled:i===M.Loading,onClick:m,className:"mt-4 w-full",children:o(s!=null&&s.hasCache?"llm_node.load_model_button":"llm_node.download_model_button")}):void 0]})]})})}),Le=e=>{const[i,l]=r.useState([]),n=q(s=>s.currentSession),o=r.useCallback(async()=>{if(!e||!(n!=null&&n.id))return;const s=await b("FlowEdge").find({where:{session_id:n.id,source:e.id},order:{id:"DESC"}}),{flowNodes:d,flowNodeDatas:m}=await ce({where:{session_id:n.id,id:ue(s.map(u=>u.target)),source_type:"JSONData"},order:{updated_at:"DESC"},select:["id","source_id","source_type","updated_at"]});l(d.reduce((u,c)=>{var N;const t=(N=m[c.source_type])==null?void 0:N.find(x=>x.id===c.source_id);return t&&u.push({node:c,entity:t}),u},[]))},[n==null?void 0:n.id,e]);return r.useEffect(()=>{e&&o()},[o,e]),{chatList:i,getChatList:o}};function Ce({mainLLMInfo:e,loadLLM:i,threadNode:l,currentDataNode:n,...o}){const{chatList:s}=Le(l);return a.jsxs(Je,{variant:"sidebar",side:"right",collapsible:"none",...o,children:[a.jsx("div",{className:"h-1"}),a.jsxs(Be,{children:[a.jsx(ze,{className:"flex-1",children:a.jsx(He,{children:s.map(({node:d},m)=>{var u;return a.jsx(Ue,{children:a.jsxs(We,{className:"cursor-pointer",children:[a.jsx("span",{children:`Thread ${m+1}`}),a.jsx(le,{name:((u=n==null?void 0:n.node)==null?void 0:u.id)===d.id?"check":"chevron-right",className:"ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"})]})},d.id)})})}),a.jsx(be,{llm:e==null?void 0:e.llm,status:e==null?void 0:e.status,progress:e==null?void 0:e.progress,loadLLM:i})]})]})}const Se=r.lazy(()=>ie(()=>import("./index-ChzwlTc9.js").then(async e=>(await e.__tla,e)),__vite__mapDeps([5,6,2,3,7,8]))),Me=[{icon:ia,label:"Copy"},{icon:oa,label:"Refresh"},{icon:ca,label:"Volume"}],ke=r.memo(()=>{const e=r.useRef(!1),[i,l]=r.useState(!1),n=r.useCallback(()=>{setTimeout(()=>{L.current&&(L.current.scrollTop=L.current.scrollHeight)},50)},[]),{threadInfo:o,mainLLMInfo:s,currentDataNode:d,loadLLM:m,updateMessagesData:u,onThreadMessagesLoaded:c}=ve(),{sendMessage:t}=je(),{input:N,setInput:x,messages:v,handleSubmit:k,handleInputChange:C,isLoading:w,reload:f,setMessages:j}=Ze({fetch:async(g,_)=>{const h=JSON.parse(_==null?void 0:_.body),D=oe(),R=h.messages[h.messages.length-1];return e.current=!0,j(S=>[...S,{id:oe(),content:R.content,role:"user"},{id:D,content:"Thinking...",role:"assistant"}]),await t(R.content,h.messages||[],void 0,[],{onMessageUpdate(S){j(p=>{const y=[...p],T=y.findIndex(A=>A.id===D);return T!==-1&&(y[T]={...y[T],content:S.nodeData.content||""}),y}),e.current&&n()}}),j(S=>(u(S),S)),l(!1),x(""),e.current&&n(),new Response}}),L=r.useRef(null);r.useEffect(()=>{const g=c(_=>{j(_||[]),n()});return()=>{g()}},[j,c,n]);const E=async(g,_)=>(l(!0),await k(_),!0),F=async(g,_)=>{if(g==="Refresh"){l(!0);try{await f()}catch(h){console.error("Error reloading:",h)}finally{l(!1)}}if(g==="Copy"){const h=v[_];h&&h.role==="assistant"&&navigator.clipboard.writeText(h.content)}if(g==="Volume"){const h=v[_];h!=null&&h.content&&await na.speak((h==null?void 0:h.content)||"")}},P=r.useCallback(()=>e.current=!1,[]);return a.jsxs($e,{onClick:P,className:"max-h-full !overflow-hidden !min-h-full",style:{minHeight:"unset"},defaultOpen:!0,children:[a.jsx(Ge,{className:"!max-h-full !overflow-hidden",style:{minHeight:"unset"},children:a.jsxs("main",{className:"flex h-full w-full max-w-2xl flex-col items-center mx-auto overflow-hidden",children:[a.jsx("div",{className:"flex-1 overflow-y-auto overflow-x-hidden min-w-full",children:a.jsx(se,{className:"!max-h-full",ref:L,children:v&&v.map((g,_)=>a.jsxs(ee,{variant:g.role=="user"?"sent":"received",children:[g.role!=="user"?a.jsx(ye,{src:"",fallback:"\u{1F916}"}):void 0,a.jsxs(ae,{children:[a.jsx(r.Suspense,{fallback:a.jsx(Y,{}),children:a.jsx(Se,{className:"!text-sm [&_p]:leading-relaxed !max-w-full !bg-transparent !text-inherit !font-sans",source:g.content||""})}),g.role==="assistant"&&v.length-1===_&&a.jsx("div",{className:"flex items-center mt-1.5 gap-1",children:!i&&a.jsx(a.Fragment,{children:Me.map((h,D)=>{const R=h.icon;return a.jsx(we,{variant:"ghost",className:"size-5",icon:a.jsx(R,{className:"size-3"}),onClick:()=>F(h.label,_)},D)})})})]})]},_))})}),a.jsx(ta,{className:"!max-w-2xl px-4",onSubmit:E,disabled:w||i||(s==null?void 0:s.status)!==M.Loaded,placeholder:"Type your message here...",maxHeight:72,value:N,onChange:C})]})}),a.jsx(Ce,{currentDataNode:d,threadNode:o==null?void 0:o.threadNode,loadLLM:m,mainLLMInfo:s})]})}),Ee=ke;me=function(){const e=q(i=>i.currentSession);if(!e)return a.jsx(Ve,{flickeringGrid:!0,className:"w-full h-full"});if(e.main_source_type==="Thread")return a.jsx(Ee,{})}});export{ma as __tla,me as default};
