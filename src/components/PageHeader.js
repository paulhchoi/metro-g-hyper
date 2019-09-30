import React from 'react';
import {useStaticQuery, graphql } from 'gatsby';
import '../assets/sass/main.scss';

export default ({children}) => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        leadership
                    }
                }
            }
        `
    )
    return (
        <h1 class="major">{data.site.siteMetadata.leadership}</h1>
    )

}