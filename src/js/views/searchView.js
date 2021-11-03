import { Elements } from './base';

/* This function clears the results list. */
export const clearResults = () => {
    Elements.searchResultList.innerHTML = '';
    Elements.searchResultPages.innerHTML = '';
};

/* This function clears the search user input field. */
export const clearInput = () => {
    Elements.searchInput.value = '';
};

/* This function is used to highlight the selected dog from the search list. We select by
   the href that equals the selected id and then activate the CSS class on it.  */
export const highlightSelected = (id) => {
    console.log(id);
    const resultArr = Array.from(document.querySelectorAll('.results__link'));
    resultArr.forEach(el => {
        el.classList.remove('results__link--active');
    });

    document.querySelector(`.results__link[href="#${id}"]`).classList.add('results__link--active');
};

export const limitDogTitle = (title, limit = 10) => {

    title = title.split(' ');
    if (title[0].length > limit) {
        title[0] = title[0].replace(title[0].substring(9, 19), '...');
        return title[0];
    }
    title = title.join(' ');
    return title;
}


/* With this function we want to get the user search input and return it. */
export const getInput = () => Elements.searchInput.value;

/* In this function we render each dog to the UI HTML. */
const renderDog = (dog) => {
    const markup = `
    
    <li>
    <a class="results__link" href="#${dog[0].breeds[0].id}">     
        <figure class="results__fig">
            <img src="${dog[0].url}" alt="${dog[0].breeds[0].name}">
        </figure>   
        <div class="results__data">
                <h4 class="results__name">${limitDogTitle(dog[0].breeds[0].name)}</h4>
         </div>
        </a>
    </li>
    `;
    Elements.searchResultList.insertAdjacentHTML('beforeend', markup);
}

/* In this function we create the pagination buttons. In the page number ternary we specified
   that if the page type is 'prev' we want the number to be the page number - 1, and if the 
   page type is something else (like next), we want the number to be the page number + 1. 
   the 'data-goto' HTML attributes will be used in the event listener to imply to which page 
   we should go to next. */
const createButton = (page, type) => `
    <button class="btn pages-btn results__btn--${type}" data-goto="${type === 'prev' ? page - 1 : page + 1}">
    <h4>Page ${type === 'prev' ? page - 1 : page + 1}</h4>
      <i class="fas fa-caret-${type === 'prev' ? 'left' : 'right'} icon-sm"></i>
    </button>
`;

/* in this function we render the pagination buttons. So we need to know on which page were on,
   the number of total results and how many results we display per page. We calculate how many 
   pages there are in total by dividing the total results with how many results we have per page. 
   The 'Math.ceil()' function rounds the number up to the ceiling value. 
   If the page we are on is 1 (meaning we are on the first page), and the number of pages is greater 
   (meaning there is more than 1 page to display in total) than 1 we want only to display the next 
   page button. If the page we are on is less than the total pages value we want to display the 
   next and previous page buttons. If the page we are on equals the number of pages (meaning we 
   are on the last page) we want to display only the previous page button. */
const renderButtons = (page, numResults, resultsPerPage) => {
    const pages = Math.ceil(numResults / resultsPerPage);
    let button;
    if (page === 1 && pages === 1) {
        button = createButton(page, 'next');
        document.querySelector(`.dog-app__results--pages`).classList.remove('dog-app__results--pages--two');
        document.querySelector(`.dog-app__results--pages`).classList.remove('dog-app__results--pages--one');
        document.querySelector(`.dog-app__results--pages`).classList.add('dog-app__results--pages--none');
    } else if (page === 1 && pages > 1) {
        button = createButton(page, 'next');
        document.querySelector(`.dog-app__results--pages`).classList.remove('dog-app__results--pages--none');
        document.querySelector(`.dog-app__results--pages`).classList.remove('dog-app__results--pages--two');
        document.querySelector(`.dog-app__results--pages`).classList.add('dog-app__results--pages--one');
    } else if (page < pages) {
        button = `${createButton(page, 'prev')}
                  ${createButton(page, 'next')}`
        document.querySelector(`.dog-app__results--pages`).classList.remove('dog-app__results--pages--none');
        document.querySelector(`.dog-app__results--pages`).classList.remove('dog-app__results--pages--one');
        document.querySelector(`.dog-app__results--pages`).classList.add('dog-app__results--pages--two');
    } else if (page === pages && pages > 1) {
        button = createButton(page, 'prev');
        document.querySelector(`.dog-app__results--pages`).classList.remove('dog-app__results--pages--none');
        document.querySelector(`.dog-app__results--pages`).classList.remove('dog-app__results--pages--two');
        document.querySelector(`.dog-app__results--pages`).classList.add('dog-app__results--pages--one');
    }

    Elements.searchResultPages.insertAdjacentHTML('afterbegin', button);
};

/* This function iterates over the result array and implements the 'renderDog()' function on them.
   We set a start and end variables for pagination and add them to the 'slice()' method so we can display
   10 results per page. After that we render the pagination buttons to be displayed. */
export const renderResults = (dogs, page = 1, resultsPerPage = 10) => {
    const start = (page - 1) * resultsPerPage;
    const end = page * resultsPerPage;
    dogs.slice(start, end).forEach(renderDog);
    renderButtons(page, dogs.length, resultsPerPage);
};