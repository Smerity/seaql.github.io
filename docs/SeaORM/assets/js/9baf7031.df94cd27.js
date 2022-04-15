"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[4101],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(n),c=r,k=s["".concat(u,".").concat(c)]||s[c]||d[c]||l;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4960:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return s}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={},u="Entity Structure",p={unversionedId:"generate-entity/entity-structure",id:"version-0.6.x/generate-entity/entity-structure",title:"Entity Structure",description:"Let's look at a simple Cake entity.",source:"@site/versioned_docs/version-0.6.x/03-generate-entity/02-entity-structure.md",sourceDirName:"03-generate-entity",slug:"/generate-entity/entity-structure",permalink:"/SeaORM/docs/0.6.x/generate-entity/entity-structure",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.6.x/03-generate-entity/02-entity-structure.md",tags:[],version:"0.6.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1650016279,formattedLastUpdatedAt:"4/15/2022",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using `sea-orm-cli`",permalink:"/SeaORM/docs/0.6.x/generate-entity/sea-orm-cli"},next:{title:"Expanded Entity Structure",permalink:"/SeaORM/docs/0.6.x/generate-entity/expanded-entity-structure"}},m=[{value:"Entity",id:"entity",children:[{value:"Table Name",id:"table-name",children:[],level:3}],level:2},{value:"Column",id:"column",children:[{value:"Column Name",id:"column-name",children:[],level:3},{value:"Column Type",id:"column-type",children:[],level:3},{value:"Additional Properties",id:"additional-properties",children:[],level:3},{value:"Ignore Attribute",id:"ignore-attribute",children:[],level:3}],level:2},{value:"Primary Key",id:"primary-key",children:[{value:"Auto Increment",id:"auto-increment",children:[],level:3},{value:"Composite Key",id:"composite-key",children:[],level:3}],level:2},{value:"Relation",id:"relation",children:[],level:2}],d={toc:m};function s(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"entity-structure"},"Entity Structure"),(0,l.kt)("p",null,"Let's look at a simple ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/blob/master/src/tests_cfg/cake.rs"},"Cake")," entity."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::entity::prelude::*;\n\n#[derive(Clone, Debug, PartialEq, DeriveEntityModel)]\n#[sea_orm(table_name = "cake")]\npub struct Model {\n    #[sea_orm(primary_key)]\n    pub id: i32,\n    pub name: String,\n}\n\n#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]\npub enum Relation {\n    #[sea_orm(has_many = "super::fruit::Entity")]\n    Fruit,\n}\n\nimpl ActiveModelBehavior for ActiveModel {}\n')),(0,l.kt)("h2",{id:"entity"},"Entity"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"DeriveEntityModel")," macro does all the heavy lifting of defining an ",(0,l.kt)("inlineCode",{parentName:"p"},"Entity")," with associating ",(0,l.kt)("inlineCode",{parentName:"p"},"Model"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Column")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"PrimaryKey"),"."),(0,l.kt)("h3",{id:"table-name"},"Table Name"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"table_name")," attribute specifies the corresponding table in the database.\nOptionally, you can also specify the database schema or database name by ",(0,l.kt)("inlineCode",{parentName:"p"},"schema_name"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'#[sea_orm(table_name = "cake", schema_name = "public")]\npub struct Model { ... }\n')),(0,l.kt)("h2",{id:"column"},"Column"),(0,l.kt)("h3",{id:"column-name"},"Column Name"),(0,l.kt)("p",null,"All column names are assumed to be in snake-case. You can override the column name by specifying the ",(0,l.kt)("inlineCode",{parentName:"p"},"column_name")," attribute."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'#[sea_orm(column_name = "name")]\npub name: String\n')),(0,l.kt)("h3",{id:"column-type"},"Column Type"),(0,l.kt)("p",null,"The column type will be derived automatically with the following mapping:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Rust type"),(0,l.kt)("th",{parentName:"tr",align:null},"Database Type ",(0,l.kt)("br",null)," (",(0,l.kt)("a",{parentName:"th",href:"https://docs.rs/sea-orm/0.6/sea_orm/entity/enum.ColumnType.html"},(0,l.kt)("inlineCode",{parentName:"a"},"ColumnType")),")"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Char")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"String")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"u8, i8"),(0,l.kt)("td",{parentName:"tr",align:null},"TinyInteger")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"u16, i16"),(0,l.kt)("td",{parentName:"tr",align:null},"SmallInteger")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"u32, i32"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"u64, i64"),(0,l.kt)("td",{parentName:"tr",align:null},"BigInteger")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"f32"),(0,l.kt)("td",{parentName:"tr",align:null},"Float")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"f64"),(0,l.kt)("td",{parentName:"tr",align:null},"Double")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NaiveDate"),(0,l.kt)("td",{parentName:"tr",align:null},"Date")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NaiveTime"),(0,l.kt)("td",{parentName:"tr",align:null},"Time")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DateTime (chrono::NaiveDateTime)"),(0,l.kt)("td",{parentName:"tr",align:null},"DateTime")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DateTimeLocal (chrono::DateTime","<","Local",">",") ",(0,l.kt)("br",null),"DateTimeUtc (chrono::DateTime","<","Utc",">",")"),(0,l.kt)("td",{parentName:"tr",align:null},"Timestamp")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DateTimeWithTimeZone (chrono::DateTime","<","FixedOffset",">",")"),(0,l.kt)("td",{parentName:"tr",align:null},"TimestampWithTimeZone")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Uuid (uuid::Uuid)"),(0,l.kt)("td",{parentName:"tr",align:null},"Uuid")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Json (serde_json::Value)"),(0,l.kt)("td",{parentName:"tr",align:null},"Json")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Decimal (rust_decimal::Decimal)"),(0,l.kt)("td",{parentName:"tr",align:null},"Decimal")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Vec","<","u8",">"),(0,l.kt)("td",{parentName:"tr",align:null},"Binary")))),(0,l.kt)("p",null,"You can override the default mappings between a Rust type and ",(0,l.kt)("inlineCode",{parentName:"p"},"ColumnType")," by the ",(0,l.kt)("inlineCode",{parentName:"p"},"column_type")," attribute."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'#[sea_orm(column_type = "Text")]\npub name: String\n')),(0,l.kt)("h3",{id:"additional-properties"},"Additional Properties"),(0,l.kt)("p",null,"You can add additional properties ",(0,l.kt)("inlineCode",{parentName:"p"},"default_value"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"unique"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"indexed")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"nullable")," to a column."),(0,l.kt)("p",null,"If you specified a custom ",(0,l.kt)("inlineCode",{parentName:"p"},"column_type")," for an optional attribute, you must also specify ",(0,l.kt)("inlineCode",{parentName:"p"},"nullable"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'#[sea_orm(column_type = "Text", default_value = "Sam", unique, indexed, nullable)]\npub name: Option<String>\n')),(0,l.kt)("h3",{id:"ignore-attribute"},"Ignore Attribute"),(0,l.kt)("p",null,"If you want to ignore a particular model attribute such that it maps to no database column, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"ignore")," annotation."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"#[sea_orm(ignore)]\npub ignore_me: String\n")),(0,l.kt)("h2",{id:"primary-key"},"Primary Key"),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"primary_key")," attribute to mark a column as the primary key."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"#[sea_orm(primary_key)]\npub id: i32\n")),(0,l.kt)("h3",{id:"auto-increment"},"Auto Increment"),(0,l.kt)("p",null,"By default, ",(0,l.kt)("inlineCode",{parentName:"p"},"auto_increment")," is implied for ",(0,l.kt)("inlineCode",{parentName:"p"},"primary_key")," column. Override it by specifying ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"#[sea_orm(primary_key, auto_increment = false)]\npub id: i32\n")),(0,l.kt)("h3",{id:"composite-key"},"Composite Key"),(0,l.kt)("p",null,"This is usually the case in junction tables, where a two-column tuple is used as the primary key. Simply annotate multiple columns to define a composite primary key. By default, ",(0,l.kt)("inlineCode",{parentName:"p"},"auto_increment")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," for composite key."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct Model {\n    #[sea_orm(primary_key)]\n    pub cake_id: i32,\n    #[sea_orm(primary_key)]\n    pub fruit_id: i32,\n}\n")),(0,l.kt)("h2",{id:"relation"},"Relation"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"DeriveRelation")," macro is a simple wrapper to impl the ",(0,l.kt)("inlineCode",{parentName:"p"},"RelationTrait"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(DeriveRelation)]\npub enum Relation {\n    #[sea_orm(has_many = "super::fruit::Entity")]\n    Fruit,\n}\n')),(0,l.kt)("p",null,"expands into"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"impl RelationTrait for Relation {\n    fn def(&self) -> RelationDef {\n        match self {\n            Self::Fruit => Entity::has_many(super::fruit::Entity).into(),\n        }\n    }\n}\n")),(0,l.kt)("p",null,"Learn more about relations in the next section."))}s.isMDXComponent=!0}}]);