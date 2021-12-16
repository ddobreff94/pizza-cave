import { useNotificationContext } from '../../../contexts/NotificationContext';
import './Notification.scss';

const Notification = () => {
    const { notification, hideNotification } = useNotificationContext();

    if (!notification.show) {
        return null;
    }

    return (
        <div className={'notification notification--' + notification.type} onClose={hideNotification}>
            <p>
                {notification.message}
            </p>
        </div>
    );
};

export default Notification;