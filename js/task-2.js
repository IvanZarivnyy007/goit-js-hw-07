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


const galeryImages = document.querySelector('ul');



images.forEach(image => {
  const newImg = document.createElement('img')
  newImg.setAttribute('src', image.url)
  newImg.setAttribute('alt', image.alt)
  newImg.setAttribute('width', '500');
  newImg.setAttribute('height', '350');
  newImg.style.borderRadius = '10px';
  newImg.style.boxShadow = '9px 9px yellow, -1em 0 .4em blue';
  const newLi = document.createElement('li');
  newLi.appendChild(newImg)
  galeryImages.appendChild(newLi);

})

