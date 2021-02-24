import styled from 'styled-components';

export const ProfileListContaier = styled.div`

    width: 90%;
    height: 90%;

    border-radius: 5px;

    margin-top: 5%;

    overflow-y: scroll;

    background-color: #fff;

    box-shadow: 1px 1px 10px 3px rgba(0,0,0, .2);
`;

export const ProfilesListContainer = styled.main`
    
`;


export const ProfileListItem = styled.div`
    width: 100%;
    height: 70px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    color: #a3a3a3;
    font-size: 14px;

    padding: 0 15px;
    
    &:not(:first-child) {
        border-top: 1px solid #a3a3a3;
    }

    > * {
        width: 20%;
    }
`;

export const ProfileListItemIntro = styled.div`
    display: flex;
    align-items: center;
`;


export const ProfileListItemPhoto = styled.img`
    width: 50px;
    height: 50px;

    border-radius: 50%;
`;

export const ProfileListItemName = styled.span`
    color: #282828;
    font-weight: bold;

    margin-left: 15px;
`;

export const ProfileListItemEmail = styled.span`
    
`;
export const ProfileListItemNumber = styled.span`
    
`;
export const ProfileListItemLocation = styled.span`
    
`;

export const ProfileListItemIcons = styled.div`
    width: 100px;

    display: flex;
    justify-content: center;

    font-size: 25px;
`;

export const ProfileListItemLink = styled.a`
    cursor: pointer;

    transition: all .3s;

    &:not(:first-child){
        margin-left: 10px;
    }

    &:hover {
        color: #8dc63f;
    }
`;

