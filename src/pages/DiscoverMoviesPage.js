import React, { useState } from "react"
import Movie from "../components/Movie"
import { useParams } from "react-router-dom"
import axios from "axios"

export default function DiscoverMoviesPage() {
  const route_parameters = useParams()

  const [searchText, setSearchTextWith] = useState("star wars")
  const [dataInState, setData] = useState({ status: "idle" })

  const searchApi = async () => {
    setData({
      status: "loading"
    })
    console.log("Start searching for:", searchText)

    const queryParam = encodeURIComponent(searchText)

    const dataFromApi = await axios.get(`https://omdbapi.com/?apikey=dbb9569b&s=${queryParam}`)

    setData({ status: "done", data: dataFromApi.data.Search })
    console.log(dataFromApi)
  }

  console.log("data in detail", dataInState.data && dataInState.data)
  return (
    <div>
      {2 + 1 === 4 && <h1>ja dat klopt</h1>}

      <h1>Discover some movies!</h1>
      <p>
        <input value={searchText} onChange={e => setSearchTextWith(e.target.value)} />
        <button type="button" autofocus="true" onClick={searchApi}>
          Search
        </button>
      </p>
      {dataInState.data && dataInState.data.map(element => <Movie title={element.Title} year={element.Year} poster={element.Poster} />)}
      <p>{dataInState.status}</p>
      <p>test</p>
    </div>
  )
}
