import React from 'react';
import './Table.css';
import CustomTable from '../../utils/MaterialTable';
import { getTableDataMethods, updateStatus } from './Actions';
import { connect } from 'react-redux';
import Switch from '@material-ui/core/Switch';
import CircularProgress from '@material-ui/core/CircularProgress';

class TableContainer extends React.Component {

    componentDidMount() {
        this.props.getTableDataMethods();
    }

    handleChange = (data) => {
        let requestData = data;
        requestData.active = !data.active;
        this.props.updateStatus(requestData, data.id);
    }

    componentWillUpdate(nextProps) {
        const { updateStatusResponse } = this.props;
        if (nextProps.updateStatusResponse && nextProps.updateStatusResponse !== updateStatusResponse)
            this.props.getTableDataMethods();
    }

    render() {
        const { loading, tableData } = this.props;
        return (
            <div style={{ margin: 50 }}>
                {loading && <div className="siteloader"><CircularProgress color="secondary" /></div>}
                <CustomTable
                    data={tableData}
                    title={<div><i class="far fa-user"></i> Users</div>}
                    columns={[
                        {
                            title: 'Type', field: 'active', render: rowData => <div className="userType" style={{ backgroundColor: rowData.tableData.id % 2 ? '#8A98CA' : '#F2AC57' }}>{rowData.name.substr(0, 2)}</div>
                        },
                        { title: 'Name', field: 'name', defaultSort: 'asc' },
                        { title: 'Email', field: 'email' },
                        { title: 'Telephone', field: 'phone', type: 'numeric' },
                        {
                            title: 'Status', field: 'active', render: rowData => <Switch
                                checked={rowData.active}
                                onChange={() => this.handleChange(rowData)}
                                value="checkedB"
                                color="primary"
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                        }
                    ]}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        loading: state.tableReducer.loading,
        error: state.tableReducer.error,
        tableData: state.tableReducer.tableData,
        updateStatusResponse: state.tableReducer.updateStatusResponse
    };
};

export default connect(mapStateToProps, { getTableDataMethods, updateStatus })((TableContainer));