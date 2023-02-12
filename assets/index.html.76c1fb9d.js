import{_ as i,o as a,c as r,a as e,b as t,d as n,w as s,e as d,r as h}from"./app.d49112f3.js";const l={},c={class:"custom-container tip"},p=e("p",{class:"custom-container-title"},"TIP",-1),u=d('<h2 id="iphone-7-8-home-button-does-not-work-after-jailbreaking-with-semi-tethered" tabindex="-1"><a class="header-anchor" href="#iphone-7-8-home-button-does-not-work-after-jailbreaking-with-semi-tethered" aria-hidden="true">#</a> iPhone 7/8 Home Button does not work after jailbreaking with --semi-tethered</h2><p>Due to reasons that haven&#39;t been figured out yet, using the --semi-tethered option to jailbreak with the iPhone 7 or iPhone 8 will cause the home button to be non-functional.</p><p>At this time, the only way to workaround this issue is to switch to tethered palera1n.</p><h2 id="adding-the-palera1n-repo-or-https-mineek-github-io-repo-does-not-work" tabindex="-1"><a class="header-anchor" href="#adding-the-palera1n-repo-or-https-mineek-github-io-repo-does-not-work" aria-hidden="true">#</a> Adding the palera1n repo or https://mineek.github.io/repo does not work</h2><p>These are repositories that are only intended for use with rootless jailbreaks. Attempting to add these to palera1n (or any other currently available jailbreak) will fail.</p><h2 id="packages-from-the-procursus-repo-don-t-properly-work-e-g-killed-9" tabindex="-1"><a class="header-anchor" href="#packages-from-the-procursus-repo-don-t-properly-work-e-g-killed-9" aria-hidden="true">#</a> Packages from the Procursus repo don&#39;t properly work (e.g. killed: 9)</h2><p>The binaries of these packages need to be resigned by Procursus Team with a newer version of ldid.</p><p>There are two workarounds to this issue that you can use until this is done:</p><ul><li>Resign the binaries using <code>ldid -s</code> (e.g. <code>ldid -s /Applications/Filza.app</code>)</li><li>Add <code>https://mineek.online/</code> which is a mirror of the Procursus repository with the binaries resigned</li></ul><h2 id="attempting-to-use-semi-tethered-with-a-wifi-only-ipad-or-ipod-touch-does-not-succeed" tabindex="-1"><a class="header-anchor" href="#attempting-to-use-semi-tethered-with-a-wifi-only-ipad-or-ipod-touch-does-not-succeed" aria-hidden="true">#</a> Attempting to use --semi-tethered with a WiFi-only iPad or iPod Touch does not succeed</h2><p>Add --no-baseband to the end of the command used to jailbreak your device.</p><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Do not do this if the device you are having an issue with is a cellular device</p></div><h2 id="newterm-does-not-launch" tabindex="-1"><a class="header-anchor" href="#newterm-does-not-launch" aria-hidden="true">#</a> NewTerm does not launch</h2><p>Add <code>https://apt.nickchan.lol</code> and then install NewTerm3 from there instead.</p>',14);function m(k,w){const o=h("router-link");return a(),r("div",null,[e("div",c,[p,e("p",null,[t("If you're looking for more general troubleshooting steps, you should take a look at "),n(o,{to:"/troubleshooting"},{default:s(()=>[t("Troubleshooting")]),_:1})])]),u])}var f=i(l,[["render",m],["__file","index.html.vue"]]);export{f as default};
