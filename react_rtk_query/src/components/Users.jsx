import { useGetUsersQuery } from "../RTK/userAPI";

const Users = () => {
  const {
    data: users,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useGetUsersQuery();
  return (
    <div className="d-flex justify-content-center p-3">
      {isLoading && <h3>Loading...</h3>}
      {isError && <h3>Something went wrong</h3>}
      {isSuccess &&
        users?.map((user, index) => (
          <div key={user?.id} className="p-3 border border-2 border-dark m-2">
            <h4>{user?.name}</h4>
            <h4>{user?.email}</h4>
          </div>
        ))}
    </div>
  );
};
export default Users;
