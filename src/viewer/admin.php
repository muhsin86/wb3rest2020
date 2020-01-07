<?php
//
$page_title = "ADMIN PANEL";
//
include("../includes/admin-page-header.php");
include("../includes/config.php");
//
if(!$_SESSION['username'])
{
    header('location: index.php');
}
//
  if(isset($_POST['signout'])) {
      session_destroy();
      header("Location: signout.php");
  
  }
  
  ?>


<!-- FOOTER -->
<?php
include("../includes/footer.php");
?>