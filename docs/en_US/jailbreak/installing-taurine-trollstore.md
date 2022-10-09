---
lang: en_US
title: Installing Taurine (TrollStore)
description: Guide to installing Taurine using TrollStore
permalink: /installing-taurine-trollstore
pkgman: sileo
extra_contributors:
  - opa334
  - iCraze
---

Taurine is a <router-link to="/types-of-jailbreak/#semi-untethered-jailbreaks">semi-untethered jailbreak</router-link>, meaning it requires a app to re-apply the exploit after a reboot.

::: warning

In order to follow this method, you'll need an A12 or newer device. If you have an A11 or earlier device, follow <router-link to="/installing-taurine">Installing Taurine</router-link> instead.

:::

While Taurine is compatible with jailbreaking devices on iOS/iPadOS versions from 14.0 to 14.3, this method of obtaining Taurine requires an A12 or newer device.

::: warning

If you are already jailbroken with unc0ver, make sure to properly <router-link to="/removing-unc0ver">remove unc0ver</router-link> before proceeding.

:::

## Downloads

- The latest version of [Taurine](https://taurine.app/)
    - Make sure to download the Taurine `.ipa` file **onto your iOS device**

## Installing TrollInstaller 2

1. Open Safari
1. Go to [https://api.jailbreaks.app/troll](https://api.jailbreaks.app/troll)
1. Tap `Install`

An app named `GTA Car Tracker` will now install to your iOS device, this app is TrollInstaller 2, however.

## Installing TrollStore

1. Open the `GTA Car Tracker` app.
1. Tap `Install TrollStore`

The TrollStore application will now install to your iOS device.

## Preparing TrollStore

In order to be able to sideload Taurine, a couple more steps need to be done.

### Installing ldid

1. Open the `TrollStore` app.
1. Tap `Install ldid`.

### Installing Persistence Helper

::: warning

This will replace the `Tips` app (or another app that you choose) on your device with TrollHelper

:::

1. Press `Install Persistence Helper`
1. Select the `Tips` app
    - You can choose another *uninstallable default app* instead, but we recommend the tips app as it's the most useless app present.

The app which was replaced should now open the Persistence Helper.

::: tip

The reason the persistence helper is highly important is that, whenever iOS rebuilds its icon cache, all apps installed by TrollStore (as well as TrollStore itself) will either disappear or no longer open.

To workaround this, the Persistence Helper (which will still open even after this happens) can refresh app registrations so that the apps will reappear and open again.

:::

## Installing Taurine

1. Open the `Files` app
1. Go to where you saved the Taurine `.ipa` file
1. Tap on the Taurine `.ipa` file
1. Press on the `Share` icon at the top right of the screen
1. Press `TrollStore`

The Taurine app will now be installed onto your device.

## Running Taurine

1. Reboot your phone
    - This is not necessary but recommended
1. Open the Taurine application from your home screen immediately afterwards
    - If you have unc0ver installed, enable "Restore RootFS" before proceeding to remove unc0ver
1. Tap "Jailbreak"
1. Reboot your phone when prompted
1. Open the Taurine application from your home screen immediately after rebooting
1. Tap "Jailbreak"

If you restored rootFS, go back to step 1 and repeat this section.

::: tip

If the app or your device crashes/restarts unexpectedly and the jailbreak isn't installed, simply try rebooting and running the exploit again until it does work.

:::

::: warning

If you receive the error `ERR_Jailbreak`, `ERR_Already_Jailbroken` or `ERR_KernRW` read the Taurine/Odyssey section on the <router-link to="/troubleshooting/#common-errors-on-odyssey-and-taurine">Troubleshooting</router-link> page.

:::

You should now be jailbroken with Sileo installed on your home screen. You can use Sileo to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.

## Installing necessary software

1. Open the Sileo application
1. Tap on the "Search" tab
1. Search for "libhooker"
1. Tap "Install"
    - This will begin a queue - do not install the queue until we've selected all our programs to install
1. Search for "PreferenceLoader" and "RocketBootstrap" and add them to the queue by pressing "Install"
1. Tap the "Queued" bar at the bottom of the page
1. Tap "Confirm"
1. Once finished, tap 'Restart SpringBoard'