const Card = ({data}) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={data.image} alt={data.name}/>
      </div>
      <div className="card-info">
        <h2>{data.name}</h2>
        <h3>Estado:</h3>
        <p>{data.status}</p>
        <h3>Localización:</h3>
        <p>{data.location.type} - {data.location.name}</p>
      </div>
    </div>

  )
}

export default Card;