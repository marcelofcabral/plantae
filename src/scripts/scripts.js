const toggleCardRotationClass = (flipCardId, flipCardFace) => {
  const flipCard = document.getElementById(flipCardId);
  flipCard.classList.toggle('flip-card-inner-rotate');

  const currentPlantContainer = flipCard.querySelector(`#${flipCardId}-${flipCardFace}.plant-container`);

  const oppositePlantContainer = flipCardFace === 'front' ? 
    flipCard.querySelector(`#${flipCardId}-back.plant-container`) : 
    flipCard.querySelector(`#${flipCardId}-front.plant-container`);

  currentPlantContainer.classList.toggle('hidden');

  if (oppositePlantContainer.classList.contains('hidden')) {
    oppositePlantContainer.classList.toggle('hidden');
  }
};

const animateSubtitle = () => {
  const subtitle = document.getElementById('subtitle');

  setTimeout(() => {
    subtitle.classList.replace('hidden', 'shown');
    console.log('ran');
  }, 1000);
};

const animateChevrons = () => {
  const firstChevron = document.getElementById('first-chevron');
  const secondChevron = document.getElementById('second-chevron');

  setTimeout(() => {
    firstChevron.classList.replace('hidden', 'shown');
    secondChevron.classList.replace('hidden', 'shown');
  }, 1500);
};

/*
Had to use Promises to time the replacement of the hidden class for each flip card.
I wasn't getting good results with the delay property of CSS animations.
*/
const animateCards = async () => {
  const documentScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

  if (documentScrollTop > 540) {
    const cards = document.getElementsByClassName('flip-card');

    for (const card of cards) {
      await new Promise((resolve) => {
        setTimeout(() => {
          card.classList.replace('hidden', 'shown');
          resolve();
        }, 210);
      });
    }

    document.removeEventListener('scroll', animateCards);
  }
};

const animate = () => {
  animateSubtitle();
  animateChevrons();
  document.addEventListener('scroll', animateCards);
}

animate();