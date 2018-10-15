function tenToSmall(num, base)
{
    num = 79;
    base = 2;
    smallNum = "";

    while (num > 0)
    {
        smallNum = num%base + smallNum; // returns remainder
        num = Math.floor(num/base);
        alert(smallNum);
        alert(num);

    }
    return smallNum;

}

function smallToTen(num, base)
{
    num = 1101;
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

