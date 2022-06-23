import React from "react";

class MyNavItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {label,icon,link} = this.props ;
        return(
            <div className="nav-item">
                <a href={link} className="nav-link">
                    <i className={icon}></i>
                    <span className="d-none d-lg-inline-flex">{label}</span>
                </a>
            </div>
        )
    }
}
export default MyNavItem ;