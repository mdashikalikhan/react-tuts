import { Link, useRouteError } from "react-router-dom";

const CareersError = () => {
    const error = useRouteError();
    return ( <div className="career-details">
        <h2>Error</h2>
        <p>{error.message}</p>
        <Link to="/help">Back to Help Page</Link>

    </div> );
}
 
export default CareersError;