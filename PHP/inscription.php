<?php
// Inclure le fichier de configuration de la base de données
include 'config.php';

// Vérifier si le formulaire a été soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données soumises par le formulaire
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Préparer une requête SQL sécurisée pour insérer un nouvel utilisateur dans la base de données
    $sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $username, $email, $password);

    // Exécuter la requête préparée
    if ($stmt->execute()) {
        // L'utilisateur a été inscrit avec succès
        echo "Inscription réussie !";
        // Vous pouvez rediriger l'utilisateur vers une page de connexion ou une autre page ici
    } else {
        // Une erreur s'est produite lors de l'inscription de l'utilisateur
        echo "Erreur : " . $stmt->error;
    }

    // Fermer la déclaration préparée
    $stmt->close();
}
?>
