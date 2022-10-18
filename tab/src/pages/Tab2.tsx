import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { IonButton, IonCol, IonRow, IonSearchbar,} from '@ionic/react';
import { useState } from 'react';
import { CurrentWeather } from '../components/CurrentWeather';


const Tab2: React.FC = () => {
    const [search, setSearch] = useState("");
    const [currentWeather, setCurrentWeather] = useState(false);

    const performSearch = async () => {

        getAddress(search);
    }

    const getAddress = async (city: string) => {

        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=f93eb660b2424258bf5155016210712&q=${ city }&aqi=no`);
        const data = await response.json();

        if (data && data.current && data.location) {

            setCurrentWeather(data);
        }
    }
  // @ts-ignore
    return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Search</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Search</IonTitle>
          </IonToolbar>
        </IonHeader>
          <IonRow className="ion-justify-content-center ion-margin-top ion-align-items-center">
              <IonCol size="7">
                  <IonSearchbar placeholder="Try 'London'" animated value={search} onIonChange={name => setSearch(name.target.value!)} />
              </IonCol>

              <IonCol size="5">
                  <IonButton expand="block" className="ion-margin-start ion-margin-end" onClick={performSearch}>Search</IonButton>
              </IonCol>
          </IonRow>

          <div style={{marginTop: "-0.8rem"}}>
              {currentWeather ? <CurrentWeather currentWeather={currentWeather} /> : <h3 className="ion-text-center">Your search result will appear here</h3>}
          </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
