const Header = () => {
    return(
        <header id="home" className="navbar-fixed-top">
            <div className="header_top_menu clearfix">	
                <div className="container">
                    <div className="row">	
                        <div className="col-md-5 col-md-offset-3 col-sm-12 text-right">
                            <div className="call_us_text">
                                <a href=""><i className="fa fa-clock-o"></i> Order Foods 24/7</a>
                                <a href=""><i className="fa fa-phone"></i>061 9876 5432</a>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-12">
                            <div className="head_top_social text-right">
                                <a href=""><i className="fa fa-facebook"></i></a>
                                <a href=""><i className="fa fa-google-plus"></i></a>
                                <a href=""><i className="fa fa-twitter"></i></a>
                                <a href=""><i className="fa fa-linkedin"></i></a>
                                <a href=""><i className="fa fa-pinterest-p"></i></a>
                                <a href=""><i className="fa fa-youtube"></i></a>
                                <a href=""><i className="fa fa-phone"></i></a>
                                <a href=""><i className="fa fa-camera"></i></a>
                            </div>	
                        </div>

                    </div>			
                </div>
            </div>

            <div className="main_menu_bg">
                <div className="container"> 
                    <div className="row">
                        <nav className="navbar navbar-default">
                            <div className="container-fluid">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                    <a className="navbar-brand our_logo" href="#"><img src="images/logo.png" alt="" /></a>
                                </div>

                                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                    <ul className="nav navbar-nav navbar-right">
                                        <li><a href="#slider">Home</a></li>
                                        <li><a href="#abouts">Menu</a></li>
                                        <li><a href="#features">Features</a></li>
                                        <li><a href="#portfolio">Delivery</a></li>
                                        <li><a href="#ourPakeg">News</a></li>
                                        <li><a href="#mobaileapps">Pages</a></li>
                                        <li><a href="#" className="booking">Table Booking</a></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>	
        </header>
    )
}

export default Header;