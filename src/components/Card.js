function Card(props){
    const {children} = props ;
    return(
        <div className="col-sm-6 col-xl-3" id={"card"}>
            <div className="bg-dark rounded d-flex align-items-center justify-content-between p-4">
                <i className={props.icon}></i>
                <div className="ms-3">
                    {children}
                </div>
            </div>
        </div>
    )
}
export default Card ;