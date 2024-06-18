import "../../Wishlist.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const Wishlist = () => {
	return <div className="wishlist">
        <div className="section-heading">
            <div className="banner">
                <h1>Wishlist</h1>
                <p>View your wishlist products</p>
            </div>
        </div>
        <div className="content">
            <div className="empty d-flex">
                <div className="img">
                    <FontAwesomeIcon icon={faHeart} />
                </div>
                <h1>Wishlist is empty.</h1>
                <p>You don't have any products in the wishlist yet.<br/>
                You will find a lot of interesting products on our "Shop" page.</p>
            </div>
        </div>
    </div>;
};


Wishlist.propTypes = {};

export default Wishlist;
