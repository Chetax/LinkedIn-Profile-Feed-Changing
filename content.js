const newSrc = 'https://picsum.photos/200/300';

const classSelectors = [
  '.ember-view',
  '.inline-block',
  '.artdeco-entity-image',
  '.profile-photo-edit__preview',
  'feed-identity-module__member-photo',
];

const updateImageSources = () => {
  classSelectors.forEach(selector => {
    if(selector==='.profile-photo-edit__preview' || selector === '.feed-identity-module__member-photo'){
      const images = document.querySelectorAll(selector);
      image.src = newSrc;
    }
    else{
    const images = document.querySelectorAll(selector);
    images.forEach(image => {
      
      const style = window.getComputedStyle(image);
      const width = parseInt(style.width, 10);
      const height = parseInt(style.height, 10);
if (width < 50 && height < 50) {
        image.src = newSrc;
      }
    });
  }
  });
  
};


document.addEventListener('DOMContentLoaded', updateImageSources);

const observer = new MutationObserver(updateImageSources);
observer.observe(document.body, { childList: true, subtree: true });
