import { Elements } from './base';

// This function clears the dog HTML.
export const clearDog = () => {
    Elements.dog.innerHTML = '';
};

/* This function creates the dog HTML view. */
export const renderDog = (dog) => {
    const markup = `
    <figure class="dog__fig">
                <img src="${dog.imgUrl}" alt="${dog.name}" class="dog__img">
                <h1 class="dog__title">
                    <span>${dog.name}</span>
                </h1>
            </figure>
        
            <div class="row justify-content-center">
                <div class="col-md-2 col-lg-2">
                </div>

                <div class="col-md-10 col-lg-8">
            <ul class="dog__details">
                <li>
                <div class="dog__info">
                    <i class="fas fa-paw dog-icon"></i>
                    <span class="dog__info-text">&nbsp;Breed Group:&nbsp;</span>
                    <span class="dog__info-data dog__info-data--minutes">${dog.breedGroup}</span> 
                </div>
           
                <div class="dog__info">
                    <i class="fas fa-paw dog-icon"></i>
                    <span class="dog__info-text">&nbsp;Bread for:&nbsp;</span>
                    <span class="dog__info-data dog__info-data--minutes">${dog.bredFor}</span> 
                </div>
               
                <div class="dog__info">
                    <i class="fas fa-paw dog-icon"></i>
                    <span class="dog__info-text">&nbsp;Height:&nbsp;</span>
                    <span class="dog__info-data dog__info-data--people">${dog.heightImperial}',&nbsp;</span> 
                    <span class="dog__info-data dog__info-data--people">${dog.heightMetric}cm</span>   
                </div>   
                
                <div class="dog__info">
                    <i class="fas fa-paw dog-icon"></i>
                    <span class="dog__info-text">&nbsp;Weight:&nbsp;</span>
                    <span class="dog__info-data dog__info-data--people">${dog.weightImperial}lbs,&nbsp;</span> 
                    <span class="dog__info-data dog__info-data--people">${dog.weightMetric}kg</span>   
                </div>  
                
                <div class="dog__info">
                    <i class="fas fa-paw dog-icon"></i>
                    <span class="dog__info-text">&nbsp;Temperament:&nbsp;</span>
                    <span class="dog__info-data dog__info-data--people">${dog.temp}</span>  
                </div>  
               
                <div class="dog__info">
                    <i class="fas fa-paw dog-icon"></i>
                    <span class="dog__info-text">&nbsp;Life Span:&nbsp;</span>
                    <span class="dog__info-data dog__info-data--people">${dog.lifeSpan}</span> 
                </div>  
                </li>                     
            </ul>    
            </div>

            <div class="col-md-1 col-lg-2">
            </div>
            </div> 
    `;

    Elements.dog.insertAdjacentHTML('afterbegin', markup);
}