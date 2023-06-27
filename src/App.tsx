import './App.css';

import data from './data.json';

function App() {
  return (
    <div className="App">
      <div className="item-list">
        {data.map((el: any) => {
          const currency = el.currency_code;
          console.log(el);
          return el.state === 'active' ? (
            <div key={el.listing_id} className="item">
              <div className="item-image">
                <a href={el.url}>
                  <img src={el.MainImage?.url_570xN} alt="foto" />
                </a>
              </div>
              <div className="item-details">
                <p className="item-title">
                  {el.title && el.title.length > 50 ? `${el.title.substring(0, 50)} ...` : el.title}
                </p>
                <p className="item-price">
                  {currency === 'USD' ? `$${el.price}` : currency === 'EUR' ? `€${el.price}` : `${el.price}${currency}`}
                </p>
                <p
                  className={
                    el.quantity < 10
                      ? 'item-quantity level-low'
                      : el.quantity <= 20
                      ? `item-quantity level-medium`
                      : `item-quantity level-high`
                  }
                >
                  {el.quantity} left
                </p>
              </div>
            </div>
          ) : undefined;
        })}
      </div>
    </div>
  );
}

export default App;
