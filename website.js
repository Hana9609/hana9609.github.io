
function temperatureBug()
{
    var temp = document.project1.temp.value;

    if (temp <= -459.67)
    {
        return document.getElementById('weather').src="IMG/0K.jpg", "Not only are you dead, but every atom in your body is frozen.";
    }
    else if (temp <= -330)
    {
        return document.getElementById('weather').src="IMG/Pluto.jpg", "You're literally on Pluto.";
    }
    else if (temp <= 40)
    {
        return document.getElementById('weather').src="IMG/winter.jpg", "Winter";
    }
    else if (temp <= 50)
    {
        return document.getElementById('weather').src="IMG/autumn.jpg", "Autumn";
    }
    else if (temp < 75)
    {
        return document.getElementById('weather').src="IMG/spring.jpg", "Spring";
    }
    else if (temp >= 9940)
    {
        return document.getElementById('weather').src="IMG/sun.jpg", "You're on the Sun.";
    }
    else if (temp >=75)
    {
        return document.getElementById('weather').src="IMG/summer.jpg", "Summer";
    }
}

function calorieCounter()
{
    var activity = document.project2.activity;
    var time = document.project2.time;


}

function assignGrade()
{

    var score = document.project3.num1.value;

    if (score < 50)
    {
        return "F";
    }
    else if (score < 60)
    {
        return "F+";
    }
    else if (score < 70)
    {
        return "D";
    }
    else if (score < 80)
    {
        return "C";
    }
    else if (score < 90)
    {
        return "B";
    }
    else if (score <= 100)
    {
        return "A";
    }
    else
    {
        return "Invalid input."
    }

}