import React from 'react'
import MenuItem from './menuItem.js'
import MenuTree from './menuTree'

export default function menu() {
    return (
        <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <MenuItem path="/" label='Dashboard' icon="tachometer-alt" />
                <MenuTree label="Cadastros" icon="database">
                    <MenuItem path="/paciente" label="Paciente" icon="head-side-mask" marginLeft={20}/>
                    <MenuItem path="/medico" label="Médico" icon="user-md" marginLeft={20}/>
                    <MenuItem path="/usuario" label="Usuário" icon="user-nurse" marginLeft={20}/>
                </MenuTree>                
                <MenuTree label="Autorizações" icon="hand-holding-medical">
                    <MenuItem path="/autorizacoes/simples" icon="file-medical-alt" label="Exames simples" marginLeft={20}/>
                    <MenuItem path="/autorizacoes/internacao" icon="hospital-alt" label="Internação" marginLeft={20}/>
                </MenuTree>
            </ul>
        </nav>
    )
}