const sectionList = document.querySelector('.sectionList');
const newBook = document.querySelector('.newBook');
const contact = document.querySelector('.contact');
const menuListF = () => {
  sectionList.style.display = 'flex';
  newBook.style.display = 'none';
  contact.style.display = 'none';
  window.location.reload();
};

export default menuListF;