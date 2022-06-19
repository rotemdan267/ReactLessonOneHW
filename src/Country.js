import React from "react";

export default class Country extends React.Component {

    countriesArrays = [];

    constructor() {
        super();
        this.countriesArrays = this.getCountries();
    }

    render() {
        return (
            <ul>
                {
                    this.countriesArrays.map((c) => <li>[{c.CountryCode}] - {c.CountryName} - {c.Capital}</li>)
                }
            </ul>
        )
    }


    getCountries() {
        return [
            {
                CountryCode: 123456,
                CountryName: "Israel",
                Capital: "Jerusalem"
            },
            {
                CountryCode: 456789,
                CountryName: "France",
                Capital: "Paris"
            },
            {
                CountryCode: 123789,
                CountryName: "USA",
                Capital: "Washington dc"
            },
            {
                CountryCode: 654321,
                CountryName: "England",
                Capital: "London"
            },
        ]
    }
}