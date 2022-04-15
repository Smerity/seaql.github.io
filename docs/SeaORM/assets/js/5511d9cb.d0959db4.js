"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[5055],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,b=m["".concat(l,".").concat(d)]||m[d]||p[d]||s;return n?r.createElement(b,i(i({ref:t},u),{},{components:n})):r.createElement(b,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9302:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(7462),a=n(3366),s=(n(7294),n(3905)),i=["components"],o={},l="Using SQLite",c={unversionedId:"write-test/sqlite",id:"version-0.4.x/write-test/sqlite",title:"Using SQLite",description:"If you want to test application logic that does not require database-specific features, SQLite will be a good choice for you.",source:"@site/versioned_docs/version-0.4.x/07-write-test/03-sqlite.md",sourceDirName:"07-write-test",slug:"/write-test/sqlite",permalink:"/SeaORM/docs/0.4.x/write-test/sqlite",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.4.x/07-write-test/03-sqlite.md",tags:[],version:"0.4.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1650016279,formattedLastUpdatedAt:"4/15/2022",sidebarPosition:3,frontMatter:{},sidebar:"version-0.4.x/tutorialSidebar",previous:{title:"Mock Interface",permalink:"/SeaORM/docs/0.4.x/write-test/mock"},next:{title:"Custom Select",permalink:"/SeaORM/docs/0.4.x/advanced-query/custom-select"}},u=[{value:"Integration Test",id:"integration-test",children:[],level:2},{value:"Setup database schema",id:"setup-database-schema",children:[],level:2},{value:"Performing tests",id:"performing-tests",children:[],level:2}],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"using-sqlite"},"Using SQLite"),(0,s.kt)("p",null,"If you want to test application logic that does not require database-specific features, SQLite will be a good choice for you."),(0,s.kt)("p",null,"Check out a simple example ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/blob/master/tests/basic.rs"},"here"),"."),(0,s.kt)("h2",{id:"integration-test"},"Integration Test"),(0,s.kt)("p",null,"It is recommended to execute more complex test cases in ",(0,s.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/rust-by-example/testing/integration_testing.html"},"integration tests"),". The following code snippet illustrates the steps of connecting to a database, setting up schema and performing tests."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'async fn main() -> Result<(), DbErr> {\n    // Connecting SQLite\n    let db = Database::connect("sqlite::memory:").await?;\n\n    // Setup database schema\n    setup_schema(&db).await?;\n\n    // Performing tests\n    testcase(&db).await?;\n\n    Ok(())\n}\n')),(0,s.kt)("h2",{id:"setup-database-schema"},"Setup database schema"),(0,s.kt)("p",null,"To create tables in SQLite database for testing, instead of writing ",(0,s.kt)("a",{parentName:"p",href:"https://docs.rs/sea-query/*/sea_query/table/struct.TableCreateStatement.html"},(0,s.kt)("inlineCode",{parentName:"a"},"TableCreateStatement"))," manually, you can derive it from ",(0,s.kt)("inlineCode",{parentName:"p"},"Entity")," using ",(0,s.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/0.4/sea_orm/schema/struct.Schema.html#method.create_table_from_entity"},(0,s.kt)("inlineCode",{parentName:"a"},"Schema::create_table_from_entity")),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"async fn setup_schema(db: &DbConn) {\n\n    // Setup Schema helper\n    let schema = Schema::new(DbBackend::Sqlite);\n\n    // Derive from Entity\n    let stmt: TableCreateStatement = schema.create_table_from_entity(MyEntity);\n\n    // Or setup manually\n    assert_eq!(\n        stmt.build(SqliteQueryBuilder),\n        Table::create()\n            .table(MyEntity)\n            .col(\n                ColumnDef::new(MyEntity::Column::Id)\n                    .integer()\n                    .not_null()\n            )\n            //...\n            .build(SqliteQueryBuilder)\n    );\n\n    // Execute create table statement\n    let result = db\n        .execute(db.get_database_backend().build(&stmt))\n        .await;\n}\n")),(0,s.kt)("h2",{id:"performing-tests"},"Performing tests"),(0,s.kt)("p",null,"Execute test cases and assert against the results."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'async fn testcase(db: &DbConn) -> Result<(), DbErr> {\n\n    let baker_bob = baker::ActiveModel {\n        name: Set("Baker Bob".to_owned()),\n        contact_details: Set(serde_json::json!({\n            "mobile": "+61424000000",\n            "home": "0395555555",\n            "address": "12 Test St, Testville, Vic, Australia"\n        })),\n        bakery_id: Set(2),\n        ..Default::default()\n    };\n\n    let baker_insert_res = Baker::insert(baker_bob)\n        .exec(db)\n        .await\n        .expect("could not insert baker");\n\n    assert_eq!(baker_insert_res.last_insert_id, 1);\n\n    Ok(())\n}\n')))}m.isMDXComponent=!0}}]);