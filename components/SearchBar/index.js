import React, { useState } from 'react'
import { InputContainer, Input, Icon } from "./SearchBarElements"
import companyData from "../../data/companies.json"
import GeneralInformation from '../GeneralInformation'


const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [companyDataByName, setCompanyDataByName] = useState()

    const handleChange = (event) => {
        setSearchTerm(event.target.value)
        search()
    }

    const search = () => {
        const companiesByName = companyData.filter(
            (company) => company.company_name.toLowerCase() === searchTerm.toLocaleLowerCase(),
        )
        if(companiesByName) {
            setCompanyDataByName(companiesByName)
        }
    }

    const handleKeyPress = (event) => {
        if(event && event.key === 'Enter') {
            search()
        }
    }

    return (
        <>
            <InputContainer className={"inputWithIcon"}>
                <Input
                    type="text"
                    value={searchTerm}
                    onChange={handleChange}
                    placeholder="Search by complete name"
                    onKeyDown={event => handleKeyPress(event)}
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="36px"
                    height="36px"
                    onClick={search}
                >
                    <path d="M 13.261719 14.867188 L 15.742188 17.347656 C 15.363281 18.070313 15.324219 18.789063 15.722656 19.1875 L 20.25 23.714844 C 20.820313 24.285156 22.0625 23.972656 23.015625 23.015625 C 23.972656 22.058594 24.285156 20.820313 23.714844 20.25 L 19.191406 15.722656 C 18.789063 15.324219 18.070313 15.363281 17.347656 15.738281 L 14.867188 13.261719 Z M 8.5 0 C 3.804688 0 0 3.804688 0 8.5 C 0 13.195313 3.804688 17 8.5 17 C 13.195313 17 17 13.195313 17 8.5 C 17 3.804688 13.195313 0 8.5 0 Z M 8.5 15 C 4.910156 15 2 12.089844 2 8.5 C 2 4.910156 4.910156 2 8.5 2 C 12.089844 2 15 4.910156 15 8.5 C 15 12.089844 12.089844 15 8.5 15 Z" />
                </svg>
            </InputContainer>
            <GeneralInformation dataToDisplay = {companyDataByName}/>
        </>
    )
}

export default SearchBar