
import Link from 'next/link';
const Layout = (props)=>{
return (
  <>
    <header>
        <Link href="/">
            <a>Home</a>
        </Link>
        { '   '}
        <Link href="/">
            <a>Contact Us</a>
        </Link>
        { '   '}
        <Link href='/users'>
            <a>Users</a> 
        </Link>
        { '   '}
        
    </header>
    <hr/>
    {props.children}
    <hr/>
    <footer>
    <p> Some footer &copy; {new Date().getFullYear()} </p>
    </footer>

  </>
);

}

export default Layout;