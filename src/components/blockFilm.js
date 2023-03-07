import react from "react"
import { Link } from "react-router-dom";
import './blockFilm.css';

const BlockFilm = (props) => {


return (
        <>
        {props.data.length == 0 && <h1>Loading...</h1>}

        {props.data.length > 0 && 
             props.data.map((el) => (
                el.map((item) => (
                    <div className="card" key={item.episode_id}>
                        <div className="card-header" >
                            <h1>{item.title}</h1>
                            <h3>Year: {item.release_date}</h3>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{item.opening_crawl}</h5>
                            <h2 className="card-text">Director: {item.director}</h2>
                                <Link
                                    to={`/info/${item.episode_id}`}
                                    className="btn btn-primary" 
                                 >
                                    Перейти на фильм
                                </Link>
                        </div>
                    </div>
                ))   
            ))
        }
           
         </>   
)

}

export default BlockFilm;