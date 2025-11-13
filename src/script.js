import goblinImageSrc from '../pic/goblin.png';


const size = 4; // количество строк
const gameField = document.getElementById('gameField');
//const goblinImageSrc = 'https://github.com/netology-code/ahj-homeworks/raw/AHJ-50/dom/pic/goblin.png';
const cells = []; // массив ячеек
let goblinCell = null; // текущая ячейка с гоблином

// Создаем ячейки поля
for (let r = 0; r < size*size; r++) {
  const cell = document.createElement('div');
  cell.className = 'cell';
  gameField.append(cell);
  cells.push(cell);
  
}

// Помещаем гоблина в случайную ячейку
goblinCell = cells[Math.floor(Math.random() * cells.length)];
const goblin = document.createElement('img');
goblin.src = goblinImageSrc;
goblin.alt = 'Гоблин';
goblin.style.width = '100px';
goblin.style.height = '100px';
goblinCell.append(goblin);

// Функция для выбора новой случайной ячейки, отличной от текущей
function getRandomDifferentCell(currentCell) {
  let idx;
  do {
    idx = Math.floor(Math.random() * cells.length);
  } while (cells[idx] === currentCell);
  return cells[idx];
}

// Перемещаем гоблина в другую ячейку
setInterval(() => {
  goblin.remove();
  goblinCell = getRandomDifferentCell(goblinCell);
  goblinCell.append(goblin);
}, 1000);