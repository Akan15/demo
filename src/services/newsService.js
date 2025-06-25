export async function fetchNews() {
  try {
    const response = await fetch('http://localhost:8080/news');
    const data = await response.json();
    // сортировка по position
    return data.sort((a, b) => a.position - b.position);
  } catch (error) {
    console.error('Ошибка загрузки новостей:', error);
    return [];
  }
}
