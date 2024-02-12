
const ShowEntry = ({ entry }) => {
  
  return entry ? (
    <>
      <h5>{entry.content}</h5>
      <p>Posted in {entry.category?.name}</p>
    </>
  ) : (
    <h1>Entry Not Found</h1>
  )
}

export default ShowEntry