<?php
$page_title = "SIGN IN";
include("../includes/login-header.php");
include("../includes/config.php");

$user = new User();

if(isset($_POST['submit'])) {
    if(!empty($_POST['username']) && !empty($_POST['password'])) {
        
        $_SESSION['msg'] = "<strong>WRONG USERNAME/PASSWORD!</strong>";

        // Kontrollera användarens uppgifter
        if($user->loginUser($_POST['username'], $_POST['password'])) {
            header("Location: admin.php");
        }

    }else {
        $_SESSION['msg'] = "<strong>SORRY, BOTH FEILDS MUST BE FYLLED</strong>";
    } 
}

?>
<div class="content">

<form method="POST" id="loginform">
<?php include("../includes/msg.php"); ?>
   
<h2>SIGN IN</h2>

<div class="input-container">
    <div class="fontAwesome"></div>
    <input class="input-field" id="username" type="text" placeholder="ADMIN NAME" name="username">
</div>

<div class="input-container">
    <div class="fontAwesome"></div>
    <input class="input-field" id="password" type="password" placeholder="ADMIN PASSWORD" name="password">
</div>
<button type="submit" name="submit" class="btn">SIGN IN</button>

 <p>Jag har inte konto <a href="signupp.php" title="Skapa ett konto" style="text-decoration:none;"><strong> skapa ett konto </strong></a></p>
</form>
</div>


<?php
include("../includes/footer.php");
?>
