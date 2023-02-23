import { useRouteError } from "react-router-dom";
//it give us what types of erreor we have
const Error = ()=>{
    const err=useRouteError();
    console.log(err);
    return (
        <div>
            <h1>OOps !!</h1>
            <h2>Somethings went Wrong !!</h2>
            <h2>{err.status + " : " + err.statusText}</h2>
        </div>
    )
}
export default Error;