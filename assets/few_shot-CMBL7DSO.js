import{bA as p,bB as o,bC as m,bD as n,__tla as u}from"./routes-D7v42ZIH.js";import{__tla as h}from"./index-BZZ1Euas.js";import{__tla as f}from"./dot-D6NQrwhQ.js";import{__tla as c}from"./createLucideIcon-C8yHq_53.js";let i,b=Promise.all([(()=>{try{return u}catch{}})(),(()=>{try{return h}catch{}})(),(()=>{try{return f}catch{}})(),(()=>{try{return c}catch{}})()]).then(async()=>{i=class extends p{constructor(e){if(super(e),Object.defineProperty(this,"lc_serializable",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"examples",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"exampleSelector",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"examplePrompt",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"suffix",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"exampleSeparator",{enumerable:!0,configurable:!0,writable:!0,value:`

`}),Object.defineProperty(this,"prefix",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"templateFormat",{enumerable:!0,configurable:!0,writable:!0,value:"f-string"}),Object.defineProperty(this,"validateTemplate",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.assign(this,e),this.examples!==void 0&&this.exampleSelector!==void 0)throw new Error("Only one of 'examples' and 'example_selector' should be provided");if(this.examples===void 0&&this.exampleSelector===void 0)throw new Error("One of 'examples' and 'example_selector' should be provided");if(this.validateTemplate){let t=this.inputVariables;this.partialVariables&&(t=t.concat(Object.keys(this.partialVariables))),o(this.prefix+this.suffix,this.templateFormat,t)}}_getPromptType(){return"few_shot"}static lc_name(){return"FewShotPromptTemplate"}async getExamples(e){if(this.examples!==void 0)return this.examples;if(this.exampleSelector!==void 0)return this.exampleSelector.selectExamples(e);throw new Error("One of 'examples' and 'example_selector' should be provided")}async partial(e){const t=this.inputVariables.filter(l=>!(l in e)),a={...this.partialVariables??{},...e},r={...this,inputVariables:t,partialVariables:a};return new i(r)}async format(e){const t=await this.mergePartialAndUserVariables(e),a=await this.getExamples(t),r=await Promise.all(a.map(s=>this.examplePrompt.format(s))),l=[this.prefix,...r,this.suffix].join(this.exampleSeparator);return m(l,this.templateFormat,t)}serialize(){if(this.exampleSelector||!this.examples)throw new Error("Serializing an example selector is not currently supported");if(this.outputParser!==void 0)throw new Error("Serializing an output parser is not currently supported");return{_type:this._getPromptType(),input_variables:this.inputVariables,example_prompt:this.examplePrompt.serialize(),example_separator:this.exampleSeparator,suffix:this.suffix,prefix:this.prefix,template_format:this.templateFormat,examples:this.examples}}static async deserialize(e){const{example_prompt:t}=e;if(!t)throw new Error("Missing example prompt");const a=await n.deserialize(t);let r;if(Array.isArray(e.examples))r=e.examples;else throw new Error("Invalid examples format. Only list or string are supported.");return new i({inputVariables:e.input_variables,examplePrompt:a,examples:r,exampleSeparator:e.example_separator,prefix:e.prefix,suffix:e.suffix,templateFormat:e.template_format})}}});export{i as FewShotPromptTemplate,b as __tla};
