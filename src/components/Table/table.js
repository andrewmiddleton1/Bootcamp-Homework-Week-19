/* eslint-disable react/require-render-return */
import React, { Component } from "react";
import "./style.css";
import axios from "axios";

class Table extends Component {

  state = {
    employees: [],

  }


  componentDidMount() {

    axios.get("https://randomuser.me/api?results=50")
      .then(response => {

        this.setState({ employees: response.data.results });


      });
  }

  sortEmployees(columnName) {
    if (columnName === "firstname") {
      let sortedEmployees = this.state.employees.sort((employee1, employee2) => {
        return employee1.name.first > employee2.name.first ? 1
          : -1
      }
      )
      this.setState({ employees: sortedEmployees })
    }

    if (columnName === "lastname") {
      let sortedEmployees = this.state.employees.sort((employee1, employee2) => {
        return employee1.name.last > employee2.name.last ? 1
          : -1
      }
      )
      this.setState({ employees: sortedEmployees })
    }

    if (columnName === "phone") {
      let sortedEmployees = this.state.employees.sort((employee1, employee2) => {
        return employee1.phone > employee2.phone ? 1
          : -1
      }
      )
      this.setState({ employees: sortedEmployees })
    }

    if (columnName === "email") {
      let sortedEmployees = this.state.employees.sort((employee1, employee2) => {
        return employee1.email > employee2.email ? 1
          : -1
      }
      )
      this.setState({ employees: sortedEmployees })
    }

    if (columnName === "dob") {
      let sortedEmployees = this.state.employees.sort((employee1, employee2) => {
        return employee1.dob.date > employee2.dob.date ? 1
          : -1
      }
      )
      this.setState({ employees: sortedEmployees })
    }

  }

  render() {


    return (
      <div className="tableStyle"><table className="table">
        <thead >
          <tr>
            <th scope="col">Image: </th>
            <th scope="col" onClick={() => this.sortEmployees("firstname")}>First Name: </th>

            <th scope="col" onClick={() => this.sortEmployees("lastname")}>Last Name: </th>

            <th scope="col" onClick={() => this.sortEmployees("phone")}>Phone:  </th>

            <th scope="col" onClick={() => this.sortEmployees("email")}>Email:  </th>

            <th scope="col" onClick={() => this.sortEmployees("dob")}>DOB:  </th>

          </tr>
        </thead>
        <tbody>
          {this.state.employees.map((employee) => {
            return (
              <tr key={employee.login.uuid}>
                <td>
                  <img alt="employee" src={employee.picture.medium} />
                </td>
                <td>{employee.name.first} </td>
                <td>{employee.name.last} </td>
                <td>{employee.phone} </td>
                <td>{employee.email} </td>
                <td>{employee.dob.date} </td>
              </tr>


            )
          })
          }
        </tbody>
      </table></div>
    )






  }
}


export default Table;
