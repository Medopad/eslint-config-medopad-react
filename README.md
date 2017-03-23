# eslint-config-medopad-react

[![Travis CI Build Status](https://img.shields.io/travis/medopad/eslint-config-medopad-react/master.svg?style=flat-square)](https://travis-ci.org/medopad/eslint-config-medopad-react)
[![License](http://img.shields.io/badge/license-MIT-green.svg?style=flat-square)](LICENSE)
[![Medopad Code Style](https://img.shields.io/badge/code%20style-Medopad-brightgreen.svg?style=flat-square)](https://github.com/Medopad/eslint-config-medopad)

This is [Medopad](http://medopad.com)'s [ESLint](http://eslint.org) config for React (with JSX and Jest).

## Install

[Shareable configs](http://eslint.org/docs/developer-guide/shareable-configs) are designed to work with the `extends` feature of `.eslintrc` files.

First, install the config (with all of its dependencies):

```
npm install eslint-config-medopad eslint-config-medopad-react --save-dev
```

Then, add this to your `.eslintrc` file:

```
extends:
  - "medopad-react"
```

You can override settings from the shareable config by adding them directly into your `.eslintrc` file.

## Test

```
npm test
```
