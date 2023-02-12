import{_ as r}from"./checkra1n.ace0089d.js";import{_ as c,o as u,c as d,a as e,b as i,d as o,w as s,e as a,r as l}from"./app.d49112f3.js";const p={},h=a('<div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Se utilizzi un computer con una CPU AMD Ryzen, probabilmente riscontrerai problemi. Se si verificano problemi, \xE8 necessario utilizzare un Mac o un computer con una CPU Intel per seguire questa guida.</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Se si utilizza un cavo USB-C a Lightning per eseguire questo processo, \xE8 possibile riscontrare problemi ad entrare in modalit\xE0 DFU</p><p>In caso di problemi, usa un cavo USB-A a Lightning e, se necessario, usa anche un adattatore USB-C a USB-A.</p></div><h2 id="download-linux" tabindex="-1"><a class="header-anchor" href="#download-linux" aria-hidden="true">#</a> Download (Linux)</h2>',3),m={href:"https://checkra.in",target:"_blank",rel:"noopener noreferrer"},_={href:"https://checkra.in/releases/0.12.2-beta#all-downloads",target:"_blank",rel:"noopener noreferrer"},b=e("p",null,[e("img",{src:r,alt:"Uno screenshot dell\u2019applicazione di checkra1n"})],-1),g=e("h2",{id:"installare-checkra1n",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installare-checkra1n","aria-hidden":"true"},"#"),i(" Installare checkra1n")],-1),f={class:"custom-container tip"},k=e("p",{class:"custom-container-title"},"TIP",-1),v={href:"https://checkra.in/linux",target:"_blank",rel:"noopener noreferrer"},y=a("<li>Eseguire il file binary di <code>checkra1n</code> nel terminale usando <code>./checkra1n</code><ul><li>Potrebbe essere necessario eseguire <code>sudo chmod a+x ./checkra1n</code> se il file binary non viene eseguito</li><li>Se sei su un dispositivo A11, dovrai andare su <code>Options</code> e poi abilitare l&#39;opzione <code>Skip A11 BPR Check</code></li><li>Se sei su iOS 14.6 o successivo, dovrai andare su <code>Options</code> e abilitare l&#39;opzione <code>Allow Untested Versions</code></li><li>Se sei su un dispositivo A8X o A9X con ios 14.4-14.4.2, dovrai andare su <code>Options</code> e abilitare l&#39;opzionse <code>Allow Untested Versions</code></li></ul></li><li>Clicca <code>Start</code> e segui le istruzioni a schermo</li>",2),S=e("code",null,"Start",-1),q=e("ul",null,[e("li",null,"Segui le istruzione finch\xE9 il tuo dispositivo non mostra uno schermo nero")],-1),x=e("li",null,"Dopo ci\xF2, checkra1n dovrebbe installarsi automaticamente",-1),z=a('<p>Il tuo dispositivo iOS dovrebbe adesso riavviarsi.</p><p>Per installare Odysseyra1n, <u>non</u> aprire l&#39;app di checkra1n e installare Cydia. Invece, segui queste istruzioni per installare Sileo.</p><h2 id="lo-script-di-odysseyra1n" tabindex="-1"><a class="header-anchor" href="#lo-script-di-odysseyra1n" aria-hidden="true">#</a> Lo script di Odysseyra1n</h2><ol><li>Apri l&#39;app terminale sul tuo computer</li><li>Assicurati che il tuo computer sia autorizzato dal tuo dispositivo</li><li>Installa &quot;iproxy&quot; incollando ed eseguendo il seguente comando: <ul><li>Ubuntu/Debian: <code>sudo apt install libusbmuxd-tools</code></li><li>Arch Linux: <code>pacman -S libusbmuxd</code></li></ul></li><li>Installa lo script di Odysseyra1n incollando ed eseguendo il seguente comando: <code>/bin/bash -c &quot;$(curl -fsSL https://raw.githubusercontent.com/coolstar/Odyssey-bootstrap/master/procursus-deploy-linux-macos.sh)&quot;</code></li></ol>',4),w=a('<p>Before you can start installing anything else, you first need to install a few necessary programs.</p><h2 id="installing-packages" tabindex="-1"><a class="header-anchor" href="#installing-packages" aria-hidden="true">#</a> Installing packages</h2><ol><li>Open the newly installed Sileo application</li><li>Go to the &quot;Packages&quot; tab</li><li>Tap &quot;Upgrade All&quot; if there are any updates <ul><li>Do not install yet</li></ul></li><li>Go to the &quot;Search&quot; tab</li><li>Search for the &quot;libhooker&quot; package</li><li>Tap the &quot;Get&quot; button</li><li>Tap on the &quot;Queued&quot; bar at the bottom of your screen</li><li>Tap &quot;Confirm&quot;</li><li>Once finished, tap &#39;Restart SpringBoard&#39;</li></ol>',3);function A(I,U){const t=l("ExternalLinkIcon"),n=l("router-link");return u(),d("div",null,[h,e("ul",null,[e("li",null,[i("L\u2019ultima release di "),e("a",m,[i("checkra1n"),o(t)]),e("ul",null,[e("li",null,[i("Se utilizzi un dispositivo A8X o A9X, dovresti invece usare la release 0.12.2 di "),e("a",_,[i("checkra1n"),o(t)])])])])]),b,g,e("div",f,[k,e("p",null,[i("checkra1n fornisce supporto nativo alle macchine che eseguono una distribuzione basata su Debian (ad esempio Ubuntu). \xC8 consigliabile seguire le "),e("a",v,[i("istruzioni specifiche"),o(t)]),i(" fornite dal team di checkra1n stesso.")])]),e("ol",null,[y,e("li",null,[i("Adesso ti verranno illustrate delle istruzioni per riavviare il tuo dispositivo in "),o(n,{to:"/it_IT/faq/#what-is-dfu-mode"},{default:s(()=>[i("modalit\xE0 DFU")]),_:1}),i(", clicca "),S,i(" per iniziare "),q]),x]),z,e("p",null,[i("You should now be jailbroken with Sileo installed on your home screen. You can use Sileo to install "),o(n,{to:"/faq/#what-are-tweaks"},{default:s(()=>[i("tweaks")]),_:1}),i(", themes, packages and more.")]),w])}var C=c(p,[["render",A],["__file","index.html.vue"]]);export{C as default};
