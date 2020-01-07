<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
        integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous" />
    <link rel="stylesheet" href="../css/main.css">
    <title>ADMIN</title>

</head>

<div class="topnav">
    <a href="admin.php"  style="float:left"><i class="fab fa-dyalog"></i> ADMIN PANEL</a>
</div>
<div class="header">
    <p>WELCOME TO COURSE CATEGORY</p>
</div>


<div class="topnav"> 
       <a href="index.php" style="float:left"><i class="fas fa-home"></i> HOME / PORTFOLIO</a>
    </div>
<body>

<?php
//
$page_title = "COURSE CATEGORY";
//
include("../includes/config.php");
?>

<!-- PROJECT CONTENT START -->

<h1 class="txt">PROJECTS</h1>

<div class="projectform">

<div id="projectOutput"></div>

</div>

<!-- PROJECT CONTENT END -->


<?php
include("../includes/footer.php");
?>