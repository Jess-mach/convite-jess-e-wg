import { useState } from 'react';
import { Button } from '../../Button';
import { Navigation } from '../../Navigation';
import styles from './styles.module.css';

interface LandingPageProps {
  onNavigate?: (page: string) => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
    const [isFocused, setIsFocused] = useState(false);

    const handleStartFocus = () => {
        setIsFocused(true);
        setTimeout(() => {
            onNavigate?.('timer');
        }, 1000);
    };

    const features = [
        {
            icon: '⏱️',
            title: 'Timer Inteligente',
            description: 'Sessões de 25 minutos otimizadas para máxima produtividade'
        },
        {
            icon: '📊',
            title: 'Estatísticas Detalhadas',
            description: 'Acompanhe seu progresso e melhore seus hábitos'
        },
        {
            icon: '🎯',
            title: 'Foco Total',
            description: 'Interface minimalista para eliminar distrações'
        },
        {
            icon: '🔔',
            title: 'Notificações',
            description: 'Lembretes suaves para pausas e retomadas'
        }
    ];

    return (
        <div className={styles.landingContainer}>
            <Navigation onNavigate={onNavigate || (() => {})} />
            
            <main className={styles.mainContent}>
                <div className={styles.heroSection}>
                    <div className={styles.heroContent}>
                        <div className={styles.heroIcon}>🍅</div>
                        <h1 className={`${styles.heroTitle}`}>
                            Domine seu tempo,<br />
                            <span className={styles.gradientText}>domine sua vida</span>
                        </h1>
                        <p className={styles.heroDescription}>
                            Transforme sua produtividade com o Método Pomodoro. 
                            Foque intensamente por 25 minutos, descanse 5 minutos, 
                            e repita. Simples, eficaz, comprovado.
                        </p>
                        <div className={styles.ctaSection}>
                            <Button 
                                className={`${styles.ctaButton} ${isFocused ? styles.ctaButtonFocused : ''}`}
                                onClick={handleStartFocus}
                            >
                                {isFocused ? 'Iniciando...' : 'Começar a focar agora'}
                            </Button>
                            <p className={styles.ctaSubtext}>
                                ✨ Gratuito • Sem cadastro • Comece em segundos
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.featuresSection}>
                    <h2 className={styles.featuresTitle}>Por que escolher o Chronos?</h2>
                    <div className={styles.featuresGrid}>
                        {features.map((feature, index) => (
                            <div key={index} className={styles.featureCard}>
                                <div className={styles.featureIcon}>{feature.icon}</div>
                                <h3 className={styles.featureTitle}>{feature.title}</h3>
                                <p className={styles.featureDescription}>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.statsSection}>
                    <div className={styles.statItem}>
                        <div className={styles.statNumber}>25</div>
                        <div className={styles.statLabel}>minutos de foco</div>
                    </div>
                    <div className={styles.statItem}>
                        <div className={styles.statNumber}>5</div>
                        <div className={styles.statLabel}>minutos de pausa</div>
                    </div>
                    <div className={styles.statItem}>
                        <div className={styles.statNumber}>4</div>
                        <div className={styles.statLabel}>ciclos por sessão</div>
                    </div>
                </div>
            </main>

            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <p>Feito com ❤️ para maximizar sua produtividade</p>
                    <div className={styles.footerLinks}>
                        <button onClick={() => onNavigate?.('about')}>Sobre</button>
                        <button onClick={() => onNavigate?.('settings')}>Configurações</button>
                    </div>
                </div>
            </footer>
        </div>
    );
}
