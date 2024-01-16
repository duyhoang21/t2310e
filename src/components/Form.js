import {useState} from "react";

export default function Form() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [submitted, setSubmitted] = useState(false);

    const handleName = (e) => {
        setName(e.target.value);
        //console.log(name);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
        //console.log(email);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
       //console.log(e.target.value);
    };

    const handleSubmit = (e) => {
       // console.log("User " + {name} + " registred");
        e.preventDefault();
        if (name === "" || email === "" || password === "") {
            //setError(true);
        } else {
            setSubmitted(true);
            //setError(false);
        }
    };

    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? "" : "none",
                }}
            >
                <h1>User {name} successfully registered!!</h1>
            </div>
        );
    };

    return (
        <div className="form">
            <div>
                <h1>User Registration</h1>
            </div>

            {/* Calling to the methods */}
            <div className="messages">
                {successMessage()}
            </div>

            <form>
                {/* Labels and inputs for form data */}
                <label className="label">Name</label>
                <input
                    onChange={handleName}
                    className="input"
                    value={name}
                    type="text"
                />
                <br/>
                <label className="label">Email</label>
                <input
                    onChange={handleEmail}
                    className="input"
                    value={email}
                    type="email"
                />
                <br/>
                <label className="label">Password</label>
                <input
                    onChange={handlePassword}
                    className="input"
                    value={password}
                    type="password"
                />
                <br/>
                <button onClick={handleSubmit} className="btn" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}