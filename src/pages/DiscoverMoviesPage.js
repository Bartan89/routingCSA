import React, { useState } from "react"
import Movie from "../components/Movie"
import { useParams, useHistory } from "react-router-dom"
import Axios from "axios"

export default function DiscoverMoviesPage() {
  const history = useHistory()

  const route_parameters = useParams()

  const [searchText, setSearchTextWith] = useState(route_parameters.imdb_id)
  const [dataInState, setData] = useState([{ status: "🥱 Idle" }])

  const searchApi = async () => {
    setData({
      status: "loading..."
    })
    console.log("Start searching for:", searchText)

    const queryParam = encodeURIComponent(searchText)

    const dataFromApi = await Axios.get(`https://omdbapi.com/?apikey=dbb9569b&s=${queryParam}`)

    setData({ status: "done", data: dataFromApi.data.Search })
    console.log(dataFromApi)
  }

  const [flowControl, setFlowControl] = useState("")

  function search() {
    if (searchText === undefined || searchText === "") {
      setFlowControl("Can't leave this box empty")
    } else {
      console.log("what are you", searchText)
      history.push(`/discover/${searchText}`)
      console.log(history)
      searchApi()
      setFlowControl("")
    }
  }

  console.log("data in detail", dataInState.data && dataInState.data)
  return (
    <div>
      <h1>Discover some movies!</h1>
      <p>
        <input value={searchText} onChange={e => setSearchTextWith(e.target.value)} />
        <button type="button" autofocus="true" onClick={search}>
          Search
        </button>
        <p style={{ backgroundColor: "red", color: "white" }}>{flowControl}</p>
        <p>{dataInState.status}</p>
      </p>
      {dataInState.data && dataInState.data.map(element => <Movie title={element.Title} year={element.Year} poster={element.Poster} />)}
    </div>
  )
}
