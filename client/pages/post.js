

const index = (props) => {
  const { query } = props;
  const { result } = query;

  if(result && result.data && Array.isArray(result.data)){
    return (
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', maxWidth: 800, margin: 'auto' }}>
        {result.data.map(e =>( 
          <div key={e._id}>
            <h6>{e.title}</h6>
            <img src={e.picture} atl={e.title} width="200" height="200" />
            <p style={{ maxWidth: 180 }}>{e.description}</p>
          </div>
        ))}
      </div>
    )
  }

  if(result){
    return (
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', maxWidth: 800, margin: 'auto' }}>
        <div >
          <h6>{result.title}</h6>
          <img src={result.picture} atl={result.title} width="200" height="200" />
          <p style={{ maxWidth: 180 }}>{result.description}</p>
        </div>
      </div>
    )
  }

  // we shold handle this in view
  return (
    <div>date not found</div>
  )
  
}


index.getInitialProps = ({ query }) => {
  return { query: (query || {}) }
}


export default index;