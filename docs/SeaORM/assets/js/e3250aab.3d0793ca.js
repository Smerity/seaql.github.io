"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[5060],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(r),f=a,y=m["".concat(s,".").concat(f)]||m[f]||p[f]||o;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},755:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],c={},s="Bakery Schema",l={unversionedId:"relation/bakery-schema",id:"version-0.7.x/relation/bakery-schema",title:"Bakery Schema",description:"Bakery Schema ERD",source:"@site/versioned_docs/version-0.7.x/07-relation/06-bakery-schema.md",sourceDirName:"07-relation",slug:"/relation/bakery-schema",permalink:"/SeaORM/docs/relation/bakery-schema",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.7.x/07-relation/06-bakery-schema.md",tags:[],version:"0.7.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1650016279,formattedLastUpdatedAt:"4/15/2022",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Self Referencing",permalink:"/SeaORM/docs/relation/self-referencing"},next:{title:"Robust & Correct",permalink:"/SeaORM/docs/write-test/testing"}},u=[],p={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bakery-schema"},"Bakery Schema"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/SeaQL/sea-orm/master/tests/common/bakery_chain/bakery_chain_erd.svg",alt:"Bakery Schema ERD"})),(0,o.kt)("p",null,"For an example of a complete schema with different data types and relations, you can reference the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/tree/master/tests/common/bakery_chain"},"Bakery Schema")," of SeaORM's test suite."))}m.isMDXComponent=!0}}]);