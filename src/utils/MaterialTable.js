import React, { Component } from 'react';
import MaterialTable from 'material-table';

export default class CustomTable extends Component {

    render() {
        return (
            <MaterialTable
                title={this.props.title ? this.props.title : null}
                columns={this.props.columns}
                data={this.props.data}
                options={{ pageSize: 10, pageSizeOptions: [10, 20, 50], paginationType: "stepped", selection: true, search: false }}
            />
        )
    }
}
