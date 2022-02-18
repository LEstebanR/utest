import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';
import Link from "next/link";
import Button from '../components/Button';
import Number from '../components/Number';
import Table from '../components/Table';

const styled = () => {
  const [page, setPage] = useState(1);
  const DATA_QUERY = gql`
  {
    characters(page:${page}) {
      results {
        id,
        name,
        image,
        status,,
        location{
          name,
          type
        },
      },
      info{
        pages
      }
    }
  }
`


  const { loading, error, data } = useQuery(DATA_QUERY);
  
  if (loading) return <p>Loading...</p>;

  const nextPage = (e) => {
    e.preventDefault();
    setPage((Page) => (Page === 42 ? null : Page + 1));
  }

  const prevPage = (e) => {
    e.preventDefault();
    setPage((Page) => (Page === 1 ? (Page = 1) : Page - 1));
  }

  return (
    <div className='styled-container'>
    <Link href="/"><Button>Home</Button></Link>
    <Table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Estado</th>
          <th>Locatlización</th>
        </tr>
      </thead>
      <tbody>
        {data.characters.results.slice(0,10).map(character => (
          <tr key={character.id}>
            <td>{character.name}</td>
            <td>{character.status}</td>
            <td>{character.location.name}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    <div className='styled-pageMenu'>
      {page !== 1 ? <Button onClick={prevPage}>Anterior</Button> : null}
      <Number>{page}</Number>
      {page !== 42 ? <Button onClick={nextPage}>Siguiente</Button>: null}
    </div>
    </div>
  )
}

export default styled