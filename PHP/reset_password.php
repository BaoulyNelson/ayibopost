<?php
// Vérification des informations envoyées via le formulaire
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];

    // Vérifier l'adresse email dans la base de données ou tout autre système de stockage
    // Ici, nous allons simplement simuler une vérification réussie
    // Si l'email est trouvé, généralement, vous enverriez un lien de réinitialisation de mot de passe à cet email
    // Pour simplifier, nous allons simplement afficher un message disant que le lien de réinitialisation a été envoyé

    // Simulation de l'envoi du lien de réinitialisation
    // Vous pouvez ajouter ici la logique réelle pour envoyer un e-mail avec un lien de réinitialisation
    $reset_link = "https://example.com/reset-password?token=your_reset_token";

    echo "<script>alert('Un lien de réinitialisation de mot de passe a été envoyé à votre adresse email.');</script>";
    echo "<script>window.location.href='login.html';</script>"; // Rediriger l'utilisateur vers la page de connexion après avoir envoyé le lien de réinitialisation
}
?>
