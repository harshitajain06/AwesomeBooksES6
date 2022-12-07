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
  // alert('Books Added');      // eslint-disable-line
});
const removeElements = document.querySelectorAll('.remove');
removeElements.forEach((el) => {
  el.addEventListener('click', (e) => {
    // rem.submit();
    const store = e.currentTarget.dataset;
    const str = store.id;
    // console.log(str);

    show.remove(str);
            location.reload(); // eslint-disable-line
  });
});
