// Отправка обратной связи
export const submitFeedback = async (feedbackData) => {
  try {
    console.log('Submitting feedback data:', feedbackData);

    const response = await fetch('/api/request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(feedbackData),
    });

    console.log('Response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error response:', errorText);
      throw new Error('Failed to submit feedback');
    }

    const result = await response.text(); // backend возвращает текст, не JSON
    console.log('Success response:', result);
    return result;
  } catch (error) {
    console.error('Error submitting feedback:', error);
    throw error;
  }
};

// Получение списка обратной связи (если реализовано на backend)
export const getFeedback = async () => {
  try {
    const response = await fetch('/api/feedback/list');

    if (!response.ok) {
      throw new Error('Failed to fetch feedback');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching feedback:', error);
    throw error;
  }
};
