import axios from 'axios';
import Search from './models/Search';
import Dog from './models/Dog';
import * as searchView from './views/searchView';
import * as dogView from './views/dogView';
import * as topDogsView from './views/topDogsView';
import { Elements, renderLoader, clearLoader } from './views/base';

/* jQuery functions */
$(document).ready(function() {
    /* Navigation buttons scroll. Using the anchors that we defined in the HTML file using the # symbol,
       we connected the buttons to the section we wanted to scroll to. This code snippet was copied from
       some other site in order to achieve that. */
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 120
                }, 1000);
                return false;
            }
        }
    });

    // Functions for adding dark nav in famous dogs section.
    $('.famous-dogs__headline--row').waypoint(function(direction) {
        if (direction == "down") {
            $('.nav-row').addClass('dark-nav');
        } else {
            $('.nav-row').removeClass('dark-nav');
        }
    }, {
        offset: '60px;'
    });

    $('.dog-app__headline--row').waypoint(function(direction) {
        if (direction == "down") {
            $('.nav-row').removeClass('dark-nav');
        } else {
            $('.nav-row').addClass('dark-nav');
        }
    }, {
        offset: '60px;'
    });



    /* Functions for top dogs cards fade in up */
    $('.top-dogs__links--row').waypoint(function(direction) {
        topDogsView.animateCards();
    }, {
        offset: '70%'
    });

    animateFadeIn('summary__features-row', 90);
    animateFadeIn('dog-evolution__timeline--row-1', 90);
    animateFadeIn('dog-evolution__timeline--row-2', 90);
    animateFadeIn('dog-evolution__timeline--row-3', 90);
    animateFadeIn('dog-evolution__timeline--row-4', 90);
    animateFadeIn('dog-evolution__img--row-1', 90);
    animateFadeIn('dog-evolution__img--row-2', 90);
    animateFadeIn('dog-evolution__img--row-3', 90);
    animateFadeIn('dog-evolution__img--row-4', 90);


    /* Functions for adopt don't shop lines fade in */
    animateAdopt(1);
    animateAdopt(2);
    animateAdopt(3);
    animateAdopt(4);
    animateAdopt(5);

    /* Functions for adopt don't shop video text and icon pulse */
    animatePulse('adopt__video--text', 70);
    animatePulse('adopt__video--icon', 80);

    /* Functions for toggle dog app button pulse */
    animatePulse('dog-app__collapse-btn', 80);
});

document.querySelector(`.top-dogs__links--card-header--family-dogs`).classList.add('top-dogs__links--card-header--family-dogs--active');
history.replaceState(null, null, ' ');

function animateFadeIn(className, offsetPerc) {
    $(`.${className}`).waypoint(function(direction) {

        $(`.${className}`).addClass('animated fadeIn');
    }, {
        offset: `${offsetPerc}%`
    });
}

function animateAdopt(num) {
    $(`.adopt__myth-${num}--col`).waypoint(function(direction) {

        $(`.adopt__myth-${num}--col`).addClass('animated fadeInLeft');
    }, {
        offset: '90%'
    });

    $(`.adopt__truth-${num}--col`).waypoint(function(direction) {

        $(`.adopt__truth-${num}--col`).addClass('animated fadeInRight');
    }, {
        offset: '60%'
    });
}

function animatePulse(className, offsetPerc) {
    $(`.${className}`).waypoint(function(direction) {
        $(`.${className}`).addClass('animated pulse');
    }, {
        offset: `${offsetPerc}%`
    });
}

/* Global state of the app.
   - Search object where we have the search query and result.
   - Current dog object. */
const state = {};

// ***** Search controller *****
const controlSearch = async() => {
    // Get query from view
    const query = searchView.getInput();

    if (query) {
        // New search object and add to state. 
        state.search = new Search(query);

        // Prepare UI for results.
        searchView.clearResults();
        searchView.clearInput();
        renderLoader(Elements.searchResultList);

        try {
            await state.search.getResults();

            // Render results in the UI.
            clearLoader();

            searchView.renderResults(state.search.result);

        } catch (err) {
            clearLoader();
            console.log('Something went wrong with the search!');
        }
    }
}
controlSearch();
/* This event listener implements the user search input. 'e.preventDefault' prevents from the whole 
page to be loaded as it is in default. */
Elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

/* This event listener is used for the pagination buttons. We use the 'closest()' method to
   indicate that we want to catch the event that happens on button even if we click on the icon
   or text inside the button. Then if the button has been clicked we extract the 'data-goto' 
   HTML attribute that we implemented before, and insert it in the 'renderResults()' function 
   as the page argument. */
Elements.searchResultPages.addEventListener('click', e => {
    const button = e.target.closest('.pages-btn');
    console.log(button.dataset.goto);
    if (button) {
        const goToPage = parseInt(button.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    }
});


// ***** Dog controller *****
const controlDog = async() => {
    // We get the hash value from the window object URL line then replace the # with nothing.
    const id = window.location.hash.replace('#', '');

    if (id) {
        // Prepare UI for changes
        renderLoader(Elements.dog);
        dogView.clearDog();

        // Highlight the selected dog if a search was conducted.
        if (state.search) searchView.highlightSelected(id);

        // Create a new Dog object and assign it to the state array.
        state.dog = new Dog(id);

        try {
            // Get the dog data and parse it.
            await state.dog.getDog();

            // Render dog.
            clearLoader();
            dogView.renderDog(state.dog);

        } catch (err) {
            console.log(err);
        }
    }
}

/* With this handy trick we can create multiple event listeners in just one line of code. we 
   just create an array with the events we want to trigger, iterate over them and add the event
   listeners + the function we want to pass on them. */
['hashchange', 'load'].forEach(event => window.addEventListener(event, controlDog));


Elements.topDogsGuard.addEventListener('click', e => {
    const type = e.target.closest('.btn');
    if (type.className === Elements.topDogsGuardClassName) {
        topDogsView.renderTopDogs(type.dataset.goto);
    }
});

Elements.topDogsFamily.addEventListener('click', e => {
    const type = e.target.closest('.btn');
    if (type.className === Elements.topDogsFamilyClassName) {
        topDogsView.renderTopDogs(type.dataset.goto);
    }
});

Elements.topDogsWork.addEventListener('click', e => {
    const type = e.target.closest('.btn');
    if (type.className === Elements.topDogsWorkClassName) {
        topDogsView.renderTopDogs(type.dataset.goto);
    }
});