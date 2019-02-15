import mustache from 'mustache';
import domReady from './domReady';
import request from './request';

var databaseinfo = {
  custominput: {
    css: '',
    scripts: ''
  },
  template: `<div>name</div>`,
}



domReady(function(){

  var parentHTML = document.documentElement.innerHTML;

  console.log( parentHTML );

  parentHTML = parentHTML.replace( '{{ css }}', databaseinfo.custominput.css );
  parentHTML = parentHTML.replace( '{{ scripts }}', databaseinfo.custominput.scripts );

  document.documentElement.innerHTML = parentHTML;

  var rendered = mustache.render( databaseinfo.template, databaseinfo.views );

  var doc = document.getElementById( 'loading' );

  doc.innerHTML = rendered;
  
})


