import React from 'react';

import { MdSelectAll, MdDone, MdDeleteSweep } from 'react-icons/md';

import formatName from '../../utils/formatName';
import formatLocation from '../../utils/formatLocation';

import { ProfilesListContainer, ProfileListItem, ProfileListItemIcons } from './styles';

// tipo dos dados que irá compor o perfil de um usuário
type ProfileListProps = {
    id?: string;
    photo: string,
    name: string;
    email: string;
    number: string;
    location: string;
    status: string;
};

// tipo de dado que o componente irá receber, uma lista de usuários 
// cada um de acordo com a tipagem acima
interface IProfileList {
    data: ProfileListProps[];
}

const ProfilesList = ( {data}:IProfileList ) => {
 
    return (
        <ProfilesListContainer>
            <main>
                {
                data.map(item => (
                    <ProfileListItem key={item.id}>
                        
                        <div>
                            <img src={`${item.photo}`} alt="User"></img>
                            <p>{formatName(item.name)}</p>
                        </div>

                        <p>{item.email}</p>
                        <p>{item.number}</p>
                        <p>{formatLocation(item.location)}</p>

                        <ProfileListItemIcons>
                            <span>
                                <MdDeleteSweep href="#"/>
                            </span>
                            <span>
                                <MdSelectAll href="#"/>
                            </span>
                            <span>
                                <MdDone href="#"/>
                            </span>
                        </ProfileListItemIcons>

                    </ProfileListItem>
                ))
                };
            </main>
        </ProfilesListContainer>
    );
}

export default ProfilesList;