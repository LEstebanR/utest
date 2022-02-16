const Card = ({data}) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={data.image} alt={data.name}/>
      </div>
      <div className="card-info">
        <h2>{data.name}</h2>
        <span><h3>Estado:</h3><p>{data.status}</p></span>
        <span><h3>Localización:</h3><p>{data.location.type} - {data.location.name}</p></span>
      </div>
    </div>

  )
}

export default Card;