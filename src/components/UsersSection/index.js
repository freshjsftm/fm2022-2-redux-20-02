import React, {useEffect} from "react";
import { connect } from "react-redux";
import { getAllUsers } from "../../store/usersSlice";

const UsersSection = (props) => {
  const { users, error, isFetching, loadedUsers } = props;
  useEffect(()=>{
    loadedUsers()
  }, [loadedUsers])
  return (
    <section>
      <h2>Users List</h2>
      {error && <h3>Error!</h3>}
      {isFetching && <h3>Loading...</h3>}
      {users.map((user, i) => (
        <article key={i}>{JSON.stringify(user)}</article>
      ))}
    </section>
  );
};

const mapStateToProps = (state) => state.users; //initialState || state from usersSlice
const mapDispatchToProps = (dispatch) => ({
  loadedUsers: (params)=>dispatch(getAllUsers(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersSection);
