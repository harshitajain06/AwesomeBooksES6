const sectionList = document.querySelector('.sectionList');
const newBook = document.querySelector('.newBook');
const contact = document.querySelector('.contact');
const menuListF = () => {
  sectionList.style.display = 'flex';
  newBook.style.display = 'none';
  contact.style.display = 'none';
    location.reload();         // eslint-disable-line
};

export default menuListF;