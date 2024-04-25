<?php
// Inclure le fichier de configuration de la base de données
include 'config.php';

// Vérifier si le formulaire a été soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données soumises par le formulaire
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Préparer une requête SQL pour vérifier les informations de connexion
    $sql = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
    $result = $conn->query($sql);

    // Vérifier si des données correspondent aux informations de connexion
    if ($result->num_rows == 1) {
        // L'utilisateur est connecté avec succès
        echo "Connexion réussie !";
        // Vous pouvez rediriger l'utilisateur vers une page d'accueil ou une autre page sécurisée ici
    } else {
        // Nom d'utilisateur ou mot de passe incorrect
        echo "Nom d'utilisateur ou mot de passe incorrect.";
    }
}
?>
