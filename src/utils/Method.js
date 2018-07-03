import {notification} from 'antd'

export const openNotificationWithIcon = (type,notimsg,notidesc) => {
    notification[type]({
      message: notimsg,
      description: notidesc,
    });
  };
