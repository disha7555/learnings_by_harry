function f()
{
	let div2=document.getElementById("div2");
	let randomnumber=Math.floor(Math.random()*100)+1;//Math.random()*100+1: generates a random number between 1 to 100 and
//if num is other than integer,
//it will take its floor value to convert it into integer.
//if we take Math.random()*100, it will generate number between 0 to 100.
	let numberofguess=0;
	let score=0;
	let guessednumber;//given by user.
	
	do{
		guessednumber=prompt("Enter a Number"); //ask a number from user to match with our originally generated random number
		guessednumber=Number.parseInt(guessednumber);//convert it into int
		numberofguess++;
		//match our random no with number given by user
		if(randomnumber==guessednumber)
		{
			score=100-numberofguess;
			alert("your guess is corect");
		}
		else if(randomnumber>guessednumber)
		{
			alert("your guess is lesser than random number");
		}
		else
		{
			alert("your guess is greater than random number");
		}
	}while(randomnumber!=guessednumber && numberofguess<100);//loop will run until number is guessed is right and no of attempts taken is lessthan 100.
	if(randomnumber==guessednumber)
	{
		div2.innerHTML="you have guessed correct number"+randomnumber+"in"+numberofguess+"attempts"+"Your score is"+score+"out of 100";
	}
	else{
		div2.innerHTML="Original number was "+randomnumber+". Better luck next time";
	}
}
