import { useEffect, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import Aside from '../../components/Aside';
import ProfilesList from '../../components/ProfilesList';
import Header from '../../components/Header';

import formatFilter from '../../utils/formatFilter';

import ProfilesDB from '../../repositories/profiles';

import { Grid } from './styles';

interface IData {
    id?: string;
    photo: string;
    name: string;
    email: string;
    number: string;
    location: string;
    status: string;
};

const List = () => {

    // hooks usados para guardar e atualizar os dados da 'busca no banco' 
    const [allData, setAllData] = useState<IData[]>([]);
    const [filterSearch, setFilterSearch] = useState({
        search: '',
        status: 'aberto',
    })

    // hook de "efeito colateral" que vai renderizar a lista de perfis de usuários
    // baseado no campo de busca e na "categoria" ( Todos, Atendidos, Lixeira )
    // selecionada. A cada alteração feita em nesses elementos a função abaixo
    // é disparada e a lista de perfis é renderizada novamente baseada na
    // alteração feita
    useEffect(() => {

        // armazena todos os dados do "banco de dados"
        const profiles = ProfilesDB;

        // filtra os perfis baseados no campo de busca e na 'categoria' selecionada
        // a função formatFilter() é responsável por garantir que a filtragem abranja 
        // todos os campos do perfil ( nome, email, telefone, cidade, estado )
        const filteredProfiles = profiles.filter(profile => formatFilter(profile, filterSearch.search.toLowerCase(), filterSearch.status));

        // percorre todos os perfis já filtrados e os retorna com todos os campos 
        // já presentes além de um identificador único 
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
        
        // atualiza a lista de perfis a serem dispostos
        setAllData(formatedProfiles);
    },[filterSearch.search, filterSearch.status]);

    // função responsável por controlar a alteração da categoria selecionada
    const handleStatusClick = (status: string) => {
        
        // remove a classe css responsável pela cor de destaque da categoria selecionada
        document.querySelectorAll('.status-btn').forEach(el => el.classList.remove('activated'));

        // adiciona a classe css responsável pela cor de destaque da categoria selecionada
        document.querySelector(`.${status}`)?.classList.add('activated');

        // atualiza a variavel filterSearch com o nova categoria selecionada 
        setFilterSearch( filter => {
            filter.status = `${status}`;
            return {
                ...filter
            };
        });
    };


    // função responsável por controlar a alteração do campo de busca
    const handleSearchChange = ( search: string ) => {
        
        // atualiza a variavel filterSearch com o valor do campo de busca
        setFilterSearch( filter => {
            filter.search = `${search}`;
            return {
                ...filter
            };
        });
    };

    return(
        <Grid>
            <Header onSearchChange={handleSearchChange} />
           
            <Aside onStatusClick={handleStatusClick} />

            <ProfilesList data={allData} />
        </Grid>
    );
}

export default List;