import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Social = () => {

    const { googleSign } = useContext(AuthContext);
    let navigate = useNavigate();
    let location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSign = () => {
        googleSign()
            .then(result => {
                const loggedUser = result.user;
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
            .catch(error => {
                const errorMessage = error.Message;
                console.log(errorMessage);
            })
    }

    return (
        <div className="text-center mb-4">
            <div className="divider"></div>
            <button onClick={handleGoogleSign} className="btn btn-circle btn-outline">
                G
            </button>
        </div>
    );
};

export default Social;