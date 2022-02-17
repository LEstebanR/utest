import Header from '../components/Header';
import CardsContainer from '../components/CardsContainer';
import Footer from '../components/Footer';
import { gql, useQuery } from '@apollo/client';

const DATA_QUERY = gql`
  {
    characters(page:1) {
      results {
        id,
        name,
        image,
        status,,
        location{
          name,
          type
        }
      }
    }
  }
`


export default function Home() {
  const { loading, error, data } = useQuery(DATA_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <Header/>
      <CardsContainer data={data.characters.results.slice(0,5)}/>
      <Footer/>
    </div>
  )
}
