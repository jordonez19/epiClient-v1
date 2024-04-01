import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useApi } from '../../hooks/useApi';
import BasicDataTable from '../../components/Global/BasicDataTable';
import BreadCrumb from '../../components/Global/BreadCrumb';
import TitleComponent from '../../components/Global/TitleComponent';
import ConfirmationCardButton from '../../components/Global/ConfirmationCardButton';
import axios from 'axios';


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
        Header: "Nombre",
        accessor: "name",
        Cell: ({ value }: { value: string }) => <span>{value.toUpperCase()}</span>,
    },
    {
        Header: "Ciudad",
        accessor: "city",
        Cell: ({ value }: { value: string }) => <span>{value}</span>,
    },
    {
        Header: "Área",
        accessor: "area",
        Cell: ({ value }: { value: string }) => <span>{value}</span>,
    },
    {
        Header: "Título Escolar",
        accessor: "title",
        Cell: ({ value }: { value: string }) => <span>{value}</span>,
    },
    {
        Header: "Programa",
        accessor: "programme",
        Cell: ({ value }: { value: string }) => <span>{value}</span>,
    },
    {
        Header: "Nivel",
        accessor: "level",
        Cell: ({ value }: { value: number }) => <span>{value}</span>,
    },
    {
        Header: "Duración",
        accessor: "duration",
        Cell: ({ value }: { value: number }) => <span>{value}</span>,
    },
    {
        Header: "IELTS",
        accessor: "ielts",
        Cell: ({ value }: { value: number }) => <span>{value}</span>,
    },
    {
        Header: "Descripción",
        accessor: "description",
        Cell: ({ value }: { value: string }) => <span>{value}</span>,
    },
    {
        Header: "Editar",
        accessor: "",
        // Custom cell rendering for the "Editar" column with a link to edit the profile
        Cell: ({ row }: { row: any }) => {
            return (
                <Link
                    to={`${process.env.PUBLIC_URL}/editaruniversidad/`}
                    state={row.original}
                >
                    <span className="material-icons md-5 md-dark">&#xe3c9;</span>
                </Link>
            )
        },
    }
];


const UniversitiesContainer = () => {
    //geting data
    const [data, setData] = useState<any>([]);
    const { isLoading, error, get } = useApi();

    const handleGetData = async () => {
        const response: any = await get('universities');
        setData(response);

    }

    useEffect(() => {
        handleGetData();
    }, []);

    return (
        <div>
            {/* Breadcrumb */}
            <BreadCrumb
                items={['inicio', 'UNIVERSIDADES']}
                baseURL={['dashboard', 'dashboard/universidades/']}
            />

            {/* Component Title */}
            <TitleComponent
                title={'LISTA DE UNIVERSIDADES'}
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
        </div>
    )
}

export default UniversitiesContainer;