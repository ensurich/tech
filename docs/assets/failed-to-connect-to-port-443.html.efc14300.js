import{r as o,o as a,c as r,a as e,d as s,F as c,b as t,e as l}from"./app.0fd6de71.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const d={},p=e("h1",{id:"_443-\u7AEF\u53E3\u8FDE\u63A5\u88AB\u62D2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_443-\u7AEF\u53E3\u8FDE\u63A5\u88AB\u62D2","aria-hidden":"true"},"#"),t(" 443 \u7AEF\u53E3\u8FDE\u63A5\u88AB\u62D2")],-1),u=e("strong",null,"\u78B0\u5230\u95EE\u9898\uFF1A",-1),_={href:"https://zhuanlan.zhihu.com/p/115450863",target:"_blank",rel:"noopener noreferrer"},h=t("Failed to connect to raw.githubusercontent.com:443"),m=l(`<p>\u5B8C\u6574\u62A5\u9519\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>curl: (7) Failed to connect to raw.githubusercontent.com port 443: Connection refused
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>443 \u7AEF\u53E3\u8FDE\u63A5\u88AB\u62D2\u4E00\u822C\u662F\u56E0\u4E3A\u5899\u7684\u539F\u56E0\uFF0C\u5982\u679C\u4F60\u53EF\u4EE5\u79D1\u5B66\u4E0A\u7F51\uFF08Virtual Private Network\uFF09\u7684\u8BDD\uFF0C\u5728\u547D\u4EE4\u884C\u952E\u4EE5\u4E0B\u547D\u4EE4\u6267\u884C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># 8118 \u548C 8119 \u9700\u8981\u6362\u6210\u4F60\u81EA\u5DF1\u7684\u7AEF\u53E3
export https_proxy=http://127.0.0.1:8118 http_proxy=http://127.0.0.1:7890 all_proxy=socks5://127.0.0.1:8119
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,4);function x(b,g){const n=o("ExternalLinkIcon");return a(),r(c,null,[p,e("p",null,[u,e("a",_,[h,s(n)])]),m],64)}var k=i(d,[["render",x]]);export{k as default};
