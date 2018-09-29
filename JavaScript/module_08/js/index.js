
/*
  Создайте компонент галлереи изображений следующего вида.

    <div class="image-gallery js-image-gallery">
      <div class="fullview">
        <!-- Если выбран первый элемент из preview -->
        <img src="img/fullview-1.jpeg" alt="alt text 1">
      </div>
      <!-- li будет столько, сколько объектов в массиве картинок. Эти 3 для примера -->
      <ul class="preview">
        <li><img src="img/preview-1.jpeg" data-fullview="img/fullview-1.jpeg" alt="alt text 1"></li>
        <li><img src="img/preview-2.jpeg" data-fullview="img/fullview-2.jpeg" alt="alt text 2"></li>
        <li><img src="img/preview-3.jpeg" data-fullview="img/fullview-3.jpeg" alt="alt text 3"></li>
      </ul>
    </div>

    🔔 Превью компонента: https://monosnap.com/file/5rVeRM8RYD6Wq2Nangp7E4TkroXZx2


    Реализуйте функционал:

      - image-gallery есть изначально в HTML-разметке как контейнер для компонента.

      - fullview содержит в себе увеличенную версию выбранного изображения из preview, и
        создается динамически при загрузке страницы.

      - preview это список маленьких изображений, обратите внимание на атрибут data-fullview,
        он содержит ссылку на большое изображение. preview и его элементы, также создаются
        динамически, при загрузке страницы.

      - При клике в элемент preview, необходимо подменить src тега img внутри fullview
        на url из data-атрибута выбраного элемента.

      - По умолчанию, при загрузке страницы, активным должен быть первый элемент preview.

      - Изображений может быть произвольное количество.

      - Используйте делегирование для элементов preview.

      - При клике, выбраный элемент из preview должен получать произвольный эффект выделения.

      - CSS-оформление и имена классов на свой вкус.


    🔔 Изображения маленькие и большие можно взять с сервиса https://www.pexels.com/, выбрав при скачивании
      размер. Пусть маленькие изображения для preview будут 320px по ширине, большие для fullview 1280px.
      Подберите изображения одинаковых пропорций.
*/

/*
  Массив объектов с данными для создания компонента выглядит следующим образом.
  Замените пути на соотвествующие вашим, или назовите изображения аналогично.
*/


const galleryItems = [
    { preview: 'img/photo1-320.jpeg', fullview: 'img/photo1-1280.jpeg', alt: "alt text 1" },
    { preview: 'img/photo2-320.jpeg', fullview: 'img/photo2-1280.jpeg', alt: "alt text 2" },
    { preview: 'img/photo3-320.jpeg', fullview: 'img/photo3-1280.jpeg', alt: "alt text 3" },
    { preview: 'img/photo4-320.jpeg', fullview: 'img/photo4-1280.jpeg', alt: "alt text 4" },
    { preview: 'img/photo5-320.jpeg', fullview: 'img/photo5-1280.jpeg', alt: "alt text 5" },
    { preview: 'img/photo6-320.jpeg', fullview: 'img/photo6-1280.jpeg', alt: "alt text 6" },
];

const imageGallery = document.querySelector('.js-image-gallery');

function getImage(arr) {

    let full = document.createElement('div');
    full.classList.add('fullview');

    let bigImg = document.createElement('img');
    bigImg.classList.add('big-img');
    bigImg.setAttribute('src', arr[0].fullview);
    bigImg.setAttribute('alt', arr[0].alt);

    let list = document.createElement('ul');
    list.classList.add('preview');

    imageGallery.append(full);
    full.append(bigImg);
    imageGallery.append(list);

    arr.map(el => {
        let items = document.createElement('li');
        items.classList.add('items');
        let smallImg = document.createElement('img');
        smallImg.classList.add('small-img');
        smallImg.setAttribute('src', el.preview);
        smallImg.setAttribute('data-fullview', el.fullview);
        smallImg.setAttribute('alt', el.alt);

        list.append(items);
        items.append(smallImg);
    });

    arrLi = [...document.querySelectorAll('.items')];

    function choiceImg() {
        let target = event.target;
        console.log(target);
        bigImg.setAttribute('src', event.target.dataset.fullview);

        arrLi.forEach(el => el.classList.contains('red') ? el.classList.remove('red') : el);

        event.target.parentElement.classList.add('red');
    }

    imageGallery.addEventListener('click', choiceImg);

}

getImage(galleryItems);

