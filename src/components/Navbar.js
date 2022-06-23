import MyNavItem from "./MyNavItem";

export function Navbar(props) {
    const {toggleSidebarClass} = props;
    return (
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <a className="navbar-brand ps-3" href="index.html">Data Interface</a>
            <button
                className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
                id="sidebarToggle"
                onClick={() => toggleSidebarClass()}
            >
                <i className="fas fa-bars"></i>
            </button>
            <form className="d-none d-md-inline-block form-inline me-0 ms-md-3 me-md-3 my-2 my-md-0">
                <div className="input-group">
                    <input id={"search"} className="form-control" type="text" placeholder="Search"
                        aria-label="Search" aria-describedby="btnNavbarSearch"
                    />
                    <button
                        className="btn btn-primary"
                        id="btnNavbarSearch"
                        type="button"
                    >
                        <i className="fas fa-search"></i>
                    </button>
                </div>
            </form>
            <div className="navbar-nav align-items-center ms-auto me-md-4">
                <MyNavItem label={"Message"} icon={"fa fa-envelope me-lg-2"} link={"#"}/>
                <MyNavItem label={"Notification"} icon={"fa fa-bell me-lg-2"} link={"#"}/>
            </div>
        </nav>
    );
}
