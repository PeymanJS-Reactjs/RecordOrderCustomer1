
import { useState, useEffect, createContext } from "react";

export let InfoUser = createContext();

const ContexSlider = (props) => {
  // the useState is used to store validation info errors.
  const [showError, setShowError] = useState([]);
  // the useState is used to store userName give from server side.
  const [username, setusername] = useState("");  
//  the usestate is used to store select info user
  const [selectUser, setSelectUser] = useState([]);
  const [infoCustomer, setInfoCustomer] = useState({
    Name: "",
    Family: "",
    UserName: "",
    CodeNational: "",
    Phone: "",
    Email: "",
    Password: "",
  });

  // These useStates are used to values of inputs
  const [Name, setName] = useState("");
  const [Family, setFamily] = useState("");
  const [UserName, setUserName] = useState("");
  const [Code, setCode] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  
  // These Functions are used to Change Values
  const HandleChangeName = (e) => {
    setName(e.target.value);
  };
  const HandleChangeFamily = (e) => {
    setFamily(e.target.value);
  };
  const HandleChangeUserName = (e) => {
    setUserName(e.target.value);
  };
  const HandleChangeCode = (e) => {
    setCode(e.target.value);
  };
  const HandleChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const HandleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const HandleChangePassword = (e) => {
    setPassword(e.target.value);
  };



  // The function is used to Post infoCustomer for server
  const fetched = async () => {
    try {
    
      const response = await fetch("http://localhost:3009/sendInfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(infoCustomer),
      });

      const data = await response.json();

      if (typeof data.message === "string") {
        setShowError(data.message);
        setusername(data.userName);  
      }
           
      if (Array.isArray(data.message)) {
        setShowError(data.message)
      }

    } catch (error) {
      console.log(error)
    }

  }

  // The function is used to Selecting infoCumstomer by username.
  const fetchInfo = async () => {
    
    try {
      const responseInfo = await fetch("http://localhost:3009/Profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({username})
      })

      const dataInfo = await responseInfo.json();
      console.log(dataInfo.message);
      setSelectUser(dataInfo.content);
      console.log(selectUser)
    } catch (e) {
       console.log(e)
    }

  }

    // Ready to sent Data to Server
  const AddInfo = async () => {
   await setInfoCustomer({
      ...infoCustomer,
      Name: Name,
      Family: Family,
      UserName: UserName,
      CodeNational: Code,
      Phone: Phone,
      Email: Email,
      Password: Password,
    });
    };
    
  useEffect(() => {
      if (infoCustomer.Name.length !== 0) {
        fetched()
      }    
    }, [infoCustomer]);
    
    useEffect(() => {
    console.log("ShowError is now : " , showError) 
                          
  }, [showError]);

  return (
    <InfoUser.Provider
      value={{
        selectUser,
        fetchInfo,
        infoCustomer,
        AddInfo,
        Name,
        Family,
        UserName,
        Code,
        Phone,
        Email,
        Password,
        HandleChangeName,
        HandleChangeFamily,
        HandleChangeUserName,
        HandleChangeCode,
        HandleChangePhone,
        HandleChangeEmail,
        HandleChangePassword,
        showError,
      }}
    >
      {props.children}
    </InfoUser.Provider>
  );
};

export default ContexSlider;
