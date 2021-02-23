(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{387:function(e,t,n){"use strict";n.r(t);var s=n(41),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"faq"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),n("h2",{attrs:{id:"how-does-this-module-perform"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-does-this-module-perform"}},[e._v("#")]),e._v(" How does this module perform?")]),e._v(" "),n("p",[e._v("The time complexity of IP inspecting and Anti Challenge Collapsar is O(1), and the other inspecting are O(nm), where n is the number of relevant rules and m is the time complexity of performing regular expression matching.")]),e._v(" "),n("h2",{attrs:{id:"post-inspection-failure"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#post-inspection-failure"}},[e._v("#")]),e._v(" Post Inspection Failure")]),e._v(" "),n("p",[e._v("For performance reasons, this module will inspect whether it is in the memory before inspecting the request body. If it is, it will inspect normally, otherwise skip the inspection. You can try to edit nginx.conf.")]),e._v(" "),n("div",{staticClass:"language-nginx extra-class"},[n("pre",{pre:!0,attrs:{class:"language-nginx"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("http")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("client_body_buffer_size")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),e._v("M"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("client_body_in_file_only")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" off"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),n("p",[n("a",{attrs:{href:"https://nginx.org/en/docs/http/ngx_http_core_module.html#client_body_buffer_size",target:"_blank",rel:"noopener noreferrer"}},[e._v("client_body_buffer_size"),n("OutboundLink")],1),e._v("\nand "),n("a",{attrs:{href:"https://nginx.org/en/docs/http/ngx_http_core_module.html#client_body_in_file_only",target:"_blank",rel:"noopener noreferrer"}},[e._v("client_body_in_file_only"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("h2",{attrs:{id:"fork-failed-while-spawning-worker-process-12-cannot-allocate-memory"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#fork-failed-while-spawning-worker-process-12-cannot-allocate-memory"}},[e._v("#")]),e._v(' fork() failed while spawning "worker process" (12: Cannot allocate memory)')]),e._v(" "),n("p",[e._v("It may be caused by excessive use of "),n("code",[e._v("nginx -s reload")]),e._v(". The module requests some memory when reading the configuration, but somehow the memory is not released immediately after "),n("code",[e._v("nginx -s reload")]),e._v(", so frequent "),n("code",[e._v("nginx -s reload")]),e._v(" in a short period of time will most likely cause this error.")])])}),[],!1,null,null,null);t.default=a.exports}}]);