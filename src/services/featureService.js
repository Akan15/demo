export const fetchFeatures = async () => {
  const res = await fetch("/api/feature");
  if (!res.ok) throw new Error("Ошибка загрузки возможностей");
  return await res.json();
};
