import React, {useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import { all_routes } from "../../Router/all_routes";
import { CaptureFinger } from '../../mfs100'
import axios from 'axios';
// import { DatePicker } from "antd";
import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";
import Addunits from "../../core/modals/inventory/addunits";
import AddCategory from "../../core/modals/inventory/addcategory";
import AddBrand from "../../core/modals/addbrand";

// import { useNavigate} from 'react-router-dom'
import {
ArrowLeft,
// Calendar,
ChevronDown,
ChevronUp,
Info,
LifeBuoy,
// List,
PlusCircle,
Trash2,

} from "feather-icons-react/build/IconComponents";
import { useDispatch, useSelector } from "react-redux";
import { setToogleHeader } from "../../core/redux/action";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
// import ImageWithBasePath from "../../core/img/imagewithbasebath";




const RegisterStudents = () => {
const route = all_routes;
const dispatch = useDispatch();

const data = useSelector((state) => state.toggle_header);





// const [selectedDate, setSelectedDate] = useState(new Date());
// const handleDateChange = (date) => {
//   setSelectedDate(date);
// };
// const [selectedDate1, setSelectedDate1] = useState(new Date());
// const handleDateChange1 = (date) => {
//   setSelectedDate1(date);
// };
const renderCollapseTooltip = (props) => (
<Tooltip id="refresh-tooltip" {...props}>
Collapse
</Tooltip>
);
// const store = [
//   { value: "choose", label: "Choose" },
//   { value: "thomas", label: "Thomas" },
//   { value: "rasmussen", label: "Rasmussen" },
//   { value: "fredJohn", label: "Fred John" },
// ];


const stateoforigin = [
{ value: "State Of Origin", label: "State Of Origin" },
{ value: "Kogi", label: "Kogi" },
{ value: "Abba", label: "Abba" },
];
const lga = [
{ value: "choose", label: "Choose" },
{ value: "nike", label: "Nike" },
{ value: "bolt", label: "Bolt" },
];
// const unit = [
//   { value: "choose", label: "Choose" },
//   { value: "kg", label: "Kg" },
//   { value: "pc", label: "Pc" },
// ];
// const sellingtype = [
//   { value: "choose", label: "Choose" },
//   { value: "transactionalSelling", label: "Transactional selling" },
//   { value: "solutionSelling", label: "Solution selling" },
// ];
// const barcodesymbol = [
//   { value: "choose", label: "Choose" },
//   { value: "code34", label: "Code34" },
//   { value: "code35", label: "Code35" },
//   { value: "code36", label: "Code36" },
// ];


const [fingerimage, setFingerimge] = useState('');
const Capturefinterhere = ()=>{
const fingerdata = new CaptureFinger();
// setFingerimge(fingerdata.data.BitmapData);
setFingerimge(fingerdata.BitmapData);
console.log("finger data", fingerdata);

}

// const taxtype = [
//   { value: "exclusive", label: "Exclusive" },
//   { value: "salesTax", label: "Sales Tax" },
// ];


axios.defaults.withCredentials =true;
// const [name, setName] = useState();


useEffect(()=>{
axios.get('http://localhost:8082').
then(res =>{
if(res.data.valid){
// setName(res.data.username);
// setSchoolcode(res.data.schoolcode);

}
else{
  res.session.destroy();
window.location.href = 'signin';

}
}).
catch(err => console.log(err));
}, [])

// const discounttype1 = [
//   { value: "choose", label: "Choose" },
//   { value: "percentage", label: "Percentage" },
//   { value: "cash", label: "Cash" },
// ];
// const [isImageVisible, setIsImageVisible] = useState(true);

// const handleRemoveProduct = () => {
//   setIsImageVisible(false);
// };
// const [isImageVisible1, setIsImageVisible1] = useState(true);

// const handleRemoveProduct1 = () => {
//   setIsImageVisible1(false);
// };


// const navigate = useNavigate();


//   const [values, setValues] = useState({
//     schoolname: '',
//     schoolcode: '',
//     surname: '',
// })
// function handleSubmit(event)
// {
//   event.preventDefault();
//   axios.post('http://localhost:8081/create', values)
//   .then(res  => {
//     console.log(res);
//     // navigate('registerstudents');




//     Swal.fire({
//       title: "Success",
//       text: res.text,
//       icon: "success",
//       button: "ok",
//       timer:2000
//       });
//   }).catch(err => console.log());
// }



const [value, setValue] = useState("");
const [valueSc, setValueSc] = useState("");
const [schlname, setCountries] = useState([]);

const [scode, setStates] = useState([]);

//  const [cities, setCities] = useState([]);

const handleCountryChange = async (event) => {
const selectedCountry = event.target.value;
// setCountries(event.target.value);
setValue(event.target.value);

const response = await fetch(`http://localhost/other/fetch.php?schoolname=${selectedCountry}`);
const data = await response.json();
setStates(data);
// setCities([]);
};

const handleStateChange = async (e) => {
// const selectedState = e.target.value;

setValueSc(e.target.value);

// const data = await response.json();
// setCities(data);
};

useEffect(() => {

const fetchCountries = async () => {
const response = await fetch('http://localhost/other/fetch.php');

const data = await response.json();

setCountries(data);
};

fetchCountries();

}, []);







const [surname, setSurn]= useState('')
const [firstname, setFn]= useState('')
const [middlename,  setMidname] = useState('')
const [residentialaddress,  setRAddress] = useState('')
const [presentclass,  setPClass] = useState('')
const [yearadmitted,  setYAdmitted] = useState('')
const [accountno,  setANo] = useState('')
const [selectedOption, setGender] = useState('')
const [communityname, setCNmae] = useState('')
const [bankselect , setBankdata]  = useState('')
const [nationality , setNationality] = useState('')
const  [goccupation , setGoccupation] = useState('');
const [gcontact,  setGphone ] =useState('');
const [otherbank , setOtherbank] = useState('');
const  [otherbankaccount, setOtherbankaccount] = useState('');
const [classatadmission, setAdmissionclass] = useState('');

// const navigate = useNavigate();



function handleSubmit(event)
{
event.preventDefault();
axios.post('http://localhost:8082/create/', {value, valueSc, surname, firstname, middlename, residentialaddress, presentclass, yearadmitted, accountno, selectedOption, communityname, bankselect, nationality, gcontact, goccupation, otherbank, otherbankaccount, classatadmission})
.then(res  => {
Swal.fire({
title: "Success",
text: res.text,
icon: "success",
button: "ok",
timer:2000
});
console.log(res);
document.getElementById('frmdata').reset();
}).catch(err => console.log(err));
}
return (
<div className="page-wrapper">
<div className="content">
<div className="page-header">
<div className="add-item d-flex">
<div className="page-title">


<h4>New Student</h4>
<h6>Register new Student</h6>
</div>
</div>
<ul className="table-top-head">
<li>
<div className="page-btn">
<Link to={route.viewstudents} className="btn btn-secondary">
<ArrowLeft className="me-2" />
View Student logs
</Link>
</div>
</li>
<li>
<OverlayTrigger placement="top" overlay={renderCollapseTooltip}>
<Link
data-bs-toggle="tooltip"
data-bs-placement="top"
title="Collapse"
id="collapse-header"
className={data ? "active" : ""}
onClick={() => {
dispatch(setToogleHeader(!data));
}}
>
<ChevronUp className="feather-chevron-up" />
</Link>
</OverlayTrigger>
</li>
</ul>
</div>
{/* /add */}
<form  onSubmit={handleSubmit} id="frmdata" >
<div className="card">
<div className="card-body add-product pb-0">
<div
className="accordion-card-one accordion"
id="accordionExample"
>
<div className="accordion-item">
<div className="accordion-header" id="headingOne">
<div
className="accordion-button"
data-bs-toggle="collapse"
data-bs-target="#collapseOne"
aria-controls="collapseOne"
>
<div className="addproduct-icon">
<h5>
<Info className="add-info" />

<span>Student Information</span>
</h5>
<Link to="#">
<ChevronDown className="chevron-down-add" />
</Link>
</div>
</div>
</div>
<div
id="collapseOne"
className="accordion-collapse collapse show"
aria-labelledby="headingOne"
data-bs-parent="#accordionExample"
>
<div className="accordion-body">
<div className="row">
<div className="col-lg-6 col-sm-6 col-12">
<div className="mb-3 add-product">
<label className="form-label"> Select School Name</label>
{/* <input type="text" className="form-control" name="schoolname" required onChange={e=> setSn(e.target.value)}/> */}
<select className="form-select"  onChange={handleCountryChange}>
<option value=""> Select School</option>

{
schlname.map((schoolname, index) => (
<option key={index} value={schoolname.school_name}>{schoolname.school_name}</option>
))
}</select>

</div>
</div>



<div className="col-lg-6 col-sm-6 col-12">
<div className="mb-3 add-product">
<label className="form-label">School Code </label>
{/* <input type="text" className="form-control"  name="schoolcode" required onChange={e=> setSc(e.target.value)}/> */}

<select className="form-select" onChange={handleStateChange} required>
<option value=""> Select School Code</option>
{
scode.map((schoolcode, index) => (
<option key={index} value={schoolcode.school_code}>{schoolcode.school_code}</option>
))
}
</select>
</div>
</div>
</div>
<div className="row">
<div className="col-lg-6 col-sm-6 col-12">
<div className="mb-3 add-product">
<label className="form-label">School Name</label>
<input type="" className="form-control" value={value} readOnly  required onInput={e=> setValue(e.target.value)}   />
</div>
</div>     

<div className="col-lg-6 col-sm-6 col-12">
<div className="mb-3 add-product">
<label className="form-label">School Code</label>
<input type="" className="form-control" value={valueSc}   readOnly  required onInput={e=> setValueSc(e.target.value)}   />
</div>
</div>               
</div>
<div className="row">
<div className="col-lg-4 col-sm-6 col-12">
<div className="mb-3 add-product">
<label className="form-label">Surname</label>
<input type="text" className="form-control" name="man" required  onChange={e=> setSurn(e.target.value)}/>

</div>
</div>
<div className="col-lg-4 col-sm-6 col-12">
<div className="mb-3 add-product">
<label className="form-label">First Name</label>
<input type="text" className="form-control"  required onChange={e=> setFn(e.target.value)}   />
</div>
</div>
<div className="col-lg-4 col-sm-6 col-12">
<div className="input-blocks add-product list">
<label>Middlename</label>
<input
type="text"
className="form-control list"
placeholder="Enter middlename(optional)"  onChange={e=> setMidname(e.target.value)}
/>
<Link

className="btn btn-primaryadd"
>
Optional
</Link>
</div>
</div>
</div>
<div className="addservice-info">
<div className="row">
<div className="col-lg-4 col-sm-6 col-12">
<div className="mb-3 add-product">
<div className="add-newplus">
<label className="form-label">Gender</label>

</div>

<select className="form-control" onChange={e => setGender(e.target.value)}

>
<option value="Male">Male</option>
<option value="Female">Female</option>
</select>

</div>
</div>
<div className="col-lg-4 col-sm-6 col-12">
<div className="mb-3 add-product">
<label className="form-label">Nationality</label>
<select className="form-select" onChange={e=> setNationality(e.target.value)}

>
<option value=""> select nationality</option>
<option value="Nigerian">Nigerian</option>
<option value="Other">Other</option>

</select>
</div>
</div>
<div className="col-lg-4 col-sm-6 col-12">
<div className="mb-3 add-product">
<label className="form-label">
State of Origin
</label>
<Select
className="select"
options={stateoforigin}
placeholder="SELECT STATE OF ORIGIN"
name="stateoforigin"  

/>
</div>
</div>
</div>
</div>
<div className="add-product-new">
<div className="row">
<div className="col-lg-4 col-sm-6 col-12">
<div className="mb-3 add-product">
<div className="add-newplus">
<label className="form-label">LGA</label>

</div>
<Select
className="select" name="lga"
options={lga}
placeholder="Choose"


/>
</div>
</div>
<div className="col-lg-8 col-sm-6 col-12">
<div className="mb-3 add-product">
<div className="add-newplus">
<label className="form-label">Name of Community of Residence</label>

</div>
<input
className="form-control list"

placeholder="ENTER NAME OF COMMUNITY OF RESIDENCE"  onChange={e=> setCNmae(e.target.value)}
/>
</div>
</div>

</div>

</div>

<div className="row">
<div className="col-lg-4 col-sm-6 col-12">
<div className="mb-3 add-product">
<div className="add-newplus">
<label className="form-label">Guardian Phone</label>

</div>
<input
className="form-control list"

placeholder="Guardian Phone"  onChange={e=> setGphone(e.target.value)}
/>
</div>
</div>

<div className="col-lg-3 col-sm-6 col-12">
<div className="mb-3 add-product">
<div className="add-newplus">
<label className="form-label">Guardian Occupation</label>

</div>
<input
className="form-control list"

placeholder="Guardian Occupation"  onChange={e=> setGoccupation(e.target.value)}
/>
</div>
</div>
<div className="col-lg-5 col-sm-6 col-12">
<div className="mb-3 add-product">
<label className="form-label">
Residential Address
</label>
<input
type="text"
className="form-control list"
placeholder="Choose"  onChange={e=> setRAddress(e.target.value)}
/>
</div>
</div>
</div>
<div className="row">
<div className="col-lg-4 col-sm-6 col-12">
<div className="mb-3 add-product">
<label className="form-label">
Class At Admission
</label>
<select className="form-select" onChange={e=> setAdmissionclass(e.target.value)} required>
<option value="">Select Class</option>
<option value="JHS 1">JHS 1</option>
<option value="JHS 2">JHS 2</option>
<option value="JHS 3">JHS 3</option>
</select>

</div>
</div>
<div className="col-lg-4 col-sm-6 col-12">
<div className="input-blocks add-product list">
<label>Present Class</label>

<select className="form-select" onChange={e=> setPClass(e.target.value)}>
<option value="">Select Class</option>
<option value="JHS 1">JHS 1</option>
<option value="JHS 2">JHS 2</option>
<option value="JHS 3">JHS 3</option>
</select>


</div>
</div>

<div className="col-lg-4 col-sm-6 col-12">
<div className="input-blocks add-product list">
<label>Year Admitted</label>
<input
type="text"
className="form-control list"
placeholder="Enter Present class"  onChange={e=> setYAdmitted(e.target.value)}
/>

</div>
</div>
</div>
{/* Editor */}

{/* /Editor */}
</div>
</div>
</div>
</div>
<div
className="accordion-card-one accordion"
id="accordionExample2"
>
<div className="accordion-item">
<div className="accordion-header" id="headingTwo">
<div
className="accordion-button"
data-bs-toggle="collapse"
data-bs-target="#collapseTwo"
aria-controls="collapseTwo"
>
<div className="text-editor add-list">
<div className="addproduct-icon list icon">
<h5>
<LifeBuoy className="add-info" />
<span>Bank Account &amp; Details</span>
</h5>
<Link to="#">
<ChevronDown className="chevron-down-add" />
</Link>
</div>
</div>
</div>
</div>
<div
id="collapseTwo"
className="accordion-collapse collapse show"
aria-labelledby="headingTwo"
data-bs-parent="#accordionExample2"
>
<div className="accordion-body">

<div className="tab-content" id="pills-tabContent">
<div
className="tab-pane fade show active"
id="pills-home"
role="tabpanel"
aria-labelledby="pills-home-tab"
>
<div className="row">
<div className="col-lg-6 col-sm-6 col-12">
<div className="input-blocks add-product">
<label>Select Bank</label>
<select className="form-select" onChange={e=> setBankdata(e.target.value)} >
<option value="">Select Bank</option>
<option value="Access Bank Plc">Access Bank Plc</option>
<option value="Citibank Nigeria Limited">Citibank Nigeria Limited</option>
<option value="Ecobank Nigeria Plc">Ecobank Nigeria Plc</option>
<option value="First Bank Plc">First Bank Plc</option>
<option value="First City Monument Bank Plc">First City Monument Bank Plc</option>
<option value="Fidelity Bank Plc">Fidelity Bank Plc</option>
<option value="Globus Bank Limited">Globus Bank Limited</option>
<option value="Guaranty Trust Bank Plc">Guaranty Trust Bank Plc</option>
<option value="Heritage Banking Company Ltd">Heritage Banking Company Ltd</option>
<option value="Keystone Bank Limited">Keystone Bank Limited</option>
<option value="Parallex Bank Ltd">Parallex Bank Ltd</option>
<option value=" Polaris Bank Plc"> Polaris Bank Plc</option>
<option value="Premium Trust Bank">Premium Trust Bank</option>
<option value="Providus Bank">Providus Bank</option>
<option value="Stanbic IBTC Bank Plc">Stanbic IBTC Bank Plc</option>
<option value="Standard Chartered Bank Nigeria ltd">Standard Chartered Bank Nigeria ltd</option>
<option value="Sterling Bank Plc">Sterling Bank Plc</option>
<option value="Sun Trust Bank Nigeria Limited">Sun Trust Bank Nigeria Limited</option>
<option value="Titan Trust Bank Ltd">Titan Trust Bank Ltd</option>
<option value="Union Bank of Nigeria Plc">Union Bank of Nigeria Plc</option>
<option value="United Bank for Africa Plc ">United Bank for Africa Plc </option>
<option value="Wema Bank Plc">Wema Bank Plc</option>
<option value="Zenith Bank Plc">Zenith Bank Plc</option>
<option value="Signature Bank Ltd">Signature Bank Ltd</option>
<option value="Optimus Bank">Optimus Bank</option>
<option value=" Jaiz Bank Plc"> Jaiz Bank Plc</option>
<option value="Taj Bank">Taj Bank</option>
<option value="Lotus Bank">Lotus Bank</option>


</select>
</div>
</div>

<div className="col-lg-6 col-sm-6 col-12">
<div className="input-blocks add-product">
<label>Account No.</label>
<input type="text" className="form-control" placeholder="Enter Account Number"  onChange={e=> setANo(e.target.value)} />
</div>
</div>


</div>
<div className="row">



</div>
<div
className="accordion-card-one accordion"
id="accordionExample3"
>
<div className="accordion-item">
<div
className="accordion-header"
id="headingThree"
>
<div
className="accordion-button"
data-bs-toggle="collapse"
data-bs-target="#collapseThree"
aria-controls="collapseThree"
>
<div className="addproduct-icon list">
<h5>
<i
data-feather="image"
className="add-info"
/>
<span>Not-in-list Bank </span>
</h5>
<Link to="#">
<ChevronDown className="chevron-down-add" />
</Link>
</div>
</div>
</div>
<div
id="collapseThree"
className="accordion-collapse collapse show"
aria-labelledby="headingThree"
data-bs-parent="#accordionExample3"
>
<div className="accordion-body">
<div className="row">
<div className="col-lg-6 col-sm-6 col-12">
<div className="input-blocks add-product">
<label className="text-danger">Banks Not in the list(Enter here) </label>
<input type="text" className="form-control" placeholder="Enter Bank Name " onChange={e=> setOtherbank(e.target.value)} />
</div>
</div>

<div className="col-lg-6 col-sm-6 col-12">
<div className="input-blocks add-product">
<label>Account Number</label>
<input type="text" placeholder="Enter Account Number" onChange={e=> setOtherbankaccount(e.target.value)} />
</div>
</div>


</div>

<div className="row">
<div className="col-lg-6 col-sm-6 col-12">
<div className="input-blocks add-product">
<label className="text-danger">Banks Not in the list(Enter here) </label>

<div>
<button type="button" onClick={Capturefinterhere}>Capture Finger </button>
<div> <img src={`data:image/png;base64,${fingerimage}`} alt=""/></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div
className="tab-pane fade"
id="pills-profile"
role="tabpanel"
aria-labelledby="pills-profile-tab"
>
<div className="row select-color-add">
<div className="col-lg-6 col-sm-6 col-12">
<div className="input-blocks add-product">
<label>Variant Attribute</label>
<div className="row">
<div className="col-lg-10 col-sm-10 col-10">
<select
className="form-control variant-select select-option"
id="colorSelect"
>
<option>Choose</option>
<option>Color</option>
<option value="red">Red</option>
<option value="black">Black</option>
</select>
</div>
<div className="col-lg-2 col-sm-2 col-2 ps-0">
<div className="add-icon tab">
<Link
className="btn btn-filter"
data-bs-toggle="modal"
data-bs-target="#add-units"
>
<PlusCircle className="feather feather-plus-circle" />
</Link>
</div>
</div>
</div>
</div>
<div
className="selected-hide-color"
id="input-show"
>
<div className="row align-items-center">
<div className="col-sm-10">
<div className="input-blocks">
<input
className="input-tags form-control"
id="inputBox"
type="text"
data-role="tagsinput"
name="specialist"
defaultValue="red, black"
/>
</div>
</div>
<div className="col-lg-2">
<div className="input-blocks ">
<Link to="#" className="remove-color">
<Trash2 />
</Link>
</div>
</div>
</div>
</div>
</div>
</div>
<div
className="modal-body-table variant-table"
id="variant-table"
>
<div className="table-responsive">
<table className="table">
<thead>
<tr>
<th>Variantion</th>
<th>Variant Value</th>
<th>SKU</th>
<th>Quantity</th>
<th>Price</th>
<th className="no-sort">Action</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<div className="add-product">
<input
type="text"
className="form-control"
defaultValue="color"
/>
</div>
</td>
<td>
<div className="add-product">
<input
type="text"
className="form-control"
defaultValue="red"
/>
</div>
</td>
<td>
<div className="add-product">
<input
type="text"
className="form-control"
defaultValue={1234}
/>
</div>
</td>
<td>
<div className="product-quantity">
<span className="quantity-btn">
<i
data-feather="minus-circle"
className="feather-search"
/>
</span>
<input
type="text"
className="quntity-input"
defaultValue={2}
/>
<span className="quantity-btn">
+
<i
data-feather="plus-circle"
className="plus-circle"
/>
</span>
</div>
</td>
<td>
<div className="add-product">
<input
type="text"
className="form-control"
defaultValue={50000}
/>
</div>
</td>
<td className="action-table-data">
<div className="edit-delete-action">
<div className="input-block add-lists">
<label className="checkboxs">
<input
type="checkbox"
defaultChecked=""
/>
<span className="checkmarks" />
</label>
</div>
<Link
className="me-2 p-2"
to="#"
data-bs-toggle="modal"
data-bs-target="#add-variation"
>
<i
data-feather="plus"
className="feather-edit"
/>
</Link>
<Link
className="confirm-text p-2"
to="#"
>
<i
data-feather="trash-2"
className="feather-trash-2"
/>
</Link>
</div>
</td>
</tr>
<tr>
<td>
<div className="add-product">
<input
type="text"
className="form-control"
defaultValue="color"
/>
</div>
</td>
<td>
<div className="add-product">
<input
type="text"
className="form-control"
defaultValue="black"
/>
</div>
</td>
<td>
<div className="add-product">
<input
type="text"
className="form-control"
defaultValue={2345}
/>
</div>
</td>
<td>
<div className="product-quantity">
<span className="quantity-btn">
<i
data-feather="minus-circle"
className="feather-search"
/>
</span>
<input
type="text"
className="quntity-input"
defaultValue={3}
/>
<span className="quantity-btn">
+
<i
data-feather="plus-circle"
className="plus-circle"
/>
</span>
</div>
</td>
<td>
<div className="add-product">
<input
type="text"
className="form-control"
defaultValue={50000}
/>
</div>
</td>
<td className="action-table-data">
<div className="edit-delete-action">
<div className="input-block add-lists">
<label className="checkboxs">
<input
type="checkbox"
defaultChecked=""
/>
<span className="checkmarks" />
</label>
</div>
<Link
className="me-2 p-2"
to="#"
data-bs-toggle="modal"
data-bs-target="#edit-units"
>
<i
data-feather="plus"
className="feather-edit"
/>
</Link>
<Link
className="confirm-text p-2"
to="#"
>
<i
data-feather="trash-2"
className="feather-trash-2"
/>
</Link>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div
className="accordion-card-one accordion"
id="accordionExample4"
>
<div className="accordion-item">
<div className="accordion-header" id="headingFour">
<div
className="accordion-button"
data-bs-toggle="collapse"
data-bs-target="#collapseFour"
aria-controls="collapseFour"
>
{/* <div className="text-editor add-list">
<div className="addproduct-icon list">
<h5>
<List className="add-info" />
<span>Custom Fields</span>
</h5>
<Link to="#">
<ChevronDown className="chevron-down-add" />
</Link>
</div>
</div> */}
</div>
</div>
{/* <div
id="collapseFour"
className="accordion-collapse collapse show"
aria-labelledby="headingFour"
data-bs-parent="#accordionExample4"
>
<div className="accordion-body">
<div className="text-editor add-list add">
<div className="custom-filed">
<div className="input-block add-lists">
<label className="checkboxs">
<input type="checkbox" />
<span className="checkmarks" />
Warranties
</label>
<label className="checkboxs">
<input type="checkbox" />
<span className="checkmarks" />
Manufacturer
</label>
<label className="checkboxs">
<input type="checkbox" />
<span className="checkmarks" />
Expiry
</label>
</div>
</div>
<div className="row">
<div className="col-lg-4 col-sm-6 col-12">
<div className="input-blocks add-product">
<label>Discount Type</label>
<Select
className="select"
options={discounttype1}
placeholder="Choose"
/>
</div>
</div>
</div>
<div className="row">
<div className="col-lg-4 col-sm-6 col-12">
<div className="input-blocks add-product">
<label>Quantity Alert</label>
<input type="text" className="form-control" />
</div>
</div>
<div className="col-lg-4 col-sm-6 col-12">
<div className="input-blocks">
<label>Manufactured Date</label>
<div className="input-groupicon calender-input">
<Calendar className="info-img" />
<DatePicker
selected={selectedDate}
onChange={handleDateChange}
type="date"
className="datetimepicker"
dateFormat="dd-MM-yyyy"
placeholder="Choose Date"
/>
</div>
</div>
</div>
<div className="col-lg-4 col-sm-6 col-12">
<div className="input-blocks">
<label>Expiry On</label>
<div className="input-groupicon calender-input">
<Calendar className="info-img" />
<DatePicker
selected={selectedDate1}
onChange={handleDateChange1}
type="date"
className="datetimepicker"
dateFormat="dd-MM-yyyy"
placeholder="Choose Date"
/>
</div>
</div>
</div>
</div>
</div>
</div>
</div> */}
</div>
</div>
</div>
</div>
<div className="col-lg-12">
<div className="btn-addproduct mb-4">

<button type="submit" className="btn btn-warning me-2">
REGISTER STUDENT
</button>
</div>
</div>
</form>
{/* /add */}
</div>
<Addunits />
<AddCategory />
<AddBrand />
</div>
);
};

export default RegisterStudents;
