import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

// const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

// const charactersCollection = new CharactersCollection("cayXb");

// const sorter = new Sorter(charactersCollection);
// sorter.sort();
// console.log(charactersCollection.data);
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(23);
linkedList.add(55);

const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();
