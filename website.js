
function temperatureBug()
{
    var temp = document.project1.temp.value;
    if (temp <= -459.67)
    {
        return "You are not only dead but every atom in you body is frozen."
    }
    if (temp < -330)
    {
        return "You're literally on Pluto."
    }
    if (temp < 40)
    {
        return "Winter"
    }
    if (temp < 50)
    {
        return "Autumn"
    }
    if (temp < 65)
    {
        return "Spring"
    }
    if (temp > 75)
    {
        return "Summer"
    }
    if (temp > 9940)
    {
        return "You're on the Sun."
    }
}



function assignGrade()
{

    var score
        = document.project3.num1.value;
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