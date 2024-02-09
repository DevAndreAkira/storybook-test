import"./index-mn_6X-ib.js";const i=({primary:r=!0,size:e="medium",backgroundColor:c,label:l,onClick:m})=>{const o=document.createElement("button");o.type="button",o.textContent=l,o.addEventListener("click",m);const u=r?"promo1-button--primary":"promo1-button--secondary";return o.className=["promo1-button",`promo1-button--${e}`,u].join(" "),o.style.backgroundColor=c,o},d={title:"Plataforma de sorteio/Promo1/Botão Padrão",render:({label:r,...e})=>i({label:r,...e}),argTypes:{backgroundColor:{control:"color"},label:{control:"text"},onClick:{action:"onClick"},primary:{control:"boolean"},size:{control:{type:"select"},options:["small","medium","large"]}},args:{onClick(){alert("Teste")}}},t={args:{primary:!0,label:"Button"}};var n,a,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const b=["Botão_padrão"];export{t as Botão_padrão,b as __namedExportsOrder,d as default};
