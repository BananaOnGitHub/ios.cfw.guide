import{_ as t,o as l,c as r,a as e,b as o,d as n,e as a,r as s}from"./app.d49112f3.js";const d={},c=a('<h2 id="required-reading" tabindex="-1"><a class="header-anchor" href="#required-reading" aria-hidden="true">#</a> Required Reading</h2><p>Semi-untethered jailbreaks require the use of a sideloaded app to jailbreak. Apps sideloaded with a regular Apple ID will expire after 7 days (or 365 days with a Developer Apple ID). After that period, you will no longer be able to open that app to re-jailbreak.</p><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>If you are using an iOS 16 beta, you will need to take extra steps beforehand to open sideloaded apps:</p><ol><li>Open Settings</li><li>Go to Privacy &amp; Security and find the <code>Developer Mode</code> entry</li><li>Toggle Developer Mode on, then press <code>Reboot</code></li><li>After the device reboots, unlock it, and confirm that you want to enable Developer Mode</li></ol><ul><li>If you have a passcode enabled, you&#39;ll need to enter it.</li></ul></div><h2 id="sideloading-apps" tabindex="-1"><a class="header-anchor" href="#sideloading-apps" aria-hidden="true">#</a> Sideloading apps</h2><h3 id="sideload-using-sideloadly" tabindex="-1"><a class="header-anchor" href="#sideload-using-sideloadly" aria-hidden="true">#</a> Sideload using Sideloadly</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Sideloadly is compatible with iOS 7 and newer.</p></div><ol><li>Open Sideloadly</li><li>Plug your iOS device into your computer <ul><li>Make sure your computer is trusted and allowed to view the contents of your device</li></ul></li><li>Drag and drop the <code>.ipa</code> file of your choice into Sideloadly</li><li>Enter in your Apple ID</li><li>Enter in your password <ul><li>Sideloadly must make a request to it&#39;s servers in order to work with free developer accounts. If you are not OK with this, you may use an alternate Apple ID.</li></ul></li></ol><h3 id="sideload-using-altstore" tabindex="-1"><a class="header-anchor" href="#sideload-using-altstore" aria-hidden="true">#</a> Sideload using AltStore</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>AltServer is only compatible with iOS 12.2 and newer.</p></div>',9),p={href:"http://altstore.io/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://www.apple.com/itunes/download/win32",target:"_blank",rel:"noopener noreferrer"},h={href:"https://secure-appldnld.apple.com/windows/061-91601-20200323-974a39d0-41fc-4761-b571-318b7d9205ed/iCloudSetup.exe",target:"_blank",rel:"noopener noreferrer"},g=a("<li>Install AltServer for your respective operating system <ul><li>On macOS, open the Mail app and open <code>Mail</code> -&gt; <code>Preferencees</code> in the menu bar</li><li>Click on the <code>General</code> tab, the <code>Manage Plug-ins</code>, check <code>AltPlugin</code> and apply</li></ul></li><li>Connect your iOS Device to your Mac or PC via USB</li><li>Click AltStore/AltServer in the Menu Bar/System Tray</li><li>Click Install AltStore <ul><li>Follow all onscreen prompts</li></ul></li><li>Open Settings and navigate to <code>General</code> -&gt; <code>Device Management</code> and verify AltStore</li><li>Open iTunes (Windows or macOS Mojave or older) or Finder (macOS Catalina or newer) and enable syncing over WiFi</li><li>Download your desired IPA file and open it in AltStore on your iOS Device. <ul><li>Make sure your iOS Device and Mac or Windows PC are connected to the same WiFi network</li></ul></li>",7),m=a('<h2 id="resigning-apps" tabindex="-1"><a class="header-anchor" href="#resigning-apps" aria-hidden="true">#</a> Resigning Apps</h2><h3 id="resigning-using-reprovision-reborn" tabindex="-1"><a class="header-anchor" href="#resigning-using-reprovision-reborn" aria-hidden="true">#</a> Resigning using Reprovision Reborn</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>ReProvision Reborn is compatible with iOS 9 and newer</p></div>',3),v={href:"https://havoc.app/",target:"_blank",rel:"noopener noreferrer"},_=e("li",null,"Install Reprovison Reborn",-1),y=e("li",null,[o("Open Reprovision Reborn and follow all onscreen prompts "),e("ul",null,[e("li",null,"You will be asked to enter your AppleID. This is only sent to Apple and no one else.")])],-1),f=e("h3",{id:"resigning-using-altdaemon",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#resigning-using-altdaemon","aria-hidden":"true"},"#"),o(" Resigning using AltDaemon")],-1),w=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,"AltDaemon, which utilizes AltStore, is only compatible with iOS 12.2 and newer.")],-1),b=e("p",null,"AltDaemon allows AltStore to automatically re-sign these applications, without needing to connect to a computer running AltServer over local network.",-1),S={href:"https://repo.chariz.com/",target:"_blank",rel:"noopener noreferrer"},A=e("li",null,'Download and install the "AltDaemon" tweak',-1),k=e("li",null,"Close your package manager",-1),D=e("li",null,"Sign any apps that are about to expire",-1);function x(O,I){const i=s("ExternalLinkIcon");return l(),r("div",null,[c,e("ol",null,[e("li",null,[o("Download the latest versions "),e("a",p,[o("AltServer"),n(i)]),o(", "),e("a",u,[o("iTunes"),n(i)]),o(" if on Windows, and "),e("a",h,[o("iCloud"),n(i)]),o(" if on Windows")]),g]),m,e("ol",null,[e("li",null,[o("Add the Havoc Repo to your preferred package manager ("),e("a",v,[o("havoc.app"),n(i)]),o(")")]),_,y]),f,w,b,e("ol",null,[e("li",null,[o("Add the Chariz repository to your package manager ("),e("a",S,[o("repo.chariz.com"),n(i)]),o(")")]),A,k,D])])}var M=t(d,[["render",x],["__file","index.html.vue"]]);export{M as default};
