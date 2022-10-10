

function findNeedle(haystack) {
    let needlePosition
    for(let i = 0; i < haystack.length; i++){
        if(haystack[i]=== "needle"){
            needlePosition = i
        }
    }
    return `found the needle at position ${needlePosition}`
}

console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]))