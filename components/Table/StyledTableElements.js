import styled from 'styled-components'

export const StyledTableContainer = styled.div `
    .styled-table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    }

    .styled-table thead tr {
    background-color: ${({classification})=> 
    classification == 'negative' && 'red' || 
    classification == 'positive' && 'green' || 
    classification == 'neutral' && 'blue' || 
    !classification && '#009879'
    } ;
    color: #ffffff;
    text-align: center;
    }

    .styled-table th,
    .styled-table td {
    padding: 12px 15px;
    }
`