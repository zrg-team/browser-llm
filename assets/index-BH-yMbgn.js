var Se=Object.defineProperty;var Le=(y,p,w)=>p in y?Se(y,p,{enumerable:!0,configurable:!0,writable:!0,value:w}):y[p]=w;var a=(y,p,w)=>Le(y,typeof p!="symbol"?p+"":p,w);import{M as Ie,O as Re,__tla as Ae}from"./index-UEqcJrA_.js";let ee,je=Promise.all([(()=>{try{return Ae}catch{}})()]).then(async()=>{const y="https://stackblitz.com",p=new Error;p.stack="";const w={};let x=null;const te={get editorOrigin(){return x==null&&(x=new URL(globalThis.WEBCONTAINER_API_IFRAME_URL??y).origin),x},set editorOrigin(t){x=new URL(t).origin},setQueryParam(t,e){w[t]=e},get url(){const t=new URL(this.editorOrigin);t.pathname="/headless";for(const e in w)t.searchParams.set(e,w[e]);return t.searchParams.set("version","1.5.1-internal.1"),t}};function ne(){let t,e;function n(){e=new Promise(r=>t=r)}return n(),{get promise(){return e},resolve(r){return t(r)},reset:n}}ne();var P;(function(t){t.UncaughtException="PREVIEW_UNCAUGHT_EXCEPTION",t.UnhandledRejection="PREVIEW_UNHANDLED_REJECTION",t.ConsoleError="PREVIEW_CONSOLE_ERROR"})(P||(P={}));var re=Object.defineProperty,se=(t,e)=>{for(var n in e)re(t,n,{get:e[n],enumerable:!0})},d={};se(d,{createEndpoint:()=>W,expose:()=>j,proxy:()=>X,proxyMarker:()=>I,releaseProxy:()=>D,transfer:()=>G,transferHandlers:()=>A,windowEndpoint:()=>le,wrap:()=>q});var I=Symbol("Comlink.proxy"),W=Symbol("Comlink.endpoint"),D=Symbol("Comlink.releaseProxy"),R=Symbol("Comlink.thrown"),H=t=>typeof t=="object"&&t!==null||typeof t=="function",ie={canHandle:t=>H(t)&&t[I],serialize(t){const{port1:e,port2:n}=new MessageChannel;return j(t,e),[n,[n]]},deserialize(t){return t.start(),q(t)}},oe={canHandle:t=>H(t)&&R in t,serialize({value:t}){let e;return t instanceof Error?e={isError:!0,value:{message:t.message,name:t.name,stack:t.stack}}:e={isError:!1,value:t},[e,[]]},deserialize(t){throw t.isError?Object.assign(new Error(t.value.message),t.value):t.value}},A=new Map([["proxy",ie],["throw",oe]]);function j(t,e=self){e.addEventListener("message",function n(r){if(!r||!r.data)return;const{id:s,type:o,path:i}=Object.assign({path:[]},r.data),c=(r.data.argumentList||[]).map(_);let l;try{const u=i.slice(0,-1).reduce((h,b)=>h[b],t),f=i.reduce((h,b)=>h[b],t);switch(o){case 0:l=f;break;case 1:u[i.slice(-1)[0]]=_(r.data.value),l=!0;break;case 2:l=f.apply(u,c);break;case 3:{const h=new f(...c);l=X(h)}break;case 4:{const{port1:h,port2:b}=new MessageChannel;j(t,b),l=G(h,[h])}break;case 5:l=void 0;break}}catch(u){l={value:u,[R]:0}}Promise.resolve(l).catch(u=>({value:u,[R]:0})).then(u=>{const[f,h]=U(u);e.postMessage(Object.assign(Object.assign({},f),{id:s}),h),o===5&&(e.removeEventListener("message",n),J(e))})}),e.start&&e.start()}function ae(t){return t.constructor.name==="MessagePort"}function J(t){ae(t)&&t.close()}function q(t,e){return N(t,[],e)}function k(t){if(t)throw new Error("Proxy has been released and is not useable")}function N(t,e=[],n=function(){}){let r=!1;const s=new Proxy(n,{get(o,i){if(k(r),i===D)return()=>E(t,{type:5,path:e.map(c=>c.toString())}).then(()=>{J(t),r=!0});if(i==="then"){if(e.length===0)return{then:()=>s};const c=E(t,{type:0,path:e.map(l=>l.toString())}).then(_);return c.then.bind(c)}return N(t,[...e,i])},set(o,i,c){k(r);const[l,u]=U(c);return E(t,{type:1,path:[...e,i].map(f=>f.toString()),value:l},u).then(_)},apply(o,i,c){k(r);const l=e[e.length-1];if(l===W)return E(t,{type:4}).then(_);if(l==="bind")return N(t,e.slice(0,-1));const[u,f]=B(c);return E(t,{type:2,path:e.map(h=>h.toString()),argumentList:u},f).then(_)},construct(o,i){k(r);const[c,l]=B(i);return E(t,{type:3,path:e.map(u=>u.toString()),argumentList:c},l).then(_)}});return s}function ce(t){return Array.prototype.concat.apply([],t)}function B(t){const e=t.map(U);return[e.map(n=>n[0]),ce(e.map(n=>n[1]))]}var V=new WeakMap;function G(t,e){return V.set(t,e),t}function X(t){return Object.assign(t,{[I]:!0})}function le(t,e=self,n="*"){return{postMessage:(r,s)=>t.postMessage(r,n,s),addEventListener:e.addEventListener.bind(e),removeEventListener:e.removeEventListener.bind(e)}}function U(t){for(const[e,n]of A)if(n.canHandle(t)){const[r,s]=n.serialize(t);return[{type:3,name:e,value:r},s]}return[{type:0,value:t},V.get(t)||[]]}function _(t){switch(t.type){case 3:return A.get(t.name).deserialize(t.value);case 0:return t.value}}function E(t,e,n){return new Promise(r=>{const s=ue();t.addEventListener("message",function o(i){!i.data||!i.data.id||i.data.id!==s||(t.removeEventListener("message",o),r(i.data))}),t.start&&t.start(),t.postMessage(Object.assign({id:s},e),n)})}function ue(){return new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}const he=[P.ConsoleError,P.UncaughtException,P.UnhandledRejection];function fe(t){return!(t==null||typeof t!="object"||!("type"in t)||!he.includes(t.type))}function v(t){const e=Object.create(null);return t?Object.assign(e,t):e}function $(t){const e={d:{}};for(const n of Object.keys(t)){const r=t[n];if("file"in r){if("symlink"in r.file){e.d[n]={f:{l:r.file.symlink}};continue}const o=r.file.contents,i=typeof o=="string"?o:de(o),c=typeof o=="string"?{}:{b:!0};e.d[n]={f:{c:i,...c}};continue}const s=$(r.directory);e.d[n]=s}return e}function Q(t){const e=v();if("f"in t)throw new Error("It is not possible to export a single file in the JSON format.");if("d"in t)for(const n of Object.keys(t.d)){const r=t.d[n];"d"in r?e[n]=v({directory:Q(r)}):"f"in r&&("c"in r.f?e[n]=v({file:v({contents:r.f.c})}):"l"in r.f&&(e[n]=v({file:v({symlink:r.f.l})})))}return e}function de(t){let e="";for(const n of t)e+=String.fromCharCode(n);return e}let C=null,O=null,M={};const K=new TextDecoder,pe=new TextEncoder,g=class g{constructor(e,n,r){a(this,"_instance");a(this,"_runtimeInfo");a(this,"fs");a(this,"internal");a(this,"_tornDown",!1);a(this,"_unsubscribeFromTokenChangedListener",()=>{});this._instance=e,this._runtimeInfo=r,this.fs=new Ee(n),this.internal=new we(e)}async spawn(e,n,r){let s=[];Array.isArray(n)?s=n:r=n;let o,i=new ReadableStream;if((r==null?void 0:r.output)!==!1){const m=z();o=m.push,i=m.stream}let c,l,u,f;if(l=new ReadableStream,f=new ReadableStream,r==null?void 0:r.stdout){const m=z();c=m.push,l=m.stream}if(r!=null&&r.stderr){const m=z();u=m.push,f=m.stream}const h=L(F(o)),b=L(F(c)),Ce=L(F(u)),Oe=await this._instance.run({command:e,args:s,cwd:r==null?void 0:r.cwd,env:r==null?void 0:r.env,terminal:r==null?void 0:r.terminal},b,Ce,h);return new be(Oe,i,l,f)}async export(e,n){const r={format:(n==null?void 0:n.format)??"json",includes:n==null?void 0:n.includes,excludes:n==null?void 0:n.excludes,external:!0},s=await this._instance.serialize(e,r);if(r.format==="json"){const o=JSON.parse(K.decode(s));return Q(o)}return s}on(e,n){if(e==="preview-message"){const o=n;n=i=>{fe(i)&&o(i)}}const{listener:r,subscribe:s}=T(n);return s(this._instance.on(e,d.proxy(r)))}mount(e,n){const r=e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):pe.encode(JSON.stringify($(e)));return this._instance.loadFiles(d.transfer(r,[r.buffer]),{mountPoints:n==null?void 0:n.mountPoint})}setPreviewScript(e,n){return this._instance.setPreviewScript(e,n)}get path(){return this._runtimeInfo.path}get workdir(){return this._runtimeInfo.cwd}teardown(){if(this._tornDown)throw new Error("WebContainer already torn down");this._tornDown=!0,this._unsubscribeFromTokenChangedListener(),this.fs._teardown(),this._instance.teardown(),this._instance[d.releaseProxy](),g._instance===this&&(g._instance=null)}static async boot(e={}){const{workdirName:n}=e;if(window.crossOriginIsolated&&e.coep==="none"&&console.warn(`A Cross-Origin-Embedder-Policy header is required in cross origin isolated environments.
Set the 'coep' option to 'require-corp'.`),(n==null?void 0:n.includes("/"))||n===".."||n===".")throw new Error("workdirName should be a valid folder name");for(;C;)await C;if(g._instance)throw new Error("Only a single WebContainer instance can be booted");const r=ve(e);C=r.catch(()=>{});try{const s=await r;return g._instance=s,s}finally{C=null}}};a(g,"_instance",null);let S=g;class we{constructor(e){a(this,"_instance");this._instance=e}watchPaths(e,n){const{listener:r,subscribe:s}=T(n);return s(this._instance.watchPaths(e,d.proxy(r)))}getProcesses(){return this._instance.getProcesses()}onProcessesRemove(e){const{listener:n,subscribe:r}=T(e);return r(this._instance.onProcessesRemove(d.proxy(n)))}serialize(e,n){return this._instance.serialize(e,n)}}const me=1,ye=2;class _e{constructor(e,n){a(this,"name");a(this,"_type");this.name=e,this._type=n}isFile(){return this._type===me}isDirectory(){return this._type===ye}}class ge{constructor(e,n,r,s){a(this,"_apiClient");a(this,"_path");a(this,"_options");a(this,"_listener");a(this,"_wrappedListener");a(this,"_watcher");a(this,"_closed",!1);this._apiClient=e,this._path=n,this._options=r,this._listener=s,this._apiClient._watchers.add(this),this._wrappedListener=(o,i)=>{this._listener&&!this._closed&&this._listener(o,i)},this._apiClient._fs.watch(this._path,this._options,L(this._wrappedListener)).then(o=>{this._watcher=o,this._closed&&this._teardown()}).catch(console.error)}close(){this._closed||(this._closed=!0,this._apiClient._watchers.delete(this),this._teardown())}_teardown(){var e;(e=this._watcher)==null||e.close().finally(()=>{var n;(n=this._watcher)==null||n[d.releaseProxy]()})}}class be{constructor(e,n,r,s){a(this,"output");a(this,"input");a(this,"exit");a(this,"_process");a(this,"stdout");a(this,"stderr");this.output=n,this._process=e,this.input=new WritableStream({write:o=>{var i;(i=this._getProcess())==null||i.write(o).catch(()=>{})}}),this.exit=this._onExit(),this.stdout=r,this.stderr=s}kill(){var e;(e=this._getProcess())==null||e.kill()}resize(e){var n;(n=this._getProcess())==null||n.resize(e)}async _onExit(){var e;try{return await this._process.onExit}finally{(e=this._process)==null||e[d.releaseProxy](),this._process=null}}_getProcess(){return this._process==null&&console.warn("This process already exited"),this._process}}class Ee{constructor(e){a(this,"_fs");a(this,"_watchers",new Set([]));this._fs=e}rm(...e){return this._fs.rm(...e)}async readFile(e,n){return await this._fs.readFile(e,n)}async rename(e,n){return await this._fs.rename(e,n)}async writeFile(e,n,r){if(n instanceof Uint8Array){const s=n.buffer.slice(n.byteOffset,n.byteOffset+n.byteLength);n=d.transfer(new Uint8Array(s),[s])}await this._fs.writeFile(e,n,r)}async readdir(e,n){const r=await this._fs.readdir(e,n);return xe(r)||ke(r)?r:r.map(s=>new _e(s.name,s["Symbol(type)"]))}async mkdir(e,n){return await this._fs.mkdir(e,n)}watch(e,n,r){return typeof n=="function"&&(r=n,n=null),new ge(this,e,n,r)}_teardown(){this._fs[d.releaseProxy]();for(const e of this._watchers)e.close()}}async function ve(t){const{serverPromise:e}=Pe(t),n=await(await e).build({host:window.location.host,version:"1.5.1-internal.1",workdirName:t.workdirName,forwardPreviewErrors:t.forwardPreviewErrors}),r=await n.fs(),s=await n.runtimeInfo();return new S(n,r,s)}function F(t){if(t!=null)return e=>{e instanceof Uint8Array?t(K.decode(e)):e==null&&t(null)}}function L(t){if(t!=null)return d.proxy(t)}function Pe(t){if(O!=null)return t.coep!==M.coep&&(console.warn(`Attempting to boot WebContainer with 'coep: ${t.coep}'`),console.warn(`First boot had 'coep: ${M.coep}', new settings will not take effect!`)),{serverPromise:O};const e=document.createElement("iframe");e.style.display="none",e.setAttribute("allow","cross-origin-isolated");const n=te.url;t.coep&&n.searchParams.set("coep",t.coep),e.src=n.toString();const{origin:r}=n;return M={...t},O=new Promise(s=>{const o=i=>{if(i.origin!==r)return;const{data:c}=i;if(c.type==="init"){s(d.wrap(i.ports[0]));return}if(c.type==="warning"){console[c.level].call(console,c.message);return}};window.addEventListener("message",o)}),document.body.insertBefore(e,null),{serverPromise:O}}function xe(t){return typeof t[0]=="string"}function ke(t){return t[0]instanceof Uint8Array}function z(){let t=null;return{stream:new ReadableStream({start(e){t=e}}),push:e=>{e!=null?t==null||t.enqueue(e):(t==null||t.close(),t=null)}}}function T(t){let e=!1,n=()=>{};return{subscribe(r){return r.then(s=>{n=s,e&&n()}),()=>{e=!0,n()}},listener:(...r)=>{e||t(...r)}}}let Y,Z;Y=(t,e)=>({init:async()=>{try{const n=e().webcontainerInstance;if(console.log("currentWebcontainerInstance",n),n)return n;const r=await S.boot({coep:"credentialless"});return t({webcontainerInstance:r}),r}catch(n){console.warn("Failed init:",n)}finally{t({ready:!0})}},teardown:async()=>{const n=e().webcontainerInstance;n&&n.teardown(),t({webcontainerInstance:void 0})},mounts:async n=>{try{const r=e().webcontainerInstance;if(!r)throw new Error("WebContainer instance is not ready");await r.mount(n)}catch(r){console.warn("Failed startContainer:",r)}}}),Z={},ee=Ie()(Re((t,e)=>({...Z,...Y(t,e)})))});export{je as __tla,ee as u};
