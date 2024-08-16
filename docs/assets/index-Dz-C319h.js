import{p as D,s as V,a as q,r as K,O as v,Q as H,R as Y,c as j,S as B,k as W,M as R,E as g,N as S,A as u,W as m,b as x,C as F,d as G}from"./index-GLt19FPd.js";import{i as mt,X as yt,$ as wt}from"./index-GLt19FPd.js";const c=D({status:"uninitialized"}),p={state:c,subscribeKey(s,t){return V(c,s,t)},subscribe(s){return q(c,()=>s(c))},_getClient(){if(!c._client)throw new Error("SIWEController client not set");return c._client},async getNonce(s){const e=await this._getClient().getNonce(s);return this.setNonce(e),e},async getSession(){try{const t=await this._getClient().getSession();return t&&(this.setSession(t),this.setStatus("success")),t}catch{return}},createMessage(s){const e=this._getClient().createMessage(s);return this.setMessage(e),e},async verifyMessage(s){return await this._getClient().verifyMessage(s)},async signIn(){return await this._getClient().signIn()},async signOut(){var t;const s=this._getClient();await s.signOut(),this.setStatus("ready"),this.setSession(void 0),(t=s.onSignOut)==null||t.call(s)},onSignIn(s){var e;const t=this._getClient();(e=t.onSignIn)==null||e.call(t,s)},onSignOut(){var t;const s=this._getClient();(t=s.onSignOut)==null||t.call(s)},setSIWEClient(s){c._client=K(s),c.status="ready",v.setIsSiweEnabled(s.options.enabled)},setNonce(s){c.nonce=s},setStatus(s){c.status=s},setMessage(s){c.message=s},setSession(s){c.session=s,c.status=s?"success":"ready"}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const y=globalThis,A=y.ShadowRoot&&(y.ShadyCSS===void 0||y.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,U=Symbol(),T=new WeakMap;let z=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==U)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(A&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=T.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&T.set(e,t))}return t}toString(){return this.cssText}};const J=s=>new z(typeof s=="string"?s:s+"",void 0,U),X=(s,...t)=>{const e=s.length===1?s[0]:t.reduce((i,n,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+s[r+1],s[0]);return new z(e,s,U)},Q=(s,t)=>{if(A)s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),n=y.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,s.appendChild(i)}},M=A?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return J(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Z,defineProperty:tt,getOwnPropertyDescriptor:et,getOwnPropertyNames:st,getOwnPropertySymbols:it,getPrototypeOf:nt}=Object,l=globalThis,N=l.trustedTypes,rt=N?N.emptyScript:"",E=l.reactiveElementPolyfillSupport,f=(s,t)=>s,w={toAttribute(s,t){switch(t){case Boolean:s=s?rt:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},P=(s,t)=>!Z(s,t),k={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:P};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),l.litPropertyMetadata??(l.litPropertyMetadata=new WeakMap);class h extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=k){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,e);n!==void 0&&tt(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){const{get:n,set:r}=et(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get(){return n==null?void 0:n.call(this)},set(o){const a=n==null?void 0:n.call(this);r.call(this,o),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??k}static _$Ei(){if(this.hasOwnProperty(f("elementProperties")))return;const t=nt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(f("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(f("properties"))){const e=this.properties,i=[...st(e),...it(e)];for(const n of i)this.createProperty(n,e[n])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,n]of e)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const n=this._$Eu(e,i);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(M(n))}else t!==void 0&&e.push(M(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Q(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){var r;const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(n!==void 0&&i.reflect===!0){const o=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:w).toAttribute(e,i.type);this._$Em=t,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(t,e){var r;const i=this.constructor,n=i._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const o=i.getPropertyOptions(n),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)==null?void 0:r.fromAttribute)!==void 0?o.converter:w;this._$Em=n,this[n]=a.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??P)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[r,o]of n)o.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],o)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(n=>{var r;return(r=n.hostUpdate)==null?void 0:r.call(n)}),this.update(e)):this._$EU()}catch(n){throw t=!1,this._$EU(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var n;return(n=i.hostUpdated)==null?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}h.elementStyles=[],h.shadowRootOptions={mode:"open"},h[f("elementProperties")]=new Map,h[f("finalized")]=new Map,E==null||E({ReactiveElement:h}),(l.reactiveElementVersions??(l.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class d extends h{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=H(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this.o)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.o)==null||t.setConnected(!1)}render(){return Y}}var I;d._$litElement$=!0,d.finalized=!0,(I=globalThis.litElementHydrateSupport)==null||I.call(globalThis,{LitElement:d});const b=globalThis.litElementPolyfillSupport;b==null||b({LitElement:d});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.0");const ot=X`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;var at=function(s,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(r=(n<3?o(r):n>3?o(t,e,r):o(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r};let $=class extends d{constructor(){var t;super(...arguments),this.dappImageUrl=(t=v.state.metadata)==null?void 0:t.icons,this.walletImageUrl=B.getConnectedWalletImageUrl()}firstUpdated(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelectorAll("wui-visual-thumbnail");t!=null&&t[0]&&this.createAnimation(t[0],"translate(18px)"),t!=null&&t[1]&&this.createAnimation(t[1],"translate(-18px)")}render(){var t;return W`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${(t=this.dappImageUrl)==null?void 0:t[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(t,e){t.animate([{transform:"translateX(0px)"},{transform:e}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};$.styles=ot;$=at([j("w3m-connecting-siwe")],$);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ct={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:P},lt=(s=ct,t,e)=>{const{kind:i,metadata:n}=e;let r=globalThis.litPropertyMetadata.get(n);if(r===void 0&&globalThis.litPropertyMetadata.set(n,r=new Map),r.set(e.name,s),i==="accessor"){const{name:o}=e;return{set(a){const _=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,_,s)},init(a){return a!==void 0&&this.P(o,void 0,s),a}}}if(i==="setter"){const{name:o}=e;return function(a){const _=this[o];t.call(this,a),this.requestUpdate(o,_,s)}}throw Error("Unsupported decorator location: "+i)};function ht(s){return(t,e)=>typeof e=="object"?lt(s,t,e):((i,n,r)=>{const o=n.hasOwnProperty(r);return n.constructor.createProperty(r,o?{...i,wrapped:!0}:i),o?Object.getOwnPropertyDescriptor(n,r):void 0})(s,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function L(s){return ht({...s,state:!0,attribute:!1})}var O=function(s,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(r=(n<3?o(r):n>3?o(t,e,r):o(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r};let C=class extends d{constructor(){var t;super(...arguments),this.dappName=(t=v.state.metadata)==null?void 0:t.name,this.isSigning=!1,this.isCancelling=!1}render(){return this.onRender(),W`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          Cancel
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="main"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}onRender(){p.state.session&&R.close()}async onSign(){var t,e,i;this.isSigning=!0,g.sendEvent({event:"CLICK_SIGN_SIWE_MESSAGE",type:"track",properties:{network:((t=S.state.caipNetwork)==null?void 0:t.id)||"",isSmartAccount:u.state.preferredAccountType===m.ACCOUNT_TYPES.SMART_ACCOUNT}});try{p.setStatus("loading");const n=await p.signIn();return p.setStatus("success"),g.sendEvent({event:"SIWE_AUTH_SUCCESS",type:"track",properties:{network:((e=S.state.caipNetwork)==null?void 0:e.id)||"",isSmartAccount:u.state.preferredAccountType===m.ACCOUNT_TYPES.SMART_ACCOUNT}}),n}catch{const o=u.state.preferredAccountType===m.ACCOUNT_TYPES.SMART_ACCOUNT;return o?x.showError("This application might not support Smart Accounts"):x.showError("Signature declined"),p.setStatus("error"),g.sendEvent({event:"SIWE_AUTH_ERROR",type:"track",properties:{network:((i=S.state.caipNetwork)==null?void 0:i.id)||"",isSmartAccount:o}})}finally{this.isSigning=!1}}async onCancel(){var e;this.isCancelling=!0,u.state.isConnected?(await F.disconnect(),R.close()):G.push("Connect"),this.isCancelling=!1,g.sendEvent({event:"CLICK_CANCEL_SIWE",type:"track",properties:{network:((e=S.state.caipNetwork)==null?void 0:e.id)||"",isSmartAccount:u.state.preferredAccountType===m.ACCOUNT_TYPES.SMART_ACCOUNT}})}};O([L()],C.prototype,"isSigning",void 0);O([L()],C.prototype,"isCancelling",void 0);C=O([j("w3m-connecting-siwe-view")],C);export{p as SIWEController,$ as W3mConnectingSiwe,C as W3mConnectingSiweView,mt as formatMessage,yt as getDidAddress,wt as getDidChainId};
