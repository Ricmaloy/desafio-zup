import { MenuContainer, MenuItemLink } from './styles';

import { MdSelectAll, MdDoneAll,MdDeleteSweep } from 'react-icons/md';


export default function Aside() {
    return (
        <MenuContainer>

            <MenuItemLink className="activated" href="/">
                <MdSelectAll/>
                <span>Todos</span>
            </MenuItemLink>

            <MenuItemLink href="/">
                <MdDoneAll/>
                <span>Atendidos</span>
            </MenuItemLink>

            <MenuItemLink href="/">
                <MdDeleteSweep/>
                <span>Lixeira</span>
            </MenuItemLink>
            
        </MenuContainer>
    );
}