// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Kayah_Li`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v9.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00A900, 0x00A92F]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Kayah_Li}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Kayah_Li}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Kali}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Kali}"
);
testPropertyEscapes(
  /^\p{scx=Kayah_Li}+$/u,
  matchSymbols,
  "\\p{scx=Kayah_Li}"
);
testPropertyEscapes(
  /^\p{scx=Kali}+$/u,
  matchSymbols,
  "\\p{scx=Kali}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00A8FF],
    [0x00A930, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Kayah_Li}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Kayah_Li}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Kali}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Kali}"
);
testPropertyEscapes(
  /^\P{scx=Kayah_Li}+$/u,
  nonMatchSymbols,
  "\\P{scx=Kayah_Li}"
);
testPropertyEscapes(
  /^\P{scx=Kali}+$/u,
  nonMatchSymbols,
  "\\P{scx=Kali}"
);
