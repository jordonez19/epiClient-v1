/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useApi } from '../../hooks/useApi';
import BasicDataTable from '../../components/Global/BasicDataTable';
import BreadCrumb from '../../components/Global/BreadCrumb';
import TitleComponent from '../../components/Global/TitleComponent';
import ConfirmationCardButton from '../../components/Global/ConfirmationCardButton';
import { Dropdown } from 'react-bootstrap';
//import { useAlert } from '../../hooks';

const UsersContainer = () => {
    // Get data
    const [data, setData] = useState<any>([]);
    const { isLoading, error, get } = useApi();

    const handleGetData = async () => {
        const response: any = await get('users');
        setData(response.content);
    };


    /* Columns for the Data Table */
    const columns: any[] = [
        {
            Header: "N°",
            accessor: "",
            Cell: ({ row }: { row: any }) => {
                const { index } = row;
                const consecutiveNumber = index + 1;
                return <span>{consecutiveNumber}</span>;
            }
        },
        {
            Header: "NAME",
            accessor: "name",
            Cell: ({ value }: { value: string }) => <span>{value}</span>,
        },
        {
            Header: "LAST NAME",
            accessor: "last_name",
            Cell: ({ value }: { value: string }) => <span>{value}</span>,
        },
        {
            Header: "EMAIL",
            accessor: "email",
            Cell: ({ value }: { value: string }) => <span>{value}</span>,
        }, {
            Header: "ROLES",
            accessor: "",
            Cell: ({ row }: { row: any }) => (
                row.original.roles.map((role: any) => (
                    <> <span>{role.role_name}</span> <br /></>
                ))
            )
        },
        {
            Header: "EDIT",
            accessor: "",
            Cell: ({ row }: { row: any }) => (
                <Link
                    to={`${process.env.PUBLIC_URL}/dashboard/users/action`}
                    state={row.original}
                >
                    <span className="material-icons text-primary md-5 md-dark">&#xe3c9;</span>
                </Link>
            ),
        },
    ];

    useEffect(() => {
        handleGetData();
    }, []);

    return (
        <div>
            {/* Breadcrumb */}
            <BreadCrumb
                items={['home', 'UNIVERSIDADES']}
                baseURL={['dashboard', 'dashboard/Users/']}
            />

            {/* Component Title */}
            <TitleComponent
                title={'Users'}
            />

            {error && (
                <ConfirmationCardButton
                    baseURL="#"
                    title="Error"
                    subtitle={`${error?.message}`}
                />
            )}

            {/* Data Grid Table */}
            {!error && (
                <BasicDataTable
                    columns={columns}
                    data={data}
                    isLoading={isLoading}
                    addButtonLink="/dashboard/Users/action"
                />
            )}

        </div>
    );
};

export default UsersContainer;
