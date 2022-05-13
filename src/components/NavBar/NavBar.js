import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getCategories } from '../asyncmock'
import  Logo  from '../../assets/Images/logo.png'
import { Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';


const NavBar = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then(categories => {
      setCategories(categories)
    })
  }, [])


  return (
        <nav className="NavBar">
            <Link className="NavBar-Brand" to="/">
                <img src={Logo} alt="logo" />
            </Link>
            <div className="Categories">
                { categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`}
                    className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}
                >
                  {cat.description}</NavLink>)}
            </div>
            <Link className="Nav-Link" to="/Cart">
                <CartWidget />
            </Link>
        </nav>
  )
}

export default NavBar


