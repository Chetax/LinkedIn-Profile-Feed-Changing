document.getElementById('change-images').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: () => {
          const newSrc = 'https://picsum.photos/200/300';
  
          const classSelectors = [
            '.ivm-view-attr__img--centered.EntityPhoto-circle-0.evi-image.lazy-image.ember-view',
            '.ivm-view-attr__img--centered.EntityPhoto-circle-3.update-components-actor__avatar-image.evi-image.lazy-image.ember-view',
            '.ivm-view-attr__img--centered.ivm-image-view-model__square-img.evi-image.lazy-image.ember-view',
            '.ivm-view-attr__img--centered.EntityPhoto-square-3.update-components-actor__avatar-image.evi-image.lazy-image.ember-view',
            '.ivm-view-attr__img--centered.update-components-carousel-job__image.ivm-view-attr__entity-img--company.evi-image.lazy-image.ember-view',
            '.artdeco-entity-image.artdeco-entity-image--circle-1.lazy-loaded',
            '.inline-block.relative.rounded-[50%].w-4.h-4.lazy-loaded'
          ];
  
          classSelectors.forEach(selector => {
            const images = document.querySelectorAll(selector);
            images.forEach(image => {
              image.src = newSrc;
            });
          });
        }
      });
    });
  });
  