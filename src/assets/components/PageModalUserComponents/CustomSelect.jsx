import React, { useState, useEffect } from 'react';
import './EditProfileModal.css';

const CustomSelect = ({ defaultValue, onChange }) => {
    const [selectedColor, setSelectedColor] = useState(defaultValue);
    const [selectedLabel, setSelectedLabel] = useState(''); // Armazena o nome da cor selecionada
    const [isOpen, setIsOpen] = useState(false); // Estado para controlar a abertura do dropdown

    const options = [
        { value: '#FF0000', label: 'Vermelho', icon: 'bi bi-pencil-fill', color: '#FF0000' },
        { value: '#FF8700', label: 'Laranja', icon: 'bi bi-droplet-fill', color: '#FF8700' },
        { value: '#FFD300', label: 'Amarelo Claro', icon: 'bi bi-sun', color: '#FFD300' },
        { value: '#DEFF0A', label: 'Amarelo', icon: 'bi bi-check-circle-fill', color: '#DEFF0A' },
        { value: '#A1FF0A', label: 'Verde Claro', icon: 'bi bi-tree', color: '#A1FF0A' },
        { value: '#0AFF99', label: 'Verde Água', icon: 'bi bi-droplet', color: '#0AFF99' },
        { value: '#0AEFFF', label: 'Ciano', icon: 'bi bi-cloud-sun', color: '#0AEFFF' },
        { value: '#147DF5', label: 'Azul', icon: 'bi bi-water', color: '#147DF5' },
        { value: '#580AFF', label: 'Roxo', icon: 'bi bi-star', color: '#580AFF' },
        { value: '#BE0AFF', label: 'Rosa', icon: 'bi bi-heart', color: '#BE0AFF' },
    ];

    // Define o valor inicial
    useEffect(() => {
        const selectedOption = options.find(opt => opt.value === defaultValue);
        if (selectedOption) {
            setSelectedLabel(selectedOption.label);
        }
    }, [defaultValue]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedColor(option.value);
        setSelectedLabel(option.label); // Atualiza o nome da cor selecionada
        setIsOpen(false); // Fecha o dropdown após selecionar uma opção
        onChange(option.value); // Chama a função onChange passada como prop para informar o valor ao componente pai
    };

    return (
        <div className="input-group">
            <label>Cor do Nome</label>
            <div
                className="dropdown"
                onClick={toggleDropdown}
                style={{
                    cursor: 'pointer',
                    padding: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                }}
            >
                {/* Exibe o ícone e nome da cor selecionada */}
                {selectedLabel ? (
                    <>
                        <i
                            className={
                                options.find((opt) => opt.value === selectedColor)?.icon
                            }
                            style={{
                                color: selectedColor,
                                fontSize: '14px',
                                marginRight: '5px',
                            }}
                        ></i>
                        <span style={{ fontSize: '14px' }}>{selectedLabel}</span>
                    </>
                ) : (
                    <span style={{ fontSize: '14px' }}>Selecione uma cor</span>
                )}
            </div>
            {isOpen && (
                <div className="dropdown-menu">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className="dropdown-item"
                            onClick={() => handleOptionClick(option)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                fontSize: '12px',
                                padding: '5px 10px',
                                cursor: 'pointer',
                            }}
                        >
                            <i
                                className={option.icon}
                                style={{
                                    color: option.color,
                                    fontSize: '14px',
                                    marginRight: '5px',
                                }}
                            ></i>
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomSelect;
