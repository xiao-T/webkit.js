// Note: For maximum-speed code, see "Optimizing Code" on the Emscripten wiki, https://github.com/kripken/emscripten/wiki/Optimizing-Code
// Note: Some Emscripten settings may limit the speed of the generated code.
// Capture the output of this into a variable, if you want
(function(FUNCTION_TABLE_OFFSET, parentModule) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  Module.print = parentModule.print;
  Module.printErr = parentModule.printErr;
  Module.cleanups = [];
  var H_BASE = 0;
  // Each module has its own stack
  var STACKTOP = parentModule['_malloc'](TOTAL_STACK);
  assert(STACKTOP % 8 == 0);
  var STACK_MAX = STACKTOP + TOTAL_STACK;
  Module.cleanups.push(function() {
    parentModule['_free'](STACKTOP); // XXX ensure exported
    parentModule['_free'](H_BASE);
  });
// === Auto-generated preamble library stuff ===
//========================================
// Runtime essentials
//========================================
function callRuntimeCallbacks(callbacks) {
  while(callbacks.length > 0) {
    var callback = callbacks.pop();
    var func = callback.func;
    if (typeof func === 'number') {
      func = FUNCTION_TABLE[func];
    }
    func(callback.arg === undefined ? null : callback.arg);
  }
}
var __ATINIT__ = []; // functions called during startup
function initRuntime() {
  callRuntimeCallbacks(__ATINIT__);
}
// === Body ===
H_BASE = parentModule["_malloc"](280 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 280;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var Math_min = Math.min;
function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_vii(index,a1,a2) {
  try {
    Module["dynCall_vii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_v(index) {
  try {
    Module["dynCall_v"](index);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iii(index,a1,a2) {
  try {
    return Module["dynCall_iii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiii(index,a1,a2,a3,a4) {
  try {
    Module["dynCall_viiii"](index,a1,a2,a3,a4);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function asmPrintInt(x, y) {
  Module.print('int ' + x + ',' + y);// + ' ' + new Error().stack);
}
function asmPrintFloat(x, y) {
  Module.print('float ' + x + ',' + y);// + ' ' + new Error().stack);
}
// EMSCRIPTEN_START_ASM
var asm = (function(global, env, buffer) {
  'almost asm';
  var HEAP8 = new global.Int8Array(buffer);
  var HEAP16 = new global.Int16Array(buffer);
  var HEAP32 = new global.Int32Array(buffer);
  var HEAPU8 = new global.Uint8Array(buffer);
  var HEAPU16 = new global.Uint16Array(buffer);
  var HEAPU32 = new global.Uint32Array(buffer);
  var HEAPF32 = new global.Float32Array(buffer);
  var HEAPF64 = new global.Float64Array(buffer);
  var STACKTOP=env.STACKTOP|0;
  var STACK_MAX=env.STACK_MAX|0;
  var tempDoublePtr=env.tempDoublePtr|0;
  var ABORT=env.ABORT|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore18CounterContentDataE=(H_BASE+8)|0;
  var __ZTVN7WebCore16QuoteContentDataE=(H_BASE+64)|0;
  var __ZTVN7WebCore11ContentDataE=(H_BASE+232)|0;
  var __ZTVN7WebCore16ImageContentDataE=(H_BASE+120)|0;
  var __ZTVN7WebCore15TextContentDataE=(H_BASE+176)|0;
  var __THREW__ = 0;
  var threwValue = 0;
  var setjmpId = 0;
  var undef = 0;
  var tempInt = 0, tempBigInt = 0, tempBigIntP = 0, tempBigIntS = 0, tempBigIntR = 0.0, tempBigIntI = 0, tempBigIntD = 0, tempValue = 0, tempDouble = 0.0;
  var tempRet0 = 0;
  var tempRet1 = 0;
  var tempRet2 = 0;
  var tempRet3 = 0;
  var tempRet4 = 0;
  var tempRet5 = 0;
  var tempRet6 = 0;
  var tempRet7 = 0;
  var tempRet8 = 0;
  var tempRet9 = 0;
  var Math_floor=global.Math.floor;
  var Math_abs=global.Math.abs;
  var Math_sqrt=global.Math.sqrt;
  var Math_pow=global.Math.pow;
  var Math_cos=global.Math.cos;
  var Math_sin=global.Math.sin;
  var Math_tan=global.Math.tan;
  var Math_acos=global.Math.acos;
  var Math_asin=global.Math.asin;
  var Math_atan=global.Math.atan;
  var Math_atan2=global.Math.atan2;
  var Math_exp=global.Math.exp;
  var Math_log=global.Math.log;
  var Math_ceil=global.Math.ceil;
  var Math_imul=global.Math.imul;
  var abort=env.abort;
  var assert=env.assert;
  var asmPrintInt=env.asmPrintInt;
  var asmPrintFloat=env.asmPrintFloat;
  var Math_min=env.min;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZNK7WebCore16ImageContentData21createContentRendererERNS_8DocumentERKNS_11RenderStyleE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 __ZN7WebCore11RenderImage36createStyleInheritingFromPseudoStyleERKNS_11RenderStyleE(i7, i4);
 i4 = __ZN3WTF10fastMallocEj(112) | 0;
 i10 = i4;
 HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
 __ZN7WebCore11RenderImageC1ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE(i10, i3, i6);
 __ZN7WebCore13RenderElement15initializeStyleEv(i4);
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 if ((i6 | 0) != 0) {
  i3 = i6 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = i4 + 100 | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i6;
 do {
  if ((i7 | 0) != 0) {
   i6 = i7 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i6 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i2 + 12 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i2 = __ZN3WTF10fastMallocEj(12) | 0;
  __ZN7WebCore19RenderImageResourceC1Ev(i2);
  i3 = i9 | 0;
  HEAP32[i3 >> 2] = i2;
  __ZN7WebCore11RenderImage16setImageResourceEN3WTF10PassOwnPtrINS_19RenderImageResourceEEE(i10, i9);
  i9 = HEAP32[i3 >> 2] | 0;
  if ((i9 | 0) == 0) {
   i11 = i1 | 0;
   i12 = i4;
   HEAP32[i11 >> 2] = i12;
   STACKTOP = i5;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 31](i9);
  i11 = i1 | 0;
  i12 = i4;
  HEAP32[i11 >> 2] = i12;
  STACKTOP = i5;
  return;
 } else {
  i9 = __ZN3WTF10fastMallocEj(16) | 0;
  __ZN7WebCore29RenderImageResourceStyleImageC1ERNS_10StyleImageE(i9, i7);
  i7 = i8 | 0;
  HEAP32[i7 >> 2] = i9;
  __ZN7WebCore11RenderImage16setImageResourceEN3WTF10PassOwnPtrINS_19RenderImageResourceEEE(i10, i8);
  i8 = HEAP32[i7 >> 2] | 0;
  if ((i8 | 0) == 0) {
   i11 = i1 | 0;
   i12 = i4;
   HEAP32[i11 >> 2] = i12;
   STACKTOP = i5;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 31](i8);
  i11 = i1 | 0;
  i12 = i4;
  HEAP32[i11 >> 2] = i12;
  STACKTOP = i5;
  return;
 }
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_viiii + 6;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_v + 2;
}
function __ZN7WebCore18CounterContentDataD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 16;
 i3 = i1 + 12 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i4 | 0) != 0) {
  i3 = HEAP32[i4 + 8 >> 2] | 0;
  do {
   if ((i3 | 0) != 0) {
    i5 = i3 | 0;
    i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
    if ((i6 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i3);
     break;
    } else {
     HEAP32[i5 >> 2] = i6;
     break;
    }
   }
  } while (0);
  i3 = HEAP32[i4 >> 2] | 0;
  do {
   if ((i3 | 0) != 0) {
    i6 = i3 | 0;
    i5 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
    if ((i5 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i3);
     break;
    } else {
     HEAP32[i6 >> 2] = i5;
     break;
    }
   }
  } while (0);
  __ZN3WTF8fastFreeEPv(i4);
 }
 HEAP32[i2 >> 2] = H_BASE + 240;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = i1 + 4 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 return;
}
function __ZN7WebCore16ImageContentDataD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 128;
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 4 | 0;
   i5 = i4 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i4 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
  }
 } while (0);
 HEAP32[i2 >> 2] = H_BASE + 240;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i6 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = i1 + 4 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i6 | 0) == 0) {
  i7 = i1;
  __ZN3WTF8fastFreeEPv(i7);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
 i7 = i1;
 __ZN3WTF8fastFreeEPv(i7);
 return;
}
function __ZNK7WebCore11ContentData5cloneEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 32 >> 2] & 15](i1, i2);
 i5 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i4 | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 i1 = i5;
 while (1) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] & 15](i4, i1);
  i5 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = 0;
  i7 = i6 + 4 | 0;
  i8 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i5;
  if ((i8 | 0) == 0) {
   i9 = i5;
  } else {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 31](i8);
   i9 = HEAP32[i7 >> 2] | 0;
  }
  i7 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = 0;
  if ((i7 | 0) != 0) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 31](i7);
  }
  i7 = HEAP32[i1 + 4 >> 2] | 0;
  if ((i7 | 0) == 0) {
   break;
  } else {
   i6 = i9;
   i1 = i7;
  }
 }
 STACKTOP = i3;
 return;
}
function __ZN7WebCore16ImageContentDataD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 128;
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 4 | 0;
   i5 = i4 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i4 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
  }
 } while (0);
 HEAP32[i2 >> 2] = H_BASE + 240;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i6 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = i1 + 4 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 return;
}
function __ZN7WebCore15TextContentDataD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 184;
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 HEAP32[i2 >> 2] = H_BASE + 240;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i2 = i1 + 4 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i5 | 0) == 0) {
  i6 = i1;
  __ZN3WTF8fastFreeEPv(i6);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
 i6 = i1;
 __ZN3WTF8fastFreeEPv(i6);
 return;
}
function __ZN7WebCore15TextContentDataD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 184;
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 HEAP32[i2 >> 2] = H_BASE + 240;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i2 = i1 + 4 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 return;
}
function __ZNK7WebCore15TextContentData21createContentRendererERNS_8DocumentERKNS_11RenderStyleE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i4 = __ZN3WTF10fastMallocEj(76) | 0;
 __ZN7WebCore18RenderTextFragmentC1ERNS_8DocumentERKN3WTF6StringE(i4, i3, i2 + 12 | 0);
 i3 = HEAP32[i2 + 8 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i2 = i3 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = i4 + 64 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i3;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 | 0;
   i2 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i3 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i4;
 return;
}
function __ZNK7WebCore18CounterContentData13cloneInternalEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[i2 + 12 >> 2] | 0;
 i2 = __ZN3WTF10fastMallocEj(12) | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i2 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i5 = i4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 HEAP32[i2 + 4 >> 2] = HEAP32[i3 + 4 >> 2];
 i5 = HEAP32[i3 + 8 >> 2] | 0;
 HEAP32[i2 + 8 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i3 = i5 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = __ZN3WTF10fastMallocEj(16) | 0;
 HEAP32[i3 + 4 >> 2] = 0;
 HEAP32[i3 + 8 >> 2] = 0;
 HEAP32[i3 >> 2] = H_BASE + 16;
 HEAP32[i3 + 12 >> 2] = i2;
 HEAP32[i1 >> 2] = i3;
 return;
}
function __ZN7WebCore16QuoteContentDataD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 240;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = i1 + 4 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i4 | 0) == 0) {
  i5 = i1;
  __ZN3WTF8fastFreeEPv(i5);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
 i5 = i1;
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN7WebCore11ContentDataD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 240;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = i1 + 4 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i4 | 0) == 0) {
  i5 = i1;
  __ZN3WTF8fastFreeEPv(i5);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
 i5 = i1;
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN7WebCore16QuoteContentDataD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 240;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = i1 + 4 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 return;
}
function __ZN7WebCore11ContentDataD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 240;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = i1 + 4 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 return;
}
function __ZNK7WebCore18CounterContentData6equalsERKNS_11ContentDataE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 31](i2) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[i2 + 12 >> 2] | 0;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((HEAP32[i4 >> 2] | 0) != (HEAP32[i2 >> 2] | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[i4 + 4 >> 2] | 0) != (HEAP32[i2 + 4 >> 2] | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP32[i4 + 8 >> 2] | 0) == (HEAP32[i2 + 8 >> 2] | 0);
 return i3 | 0;
}
function _memset(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = i1 + i3 | 0;
 if ((i3 | 0) >= 20) {
  i2 = i2 & 255;
  i5 = i1 & 3;
  i6 = i2 | i2 << 8 | i2 << 16 | i2 << 24;
  i7 = i4 & ~3;
  if (i5) {
   i5 = i1 + 4 - i5 | 0;
   while ((i1 | 0) < (i5 | 0)) {
    HEAP8[i1] = i2;
    i1 = i1 + 1 | 0;
   }
  }
  while ((i1 | 0) < (i7 | 0)) {
   HEAP32[i1 >> 2] = i6;
   i1 = i1 + 4 | 0;
  }
 }
 while ((i1 | 0) < (i4 | 0)) {
  HEAP8[i1] = i2;
  i1 = i1 + 1 | 0;
 }
 return i1 - i3 | 0;
}
function _memcpy(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = i1 | 0;
 if ((i1 & 3) == (i2 & 3)) {
  while (i1 & 3) {
   if ((i3 | 0) == 0) return i4 | 0;
   HEAP8[i1] = HEAP8[i2] | 0;
   i1 = i1 + 1 | 0;
   i2 = i2 + 1 | 0;
   i3 = i3 - 1 | 0;
  }
  while ((i3 | 0) >= 4) {
   HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
   i1 = i1 + 4 | 0;
   i2 = i2 + 4 | 0;
   i3 = i3 - 4 | 0;
  }
 }
 while ((i3 | 0) > 0) {
  HEAP8[i1] = HEAP8[i2] | 0;
  i1 = i1 + 1 | 0;
  i2 = i2 + 1 | 0;
  i3 = i3 - 1 | 0;
 }
 return i4 | 0;
}
function __ZNK7WebCore15TextContentData13cloneInternalEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = __ZN3WTF10fastMallocEj(16) | 0;
 HEAP32[i3 + 4 >> 2] = 0;
 HEAP32[i3 + 8 >> 2] = 0;
 HEAP32[i3 >> 2] = H_BASE + 184;
 i4 = HEAP32[i2 + 12 >> 2] | 0;
 HEAP32[i3 + 12 >> 2] = i4;
 if ((i4 | 0) == 0) {
  i5 = i3;
  i6 = i1 | 0;
  HEAP32[i6 >> 2] = i5;
  return;
 }
 i2 = i4 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 i5 = i3;
 i6 = i1 | 0;
 HEAP32[i6 >> 2] = i5;
 return;
}
function __ZNK7WebCore16ImageContentData6equalsERKNS_11ContentDataE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 31](i2) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[i2 + 12 >> 2] | 0;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 i1 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 60 >> 2] & 31](i4) | 0;
 i3 = (i1 | 0) == (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 60 >> 2] & 31](i2) | 0);
 return i3 | 0;
}
function copyTempDouble(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
 HEAP8[tempDoublePtr + 4 | 0] = HEAP8[i1 + 4 | 0];
 HEAP8[tempDoublePtr + 5 | 0] = HEAP8[i1 + 5 | 0];
 HEAP8[tempDoublePtr + 6 | 0] = HEAP8[i1 + 6 | 0];
 HEAP8[tempDoublePtr + 7 | 0] = HEAP8[i1 + 7 | 0];
}
function __ZNK7WebCore16ImageContentData13cloneInternalEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 + 12 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i2 = i3 + 4 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 i2 = __ZN3WTF10fastMallocEj(16) | 0;
 HEAP32[i2 + 4 >> 2] = 0;
 HEAP32[i2 + 8 >> 2] = 0;
 HEAP32[i2 >> 2] = H_BASE + 128;
 HEAP32[i2 + 12 >> 2] = i3;
 HEAP32[i1 >> 2] = i2;
 return;
}
function __ZNK7WebCore18CounterContentData21createContentRendererERNS_8DocumentERKNS_11RenderStyleE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i4 = HEAP32[i2 + 12 >> 2] | 0;
 i2 = __ZN3WTF10fastMallocEj(76) | 0;
 __ZN7WebCore13RenderCounterC1ERNS_8DocumentERKNS_14CounterContentE(i2, i3, i4);
 HEAP32[i1 >> 2] = i2;
 return;
}
function __ZNK7WebCore15TextContentData6equalsERKNS_11ContentDataE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 31](i2) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = __ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i2 + 12 >> 2] | 0, HEAP32[i1 + 12 >> 2] | 0) | 0;
 return i3 | 0;
}
function __ZNK7WebCore16QuoteContentData21createContentRendererERNS_8DocumentERKNS_11RenderStyleE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i4 = __ZN3WTF10fastMallocEj(76) | 0;
 __ZN7WebCore11RenderQuoteC1ERNS_8DocumentENS_9QuoteTypeE(i4, i3, HEAP32[i2 + 12 >> 2] | 0);
 HEAP32[i1 >> 2] = i4;
 return;
}
function __ZNK7WebCore16QuoteContentData13cloneInternalEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 + 12 >> 2] | 0;
 i2 = __ZN3WTF10fastMallocEj(16) | 0;
 HEAP32[i2 + 4 >> 2] = 0;
 HEAP32[i2 + 8 >> 2] = 0;
 HEAP32[i2 >> 2] = H_BASE + 72;
 HEAP32[i2 + 12 >> 2] = i3;
 HEAP32[i1 >> 2] = i2;
 return;
}
function __ZNK7WebCore16QuoteContentData6equalsERKNS_11ContentDataE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 31](i2) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP32[i2 + 12 >> 2] | 0) == (HEAP32[i1 + 12 >> 2] | 0);
 return i3 | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 15](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore18CounterContentDataD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore18CounterContentDataD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 15](i2 | 0, i3 | 0) | 0;
}
function _strlen(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1;
 while (HEAP8[i2] | 0) {
  i2 = i2 + 1 | 0;
 }
 return i2 - i1 | 0;
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 15](i2 | 0, i3 | 0);
}
function __ZN7WebCore18CounterContentDataD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore18CounterContentDataD2Ev(i1);
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 31](i2 | 0) | 0;
}
function b5(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(5);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 31](i2 | 0);
}
function __ZNK7WebCore18CounterContentData9isCounterEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore16QuoteContentData7isQuoteEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore16ImageContentData7isImageEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore15TextContentData6isTextEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore11ContentData9isCounterEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore11ContentData7isQuoteEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore11ContentData7isImageEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore11ContentData6isTextEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b4(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(4);
 return 0;
}
function v____cxa_pure_virtual__wrapper() {
 ___cxa_pure_virtual();
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 3]();
}
function b1(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(1);
}
function stackRestore(i1) {
 i1 = i1 | 0;
 STACKTOP = i1;
}
function setTempRet9(i1) {
 i1 = i1 | 0;
 tempRet9 = i1;
}
function setTempRet8(i1) {
 i1 = i1 | 0;
 tempRet8 = i1;
}
function setTempRet7(i1) {
 i1 = i1 | 0;
 tempRet7 = i1;
}
function setTempRet6(i1) {
 i1 = i1 | 0;
 tempRet6 = i1;
}
function setTempRet5(i1) {
 i1 = i1 | 0;
 tempRet5 = i1;
}
function setTempRet4(i1) {
 i1 = i1 | 0;
 tempRet4 = i1;
}
function setTempRet3(i1) {
 i1 = i1 | 0;
 tempRet3 = i1;
}
function setTempRet2(i1) {
 i1 = i1 | 0;
 tempRet2 = i1;
}
function setTempRet1(i1) {
 i1 = i1 | 0;
 tempRet1 = i1;
}
function setTempRet0(i1) {
 i1 = i1 | 0;
 tempRet0 = i1;
}
function b2(i1) {
 i1 = i1 | 0;
 abort(2);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
}
function b3() {
 abort(3);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore16QuoteContentDataD0Ev,b0,__ZN7WebCore16ImageContentDataD1Ev,b0,__ZN7WebCore16QuoteContentDataD1Ev,b0,__ZN7WebCore18CounterContentDataD0Ev,b0,__ZN7WebCore18CounterContentDataD1Ev,b0,__ZN7WebCore11ContentDataD0Ev,b0,__ZN7WebCore11ContentDataD1Ev,b0,__ZN7WebCore16ImageContentDataD0Ev,b0,__ZN7WebCore15TextContentDataD0Ev,b0,__ZN7WebCore15TextContentDataD1Ev,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZNK7WebCore18CounterContentData13cloneInternalEv,b1,__ZNK7WebCore15TextContentData13cloneInternalEv,b1,__ZNK7WebCore16ImageContentData13cloneInternalEv,b1,__ZNK7WebCore16QuoteContentData13cloneInternalEv,b1,b1,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2,__ZNK7WebCore11ContentData6isTextEv,b2,__ZNK7WebCore11ContentData7isImageEv,b2,__ZNK7WebCore11ContentData7isQuoteEv,b2,__ZNK7WebCore11ContentData9isCounterEv,b2,__ZNK7WebCore16ImageContentData7isImageEv,b2,__ZNK7WebCore18CounterContentData9isCounterEv,b2,__ZNK7WebCore16QuoteContentData7isQuoteEv,b2,__ZNK7WebCore15TextContentData6isTextEv,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2];
  var FUNCTION_TABLE_v = [b3,b3,v____cxa_pure_virtual__wrapper,b3];
  var FUNCTION_TABLE_iii = [b4,b4,__ZNK7WebCore15TextContentData6equalsERKNS_11ContentDataE,b4,__ZNK7WebCore16QuoteContentData6equalsERKNS_11ContentDataE,b4,__ZNK7WebCore16ImageContentData6equalsERKNS_11ContentDataE,b4,__ZNK7WebCore18CounterContentData6equalsERKNS_11ContentDataE,b4,b4,b4,b4,b4,b4,b4];
  var FUNCTION_TABLE_viiii = [b5,b5,__ZNK7WebCore15TextContentData21createContentRendererERNS_8DocumentERKNS_11RenderStyleE,b5,__ZNK7WebCore16QuoteContentData21createContentRendererERNS_8DocumentERKNS_11RenderStyleE,b5,__ZNK7WebCore16ImageContentData21createContentRendererERNS_8DocumentERKNS_11RenderStyleE,b5,__ZNK7WebCore18CounterContentData21createContentRendererERNS_8DocumentERKNS_11RenderStyleE,b5,b5,b5,b5,b5,b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_viiii = Module["dynCall_viiii"] = asm["dynCall_viiii"];
// Warning: printing of i64 values may be slightly rounded! No deep i64 math used, so precise i64 code not included
var i64Math = null;
// === Auto-generated postamble setup entry stuff ===
function run(args) {
  initRuntime();
}
Module['run'] = run;
// {{PRE_RUN_ADDITIONS}}
run();
// {{POST_RUN_ADDITIONS}}
  // {{MODULE_ADDITIONS}}
  return Module;
});
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore11ContentData6isTextEv","_strlen","__ZN7WebCore16QuoteContentDataD0Ev","__ZNK7WebCore15TextContentData21createContentRendererERNS_8DocumentERKNS_11RenderStyleE","__ZNK7WebCore11ContentData7isImageEv","__ZN7WebCore16ImageContentDataD1Ev","__ZNK7WebCore15TextContentData6equalsERKNS_11ContentDataE","__ZNK7WebCore15TextContentData6isTextEv","__ZNK7WebCore11ContentData7isQuoteEv","__ZNK7WebCore16QuoteContentData6equalsERKNS_11ContentDataE","__ZNK7WebCore16ImageContentData6equalsERKNS_11ContentDataE","__ZN7WebCore18CounterContentDataD0Ev","__ZN7WebCore18CounterContentDataD1Ev","_memset","_memcpy","__ZN7WebCore11ContentDataD0Ev","__ZNK7WebCore11ContentData5cloneEv","__ZN7WebCore11ContentDataD1Ev","__ZNK7WebCore18CounterContentData6equalsERKNS_11ContentDataE","__ZN7WebCore18CounterContentDataD2Ev","__ZNK7WebCore16QuoteContentData21createContentRendererERNS_8DocumentERKNS_11RenderStyleE","__ZNK7WebCore18CounterContentData13cloneInternalEv","__ZNK7WebCore18CounterContentData9isCounterEv","__ZNK7WebCore16QuoteContentData7isQuoteEv","__ZNK7WebCore16ImageContentData7isImageEv","__ZNK7WebCore16ImageContentData21createContentRendererERNS_8DocumentERKNS_11RenderStyleE","__ZNK7WebCore11ContentData9isCounterEv","__ZN7WebCore15TextContentDataD0Ev","__ZN7WebCore16ImageContentDataD0Ev","__ZNK7WebCore15TextContentData13cloneInternalEv","__ZNK7WebCore18CounterContentData21createContentRendererERNS_8DocumentERKNS_11RenderStyleE","__ZNK7WebCore16ImageContentData13cloneInternalEv","__ZNK7WebCore16QuoteContentData13cloneInternalEv","__ZN7WebCore15TextContentDataD1Ev","__ZN7WebCore16QuoteContentDataD1Ev"]
