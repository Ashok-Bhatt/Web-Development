
const words = [
    "ocean", "mountain", "forest", "river", "desert", "valley", "canyon", "cliff", "beach", "island", "lake", "volcano", "waterfall", "glacier", "hill", "plateau", "reef", "cave", "bay", "fjord", "meadow", "prairie", "swamp", "jungle", "tundra", "savanna", "dune", "gorge", "delta", "lagoon", "marsh", "moor", "steppe", "taiga", "thicket", "woodland", "arctic", "crater", "creek", "dam", "grove", "mesa", "peak", "ridge", "springs", "summit", "wetland", "tributary", "gulf", "archipelago"
];


const searchBar = document.querySelector('#search-bar');
const result = document.querySelector('#result');

const isMatched = (word, text) =>{

    if (text.length > word.length){
        return false;
    }

    for (let i = 0; i < text.length; i++){
        if (text[i] != word[i]){
            return false;
        }
    }

    return true;
}

const showResults = (text)=> {
    
    let matches = [];
    let displayText = "";

    for (let word of words){
        if (isMatched(word, text)){
            matches.push(word);
        }
    }

    for (let match of matches){
        if (displayText !== ""){
            displayText = displayText + ", ";
        }
        displayText = displayText + match;
    }

    result.textContent = displayText;
}

searchBar.addEventListener('keypress', (e)=>{
    let key = e.keyCode;
    setTimeout(()=>{
        showResults(searchBar.value);
    }, 0);
});