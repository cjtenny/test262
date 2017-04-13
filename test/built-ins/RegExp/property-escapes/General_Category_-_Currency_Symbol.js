// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `General_Category=Currency_Symbol`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v9.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x000024,
    0x00058F,
    0x00060B,
    0x0009FB,
    0x000AF1,
    0x000BF9,
    0x000E3F,
    0x0017DB,
    0x00A838,
    0x00FDFC,
    0x00FE69,
    0x00FF04
  ],
  ranges: [
    [0x0000A2, 0x0000A5],
    [0x0009F2, 0x0009F3],
    [0x0020A0, 0x0020BE],
    [0x00FFE0, 0x00FFE1],
    [0x00FFE5, 0x00FFE6]
  ]
});
testPropertyEscapes(
  /^\p{General_Category=Currency_Symbol}+$/u,
  matchSymbols,
  "\\p{General_Category=Currency_Symbol}"
);
testPropertyEscapes(
  /^\p{General_Category=Sc}+$/u,
  matchSymbols,
  "\\p{General_Category=Sc}"
);
testPropertyEscapes(
  /^\p{gc=Currency_Symbol}+$/u,
  matchSymbols,
  "\\p{gc=Currency_Symbol}"
);
testPropertyEscapes(
  /^\p{gc=Sc}+$/u,
  matchSymbols,
  "\\p{gc=Sc}"
);
testPropertyEscapes(
  /^\p{Currency_Symbol}+$/u,
  matchSymbols,
  "\\p{Currency_Symbol}"
);
testPropertyEscapes(
  /^\p{Sc}+$/u,
  matchSymbols,
  "\\p{Sc}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x000023],
    [0x000025, 0x0000A1],
    [0x0000A6, 0x00058E],
    [0x000590, 0x00060A],
    [0x00060C, 0x0009F1],
    [0x0009F4, 0x0009FA],
    [0x0009FC, 0x000AF0],
    [0x000AF2, 0x000BF8],
    [0x000BFA, 0x000E3E],
    [0x000E40, 0x0017DA],
    [0x0017DC, 0x00209F],
    [0x0020BF, 0x00A837],
    [0x00A839, 0x00DBFF],
    [0x00E000, 0x00FDFB],
    [0x00FDFD, 0x00FE68],
    [0x00FE6A, 0x00FF03],
    [0x00FF05, 0x00FFDF],
    [0x00FFE2, 0x00FFE4],
    [0x00FFE7, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{General_Category=Currency_Symbol}+$/u,
  nonMatchSymbols,
  "\\P{General_Category=Currency_Symbol}"
);
testPropertyEscapes(
  /^\P{General_Category=Sc}+$/u,
  nonMatchSymbols,
  "\\P{General_Category=Sc}"
);
testPropertyEscapes(
  /^\P{gc=Currency_Symbol}+$/u,
  nonMatchSymbols,
  "\\P{gc=Currency_Symbol}"
);
testPropertyEscapes(
  /^\P{gc=Sc}+$/u,
  nonMatchSymbols,
  "\\P{gc=Sc}"
);
testPropertyEscapes(
  /^\P{Currency_Symbol}+$/u,
  nonMatchSymbols,
  "\\P{Currency_Symbol}"
);
testPropertyEscapes(
  /^\P{Sc}+$/u,
  nonMatchSymbols,
  "\\P{Sc}"
);
