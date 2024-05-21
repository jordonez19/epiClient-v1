/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
        console.log(id)
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

    useEffect(() => {
        handleGetData();
    }, []);

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
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(252,179,60,1)"><path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 11.4872 7.07719 10.9925 7.22057 10.5268C7.61175 11.3954 8.48527 12 9.5 12C10.8807 12 12 10.8807 12 9.5C12 8.48527 11.3954 7.61175 10.5269 7.21995C10.9925 7.07719 11.4872 7 12 7Z"></path></svg>
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


    const handleOpenModal = (rowData: any) => {
        setSelectedRowData(rowData);
        setOpenDetails(true);
    };

    const handleCloseModal = () => {
        setOpenDetails(false);
        setSelectedRowData(null);
    };

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
