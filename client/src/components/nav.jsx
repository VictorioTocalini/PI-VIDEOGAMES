import './nav.css'
const { Link } = require("react-router-dom");

function Nav (){
    return <div className='nav'>
        <ul className='ul'>
            {/* <li className='li'>  </li> */}
            <Link to='/home'>
                <li className='li'> Home Page </li>
            </Link>
            <Link to= '/create'>
                <li className='li'> Create your game </li>
            </Link>
        </ul>
    </div>
}

export default Nav