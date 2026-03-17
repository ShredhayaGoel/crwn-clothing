import logo from './logo.svg';
import './App.css';
import './index.scss';

const categories = [
  {
    id: 1,
    tittle: 'Hats',
  },
  {
    id: 2,
    tittle: 'Jackets',
  },
  {
    id: 3,
    tittle: 'Sneakers',
  },
  {
    id: 4,
    tittle: 'Womens',
  },
  {
    id: 5,
    tittle: 'Mens',
  },
]
const App = () => {
  return (
    <div className="categories-container">
      {categories.map(({ id, tittle }) => (
        <div className='category-container'>
          <img />
          <div className='category-name'>
            <h2>{tittle}</h2>
            <p>Shop-Now</p>
          </div>
        </div>
      ))}

    </div>
  )
}

export default App;
