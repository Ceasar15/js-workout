let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];


// split string into individual words
const storyWords = story.split(' ')

// log length of new array 
console.log('Original StoryWords Legnth: ' + storyWords.length);


// filter out unnecessaryWords
const betterWords = storyWords.filter(word => {
  if (!unnecessaryWords.includes(word)){
    return word;
  }
});

//  number of times words are overused
  let totalWords1 = 0
  let totalWords2 = 0
  let totalWords3 = 0

const totalWords = betterWords.forEach(word => {

  if( overusedWords[0] === word){
    totalWords1 += 1;
    betterWords.splice(word, 1)
  } 
  else if( overusedWords[1] === word ) {
    totalWords2 += 1;
  }
  else if ( overusedWords[2] === word ){
    totalWords3 += 1;
  }
});


// how many sentences in a paragraph
let sentences = 0;
betterWords.forEach(word => {
  if (word[word.length-1] === '.' || word[word.length-1] === '!'){
    sentences+=1;
  }
});

// log the remaining words
console.log('Word count: ' + betterWords.length);

// sentence count 
console.log('Sentence count: ' + sentences);

// let user know number of times they usd a word.
console.log('You used the word \'' + overusedWords[0] + '\' ' + totalWords1 + ' times');
console.log('You used the word \'' + overusedWords[1] + '\' ' + totalWords2 + ' times');
console.log('You used the word \'' + overusedWords[2] + '\' ' + totalWords3 + ' times');

// betterWords as a single string
console.log(betterWords.join(' '));



