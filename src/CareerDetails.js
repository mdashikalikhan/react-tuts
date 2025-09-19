import { useLoaderData, useParams } from "react-router-dom";

const CareerDetails = () => {
    const {id} = useParams();

    const career = useLoaderData();

    return ( <div className="career-details">
        <h2>Career details for {career.title}</h2>
        <p>{career.salary}</p>
        <p>{career.location}</p>
    </div>

     );
}
 
export default CareerDetails;

export const carrerDetailsDataLoader = async ({params})=>{
    const resp = await fetch(`http://localhost:8000/careers/${params.id}`);

    if(!resp.ok){
        throw new Response("Not Found", {status: 404});
    }

    return resp.json();
}