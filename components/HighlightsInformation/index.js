import React, { useEffect, useState } from 'react'
import highlightsData from '../../data/highlights.json'
import { StyledTableContainer } from '../Table/StyledTableElements'

const HighlightsInformation = ({ companyId }) => {

    const [highlights, setHighlights] = useState()

    useEffect(() => {
        let companyHighlights = highlightsData.find(highlights => highlights.local_organization_id.id === companyId.id && highlights.local_organization_id.country === companyId.country)
        setHighlights(companyHighlights.highlights)
    }, [])

    const renderHighLights = (classification) => {
        if (highlights) {
            return Object.keys(highlights).sort(
                (a, b) => (highlights[a].weight > highlights[b].weight) ? 1 : ((highlights[b].weight > highlights[a].weight) ? -1 : 0)
            ).map(key => {
                if (highlights[key].classification == classification) {
                    return (
                        <>
                            <StyledTableContainer classification={classification}>
                                <table class="styled-table">
                                    <thead>
                                        <tr>
                                            <th >Title</th>
                                            <th >Message</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th >{highlights[key].title}</th>

                                            <th >{highlights[key].message}</th>
                                        </tr>
                                    </tbody>
                                </table>
                            </StyledTableContainer>
                        </>
                    )
                }
            })
        }
    }

    return (
        <>
            <h1> HighLights </h1>
            <div>
                <h2> Negative </h2>
                {renderHighLights('negative')}
            </div>
            <div>
                <h2> Positive </h2>
                {renderHighLights('positive')}
            </div>
            <div>
                <h2> Neutral </h2>
                {renderHighLights('neutral')}
            </div>
        </>
    )
}

export default HighlightsInformation
