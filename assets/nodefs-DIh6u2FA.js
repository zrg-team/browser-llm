import{x as o,s as n,C as i}from"./database.worker-VeToeOCT.js";o();var u=class extends n{constructor(s){super(s),this.rootDir=(void 0)(s),(void 0)((void 0)(this.rootDir))||(void 0)(this.rootDir)}async init(s,e){return this.pg=s,{emscriptenOpts:{...e,preRun:[...e.preRun||[],t=>{let r=t.FS.filesystems.NODEFS;t.FS.mkdir(i),t.FS.mount(r,{root:this.rootDir},i)}]}}}async closeFs(){this.pg.Module.FS.quit()}};export{u as NodeFS};
