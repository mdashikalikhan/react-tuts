import { Link, useLoaderData } from "react-router-dom";

const Careers = () => {

    const careers = useLoaderData();

    return ( 
        <div className="careers">

            {
                careers.map((career)=>(
                    <Link to={career.id.toString()} key={career.id}>
                        <p>{career.title}</p>
                       
                    </Link>
                ))
            }

        </div>
     );
}
 
export default Careers;

export const careersLoader = async ()=>{
    const resp = await fetch("http://localhost:8000/careers");
    return resp.json();
}

