(window["webpackJsonpstructure-viability"]=window["webpackJsonpstructure-viability"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(3),c=n.n(a);n(14),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(4),s=n(5),u=n(7),h=n(6),d=n(1),l=n(8),m=(n(15),n(16),0),v=(new Date).getTime(),g=void 0,f=void 0,A=window.location,N="hero",b=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).componentDidMount=function(){n.validifyAnchorName()},n.getAnchorName=function(e){return n.hasAnchor(e)?e.substring(e.lastIndexOf("#")+1,e.length):N},n.validifyAnchorName=function(){n.isAnchorNameValid(n.state.currentPageAnchorName)||n.setState({currentPageAnchorName:N},(function(){n.moveWrapper(N,n.state.currentPageAnchorName),n.changeAddressByAnchor(N)}))},n.isAnchorNameValid=function(e){var t;return n.state.sectionContent.forEach((function(n,o){e===n.id&&(t=!0)})),t||!1},n.changeScrollBehavior=function(){var e=Object(d.a)(n);window.addEventListener("wheel",(function(t){t.preventDefault(),e.stablizeScroll(t)}),{passive:!1}),window.addEventListener("touchmove",(function(t){t.preventDefault(),e.stablizeScreenTouch(t)}),{passive:!1})},n.stablizeScroll=function(e){var t=(new Date).getTime();Boolean(t-m>n.state.touchQuietPeriod+n.state.animationTime)&&(g=e.deltaY,m=t,n.onStableScroll())},n.stablizeScreenTouch=function(e){var t=(new Date).getTime(),o=e.changedTouches.item(0).clientY,r=o-f,a=Boolean(t-v>n.state.scrollQuietPeriod+n.state.animationTime);if((r>=n.state.touchStableConstantNumber||r<=-n.state.touchStableConstantNumber)&&a){var c=r<0?-1:1;console.log(r),r=0,v=t,n.onStableScreenTouch(c)}f=a?o:void 0},n.onStableScreenTouch=function(e){var t=n.state.currentPageAnchorName;n.moveWrapper(t,n.convertPageIndexToAnchorName(n.convertAnchorNameToIndex(t)-e)||t),n.changeAnchorNameAndAddress(e)},n.onStableScroll=function(){var e=function(){return 0!==g?g<0?1:-1:0},t=n.state.currentPageAnchorName;n.moveWrapper(t,n.convertPageIndexToAnchorName(n.convertAnchorNameToIndex(t)-e())||t),n.changeAnchorNameAndAddress(e())},n.changeAnchorNameAndAddress=function(e){var t=function(){var e;return n.state.sectionContent.forEach((function(t,o){n.state.currentPageAnchorName===t.id&&(e=o)})),e}(),o=n.convertPageIndexToAnchorName(t-e)||n.convertPageIndexToAnchorName(t);n.setState({currentPageAnchorName:o},(function(){n.changeAddressByAnchor(n.state.currentPageAnchorName),console.log(n.state.currentPageAnchorName)}))},n.convertPageIndexToAnchorName=function(e){var t;return n.state.sectionContent.forEach((function(n,o){e===o&&(t=n.id)})),t},n.convertAnchorNameToIndex=function(e){var t;return n.state.sectionContent.forEach((function(n,o){e===n.id&&(t=o)})),t},n.changeAddressByAnchor=function(e){A.assign(n.getRootAddress(A.toString())+"#"+e)},n.getRootAddress=function(e){return n.hasAnchor(e)?e.substring(0,e.lastIndexOf("#")):e},n.hasAnchor=function(e){return e.includes("#")},n.moveWrapper=function(e,t){console.log("move from: "+e+" to "+t)},n.changeScrollBehavior(),n.state={sectionContent:[{id:N,text:"One",bgColor:"#3399ee"},{id:"f",text:"Two",bgColor:"#ee3399"},{id:"ai",text:"Three",bgColor:"#33ee99"},{id:"coe",text:"Four",bgColor:"#339999"},{id:"footer",text:"Five",bgColor:"#999933"}],touchQuietPeriod:0,scrollQuietPeriod:0,animationTime:1e3,touchStableConstantNumber:2,currentPageAnchorName:n.getAnchorName(A.toString())},n.moveWrapper(N,n.state.currentPageAnchorName),n}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=-100*this.convertAnchorNameToIndex(this.state.currentPageAnchorName);return r.a.createElement("div",{id:"pagerContainer"},r.a.createElement("div",{id:"pageWrapper",style:{transform:"translateY("+t+"vh)"}},this.state.sectionContent.map((function(t,n){return r.a.createElement("section",{className:"section",id:"section-"+t.id,key:n},r.a.createElement("h2",null,t.id),e.state.sectionContent.map((function(e,o){return r.a.createElement("h2",{id:t.id+"-to-"+e.id,key:n+"-"+o},e.text)})))}))))}}]),t}(o.Component);c.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.84512558.chunk.js.map