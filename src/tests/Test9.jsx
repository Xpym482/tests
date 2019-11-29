import React from "react";

class Test9 extends React.PureComponent {

    constructor(props){
        super(props);
        this.state = {
            fullName: "",
            address: "",
            phoneNumber: "",
            personalCode: "",
        };
    }
    submitForm = (event) => {
        console.log(event);
        event.preventDefault();
        fetch("/api/v1/users/code", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state),
        })
            .then(res => res.json())
            .catch(err => console.log("Error", err));
    };

    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
  render() {
    return (
      <div>
        <Task />
          <div>
              <form onSubmit={this.submitForm}>
                  <div>
                      <input name={"fullName"} type="text" placeholder={"Nimi"} onChange={this.handleChange} value={this.state.fullName}/>
                  </div>
                  <div>
                      <input name={"address"} type="text" placeholder={"Elukoht"} onChange={this.handleChange} value={this.state.address}/>
                  </div>
                  <div>
                      <input name={"phoneNumber"} type="number" placeholder={"Kontaktnumber"} onChange={this.handleChange} value={this.state.phoneNumber}/>
                  </div>
                  <div>
                      <input name={"personalCode"} type="number" placeholder={"Isikukood"} onChange={this.handleChange} value={this.state.personalCode}/>
                  </div>
                  <input type="submit" value="Submit" />
              </form>
          </div>
      </div>
    );
  }
}

export default Test9;

const Task = () => (
  <div>
    <h3>
      Ülesanne 9:
    </h3>
    <ol>
      <li>Tuleb luua vorm</li>
      <li>Kasutaja saab sisestada nime, elukoha, telefoni numbri ja isikukoodi</li>
      <li>Kui kasutaja vajutab "esita", siis tehakse päring serveri kasutaja uuendamiseks/loomiseks</li>
      <li>Kui sisestatud <code>isikukoodiga</code> kasutaja on olemas, siis peab uuendama kasutajat</li>
      <li>Kui sisestatud <code>isikukoodiga</code> kasutaja ei olnud olemas, siis tuleb luua uus kasutaja</li>
      <li>Väga sarnane <code>Task7</code></li>
      <li>Tuleb muuta ainult faile <code>user.router.js</code> ja <code>Test9.jsx</code></li>
      <li>Kasutaja andmebaasi mudeliga saad tutvuda failis <code>user.model.js</code></li>
      <li><a href={LINK}>{LINK}</a></li>
    </ol>
  </div>
);

const LINK = 'https://mongoosejs.com/docs/api.html';
