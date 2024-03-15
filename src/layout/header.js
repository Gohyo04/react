

function Header(){

    // JSX -> 
    return(
        <>
            <nav className="navbar bg-primary" data-bs-theme="dark">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link to="/" className="nav-link active">Home</Link>
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/notice/list">Board</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Header;