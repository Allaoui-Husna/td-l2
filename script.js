document.addEventListener("DOMContentLoaded", function () {
     var form = document.getElementById("quiz-form");
    
     // pour ne paq avoir un reset par default après submit
     form.addEventListener("submit", function (event) {
        event.preventDefault(); 
        
        resetStyles();

        // alert
        
        // verifie si une question et vrai et la change de couleur
         var questions = form.getElementsByClassName("question-item");
         Array.from(questions).forEach(function (question, num) {
            var rep = question.querySelector('.answer:checked');
            if (rep) {
                var estcorrect = verifie(num + 1, rep.value);
                changecouleur(question, estcorrect ? "green" : "red");
            }
        });
    
    });
    
    //pour reset après avoir submit 
    function resetStyles() {
        var questions = form.getElementsByClassName("question-item");
        Array.from(questions).forEach(function (question) {
            question.querySelector('div').style.color = "";
        });
    }
    
    //verifie pour chaques questions si la reponse selectionné a true comme value
    function verifie(numquest, value) {
        var bonnerep = { 1: "true", 2: "true", 3: "true" };
        return bonnerep[numquest] === value;
    }
    
    //fonction pour changer la couleurs d'un bloque
    function changecouleur(question, couleur) {
        var textElements = question.querySelectorAll('.question-item div, .answer-item label, .answer-item code');
        textElements.forEach(function (element) {
            element.style.color = couleur;
        });
    }
});
    
    