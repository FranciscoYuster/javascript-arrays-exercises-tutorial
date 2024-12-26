function lyricsGenerator (arrayNotas){
    let finalString = ""
    let countOne = 0

        for (let i = 0; i < arrayNotas.length;i++) {
            if(arrayNotas[i] == 0){
                finalString += "Boom "
                countOne = 0
            } else if (arrayNotas[i] === 1){
                finalString += "Drop the bass "
                countOne += 1

                if(countOne === 3) {
                    finalString += "!!!Break the bass!!! "
                }
            }
        }
        return finalString;
}


// Don't change anything below this line
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))
