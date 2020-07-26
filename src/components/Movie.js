import React from "react"

export default function Movie({ title, year, poster }) {
  return (
    <>
      <h4>{title}</h4>
      <h4>{year}</h4>
      <img src={poster} alt="" />
    </>
  )
}
