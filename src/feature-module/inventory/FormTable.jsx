import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../Router/all_routes";

import {

  // Calendar,
  ChevronDown,

  
} from "feather-icons-react/build/IconComponents";

function FormTable({ rest}) {
  const route = all_routes;
  return (
    <div>
        
        <form >

<div className="modal fade" id="add-units-brand">
<div className="modal-dialog modal-dialog-centered custom-modal-two modal-lg">
  <div className="modal-content">
    <div className="page-wrapper-new p-0">
      <div className="content">
        <div className="modal-header border-0 custom-modal-header">
          <div className="page-title">
            <h4>EDIT STUDENT FORM</h4>
          </div>
          <button
            type="button"
            className="close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body custom-modal-body">
          <div className="mb-3">
            <label className="form-label">Schoolname</label>
            <input type="text" className="form-control"    value={rest.schoolname}/>
          </div>

            <input type="hidden" className="form-control"  value={rest.id}/>
    


          <div className="row">
                        <div className="col-lg-4 col-sm-6 col-12">
                          <div className="mb-3 add-product">
                            <label className="form-label">Surname</label>
                            <input type="text" className="form-control" name="man" defaultValue={rest.surname}  />
                            
                          </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-12">
                          <div className="mb-3 add-product">
                            <label className="form-label">First Name</label>
                            <input type="text" className="form-control"  required   defaultValue={rest.firstname}  />
                          </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-12">
                          <div className="input-blocks add-product list">
                            <label>Middlename</label>
                            <input
                              type="text"
                              className="form-control list"
                              placeholder="Enter middlename(optional)"   defaultValue={rest.middlename}
                            />
                          
                          </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-12">
                            <div className="mb-3 add-product">
                              <div className="add-newplus">
                                <label className="form-label">Gender</label>
                              
                              </div>

                              <select className="form-control" >
                                  <option value={rest.gender}>{rest.gender}</option>
  <option value="Male">Male</option>
  <option value="Female">Other option</option>
</select>
                         
                            </div>
                          </div>


                          <div className="col-lg-4 col-sm-6 col-12">
                            <div className="mb-3 add-product">
                              <label className="form-label">Nationality</label>
              <select className="form-select"  >
              <option value={rest.nationality}>{rest.nationality}</option>
                      
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
                              <select className="form-select"
                              
                              placeholder="SELECT STATE OF ORIGIN"
                              name="stateoforigin">

                              </select>
                                  
                              
                            
                            </div>
                          </div>


                          <div className="add-product-new">
                        <div className="row">
                          <div className="col-lg-4 col-sm-6 col-12">
                            <div className="mb-3 add-product">
                              <div className="add-newplus">
                                <label className="form-label">LGA</label>
                                <Link
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#add-units-brand"
                                >
                               
                                </Link>
                              </div>
                              <select
                               className="form-select" name="lga"
                            
                                placeholder="Choose"
                                
                                 
                           ></select>
                            </div>
                          </div>
                          <div className="col-lg-8 col-sm-6 col-12">
                            <div className="mb-3 add-product">
                              <div className="add-newplus">
                                <label className="form-label">Name of Community of Residence</label>
                                <Link
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#add-unit"
                                >
                                  
                                </Link>
                              </div>
                              <input
                                className="form-control list"
                              
                                placeholder="ENTER NAME OF COMMUNITY OF RESIDENCE" 
                              />
                            </div>
                          </div>
                         
                        </div>
                      </div>


                      <div className="row">
                        <div className="col-lg-6 col-sm-6 col-12">
                          <div className="mb-3 add-product">
                            <label className="form-label">
                            Residential Address
                            </label>
                            <input
                              type="text"
                              className="form-control list"
                              placeholder="Choose"  
                            />
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                          <div className="input-blocks add-product list">
                            <label>Present Class</label>
                            <input
                              type="text"
                              className="form-control list"
                              placeholder="Enter Present Class" 
                            />
                          
                          </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-12">
                          <div className="input-blocks add-product list">
                            <label>Year Admitted</label>
                            <input
                              type="text"
                              className="form-control list"
                              placeholder="Enter Present Class" 
                            />
                          
                          </div>
                        </div>
                      </div>


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
                            
                            <span>Bank Account &amp; Details</span>
                          </h5>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                  
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
                              <select className="form-select"  >
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
                                <input type="text" className="form-control" placeholder="Enter Account Number"   />
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
                                <input type="text" className="form-control" placeholder="Enter Bank Name " />
                              </div>
                            </div>
                       
                            <div className="col-lg-6 col-sm-6 col-12">
                              <div className="input-blocks add-product">
                                <label>Account Number</label>
                                <input type="text" placeholder="Enter Account Number" />
                              </div>
                            </div>


                            </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                      </div>
          <div className="modal-footer-btn">
            <Link
              to="#"
              className="btn btn-cancel me-2"
              data-bs-dismiss="modal"
            >
              Cancel
            </Link>
            <Link to={route.addproduct} className="btn btn-submit">
              Submit
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</form>
</div>

  )
}






export default FormTable




