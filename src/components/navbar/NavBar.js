import './NavBar.css'

const NavBar = () => {
    return (
        <div className='navbar'>

            <h1>
                <img className='navbar__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/800px-Pok%C3%A9_Ball_icon.svg.png' />
            </h1>
            <ul className='navbar__nav'>
                <li><button className='navbar__button'>Home</button></li>
                <li><button className='navbar__button'>Pokédex</button></li>
                <li><button className='navbar__button'>About</button></li>
                <li><button className='navbar__button'>Contact</button></li>

            </ul>
        </div>
    )
}

export default NavBar