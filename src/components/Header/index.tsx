import LogoZup from '../../assets/logo-zup-branco.png';
import { FaUserCircle, FaSearch } from 'react-icons/fa';

import Input from '../../components/Input';

import {HeaderContainer, SearchBar} from './styles';

// repassa para o elemento uma função responsável 
// por controlar as alterações no campo de busca
type HeaderProps = {
    onSearchChange: (search: string) => void;
}

const Header = ({onSearchChange}:HeaderProps) => {
    return(
        <HeaderContainer>
            <img src={`${LogoZup}`} alt="Zup Logo" />
            <SearchBar>
                <FaSearch/>
                <Input 
                    type="text" 
                    placeholder="Buscar" 
                    onChange={(e) => onSearchChange(e.target.value)}
                />
            </SearchBar>
            <FaUserCircle/>
        </HeaderContainer>
    )
}

export default Header;