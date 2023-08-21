import { faTrashCan, faUserShield } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })

    const handleMakeAdmin = user => {
        console.log(user);
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.displayName} is admin`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleDeleted = user => {
        console.log(user);
    }

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | All Users</title>
            </Helmet>
            <h3 className="text-4xl font-semibold uppercase my-4">total users: {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Roll</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user.role == 'admin' ? 'admin' :
                                            <button onClick={() => handleMakeAdmin(user)} className="text-[#D1A054] btn btn-ghost text-xl"><FontAwesomeIcon className="text-xl" icon={faUserShield} /></button>
                                    }
                                </td>
                                <td>
                                    <button onClick={() => handleDeleted(user)} className="bg-red-700 text-white btn btn-ghost"><FontAwesomeIcon icon={faTrashCan} /></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;