"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[7742],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return p}});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),c=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(r),p=n,m=h["".concat(l,".").concat(p)]||h[p]||d[p]||a;return r?i.createElement(m,o(o({ref:t},u),{},{components:r})):i.createElement(m,o({ref:t},u))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}h.displayName="MDXCreateElement"},1595:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return h}});var i=r(7462),n=r(3366),a=(r(7294),r(3905)),o=["components"],s={},l="Compare with Diesel",c={unversionedId:"internal-design/diesel",id:"version-0.4.x/internal-design/diesel",title:"Compare with Diesel",description:"SeaORM and Diesel share the same goal: to offer you a complete solution in interfacing with databases.",source:"@site/versioned_docs/version-0.4.x/09-internal-design/03-diesel.md",sourceDirName:"09-internal-design",slug:"/internal-design/diesel",permalink:"/SeaORM/docs/0.4.x/internal-design/diesel",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.4.x/09-internal-design/03-diesel.md",tags:[],version:"0.4.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1650016279,formattedLastUpdatedAt:"4/15/2022",sidebarPosition:3,frontMatter:{},sidebar:"version-0.4.x/tutorialSidebar",previous:{title:"Derive Macros",permalink:"/SeaORM/docs/0.4.x/internal-design/derive-macro"}},u=[{value:"Architecture",id:"architecture",children:[],level:2},{value:"Programming paradigm",id:"programming-paradigm",children:[],level:2},{value:"Schema Builder",id:"schema-builder",children:[],level:2},{value:"Similarities",id:"similarities",children:[],level:2},{value:"Final words",id:"final-words",children:[],level:2}],d={toc:u};function h(e){var t=e.components,r=(0,n.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"compare-with-diesel"},"Compare with Diesel"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm"},"SeaORM")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/diesel-rs/diesel"},"Diesel")," share the same goal: to offer you a complete solution in interfacing with databases."),(0,a.kt)("p",null,"Both SeaORM and Diesel work with MySQL, Postgres, and SQLite, so you aren't constrained going with either. While Diesel allows third parties to implement custom backends, SeaORM does not."),(0,a.kt)("p",null,"There are also other things we chose to do differently."),(0,a.kt)("h2",{id:"architecture"},"Architecture"),(0,a.kt)("p",null,"First off, perhaps the number one requested feature, async Rust support. While using async may not offer you better performance today, programming in async is an architectural decision you have to make early on. By choosing SeaORM, we together look forward to Rust's async ecosystem maturing."),(0,a.kt)("p",null,"Under the hood, SeaORM together with ",(0,a.kt)("a",{parentName:"p",href:"https://crates.io/crates/sqlx"},"SQLx")," offers you a pure Rust technology stack. Diesel uses native drivers by default and it may take some effort for you to replace it with a pure Rust driver. Each side has their pros and cons, so it's up to your preference."),(0,a.kt)("p",null,"SeaORM has a modular design. If you don't like the idea of an ORM, you'll definitely still want to use ",(0,a.kt)("a",{parentName:"p",href:"https://crates.io/crates/sea-query"},"SeaQuery"),", the underlying query builder. It is lightweight and can be easily integrated into any project. The SeaQuery API is also available to you when using SeaORM, so you receive the benefits of high-level abstraction while still having the power of a flexible query builder when you need it."),(0,a.kt)("h2",{id:"programming-paradigm"},"Programming paradigm"),(0,a.kt)("p",null,"In addition to the sync vs async foundation, the biggest distinction between Diesel and SeaORM is static vs dynamic."),(0,a.kt)("p",null,"Diesel provides an everything-compile-time API where types can be checked entirely statically. You can also do dynamic queries with Diesel, but you'd lose some of the benefits of compile-time type-checking."),(0,a.kt)("p",null,"SeaORM is dynamic, in which things are established at runtime. It offers more flexibility. While you lose some compile-time checkings, SeaORM helps you to prove correctness by testing instead."),(0,a.kt)("p",null,"Both libraries make heavy use of traits and generics, but SeaORM generates less types: each column in Diesel is a struct (each struct impl several traits), while each column in SeaORM is an enum variant (all columns of an entity together form one enum, which impl some traits)."),(0,a.kt)("p",null,"There are also no deeply nested generics in SeaORM (e.g.",(0,a.kt)("inlineCode",{parentName:"p"},"A<B<C<D<E>>>>"),")."),(0,a.kt)("h2",{id:"schema-builder"},"Schema Builder"),(0,a.kt)("p",null,"While in the Diesel ecosystem there are awesome libraries like ",(0,a.kt)("a",{parentName:"p",href:"https://git.irde.st/spacekookie/barrel"},"barrel"),", SeaQL maintains the tools for schema building (SeaQuery) and management (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-schema"},"SeaSchema"),"). That means a familiar API and a unified experience."),(0,a.kt)("h2",{id:"similarities"},"Similarities"),(0,a.kt)("p",null,"Both Diesel and SeaORM are schema first, meaning it all starts from your existing database schema, instead of starting from your OOP classes."),(0,a.kt)("p",null,"Both Diesel and SeaORM are relational, meaning you can do complex joins with defined relations."),(0,a.kt)("h2",{id:"final-words"},"Final words"),(0,a.kt)("p",null,"Diesel is a well-established library in the Rust ecosystem. SeaORM is very new. Neither can replace the other. We hope that the Rust community will grow stronger together."))}h.isMDXComponent=!0}}]);