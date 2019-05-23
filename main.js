
// let src = 'https://i.giphy.com/media/l1J9AS7rcsFgTYH28/giphy.webp';

// const positions = {
//   image1: {
//     top: '0',
//     left: '0',
//     src: src
//   },
//   image2: {
//     top: '300px',
//     left: '300px',
//     src: src
//   }
// }

// localStorage.setItem('flowers', JSON.stringify(positions))

const urls = [
  'https://media2.giphy.com/media/xThta458hXUetKTfvW/source.gif',
  'https://thumbs.gfycat.com/AntiqueSillyBeardedcollie-size_restricted.gif',
  'http://66.media.tumblr.com/88dbca5386d8067106151ecefb76bc3d/tumblr_molr2jZhUt1s5jjtzo1_500.gif',
  'https://i.giphy.com/media/l1J9AS7rcsFgTYH28/giphy.webp',
  'https://coolguy.website/aesthetic/assets/tulips.gif',
  'https://gifimage.net/wp-content/uploads/2017/08/transparent-gif-tumblr-26.gif',
  'https://sitejerk.com/images/gif-or-png-9.gif'
];

function randomUrl() {
  let index = Math.floor(Math.random() * urls.length);
  return urls[index];
}

function randomHeight() {
  let maxHeight = document.documentElement.clientHeight;
  let randomHeight = Math.floor(Math.random() * maxHeight) + 'px';
  return randomHeight;
}

function randomWidth() {
  let maxWidth = document.documentElement.clientWidth;
  let randomWidth = Math.floor(Math.random() * maxWidth) + 'px';
  return randomWidth;
}



function createPlant() {
  let img = document.createElement('img');
  let src = randomUrl();
  img.setAttribute('src', src);
  img.style.left = randomWidth();
  img.style.top = randomHeight();
  img.classList.add('floating-plant');
  img.addEventListener('dblclick', (e) => {
    e.target.parentNode.removeChild(e.target);
    let array = localStorage.getItem('flowers');
    array.splice(e.target.dataset.index, 1);
    localStorage.setItem('flowers', JSON.stringify(array));
  });
  let plants = JSON.parse(localStorage.getItem('flowers'));
  plants.push({
    top: img.style.top,
    left: img.style.left,
    src: src,
    index: plants.length
  });
  img.dataset.index = plants.length;
  localStorage.setItem('flowers', JSON.stringify(plants));
}

if (!localStorage.getItem('flowers')) {
  localStorage.setItem('flowers', JSON.stringify([]));
  createPlant();
}

window.onload = function() {
  let images = JSON.parse(localStorage.getItem('flowers'));
  Object.values(images).forEach(value => {
    let img = document.createElement('img');
    img.setAttribute('src', value.src);
    img.style.left = value.left;
    img.style.top = value.top;
    img.classList.add('floating-plant');
    img.dataset.index = value.index;
    img.addEventListener('dblclick', (e) => {
      e.target.parentNode.removeChild(e.target);
      let array = localStorage.getItem('flowers');
      array.splice(e.target.dataset.index, 1);
      localStorage.setItem('flowers', JSON.stringify(array));
    });
    document.body.appendChild(img);
  });
  createPlant();
  // make a new plant and store it in local storage
  // put on images object
  // setitem local storage to stringified images object
};
