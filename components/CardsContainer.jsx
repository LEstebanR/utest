import Card from './Card.jsx'

const CardsContainer = ({data}) => {
  return (
    <div className="cards-container">
      {data.map((item, index) => {
        return (
          <Card key={index} data={item}/>
        )
      }
      )}
    </div>
  )
}

export default CardsContainer;