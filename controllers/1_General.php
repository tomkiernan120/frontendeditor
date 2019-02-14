<?php

class General {
    
    public $moustace;
    public $template;
    public $templateDir = "../templates/";
    public $templateString;
    public $parts;
    public $config;

    public $blockMap = [
      "block" => "textarea",
      "blockimage" => "image",
      "blockimage-large" => "image-large"
    ];

    public function __construct( $settings = null ) {

        if( !isset( $settings["template"] ) ){
          $this->template = "Default";
        }

        if( isset( $settings["templateDir"] ) ){
          $this->templateDir = $settings["templateDir"];
        }

        $this->parts = [ "header" => file_get_contents( "../parts/header.php" ), "footer" => file_get_contents( "../parts/footer.php" ) ];

        $this->config["partials"]["body"] = file_get_contents( "../parts/body.php" );

        $this->parseBlocks();

        if( $_GET["admin"] ){
          $this->setupAdmin();
        }
 
        $this->moustache = new Mustache_Engine( $this->config );
        $this->templateString = file_get_contents( $this->templateDir . $this->template.".php" );
    }

    public function setupAdmin() {
      if( isset( $this->parts["header"] ) ) {
        $this->parts["header"] = str_replace( "</head>", "<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.7.2/css/all.css\" integrity=\"sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr\" crossorigin=\"anonymous\"><link rel=\"stylesheet\" href=\"css/editor.css\" /><script type=\"text/javascript\" src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js\"></script><script type=\"text/javascript\" src=\"https://ajax.cdnjs.com/ajax/libs/underscore.js/1.1.4/underscore-min.js\"></script>
<script type=\"text/javascript\" src=\"https://ajax.cdnjs.com/ajax/libs/backbone.js/0.3.3/backbone-min.js\"></script><script src=\"https://cloud.tinymce.com/5/tinymce.min.js?apiKey=y07ux83pqthdktqrt057oe157rm9lg8hoztw6t76giuwtux6\"></script><script type=\"text/javascript\" src=\"js/editor.js\"></script>
</head>", $this->parts["header"] );
      }


      if( isset( $this->parts["body"] ) ) {
        $this->parts["body"] = str_replace( "", "", $this->parts["body"] );
      }

    }

    public function parseBlocks(){

      $this->config['partials'][ "block" ] = "";
      $this->config['partials'][ "blockend" ] = "";

      $this->config['partials'][ "block" ] = "<div class=\"blockwrap\"><div class=\"side-options\"><div class=\"move-up\"><a><i class=\"fas fa-chevron-up\"></i></a></div><div class=\"move-drag\"><a><i class=\"fas fa-ellipsis-h\"></i></a></div><div class=\"move-down\"><a><i class=\"fas fa-chevron-down\"></i></a></div></div><div class=\"block\">"; 
      $this->config['partials'][ "blockimage" ] = "<div class=\"blockwrap\"><div class=\"block image\">";
      $this->config['partials'][ "blockimage-large" ] = "<div class=\"blockwrap\"><div class=\"block image-large\">";
      $this->config['partials'][ "blockend" ] = "</div></div>";
      $this->config['partials'][ "blockimage-blockend" ] = "</div></div>";
      $this->config['partials'][ "blockimage-large-blockend" ] = "</div></div>";

      if( $_GET["admin"] ) {
        $this->config["partials"]["blockend"] = "</div><div class=\"bottom-options\"><a><i class=\"far fa-times-circle\"></i></a></div></div>";
      }



    }

    public function blocks() {

    }

    public function render() {
      return $this->moustache->render( $this->templateString, $this->parts );
    }

    public function textareaBlock() {

    }

    public function imageBlock() {

    }

    public function headingBlock() {

    }

    public function listBlock() {

    }

    public function columnBlocks() {

    }

}