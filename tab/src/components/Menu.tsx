import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import './Menu.css';
import MenuLogo from '../assets/grid-outline.svg';
import WelcomeLogo from '../assets/accessibility-outline.svg';
import ProfileLogo from '../assets/people-circle-outline.svg';
import SettingsLogo from '../assets/settings-outline.svg';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Menu',
    url: '/page/Menu',
    iosIcon: MenuLogo,
    mdIcon: MenuLogo
  },
  {
    title: 'Welcome',
    url: '/page/Welcome',
    iosIcon: WelcomeLogo,
    mdIcon: WelcomeLogo
  },
  {
    title: 'Profile',
    url: '/page/Profile',
    iosIcon: ProfileLogo,
    mdIcon: ProfileLogo
  },
  {
    title: 'Settings',
    url: '/page/Settings',
    iosIcon: SettingsLogo,
    mdIcon: SettingsLogo
  },
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Welcome to the application of Thomas Meurice</IonListHeader>
          <IonNote>thomas.meurice@epitech.eu</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
