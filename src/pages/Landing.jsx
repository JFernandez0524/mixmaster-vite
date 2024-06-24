import { useLoaderData } from 'react-router-dom';
import SearchForm from '../components/SearchForm';
import CocktailList from '../components/CocktailList';
import axios from 'axios';

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const loader = async () => {
  const searchTerm = '';
  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
  return { drinks: response.data.drinks, searchTerm };
};

const Landing = () => {
  const { drinks, searchTerm } = useLoaderData();
  console.log(drinks);

  return (
    <div>
      <SearchForm />
      <CocktailList drinks={drinks} />
    </div>
  );
};

export default Landing;
