(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{508:function(t,n,o){"use strict";o.r(n),function(t){o.d(n,"default",(function(){return u}));var e=o(80),a=o(33),r=o(39),i=o(53);function c(t,n){return(c=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}var u=function(n){var o,e;function u(){return n.apply(this,arguments)||this}e=n,(o=u).prototype=Object.create(e.prototype),o.prototype.constructor=o,c(o,e);var s=u.prototype;return s.onReady=function(){this.registerContactFormValidation()},s.registerContactFormValidation=function(){var n="form[data-contact-form]",o=Object(a.a)({submit:n+' input[type="submit"]',tap:i.b}),e=t(n);o.add([{selector:n+' input[name="contact_email"]',validate:function(t,n){t(r.a.email(n))},errorMessage:this.context.contactEmail},{selector:n+' textarea[name="contact_question"]',validate:function(t,n){t(r.a.notEmpty(n))},errorMessage:this.context.contactQuestion}]),e.on("submit",(function(t){o.performCheck(),o.areAll("valid")||t.preventDefault()}))},u}(e.a)}.call(this,o(2))}}]);
//# sourceMappingURL=theme-bundle.chunk.14.js.map
