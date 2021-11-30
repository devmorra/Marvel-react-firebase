import React, {useState} from 'react';
import { useGetData } from '../../custom-hooks';
import { HeroForm, DataTable } from '..';

export const Profile = () =>{
    let {heroData, getData} = useGetData();
    console.log(heroData);
    return(
        <div>
            <h1>Hello</h1>
            <DataTable/>
            {/* <HeroForm></HeroForm> */}
        </div>
    )
}