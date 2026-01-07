const shareButton = document.querySelector('.share-button');
const shareTooltip = document.querySelector('.share-tooltip');

shareButton.addEventListener('click', () => {
  shareTooltip.classList.toggle('show');
});
