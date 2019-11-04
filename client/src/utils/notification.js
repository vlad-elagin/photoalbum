import { getNotificationsContext } from "svelte-notifications";

const notify = (type, message) => {
  if (type !== 'success' && type !== 'danger') {
    return;
  }

  const { addNotification } = getNotificationsContext();

  if (Array.isArray(message)) {
    message.forEach((m) => {
      addNotification({
        text: m.message,
        position: "bottom-right",
        removeAfter: 3 * 1000,
        type,
      });
    })
  } else {
    addNotification({
      text: message,
      position: "bottom-right",
      removeAfter: 3 * 1000,
      type,
    });
  }
};

export default notify;
