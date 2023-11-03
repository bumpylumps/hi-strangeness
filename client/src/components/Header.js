import React from 'react'
import Nav from './Nav'



const Header = () => {

  const [data, setData] = React.useState(null);


  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <header>
      <Nav />
      <p>{ !data ? "Loading..." : data }</p>
      <hr />
    </header>
  )
}

export default Header
