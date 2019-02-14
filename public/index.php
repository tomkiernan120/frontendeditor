<?php

ini_set( "display_errors", 1 );
ini_set( "error_log", "../php-error.log" );

require "../vendor/autoload.php";
Mustache_Autoloader::register();

use \RedBeanPHP\R as R;


R::setup( 'mysql:host=mysql;dbname=seecmsblocks',
    'seecmsblocks', 'seecmsblocks' ); //for both mysql or mariaDB

foreach( glob( "../controllers/*.php" ) as $filename ) {
  require $filename;
}


$general = new General;

echo $general->render();