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
H_BASE = parentModule["_malloc"](40 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 40;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore6LocaleD1Ev;
/* memory initializer */ allocate([45,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
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
  var __ZTVN7WebCore6LocaleE=(H_BASE+16)|0;
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
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_vi=env.invoke_vi;
  var _malloc=env._malloc;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore6Locale26convertFromLocalizedNumberERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 72 | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 7](i2);
 __ZNK3WTF6String15stripWhiteSpaceEv(i7, i3);
 i3 = i7 | 0;
 i13 = HEAP32[i3 >> 2] | 0;
 do {
  if ((HEAP8[i2 + 68 | 0] & 1) == 0) {
   i14 = i13;
   i15 = 4;
  } else {
   if ((i13 | 0) == 0) {
    i14 = 0;
    i15 = 4;
    break;
   }
   if ((HEAP32[i13 + 4 >> 2] | 0) == 0) {
    i14 = i13;
    i15 = 4;
    break;
   }
   if (!(__ZN7WebCore6Locale26detectSignAndGetDigitRangeERKN3WTF6StringERbRjS6_(i2, i7, i8, i9, i10) | 0)) {
    i16 = HEAP32[i3 >> 2] | 0;
    HEAP32[i3 >> 2] = 0;
    HEAP32[i1 >> 2] = i16;
    break;
   }
   i16 = i11 | 0;
   HEAP32[i16 >> 2] = 0;
   i17 = i11 + 4 | 0;
   HEAP32[i17 >> 2] = 0;
   i18 = i11 + 8 | 0;
   HEAP32[i18 >> 2] = 0;
   i19 = i11 + 12 | 0;
   HEAP8[i19] = 1;
   HEAP32[i11 + 16 >> 2] = 0;
   i20 = i11 + 20 | 0;
   HEAP32[i20 >> 2] = 0;
   i21 = HEAP32[i3 >> 2] | 0;
   if ((i21 | 0) == 0) {
    i22 = 0;
   } else {
    i22 = HEAP32[i21 + 4 >> 2] | 0;
   }
   __ZN3WTF13StringBuilder15reserveCapacityEj(i11, i22);
   if ((HEAP8[i8] & 1) != 0) {
    __ZN3WTF13StringBuilder6appendEPKhj(i11, H_BASE + 8 | 0, 1);
   }
   i21 = HEAP32[i9 >> 2] | 0;
   HEAP32[i12 >> 2] = i21;
   i23 = HEAP32[i10 >> 2] | 0;
   L14 : do {
    if (i21 >>> 0 < i23 >>> 0) {
     i24 = i11 + 20 | 0;
     L16 : while (1) {
      i25 = __ZN7WebCore6Locale25matchedDecimalSymbolIndexERKN3WTF6StringERj(i2, i7, i12) | 0;
      if (i25 >>> 0 > 11 >>> 0) {
       i15 = 14;
       break;
      }
      L19 : do {
       if ((i25 | 0) == 10) {
        HEAP8[i6] = 46;
        i26 = HEAP32[i18 >> 2] | 0;
        do {
         if ((i26 | 0) != 0) {
          i27 = HEAP32[i16 >> 2] | 0;
          if (i27 >>> 0 >= (HEAP32[i26 + 4 >> 2] | 0) >>> 0) {
           break;
          }
          if ((HEAP32[i17 >> 2] | 0) != 0) {
           break;
          }
          i28 = (HEAP8[i19] & 1) == 0;
          HEAP32[i16 >> 2] = i27 + 1;
          if (i28) {
           HEAP16[(HEAP32[i24 >> 2] | 0) + (i27 << 1) >> 1] = 46;
           break L19;
          } else {
           HEAP8[(HEAP32[i20 >> 2] | 0) + i27 | 0] = 46;
           break L19;
          }
         }
        } while (0);
        __ZN3WTF13StringBuilder6appendEPKhj(i11, i6, 1);
       } else if ((i25 | 0) == 11) {
        i15 = 24;
        break L16;
       } else {
        i26 = i25 + 48 | 0;
        i27 = i26 & 65535;
        HEAP16[i5 >> 1] = i27;
        i28 = HEAP32[i18 >> 2] | 0;
        do {
         if ((i28 | 0) != 0) {
          i29 = HEAP32[i16 >> 2] | 0;
          if (i29 >>> 0 >= (HEAP32[i28 + 4 >> 2] | 0) >>> 0) {
           break;
          }
          if ((HEAP32[i17 >> 2] | 0) != 0) {
           break;
          }
          if ((HEAP8[i19] & 1) == 0) {
           HEAP32[i16 >> 2] = i29 + 1;
           HEAP16[(HEAP32[i24 >> 2] | 0) + (i29 << 1) >> 1] = i27;
           break L19;
          }
          if ((i27 & 65535) >>> 0 > 255 >>> 0) {
           break;
          }
          HEAP32[i16 >> 2] = i29 + 1;
          HEAP8[(HEAP32[i20 >> 2] | 0) + i29 | 0] = i26;
          break L19;
         }
        } while (0);
        __ZN3WTF13StringBuilder6appendEPKtj(i11, i5, 1);
       }
      } while (0);
      if ((HEAP32[i12 >> 2] | 0) >>> 0 >= i23 >>> 0) {
       i15 = 33;
       break L14;
      }
     }
     if ((i15 | 0) == 14) {
      i24 = HEAP32[i3 >> 2] | 0;
      HEAP32[i3 >> 2] = 0;
      HEAP32[i1 >> 2] = i24;
      break;
     } else if ((i15 | 0) == 24) {
      i24 = HEAP32[i3 >> 2] | 0;
      HEAP32[i3 >> 2] = 0;
      HEAP32[i1 >> 2] = i24;
      break;
     }
    } else {
     i15 = 33;
    }
   } while (0);
   do {
    if ((i15 | 0) == 33) {
     __ZN3WTF13StringBuilder11shrinkToFitEv(i11);
     i23 = HEAP32[i17 >> 2] | 0;
     if ((i23 | 0) == 0) {
      __ZNK3WTF13StringBuilder11reifyStringEv(i11);
      i20 = HEAP32[i17 >> 2] | 0;
      HEAP32[i1 >> 2] = i20;
      if ((i20 | 0) == 0) {
       break;
      } else {
       i30 = i20;
      }
     } else {
      HEAP32[i1 >> 2] = i23;
      i30 = i23;
     }
     i23 = i30 | 0;
     HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 2;
    }
   } while (0);
   i23 = HEAP32[i18 >> 2] | 0;
   do {
    if ((i23 | 0) != 0) {
     i20 = i23 | 0;
     i16 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i23);
      break;
     } else {
      HEAP32[i20 >> 2] = i16;
      break;
     }
    }
   } while (0);
   i23 = HEAP32[i17 >> 2] | 0;
   if ((i23 | 0) == 0) {
    break;
   }
   i18 = i23 | 0;
   i16 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i23);
    break;
   } else {
    HEAP32[i18 >> 2] = i16;
    break;
   }
  }
 } while (0);
 if ((i15 | 0) == 4) {
  HEAP32[i7 >> 2] = 0;
  HEAP32[i1 >> 2] = i14;
 }
 i14 = HEAP32[i7 >> 2] | 0;
 if ((i14 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i7 = i14 | 0;
 i1 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i14);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i7 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore6Locale26detectSignAndGetDigitRangeERKN3WTF6StringERbRjS6_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 HEAP32[i4 >> 2] = 0;
 i6 = i2 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i7 = 0;
 } else {
  i7 = HEAP32[i2 + 4 >> 2] | 0;
 }
 HEAP32[i5 >> 2] = i7;
 i7 = i1 + 60 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 i8 = (i2 | 0) == 0;
 if (i8) {
  i9 = 5;
 } else {
  if ((HEAP32[i2 + 4 >> 2] | 0) == 0) {
   i9 = 5;
  }
 }
 do {
  if ((i9 | 0) == 5) {
   i10 = HEAP32[i1 + 64 >> 2] | 0;
   if ((i10 | 0) != 0) {
    if ((HEAP32[i10 + 4 >> 2] | 0) != 0) {
     break;
    }
   }
   i10 = HEAP32[i6 >> 2] | 0;
   i11 = i1 + 52 | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i10 | 0) == 0) {
     if ((i12 | 0) != 0) {
      if ((HEAP32[i12 + 4 >> 2] | 0) != 0) {
       i9 = 21;
       break;
      }
     }
     i13 = i1 + 56 | 0;
     i14 = i13;
     i15 = HEAP32[i13 >> 2] | 0;
     i9 = 14;
    } else {
     if (!(__ZNK3WTF10StringImpl10startsWithEPKS0_(i10, i12) | 0)) {
      i9 = 21;
      break;
     }
     i13 = HEAP32[i6 >> 2] | 0;
     i16 = i1 + 56 | 0;
     i17 = HEAP32[i16 >> 2] | 0;
     if ((i13 | 0) == 0) {
      i14 = i16;
      i15 = i17;
      i9 = 14;
      break;
     }
     if (__ZN3WTF10StringImpl8endsWithEPS0_b(i13, i17, 1) | 0) {
      i18 = i16;
     } else {
      i9 = 21;
     }
    }
   } while (0);
   do {
    if ((i9 | 0) == 14) {
     if ((i15 | 0) == 0) {
      i18 = i14;
      break;
     }
     if ((HEAP32[i15 + 4 >> 2] | 0) == 0) {
      i18 = i14;
     } else {
      i9 = 21;
     }
    }
   } while (0);
   if ((i9 | 0) == 21) {
    HEAP8[i3] = 1;
    i19 = 1;
    return i19 | 0;
   }
   HEAP8[i3] = 0;
   i12 = HEAP32[i11 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i20 = 0;
   } else {
    i20 = HEAP32[i12 + 4 >> 2] | 0;
   }
   HEAP32[i4 >> 2] = i20;
   i12 = HEAP32[i18 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i21 = 0;
   } else {
    i21 = HEAP32[i12 + 4 >> 2] | 0;
   }
   HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) - i21;
   i19 = 1;
   return i19 | 0;
  }
 } while (0);
 i21 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i21 | 0) == 0) {
   if (!i8) {
    if ((HEAP32[i2 + 4 >> 2] | 0) != 0) {
     break;
    }
   }
   i18 = i1 + 64 | 0;
   i22 = i18;
   i23 = HEAP32[i18 >> 2] | 0;
   i9 = 29;
  } else {
   if (!(__ZNK3WTF10StringImpl10startsWithEPKS0_(i21, i2) | 0)) {
    break;
   }
   i18 = HEAP32[i6 >> 2] | 0;
   i20 = i1 + 64 | 0;
   i14 = HEAP32[i20 >> 2] | 0;
   if ((i18 | 0) == 0) {
    i22 = i20;
    i23 = i14;
    i9 = 29;
    break;
   }
   if (__ZN3WTF10StringImpl8endsWithEPS0_b(i18, i14, 1) | 0) {
    i24 = i20;
    i9 = 31;
   }
  }
 } while (0);
 do {
  if ((i9 | 0) == 29) {
   if ((i23 | 0) == 0) {
    i24 = i22;
    i9 = 31;
    break;
   }
   if ((HEAP32[i23 + 4 >> 2] | 0) == 0) {
    i24 = i22;
    i9 = 31;
   }
  }
 } while (0);
 if ((i9 | 0) == 31) {
  HEAP8[i3] = 1;
  i22 = HEAP32[i7 >> 2] | 0;
  if ((i22 | 0) == 0) {
   i25 = 0;
  } else {
   i25 = HEAP32[i22 + 4 >> 2] | 0;
  }
  HEAP32[i4 >> 2] = i25;
  i25 = HEAP32[i24 >> 2] | 0;
  if ((i25 | 0) == 0) {
   i26 = 0;
  } else {
   i26 = HEAP32[i25 + 4 >> 2] | 0;
  }
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) - i26;
  i19 = 1;
  return i19 | 0;
 }
 HEAP8[i3] = 0;
 i3 = HEAP32[i6 >> 2] | 0;
 i26 = i1 + 52 | 0;
 i25 = HEAP32[i26 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   do {
    if ((i25 | 0) != 0) {
     if ((HEAP32[i25 + 4 >> 2] | 0) == 0) {
      break;
     } else {
      i19 = 0;
     }
     return i19 | 0;
    }
   } while (0);
   i11 = i1 + 56 | 0;
   i27 = i11;
   i28 = HEAP32[i11 >> 2] | 0;
   i9 = 43;
  } else {
   if (!(__ZNK3WTF10StringImpl10startsWithEPKS0_(i3, i25) | 0)) {
    i19 = 0;
    return i19 | 0;
   }
   i11 = HEAP32[i6 >> 2] | 0;
   i24 = i1 + 56 | 0;
   i22 = HEAP32[i24 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i27 = i24;
    i28 = i22;
    i9 = 43;
    break;
   }
   if (__ZN3WTF10StringImpl8endsWithEPS0_b(i11, i22, 1) | 0) {
    i29 = i24;
    break;
   } else {
    i19 = 0;
   }
   return i19 | 0;
  }
 } while (0);
 do {
  if ((i9 | 0) == 43) {
   if ((i28 | 0) == 0) {
    i29 = i27;
    break;
   }
   if ((HEAP32[i28 + 4 >> 2] | 0) == 0) {
    i29 = i27;
    break;
   } else {
    i19 = 0;
   }
   return i19 | 0;
  }
 } while (0);
 i27 = HEAP32[i26 >> 2] | 0;
 if ((i27 | 0) == 0) {
  i30 = 0;
 } else {
  i30 = HEAP32[i27 + 4 >> 2] | 0;
 }
 HEAP32[i4 >> 2] = i30;
 i30 = HEAP32[i29 >> 2] | 0;
 if ((i30 | 0) == 0) {
  i31 = 0;
 } else {
  i31 = HEAP32[i30 + 4 >> 2] | 0;
 }
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) - i31;
 i19 = 1;
 return i19 | 0;
}
function __ZN7WebCore6Locale24convertToLocalizedNumberERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 7](i2);
 i6 = i3 | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 do {
  if ((HEAP8[i2 + 68 | 0] & 1) == 0) {
   HEAP32[i1 >> 2] = i3;
   if ((i3 | 0) != 0) {
    break;
   }
   STACKTOP = i4;
   return;
  } else {
   if ((i3 | 0) == 0) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i7 = i3 + 4 | 0;
   if ((HEAP32[i7 >> 2] | 0) == 0) {
    HEAP32[i1 >> 2] = i3;
    break;
   }
   HEAP32[i5 >> 2] = 0;
   i8 = i5 + 4 | 0;
   HEAP32[i8 >> 2] = 0;
   i9 = i5 + 8 | 0;
   HEAP32[i9 >> 2] = 0;
   HEAP8[i5 + 12 | 0] = 1;
   HEAP32[i5 + 16 >> 2] = 0;
   HEAP32[i5 + 20 >> 2] = 0;
   __ZN3WTF13StringBuilder15reserveCapacityEj(i5, HEAP32[i7 >> 2] | 0);
   i7 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i7 | 0) == 0) {
     i10 = 15;
    } else {
     if ((HEAP32[i7 + 4 >> 2] | 0) == 0) {
      i10 = 15;
      break;
     }
     i11 = i7 + 8 | 0;
     if ((HEAP32[i7 + 16 >> 2] & 32 | 0) == 0) {
      i12 = HEAP16[HEAP32[i11 >> 2] >> 1] | 0;
     } else {
      i12 = HEAPU8[HEAP32[i11 >> 2] | 0] | 0;
     }
     if (i12 << 16 >> 16 != 45) {
      i10 = 15;
      break;
     }
     __ZN3WTF13StringBuilder6appendERKNS_6StringE(i5, i2 + 60 | 0);
     i13 = 1;
     i14 = 1;
    }
   } while (0);
   if ((i10 | 0) == 15) {
    __ZN3WTF13StringBuilder6appendERKNS_6StringE(i5, i2 + 52 | 0);
    i13 = 0;
    i14 = 0;
   }
   i7 = i2 + 44 | 0;
   i11 = i13;
   while (1) {
    i15 = HEAP32[i6 >> 2] | 0;
    i16 = (i15 | 0) == 0;
    if (i16) {
     i17 = 0;
    } else {
     i17 = HEAP32[i15 + 4 >> 2] | 0;
    }
    if (i11 >>> 0 >= i17 >>> 0) {
     break;
    }
    do {
     if (i16) {
      i18 = 0;
     } else {
      if ((HEAP32[i15 + 4 >> 2] | 0) >>> 0 <= i11 >>> 0) {
       i18 = 0;
       break;
      }
      i19 = i15 + 8 | 0;
      if ((HEAP32[i15 + 16 >> 2] & 32 | 0) == 0) {
       i18 = HEAP16[(HEAP32[i19 >> 2] | 0) + (i11 << 1) >> 1] | 0;
       break;
      } else {
       i18 = HEAPU8[(HEAP32[i19 >> 2] | 0) + i11 | 0] | 0;
       break;
      }
     }
    } while (0);
    switch (i18 & 65535 | 0) {
    case 48:
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
     {
      do {
       if (i16) {
        i20 = 0;
       } else {
        if ((HEAP32[i15 + 4 >> 2] | 0) >>> 0 <= i11 >>> 0) {
         i20 = 0;
         break;
        }
        i19 = i15 + 8 | 0;
        if ((HEAP32[i15 + 16 >> 2] & 32 | 0) == 0) {
         i20 = HEAP16[(HEAP32[i19 >> 2] | 0) + (i11 << 1) >> 1] | 0;
         break;
        } else {
         i20 = HEAPU8[(HEAP32[i19 >> 2] | 0) + i11 | 0] | 0;
         break;
        }
       }
      } while (0);
      __ZN3WTF13StringBuilder6appendERKNS_6StringE(i5, i2 + 4 + ((i20 & 65535) - 48 << 2) | 0);
      break;
     }
    case 46:
     {
      __ZN3WTF13StringBuilder6appendERKNS_6StringE(i5, i7);
      break;
     }
    default:
     {}
    }
    i11 = i11 + 1 | 0;
   }
   __ZN3WTF13StringBuilder6appendERKNS_6StringE(i5, i14 ? i2 + 64 | 0 : i2 + 56 | 0);
   __ZN3WTF13StringBuilder11shrinkToFitEv(i5);
   i11 = HEAP32[i8 >> 2] | 0;
   if ((i11 | 0) == 0) {
    __ZNK3WTF13StringBuilder11reifyStringEv(i5);
    i7 = HEAP32[i8 >> 2] | 0;
    HEAP32[i1 >> 2] = i7;
    if ((i7 | 0) != 0) {
     i21 = i7;
     i10 = 37;
    }
   } else {
    HEAP32[i1 >> 2] = i11;
    i21 = i11;
    i10 = 37;
   }
   if ((i10 | 0) == 37) {
    i11 = i21 | 0;
    HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
   }
   i11 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i11 | 0) != 0) {
     i7 = i11 | 0;
     i15 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i11);
      break;
     } else {
      HEAP32[i7 >> 2] = i15;
      break;
     }
    }
   } while (0);
   i11 = HEAP32[i8 >> 2] | 0;
   if ((i11 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i9 = i11 | 0;
   i15 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    STACKTOP = i4;
    return;
   } else {
    HEAP32[i9 >> 2] = i15;
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 i21 = i3 | 0;
 HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 2;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore6Locale13setLocaleDataERKN3WTF6VectorINS1_6StringELj12ENS1_15CrashOnOverflowEEERKS3_S9_S9_S9_(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i7 = i2 + 8 | 0;
 if ((HEAP32[i7 >> 2] | 0) != 0) {
  i8 = i2 | 0;
  i2 = 0;
  while (1) {
   i9 = HEAP32[(HEAP32[i8 >> 2] | 0) + (i2 << 2) >> 2] | 0;
   if ((i9 | 0) != 0) {
    i10 = i9 | 0;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
   }
   i10 = i1 + 4 + (i2 << 2) | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = i9;
   do {
    if ((i11 | 0) != 0) {
     i9 = i11 | 0;
     i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i10 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i11);
      break;
     } else {
      HEAP32[i9 >> 2] = i10;
      break;
     }
    }
   } while (0);
   i2 = i2 + 1 | 0;
   if (i2 >>> 0 >= (HEAP32[i7 >> 2] | 0) >>> 0) {
    break;
   }
  }
 }
 i7 = HEAP32[i3 >> 2] | 0;
 if ((i7 | 0) != 0) {
  i3 = i7 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = i1 + 52 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i7;
 do {
  if ((i2 | 0) != 0) {
   i7 = i2 | 0;
   i3 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i7 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i4 = i2 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i1 + 56 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i2 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i5 = i3 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 i5 = i1 + 60 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i3;
 do {
  if ((i4 | 0) != 0) {
   i3 = i4 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i6 = i4 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 i6 = i1 + 64 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i4;
 if ((i5 | 0) == 0) {
  i12 = i1 + 68 | 0;
  HEAP8[i12] = 1;
  return;
 }
 i4 = i5 | 0;
 i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  i12 = i1 + 68 | 0;
  HEAP8[i12] = 1;
  return;
 } else {
  HEAP32[i4 >> 2] = i6;
  i12 = i1 + 68 | 0;
  HEAP8[i12] = 1;
  return;
 }
}
function __ZN7WebCore6Locale25matchedDecimalSymbolIndexERKN3WTF6StringERj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i4 = i2 | 0;
 i2 = 0;
 L1 : while (1) {
  i5 = HEAP32[i1 + 4 + (i2 << 2) >> 2] | 0;
  L3 : do {
   if ((i5 | 0) != 0) {
    i6 = HEAP32[i5 + 4 >> 2] | 0;
    if ((i6 | 0) == 0) {
     break;
    }
    i7 = HEAP32[i3 >> 2] | 0;
    i8 = HEAP32[i4 >> 2] | 0;
    i9 = (i8 | 0) == 0;
    if (i9) {
     i10 = 0;
    } else {
     i10 = HEAP32[i8 + 4 >> 2] | 0;
    }
    if ((i6 + i7 | 0) >>> 0 > i10 >>> 0) {
     break;
    }
    i11 = i5 + 16 | 0;
    i12 = i5 + 8 | 0;
    i13 = i12;
    i14 = i12 | 0;
    i12 = i8 + 4 | 0;
    i15 = i8 + 16 | 0;
    i16 = i8 + 8 | 0;
    i8 = i16;
    i17 = i16 | 0;
    if (i9) {
     i9 = 0;
     while (1) {
      if (i9 >>> 0 >= i6 >>> 0) {
       break L1;
      }
      if ((HEAP32[i11 >> 2] & 32 | 0) == 0) {
       i18 = HEAP16[(HEAP32[i13 >> 2] | 0) + (i9 << 1) >> 1] | 0;
      } else {
       i18 = HEAPU8[(HEAP32[i14 >> 2] | 0) + i9 | 0] | 0;
      }
      if (i18 << 16 >> 16 == 0) {
       i9 = i9 + 1 | 0;
      } else {
       break L3;
      }
     }
    } else {
     i19 = 0;
    }
    while (1) {
     if (i19 >>> 0 >= i6 >>> 0) {
      break L1;
     }
     i9 = i19 + i7 | 0;
     do {
      if ((HEAP32[i12 >> 2] | 0) >>> 0 > i9 >>> 0) {
       if ((HEAP32[i15 >> 2] & 32 | 0) == 0) {
        i20 = HEAP16[(HEAP32[i8 >> 2] | 0) + (i9 << 1) >> 1] | 0;
        break;
       } else {
        i20 = HEAPU8[(HEAP32[i17 >> 2] | 0) + i9 | 0] | 0;
        break;
       }
      } else {
       i20 = 0;
      }
     } while (0);
     if ((HEAP32[i11 >> 2] & 32 | 0) == 0) {
      i21 = HEAP16[(HEAP32[i13 >> 2] | 0) + (i19 << 1) >> 1] | 0;
     } else {
      i21 = HEAPU8[(HEAP32[i14 >> 2] | 0) + i19 | 0] | 0;
     }
     if (i20 << 16 >> 16 == i21 << 16 >> 16) {
      i19 = i19 + 1 | 0;
     } else {
      break;
     }
    }
   }
  } while (0);
  i5 = i2 + 1 | 0;
  if (i5 >>> 0 < 12 >>> 0) {
   i2 = i5;
  } else {
   i22 = 12;
   i23 = 26;
   break;
  }
 }
 if ((i23 | 0) == 26) {
  return i22 | 0;
 }
 HEAP32[i3 >> 2] = i7 + i6;
 i22 = i2;
 return i22 | 0;
}
function __ZN7WebCore6LocaleD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 24;
 i2 = HEAP32[i1 + 64 >> 2] | 0;
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
 i2 = HEAP32[i1 + 60 >> 2] | 0;
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
 i2 = HEAP32[i1 + 56 >> 2] | 0;
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
 i2 = HEAP32[i1 + 52 >> 2] | 0;
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
 i3 = i1 + 52 | 0;
 while (1) {
  i3 = i3 - 4 | 0;
  i1 = HEAP32[i3 >> 2] | 0;
  do {
   if ((i1 | 0) != 0) {
    i4 = i1 | 0;
    i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
    if ((i5 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i1);
     break;
    } else {
     HEAP32[i4 >> 2] = i5;
     break;
    }
   }
  } while (0);
  if ((i3 | 0) == (i2 | 0)) {
   break;
  }
 }
 return;
}
function __ZN7WebCore6LocaleD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 24;
 i2 = HEAP32[i1 + 64 >> 2] | 0;
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
 i2 = HEAP32[i1 + 60 >> 2] | 0;
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
 i2 = HEAP32[i1 + 56 >> 2] | 0;
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
 i2 = HEAP32[i1 + 52 >> 2] | 0;
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
 i3 = i1 + 52 | 0;
 while (1) {
  i3 = i3 - 4 | 0;
  i1 = HEAP32[i3 >> 2] | 0;
  do {
   if ((i1 | 0) != 0) {
    i4 = i1 | 0;
    i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
    if ((i5 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i1);
     break;
    } else {
     HEAP32[i4 >> 2] = i5;
     break;
    }
   }
  } while (0);
  if ((i3 | 0) == (i2 | 0)) {
   break;
  }
 }
 return;
}
function __ZN3WTF13StringBuilder6appendERKNS_6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i5 = i1 | 0;
 do {
  if ((HEAP32[i5 >> 2] | 0) == 0) {
   if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
    break;
   }
   i6 = i2 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
   i6 = i1 + 4 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i2;
   do {
    if ((i7 | 0) != 0) {
     i8 = i7 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i7);
      break;
     } else {
      HEAP32[i8 >> 2] = i9;
      break;
     }
    }
   } while (0);
   i7 = HEAP32[i3 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i10 = 0;
   } else {
    i10 = HEAP32[i7 + 4 >> 2] | 0;
   }
   HEAP32[i5 >> 2] = i10;
   HEAP8[i1 + 12 | 0] = (HEAP32[(HEAP32[i6 >> 2] | 0) + 16 >> 2] | 0) >>> 5 & 1;
   return;
  }
 } while (0);
 if ((HEAP32[i2 + 16 >> 2] & 32 | 0) == 0) {
  __ZN3WTF13StringBuilder6appendEPKtj(i1, HEAP32[i2 + 8 >> 2] | 0, i4);
  return;
 } else {
  __ZN3WTF13StringBuilder6appendEPKhj(i1, HEAP32[i2 + 8 >> 2] | 0, i4);
  return;
 }
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
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function runPostSets() {
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_v + 2;
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
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
function __ZN7WebCore6LocaleD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore6LocaleD2Ev(i1);
 __ZdlPv(i1);
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
}
function b2(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(2);
 return 0;
}
function v____cxa_pure_virtual__wrapper() {
 ___cxa_pure_virtual();
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 3]();
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
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
}
function b1() {
 abort(1);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_ii = [b0,b0];
  var FUNCTION_TABLE_v = [b1,b1,v____cxa_pure_virtual__wrapper,b1];
  var FUNCTION_TABLE_iii = [b2,b2];
  var FUNCTION_TABLE_vi = [b3,b3,__ZN7WebCore6LocaleD2Ev,b3,__ZN7WebCore6LocaleD0Ev,b3,b3,b3];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_vi: dynCall_vi };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_vi": invoke_vi, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore6LocaleD2Ev","_strlen","__ZN7WebCore6LocaleD0Ev","__ZN3WTF13StringBuilder6appendERKNS_6StringE","__ZN7WebCore6Locale13setLocaleDataERKN3WTF6VectorINS1_6StringELj12ENS1_15CrashOnOverflowEEERKS3_S9_S9_S9_","_memset","__ZN7WebCore6Locale24convertToLocalizedNumberERKN3WTF6StringE","__ZN7WebCore6Locale25matchedDecimalSymbolIndexERKN3WTF6StringERj","_memcpy","__ZN7WebCore6Locale26detectSignAndGetDigitRangeERKN3WTF6StringERbRjS6_","__ZN7WebCore6Locale26convertFromLocalizedNumberERKN3WTF6StringE"]
