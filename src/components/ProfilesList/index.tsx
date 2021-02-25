import React from 'react';

import { MdSelectAll, MdDone, MdDeleteSweep } from 'react-icons/md';

import formatName from '../../utils/formatName';
import formatLocation from '../../utils/formatLocation';

import { ProfilesListContainer, ProfileListItem, ProfileListItemIcons } from './styles';

type ProfileListProps = {
        id?: string;
        photo: string,
        name: string;
        email: string;
        number: string;
        location: string;
        status: string;
};

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

                            <span>{item.email}</span>
                            <span>{item.number}</span>
                            <span>{formatLocation(item.location)}</span>

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
                }
            </main>
        </ProfilesListContainer>
    );
}

export default ProfilesList;