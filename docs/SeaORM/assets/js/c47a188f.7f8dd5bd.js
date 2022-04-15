"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[6943],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=l(t),m=r,k=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return t?a.createElement(k,i(i({ref:n},s),{},{components:t})):a.createElement(k,i({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=p;var d={};for(var c in n)hasOwnProperty.call(n,c)&&(d[c]=n[c]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4842:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],d={},c="Conditional Expressions",l={unversionedId:"advanced-query/conditional-expression",id:"advanced-query/conditional-expression",title:"Conditional Expressions",description:"You can add conditions to SeaORM find with the filter method. You can also restrict the aggregated result with having method. Both of them take seaquery::Condition as a parameter.",source:"@site/docs/09-advanced-query/02-conditional-expression.md",sourceDirName:"09-advanced-query",slug:"/advanced-query/conditional-expression",permalink:"/SeaORM/docs/next/advanced-query/conditional-expression",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/docs/09-advanced-query/02-conditional-expression.md",tags:[],version:"current",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1650016279,formattedLastUpdatedAt:"4/15/2022",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Custom Select",permalink:"/SeaORM/docs/next/advanced-query/custom-select"},next:{title:"Aggregate Functions",permalink:"/SeaORM/docs/next/advanced-query/aggregate-function"}},s=[{value:"AND Condition",id:"and-condition",children:[],level:2},{value:"OR Condition",id:"or-condition",children:[],level:2},{value:"Nested Condition",id:"nested-condition",children:[],level:2}],u={toc:s};function p(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"conditional-expressions"},"Conditional Expressions"),(0,o.kt)("p",null,"You can add conditions to SeaORM find with the ",(0,o.kt)("inlineCode",{parentName:"p"},"filter")," method. You can also restrict the aggregated result with ",(0,o.kt)("inlineCode",{parentName:"p"},"having")," method. Both of them take ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/sea-query/0.12.7/sea_query/query/struct.Condition.html"},(0,o.kt)("inlineCode",{parentName:"a"},"sea_query::Condition"))," as a parameter."),(0,o.kt)("h2",{id:"and-condition"},"AND Condition"),(0,o.kt)("p",null,"Construct the AND conditional expression with ",(0,o.kt)("inlineCode",{parentName:"p"},"Condition::all")," method, and append any condition represented in ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/sea-query/*/sea_query/expr/enum.SimpleExpr.html"},(0,o.kt)("inlineCode",{parentName:"a"},"sea_query::SimpleExpr"))," with the ",(0,o.kt)("inlineCode",{parentName:"p"},"add")," method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'assert_eq!(\n    cake::Entity::find()\n        .filter(\n            Condition::all()\n                .add(cake::Column::Id.gte(1))\n                .add(cake::Column::Name.like("%Cheese%"))\n        )\n        .build(DbBackend::MySql)\n        .to_string(),\n    [\n        "SELECT `cake`.`id`, `cake`.`name` FROM `cake`",\n        "WHERE `cake`.`id` >= 1 AND `cake`.`name` LIKE \'%Cheese%\'",\n    ].join(" ")\n);\n')),(0,o.kt)("h2",{id:"or-condition"},"OR Condition"),(0,o.kt)("p",null,"Construct the OR conditional expression with ",(0,o.kt)("inlineCode",{parentName:"p"},"Condition::any")," method, and append any condition represented in ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/sea-query/*/sea_query/expr/enum.SimpleExpr.html"},(0,o.kt)("inlineCode",{parentName:"a"},"sea_query::SimpleExpr"))," with the ",(0,o.kt)("inlineCode",{parentName:"p"},"add")," method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'assert_eq!(\n    cake::Entity::find()\n        .filter(\n            Condition::any()\n                .add(cake::Column::Id.eq(4))\n                .add(cake::Column::Id.eq(5))\n        )\n        .build(DbBackend::MySql)\n        .to_string(),\n    [\n        "SELECT `cake`.`id`, `cake`.`name` FROM `cake`",\n        "WHERE `cake`.`id` = 4 OR `cake`.`id` = 5",\n    ].join(" ")\n);\n')),(0,o.kt)("h2",{id:"nested-condition"},"Nested Condition"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"add")," method can also take another conditional expression. By doing this, we can construct complex nested conditions flexibly."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'assert_eq!(\n    cake::Entity::find()\n        .filter(\n            Condition::any()\n                .add(\n                    Condition::all()\n                        .add(cake::Column::Id.lte(30))\n                        .add(cake::Column::Name.like("%Chocolate%"))\n                )\n                .add(\n                    Condition::all()\n                        .add(cake::Column::Id.gte(1))\n                        .add(cake::Column::Name.like("%Cheese%"))\n                )\n        )\n        .build(DbBackend::MySql)\n        .to_string(),\n    [\n        "SELECT `cake`.`id`, `cake`.`name` FROM `cake`",\n        "WHERE (`cake`.`id` <= 30 AND `cake`.`name` LIKE \'%Chocolate%\') OR",\n        "(`cake`.`id` >= 1 AND `cake`.`name` LIKE \'%Cheese%\')",\n    ].join(" ")\n);\n')))}p.isMDXComponent=!0}}]);