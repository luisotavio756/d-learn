import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Container } from './LanguageSelector.styles';
import { Text } from '..';
import flagEN from '../../../../public/images/en.png';
import flagES from '../../../../public/images/es.png';
import flagPT from '../../../../public/images/pt.png';

interface Language {
  code: string;
  name: string;
  icon: string;
}

export interface LanguageSelectorProps {
  size?: 'sm' | 'md' | 'lg';
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ size = 'md' }) => {
  const { i18n } = useTranslation();
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  let timeoutId; // Mudar de LET

  const languages: Language[] = [
    { code: 'pt', name: 'Português', icon: flagPT },
    { code: 'en', name: 'English', icon: flagEN },
    { code: 'es', name: 'Español', icon: flagES },
  ];

  const changeLanguageHandler = (code: string) => {
    if (i18n.language !== code) i18n.changeLanguage(code);
    setIsActiveMenu(false);
  };

  const handleMenuOpen = () => {
    setIsActiveMenu(true);
    clearTimeout(timeoutId);
  };

  const handleMenuClose = () => {
    timeoutId = setTimeout(() => {
      setIsActiveMenu(false);
    }, 300);
  };

  return (
    <Container size={size}>
      <div
        className="dropdown-btn"
        onMouseEnter={handleMenuOpen}
        onMouseLeave={handleMenuClose}
      >
        <img
          src={
            languages.find(language => language.code === i18n.language)?.icon
          }
          alt="..."
        />
      </div>
      <div
        className={`dropdown-content ${isActiveMenu ? 'active' : 'inactive'}`}
        onMouseEnter={handleMenuOpen}
        onMouseLeave={handleMenuClose}
      >
        <div className="dropdown-options">
          <ul>
            {languages.map(({ code, name }) => (
              <li key={code}>
                <button
                  type="button"
                  onClick={() => changeLanguageHandler(code)}
                >
                  <Text>{name}</Text>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default LanguageSelector;
