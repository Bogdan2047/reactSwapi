import react from "react"
import { NavLink } from "react-router-dom"

export const Header = () => {
return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to='/'>Главная</NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Фильмы
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">В разработке</a></li>
                
              </ul>
            </li>
            <li className="nav-item">
              <NavLink to='/about' className="nav-link">Про сайт</NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Поиск" aria-label="Поиск"/>
            <button className="btn btn-outline-success" type="submit">Поиск</button>
          </form>
        </div>
      </div>
    </nav>    
)
}