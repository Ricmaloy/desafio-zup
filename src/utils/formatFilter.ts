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

    if( (profile.name.includes(searchText) || 
        profile.email.includes(searchText) ||
        profile.number.includes(searchText) ||
        profile.location.includes(searchText)) &&
        profile.status === category
    ) return true

    return false
}

export default formatFilter;