import React from 'react';
import './StatusBar.css'; // Archivo CSS para estilos

const StatusBar = ({ level }) => {
    return (
        <div className="status-bar">
            <div className="level-indicator" style={{ width: `${level}%` }}></div>
        </div>
    );
};

export default StatusBar;