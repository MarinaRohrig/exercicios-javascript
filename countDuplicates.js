//Recebe um array de inteiros e retorna o inteiro que mais se repete

function countDuplicates(array) {
  const map = Object.create(null);
  for (const str of array) {
    if (map[str]) {
      map[str] += 1;
    } else {
      map[str] = 1;
    }
  }
  return map;
    
}
let array = ["2", "3", "2", "5", "8", "2", "3"];

console.table(countDuplicates(array));