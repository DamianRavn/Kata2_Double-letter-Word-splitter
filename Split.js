function splitOnDoubleLetter(wordToSplit)
{
    const result = [];
    let start = 0;
    for(let i = 1; i < wordToSplit.length; i++)
    {
        if(wordToSplit[i-1] === wordToSplit[i])
        {
            result.push(wordToSplit.slice(start, i))
            start = i;
        }
    }
    if (result.length === 0) 
    {
        return result;    
    }

    result.push(wordToSplit.slice(start, wordToSplit.length))
    return result;
}

function splitOnDoubleLetterHtml()
{
    let word = document.getElementById("word").value;

    let result = splitOnDoubleLetter(word);

    document.getElementById("result").innerHTML = result;
}

console.log(splitOnDoubleLetter("Letter"))
console.log(splitOnDoubleLetter("Really"))
console.log(splitOnDoubleLetter("Happy"))
console.log(splitOnDoubleLetter("Shall"))
console.log(splitOnDoubleLetter("Tool"))
console.log(splitOnDoubleLetter("Mississippi"))
console.log(splitOnDoubleLetter("Easy"))