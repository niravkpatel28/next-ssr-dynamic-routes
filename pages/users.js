import Layout from "../components/Layout"
import axios from 'axios';
import Link from 'next/link';
// fetch data from external source 

const UserLink = (props)=>{
    return (
        <>
            <li > 
                <Link href={`/users/${props.user.id}`}>
                {/* <Link href={`/users/${props.user.name}`}> */}
                    <a>{props.user.name}</a> 
                </Link>
            </li>
        </>
    )
}

const Users = (props)=>{
    let userLinks = props.users.map((user)=>{
        return <UserLink user={user} key={user.id}/>
    }); 
    return(
        <Layout>
            <h1> User List </h1>
            <ul>{userLinks}</ul>
        </Layout>
    )
}


//fetch user list 
Users.getInitialProps = async()=>{
    let response = await axios.get('https://jsonplaceholder.typicode.com/users');
    // console.log('Full Data ', response.data);
    let users = response.data; 


    return ({users})

}

export default Users;