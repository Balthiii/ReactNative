import { Image } from 'react-native';
import { Tabs } from 'expo-router';
import homeIcon from '../../assets/accueil.png'; 
import infoIcon from '../../assets/info.png'; 
import donationIcon from '../../assets/donation.png';
import legalIcon from '../../assets/legal.png'; 

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: "Home",
          tabBarIcon: () => (
            <Image source={homeIcon} style={{ width: 20, height: 20 }} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="info" 
        options={{ 
          title: "Info",
          tabBarIcon: () => (
            <Image source={infoIcon} style={{ width: 20, height: 20 }} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="donation" 
        options={{ 
          title: "Donation",
          tabBarIcon: () => (
            <Image source={donationIcon} style={{ width: 20, height: 20 }} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="legal" 
        options={{ 
          title: "Legal",
          tabBarIcon: () => (
            <Image source={legalIcon} style={{ width: 20, height: 20 }} />
          ),
        }} 
      />
    </Tabs>
  );
}