import mustache from 'mustache';
import domReady from './domReady';
import request from './request';
import createScript from './createScript';

import React from 'react';

// var databaseinfo = {
//   custominput: {
//     css: '',
//     scripts: '',
//     title: 'test',
//   },
//   views: {

//   },
//   template: `<div class="container">
//     {{ block }}
//   </div>`,

//   partials: {
//     block: `{{> blockstart }}
//     {{> blockend }}`,
//     blockstart: `<div class="block">`,
//     blockend: `</div>`,
//     data: { // example of content loaded from API
//       contents: [
//         {
//           content: `<h1>Lorem Ipsum</h1><p></p>`
//         }
//       ]
//     }
//   }
// };


import React from "react";
import ReactDOM from "react-dom";

const Index = () => {
  return <div>Hello React!</div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));


// var parentHTML = document.documentElement.innerHTML;

// document.documentElement.innerHTML = document.documentElement.innerHTML.replace( '{{ css }}', databaseinfo.custominput.css );
// document.documentElement.innerHTML = document.documentElement.innerHTML.replace( '{{ scripts }}', databaseinfo.custominput.scripts );
// document.documentElement.innerHTML = document.documentElement.innerHTML.replace( '{{ title }}', databaseinfo.custominput.title );

// // parentHTML = parentHTML.replace( '{{ scripts }}', databaseinfo.custominput.scripts );
// // parentHTML = parentHTML.replace( '{{ title }}', databaseinfo.custominput.title );



// domReady( function() {
  // var rendered = mustache.render( databaseinfo.template, databaseinfo.views, databaseinfo.partials );
  // var doc = document.getElementById( 'root' );
  // doc.innerHTML = rendered;
// });
