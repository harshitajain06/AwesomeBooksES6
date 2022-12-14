const titleAuthorArray = [];
class TitleAuthor {
  remove(str) {                        // eslint-disable-line
    const stored = JSON.parse(localStorage.getItem('students'));
    stored.splice(str, 1);
    localStorage.setItem('students', JSON.stringify(stored));
  }

    submit() {            // eslint-disable-line

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
        const title_author = {               // eslint-disable-line

      Title: title,
      Author: author,
    };

    const storedTitleAuthor = JSON.parse(localStorage.getItem('students'));
    if (!storedTitleAuthor) {
      titleAuthorArray.push(title_author);
      localStorage.setItem('students', JSON.stringify(titleAuthorArray));
    } else {
      storedTitleAuthor.push(title_author);
      localStorage.setItem('students', JSON.stringify(storedTitleAuthor));
    }

    window.location.reload();
  }

  showBook() {                 // eslint-disable-line   
    const storedTitleAuthor = JSON.parse(localStorage.getItem('students'));

    const book = document.getElementById('display_card');
    if (!storedTitleAuthor || storedTitleAuthor.length === 0) {
      book.innerHTML = `
  <div>No Books Stored</div>
  `;
    } else {
      for (let i = 0; i < storedTitleAuthor.length; i += 1) {
        const temp = i;
        book.innerHTML += `
                <div id="card1" class="card">
    <p>"${storedTitleAuthor[i].Title}" by ${storedTitleAuthor[i].Author}</p>
    <button class="remove" data-id="${temp}">
    Remove
    </button>
    </div>
    `;
      }
    }
  }
}

export default TitleAuthor;