import axios from 'axios'   
import { withRouter } from 'next/router';
import Layout from '../../components/Layout';
const UserDetail = (props)=>{
    // console.log('Props with user detail', props.user); 
    const {router } = props;
    // console.log('router ',router)
    return (
        <>
            <Layout>
            <h2> User details </h2>
            {/* <p> {JSON.stringify(props.user)}</p> */}
            <p> User Name: {props.user.name}</p>
            <p> Email: {props.user.email}</p>
            <p> Phone: {props.user.phone}</p>
            </Layout>
        </>

    )
}

UserDetail.getInitialProps = async (context)=>{
    let {id} = context.query
    // console.log('Extracted id ', id)
    let user = await axios.get(`https://jsonplaceholder.typicode.com/users?id=${id}`)
    return(
        {user: user.data[0]}
    );
} 

export default withRouter(UserDetail);