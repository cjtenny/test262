// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Syloti_Nagri`
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
    [0x000964, 0x000965],
    [0x0009E6, 0x0009EF],
    [0x00A800, 0x00A82B]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Syloti_Nagri}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Syloti_Nagri}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Sylo}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Sylo}"
);
testPropertyEscapes(
  /^\p{scx=Syloti_Nagri}+$/u,
  matchSymbols,
  "\\p{scx=Syloti_Nagri}"
);
testPropertyEscapes(
  /^\p{scx=Sylo}+$/u,
  matchSymbols,
  "\\p{scx=Sylo}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x000963],
    [0x000966, 0x0009E5],
    [0x0009F0, 0x00A7FF],
    [0x00A82C, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Syloti_Nagri}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Syloti_Nagri}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Sylo}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Sylo}"
);
testPropertyEscapes(
  /^\P{scx=Syloti_Nagri}+$/u,
  nonMatchSymbols,
  "\\P{scx=Syloti_Nagri}"
);
testPropertyEscapes(
  /^\P{scx=Sylo}+$/u,
  nonMatchSymbols,
  "\\P{scx=Sylo}"
);
