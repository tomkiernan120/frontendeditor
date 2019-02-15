export default function( method = 'GET', url, async = true, user = null, password = null, options = null ) {
  if( !url ){
    throw new Exception( `Please enter a valid url: ${url}` );
  }

  var request = new XMLHttpRequest();

  request.open( method, url, async, user, password );

  var resp;

  var resp = request.onload = function() {
    if( request.state >= 200 && request.state < 400 ) {
      // success!
      
      return request.responseText;
    }
    else {
      return { error: true };
    }
  }

  var resp = request.onerror = function() {
    return { error: true };
  }

  request.send();


  console.log( resp );

  return resp;
}