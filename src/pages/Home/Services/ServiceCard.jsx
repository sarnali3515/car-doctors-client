import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {

    const { _id, title, img, price } = service;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-6 pt-6">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-[#FF3811]">Price: $ {price}</p>
                <div className="card-actions">
                    <Link to={`/checkout/${_id}`}><button className="btn text-white bg-[#FF3811]">Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;