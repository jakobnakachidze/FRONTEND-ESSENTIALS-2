function geefRandomGetalTerug(){                    
    let randomGetal = Math.random();                
    randomGetal = randomGetal *100 + 1;            
    randomGetal = Math.floor(randomGetal);          
    return randomGetal;
}

geefRandomGetalTerug()     