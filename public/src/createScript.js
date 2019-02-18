export default function ( filepath ) {
  var script = document.createElement( 'script' );
  script.type = "text/plain";
  script.src = filepath;
  document.getElementsByTagName( "head" )[0].appendChild( script );
}