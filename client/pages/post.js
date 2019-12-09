

const index = (props) => {
  const { data } = props;

  return (
    <div>
      <h1>{data.title || ''}</h1>
      <img src={data.url}  atl="my-images" />
      <p>
        {data.content}
      </p>
    </div>
  )
}


index.getInitialProps = ({ query }) => {
  return { data: query.data }
}


export default index;