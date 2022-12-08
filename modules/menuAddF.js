const sectionList = document.querySelector('.sectionList');
const newBook = document.querySelector('.newBook');
const contact = document.querySelector('.contact');

const menuAddF = () => {
  sectionList.style.display = 'none';
  newBook.style.display = 'flex';
  contact.style.display = 'none';
};

export default menuAddF;