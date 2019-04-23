import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [{
        headerName: "Super Admin", field: "super_admin", 
    children: [
            {headerName: "view", field: "super_admin.view",width: 60,cellRenderer: params => {
        return `<input type='checkbox' ${params.value ? 'checked' : ''} />`;
    }},
            {headerName: "edit", field: "super_admin.edit",width: 60,cellRenderer: params => {
        return `<input type='checkbox' ${params.value ? 'checked' : ''} />`;
    }},
            {headerName: "delete", field: "super_admin.delete",width: 60,cellRenderer: params => {
        return `<input type='checkbox' ${params.value ? 'checked' : ''} />`;
    }}
        ]
      }, {
        headerName: "Admin", field: "admin", 
    
    children: [
            {headerName: "view", field: "admin.view",width: 60,cellRenderer: params => {
        return `<input type='checkbox' ${params.value ? 'checked' : ''} />`;
    }},
            {headerName: "edit", field: "admin.edit",width: 60,cellRenderer: params => {
        return `<input type='checkbox' ${params.value ? 'checked' : ''} />`;
    }},
            {headerName: "delete", field: "admin.delete",width: 60,cellRenderer: params => {
        return `<input type='checkbox' ${params.value ? 'checked' : ''} />`;
    }}
        ]
      }, {
        headerName: "Manager", field: "manager", 
    children: [
            {headerName: "view", field: "manager.view",width: 60,cellRenderer: params => {
        return `<input type='checkbox' ${params.value ? 'checked' : ''} />`;
    }},
            {headerName: "edit", field: "manager.edit",width: 60,cellRenderer: params => {
        return `<input type='checkbox' ${params.value ? 'checked' : ''} />`;
    }},
            {headerName: "delete", field: "manager.delete",width: 60,cellRenderer: params => {
        return `<input type='checkbox' ${params.value ? 'checked' : ''} />`;
    }}
        ]
      }],
      rowData: [{
        super_admin: {
          view: true, edit: true, delete: false
        },
        admin: {
          view: false, edit: true, delete: false
        },
        manager: {
          view: false, edit: true, delete: false
        }
      },
      {
        super_admin: {
          view: true, edit: true, delete: true
        },
        admin: {
          view: true, edit: false, delete: false
        },
        manager: {
          view: true, edit: false, delete: false
        }
      }
      ]
    }
  }

  render() {
    return (
      <div 
        className="ag-theme-balham"
        style={{ 
        height: '500px', 
        width: '600px' }} 
      >
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}>
        </AgGridReact>
      </div>
    );
  }
}

export default App;