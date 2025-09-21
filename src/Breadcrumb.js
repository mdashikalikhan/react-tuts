import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
    const locations = useLocation();

    let link = '';

    const crumbs = locations.pathname.split('/')
    .filter(c=> c!=='')
    .map(c=>{
        link += `/${c}`;
        return (
            <div className="crumb" key={c}>
                <Link to={link}>{c}</Link>
            </div>
        )
    });

    return ( 
        <div className="breadcrumbs">
            {crumbs}
        </div>

     );
}
 
export default Breadcrumb;