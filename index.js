
let myhttp = require('http');
let myserver = myhttp.createServer(
  function( myrequest, myresponse ) {
    console.log( myrequest.url );

    let mytext;
    if ( myrequest.url === "/hey" ) {
      mytext = "I'm Batman";
    } else {
      mytext = "Hello there, I'm Bruce Wayne";
    }

    myresponse.writeHead( 200, { "Content-Type": "text/plain" } );
    myresponse.end( mytext );
  }
);

myserver.listen(8080, "0.0.0.0");
console.log("server has started");
