import { useContext} from "react";
import User from "./User";
import { SharedContext } from "../../../providers/ContextProv";

const Users = () => {
    const {users} = useContext(SharedContext)
    // console.log(users)

    return (
        <div>
            <h2 className="text-2xl font-bold text-center m-10">Our Users</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                {
                   users.map(user => <User key={user.id} user = {user}></User>
                   )
                }
            </div>
        </div>
    );
};

export default Users;