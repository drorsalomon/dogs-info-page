import { Elements } from './base';

export const animateCards = () => {
    $('.top-dogs__card--1').addClass('animated fadeInUp');
    setTimeout(() => {
        $('.top-dogs__card--2').addClass('animated fadeInUp');
    }, 100);
    setTimeout(() => {
        $('.top-dogs__card--3').addClass('animated fadeInUp');
    }, 200);
    setTimeout(() => {
        $('.top-dogs__card--4').addClass('animated fadeInUp');
    }, 300);
    setTimeout(() => {
        $('.top-dogs__card--5').addClass('animated fadeInUp');
    }, 400);
}

export const clearTopDogs = () => {
    Elements.topDogsCards.innerHTML = '';
};

export const renderTopDogs = (type) => {
    clearTopDogs();
    let markup = '';

    if (type === 'guard') {
        markup = `
        <div class="col-10 col-sm-7 col-md-9 col-lg-2">
        <div class="card top-dogs__card--1">
            <img src="img/belgian-malinois.jpg" class="card-img-top top-dogs__card--img" alt="belgian-malinois">
            <div class="card-body">
                <h3 class="card-title top-dogs__card--title">Belgian Malinois</h3>
                <h4 class="card-text top-dogs__card--text">This breed comes from malinois in belgium and were originnaly bred for not only herding stock but also protecting it. They are often integrated in elite army units as guard, attack or bomb sniffing dogs.</h4>
                <div class="card-footer top-dogs__card--footer">
                    <h4><a href="https://en.wikipedia.org/wiki/Malinois_dog" target="_blank">For more <br> click here</a></h4>
                </div>
            </div>
        </div>
    </div>
    <div class="col-10 col-sm-7 col-md-9 col-lg-2">
    <div class="card top-dogs__card--2">
        <img src="img/german-shepherd.jpg" class="card-img-top top-dogs__card--img" alt="german-shepherd">
        <div class="card-body">
            <h3 class="card-title top-dogs__card--title">German Shepherd Dog</h3>
            <h4 class="card-text top-dogs__card--text">Developed in 19th century Germany, this breed since became one of the most popular breeds in the world. Duo to their high intelligence they are involved in army and rescue missions.</h4>
            <div class="card-footer top-dogs__card--footer">
                <h4><a href="https://en.wikipedia.org/wiki/German_Shepherd" target="_blank">For more info <br> click here</a></h4>
            </div>
        </div>
    </div>
    </div>
    <div class="col-10 col-sm-7 col-md-9 col-lg-2">
        <div class="card top-dogs__card--3">
            <img src="img/cane-corso.jpg" class="card-img-top top-dogs__card--img" alt="cane-corso">
            <div class="card-body">
                <h3 class="card-title top-dogs__card--title">Cane Corso</h3>
                <h4 class="card-text top-dogs__card--text">The Cane Corso originally comes from Italy, and were bred for herding cattle, guarding flocks of sheep and hunting wild boars. They are overly reactive to strangers but family devoted.</h4>
                <div class="card-footer top-dogs__card--footer">
                    <h4><a href="https://en.wikipedia.org/wiki/Cane_Corso" target="_blank">For more info <br> click here</a></h4>
                </div>
            </div>
        </div>
    </div>
    <div class="col-10 col-sm-7 col-md-9 col-lg-2">
        <div class="card top-dogs__card--4">
            <img src="img/neapolitan-mastiff.jpg" class="card-img-top top-dogs__card--img" alt="Neapolitan Mastiff">
            <div class="card-body">
                <h3 class="card-title top-dogs__card--title">Neapolitan Mastiff</h3>
                <h4 class="card-text top-dogs__card--text">Originally from Italy, this breed has an imposing attitude fitting his impressive stature. They are loyal and vigilant in their duty of guarding, and may ward off any intruder.</h4>
                <div class="card-footer top-dogs__card--footer">
                    <h4><a href="https://en.wikipedia.org/wiki/Neapolitan_Mastiff" target="_blank">For more info <br> click here</a></h4>
                </div>
            </div>
        </div>
    </div>
    <div class="col-10 col-sm-7 col-md-9 col-lg-2">
    <div class="card top-dogs__card--5">
        <img src="img/doberman-pinscher.jpg" class="card-img-top top-dogs__card--img" alt="doberman-pinscher">
        <div class="card-body">
            <h3 class="card-title top-dogs__card--title">Doberman Pinscher</h3>
            <h4 class="card-text top-dogs__card--text">The doberman breed was developed for two purposes: protection and companionship. They are extremely loyal to their owners, and are often integrated in elite police units around the world.</h4>
            <div class="card-footer top-dogs__card--footer">
                <h4><a href="https://en.wikipedia.org/wiki/Dobermann" target="_blank">For more info <br> click here</a></h4>
            </div>
        </div>
    </div>
</div>
    `
        document.querySelector(`.top-dogs__links--card-header--family-dogs`).classList.remove('top-dogs__links--card-header--family-dogs--active');
        document.querySelector(`.top-dogs__links--card-header--work-dogs`).classList.remove('top-dogs__links--card-header--work-dogs--active');
        document.querySelector(`.top-dogs__links--card-header--guard-dogs`).classList.add('top-dogs__links--card-header--guard-dogs--active');
    } else if (type === 'family') {
        markup = `
        <div class="col-10 col-sm-7 col-md-9 col-lg-2">
                    <div class="card top-dogs__card--1">
                        <img src="img/labrador-retriever.jpg" class="card-img-top top-dogs__card--img" alt="labrador-retriever">
                        <div class="card-body">
                            <h3 class="card-title top-dogs__card--title">Labrador Retriever</h3>
                            <h4 class="card-text top-dogs__card--text">The labrador is the most popular dog breed in the united states. They are extremely friendly, playful and suitable for families with small children. High intelligence makes them very trainable. </h4>
                            <div class="card-footer top-dogs__card--footer">
                                <h4><a href="https://en.wikipedia.org/wiki/Labrador_Retriever" target="_blank">For more info <br> click here</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-10 col-sm-7 col-md-9 col-lg-2">
                    <div class="card top-dogs__card--2">
                        <img src="img/bulldog.jpg" class="card-img-top top-dogs__card--img" alt="bulldog">
                        <div class="card-body">
                            <h3 class="card-title top-dogs__card--title">bulldog</h3>
                            <h4 class="card-text top-dogs__card--text">The bulldog's distinct features makes him one of the most recognizable breeds out there. Although they are not known for their high energy, Their small size and calmness could be perfect for a family.</h4>
                            <div class="card-footer top-dogs__card--footer">
                                <h4><a href="https://en.wikipedia.org/wiki/Bulldog" target="_blank">For more info <br> click here</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-10 col-sm-7 col-md-9 col-lg-2">
                    <div class="card top-dogs__card--3">
                        <img src="img/golden-retriever.jpg" class="card-img-top top-dogs__card--img" alt="golden-retriever">
                        <div class="card-body">
                            <h3 class="card-title top-dogs__card--title">Golden Retriever</h3>
                            <h4 class="card-text top-dogs__card--text">Golden retrievers are one of the most intelligent and versatile breeds in the world. Originally they were bred for hunting expeditions, but now days they are most known for their loyal companionship.</h4>
                            <div class="card-footer top-dogs__card--footer">
                                <h4><a href="https://en.wikipedia.org/wiki/Golden_Retriever" target="_blank">For more info <br> click here</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-10 col-sm-7 col-md-9 col-lg-2">
                    <div class="card top-dogs__card--4">
                        <img src="img/beagle.jpg" class="card-img-top top-dogs__card--img" alt="beagle">
                        <div class="card-body">
                            <h3 class="card-title top-dogs__card--title">Beagle</h3>
                            <h4 class="card-text top-dogs__card--text">Beagles are incredibly energetic and could be the perfect fit for families with small children. After spending their daily energy, their high intelligence makes them adaptable and very trainable.</h4>
                            <div class="card-footer top-dogs__card--footer">
                                <h4><a href="https://en.wikipedia.org/wiki/Beagle" target="_blank">For more info <br> click here</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-10 col-sm-7 col-md-9 col-lg-2">
                    <div class="card top-dogs__card--5">
                        <img src="img/Irish-setter.jpg" class="card-img-top top-dogs__card--img" alt="Irish-setter">
                        <div class="card-body">
                            <h3 class="card-title top-dogs__card--title">Irish Setter</h3>
                            <h4 class="card-text top-dogs__card--text">This unique looking breed first became popular back in the 18th century. They are best suited for energetic families who love the outdoors, and could be perfect companions for camping or hiking.</h4>
                            <div class="card-footer top-dogs__card--footer">
                                <h4><a href="https://en.wikipedia.org/wiki/Irish_Setter" target="_blank">For more info <br> click here</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
        `
        document.querySelector(`.top-dogs__links--card-header--guard-dogs`).classList.remove('top-dogs__links--card-header--guard-dogs--active');
        document.querySelector(`.top-dogs__links--card-header--work-dogs`).classList.remove('top-dogs__links--card-header--work-dogs--active');
        document.querySelector(`.top-dogs__links--card-header--family-dogs`).classList.add('top-dogs__links--card-header--family-dogs--active');
    } else if (type === 'work') {
        markup = `
        <div class="col-10 col-sm-7 col-md-9 col-lg-2">
                    <div class="card top-dogs__card--1">
                        <img src="img/alaskan-malamute.jpg" class="card-img-top top-dogs__card--img" alt="alaskan-malamute">
                        <div class="card-body">
                            <h3 class="card-title top-dogs__card--title">Alaskan Malamute</h3>
                            <h4 class="card-text top-dogs__card--text">One of the oldest sled breeds of the arctic, they were bred to work in packs and haul heavy loads over great distances. They are loyal and always enjoy play time with the family.</h4>
                            <div class="card-footer top-dogs__card--footer">
                                <h4><a href="https://en.wikipedia.org/wiki/Alaskan_Malamute" target="_blank">For more info <br> click here</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-10 col-sm-7 col-md-9 col-lg-2">
                    <div class="card top-dogs__card--2">
                        <img src="img/bernese.jpg" class="card-img-top top-dogs__card--img" alt="bernese">
                        <div class="card-body">
                            <h3 class="card-title top-dogs__card--title">Bernese Mountain Dog</h3>
                            <h4 class="card-text top-dogs__card--text">The Bernese Mountain Dog was built for hard work. They were bred to drive cattle, guard farmyards from predators, and were revered for their ability to pull very heavy loads.</h4>
                            <div class="card-footer top-dogs__card--footer">
                                <h4><a href="https://en.wikipedia.org/wiki/Bernese_Mountain_Dog" target="_blank">For more info <br> &nbsp;click here</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-10 col-sm-7 col-md-9 col-lg-2">
                    <div class="card top-dogs__card--3">
                        <img src="img/boxer.jpg" class="card-img-top top-dogs__card--img" alt="boxer">
                        <div class="card-body">
                            <h3 class="card-title top-dogs__card--title">Boxer</h3>
                            <h4 class="card-text top-dogs__card--text">Boxers are affectionate by nature and have great work ethic. they are known to be versatile, holding jobs as cattle dogs, war dogs, police dogs, guard dogs, and even guide dogs for the blind.</h4>
                            <div class="card-footer top-dogs__card--footer">
                                <h4><a href="https://en.wikipedia.org/wiki/Boxer_(dog)" target="_blank">For more info <br> click here</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-10 col-sm-7 col-md-9 col-lg-2">
                    <div class="card top-dogs__card--4">
                        <img src="img/dogo-argentino.jpg" class="card-img-top top-dogs__card--img" alt="dogo-argentino">
                        <div class="card-body">
                            <h3 class="card-title top-dogs__card--title">Dogo Argentino</h3>
                            <h4 class="card-text top-dogs__card--text">The Dogo Argentino is a pack-hunting dog, bred for the pursuit of big-game like wild boar and puma, and possesses the strength, smarts and quick responsiveness of a top level olympic athlete.</h4>
                            <div class="card-footer top-dogs__card--footer">
                                <h4><a href="https://en.wikipedia.org/wiki/Dogo_Argentino" target="_blank">For more info <br> click here</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-10 col-sm-7 col-md-9 col-lg-2">
                    <div class="card top-dogs__card--5">
                        <img src="img/saint-bernard.jpg" class="card-img-top top-dogs__card--img" alt="saint-bernard">
                        <div class="card-body">
                            <h3 class="card-title top-dogs__card--title">Saint Bernard</h3>
                            <h4 class="card-text top-dogs__card--text">As early as 1050, hospice monks utilized these genial giants to locate and rescue travelers buried by drifts and avalanches in snowy passes in the Alps. They can be used to guard, herd and draft.</h4>
                            <div class="card-footer top-dogs__card--footer">
                                <h4><a href="https://en.wikipedia.org/wiki/St._Bernard_(dog)" target="_blank">For more info <br> click here</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
        `
        document.querySelector(`.top-dogs__links--card-header--guard-dogs`).classList.remove('top-dogs__links--card-header--guard-dogs--active');
        document.querySelector(`.top-dogs__links--card-header--family-dogs`).classList.remove('top-dogs__links--card-header--family-dogs--active');
        document.querySelector(`.top-dogs__links--card-header--work-dogs`).classList.add('top-dogs__links--card-header--work-dogs--active');
    }

    Elements.topDogsCards.insertAdjacentHTML('afterbegin', markup);
    animateCards();
}