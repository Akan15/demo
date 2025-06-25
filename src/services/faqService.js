export const fetchFAQs = async () => {
  const res = await fetch("/api/faq");
  if (!res.ok) throw new Error("Ошибка загрузки FAQ");
  return await res.json();
};
