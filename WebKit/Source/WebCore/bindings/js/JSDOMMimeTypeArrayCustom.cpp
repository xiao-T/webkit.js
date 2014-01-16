/*
 *  Copyright (C) 2008 Nokia Corporation and/or its subsidiary(-ies)
 *  Copyright (C) 2008 Apple Inc. All rights reserved.
 *
 *  This library is free software; you can redistribute it and/or
 *  modify it under the terms of the GNU Lesser General Public
 *  License as published by the Free Software Foundation; either
 *  version 2 of the License, or (at your option) any later version.
 *
 *  This library is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 *  Lesser General Public License for more details.
 *
 *  You should have received a copy of the GNU Lesser General Public
 *  License along with this library; if not, write to the Free Software
 *  Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA
 */

#include "config.h"
#include "JSDOMMimeTypeArray.h"

#include "DOMMimeTypeArray.h"
#include "JSDOMMimeType.h"
#include <wtf/text/AtomicString.h>

namespace WebCore {

using namespace JSC;

bool JSDOMMimeTypeArray::canGetItemsForName(ExecState*, DOMMimeTypeArray* mimeTypeArray, PropertyName propertyName)
{
    return mimeTypeArray->canGetItemsForName(propertyNameToAtomicString(propertyName));
}

EncodedJSValue JSDOMMimeTypeArray::nameGetter(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue, PropertyName propertyName)
{
    JSDOMMimeTypeArray* thisObj = jsDynamicCast<JSDOMMimeTypeArray*>(JSValue::decode(slotBase));
    if (!thisObj)
        return throwVMTypeError(exec);
    return JSValue::encode(toJS(exec, thisObj->globalObject(), thisObj->impl().namedItem(propertyNameToAtomicString(propertyName))));
}

} // namespace WebCore