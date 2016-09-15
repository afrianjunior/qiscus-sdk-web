# qiscus SDK Web
> qiscus sdk / client for web browser

# TL;DR
It use lerna as a monorepo management.

--Want english? go to https://translate.google.com it's free.--
Repo ini menggunakan pendekatan monorepo, karena akan lebih memudahkan
dalam pengembangannya kedepan.

## How to setup this projects
- install lerna globally
  `npm install -g lerna@prerelease`
- run `lerna bootstrap`
  this command will link each packages, and install each packages dependencies
  *note: on windows, you need to run this command as administrator
  `lerna bootstrap`
- run `npm run start:react`
  to start the widget

## Sub Packages
- qiscus-sdk-core
  Core logic of qiscus sdk

- qiscus-sdk-react
  Client / View implementation of qiscus-sdk-core with reactjs
  it can become an example too for someone who want to create
  their own client written in reactjs.

- qiscus-sdk-vue
  Client / View implementation of qiscus-sdk-core with vuejs
  it can become an example too for someone who want to create
  their own client writen in vuejs.

- qiscus-sdk-initiator
  --is it really needed?--
  Basically, this package is to initialize qiscus sdk to the DOM
  ```
  qiscusSdkInitiator.init({
    core: qiscusSdkCore,                 // qiscus-sdk-core
    client: qiscusSdkReact,              // qiscus-sdk-react / qiscus-sdk-vue
    appId: 'qiscus-provied-app-id',      // qiscus widget appId
    email: 'username@domain.com',        // current user email
    password: 'password',                // current user password
    username: 'username',                // current user username
    avatarURL: 'https://avatar.com/url'  // current user avatar url
  })
  ```

# NOTE:
- Currently cannot transpile a packages, there is already a pull request
  but not yet merged. https://github.com/lerna/lerna/pull/255
  meaning: As we develop this project, we need to write using node 6 standard
  feature, so we cant use jsx on /packages/qiscus-sdk-core or any language
  that need to be transpiled.
- This project should follow semver x.y.z
  Which mean:
  x -> Major changes, UI change, API change, etc.
    That will broke previous version
  y -> Minor changes, feature, etc.
    That wont broke previous version
  z -> Patch changes, bug fix changes.
    That will safe to upgrade to the latest version
