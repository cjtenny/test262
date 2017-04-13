// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Lisu`
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
    [0x00A4D0, 0x00A4FF]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Lisu}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Lisu}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Lisu}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Lisu}"
);
testPropertyEscapes(
  /^\p{scx=Lisu}+$/u,
  matchSymbols,
  "\\p{scx=Lisu}"
);
testPropertyEscapes(
  /^\p{scx=Lisu}+$/u,
  matchSymbols,
  "\\p{scx=Lisu}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00A4CF],
    [0x00A500, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Lisu}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Lisu}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Lisu}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Lisu}"
);
testPropertyEscapes(
  /^\P{scx=Lisu}+$/u,
  nonMatchSymbols,
  "\\P{scx=Lisu}"
);
testPropertyEscapes(
  /^\P{scx=Lisu}+$/u,
  nonMatchSymbols,
  "\\P{scx=Lisu}"
);
