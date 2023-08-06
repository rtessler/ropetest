<?php

define("DB_HOST", "localhost");
define("DB_DEFAULT_LIMIT", 1000);
define("ADMIN_EMAIL", "robert.tessler@outlook.com");

if ($_SERVER['HTTP_HOST'] == 'localhost') // or any other host
{
     // development

    define("DB_USERNAME", "root");
    define("DB_PASSWORD", "");
    define("DB_DATABASE_NAME", "ropetest");
}
else
{
     // production

    define("DB_USERNAME", "creekroa_robt");
    define("DB_PASSWORD", "ropetestrobt123.");
    // define("DB_USERNAME", "root");
    // define("DB_PASSWORD", "");
    define("DB_DATABASE_NAME", "creekroa_ropetest");
}