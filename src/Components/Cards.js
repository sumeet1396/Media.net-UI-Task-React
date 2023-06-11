import React from "react";

const Cards = (props) => {
    const { card, type = "cards" } = props;
    
    return (
        <div className={card?.class}>
            {card?.url && type === "cards" ? <img src={card?.url} alt={card?.title}/> : null}
            <div className="card-content">
                <a href="#" title={card?.title}>
                    <h3>{card?.title}</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a>
            </div>
            {card?.url && type === "others" ? <img src={card?.url} alt={card?.title}/>: null}
        </div>
    )
}

export default Cards;