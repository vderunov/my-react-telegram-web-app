import{OptionsController as C,StorageUtil as A,ModalController as S,EventsController as d,NetworkController as g,AccountController as l,SnackController as m,ConnectionController as v,RouterController as E}from"@web3modal/core";import"@web3modal/common";import{p as T,s as I,a as N,r as O,i as R,c as y,h as b,k as _,b as x}from"./index-C9OFKVr5.js";import{d as V,X as Y,$ as L}from"./index-C9OFKVr5.js";import{W3mFrameRpcConstants as p}from"@web3modal/wallet";const s=T({status:"uninitialized"}),u={state:s,subscribeKey(t,e){return I(s,t,e)},subscribe(t){return N(s,()=>t(s))},_getClient(){if(!s._client)throw new Error("SIWEController client not set");return s._client},async getNonce(t){const n=await this._getClient().getNonce(t);return this.setNonce(n),n},async getSession(){try{const e=await this._getClient().getSession();return e&&(this.setSession(e),this.setStatus("success")),e}catch{return}},createMessage(t){const n=this._getClient().createMessage(t);return this.setMessage(n),n},async verifyMessage(t){return await this._getClient().verifyMessage(t)},async signIn(){return await this._getClient().signIn()},async signOut(){var e;const t=this._getClient();await t.signOut(),this.setStatus("ready"),this.setSession(void 0),(e=t.onSignOut)==null||e.call(t)},onSignIn(t){var n;const e=this._getClient();(n=e.onSignIn)==null||n.call(e,t)},onSignOut(){var e;const t=this._getClient();(e=t.onSignOut)==null||e.call(t)},setSIWEClient(t){s._client=O(t),s.status="ready",C.setIsSiweEnabled(t.options.enabled)},setNonce(t){s.nonce=t},setStatus(t){s.status=t},setMessage(t){s.message=t},setSession(t){s.session=t,s.status=t?"success":"ready"}},U=R`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;var W=function(t,e,n,r){var a=arguments.length,i=a<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i};let w=class extends b{constructor(){var e;super(...arguments),this.dappImageUrl=(e=C.state.metadata)==null?void 0:e.icons,this.walletImageUrl=A.getConnectedWalletImageUrl()}firstUpdated(){var n;const e=(n=this.shadowRoot)==null?void 0:n.querySelectorAll("wui-visual-thumbnail");e!=null&&e[0]&&this.createAnimation(e[0],"translate(18px)"),e!=null&&e[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){var e;return _`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${(e=this.dappImageUrl)==null?void 0:e[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,n){e.animate([{transform:"translateX(0px)"},{transform:n}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};w.styles=U;w=W([y("w3m-connecting-siwe")],w);var h=function(t,e,n,r){var a=arguments.length,i=a<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i};let f=class extends b{constructor(){var e;super(...arguments),this.dappName=(e=C.state.metadata)==null?void 0:e.name,this.isSigning=!1,this.isCancelling=!1}render(){return this.onRender(),_`
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
    `}onRender(){u.state.session&&S.close()}async onSign(){var e,n,r;this.isSigning=!0,d.sendEvent({event:"CLICK_SIGN_SIWE_MESSAGE",type:"track",properties:{network:((e=g.state.caipNetwork)==null?void 0:e.id)||"",isSmartAccount:l.state.preferredAccountType===p.ACCOUNT_TYPES.SMART_ACCOUNT}});try{u.setStatus("loading");const a=await u.signIn();return u.setStatus("success"),d.sendEvent({event:"SIWE_AUTH_SUCCESS",type:"track",properties:{network:((n=g.state.caipNetwork)==null?void 0:n.id)||"",isSmartAccount:l.state.preferredAccountType===p.ACCOUNT_TYPES.SMART_ACCOUNT}}),a}catch{const o=l.state.preferredAccountType===p.ACCOUNT_TYPES.SMART_ACCOUNT;return o?m.showError("This application might not support Smart Accounts"):m.showError("Signature declined"),u.setStatus("error"),d.sendEvent({event:"SIWE_AUTH_ERROR",type:"track",properties:{network:((r=g.state.caipNetwork)==null?void 0:r.id)||"",isSmartAccount:o}})}finally{this.isSigning=!1}}async onCancel(){var n;this.isCancelling=!0,l.state.isConnected?(await v.disconnect(),S.close()):E.push("Connect"),this.isCancelling=!1,d.sendEvent({event:"CLICK_CANCEL_SIWE",type:"track",properties:{network:((n=g.state.caipNetwork)==null?void 0:n.id)||"",isSmartAccount:l.state.preferredAccountType===p.ACCOUNT_TYPES.SMART_ACCOUNT}})}};h([x()],f.prototype,"isSigning",void 0);h([x()],f.prototype,"isCancelling",void 0);f=h([y("w3m-connecting-siwe-view")],f);export{u as SIWEController,w as W3mConnectingSiwe,f as W3mConnectingSiweView,V as formatMessage,Y as getDidAddress,L as getDidChainId};
