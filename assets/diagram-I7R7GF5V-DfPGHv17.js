import{p as y}from"./chunk-K2ZEYYM2-DnSzQal7.js";import{p as B}from"./treemap-6Y5VK53G-6YABNVES-B7oZL4rc.js";import{a as l,s as S,g as z,x as F,v as P,b as E,c as W,H as m,aO as T,f as D,B as A,I as _,K as N,l as x}from"./Mermaid.vue_vue_type_script_setup_true_lang-CdG0hVkb.js";import"./chunk-TGZYFRKZ-B_0VEEDY.js";import"./index-DkiQmVMo.js";import"./modules/vue-DgXlyK0Z.js";import"./modules/shiki-BjQn_BTH.js";import"./modules/file-saver-B8IIMB9x.js";var w={packet:[]},v=structuredClone(w),I=N.packet,L=l(()=>{const t=m({...I,..._().packet});return t.showBits&&(t.paddingY+=10),t},"getConfig"),O=l(()=>v.packet,"getPacket"),Y=l(t=>{t.length>0&&v.packet.push(t)},"pushWord"),H=l(()=>{A(),v=structuredClone(w)},"clear"),u={pushWord:Y,getPacket:O,getConfig:L,clear:H,setAccTitle:W,getAccTitle:E,setDiagramTitle:P,getDiagramTitle:F,getAccDescription:z,setAccDescription:S},K=1e4,M=l(t=>{y(t,u);let e=-1,o=[],s=1;const{bitsPerRow:n}=u.getConfig();for(let{start:a,end:r,bits:c,label:f}of t.blocks){if(a!==void 0&&r!==void 0&&r<a)throw new Error(`Packet block ${a} - ${r} is invalid. End must be greater than start.`);if(a??(a=e+1),a!==e+1)throw new Error(`Packet block ${a} - ${r??a} is not contiguous. It should start from ${e+1}.`);if(c===0)throw new Error(`Packet block ${a} is invalid. Cannot have a zero bit field.`);for(r??(r=a+(c??1)-1),c??(c=r-a+1),e=r,x.debug(`Packet block ${a} - ${e} with label ${f}`);o.length<=n+1&&u.getPacket().length<K;){const[d,p]=G({start:a,end:r,bits:c,label:f},s,n);if(o.push(d),d.end+1===s*n&&(u.pushWord(o),o=[],s++),!p)break;({start:a,end:r,bits:c,label:f}=p)}}u.pushWord(o)},"populate"),G=l((t,e,o)=>{if(t.start===void 0)throw new Error("start should have been set during first phase");if(t.end===void 0)throw new Error("end should have been set during first phase");if(t.start>t.end)throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);if(t.end+1<=e*o)return[t,void 0];const s=e*o-1,n=e*o;return[{start:t.start,end:s,label:t.label,bits:s-t.start},{start:n,end:t.end,label:t.label,bits:t.end-n}]},"getNextFittingBlock"),R={parse:l(async t=>{const e=await B("packet",t);x.debug(e),M(e)},"parse")},U=l((t,e,o,s)=>{const n=s.db,a=n.getConfig(),{rowHeight:r,paddingY:c,bitWidth:f,bitsPerRow:d}=a,p=n.getPacket(),i=n.getDiagramTitle(),k=r+c,g=k*(p.length+1)-(i?0:r),b=f*d+2,h=T(e);h.attr("viewbox",`0 0 ${b} ${g}`),D(h,g,b,a.useMaxWidth);for(const[C,$]of p.entries())X(h,$,C,a);h.append("text").text(i).attr("x",b/2).attr("y",g-k/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),X=l((t,e,o,{rowHeight:s,paddingX:n,paddingY:a,bitWidth:r,bitsPerRow:c,showBits:f})=>{const d=t.append("g"),p=o*(s+a)+a;for(const i of e){const k=i.start%c*r+1,g=(i.end-i.start+1)*r-n;if(d.append("rect").attr("x",k).attr("y",p).attr("width",g).attr("height",s).attr("class","packetBlock"),d.append("text").attr("x",k+g/2).attr("y",p+s/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(i.label),!f)continue;const b=i.end===i.start,h=p-2;d.append("text").attr("x",k+(b?g/2:0)).attr("y",h).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",b?"middle":"start").text(i.start),b||d.append("text").attr("x",k+g).attr("y",h).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(i.end)}},"drawWord"),j={draw:U},q={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},J=l(({packet:t}={})=>{const e=m(q,t);return`
	.packetByte {
		font-size: ${e.byteFontSize};
	}
	.packetByte.start {
		fill: ${e.startByteColor};
	}
	.packetByte.end {
		fill: ${e.endByteColor};
	}
	.packetLabel {
		fill: ${e.labelColor};
		font-size: ${e.labelFontSize};
	}
	.packetTitle {
		fill: ${e.titleColor};
		font-size: ${e.titleFontSize};
	}
	.packetBlock {
		stroke: ${e.blockStrokeColor};
		stroke-width: ${e.blockStrokeWidth};
		fill: ${e.blockFillColor};
	}
	`},"styles"),st={parser:R,db:u,renderer:j,styles:J};export{st as diagram};
