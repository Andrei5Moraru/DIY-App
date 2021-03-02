import 'materialize-css/dist/css/materialize.min.css';


const Navbar = () => {
    return ( 
        <div className="navbar-fixed">
        <nav className='nav-wrapper grey lighten-5'>
           <img className='logo black-text' src='http://pngimg.com/uploads/pokemon_logo/pokemon_logo_PNG5.png'/>
            <ul id='nav-mobile' className='right hide-on-med-and-down '>
            <form>
                <div class="">
                <input id="search" type="search" required placeholder="search" />
                </div>
            </form>
            </ul>
        </nav>

    </div>
     );
}
 
export default Navbar;