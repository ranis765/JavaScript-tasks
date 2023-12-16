const tabsButtons = document.querySelectorAll('.tab-button');

// Проходимся по всем кнопкам
tabsButtons.forEach(btn => {
  // вешаем на каждую кнопку обработчик события клик
  btn.addEventListener('click', () => {
    // Получаем предыдущую активную кнопку
    const prevActiveItem = document.querySelector('.tab-content.active');
    // Получаем предыдущую активную вкладку
    const prevActiveButton = document.querySelector('.tab-button.active');
    
    // Проверяем есть или нет предыдущая активная кнопка
    if (prevActiveButton) {
      //Удаляем класс _active у предыдущей кнопки если она есть
      prevActiveButton.classList.remove('active');
    }
    
    // Проверяем есть или нет предыдущая активная вкладка
    if (prevActiveItem) {
      // Удаляем класс _active у предыдущей вкладки если она есть
      prevActiveItem.classList.remove('active');
    }
    // получаем id новой активной вкладки, который мы перем из атрибута data-tab у кнопки
    const nextActiveItemId = `#${btn.getAttribute('data-for-tab')}`;
    // получаем новую активную вкладку по id
    const nextActiveItem = document.querySelector(nextActiveItemId);
    
    // добавляем класс _active кнопке на которую нажали
    btn.classList.add('active');
    // добавляем класс _active новой выбранной вкладке
    nextActiveItem.classList.add('active');
  });
})