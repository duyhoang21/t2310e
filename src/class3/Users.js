import useFetchData from "../utils/userFetchData";

const Users = () => {
    const { data } = useFetchData("https://api.github.com/users");

    return (
        <div>
            <h2>Users List</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {data && (data.map((user) =>(
                        <div className="col">
                            <div className="card">
                                <a href={user.html_url}>
                                    <img src={user.avatar_url} className="card-img-top" alt="..."></img>
                                </a>
                                <div className="card-body">
                                    <h5 className="card-title">{ user.login }</h5>
                                    <p className="card-text">
                                        <a href={user.html_url}>
                                            This is a longer card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit longer.
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Users;