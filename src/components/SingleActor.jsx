import React,{useState,useEffect} from "react"
import { useParams, useNavigate } from "react-router-dom";
import { fetchActors } from "../utils/fetch";


export default function SingleActor() {
    try { document.getElementById(`navnavnav`).scrollIntoView({ behavior: "smooth", block: "start" })} catch (error) {}
 
    const { id } = useParams();
    const navigate = useNavigate();

    let [actor, setActor] = useState("")

    useEffect( () => {
        fetchActors( id, setActor );
    }, [id])
    
   

    const goToPreviousPath = () => {
        navigate(-1);
    }
   
    return (
        
        <div className="actorPage">
        <h3 className="backer" onClick={goToPreviousPath}>Go Back</h3>
            <div className="actorDiver">
                <img src={`http://image.tmdb.org/t/p/w780/${actor.profile_path}`} alt="img actor"/>
                <div>
                    <h1>{actor.name}</h1>
                    <br />
                    {actor.biography?<p>{actor.biography}</p>:<p>We don't have more info about {actor.name}....</p>}
                    <br />
                    {actor.birthday &&<p>Birthday: {actor.birthday}</p>}
                    <br/>
                    {actor.place_of_birth &&<p>Born in: {actor.place_of_birth}</p>}
                </div>
            </div>
        </div>

    )
}