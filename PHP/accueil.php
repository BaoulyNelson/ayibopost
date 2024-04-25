<?php
// Démarrer la session
session_start();

// Vérifier si l'utilisateur est connecté
if (isset($_SESSION['username'])) {
    // Affichage d'un message de bienvenue
    echo "<h1>Bienvenue sur la page d'accueil, ".$_SESSION['username']." !</h1>";

    // Vous pouvez également inclure d'autres fonctionnalités ou informations spécifiques à la page d'accueil

    // Lien pour se déconnecter
    echo "<p><a href='logout.php'>Se déconnecter</a></p>";
} else {
    // Rediriger l'utilisateur vers la page de connexion
    header("Location: login.html");
    exit;
}
?>
