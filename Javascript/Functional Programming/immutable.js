//Three famous libraries to work with immutabili
// immutable by facebook
//immer
//mori

// basic exaple

let book  = { title: 'Harry potter'};

function publish(book) {
    book.isPublished = true;
}

publish(book);
console.log(book); //{title: 'Harry potter', isPublished: true}

// install immutable library

import {Map} from 'immutable';



let book1  = Map({ title: 'Harry potter'});

function publish(book) {
    return  book1.isPublished = true;
 }

 book1 = publish(book);
console.log(book1); // not available
console.log(book1.get('title')); // 'Harry potter'
console.log(book1.toJS()); //{title: 'Harry potter', isPublished: true} 



// immer


import {produce } from 'immer'

let book2  = Map({ title: 'Harry potter'});

function publish(book) {
  return   produce(book, draftBook => {
        draftBook.isPublished = true;
    });
 }
 let updated = publish(book);