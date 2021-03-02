type searchTextProps = {
    id?: string;
    photo: string;
    name: string;
    email: string;
    number: string;
    location: string;
    status: string;
}


const formatFilter = ( profile: searchTextProps, searchText: string, category: string )=> {
    
    // função que verifica se o que foi digitado no campo de busca
    // consta em algum dos campos do usuário e se a vategoria ao
    // qual ele esta inserido é igual a que esta selecionada
    if( (profile.name.includes(searchText) || 
        profile.email.includes(searchText) ||
        profile.number.includes(searchText) ||
        profile.location.includes(searchText)) &&
        profile.status === category
    ) return true;

    return false;
}

export default formatFilter;