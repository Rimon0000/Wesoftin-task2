import { Link } from "react-router-dom";


const User = ({user}) => {
    console.log(user)
    const {id, photo, name, email} = user

    return (
        <div className="card bg-base-100 shadow-xl" data-aos="zoom-in"  data-aos-duration="2000">
          <figure><img src={photo} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p className="font-bold mb-3">Email: <span className="font-semibold">{email}</span></p>
            <div className="card-actions justify-end">
              <Link to={`/users/${id}`}><button className="btn btn-outline">Details</button></Link>
            </div>
          </div>
        </div>
    );
};

export default User;