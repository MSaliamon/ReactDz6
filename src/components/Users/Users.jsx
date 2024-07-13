import UseFetch from "../../hooks/UseFetch/UseFetch";

const Users = () => {
    const { data: users, isLoading, error } = UseFetch('https://jsonplaceholder.typicode.com/users')
    return (
        <div>
            {error && <h3>{error}</h3>}
            {isLoading && <h1>Loading...</h1>}
            {users.map((user) => {
                return <div key={user.id}>{user.name}</div>;
            })}
        </div>
    );
};

export default Users;