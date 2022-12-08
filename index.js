import TitleAuthor from './modules/book.js';
import setTime from './modules/dateTime.js';
import menuListF from './modules/menuListF.js';
import menuAddF from './modules/menuAddF.js';
import menuContactF from './modules/menuContactF.js';

const menuList = document.querySelector('.menuList');
const menuAdd = document.querySelector('.menuAdd');
const menuContact = document.querySelector('.menuContact');
const sectionList = document.querySelector('.sectionList');
const newBook = document.querySelector('.newBook');
const contact = document.querySelector('.contact');
sectionList.style.display = 'flex';
newBook.style.display = 'none';
contact.style.display = 'none';

menuList.addEventListener('click', menuListF);

menuAdd.addEventListener('click', menuAddF);

menuContact.addEventListener('click', menuContactF);

setTime();

const show = new TitleAuthor();
show.showBook();

const submit1 = document.querySelector('#submit_button');

submit1.addEventListener('click', () => {
  show.submit();
});
const removeElements = document.querySelectorAll('.remove');
removeElements.forEach((el) => {
  el.addEventListener('click', (e) => {
    const store = e.currentTarget.dataset;
    const str = store.id;

    show.remove(str);
    window.location.reload();
  });
});
