"use client"; 

import React from "react";



const DashboardView = ({insights}) => {

    // below function is to draw graphs like the pictorial representation
    const salaryData = insights.salaryRanges.map((range)=> ({
        name: range.role,
        min: range.min / 1000,
        max: range.max / 1000,
        median: range.median / 1000,

    }))
     return 
        <div>DashboardView</div>;
     
};

export default DashboardView