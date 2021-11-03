export const Elements = {
    searchForm: document.querySelector('.search'),
    searchInput: document.querySelector('.dog-app__search--field'),
    searchResultList: document.querySelector('.dog-app__results--list'),
    searchResults: document.querySelector('.dog-app__results'),
    searchResultPages: document.querySelector('.dog-app__results--pages'),
    dog: document.querySelector('.dog-app__results--dog--col'),
    topDogsCards: document.querySelector('.top-dogs__cards--row'),
    topDogsLinks: document.querySelector('.top-dogs__links--row'),
    topDogsGuard: document.querySelector('.top-dogs__links--card-header--guard-dogs'),
    topDogsGuardClassName: 'btn top-dogs__links--card-header--guard-dogs',
    topDogsFamily: document.querySelector('.top-dogs__links--card-header--family-dogs'),
    topDogsFamilyClassName: 'btn top-dogs__links--card-header--family-dogs',
    topDogsWork: document.querySelector('.top-dogs__links--card-header--work-dogs'),
    topDogsWorkClassName: 'btn top-dogs__links--card-header--work-dogs',
}

export const elementStrings = {
    loader: 'spinner-border',
    loaderText: 'spinner-border-text'
};

export const renderLoader = parent => {
    const loader = `
        <div class="${elementStrings.loader}" role="status"></div>
        <h3 class="${elementStrings.loaderText}">Loading...</h3>
    `
    parent.insertAdjacentHTML('afterbegin', loader);
};

export const clearLoader = () => {
    const loader = document.querySelector(`.${elementStrings.loader}`);
    const loaderText = document.querySelector(`.${elementStrings.loaderText}`);
    if (loader) {
        loader.parentElement.removeChild(loader);
        loaderText.parentElement.removeChild(loaderText);
    }
};