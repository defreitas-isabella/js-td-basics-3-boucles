/* BOUCLES - PRÉPA 2 : Plusieurs tables de multiplication
Affichez les x premières valeurs des n premières tables de multiplication :

1. Demandez à l'utilisateur de choisir quelles tables de multiplication il souhaite afficher.
   Le message pourrait être : "Je peux vous afficher les n premières tables de multiplication.
   Dites-moi à laquelle vous souhaitez que je m'arrête. Par exemple, si vous entrez 4,
   je vous afficherai les tables de multiplication par 1, par 2, par 3 et par 4.
   Jusqu'à quelle table voulez-vous que j'aille ?" //



2. Demandez-lui combien de valeurs il souhaite voir pour chacune des tables.
   Le message pourrait être : "Combien de valeurs souhaitez-vous que j'affiche
   pour chacune de ces tables ?"

3. Affichez un message qui résume la demande de l'utilisateur :
   "OK, je vais vous afficher les … premières valeurs des … premières tables de multiplication."

4. Affichez ensuite le résultat avec, pour chacune des tables, un titre
   "Voici les … premières valeurs de la table de multiplication par …"
*/
// Commencez par demander à l'utilisateur jusqu'à quelle table de multiplication il souhaite aller et combien de valeurs il souhaite afficher pour chaque table.
// Ensuite, utilisez une ou plusieurs boucles pour calculer et afficher les x premières valeurs des n premières tables de multiplication.

// Demander à l'utilisateur combien de tables il veut afficher et combien de valeurs par table


// Demander à l'utilisateur combien de tables il veut afficher et combien de valeurs par table
let tableMulti = parseInt(prompt("Jusqu'à quelle table de multiplication voulez-vous aller ?"));
let valeurs = parseInt(prompt("Combien de valeurs souhaitez-vous afficher pour chaque table ?"));

// Première boucle : pour afficher le nombre de tables demandé par l'utilisateur
for (let table = 1; table <= tableMulti; table++) {

    // Afficher un titre avant d'afficher chaque table de multiplication
    console.log(`\nVoici les ${valeurs} premières valeurs de la table de multiplication par ${table} :`);

    // Deuxième boucle : pour afficher les multiplications de la table actuelle
    for (let nbre = 1; nbre <= valeurs; nbre++) {
        console.log(`${table} x ${nbre} = ${table * nbre}`);
    }
}
