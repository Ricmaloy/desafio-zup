import { AsideContainer, MenuContainer, MenuItemLink } from './styles';

import { MdSelectAll, MdDoneAll,MdDeleteSweep } from 'react-icons/md';

// repassa para o elemento uma função responsável 
// por controlar as alterações nas categorias

type AsideProps = {
    onStatusClick: (status: string) => void;
}

const Aside = ({onStatusClick}: AsideProps) => {
    return (
        <AsideContainer>
            <MenuContainer>
                <MenuItemLink 
                    className="status-btn activated aberto"
                    href="/" 
                    onClick={(e) => {
                        e.preventDefault();
                        onStatusClick('aberto');
                    }
                }>
                    <MdSelectAll/>
                    <span>Todos</span>
                </MenuItemLink>

                <MenuItemLink 
                    className="status-btn atendido" 
                    href="/"  
                    onClick={(e) => {
                        e.preventDefault();
                        onStatusClick('atendido');
                    }
                }>
                    <MdDoneAll/>
                    <span>Atendidos</span>
                </MenuItemLink>

                <MenuItemLink 
                    className="status-btn negado" 
                    href="/" 
                    onClick={(e) => {
                        e.preventDefault();
                        onStatusClick('negado');
                    }
                }>
                    <MdDeleteSweep/>
                    <span>Lixeira</span>
                </MenuItemLink>
                
            </MenuContainer>
        </AsideContainer>
    );
}

export default Aside;