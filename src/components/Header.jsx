import {Link} from 'react-router-dom';

function Header () {
    return (
        <nav className="amber darken-1">
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo left">Recipes</Link>
                <ul id="nav-mobile" className="right">
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export { Header };