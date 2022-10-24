import React, {useState} from 'react';
import colors from './Colors.jsx'
import quotes from '../quote.json'

const getRandom = () => Math.floor(Math.random() * quotes.length);

const Quote =() => {
    const [quote, setQuote] = useState(quotes[getRandom()]);
   
    const changerCards = () => {
        const random = getRandom();
         setQuote(quotes[random]);
    };

    const color = colors[Math.floor(Math.random()* 8)];
    document.body.style = `background: ${color}`;

    
      return(
        <div className="card" style={{ color: color}}>
           <div>
             <i className="fa-solid fa-quote-left card__quote-left "></i>
           </div>
          <ul>
            <li>
              <i><b>Quote: </b></i>{quote.quote}
            </li>
            <li>
              <i><b>Author:</b></i>{quote.author}
            </li>
          </ul>
          <button onClick={changerCards} > <ion-icon name="caret-forward-outline"></ion-icon></button>  
        </div>
     
    )
}

export default Quote;