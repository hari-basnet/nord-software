import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './App.css';
import Form from './components/Form';
import Table from './components/Table';
injectTapEventPlugin();

class App extends Component {

  state = {
    data: [],
  };
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className = "header"><h2>Nord Software</h2></div>
          <div className = "body-part">

            <h2>List of participants</h2>
            <div className ="form-part">
              <Form onSubmit={submission => this.setState({
                data: [...this.state.data, submission]
              })}
              />
            </div>
            <div className = "table-part"></div>
            <Table
              data={this.state.data}
              header={[
                {
                  name: "Name",
                  prop: "fullName",
                },
                {
                  name: "E-mail address",
                  prop: "email",
                },
                {
                  name: "Phone Number",
                  prop: "phoneNumber",
                },
                {
                  name: "edit/delete",
                  prop: "editDelete"
                }
              ]}
            />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
