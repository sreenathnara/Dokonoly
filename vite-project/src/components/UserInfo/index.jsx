import { useSelector } from "react-redux";

const UserInfo = () => {
    console.log("rendered")
    const userDetails = useSelector(state => state.user);
    console.log(userDetails, "user state")
    return <div>
        <h2>Hello, {userDetails.userInfo.name && userDetails.userInfo.name}</h2>
    </div>
}

export default UserInfo;