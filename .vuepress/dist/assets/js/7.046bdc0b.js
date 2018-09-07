(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{165:function(a,e,t){"use strict";t.r(e);var r=t(0),n=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"chapter-3-generating-a-database-backed-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chapter-3-generating-a-database-backed-api","aria-hidden":"true"}},[a._v("#")]),a._v(" Chapter 3. Generating a Database-backed API")]),a._v(" "),t("p",[a._v("Although DreamFactory supports almost 60 data sources, in addition to the ability to mount third-party REST and SOAP services, and create completely custom scripted services using four supported scripting engines (Node.js, PHP, Python, and V8.js), it might not come as a surprise that DreamFactory's database support is by far the most popular feature. Databases are after all an indispensable part of the application ecosystem, providing a persistent store for every conceivable type of data.")]),a._v(" "),t("p",[a._v("In this chapter you'll learn all about DreamFactory's database support by way of an introduction to the following topics:")]),a._v(" "),t("ul",[t("li",[a._v("Generating a new database-backed REST API")]),a._v(" "),t("li",[a._v("Interacting with the auto-generated Swagger documentation")]),a._v(" "),t("li",[a._v("Securing access to your API using API keys and roles")])]),a._v(" "),t("h2",{attrs:{id:"supported-databases"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#supported-databases","aria-hidden":"true"}},[a._v("#")]),a._v(" Supported Databases")]),a._v(" "),t("p",[a._v("Although DreamFactory offers API generation capabilities for a wide variety of services, including file systems, e-mail delivery providers, and IoT device message brokers, the platform’s database support is far and away the most popular feature. It’s no wonder, considering the ability to expose CRUD (create, retrieve, update, delete) endpoints in just minutes is incredibly appealing, considering manually building out such features often takes at minimum weeks of work.")]),a._v(" "),t("h2",{attrs:{id:"generating-a-mysql-backed-rest-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#generating-a-mysql-backed-rest-api","aria-hidden":"true"}},[a._v("#")]),a._v(" Generating a MySQL-backed REST API")]),a._v(" "),t("h2",{attrs:{id:"interacting-with-your-api-via-the-api-docs-tab"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#interacting-with-your-api-via-the-api-docs-tab","aria-hidden":"true"}},[a._v("#")]),a._v(" Interacting with Your API via the API Docs Tab")]),a._v(" "),t("h3",{attrs:{id:"creating-a-new-record"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-new-record","aria-hidden":"true"}},[a._v("#")]),a._v(" Creating a New Record")]),a._v(" "),t("pre",[t("code",[a._v('{\n\t"resource": [\n\t\t{\n\t\t\t"dept_no": "d015",\n\t\t\t"dept_name": "Fruit Department"\n\t\t}\n\t]\n}\n')])]),a._v(" "),t("h4",{attrs:{id:"adding-records-to-multiple-tables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adding-records-to-multiple-tables","aria-hidden":"true"}},[a._v("#")]),a._v(" Adding Records to Multiple Tables")]),a._v(" "),t("pre",[t("code",[a._v("CREATE TABLE `locations` (\n  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,\n  `supply_id` int(10) unsigned NOT NULL,\n  `name` varchar(255) DEFAULT NULL,\n  PRIMARY KEY (`id`),\n  KEY `supply_id` (`supply_id`),\n  CONSTRAINT `locations_ibfk_1` FOREIGN KEY (`supply_id`) REFERENCES `supplies` (`id`)\n) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;\n\n\nCREATE TABLE `supplies` (\n  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,\n  `name` varchar(255) DEFAULT NULL,\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;\n")])]),a._v(" "),t("p",[a._v("Call /api/v2/mysql/_table/supplies")]),a._v(" "),t("pre",[t("code",[a._v('{\n    "resource": [\n        {\n            "name": "Broom",\n            "locations_by_supply_id": [\n                {    \n                    "name": "Broom Closet"\n                }\n            ]\n        }\n    ]\n}\n')])]),a._v(" "),t("p",[a._v("Response")]),a._v(" "),t("pre",[t("code",[a._v('{\n\t"resource": [\n\t\t{\n\t\t\t"id": 1\n\t\t}\n\t]\n}\n')])]),a._v(" "),t("h3",{attrs:{id:"updating-records"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#updating-records","aria-hidden":"true"}},[a._v("#")]),a._v(" Updating Records")]),a._v(" "),t("h4",{attrs:{id:"put"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#put","aria-hidden":"true"}},[a._v("#")]),a._v(" PUT")]),a._v(" "),t("h4",{attrs:{id:"patch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#patch","aria-hidden":"true"}},[a._v("#")]),a._v(" PATCH")]),a._v(" "),t("h3",{attrs:{id:"deleting-records"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deleting-records","aria-hidden":"true"}},[a._v("#")]),a._v(" Deleting Records")])])}],!1,null,null,null);n.options.__file="chapter03.md";e.default=n.exports}}]);