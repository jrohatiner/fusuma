(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{83:function(e,t){
/*!
* screenfull
* v3.3.2 - 2017-10-27
* (c) Sindre Sorhus; MIT License
*/
!function(){"use strict";var t="undefined"!=typeof window&&void 0!==window.document?window.document:{},n=void 0!==e&&e.exports,o="undefined"!=typeof Element&&"ALLOW_KEYBOARD_INPUT"in Element,r=function(){for(var e,n=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],o=0,r=n.length,i={};o<r;o++)if((e=n[o])&&e[1]in t){for(o=0;o<e.length;o++)i[n[0][o]]=e[o];return i}return!1}(),i={change:r.fullscreenchange,error:r.fullscreenerror},a={request:function(e){var n=r.requestFullscreen;e=e||t.documentElement,/ Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent)?e[n]():e[n](o&&Element.ALLOW_KEYBOARD_INPUT)},exit:function(){t[r.exitFullscreen]()},toggle:function(e){this.isFullscreen?this.exit():this.request(e)},onchange:function(e){this.on("change",e)},onerror:function(e){this.on("error",e)},on:function(e,n){var o=i[e];o&&t.addEventListener(o,n,!1)},off:function(e,n){var o=i[e];o&&t.removeEventListener(o,n,!1)},raw:r};r?(Object.defineProperties(a,{isFullscreen:{get:function(){return Boolean(t[r.fullscreenElement])}},element:{enumerable:!0,get:function(){return t[r.fullscreenElement]}},enabled:{enumerable:!0,get:function(){return Boolean(t[r.fullscreenEnabled])}}}),n?e.exports=a:window.screenfull=a):n?e.exports=!1:window.screenfull=!1}()},84:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},85:function(e,t,n){"use strict";var o=n(4),r=n(5),i=n(84);e.exports=function(){function e(e,t,n,o,a,s){s!==i&&r(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=o,n.PropTypes=n,n}},86:function(e,t,n){"function"==typeof Symbol&&Symbol.iterator;e.exports=n(85)()},87:function(e,t,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return void 0===e?"undefined":o(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":o(e)},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(0),l=c(s),u=c(n(86));function c(e){return e&&e.__esModule?e:{default:e}}var h={position:"absolute",top:0,left:0,right:0,bottom:0,overflow:"hidden"},d={zIndex:2,position:"absolute",top:0,bottom:0,transition:"transform .3s ease-out",WebkitTransition:"-webkit-transform .3s ease-out",willChange:"transform",overflowY:"auto"},f={position:"absolute",top:0,left:0,right:0,bottom:0,overflowY:"scroll",WebkitOverflowScrolling:"touch",transition:"left .3s ease-out, right .3s ease-out"},p={zIndex:1,position:"fixed",top:0,left:0,right:0,bottom:0,opacity:0,visibility:"hidden",transition:"opacity .3s ease-out, visibility .3s ease-out",backgroundColor:"rgba(0,0,0,.3)"},b={zIndex:1,position:"fixed",top:0,bottom:0},m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":o(t))&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={sidebarWidth:e.defaultSidebarWidth,touchIdentifier:null,touchStartX:null,touchStartY:null,touchCurrentX:null,touchCurrentY:null,dragSupported:!1},n.overlayClicked=n.overlayClicked.bind(n),n.onTouchStart=n.onTouchStart.bind(n),n.onTouchMove=n.onTouchMove.bind(n),n.onTouchEnd=n.onTouchEnd.bind(n),n.onScroll=n.onScroll.bind(n),n.saveSidebarRef=n.saveSidebarRef.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":o(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.Component),a(t,[{key:"componentDidMount",value:function(){this.setState({dragSupported:"object"===("undefined"==typeof window?"undefined":i(window))&&"ontouchstart"in window}),this.saveSidebarWidth()}},{key:"componentDidUpdate",value:function(){this.isTouching()||this.saveSidebarWidth()}},{key:"onTouchStart",value:function(e){if(!this.isTouching()){var t=e.targetTouches[0];this.setState({touchIdentifier:t.identifier,touchStartX:t.clientX,touchStartY:t.clientY,touchCurrentX:t.clientX,touchCurrentY:t.clientY})}}},{key:"onTouchMove",value:function(e){if(this.isTouching())for(var t=0;t<e.targetTouches.length;t++)if(e.targetTouches[t].identifier===this.state.touchIdentifier){this.setState({touchCurrentX:e.targetTouches[t].clientX,touchCurrentY:e.targetTouches[t].clientY});break}}},{key:"onTouchEnd",value:function(){if(this.isTouching()){var e=this.touchSidebarWidth();(this.props.open&&e<this.state.sidebarWidth-this.props.dragToggleDistance||!this.props.open&&e>this.props.dragToggleDistance)&&this.props.onSetOpen(!this.props.open),this.setState({touchIdentifier:null,touchStartX:null,touchStartY:null,touchCurrentX:null,touchCurrentY:null})}}},{key:"onScroll",value:function(){this.isTouching()&&this.inCancelDistanceOnScroll()&&this.setState({touchIdentifier:null,touchStartX:null,touchStartY:null,touchCurrentX:null,touchCurrentY:null})}},{key:"inCancelDistanceOnScroll",value:function(){return this.props.pullRight?Math.abs(this.state.touchCurrentX-this.state.touchStartX)<20:Math.abs(this.state.touchStartX-this.state.touchCurrentX)<20}},{key:"isTouching",value:function(){return null!==this.state.touchIdentifier}},{key:"overlayClicked",value:function(){this.props.open&&this.props.onSetOpen(!1)}},{key:"saveSidebarWidth",value:function(){var e=this.sidebar.offsetWidth;e!==this.state.sidebarWidth&&this.setState({sidebarWidth:e})}},{key:"saveSidebarRef",value:function(e){this.sidebar=e}},{key:"touchSidebarWidth",value:function(){return this.props.pullRight?this.props.open&&window.innerWidth-this.state.touchStartX<this.state.sidebarWidth?this.state.touchCurrentX>this.state.touchStartX?this.state.sidebarWidth+this.state.touchStartX-this.state.touchCurrentX:this.state.sidebarWidth:Math.min(window.innerWidth-this.state.touchCurrentX,this.state.sidebarWidth):this.props.open&&this.state.touchStartX<this.state.sidebarWidth?this.state.touchCurrentX>this.state.touchStartX?this.state.sidebarWidth:this.state.sidebarWidth-this.state.touchStartX+this.state.touchCurrentX:Math.min(this.state.touchCurrentX,this.state.sidebarWidth)}},{key:"render",value:function(){var e=r({},d,this.props.styles.sidebar),t=r({},f,this.props.styles.content),n=r({},p,this.props.styles.overlay),o=this.state.dragSupported&&this.props.touch,i=this.isTouching(),a={className:this.props.rootClassName,style:r({},h,this.props.styles.root),role:"navigation"},s=void 0;if(this.props.pullRight?(e.right=0,e.transform="translateX(100%)",e.WebkitTransform="translateX(100%)",this.props.shadow&&(e.boxShadow="-2px 2px 4px rgba(0, 0, 0, 0.15)")):(e.left=0,e.transform="translateX(-100%)",e.WebkitTransform="translateX(-100%)",this.props.shadow&&(e.boxShadow="2px 2px 4px rgba(0, 0, 0, 0.15)")),i){var u=this.touchSidebarWidth()/this.state.sidebarWidth;this.props.pullRight?(e.transform="translateX("+100*(1-u)+"%)",e.WebkitTransform="translateX("+100*(1-u)+"%)"):(e.transform="translateX(-"+100*(1-u)+"%)",e.WebkitTransform="translateX(-"+100*(1-u)+"%)"),n.opacity=u,n.visibility="visible"}else this.props.docked?(0!==this.state.sidebarWidth&&(e.transform="translateX(0%)",e.WebkitTransform="translateX(0%)"),this.props.pullRight?t.right=this.state.sidebarWidth+"px":t.left=this.state.sidebarWidth+"px"):this.props.open&&(e.transform="translateX(0%)",e.WebkitTransform="translateX(0%)",n.opacity=1,n.visibility="visible");if(!i&&this.props.transitions||(e.transition="none",e.WebkitTransition="none",t.transition="none",n.transition="none"),o)if(this.props.open)a.onTouchStart=this.onTouchStart,a.onTouchMove=this.onTouchMove,a.onTouchEnd=this.onTouchEnd,a.onTouchCancel=this.onTouchEnd,a.onScroll=this.onScroll;else{var c=r({},b,this.props.styles.dragHandle);c.width=this.props.touchHandleWidth,this.props.pullRight?c.right=0:c.left=0,s=l.default.createElement("div",{style:c,onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchEnd})}return l.default.createElement("div",a,l.default.createElement("div",{className:this.props.sidebarClassName,style:e,ref:this.saveSidebarRef},this.props.sidebar),l.default.createElement("div",{className:this.props.overlayClassName,style:n,role:"presentation",tabIndex:"0",onClick:this.overlayClicked}),l.default.createElement("div",{className:this.props.contentClassName,style:t},s,this.props.children))}}]),t}();m.propTypes={children:u.default.node.isRequired,styles:u.default.shape({root:u.default.object,sidebar:u.default.object,content:u.default.object,overlay:u.default.object,dragHandle:u.default.object}),rootClassName:u.default.string,sidebarClassName:u.default.string,contentClassName:u.default.string,overlayClassName:u.default.string,sidebar:u.default.node.isRequired,docked:u.default.bool,open:u.default.bool,transitions:u.default.bool,touch:u.default.bool,touchHandleWidth:u.default.number,pullRight:u.default.bool,shadow:u.default.bool,dragToggleDistance:u.default.number,onSetOpen:u.default.func,defaultSidebarWidth:u.default.number},m.defaultProps={docked:!1,open:!1,transitions:!0,touch:!0,touchHandleWidth:20,pullRight:!1,shadow:!0,dragToggleDistance:30,onSetOpen:function(){},styles:{},defaultSidebarWidth:0},t.default=m},88:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n(87),i=(o=r)&&o.__esModule?o:{default:o};t.default=i.default},97:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(88),a=n.n(i),s=n(83),l=n.n(s),u={sidebar:{minWidth:150,zIndex:1001},overlay:{backgroundColor:"rgba(0, 0, 0, .5)",zIndex:1e3}},c="https://slide.hiroppy.me",h=void 0;t.default=function(e){return r.a.createElement(a.a,{sidebar:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"sidebar-social"},Array.isArray(h)&&h.map(function(e){return"twitter"===e?r.a.createElement("a",{key:"twitter",rel:"noopener noreferrer",href:"https://twitter.com/intent/tweet?text=Fusuma "+c,target:"_blank",className:"fa fa-twitter"}):"hatena"===e?r.a.createElement("a",{rel:"noopener noreferrer",key:"hatena",href:"http://b.hatena.ne.jp/entry/"+c,target:"_blank",className:"fa fa-hatena"}):void 0})),r.a.createElement("div",{className:"sidebar-control"},r.a.createElement("a",{onClick:function(){return e.goTo(0)},className:"fa fa-fast-backward"}),r.a.createElement("span",null,e.slideInfo.current," / ",e.slideInfo.total),r.a.createElement("a",{onClick:function(){return e.goTo(e.slideInfo.total-1)},className:"fa fa-fast-forward"})),r.a.createElement("div",null,r.a.createElement("a",{onClick:function(){return l.a.enabled?l.a.toggle():void 0},className:"fa fa-arrows-alt"}),r.a.createElement("a",{onClick:function(){window.location.href="?presenter=host",window.open("?presenter=view","_blank","width=800,height=600")},className:"fa fa-rocket"}),null),r.a.createElement("div",{className:"sidebar-contents"},e.contents.map(function(e,t){return r.a.createElement("a",{href:"#"+e.index,key:t},"- ",e.title)})))}(e),shadow:!1,open:e.opened,styles:u,sidebarClassName:"sidebar",onSetOpen:e.onSetOpen},"'' ")}}}]);