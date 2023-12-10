import React from 'react'
import { useState } from 'react'
function Container() {
    const myStyle = {
        backgroundColor: '#EAE7FA'
    }
    let [content, setcontent] = useState('');
    
    let [count, setcount] = useState(0);
    let [countLetters, setcountLetters] = useState(0);
    let [countWords, setcountWords ] = useState(0);
    let [countSyllable, setcountSyllable ] = useState(0);
   
    let handleOnchange = (event) => {
       
        setcontent(event.target.value);
        console.log(content);
     //   document.write(content);
    }
    const lower = () => {
        const text = content.toLowerCase();
        setcontent(text)

    }
    const upper = () => {
        const text = content.toUpperCase();
        setcontent(text);

    }
    const NOlines = () => {
       
       
        
       
        const lines = content.split('\n');

        // Remove empty lines from the array
        const nonEmptyLines = lines.filter(line => line.trim() !== '');
    
        // Count the number of non-empty lines
        const lineCount = nonEmptyLines.length;

        const sentences = content.split(/[.!?]+/);

    // Remove empty sentences from the array
    const nonEmptySentences = sentences.filter(sentence => sentence.trim() !== '');

    // Count the number of non-empty sentences
    const sentenceCount = nonEmptySentences.length;

    
        setcount(sentenceCount);
        
    }
    const NOletters = () => {
      
       // const text = content;
        for (let i = 0; i < content.length; i++){
            if (content[i] === ' ') {
                continue;
            }
            else {
                countLetters++;
            }
        }
        setcountLetters(countLetters);
       
        
    }
    const NOwords = () => {
      
        // const text = content;
        

         const trimmedParagraph = content.trim();

         // Split the paragraph into an array of words
         const words = trimmedParagraph.split(/\s+/);
     
         // Count the number of words
         const wordCount = words.length;
     
        setcountWords(wordCount);
        
         
    }
    const Dark = () => {
        document.body.style.backgroundColor = '#281C2D';
        document.body.style.color = 'white';
    }
    const light = () => {
        document.body.style.backgroundColor = '#EFDCF9';
        document.body.style.color = 'black';
    }
    function countSyllables(word) {
        // Simple syllable count heuristic
        word = word.toLowerCase().replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
        word = word.replace(/^y/, '');
        const syllables = word.match(/[aeiouy]{1,2}/g);
        return syllables ? syllables.length : 0;
    }
    
    const NOSyllable = () => {
        const words = content.trim().split(/\s+/);
    
        // Count the number of syllables for each word
        const syllableCount = words.reduce((total, word) => total + countSyllables(word), 0);
        setcountSyllable(syllableCount);
    
    }

  
        

    return (
       
        <>
             <div className='container' >
      
      <div class="mb-3 m-4" >
<label for="exampleFormControlTextarea1" class="form-label" id='heading'><b>Enter Text Here</b></label>
<textarea class="form-control" id="exampleFormControlTextarea1" rows="10" style={myStyle} onChange={handleOnchange} value={content}></textarea>
      </div>
    
            
      <button type="button" class="btn btn-secondary m-4" onClick={lower}>LowerCase</button>
          <button type="button" class="btn btn-secondary m-4" onClick={upper}>UpperCase</button>
                <button type="button" class="btn btn-secondary m-4" onClick={NOwords}>NumberOfWords</button>
                <button type="button" class="btn btn-secondary m-4" onClick={NOletters} >NumberOfLetters</button>
                <button type="button" class="btn btn-secondary m-4" onClick={NOlines} >NumberOfLines</button>
                <button type="button" class="btn btn-secondary m-4" onClick={NOSyllable} >NumberOfSyllable</button>
                <button type="button" class="btn btn-secondary m-4" onClick={Dark} >DarkMode</button>
                <button type="button" class="btn btn-secondary m-4" onClick={light} >LightMode</button>
  </div>
            <div className='container'>
                <h5 id='nolines'>Number of sentences={count}</h5>
                <h5 id='nowords'>Number of words={countWords}</h5>
                <h5 id='nolines'>Number of letters={countLetters}</h5>
                <h5 id='nosyllables'>Number of Syllables={countSyllable}</h5>
 </div>
      </>
   
  )
}

export default Container
