document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.tab');
  const buyNowButton = document.getElementById('buyNow');
  const closeOfferButton = document.getElementById('closeOffer');
  const menuItems = document.querySelectorAll('.menu-item');

  // Tabs logic
  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      document.querySelector('.tab.active').classList.remove('active');
      tab.classList.add('active');
      // Add logic to toggle content visibility
    });
  });

  // Buy Now button logic
  buyNowButton.addEventListener('click', function () {
    document.querySelector('.status').textContent = 'Active';
    // Add logic for purchasing process
  });

  // Close Offer button logic
  closeOfferButton.addEventListener('click', function () {
    document.querySelector('.status').textContent = 'Closed';
    // Add logic for closing offer process
  });

  // Menu items logic
  menuItems.forEach(item => {
    item.addEventListener('click', function () {
      document.querySelector('.menu-item.active').classList.remove('active');
      item.classList.add('active');
      // Add logic to navigate to the corresponding section
    });
  });
// JavaScript для встановлення кнопки активною
function setActiveTab(clickedTab) {
  // Отримати всі кнопки з класом 'tab' і видалити клас 'active'
  var tabs = document.querySelectorAll('.tab');
  tabs.forEach(function(tab) {
    tab.classList.remove('active');
  });

  // Додати клас 'active' до кнопки, яка була натиснута
  clickedTab.classList.add('active');
}

});
