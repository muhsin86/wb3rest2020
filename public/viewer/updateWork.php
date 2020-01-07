<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
        integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous" />
    <link rel="stylesheet" href="../css/main.css">
    <title>Update work</title>

</head>
<body>

<?php
//
include("../includes/config.php");

/* Anslut till databasen */
$work = new Work();

if(isset($_GET['update'])) {
     $updatedWork = $work->getWorkById($_GET['update']);
    
   }
   
   if(isset($_POST['submit'])) {
     if($work->updateWork($_POST['startdate'], $_POST['enddate'], $_POST['work'], $_POST['title'], $_POST['url'], $_GET['update']));
   }

?>

<div class="content">

    <form method="POST" id="workform" value="<?=  $updatedWork['id']; ?>">

        <h2>UPDATE work</h2>

        <div class="input-container">
            <div class="fontAwesome"></div>
            <input class="input-field" id="update-startdate" type="text" name="update-startdate"  value="<?=  $updatedWork['startdate']; ?>" required>
            <div class="fontAwesome"></div>
            <input class="input-field" id="update-enddate" type="text" name="update-enddate"  value="<?=  $updatedWork['enddate']; ?>" required>
            <div class="fontAwesome"></div>
            <input class="inputfield" id="update-work" type="text" name="update-work"  value="<?=  $updatedWork['work']; ?>" required>
        </div>

        <div class="inputcontainer">
            <div class="fontAwesome"></div>
            <input class="inputfield" id="update-title" type="text" name="update-title"  value="<?=  $updatedWork['title']; ?>" required>
            <div class="fontAwesome"></div>
            <input class="inputfield" id="update-url" type="text"name="update-url"  value="<?=  $updatedWork['url']; ?>" required">

        </div>
        <input type="submit" id="submit" value="UPDATE" class="btn">

    </form>
</div>

<?php
include("../includes/footer.php");
?>