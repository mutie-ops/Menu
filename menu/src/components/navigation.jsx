import '../css/navigation.css'

function Navigation(){

    const navigation = 

        <div className='nav-container'>


            <h1 className='logo'>Stripe</h1>

            <ul className='header-el'> 
                <li className='list-el'>Products</li>

                <li className="dropdown">
                <a href="#" className="dropbtn">Services</a>
                
                <div className='dropdown-content'>
                    <ul className="dropdown-el">
                        <li><a href="#">Web Design</a></li>
                        <li><a href="#">App Development</a></li>
                        <li><a href="#">SEO</a></li>
                    </ul>
                </div>
               
            </li>
            <li className="dropdown">
                <a href="#" className="dropbtn">Developers</a>
                <div className='dropdown-content'>
                    <ul className="dropdown-el">
                        <li><a href="#">Web Design</a></li>
                        <li><a href="#">App Development</a></li>
                        <li><a href="#">SEO</a></li>
                    </ul>
                </div>
               
            </li>
                <li className='list-el'>Resources</li>
                <li className='list-el'>Pricing</li>
            </ul>

            <ul className='left-details'>
                <li className='list-el2'>Contact Sales</li>
                <li className='list-el2'>Sign in</li>
            </ul>
        </div>

    return navigation

}

export default Navigation