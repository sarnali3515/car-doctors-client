
const ServiceCard = ({ service }) => {

    const { title, img, price } = service;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-6 pt-6">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-[#FF3811]">Price: $ {price}</p>
                <div className="card-actions">
                    <button className="btn bg-[#FF3811]">View</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;