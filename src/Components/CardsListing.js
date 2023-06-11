import React from "react";
import Cards from "./Cards";
import {
    CARDS_LISTING_TITLE, 
    CARDS_LISTING_SUB_TITLE, 
    CARDS_LIST_WITH_IMAGE, 
    CARDS_LIST_WITHOUT_IMAGE,
    RELATED_AD_TOPICS, 
    ADS 
} from '../constants';

const CardsListing = () => {
    return (
        <section className="card-section">
            <div className="wrapper">
                <div className="section-title">
                    <h2>{CARDS_LISTING_TITLE}</h2>
                    <span>{CARDS_LISTING_SUB_TITLE}</span>
                </div>
                <div className="card-listing-container">
                    <span className="add-text">{RELATED_AD_TOPICS}</span>
                    <div className="card-grid-1">
                        {CARDS_LIST_WITH_IMAGE.map(card => <Cards key={card?.title} card={card} type={'cards'}/>)}
                    </div>
                    <div className="card-grid-2">
                        {CARDS_LIST_WITHOUT_IMAGE.map(card => <Cards key={card?.title} card={card} type={'cards'}/>)}
                    </div>
                    <span className="add-text right-text">{ADS}</span>
                </div>
            </div>
        </section>
    )
}

export default CardsListing;