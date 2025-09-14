import { useState } from 'react';
import { LandingPage } from './components/pages/LandingPage';

import './styles/theme.css'
import './styles/global.css'

export function App () {
    const [currentPage, setCurrentPage] = useState('landing');

    const handleNavigate = (page: string) => {
        setCurrentPage(page);
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'timer':
                return (
                    <div style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        height: '100vh',
                        color: 'var(--text-default)',
                        fontSize: '2rem'
                    }}>
                        🍅 Timer Page - Em desenvolvimento
                    </div>
                );
            case 'stats':
                return (
                    <div style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        height: '100vh',
                        color: 'var(--text-default)',
                        fontSize: '2rem'
                    }}>
                        📊 Estatísticas - Em desenvolvimento
                    </div>
                );
            case 'settings':
                return (
                    <div style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        height: '100vh',
                        color: 'var(--text-default)',
                        fontSize: '2rem'
                    }}>
                        ⚙️ Configurações - Em desenvolvimento
                    </div>
                );
            case 'about':
                return (
                    <div style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        height: '100vh',
                        color: 'var(--text-default)',
                        fontSize: '2rem'
                    }}>
                        ℹ️ Sobre - Em desenvolvimento
                    </div>
                );
            default:
                return <LandingPage onNavigate={handleNavigate} />;
        }
    };

    return renderPage();
}