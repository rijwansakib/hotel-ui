import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './SpecialStaff.css'

const SpecialStaff = () => {
    return (
        <div className='special__staff__container'>
            <h2 className='text-center my-5'>OUR SPECIAL STAFF</h2>

            <Row className="staffs">
                <Col md={3} className="staff">
                    <img src="https://thumbs.dreamstime.com/b/diverse-hotel-staff-diverse-hotel-staff-hospitality-employee-group-212470874.jpg" alt="" />
                </Col>
                <Col md={3} className="staff">
                    <img src="https://thumbs.dreamstime.com/b/employees-restaurant-hotel-protective-masks-end-quarantine-manager-his-staff-terrace-interaction-chef-194687868.jpg" alt="" />
                </Col>
                <Col md={3} className="staff">
                    <img src="https://thumbs.dreamstime.com/z/employees-restaurant-hotel-protective-masks-end-quarantine-manager-his-staff-terrace-interaction-chef-194687596.jpg" alt="" />
                </Col>
                <Col md={3} className="staff">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlCUZkHxrlxuuvrys8HTxJJ49kwXp2Ulcoew&usqp=CAU" alt="" />
                </Col>
            </Row>
        </div>
    );
};

export default SpecialStaff;