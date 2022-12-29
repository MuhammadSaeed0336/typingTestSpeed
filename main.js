
const setOfWords = [
    "My name is Muhammad Saeed and I am a Mern Stack developer at Bitsol Technologies.",
    "Hope you will be enjoy to come here for typing speed test.",
    "If you are also want to be a Mern Stack developer join the bitsol technologies bootcamp free of cost and kick start your journey. "
];

const msg = document.getElementById('msg');
const typewords = document.getElementById('mywords');
const btn = document.getElementById('btn');

let startTime, endTime;
const playGame=()=>{
    let randomNumber = Math.floor(Math.random()*setOfWords.length);
    msg.innerText = setOfWords[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
}
const endPlay = () =>{
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime) / 1000);

    let totalStr = typewords.value;
    let wordCount = wordCounter(totalStr);

    let speed = Math.round((wordCount / totalTime ) * 60);

    let finalMsg = "Your Typed total at " +speed+ " words per minutes ";

    finalMsg += compare(msg.innerText, totalStr);

    msg.innerText = finalMsg;
}

const compare=(str1,str2)=>{
	let word1=str1.split(" ");
	let word2=str2.split(" ");
	let count=0;
	for(i=0;i<word1.length;i++)
		{
			for(n=0;n<word2.length;n++)
			{
				if(word1[i]==word2[n])
				  {
				  	count++;
				  }
			}
		}
		let wrong=word1.length-count;
	return(count+" Out Of "+word1.length+" and total wrong words are "+wrong);
}
const wordCounter = (str) =>{
    let response = str.split(" ").length;
    console.log(response);
    return response;
}
btn.addEventListener('click', function(){
    if(this.innerText == 'Start'){
        typewords.disabled = false;
        playGame();
    }else if(this.innerText = "Done"){
        typewords.disabled = true;
        btn.innerText = "Start";
        endPlay();
    }
})