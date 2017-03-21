Object.defineProperty(exports,"__esModule",{value:true});exports.















































































resolveComponentStyle=resolveComponentStyle;var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function isStyleVariant(propertyName){return /^\./.test(propertyName);}function isChildStyle(propertyName){return /(^[^\.].*\.)|^\*$/.test(propertyName);}function splitStyle(style){return _lodash2.default.reduce(style,function(result,value,key){var styleSection=result.componentStyle;if(isStyleVariant(key)){styleSection=result.styleVariants;}else if(isChildStyle(key)){styleSection=result.childrenStyle;}styleSection[key]=value;return result;},{componentStyle:{},styleVariants:{},childrenStyle:{}});}function resolveComponentStyle(
componentName)




{var styleNames=arguments.length>1&&arguments[1]!==undefined?arguments[1]:[];var themeStyle=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var parentStyle=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};var elementStyle=arguments.length>4&&arguments[4]!==undefined?arguments[4]:{};





var mergedStyle=_lodash2.default.merge.apply(_lodash2.default,[{},
themeStyle,
parentStyle['*'],
parentStyle[componentName]].concat(_toConsumableArray(
_lodash2.default.map(styleNames,function(sn){return themeStyle['.'+sn];})),_toConsumableArray(
_lodash2.default.map(styleNames,function(sn){return parentStyle['*.'+sn];})),_toConsumableArray(
_lodash2.default.map(styleNames,function(sn){return parentStyle[componentName+'.'+sn];})),[
elementStyle]));





var resolvedStyle=_lodash2.default.merge.apply(_lodash2.default,[{},
mergedStyle,
parentStyle['*'],
parentStyle[componentName]].concat(_toConsumableArray(
_lodash2.default.map(styleNames,function(sn){return mergedStyle['.'+sn];})),_toConsumableArray(
_lodash2.default.map(styleNames,function(sn){return parentStyle['*.'+sn];})),_toConsumableArray(
_lodash2.default.map(styleNames,function(sn){return parentStyle[componentName+'.'+sn];})),[
elementStyle]));var _splitStyle=


splitStyle(resolvedStyle),componentStyle=_splitStyle.componentStyle,childrenStyle=_splitStyle.childrenStyle;

return{
componentStyle:componentStyle,
childrenStyle:childrenStyle};

}
//# sourceMappingURL=resolveComponentStyle.js.map