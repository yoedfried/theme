Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _hoistNonReactStatics=require('hoist-non-react-statics');var _hoistNonReactStatics2=_interopRequireDefault(_hoistNonReactStatics);
var _lodash=require('lodash');var _=_interopRequireWildcard(_lodash);
var _normalizeStyle=require('./StyleNormalizer/normalizeStyle');var _normalizeStyle2=_interopRequireDefault(_normalizeStyle);

var _Theme=require('./Theme');var _Theme2=_interopRequireDefault(_Theme);
var _resolveComponentStyle=require('./resolveComponentStyle');function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}







function throwConnectStyleError(errorMessage,componentDisplayName){
throw Error(errorMessage+' - when connecting '+componentDisplayName+' component to style.');
}








function getTheme(context){


return context.theme||_Theme2.default.getDefaultTheme();
}exports.default=
















function(componentStyleName){var componentStyle=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var mapPropsToStyleNames=arguments[2];var options=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};
function getComponentDisplayName(WrappedComponent){
return WrappedComponent.displayName||WrappedComponent.name||'Component';
}

return function wrapWithStyledComponent(WrappedComponent){
var componentDisplayName=getComponentDisplayName(WrappedComponent);

if(!_.isPlainObject(componentStyle)){
throwConnectStyleError(
'Component style must be plain object',
componentDisplayName);

}

if(!_.isString(componentStyleName)){
throwConnectStyleError(
'Component Style Name must be string',
componentDisplayName);

}var

StyledComponent=function(_React$Component){_inherits(StyledComponent,_React$Component);
































function StyledComponent(props,context){_classCallCheck(this,StyledComponent);var _this=_possibleConstructorReturn(this,(StyledComponent.__proto__||Object.getPrototypeOf(StyledComponent)).call(this,
props,context));
var styleNames=_this.resolveStyleNames(props);
var resolvedStyle=_this.resolveStyle(context,props,styleNames);
_this.setWrappedInstance=_this.setWrappedInstance.bind(_this);
_this.resolveConnectedComponentStyle=_this.resolveConnectedComponentStyle.bind(_this);
_this.state={
style:resolvedStyle.componentStyle,
childrenStyle:resolvedStyle.childrenStyle,



addedProps:_this.resolveAddedProps(),
styleNames:styleNames};return _this;

}_createClass(StyledComponent,[{key:'getChildContext',value:function getChildContext()

{
return{
parentStyle:this.props.virtual?
this.context.parentStyle:
this.state.childrenStyle,
resolveStyle:this.resolveConnectedComponentStyle};

}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(

nextProps,nextContext){
var styleNames=this.resolveStyleNames(nextProps);
if(this.shouldRebuildStyle(nextProps,nextContext,styleNames)){
var resolvedStyle=this.resolveStyle(nextContext,nextProps,styleNames);
this.setState({
style:resolvedStyle.componentStyle,
childrenStyle:resolvedStyle.childrenStyle,
styleNames:styleNames});

}
}},{key:'setNativeProps',value:function setNativeProps(

nativeProps){
if(this.wrappedInstance.setNativeProps){
this.wrappedInstance.setNativeProps(nativeProps);
}
}},{key:'setWrappedInstance',value:function setWrappedInstance(

component){
if(component&&component._root){
this._root=component._root;
}else{
this._root=component;
}
}},{key:'hasStyleNameChanged',value:function hasStyleNameChanged(

nextProps,styleNames){
return mapPropsToStyleNames&&this.props!==nextProps&&


!_.isEqual(this.state.styleNames,styleNames);
}},{key:'shouldRebuildStyle',value:function shouldRebuildStyle(

nextProps,nextContext,styleNames){
return nextProps.style!==this.props.style||
nextProps.styleName!==this.props.styleName||
nextContext.theme!==this.context.theme||
nextContext.parentStyle!==this.context.parentStyle||
this.hasStyleNameChanged(nextProps,styleNames);
}},{key:'resolveStyleNames',value:function resolveStyleNames(

props){var
styleName=props.styleName;
var styleNames=styleName?styleName.split(/\s/g):[];

if(!mapPropsToStyleNames){
return styleNames;
}


return _.uniq(mapPropsToStyleNames(styleNames,props));
}},{key:'resolveAddedProps',value:function resolveAddedProps()

{
var addedProps={};
if(options.withRef){
addedProps.ref='wrappedInstance';
}
return addedProps;
}},{key:'resolveStyle',value:function resolveStyle(

context,props,styleNames){var
parentStyle=context.parentStyle;
var style=(0,_normalizeStyle2.default)(props.style);

var theme=getTheme(context);
var themeStyle=theme.createComponentStyle(componentStyleName,componentStyle);

return(0,_resolveComponentStyle.resolveComponentStyle)(
componentStyleName,
styleNames,
themeStyle,
parentStyle,
style);

}},{key:'resolveConnectedComponentStyle',value:function resolveConnectedComponentStyle(








props){
var styleNames=this.resolveStyleNames(props);
return this.resolveStyle(this.context,props,styleNames).componentStyle;
}},{key:'render',value:function render()

{var _state=
this.state,addedProps=_state.addedProps,style=_state.style;
return(
_react2.default.createElement(WrappedComponent,_extends({},
this.props,
addedProps,{
style:style,
ref:this.setWrappedInstance})));

}}]);return StyledComponent;}(_react2.default.Component);StyledComponent.contextTypes={theme:_Theme.ThemeShape,parentStyle:_react.PropTypes.object};StyledComponent.childContextTypes={parentStyle:_react.PropTypes.object,resolveStyle:_react.PropTypes.func};StyledComponent.propTypes={style:_react.PropTypes.object,styleName:_react.PropTypes.string,virtual:_react.PropTypes.bool};StyledComponent.defaultProps={virtual:options.virtual};StyledComponent.displayName='Styled('+componentDisplayName+')';StyledComponent.WrappedComponent=WrappedComponent;


return(0,_hoistNonReactStatics2.default)(StyledComponent,WrappedComponent);
};
};
//# sourceMappingURL=connectStyle.js.map