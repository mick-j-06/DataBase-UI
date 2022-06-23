import {useState} from "react";

export function ContainerFluid(props){
    const {children,classNameSupl,id} = props;
    const [classSupl,setClassSupl] = useState("pt-4 px-4");
    if(classNameSupl!==undefined){
        setClassSupl(classNameSupl)
    }
    return(
        <div className={"container-fluid " + classSupl} id={id}>
            {children}
        </div>
    )
}