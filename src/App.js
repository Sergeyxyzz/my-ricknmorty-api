import axios from 'axios';
import { useEffect, useState } from 'react';
import Characters from './Characters';
import Pagination from './Pagination';

function App() {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState('https://rickandmortyapi.com/api/character');
  const [allPages, setAllPages] = useState();
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios.get(currentPage).then((res) => setCharacters(res.data.results));
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then((res) => setAllPages(res.data.info.pages));
    
      setIsLoading(false)
  }, [characters]);

  const createPages = () => {
    const buttons = [];
    for (let i = 1; i <= allPages; i++) {
      buttons.push(
        <div key={i} style={{ display: 'inline', justifyContent: 'center'}}>
          <button
            style={{ cursor: 'pointer', width: '50px', margin: '2px' }}
            onClick={() => setCurrentPage(`https://rickandmortyapi.com/api/character/?page=${i}`)}
          >
            {i}
          </button>
        </div>,
      );
    }
    return buttons;
  };

  if (isLoading) return <h1 style={{textAlign: 'center', fontSize: '5rem'}}>LOADING...</h1>

  return (
    <div className="App">
      <Pagination createPages={createPages} />
      <Characters characters={characters} />
    </div>
  );
}

export default App;
