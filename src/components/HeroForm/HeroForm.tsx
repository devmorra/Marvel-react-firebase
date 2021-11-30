import React from 'react';
// import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
// import { chooseName } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { Button } from '@mui/material';

import { serverCalls } from '../../api';

import { useGetData } from '../../custom-hooks';

interface HeroFormProps {
    id?:string;
    data?:{}
}


export const HeroForm = (props:HeroFormProps) => {

    let { heroData, getData } = useGetData();
    // const store = useStore()
    const { register, handleSubmit } = useForm({ })

    const onSubmit = async (data:any, event:any) => {
        // console.log(props.id)

        if( props.id!){
            await serverCalls.update(props.id!, data)
            console.log(`Updated:${data} ${props.id}`)
            window.location.reload()
            event.target.reset();
        } else {
            await serverCalls.create(data)
            window.location.reload()
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Hero Name</label>
                    <Input {...register('name')} name="name" placeholder='Name' />
                </div>
                <div>
                    <label htmlFor="super_power">Superpower</label>
                    <Input {...register('super_power')} name="super_power" placeholder="Superpower"/>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <Input {...register('description')} name="description" placeholder="Description"/>
                </div>
                <div>
                    <label htmlFor="comics_appeared_in"># of comic appearances</label>
                    <Input {...register('comics_appeared_in')} name="comics_appeared_in" placeholder="# of comic appearances"/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}