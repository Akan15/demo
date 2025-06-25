import React, { useEffect, useState } from 'react';
import { fetchNews } from '../services/newsService';

const NewsPage = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews().then((data) => {
      console.log('Пришло новостей:', data); // ✅ проверка в консоли
      setNews(data);
    });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Новости</h2>

      {/* ✅ Показываем "сырые" данные */}
      <pre className="text-xs bg-gray-100 p-2 rounded">
        {JSON.stringify(news, null, 2)}
      </pre>

      {/* ✅ Показываем текст, если массив пустой */}
      {news.length === 0 && (
        <p className="text-red-500 my-2">Нет новостей или идёт загрузка...</p>
      )}

      {/* ✅ Список новостей */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {news.map((item) => (
          <div key={item._id} className="border p-4 rounded shadow bg-white text-black">
            <h3 className="font-semibold">{item.title_ru}</h3>
            <p className="text-sm text-gray-600">{item.title_en}</p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 mt-2 block"
            >
              Читать новость →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
