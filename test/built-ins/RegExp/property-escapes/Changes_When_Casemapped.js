// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Changes_When_Casemapped`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v9.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x0000B5,
    0x0001BF,
    0x000259,
    0x000263,
    0x00026F,
    0x000275,
    0x00027D,
    0x000280,
    0x000283,
    0x000292,
    0x000345,
    0x00037F,
    0x000386,
    0x00038C,
    0x0010C7,
    0x0010CD,
    0x001D79,
    0x001D7D,
    0x001E9E,
    0x001F59,
    0x001F5B,
    0x001F5D,
    0x001FBE,
    0x002126,
    0x002132,
    0x00214E,
    0x002D27,
    0x002D2D,
    0x00AB53
  ],
  ranges: [
    [0x000041, 0x00005A],
    [0x000061, 0x00007A],
    [0x0000C0, 0x0000D6],
    [0x0000D8, 0x0000F6],
    [0x0000F8, 0x000137],
    [0x000139, 0x00018C],
    [0x00018E, 0x00019A],
    [0x00019C, 0x0001A9],
    [0x0001AC, 0x0001B9],
    [0x0001BC, 0x0001BD],
    [0x0001C4, 0x000220],
    [0x000222, 0x000233],
    [0x00023A, 0x000254],
    [0x000256, 0x000257],
    [0x00025B, 0x00025C],
    [0x000260, 0x000261],
    [0x000265, 0x000266],
    [0x000268, 0x00026C],
    [0x000271, 0x000272],
    [0x000287, 0x00028C],
    [0x00029D, 0x00029E],
    [0x000370, 0x000373],
    [0x000376, 0x000377],
    [0x00037B, 0x00037D],
    [0x000388, 0x00038A],
    [0x00038E, 0x0003A1],
    [0x0003A3, 0x0003D1],
    [0x0003D5, 0x0003F5],
    [0x0003F7, 0x0003FB],
    [0x0003FD, 0x000481],
    [0x00048A, 0x00052F],
    [0x000531, 0x000556],
    [0x000561, 0x000587],
    [0x0010A0, 0x0010C5],
    [0x0013A0, 0x0013F5],
    [0x0013F8, 0x0013FD],
    [0x001C80, 0x001C88],
    [0x001E00, 0x001E9B],
    [0x001EA0, 0x001F15],
    [0x001F18, 0x001F1D],
    [0x001F20, 0x001F45],
    [0x001F48, 0x001F4D],
    [0x001F50, 0x001F57],
    [0x001F5F, 0x001F7D],
    [0x001F80, 0x001FB4],
    [0x001FB6, 0x001FBC],
    [0x001FC2, 0x001FC4],
    [0x001FC6, 0x001FCC],
    [0x001FD0, 0x001FD3],
    [0x001FD6, 0x001FDB],
    [0x001FE0, 0x001FEC],
    [0x001FF2, 0x001FF4],
    [0x001FF6, 0x001FFC],
    [0x00212A, 0x00212B],
    [0x002160, 0x00217F],
    [0x002183, 0x002184],
    [0x0024B6, 0x0024E9],
    [0x002C00, 0x002C2E],
    [0x002C30, 0x002C5E],
    [0x002C60, 0x002C70],
    [0x002C72, 0x002C73],
    [0x002C75, 0x002C76],
    [0x002C7E, 0x002CE3],
    [0x002CEB, 0x002CEE],
    [0x002CF2, 0x002CF3],
    [0x002D00, 0x002D25],
    [0x00A640, 0x00A66D],
    [0x00A680, 0x00A69B],
    [0x00A722, 0x00A72F],
    [0x00A732, 0x00A76F],
    [0x00A779, 0x00A787],
    [0x00A78B, 0x00A78D],
    [0x00A790, 0x00A793],
    [0x00A796, 0x00A7AE],
    [0x00A7B0, 0x00A7B7],
    [0x00AB70, 0x00ABBF],
    [0x00FB00, 0x00FB06],
    [0x00FB13, 0x00FB17],
    [0x00FF21, 0x00FF3A],
    [0x00FF41, 0x00FF5A],
    [0x010400, 0x01044F],
    [0x0104B0, 0x0104D3],
    [0x0104D8, 0x0104FB],
    [0x010C80, 0x010CB2],
    [0x010CC0, 0x010CF2],
    [0x0118A0, 0x0118DF],
    [0x01E900, 0x01E943]
  ]
});
testPropertyEscapes(
  /^\p{Changes_When_Casemapped}+$/u,
  matchSymbols,
  "\\p{Changes_When_Casemapped}"
);
testPropertyEscapes(
  /^\p{CWCM}+$/u,
  matchSymbols,
  "\\p{CWCM}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x0000D7,
    0x0000F7,
    0x000138,
    0x00018D,
    0x00019B,
    0x0001BE,
    0x000221,
    0x000255,
    0x000258,
    0x00025A,
    0x000262,
    0x000264,
    0x000267,
    0x000270,
    0x00037E,
    0x000387,
    0x00038B,
    0x00038D,
    0x0003A2,
    0x0003F6,
    0x0003FC,
    0x000530,
    0x0010C6,
    0x001E9F,
    0x001F58,
    0x001F5A,
    0x001F5C,
    0x001F5E,
    0x001FB5,
    0x001FBD,
    0x001FC5,
    0x001FF5,
    0x002C2F,
    0x002C5F,
    0x002C71,
    0x002C74,
    0x002D26,
    0x00A7AF
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x000040],
    [0x00005B, 0x000060],
    [0x00007B, 0x0000B4],
    [0x0000B6, 0x0000BF],
    [0x0001AA, 0x0001AB],
    [0x0001BA, 0x0001BB],
    [0x0001C0, 0x0001C3],
    [0x000234, 0x000239],
    [0x00025D, 0x00025F],
    [0x00026D, 0x00026E],
    [0x000273, 0x000274],
    [0x000276, 0x00027C],
    [0x00027E, 0x00027F],
    [0x000281, 0x000282],
    [0x000284, 0x000286],
    [0x00028D, 0x000291],
    [0x000293, 0x00029C],
    [0x00029F, 0x000344],
    [0x000346, 0x00036F],
    [0x000374, 0x000375],
    [0x000378, 0x00037A],
    [0x000380, 0x000385],
    [0x0003D2, 0x0003D4],
    [0x000482, 0x000489],
    [0x000557, 0x000560],
    [0x000588, 0x00109F],
    [0x0010C8, 0x0010CC],
    [0x0010CE, 0x00139F],
    [0x0013F6, 0x0013F7],
    [0x0013FE, 0x001C7F],
    [0x001C89, 0x001D78],
    [0x001D7A, 0x001D7C],
    [0x001D7E, 0x001DFF],
    [0x001E9C, 0x001E9D],
    [0x001F16, 0x001F17],
    [0x001F1E, 0x001F1F],
    [0x001F46, 0x001F47],
    [0x001F4E, 0x001F4F],
    [0x001F7E, 0x001F7F],
    [0x001FBF, 0x001FC1],
    [0x001FCD, 0x001FCF],
    [0x001FD4, 0x001FD5],
    [0x001FDC, 0x001FDF],
    [0x001FED, 0x001FF1],
    [0x001FFD, 0x002125],
    [0x002127, 0x002129],
    [0x00212C, 0x002131],
    [0x002133, 0x00214D],
    [0x00214F, 0x00215F],
    [0x002180, 0x002182],
    [0x002185, 0x0024B5],
    [0x0024EA, 0x002BFF],
    [0x002C77, 0x002C7D],
    [0x002CE4, 0x002CEA],
    [0x002CEF, 0x002CF1],
    [0x002CF4, 0x002CFF],
    [0x002D28, 0x002D2C],
    [0x002D2E, 0x00A63F],
    [0x00A66E, 0x00A67F],
    [0x00A69C, 0x00A721],
    [0x00A730, 0x00A731],
    [0x00A770, 0x00A778],
    [0x00A788, 0x00A78A],
    [0x00A78E, 0x00A78F],
    [0x00A794, 0x00A795],
    [0x00A7B8, 0x00AB52],
    [0x00AB54, 0x00AB6F],
    [0x00ABC0, 0x00DBFF],
    [0x00E000, 0x00FAFF],
    [0x00FB07, 0x00FB12],
    [0x00FB18, 0x00FF20],
    [0x00FF3B, 0x00FF40],
    [0x00FF5B, 0x0103FF],
    [0x010450, 0x0104AF],
    [0x0104D4, 0x0104D7],
    [0x0104FC, 0x010C7F],
    [0x010CB3, 0x010CBF],
    [0x010CF3, 0x01189F],
    [0x0118E0, 0x01E8FF],
    [0x01E944, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Changes_When_Casemapped}+$/u,
  nonMatchSymbols,
  "\\P{Changes_When_Casemapped}"
);
testPropertyEscapes(
  /^\P{CWCM}+$/u,
  nonMatchSymbols,
  "\\P{CWCM}"
);
