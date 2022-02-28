import{r as s,o as n,c as o,a as e,d as l,F as t,e as r,b as i}from"./app.b1bfa7ff.js";import{_ as b}from"./plugin-vue_export-helper.21dcd24c.js";const c={},m=r(`<h1 id="macos-\u5347\u7EA7\u540E-homebrew-\u65E0\u6CD5\u9002\u7528" tabindex="-1"><a class="header-anchor" href="#macos-\u5347\u7EA7\u540E-homebrew-\u65E0\u6CD5\u9002\u7528" aria-hidden="true">#</a> MacOS \u5347\u7EA7\u540E Homebrew \u65E0\u6CD5\u9002\u7528</h1><p>[toc]</p><h2 id="\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898" aria-hidden="true">#</a> \u95EE\u9898</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Traceback (most recent call last):
	11: from /usr/local/Homebrew/Library/Homebrew/brew.rb:23:in \`&lt;main&gt;&#39;
	10: from /usr/local/Homebrew/Library/Homebrew/brew.rb:23:in \`require_relative&#39;
	 9: from /usr/local/Homebrew/Library/Homebrew/global.rb:29:in \`&lt;top (required)&gt;&#39;
	 8: from /usr/local/Homebrew/Library/Homebrew/vendor/portable-ruby/2.6.3/lib/ruby/2.6.0/rubygems/core_ext/kernel_require.rb:54:in \`require&#39;
	 7: from /usr/local/Homebrew/Library/Homebrew/vendor/portable-ruby/2.6.3/lib/ruby/2.6.0/rubygems/core_ext/kernel_require.rb:54:in \`require&#39;
	 6: from /usr/local/Homebrew/Library/Homebrew/os.rb:3:in \`&lt;top (required)&gt;&#39;
	 5: from /usr/local/Homebrew/Library/Homebrew/os.rb:21:in \`&lt;module:OS&gt;&#39;
	 4: from /usr/local/Homebrew/Library/Homebrew/os/mac.rb:58:in \`prerelease?&#39;
	 3: from /usr/local/Homebrew/Library/Homebrew/os/mac.rb:24:in \`version&#39;
	 2: from /usr/local/Homebrew/Library/Homebrew/os/mac.rb:24:in \`new&#39;
	 1: from /usr/local/Homebrew/Library/Homebrew/os/mac/version.rb:26:in \`initialize&#39;
/usr/local/Homebrew/Library/Homebrew/version.rb:368:in \`initialize&#39;: Version value must be a string; got a NilClass () (TypeError)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="\u539F\u56E0" tabindex="-1"><a class="header-anchor" href="#\u539F\u56E0" aria-hidden="true">#</a> \u539F\u56E0</h2><p>Upgraded macOS Big Sur, Homebrew is not compatible (only the official release version of macOS is supported).</p><h2 id="\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> \u89E3\u51B3\u65B9\u6848</h2><h3 id="\u65B9\u6848-1" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6848-1" aria-hidden="true">#</a> \u65B9\u6848 1</h3>`,8),u={href:"https://stackoverflow.com/questions/64821648/homebrew-fails-on-macos-big-sur",target:"_blank",rel:"noopener noreferrer"},p=i("Homebrew fails on MacOS Big Sur"),d=r(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>brew update-reset
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u6B64\u65B9\u6848\u5BF9\u6211\u4E0D\u9002\u7528</p><h3 id="\u65B9\u6848-2" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6848-2" aria-hidden="true">#</a> \u65B9\u6848 2</h3><p><strong>\u91CD\u65B0\u5378\u8F7D\u5B89\u88C5\uFF1A</strong></p><p>\u5378\u8F7D</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>bash -c &quot;$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/uninstall.sh)&quot;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5B89\u88C5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>bash -c &quot;$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)&quot;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>\u78B0\u5230\u4E86\u95EE\u9898\uFF1A443 \u7AEF\u53E3\u8FDE\u63A5\u88AB\u62D2</p></blockquote>`,9);function h(w,f){const a=s("ExternalLinkIcon");return n(),o(t,null,[m,e("p",null,[e("a",u,[p,l(a)])]),d],64)}var H=b(c,[["render",h]]);export{H as default};