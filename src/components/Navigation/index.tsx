import { useState } from 'react';
import styles from './styles.module.css';

interface NavigationProps {
  onNavigate: (page: string) => void;
}

export function Navigation({ onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'timer', label: 'Timer', icon: '⏱️' },
    { id: 'stats', label: 'Estatísticas', icon: '📊' },
    { id: 'settings', label: 'Configurações', icon: '⚙️' },
    { id: 'about', label: 'Sobre', icon: 'ℹ️' }
  ];

  const handleMenuClick = (itemId: string) => {
    onNavigate(itemId);
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navigation}>
      <div className={styles.navContainer}>
        <div className={styles.logoSection}>
          <span className={styles.logoIcon}>🍅</span>
          <span className={styles.logoText}>Chronos</span>
        </div>

        {/* Desktop Menu */}
        <div className={styles.desktopMenu}>
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={styles.menuItem}
              onClick={() => handleMenuClick(item.id)}
            >
              <span className={styles.menuIcon}>{item.icon}</span>
              <span className={styles.menuLabel}>{item.label}</span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={styles.mobileMenuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={styles.mobileMenuItem}
              onClick={() => handleMenuClick(item.id)}
            >
              <span className={styles.menuIcon}>{item.icon}</span>
              <span className={styles.menuLabel}>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
