import React from "react"
import { StyledTableContainer } from '../Table/StyledTableElements'
import { BsCheck, BsX } from 'react-icons/bs'
import HighlightsInformation from "../HighlightsInformation"


const GeneralInformation = ({ dataToDisplay }) => {

    const getCompanySecondaryNames = (names) => {
        // Current mocked data has valid from and to dates normally i would check if the name is still valid
        return names.map((name, index) => (index == names.length - 1) ? `${name.name}` : `${name.name}, `)
    }

    const renderResults = () => {
        return dataToDisplay?.map((data, index) => {
            let result = (
                <>
                    <StyledTableContainer>
                        <table class="styled-table">
                            <thead>
                                <tr>
                                    <th key={index}>Company Name</th>
                                    <th key={index}>Registered for VAT</th>
                                    <th key={index}>Email</th>
                                    <th key={index}>Phone</th>
                                    <th key={index}>Score</th>
                                    <th key={index}>Address</th>
                                    <th key={index}>Status Code</th>
                                    <th key={index}>Company Type</th>
                                    <th key={index}>Main Industry Code</th>
                                    <th key={index}>Registered Capital</th>
                                    <th key={index}>Date of Incorporation</th>
                                    <th key={index}>Local Organization ID</th>
                                    <th key={index}>Company Secondary Names</th>
                                    <th key={index}>Risk Assessment</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th key={index}>{data.company_name}</th>
                                    <th key={index}>{data.vat ? <BsCheck /> : <BsX />}</th>
                                    <th key={index}>{data.email.hidden ? '' : data.email.email}</th>
                                    <th key={index}>{data.phone.hidden ? '' : data.phone.phone_number}</th>
                                    <th key={index}>{data.score}</th>
                                    <th key={index}>{`${data.address.street} ${data.address.number} ${data.address.zipcode} ${data.address.postdistrict} ${data.address.country}`}</th>
                                    <th key={index}>{data.status_code}</th>
                                    <th key={index}>{data.company_type.short}</th>
                                    <th key={index}>{data.main_industry_code.code}</th>
                                    <th key={index}>{`${data.registered_capital.value} ${data.registered_capital.currency}`}</th>
                                    <th key={index}>{data.date_of_incorporation}</th>
                                    <th key={index}>{data.local_organization_id.id}</th>
                                    <th key={index}>{getCompanySecondaryNames(data.company_secondary_names)}</th>
                                    <th key={index}>{data.risk_assessment}</th>
                                </tr>
                            </tbody>
                        </table>
                    </StyledTableContainer>
                    <HighlightsInformation companyId={data.local_organization_id} />
                    {/* <Management relations={Relations.filter(company => company.local_organization_id.id == data.local_organization_id.id).relations}/> */}
                </>
            )
            return result
        })

    }

    return (
        <>
            {renderResults()}
        </>
    )
}

export default GeneralInformation

