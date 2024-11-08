import React, { useEffect, useState  } from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ImageWithBasePath from '../../core/img/imagewithbasebath';
import {  ChevronUp, Mail, RotateCcw, Sliders } from 'feather-icons-react/build/IconComponents';
import { useDispatch, useSelector } from 'react-redux';
import { setToogleHeader } from '../../core/redux/action';
import Select from 'react-select';
import { Filter } from 'react-feather';
import EditLowStock from '../../core/modals/inventory/editlowstock';
import axios from 'axios'
// import withReactContent from 'sweetalert2-react-content';
// import Swal from 'sweetalert2';
// import Table from '../../core/pagination/datatable'
// import { all_routes } from "../../Router/all_routes";
import FormTable from './FormTable';
import WebCam from './WebCam';
// import BioComponent from './BioComponent';
// import { useReactToPrint } from "react-to-print";
// import Datatable from '../../core/pagination/datatable';
import DataTable from 'react-data-table-component';
// const route = all_routes;
const ViewStudents = () => {

const dispatch = useDispatch();
const data = useSelector((state) => state.toggle_header);
// const dataSource = useSelector((state) => state.lowstock_data);
const [isFilterVisible, setIsFilterVisible] = useState(false);
const toggleFilterVisibility = () => {
setIsFilterVisible((prevVisibility) => !prevVisibility);
};

const oldandlatestvalue = [
{ value: 'date', label: 'Sort by Date' },
{ value: 'newest', label: 'Newest' },
{ value: 'oldest', label: 'Oldest' },
];

// const category = [
// { value: 'chooseCategory', label: 'Choose Category' },
// { value: 'laptop', label: 'Laptop' },
// { value: 'shoe', label: 'Shoe' },
// { value: 'speaker', label: 'Speaker' },
// ];

const renderTooltip = (props) => (
<Tooltip id="pdf-tooltip" {...props}>
Pdf
</Tooltip>
);
const renderExcelTooltip = (props) => (
<Tooltip id="excel-tooltip" {...props}>
Excel
</Tooltip>
);
const renderPrinterTooltip = (props) => (
<Tooltip id="printer-tooltip" {...props}>
Printer
</Tooltip>
);
const renderRefreshTooltip = (props) => (
<Tooltip id="refresh-tooltip" {...props}>
Refresh
</Tooltip>
);
const renderCollapseTooltip = (props) => (
<Tooltip id="refresh-tooltip" {...props}>
Collapse
</Tooltip>
);


const columns = [
    // <columns header="Index" body={(_, { rowIndex }) => rowIndex + 1} />,
    
    {
        
        name:'#', 
        selector: row => row.id ++,
    },
  
   
    {
       
        name:'schoolname', 
        selector: row => row.schoolname,
    },
    {
       
        name:'SchoolCode', 
        selector: row => row.schoolcode,
        sortable:true 
    },
    {
       
        name:'StudentName', 
        selector: row => row.firstname + " " + row.surname,
    },

    {
       
        name:'Gender', 
        selector: row => row.gender,
    },
    {
       
        name:'P. Class', 
        selector: row => row.presentclass,
    },
    {
        name: "Actions",
        button: true,
        cell: (row) => (

          <>
           <Link className="me-2 p-2" to="#" data-bs-toggle="modal" onClick={()=>handleEdit(row)}   data-bs-target="#add-units-brand">
            <i data-feather="edit" className="fa fa-pencil fa-2xl"></i>
        </Link>
        <Link className="me-2 p-2" to="#" data-bs-toggle="modal"   data-bs-target="#add-fing-modal">
                            <i  className="fa fa-fingerprint fa-2xl"></i>
                        </Link>
                        <Link className="me-2 p-2" to="#" data-bs-toggle="modal"   data-bs-target="#add-image-modal">
                            <i  className="fa fa-camera fa-2xl"></i>
                        </Link>
          <button onClick={()=>handleDelete(row.id)} className='btn mx-2 btn-danger'><i className='fa fa-trash'></i></button>
        
          </>
        ),
    }
    
]
// const MySwal = withReactContent(Swal);

// const showConfirmationAlert = () => {
// MySwal.fire({
// title: 'Are you sure?',
// text: 'You won\'t be able to revert this!',
// showCancelButton: true,
// confirmButtonColor: '#00ff00',
// confirmButtonText: 'Yes, delete it!',
// cancelButtonColor: '#ff0000',
// cancelButtonText: 'Cancel',
// }).then((result) => {
// if (result.isConfirmed) {

// MySwal.fire({
// title: 'Deleted!',
// text: 'Your file has been deleted.',
// className: "btn btn-success",
// confirmButtonText: 'OK',
// customClass: {
// confirmButton: 'btn btn-success',
// },
// });
// } else {
// MySwal.close();
// }

// });
// };



// const [student, setStudent] = useState([])
// useEffect(()=>{
//     axios.get('http://localhost:8081/').then(res =>setStudent(res.data)).catch(err => console.log(err));

// }, [])


    
const handleDelete = (id) =>{
 
     axios.delete('http://localhost:8082/del/'+id)
    .then(res =>{
        fetchData(res);
    })
     .catch(err => console.log(err))
    
   
        }



    const [userData,  setUSerData ] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const result = await axios("http://localhost:8082/studentsdata");
            console.log(result.data);
            setUSerData(result.data)
        } catch (err) {
            console.log("somthing Wrong");
        }
    }


    const [globalFilterText, setGlobalFilterText] = useState('');
    const [columnFilterText, setColumnFilterText] = useState({}); // Individual column filter texts
    // const [datat, setData] = useState([]);

    const handleGlobalFilter = (e) => {
        const value = e.target.value || '';
        setGlobalFilterText(value);
      };
    
      const handleColumnFilter = (colName, value) => {
        setColumnFilterText({ ...columnFilterText, [colName]: value });
      };
    // useEffect(() => {
    //     // Fetch data using Axios
    //     axios
    //       .get('http://localhost:8082/studentsdata')
    //       .then((response) => {
    //         setData(response.data);
    //         console.log(data);
    //       })
    //       .catch((error) => {
    //         console.error('Error fetching data:', error);
    //       });
    //   }, []);
  

      const filteredData = userData.filter((row) => {
        return Object.keys(columnFilterText).every((colName) =>
          row[colName].toString().toLowerCase().includes(columnFilterText[colName].toLowerCase())
        ) && Object.values(row).some((value) =>
          value.toString().toLowerCase().includes(globalFilterText.toLowerCase())
        );
      });

      const customStyles ={
        headCells: { 
            style: {
            backgroundColor:"black",
            color: "white",
            fontSize:"17px",
            fontWeight:"bolder"
            }
        }

      }
      

    
    // async function editStudent(students)
    // {
    //  setName(user.schoolname);
  
     
    // }
   

    // function handleDelete(id){
    //     axios.delete('http://localhost:8082/deletedat/'+id)
    //     .then(()=>{
    //         fetchData();
    //         // setDeleted(true)
    //     })
    //     .catch((err)=> console.log(err))
    // }


    
  

    
    const [formDataEdit, setFormDataEdit] = useState({
        schoolname :"",
        schoolcode :"",
        surname :"",
        id:""
    })

  

    // const handleUpdate = async(id) => {


    // }
//     const handleEditChange = async(e)=> {
// const {value, name} = e.target
// setFormDataEdit((preve)=>{
//     return{
      
      

//     }

// })
//     }

    const handleEdit = (data)=> {
        setFormDataEdit(data)
    
    }




return (
<div>
<div className="page-wrapper">
<div className="content">
<div className="page-header">
<div className="page-title me-auto">
<h4>Student Logs</h4>
<h6>Manage  Student Logs</h6>
</div>
<ul className="table-top-head">
<li>
<div className="status-toggle d-flex justify-content-between align-items-center">
<input type="checkbox" id="user2" className="check" defaultChecked="true" />
<label htmlFor="user2" className="checktoggle">
checkbox
</label>
Notify
</div>
</li>
<li>
<Link
to=""
className="btn btn-secondary"
data-bs-toggle="modal"
data-bs-target="#send-email"
>

<Mail className="feather-mail" />
Send Email
</Link>
</li>
<li>
<OverlayTrigger placement="top" overlay={renderTooltip}>
<Link >
<ImageWithBasePath src="assets/img/icons/pdf.svg" alt="img" />
</Link>
</OverlayTrigger>
</li>
<li>
<OverlayTrigger placement="top" overlay={renderExcelTooltip}>
<Link data-bs-toggle="tooltip" data-bs-placement="top">
<ImageWithBasePath src="assets/img/icons/excel.svg" alt="img" />
</Link>
</OverlayTrigger>
</li>
<li>
<OverlayTrigger placement="top" overlay={renderPrinterTooltip}>

<Link data-bs-toggle="tooltip" data-bs-placement="top">
<i data-feather="printer" className="feather-printer" />
</Link>
</OverlayTrigger>
</li>
<li>
<OverlayTrigger placement="top" overlay={renderRefreshTooltip}>

<Link data-bs-toggle="tooltip" data-bs-placement="top">
<RotateCcw />
</Link>
</OverlayTrigger>
</li>
<li>
<OverlayTrigger placement="top" overlay={renderCollapseTooltip}>

<Link
data-bs-toggle="tooltip"
data-bs-placement="top"
id="collapse-header"
className={data ? "active" : ""}
onClick={() => { dispatch(setToogleHeader(!data)) }}
>
<ChevronUp />
</Link>
</OverlayTrigger>
</li>
</ul>
</div>
<div className="table-tab">
<ul className="nav nav-pills" id="pills-tab" role="tablist">
<li className="nav-item" role="presentation">
<button
className="nav-link active"
id="pills-home-tab"
data-bs-toggle="pill"
data-bs-target="#pills-home"
type="button"
role="tab"
aria-controls="pills-home"
aria-selected="true"
>
Student Logs
</button>
</li>

</ul>
<div className="tab-content" id="pills-tabContent">
<div
className="tab-pane fade show active"
id="pills-home"
role="tabpanel"
aria-labelledby="pills-home-tab"
>
{/* /product list */}
<div className="card table-list-card">
<div className="card-body">
<div className="table-top">
<div className="search-set">
<div className="search-input">
<input
type="text"
placeholder="Searchddd"
className="form-control form-control-sm formsearch"  onChange={handleGlobalFilter}
value={globalFilterText}
/>
<Link to className="btn btn-searchset">
<i data-feather="search" className="feather-search" />
</Link>
</div>
</div>
<div className="search-path">
<Link className={`btn btn-filter ${isFilterVisible ? "setclose" : ""}`} id="filter_search">
<Filter
className="filter-icon"
onClick={toggleFilterVisibility}
/>
<span onClick={toggleFilterVisibility}>
<ImageWithBasePath src="assets/img/icons/closes.svg" alt="img" />
</span>
</Link>
</div>
<div className="form-sort">
<Sliders className="info-img" />
<Select
className="select"
options={oldandlatestvalue}
placeholder="Newest"
/>
</div>
</div>
{/* /Filter */}

{/* /Filter */}
<div className="table-responsive">
<div  style={{width:'100%'}}>
{/* <table className="table table-bordered table-striped datanew" id={'example'}>
                        <thead>
                        <tr>
                        <th>#</th>
                        <th>School Name</th>
                        <th>School Code</th>
                        <th>Student Name</th>
                        <th>Acion</th>
                        </tr>
                        </thead>
                        <tbody>
                {
                    userData.map((user, i) => {
                        return (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{user.schoolname} </td>
                                <td>{user.schoolcode} </td>
                                <td>{user.username} {user.firstname} </td>

                                <td>

                        
                        
                <Link className="me-2 p-2" to="#" data-bs-toggle="modal"   data-bs-target="#add-image-modal">
                            <i  className="fa fa-camera fa-2xl"></i>
                        </Link>
                        <Link className="me-2 p-2" to="#" data-bs-toggle="modal"   data-bs-target="#add-fing-modal">
                            <i  className="fa fa-fingerprint fa-2xl"></i>
                        </Link>
                            
                                
                               
                              
        </td>
                            </tr>
                        )
                    })
                }
  
            </tbody>
                        </table>   */}
                        <table onKeyDown={handleColumnFilter}></table>
                        <DataTable   
        columns={columns}
        data={filteredData}
        pagination
        highlightOnHover
        responsive
        customStyles={customStyles}
       
      />
      </div>
</div>
</div>
</div>
{/* /product list */}
</div>
<div
className="tab-pane fade"
id="pills-profile"
role="tabpanel"
aria-labelledby="pills-profile-tab"
>
{/* /product list */}
<div className="card table-list-card">
<div className="card-body">
<div className="table-top">
<div className="search-set">
<div className="search-input">
<input
type="text"
placeholder="Search"
className="form-control form-control-sm formsearch"
/>
<Link to className="btn btn-searchset">
<i data-feather="search" className="feather-search" />
</Link>
</div>
</div>
<div className="search-path">
<Link className={`btn btn-filter ${isFilterVisible ? "setclose" : ""}`} id="filter_search">
<Filter
className="filter-icon"
onClick={toggleFilterVisibility}
/>
<span onClick={toggleFilterVisibility}>
<ImageWithBasePath src="assets/img/icons/closes.svg" alt="img" />
</span>
</Link>
</div>
<div className="form-sort">
<Sliders className="info-img" />
<Select
className="select"
options={oldandlatestvalue}
placeholder="Newest"
/>
</div>
</div>
{/* /Filter */}
<div className="card" id="filter_inputs1">
<div className="card-body pb-0">
<div className="row">
<div className="col-lg-3 col-sm-6 col-12">
<div className="input-blocks">
<i data-feather="box" className="info-img" />
<select className="select">
<option>Choose Product</option>
<option>Lenovo 3rd Generation </option>
<option>Nike Jordan</option>
<option>Amazon Echo Dot </option>
</select>
</div>
</div>
<div className="col-lg-3 col-sm-6 col-12">
<div className="input-blocks">
<i data-feather="zap" className="info-img" />
<select className="select">
<option>Choose Category</option>
<option>Laptop</option>
<option>Shoe</option>
<option>Speaker</option>
</select>
</div>
</div>
<div className="col-lg-3 col-sm-6 col-12">
<div className="input-blocks">
<i data-feather="archive" className="info-img" />
<select className="select">
<option>Choose Warehouse</option>
<option>Lavish Warehouse </option>
<option>Lobar Handy </option>
<option>Traditional Warehouse </option>
</select>
</div>
</div>
<div className="col-lg-3 col-sm-6 col-12 ms-auto">
<div className="input-blocks">
<Link className="btn btn-filters ms-auto">
{" "}
<i
data-feather="search"
className="feather-search"
/>{" "}
Search{" "}
</Link>
</div>
</div>
</div>
</div>
</div>
{/* /Filter */}

</div>
</div>
{/* /product list */}
</div>
</div>
</div>
</div>
</div>
<EditLowStock />


    <FormTable 
// handleSubmit ={handleUpdate}
// handleChange = {handleEditChange} 

rest ={formDataEdit}

/>

<WebCam/>
{/* <BioComponent/> */}





</div>
)
}

export default ViewStudents
