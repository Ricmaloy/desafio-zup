import { useEffect, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import Aside from '../../components/Aside';
import ProfilesList from '../../components/ProfilesList';

import formatFilter from '../../utils/formatFilter';

import ProfilesDB from '../../repositories/profiles';

import { Grid, AsideContainer, ProfilesListContainer } from './styles';
import { Header } from '../../components/Header';

interface IData {
    id?: string;
    photo: string;
    name: string;
    email: string;
    number: string;
    location: string;
    status: string;
};

export default function List() {

    const [allData, setAllData] = useState<IData[]>([]);
    const [filterSearch, setFilterSearch] = useState({
        search: '',
        status: 'aberto',
    })

    useEffect(() => {
        const profiles = ProfilesDB;

        const filteredProfiles = profiles.filter(profile => formatFilter(profile, filterSearch.search.toLowerCase(), filterSearch.status));

        const formatedProfiles = filteredProfiles.map(profile => {
            return {
                id: uuidv4(),
                photo: profile.photo,
                name: profile.name,
                email: profile.email,
                number: profile.number,
                location: profile.location,
                status: profile.status,
            } 
        });
        
        setAllData(formatedProfiles);
    },[filterSearch.search, filterSearch.status]);

    const handleStatusClick = (status: string) => {
        
        document.querySelectorAll('.status-btn').forEach(el => el.classList.remove('activated'));
        document.querySelector(`.${status}`)?.classList.add('activated');

        setFilterSearch( filter => {
            filter.status = `${status}`;
            return {
                ...filter
            };
        })
    }

    const handleSearchChange = ( search: string ) => {

        setFilterSearch( filter => {
            filter.search = `${search}`;
            return {
                ...filter
            };
        })
    }

    return(
        <Grid>
            <Header
                onSearchChange={handleSearchChange}
            />
           

                <Aside
                    onStatusClick={handleStatusClick}
                />
            {/* </AsideContainer> */}

            <ProfilesListContainer>
                <ProfilesList data={allData} />
            </ProfilesListContainer>

        </Grid>
    );
}