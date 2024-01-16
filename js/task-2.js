const images = [
  {
    url: 'https://cdn.27.ua/sc--media--prod/default/16/e9/82/16e98218-1842-4677-a580-138bbb614621.jpg',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://armyinform.com.ua/wp-content/uploads/2022/09/f_19230554251646029050.jpg',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://karpaty-ua.org.ua/images/obychai_tradicii/slava-ukraini.jpg',
    alt: 'Group of Horses Running',
  },
  {
    url:
      'https://www.rbc.ua/static/ckef2/img/Screenshot_34_14.png',
    alt: 'Elephant Beside on Baby Elephant',
  },
  {
    url:
      'https://fckryvbas.com/storage/2023-12/den-zsu-na-sait-1701849164iwfQU.jpg',
    alt: 'Blue Geeen and Orange Parrot',
  },
  {
    url:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Stamp_of_Ukraine_s1985.jpg/1200px-Stamp_of_Ukraine_s1985.jpg',
    alt: 'Zebras on Zebra',
  },
];


const galleryImages = document.querySelector('.gallery');

let newImages = images.map(image => {
  return `<li><img style="border-radius: 10px; box-shadow: 9px 9px yellow, -1em 0 .4em blue; width: 500px; height: 350px;" src="${image.url}" alt="${image.alt}"></li>`
}).join('\n')
galleryImages.innerHTML = newImages;



