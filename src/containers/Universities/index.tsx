/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useApi } from '../../hooks/useApi';
import BasicDataTable from '../../components/Global/BasicDataTable';
import BreadCrumb from '../../components/Global/BreadCrumb';
import TitleComponent from '../../components/Global/TitleComponent';
import ConfirmationCardButton from '../../components/Global/ConfirmationCardButton';
import ModalDetails from '../../components/Universities/ModalDetails';
import { useAlert } from '../../hooks';

const UniversitiesContainer = () => {
    // Get data
    const [data, setData] = useState<any>([]);
    const [openDetails, setOpenDetails] = useState<boolean>(false);
    const [selectedRowData, setSelectedRowData] = useState<any>(null);
    const { isLoading, error, get, del } = useApi();
    const { handleSuccessAlert, handleErrorAlert, handleEditConfirmation } = useAlert();
    const handleGetData = async () => {
        const response: any = await get('universities');
        setData(response);
    };

    const handleDelete = async (id: number) => {
        const answer = await handleEditConfirmation("Are you sure you want to delete this record?");
        if (answer.isConfirmed) {
            const res: any = await del(`universities/${id}`);
            if (!!res.status) {
                handleSuccessAlert(res.message);
                handleGetData();
            } else {
                handleErrorAlert(res.message);
            }
        }
    }

    const handleOpenModal = (rowData: any) => {
        setSelectedRowData(rowData);
        setOpenDetails(true);
    };

    const handleCloseModal = () => {
        setOpenDetails(false);
        setSelectedRowData(null);
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
            },
        },
        {
            Header: "UNIVERSITY",
            accessor: "UNIVERSIDAD",
            Cell: ({ value }: { value: string }) => <span>{value}</span>,
        },
        {
            Header: "CITY",
            accessor: "CIUDAD",
            Cell: ({ value }: { value: string }) => <span>{value}</span>,
        },
        {
            Header: "AREA",
            accessor: "AREA",
            Cell: ({ value }: { value: string }) => <span>{value}</span>,
        },
        {
            Header: "LEVEL",
            accessor: "NIVEL",
            Cell: ({ value }: { value: string }) => <span>{value}</span>,
        },
        {
            Header: "TITLE",
            accessor: "TITULO",
            Cell: ({ value }: { value: string }) => <span>{value}</span>,
        },
        {
            Header: "PROGRAM",
            accessor: "PROGRAMA",
            Cell: ({ value }: { value: string }) => <span>{value}</span>,
        },
        {
            Header: "NFQ",
            accessor: "NFQ",
            Cell: ({ value }: { value: string }) => <span>{value}</span>,
        },
        {
            Header: "DURATION",
            accessor: "DURACION",
            Cell: ({ value }: { value: string }) => <span>{value}</span>,
        },
        {
            Header: "IELTS",
            accessor: "IELTS",
            Cell: ({ value }: { value: string }) => <span>{value}</span>,
        },
        {
            Header: "START",
            accessor: "INICIO",
            Cell: ({ value }: { value: string }) => <span>{value}</span>,
        },
        {
            Header: "FEES",
            accessor: "FEES",
            Cell: ({ value }: { value: string }) => <span>{value}</span>,
        },
        /*  
         {
             Header: "CONTENT",
             accessor: "CONTENIDO",
             Cell: ({ value }: { value: string }) => <span>{value}</span>,
         },  {
             Header: "DESCRIPTION",
             accessor: "DESCRIPCION",
             Cell: ({ value }: { value: string }) => <span>{value}</span>,
         }, {
             Header: "SCHOOLARSHIPS",
             accessor: "BECAS",
             Cell: ({ value }: { value: string }) => <span>{value}</span>,
         },  */
        {
            Header: "VIEW",
            accessor: "",
            Cell: ({ row }: { row: any }) => (
                <svg
                    onClick={() => handleOpenModal(row.original)}
                    className='cursor-pointer'
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(252,179,60,1)">
                    <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748ZM12.1779 7.17624C11.4834 7.48982 11 8.18846 11 9C11 10.1046 11.8954 11 13 11C13.8115 11 14.5102 10.5166 14.8238 9.82212C14.9383 10.1945 15 10.59 15 11C15 13.2091 13.2091 15 11 15C8.79086 15 7 13.2091 7 11C7 8.79086 8.79086 7 11 7C11.41 7 11.8055 7.06167 12.1779 7.17624Z"></path></svg>
            ),
        },
        {
            Header: "EDIT",
            accessor: "",
            Cell: ({ row }: { row: any }) => (
                <Link
                    to={`${process.env.PUBLIC_URL}/dashboard/universities/action`}
                    state={row.original}
                >
                    <span className="material-icons text-primary md-5 md-dark">&#xe3c9;</span>
                </Link>
            ),
        }, {
            Header: "DELETE",
            accessor: "",
            Cell: ({ row }: { row: any }) => (
                <svg
                    onClick={() => handleDelete(row.original.ID)}
                    className='cursor-pointer'
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#fc4c3c">
                    <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM13.4142 13.9997L15.182 15.7675L13.7678 17.1817L12 15.4139L10.2322 17.1817L8.81802 15.7675L10.5858 13.9997L8.81802 12.232L10.2322 10.8178L12 12.5855L13.7678 10.8178L15.182 12.232L13.4142 13.9997ZM9 4V6H15V4H9Z"></path>
                </svg>
            ),
        }
    ];

    useEffect(() => {
        handleGetData();
    }, []);

    return (
        <div>
            {/* Breadcrumb */}
            <BreadCrumb
                items={['home', 'UNIVERSIDADES']}
                baseURL={['dashboard', 'dashboard/universities/']}
            />

            {/* Component Title */}
            <TitleComponent
                title={'UNIVERSITIES'}
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
                    addButtonLink="/dashboard/universities/action"
                />
            )}

            {/* Modal for details */}
            {openDetails && selectedRowData && (
                <ModalDetails
                    show={openDetails}
                    onHide={handleCloseModal}
                    data={selectedRowData}
                />
            )}
        </div>
    );
};

export default UniversitiesContainer;
