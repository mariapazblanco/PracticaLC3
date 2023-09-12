import React, { useState } from 'react'
import BeerItem from '../beerItem/BeerItem';
import CountBeer from '../countBeer/CountBeer';
import BeerStyles from '../beerStyles/BeerStyles';

import "./Beers.css"
import ChangeDollar from '../changeDolar/ChangeDolar';

const Beers = () => {
    const [dollar, setDollar] = useState(500);
    const [changeDollar, setChangeDollar] = useState(false);

    const beers = [
        {
            id: 1,
            beerName: "American",
            beerStyle: "IPA",
            price: 3,
            available: true,
        },
        {
            id: 2,
            beerName: "Argenta",
            beerStyle: "IPA",
            price: 4,
            available: false,
        },
        {
            id: 3,
            beerName: "Irish",
            beerStyle: "Red",
            price: 4,
            available: true,
        },
        {
            id: 4,
            beerName: "Scotish",
            beerStyle: "Red",
            price: 3,
            available: true,
        },
        {
            id: 5,
            beerName: "DeEssoCiTratta",
            beerStyle: "APA",
            price: 3,
            available: true,
        },
        {
            id: 6,
            beerName: "Santa APA",
            beerStyle: "APA",
            price: 3,
            available: true,
        },
        {
            id: 7,
            beerName: "German",
            beerStyle: "Pilsen",
            price: 1,
            available: true,
        },
        {
            id: 8,
            beerName: "London Porter",
            beerStyle: "Porter",
            price: 2,
            available: false,
        },
        {
            id: 9,
            beerName: "Scotish ALE",
            beerStyle: "Red",
            price: 5,
            available: false,
        },
    ];

    const setDollarHandler = (dollarPriceNow) => {
        setDollar(dollarPriceNow);
    }

    const changeDollarHandler = () => {
        setChangeDollar(!changeDollar);
    }

    const beersFiltered = beers.filter((beer) => beer.available === true);

    return (
        <div>
            {changeDollar === false && <button type="button" className="btn btn-primary" onClick={changeDollarHandler}>Actualizar precio del dolar</button>}
            {changeDollar === true && <button type="button" className="btn btn-secondary" onClick={changeDollarHandler}>Esconder</button>}
            {changeDollar !== false && <ChangeDollar setDollarHandler={setDollarHandler} dollar={dollar}/>}
            <hr/>
            <h1>EJERCICIO 1</h1>
            <div className='beers'>
            {beers.map((beer) =>
                <BeerItem key={beer.id} id={beer.id} beerName={beer.beerName} beerStyle={beer.beerStyle} price={beer.price * dollar} available={beer.available} />
            )}
            </div>
            <hr />

            <h1>EJERCICIO 2</h1>
            <div className='beers'>
            {beersFiltered.map((beer) =>
                <BeerItem key={beer.id} id={beer.id} beerName={beer.beerName} beerStyle={beer.beerStyle} price={beer.price * dollar} available={beer.available} />

            )}
            </div>
            <hr />

            <h1>EJERCICIO 3</h1>
            <CountBeer beers={beers} />
            <hr />
            
            <h1>EJERCICIO 4</h1>
            <BeerStyles beers={beers}/>
            
        </div>
    )
}

export default Beers