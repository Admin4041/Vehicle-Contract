document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.tab');
  const buyNowButton = document.getElementById('buyNow');
  const closeOfferButton = document.getElementById('closeOffer');
  const menuItems = document.querySelectorAll('.menu-item');

  // Tabs 
  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      document.querySelector('.tab.active').classList.remove('active');
      tab.classList.add('active');
    });
  });

  // Buy Now
  buyNowButton.addEventListener('click', function () {
    document.querySelector('.status').textContent = 'Active';
  });

  // Close Offer
  closeOfferButton.addEventListener('click', function () {
    document.querySelector('.status').textContent = 'Closed';
  });

  // Menu 
  menuItems.forEach(item => {
    item.addEventListener('click', function () {
      document.querySelector('.menu-item.active').classList.remove('active');
      item.classList.add('active');

    });
  });
//  встановлення кнопки активною
function setActiveTab(clickedTab) {
  var tabs = document.querySelectorAll('.tab');
  tabs.forEach(function(tab) {
    tab.classList.remove('active');
  });

  clickedTab.classList.add('active');
}

});
