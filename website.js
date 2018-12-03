
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
    var activity = document.getElementById('activity').value;
    var time = document.project2.time.value;

    if(activity == "bowl")
    {
        return 3 * time + " " + "Calories burned";
    }
    else if(activity == "weightLift")
    {
        return 5 * time + " " + "Calories burned";
    }
    else if(activity == "run")
    {
        return 10 * time + " " + "Calories burned";
    }
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

function tenToSmall(num, base)
{
    base = 2;
    var num = document.toBinary.decimal.value;
    smallNum = "";

    while (num > 0)
    {
        smallNum = num%base + smallNum; // returns remainder
        num = Math.floor(num/base);

    }
    return smallNum;

}

function smallToTen(num, base)
{
    var num = document.toDecimal.binary.value;
    base = 2;
    tenNum = 0;
    numLength = num.toString().length;

    while (num > 0)
    {
        var denominator = Math.pow(10,(numLength-1));
        var currentDigit = Math.floor(num/denominator);
        tenNum = tenNum + currentDigit*Math.pow(base,numLength-1);
        num = num%denominator;
        numLength--;

    }
    return tenNum;

}

function calculate(expression)
{
    var firstNum = Number(expression.substr(0,1));
    var operator = expression.substr(1,1);
    var secondNum = Number(expression.substr(2,1));

    if (operator === '+')
    {
        return addNums(firstNum,secondNum);
    }

    else if (operator === '-')
    {
        return subNums(firstNum,secondNum);
    }

    else if (operator === '*')
    {
        return multiNums(firstNum,secondNum);
    }

    else if (operator === '/')
    {
        return divNums(firstNum,secondNum);
    }

}

function addNums(p1, p2)
{
    return p1+p2;
}

function subNums(p1, p2)
{
    return p1-p2;
}

function multiNums(p1, p2)
{
    return p1*p2;
}

function divNums(p1, p2)
{
    return p1/p2;
}

function checkAnswers()
{
    //make array to store answers
    var feedback = [];
    var score=0;
    var q1Answer = document.quiz.a1.value.toLowerCase();

    if (q1Answer === 'overwatch league')
    {
        score++;
        feedback.push("Question 1 is correct!");
    }
    else
    {
        feedback.push("WRONG! Question 1 was Overwatch League");
    }

    if (document.quiz.a2.value === 'London Spitfire')
    {
        score++;
        feedback.push("Question 2 is correct!");
    }
    else
    {
        feedback.push("WRONG! Question 2 was the London Spitfire");
    }
    if (document.quiz.a3A.checked === false && document.quiz.a3B.checked === true && document.quiz.a3C.checked === true && document.quiz.a3D.checked === false && document.quiz.a3E.checked === false && document.quiz.a3F.checked === false)
    {
        score++;
        feedback.push("Question 3 is correct!");
    }
    else
    {
        feedback.push("WRONG! The teams that made it to the Grand Finals were the Philadelphia Fusion and the London Spitfire");
    }

    alert(feedback);
    alert("You got " + score + " questions right");
}

