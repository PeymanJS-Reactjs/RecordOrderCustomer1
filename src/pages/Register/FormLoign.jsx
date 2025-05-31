const Loign = () => {
    return (
      <div className="formRegister">
        <form>
          <div className="leftForm">
            <div className="control_form">
              <label>UserName</label>
              <input type="text" />
            </div>
            <div className="control_form">
              <label>Family</label>
              <input type="text" />
            </div>
            <div className="control_form">
              <label>Password</label>
              <input type="text" />
            </div>
          </div>
        </form>
        <button
          id="buttonLogin"
          type="submit"
          className="buttonForm"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Login
        </button>
      </div>
    );
}
 
export default Loign;