

  // 1. Модифицируйте готовую функцию createPostCard() из задания
  //   номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так,
  //   чтобы она принимала объект post с данными для заполнения полей
  //   в карточке.

  let createPostCard = function (poster) {
      let main = document.querySelector('#main');
//-----------------------------------------------------------------------
      let post = document.createElement('div');
      let postImage = document.createElement('img');
      let postTitle = document.createElement('h2');
      let postText = document.createElement('p');
      let button = document.createElement('a');
//--------------------------------------------------------------------
//     post.setAttribute('id', 'post');
      postImage.setAttribute('src', poster.img);
      postImage.setAttribute('alt', 'post image');
      button.setAttribute('href', poster.link);
//------------------------------------------------------------------
      post.classList.add('post');
      postImage.classList.add('post__image');
      postTitle.classList.add('post__title');
      postText.classList.add('post__text');
      button.classList.add('button');
//----------------------------------------------------------------------
      postTitle.textContent = poster.title;
      postText.textContent = poster.text;
      button.textContent = 'Read more';

      //------------------------------------------------------------
      main.append(post);
      post.append(postImage);
      post.append(postTitle);
      post.append(postText);
      post.append(button);

  };

  // 2. Создайте функцию createCards(posts), которая принимает массив
  //   объектов-карточек, вызывает функцию createPostCard(post) столько
  //   раз, сколько объектов в массиве, сохраняя общий результат и возвращает
  //   массив DOM-элементов всех постов.


  // 3. Повесьте все посты в какой-то уже существующий DOM-узел.

  const posts = [
    {
        img: "https://placeimg.com/400/150/arch",
        title: "Post title 1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        link: 'link-1.com'
    },
    {
        img: "https://placeimg.com/400/150/nature",
        title: "Post title 2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        link: 'link-2.com'
    },
    {
        img: "https://placeimg.com/400/150/arch",
        title: "Post title 3",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        link: 'link-3.com'
    }
];


  let createCards = function (posts) {
      for (let elem of posts) {
          createPostCard(elem);
      }
      elem.getAttribute();
  };

  createCards(posts);

