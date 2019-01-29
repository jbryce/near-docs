(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./src/tutorials/oracle.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return m});var o=n("./node_modules/react/index.js"),a=n.n(o),r=n("./node_modules/@mdx-js/tag/dist/index.js");function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=l(this,p(t).call(this,e))).layout=null,n}var n,o,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,a.a.Component),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.components;c(e,["components"]);return a.a.createElement(r.MDXTag,{name:"wrapper",components:t},a.a.createElement(r.MDXTag,{name:"h1",components:t,props:{id:"writing-an-oracle"}},"Writing an Oracle"),a.a.createElement(r.MDXTag,{name:"p",components:t},"Decentralized apps are great for running verifiable computation, dealing with money and assets and have trust into the results.\nBut the only operations that such app can do involve internal data, transaction data and other decentralized apps.\nOracles are the way to use data from internet as a whole, or call some external non-blockchain service (price feed, DNS server, etc)."),a.a.createElement(r.MDXTag,{name:"p",components:t},"Oracle is a service that runs outside of the blockchain, consumes events from both internet and blockchain and can post information to both as well."),a.a.createElement(r.MDXTag,{name:"p",components:t},"Examples:"),a.a.createElement(r.MDXTag,{name:"ul",components:t},a.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"Price feed - reads price for some currency and posts it on the blockchain. Used for building stable coins, prediction markets and others."),a.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"Sensor feed - sensors in the wild record information and post it into the blockchain."),a.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"External service validation, such as Twitter account or DNS name - on posting of the account on the blockchain, this oracle will get the posted info, validate it via the web2 service and then post result back into blockchain."),a.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"Outbound oracle - allows to send information from blockchain into the web2. For example on receival of payment in blockchain to perform some operation in web2 service.")),a.a.createElement(r.MDXTag,{name:"p",components:t},"For some of the applications a single oracles is enough to provide required functionality. For example if you are budiling an e-commerce website and want to accept payments from the blockchain, you can implement outbound oracle that runs on your server.\nOther cases are when data consumed from outside world inside the blockchain must be accurate as there are some incentive to falsify it.\nFor example, price feed should be provided by multiple independent entities and then a basic consensus done on what is the actual price at the moment."),a.a.createElement(r.MDXTag,{name:"p",components:t},"In this tutorial we will start by building a price feed oracle, starting from single oracle providing data and extending it to multi-oracle system."),a.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"step-1----build-smart-contract-to-host-the-price"}},"Step 1 -- Build smart contract to host the price"),a.a.createElement(r.MDXTag,{name:"p",components:t},"Coming soon!"))}}])&&s(n.prototype,o),i&&s(n,i),t}();m.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=src-tutorials-oracle.40799a8bb8b3457bd37f.js.map