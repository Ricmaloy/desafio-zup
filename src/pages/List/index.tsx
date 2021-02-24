import { useEffect, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import Input from '../../components/Input';
import Aside from '../../components/Aside';
import ProfilesList from '../../components/ProfilesList';

import formatFilter from '../../utils/formatFilter';

import ProfilesDB from '../../repositories/profiles';

import LogoZup from '../../assets/logo-zup-branco.png';
import { FaUserCircle, FaSearch } from 'react-icons/fa';


import { Grid, HeaderContainer, SearchBar, AsideContainer, ProfilesListContainer } from './styles';

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

    return(
        <Grid>
            <HeaderContainer>
                <img src={`${LogoZup}`} alt="Zup Logo" />
                <SearchBar>
                    <FaSearch/>
                    <Input 
                        type="text" 
                        placeholder="Buscar" 
                        onChange={(e) => (setFilterSearch( filter => {
                            filter.search = e.target.value;
                            return {
                                ...filter
                            };
                        }))}
                    />
                </SearchBar>
                <FaUserCircle />
            </HeaderContainer>
           
            <AsideContainer>
                <Aside
                    onStatusClick={handleStatusClick}
                />
            </AsideContainer>

            <ProfilesListContainer>
                <ProfilesList data={allData} />
            </ProfilesListContainer>

        </Grid>
    );
}