
let pyramid = "";
console.log("hello");
let sentence = ["This", "is", "an", "array", "of", "words", "for", "overly", "excited", "exercise", "to", "work", "on."];
let nextSentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

function addExcitement (theWordArray, character) {
    let excited = "";
    let space = " ";
    let exclamation = "!";
    for (var i = 0; i < theWordArray.length; i++) {
        excited += theWordArray[i];

        if((i+1) % 3 === 0) {
            excited += character.repeat((i+1)/3);
            
        };

        excited += space;
            console.log(excited);
    };

}
addExcitement(sentence, "*");

addExcitement(nextSentence, "?");
   
/// function using a fat arrow =>

let addNewExcitement = (newArray, newChar) => { 
    let overlyExcited = "";
    let newspace = " ";
    for (var x = 0; x < newArray.length; x++) {
        overlyExcited += newArray[x];
        overlyExcited += "!"
        overlyExcited += newspace;

        console.log(overlyExcited);
    }
};

addNewExcitement(sentence, "$");

// A function with exclamation point

// function addExcitement (theWordArray, exclamation) {
//     let excited = "";
//     let space = " ";
//     let exclamation = "!";
//     for (var i = 0; i < theWordArray.length; i++) {
//         excited += theWordArray[i];

//         if((i+1) % 3 === 0) {
//             excited += exclamation.repeat((i+1)/3);
            
//         };

//         excited += space;
//             console.log(excited);
//     };

// }



// Working code

    // Another loop 

   //["This ", "is ", "an ", "array ", "of ", "words ", "for ", "overly ", "excited ", "exercise", "to", "work", "on"];
    //console.log("Output words", words);
    //    ["This", "is", "an", "array", "of", "words", "for", "overly", "excited", "exercise"].forEach(function (i) {
//        console.log(i);
//    });

    // for (var i = 0; i < words.length; i++) {
    //     pyramid += words[i];
    //     console.log(pyramid);
    //     };




// Another way of doing this //
// function addExcitement (theWordArray) {
//     let excited = "";
//     let j = 0;
//     let space = " ";
//     let k = 0;
//     for (var i = 0; i < theWordArray.length; i++) {
//         excited += theWordArray[i];
//         j+=1;
//             if (j === 3) {
//                 excited += "!";
//                 j = 0;
//         };
//         excited += space;
//         k +=1;
//         if (k === 5) {
//             excited += "#";
//             k = 0;
//         }
//             console.log(excited);
//     };

// }
// addExcitement(sentence);