import React from "react";

class Test10 extends React.PureComponent {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.fullName = React.createRef();
        this.address = React.createRef();
        this.phoneNumber = React.createRef();
        this.personalCode = React.createRef();
    }
    submitForm = (event) => {
        const user = {
            fullName: this.fullName.current.value,
            address: this.address.current.value,
            phoneNumber: this.phoneNumber.current.value,
            personalCode: this.personalCode.current.value
        };
        event.preventDefault();
        fetch("/api/v1/users/code", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .catch(err => console.log("Error", err));
    };
  render() {
    return (
      <div>
        <Task />
          <form onSubmit={this.submitForm}>
              <div>
                  <input name={"fullName"} type="text" placeholder={"Nimi"} ref={this.fullName} defaultValue=""/>
              </div>
              <div>
                  <input name={"address"} type="text" placeholder={"Elukoht"} ref={this.address} defaultValue=""/>
              </div>
              <div>
                  <input name={"phoneNumber"} type="number" placeholder={"Kontaktnumber"} ref={this.phoneNumber} defaultValue=""/>
              </div>
              <div>
                  <input name={"personalCode"} type="number" placeholder={"Isikukood"} ref={this.personalCode} defaultValue=""/>
              </div>
              <input type="submit" value="Submit" />
          </form>
      </div>
    );
  }
}

export default Test10;

const Task = () => (
  <div>
    <h3>
      Ülesanne 10:
    </h3>
    <ol>
      <li>Tuleb teha sama vorm nagu <code>Ülesanne 9</code>, aga siin tuleb kasutada "uncontrolled" form </li>
      <li>Meeldetuletuse link <a href={LINK}>{LINK}</a> (sest te olete Reacti ametliku lehe juba ammu läbi lugenud)</li>
      <li>Tuleb muuta ainult faili <code>Test10.jsx</code></li>
    </ol>
  </div>
);

const LINK = 'https://reactjs.org/docs/uncontrolled-components.html';
