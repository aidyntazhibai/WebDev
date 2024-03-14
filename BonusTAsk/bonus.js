function showPrank() {
  // Получаем элементы контейнера и изображения
  const container = document.getElementById('treeContainer');
  const bstImage = document.getElementById('bstImage');

  // Устанавливаем путь к вашему изображению
  bstImage.src = 'ab43d719-e546-4131-8775-d6700d79ee3d.jpeg'; // Замените на ваше изображение
  bstImage.alt = 'Binary Search Tree';

  // Показываем изображение
  container.style.display = 'block';
}

// Вы можете оставить остальные функции пустыми, если они вам не нужны
function buildTree() {
  // Пустая функция, если вам не нужно строить дерево
}