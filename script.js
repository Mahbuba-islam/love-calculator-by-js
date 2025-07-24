const heartMatchBtn = document.getElementById('heart-match');
const recheackBtn = document.getElementById('recheack');
const loveCalculatorContainer = document.querySelector('.love-calculator-container');
const resultContainer = document.querySelector('.result-container');
  const resultName = document.querySelector('.result-name') 
const resultMessage = document.querySelector('.result-message')
const resultPercentage = document.querySelector('.result-percentage')
const resultPercentageBoxWrapper = document.querySelector('.result-percentage-box-wrapper')


const loveQuotesByPercentage = [
  { range: [0, 10], quote: "Our relationship is really bad, I admit. 💔" },
  { range: [11, 20], quote: "It couldn't get any worse between us. 😢" },
  { range: [21, 30], quote: "There’s basically no connection between us. 😞" },
  { range: [31, 40], quote: "It’s like I love you, but you don’t know it. 😔" },
  { range: [41, 50], quote: "I like you, but you have no idea. 😌" },
  { range: [51, 60], quote: "We’re getting closer — maybe something’s there. 😊" },
  { range: [61, 70], quote: "There’s a spark between us. ✨" },
  { range: [71, 80], quote: "We’re a sweet match with real potential. 💖" },
  { range: [81, 90], quote: "Love is blooming beautifully! 🌸" },
  { range: [91, 100], quote: "You’re a perfect match made in heaven! 💘" }
];



heartMatchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const name1 = document.getElementById('name-1').value
    const name2 = document.getElementById('name-2').value
    
    if (name1 && name2) {
        loveCalculatorContainer.style.display = 'none'; 
        resultContainer.style.display = 'block';  
        const loveScore = Math.floor(Math.random()*100)+1
       resultName.innerText = `${name1} & ${name2}`
      resultPercentage.innerText = `${loveScore} %`
      resultPercentageBoxWrapper.style.background = `conic-gradient(
  #f7178b 0% ${loveScore}%,   
  #a3056f ${loveScore}% 100%  
)`;

const expectedQuote = loveQuotesByPercentage.find(
  element => loveScore >= element.range[0] && loveScore <= element.range[1]
  
);
 resultMessage.innerText = `${expectedQuote.quote}`
  } else {
        alert('name not found');
    }
});


recheackBtn.addEventListener('click', () => {
 window.location.reload()
})