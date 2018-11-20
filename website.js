
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

function madLib()
{
    var x=[];

    return "Julius Caesar was born in 102 B. F. He was a"
        + green +
        "general, and between 49 and 58 B.C. he defeated the Gauls, the Goths, and the"
        + geese +
        ". After that, he"
        + quickly +
        "became more famous and defeated Pompey at the battle of "
        + mountEverest +
        "at Pharsala. The Romans then elected him permanent "
        + plumber +
        ", and he used to walk around wearing a circlet of ivy leaves on his "
        + eye +
        ". Then Caesar went to Egypt, where he met Cleopatra, the teenage Egyptian "
        + mouse +
        ".When he conquered the Syrians in 46 B.C., he sent back a message saying, 'Veni, vedi, "
        + Piza +
        ".' In 44 B.C., a soothsayer told Caesar to 'Beware the Ides of "
        + ninja +
        ",  but he ignored the warning and in March he was stabbed in the "
        + escalator +
        " by a group of senators. His last words were, 'Et tu "
        + anzalone +
        "?'"

}