const newSrc = 'https://picsum.photos/200/300';

// Array of class selectors for LinkedIn profile pictures
const classSelectors = [
  // '.ivm-view-attr__img--centered.EntityPhoto-circle-0.evi-image.lazy-image.ember-view',
  // '.ivm-view-attr__img--centered.EntityPhoto-circle-3.update-components-actor__avatar-image.evi-image.lazy-image.ember-view',
  // '.ivm-view-attr__img--centered.ivm-image-view-model__square-img.evi-image.lazy-image.ember-view',
  // '.ivm-view-attr__img--centered.EntityPhoto-square-3.update-components-actor__avatar-image.evi-image.lazy-image.ember-view',
  // '.ivm-view-attr__img--centered.update-components-carousel-job__image.ivm-view-attr__entity-img--company.evi-image.lazy-image.ember-view',
  // '.artdeco-entity-image.artdeco-entity-image--circle-1.lazy-loaded',
  // '.inline-block.relative.rounded-[50%].w-4.h-4.lazy-loaded',
  // '.ivm-view-attr__img--centered.ivm-image-view-model__circle-img.evi-image.lazy-image.ember-view',
  // '.avatar.member.EntityPhoto-circle-2.evi-image.ember-view',
  // '.avatar.member.EntityPhoto-circle-1.evi-image.ember-view',
  // '.ivm-view-attr__img--centered.ivm-image-view-model__circle-img.evi-image.lazy-image.ember-view',
  //  '.EntityPhoto-circle-3.evi-image.ember-view' ,
  //  ".EntityPhoto-circle-3"
  'evi-image.lazy-image.ember-view'
]
const updateImageSources = () => {
  classSelectors.forEach(selector => {
    const images = document.querySelectorAll(selector);
    images.forEach(image => {
      image.src = newSrc;
    });
  });
};


document.addEventListener('DOMContentLoaded', updateImageSources);

// Re-run the function on mutations (useful for dynamic content)
const observer = new MutationObserver(updateImageSources);
observer.observe(document.body, { childList: true, subtree: true });
