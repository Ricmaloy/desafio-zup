import { useEffect, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import Input from '../../components/Input';
import Aside from '../../components/Aside';
import ProfilesList from '../../components/ProfilesList';

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
    const [search, setSearch] = useState('');

    useEffect(() => {
        const profiles = ProfilesDB;

        console.log(search);

        const filteredProfiles = profiles.filter(profile => profile.name.includes(search) && profile.status === 'aberto');

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
    },[search]);

    return(
        <Grid>

            <HeaderContainer>
                <img src={`${LogoZup}`} alt="Zup Logo" />
                <SearchBar>
                    <FaSearch/>
                    <Input 
                        type="text" 
                        placeholder="Buscar" 
                        onChange={(e) => (setSearch(e.target.value))} 
                    />
                </SearchBar>
                <FaUserCircle />
            </HeaderContainer>

            <AsideContainer>
                <Aside/>
            </AsideContainer>

            <ProfilesListContainer>
                <ProfilesList data={allData} />
            </ProfilesListContainer>

        </Grid>
    );
}