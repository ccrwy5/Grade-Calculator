//Handles Tabs

new Vue({
    el: '#tabs',
    data: { activetab: 1 },
});


//Handles Final Grade Calculations (Tab 1)

        function getVals() {

            //Get Current Grade
            var currentGrade = document.getElementById("currentGrade").value;
            currentGrade /= 100;

            //Get Desired Grade
            var desiredGrade = document.getElementById("desiredGrade").value;
            desiredGrade /= 100;

            //Get Weight
            var weight = document.getElementById("weight").value;
            weight /= 100;

            //Calcuate Final Grade
            var finalGrade = (desiredGrade - (1-weight)*currentGrade) / weight;
            finalGrade = Math.round(finalGrade * 100)


            if(finalGrade > 90){
                document.getElementById("result").innerHTML = "You need a " + finalGrade + "% on your final exam to get a " + desiredGrade * 100 + " in the class. Better start studying.";
            } else if (finalGrade <= 90 && finalGrade > 80) {
                document.getElementById("result").innerHTML = "You need a " + finalGrade + "% on your final exam to get a " + desiredGrade * 100 + " in the class. Could be worse.";
            } else if (finalGrade <= 80 && finalGrade > 70) {
                document.getElementById("result").innerHTML = "You need a " + finalGrade + "% on your final exam to get a " + desiredGrade * 100 + " in the class. No sweat, you got this.";
            } else if (finalGrade <= 70 && finalGrade > 60) {
                document.getElementById("result").innerHTML = "You need a " + finalGrade + "% on your final exam to get a " + desiredGrade * 100 + " in the class. This'll be easy.";
            } else {
                document.getElementById("result").innerHTML = "You need a " + finalGrade + "% on your final exam to get a " + desiredGrade * 100 + " in the class. Enjoy not studying!";
            }


        }


// Handles GPA Calulations (Tab 2)

        function getHours() {
            var hours = 0; 

            for(var i=1; i<6; i++) {
                hours = hours + parseInt(document.getElementById("hours_" + i).value);
            }
            return hours;
        }



        function handleCalculations() {
            var hours = 0;
            var points = 0;
            var classes = 0;
            var holder = 0;


            for(var i=1; i<6; i++){
                hours = hours + parseInt(document.getElementById("hours_" + i).value);
                points = points + parseFloat(document.getElementById("grade_" + i).value);
                classes = hours * points;
                
                holder = holder + classes
                hours = 0;
                points = 0;

            }
          
            var GPA = holder/getHours();

            var floated_GPA = GPA.toFixed(2)

            document.getElementById("GPAModal").innerHTML = "Your semester grade point average is " + floated_GPA;
        }