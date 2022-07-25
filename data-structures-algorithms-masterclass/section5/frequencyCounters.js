// naive solution - Nested loops or O(N^2) operations with arrays/strings
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) return false;
    arr2.splice(correctIndex, 1);
  }
  return true;
}

console.log(same([1, 2, 3, 4], [1, 4, 9, 16]));

// refactored solution - Time Complexity O(N)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    // frequencyCounter1 의 key 가 frequencyCounter2 에 존재하지 않는 경우
    if (!(key ** 2 in frequencyCounter2)) return false;
    // 대응하는 key 의 존재하는 개수가 다른 경우
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
  }
  return true;
}
