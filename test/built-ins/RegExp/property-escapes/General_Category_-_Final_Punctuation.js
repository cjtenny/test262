// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `General_Category=Final_Punctuation`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v9.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x0000BB,
    0x002019,
    0x00201D,
    0x00203A,
    0x002E03,
    0x002E05,
    0x002E0A,
    0x002E0D,
    0x002E1D,
    0x002E21
  ],
  ranges: []
});
testPropertyEscapes(
  /^\p{General_Category=Final_Punctuation}+$/u,
  matchSymbols,
  "\\p{General_Category=Final_Punctuation}"
);
testPropertyEscapes(
  /^\p{General_Category=Pf}+$/u,
  matchSymbols,
  "\\p{General_Category=Pf}"
);
testPropertyEscapes(
  /^\p{gc=Final_Punctuation}+$/u,
  matchSymbols,
  "\\p{gc=Final_Punctuation}"
);
testPropertyEscapes(
  /^\p{gc=Pf}+$/u,
  matchSymbols,
  "\\p{gc=Pf}"
);
testPropertyEscapes(
  /^\p{Final_Punctuation}+$/u,
  matchSymbols,
  "\\p{Final_Punctuation}"
);
testPropertyEscapes(
  /^\p{Pf}+$/u,
  matchSymbols,
  "\\p{Pf}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x002E04
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x0000BA],
    [0x0000BC, 0x002018],
    [0x00201A, 0x00201C],
    [0x00201E, 0x002039],
    [0x00203B, 0x002E02],
    [0x002E06, 0x002E09],
    [0x002E0B, 0x002E0C],
    [0x002E0E, 0x002E1C],
    [0x002E1E, 0x002E20],
    [0x002E22, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{General_Category=Final_Punctuation}+$/u,
  nonMatchSymbols,
  "\\P{General_Category=Final_Punctuation}"
);
testPropertyEscapes(
  /^\P{General_Category=Pf}+$/u,
  nonMatchSymbols,
  "\\P{General_Category=Pf}"
);
testPropertyEscapes(
  /^\P{gc=Final_Punctuation}+$/u,
  nonMatchSymbols,
  "\\P{gc=Final_Punctuation}"
);
testPropertyEscapes(
  /^\P{gc=Pf}+$/u,
  nonMatchSymbols,
  "\\P{gc=Pf}"
);
testPropertyEscapes(
  /^\P{Final_Punctuation}+$/u,
  nonMatchSymbols,
  "\\P{Final_Punctuation}"
);
testPropertyEscapes(
  /^\P{Pf}+$/u,
  nonMatchSymbols,
  "\\P{Pf}"
);
