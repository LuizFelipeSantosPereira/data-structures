/*
? Definition:
*   Array is a data structure that hold a list of items, using key and value principle.
? Characteristics:
*   Fixed size - arrays store data continuously in the memory, so they can't risk to grow and destroy other apps data
*   Only hold one data type - different types take different amount of bytes
? Algorithmic complexities
* reading with index: O(1)
* inserting with index: O(n)
* deleting with index: O(n)
* updating with index: O(1)
* transversing: O(n)
! Javascript notes:
*   Since arrays in javascript are actually objects, they can hold a variable amount of indexes and data types
*/

//syntax salt
badArray = new Array(42,33,51)

goodArray = [42,33,51]
goodArray.splice(0,1)
//goodArray[0] = 24
console.log(goodArray)