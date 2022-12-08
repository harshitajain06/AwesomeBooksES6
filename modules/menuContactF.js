const sectionList = document.querySelector('.sectionList');
const newBook = document.querySelector('.newBook');
const contact = document.querySelector('.contact');
const menuContactF = () => {
  sectionList.style.display = 'none';
  newBook.style.display = 'none';
  contact.style.display = 'flex';
};

export default menuContactF;