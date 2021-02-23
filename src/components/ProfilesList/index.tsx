import React from 'react';

import { MdSelectAll, MdDone, MdDeleteSweep } from 'react-icons/md';

import formatName from '../../utils/formatName';
import formatLocation from '../../utils/formatLocation';

import { ProfileListContaier, 
         ProfileListItem, 
         ProfileListItemName, 
         ProfileListItemEmail, 
         ProfileListItemNumber, 
         ProfileListItemLocation , 
         ProfileListItemIcons, 
         ProfileListItemLink,
         ProfileListItemPhoto,
         ProfileListItemIntro
        } from './styles';

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

const ProfilesList: React.FC<IProfileList> = ( {data} ) => {
    return (
        <ProfileListContaier>
            {
                data.map(item => (
                    <ProfileListItem key={item.id}>
                            <ProfileListItemIntro>
                                <ProfileListItemPhoto src={`${item.photo}`}></ProfileListItemPhoto>
                                <ProfileListItemName>{formatName(item.name)}</ProfileListItemName>
                            </ProfileListItemIntro>
                            <ProfileListItemEmail>{item.email}</ProfileListItemEmail>
                            <ProfileListItemNumber>{item.number}</ProfileListItemNumber>
                            <ProfileListItemLocation>{formatLocation(item.location)}</ProfileListItemLocation>
                            <ProfileListItemIcons>
                                <ProfileListItemLink>
                                    <MdDeleteSweep href="#"/>
                                </ProfileListItemLink>
                                <ProfileListItemLink>
                                    <MdSelectAll href="#"/>
                                </ProfileListItemLink>
                                <ProfileListItemLink>
                                    <MdDone href="#"/>
                                </ProfileListItemLink>
                            </ProfileListItemIcons>
                    </ProfileListItem>
                ))
            }
        </ProfileListContaier>
    );
}

export default ProfilesList;