$(document).ready( function( ) {

      var dbConfig = {
        selector: '.block:not(.image-large)',
        branding: false,
        elementpath: false, 
        menubar: false,
        inline: true,
        plugins: [ 'quickbars' ],
        toolbar: false,
        menubar: false,
        inline: true,
        init_instance_callback: function(editor) {
            editor.on( 'focus', function(e) {
                console.log( editor )
            });
        }
      };

      var editorInstance = tinymce.init(dbConfig);

      // editorInstance.on( 'focus', function(e) {
      //     console.log( 'test' );
      // });

      // editorinstance.theme.resizeTo (width, height);

});


