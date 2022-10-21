import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import DataBar from "./DataBar";
import SingleHero from "./SingleHero";
import Cast from "./Cast";

import { fetchMovieData, fetchMovieCredits } from "../utils/fetch";



export default function SingleMovie() {
    try { document.getElementById(`navnavnav`).scrollIntoView({ behavior: "smooth", block: "start" })} catch (error) {}
 
    
    const { id } = useParams();
    const [movieData, setMovieData] = useState("")
    const [movieCredits, setMovieCredits] = useState("")
    const [directors, setDirectors] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect( () => {
        setLoading(true)
        fetchMovieData( id, setMovieData, setLoading);
    }, [id])

    useEffect( () => {
        fetchMovieCredits( id, setMovieCredits, setDirectors );
    }, [id])

   
    return (<>
        <SingleHero movieData={movieData} directors={directors} loading={loading} />
        <DataBar movieData={movieData} />
        <Cast {...movieCredits} />
    </>
    )
}