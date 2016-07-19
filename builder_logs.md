```
$ cd app/node_modules/.bin
$ npm run dist
```

> dist /Users/username/app_name
> npm run dist:osx && npm run dist:win32 && npm run dist:win64


> MSOS-app@1.0.0 dist:osx /Users/username/app_name
> build --platform darwin

> Warning: license in the development package.json is deprecated, please move to the application package.json
> Warning: "build.osx" is deprecated — please use "mac" instead of "osx"
> Rebuilding app dependencies for arch x64 to /Users/username/app_name/app

> Warning: app-bundle-id is deprecated, please use appId
> Packaging for platform mac x64 using electron 0.35.6 to dist/mac

> Warning: App is not signed: CSC_LINK is not specified, and no valid identity in the keychain, see https://github.com/electron-userland/electron-builder/wiki/Code-Signing
> Creating DMG
> Creating MacOS zip

> MSOS-app@1.0.0 dist:win32 /Users/username/app_name
> build --platform win32 --arch ia32

> Warning: license in the development package.json is deprecated, please move to the application package.json
> Skip app dependencies rebuild because platform is different
> Warning: app-bundle-id is deprecated, please use appId
> Packaging for platform windows ia32 using electron 0.35.6 to dist/win-ia32-unpacked

> Downloading electron-v0.35.6-win32-ia32.zip
> [============================================>] 100.0% of 40.07 MB (202.87 kB/s)
> Warning: For windows consider only distributing 64-bit, see https://github.com/electron-userland/electron-builder/issues/359#issuecomment-214851130
> Building Squirrel.Windows installer


> MSOS-app@1.0.0 dist:win64 /Users/username/app_name
> build --platform win32 --arch x64

> Warning: license in the development package.json is deprecated, please move to the application package.json
> Skip app dependencies rebuild because platform is different
> Warning: app-bundle-id is deprecated, please use appId
> Packaging for platform windows x64 using electron 0.35.6 to dist/win-unpacked

> Downloading electron-v0.35.6-win32-x64.zip
> [============================================>] 100.0% of 49.16 MB (344.4 kB/s)
> Building Squirrel.Windows installer
