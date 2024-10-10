import NotificationItem from "./NotificationItem";
import Pic from '../../img/profile/profile3.png';
import Pic1 from '../../img/profile/profile4.png';

function NotificationFeed() {
  return (
    <>
    <NotificationItem 
    userProfile={Pic}
    userName="Alex_pindaiba"
    textNotification="Começou a seguir você."
    timeAgo="2h"
    />
    <NotificationItem 
    userProfile={Pic1}
    userName="Fernando_pisadinha"
    textNotification="Começou a seguir você."
    timeAgo="1d"
    />
    </>
  );
}

export default NotificationFeed;