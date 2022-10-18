import {
    IonButtons,
    IonContent,
    IonHeader,
    IonImg, IonList,
    IonMenuButton,
    IonPage,
    IonText, IonThumbnail,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import {useParams} from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
import {Redirect, Route} from 'react-router-dom';
import {
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
} from '@ionic/react';
import {ellipse, square, triangle, warning} from 'ionicons/icons';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import WeatherImage from '../assets/sunny-outline.svg';
import {IonReactRouter} from "@ionic/react-router";
import React from 'react'
import WelcomeImage from '../assets/WELCOME-Graphics-5632158-1.jpg';
import SearchImage from '../assets/search-outline.svg';
import PictureImage from '../assets/image-outline.svg';
import meImage from '../assets/me.jpg';

const Page: React.FC = () => {

    let {name} = useParams<{ name: string; }>();

    if (name === "Menu") {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton/>
                        </IonButtons>
                        <IonTitle>{name}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen>
                    <IonHeader collapse="condense">
                        <IonToolbar>
                            <IonTitle size="large">{name}</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonReactRouter>
                        <IonTabs>
                            <IonRouterOutlet>
                                <Route exact path="/tab1">
                                    <Tab1/>
                                </Route>
                                <Route exact path="/tab2">
                                    <Tab2/>
                                </Route>
                                <Route path="/tab3">
                                    <Tab3/>
                                </Route>
                                <Route exact path="/">
                                    <Redirect to="/tab1"/>
                                </Route>
                            </IonRouterOutlet>
                            <IonTabBar slot="bottom">
                                <IonTabButton tab="tab1" href="/tab1">
                                    <IonIcon icon={WeatherImage}/>
                                    <IonLabel>Weather</IonLabel>
                                </IonTabButton>
                                <IonTabButton tab="tab2" href="/tab2">
                                    <IonIcon icon={SearchImage}/>
                                    <IonLabel>Search</IonLabel>
                                </IonTabButton>
                                <IonTabButton tab="tab3" href="/tab3">
                                    <IonIcon icon={PictureImage}/>
                                    <IonLabel>Picture</IonLabel>
                                </IonTabButton>
                            </IonTabBar>
                        </IonTabs>
                    </IonReactRouter>
                </IonContent>
            </IonPage>
        );
    }
    if (name === "Welcome") {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton/>
                        </IonButtons>
                        <IonTitle>{name}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen>
                    <IonHeader collapse="condense">
                        <IonToolbar>
                            <IonTitle size="large">{name}</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonImg class="image" src={WelcomeImage}/>
                    <IonText class={"text"}>
                        <h1 >Welcome to my application, You can see all the things I did in this application</h1>
                    </IonText>
                </IonContent>
            </IonPage>
        );
    } if (name === "Profile") {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton/>
                        </IonButtons>
                        <IonTitle>{name}</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent fullscreen>
                    <IonHeader collapse="condense">
                        <IonToolbar>
                            <IonTitle size="large">{name}</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonImg class="image" src={meImage}/>
                    <IonText class={"text"}>
                        <h1 >Hi I'm Thomas, I'm a french student at Epitech doing my 4th Year at Laurea as an exchange student. I'm studying IT and I love it!</h1>
                    </IonText>
                </IonContent>
            </IonPage>
        );
    } else {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton/>
                        </IonButtons>
                        <IonTitle>{name}</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent fullscreen>
                    <IonHeader collapse="condense">
                        <IonToolbar>
                            <IonTitle size="large">{name}</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <ExploreContainer name={name}/>
                </IonContent>
            </IonPage>
        );
    }
};

export default Page;
